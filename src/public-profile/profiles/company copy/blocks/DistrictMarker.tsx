import { useLeafletContext } from "@react-leaflet/core"
import React, { useCallback, useContext, useEffect, useRef, useState } from "react"
import { Feature } from "geojson"
// import { Feature}
import L, { StyleFunction } from "leaflet"
import _ from "lodash"

import { IColorMetadata, IColorRange, IComparisonColorRange, ILeafletData, IPopupContent, IPopupData, IStandardColorRange } from "./interfaces/global"

import { FilterContext } from "../ProfileCompanyContent"

import provinceList from "../../../../media/geojson/province/list.json"
import useMapColorRange from "../../../../hooks/useMapColorRange"

interface ILayerGroupList {
  [province: string]: L.FeatureGroup
}

interface IMarkerLayer {
  [id: string]: L.Marker
}

interface IProvinceProps {
  enabled: boolean

  colorList: Array<IStandardColorRange>
  colorMetadata: IColorMetadata
  mapData: ILeafletData
  popupData: IPopupData

  setSelectedKabupaten: (kabupaten: string) => void
}

const GEOJSON_KEY = "KDPKAB"
const formatter = new Intl.NumberFormat('id-ID')

function DistrictMarker({ mapData, popupData, enabled, colorList, colorMetadata, setSelectedKabupaten }: IProvinceProps) {
  const context = useLeafletContext()
  // const { calculateStandardColorRange } = useMapColorRange()

  const { filterProvinsi } = useContext(FilterContext)

  const mapDataRef = useRef<ILeafletData>(mapData)
  const colorListRef = useRef<Array<IStandardColorRange>>(colorList)
  const colorMetadataRef = useRef<IColorMetadata>(colorMetadata)
  const popupDataRef = useRef<IPopupData>(popupData)

  const layerGroupRef = useRef<L.LayerGroup>(new L.LayerGroup())
  const markerLayerGroupRef = useRef<L.LayerGroup>(new L.LayerGroup())
  const textLabelLayerGroupRef = useRef<L.LayerGroup>(new L.LayerGroup())

  const districtGeoJSONLayerListRef = useRef<ILayerGroupList>({})
  const districtMarkerLayerListRef = useRef<ILayerGroupList>({})

  const markerLayerListRef = useRef<IMarkerLayer>({})

  const dangerMarkerRef = useRef<L.Icon>(L.icon({
    iconUrl: "/assets/gif/map_marker_urgent.gif",
    iconSize: [15, 50],
    iconAnchor: [7.5, 50]
  }))
  const warningMarkerRef = useRef<L.Icon>(L.icon({
    iconUrl: "/assets/gif/map_marker_medium.gif",
    iconSize: [15, 50],
    iconAnchor: [7.5, 50]
  }))
  const successMarkerRef = useRef<L.Icon>(L.icon({
    iconUrl: "/assets/gif/map_marker_low.gif",
    iconSize: [15, 50],
    iconAnchor: [7.5, 50]
  }))

  // Set styling for layer based on the current map data
  const setLayerStyle = useCallback((feature: Feature) => {
    if (feature.properties) {
      const key = feature.properties[GEOJSON_KEY].replace(".", "")
      const d = mapDataRef.current[key] || 0
  
      // Now based on the color list range we render the color
      let applicableColor = "#DDD"

      return {
        color: "#000",
        weight: 0.4,
        fillColor: applicableColor,
        fillOpacity: 0.8,
      }
    }

    return {}
  }, [mapData])

  // Set popup for a layer
  const setPopupContent = useCallback((layer: L.Layer) => {
    if ("feature" in layer) {
      const feature: Feature = layer.feature as Feature

      // Create popup object
      const popupContent = L.DomUtil.create("div")
      popupContent.innerHTML += `
        <div style="margin-bottom: 6px;">
          <b>${_.escape(feature?.properties?.WADMKK)}</b>
        </div>
      `

      if (popupDataRef.current) {
        const key = feature?.properties?.[GEOJSON_KEY].replace(".", "")
        const data = popupDataRef.current[key]
        
        if (data) {
          for (const pd of data) {
            popupContent.innerHTML += `
              <div>
                <span><b>${pd.title}:</b></span>
                \t\t
                <span>${formatter.format(pd.value)}${pd.percentage ? "%" : ""}</span>
              </div>
            `
          }
        }
      }

      // Unbind the popup first
      layer.unbindPopup()
      layer.bindPopup(popupContent)
    }
  }, [mapData, popupData])

  // Set a text label for a layer
  const setTextLabel = useCallback((layer) => {
    const bounds = layer.getBounds()
    const center = bounds.getCenter()

    const textLabel = L.marker(center, {
      icon: L.divIcon({
          className: 'text-labels',
          html: `${_.escape(layer.feature.properties.WADMKK)}`
      }),
      zIndexOffset: 1000
    })

    // Add the text label into the text label group
    if (textLabelLayerGroupRef.current) {
      textLabel.addTo(textLabelLayerGroupRef.current)
    }
  }, [])

  // Set events for a layer
  const setEvents = useCallback((district: string) => (layer) => {
    layer.on("click", function () {
      setSelectedKabupaten(district)
    })

    layer.on("mouseover", (e) => {
      layer.openPopup(e.latlng)

      e.target.setStyle({
        weight: 0.8,
        fillOpacity: 1.0
      })
    })

    layer.on("mousemove", function (e) {
      layer.getPopup()?.setLatLng(e.latlng);
    })

    layer.on("mouseout", (e) => {
      layer.closePopup()

      e.target.setStyle({
        weight: 0.4,
        fillOpacity: 0.8
      })
    })
  }, [])

  // Get a list of districts by province, then we add them into the layer group
  // This is done asynchronously to make the map more responsive. The fetching of district GeoJSON is also done asynchronously
  const getDistrictByProvinceFromServer = useCallback((province: string, forceLabel?: boolean) => {
    // Create new layer group
    const geoJSONFeatureGroup = new L.FeatureGroup()
    const markerFeatureGroup = new L.FeatureGroup()

    fetch(`${import.meta.env.VITE_APP_MAP_URL}/geojson/district/${province}/list.json`)
      .then((res) => {
        return res.json()
      })
      .then((districtList) => {
        districtList.forEach((district: string) => {
          fetch(`${import.meta.env.VITE_APP_MAP_URL}/geojson/district/${province}/${district}.geojson`)
            .then((res) => {
              return res.json()
            })
            .then((data) => {
              // If filterProvinsi is not empty, then we add the provinsi into the map layer
              const geoJSONLayer = L.geoJSON(data)

              // Set the layer style
              geoJSONLayer.setStyle(setLayerStyle as StyleFunction)

              // Apply function to each layer
              geoJSONLayer.eachLayer(setEvents(district))

              // Add text label only when the force flag is active
              if (forceLabel) {
                geoJSONLayer.eachLayer(setTextLabel)
              }

              // Add popup
              geoJSONLayer.eachLayer(setPopupContent)

              geoJSONFeatureGroup.addLayer(geoJSONLayer)

              // If there's already a marker in the province, then we just return
              if (markerLayerListRef.current[district]) {
                return
              }

              const key = data.properties?.[GEOJSON_KEY].replace(".", "")
              const d = mapDataRef.current[key] || 0

              if (d === 0) {
                return
              }

              const bounds = geoJSONLayer.getBounds()
              const center = bounds.getCenter()

              // Create marker and add it to map
              let marker: L.Marker | null = null
              switch(d) {
                case 1:
                  marker = L.marker(center, { icon: dangerMarkerRef.current })
                  break
                case 2:
                  marker = L.marker(center, { icon: warningMarkerRef.current })
                  break
                case 3:
                  marker = L.marker(center, { icon: successMarkerRef.current })
                  break
              }
              
              if (marker !== null) {
                markerFeatureGroup.addLayer(marker)

                markerLayerListRef.current[district] = marker
              }
            })
        })
      })

    districtGeoJSONLayerListRef.current[province] = geoJSONFeatureGroup
    districtGeoJSONLayerListRef.current[province].addTo(layerGroupRef.current)

    districtMarkerLayerListRef.current[province] = markerFeatureGroup
    districtMarkerLayerListRef.current[province].addTo(markerLayerGroupRef.current)
  }, [setEvents, setLayerStyle, setTextLabel, setPopupContent])

  useEffect(() => {
    // If the map data is empty, then we just return
    if (Object.keys(mapData).length === 0) {
      return
    }

    if (layerGroupRef.current) {
      layerGroupRef.current.clearLayers()
    }

    if (markerLayerGroupRef.current) {
      markerLayerGroupRef.current.clearLayers()
    }

    if (textLabelLayerGroupRef.current) {
      textLabelLayerGroupRef.current.clearLayers()
    }

    // If the layer is disabled, then we just return
    if (!enabled) {
      return
    }

    mapDataRef.current = mapData
    colorListRef.current = colorList
    colorMetadataRef.current = colorMetadata
    popupDataRef.current = popupData

    if (filterProvinsi?.value) {
      const provinceLayer = districtGeoJSONLayerListRef.current[filterProvinsi.value]
      const markerLayer = districtMarkerLayerListRef.current[filterProvinsi.value]

      if (typeof provinceLayer !== "undefined") {
        provinceLayer.eachLayer((layer) => {
          const featureGroup = layer as L.FeatureGroup
  
          featureGroup.setStyle(setLayerStyle as L.PathOptions)

          featureGroup.eachLayer(setPopupContent)
        })
  
        provinceLayer.addTo(layerGroupRef.current)
        markerLayer.addTo(markerLayerGroupRef.current)
        return
      }
  
      getDistrictByProvinceFromServer(filterProvinsi.value, true)
    } else {
      for (const province of provinceList) {
        const provinceLayer = districtGeoJSONLayerListRef.current[province]
        const markerLayer = districtMarkerLayerListRef.current[province]

        if (typeof provinceLayer !== "undefined") {
          provinceLayer.eachLayer((layer) => {
            const featureGroup = layer as L.FeatureGroup

            featureGroup.setStyle(setLayerStyle as L.PathOptions)

            featureGroup.eachLayer(setPopupContent)
          })

          provinceLayer.addTo(layerGroupRef.current)
          markerLayer.addTo(markerLayerGroupRef.current)
          continue
        }
  
        getDistrictByProvinceFromServer(province)
      }
    }
  }, [mapData, filterProvinsi, enabled])

  useEffect(() => {
    const map = context.map

    map.addLayer(layerGroupRef.current)
    map.addLayer(textLabelLayerGroupRef.current)
    map.addLayer(markerLayerGroupRef.current)
  }, [])

  return null
}

export default DistrictMarker