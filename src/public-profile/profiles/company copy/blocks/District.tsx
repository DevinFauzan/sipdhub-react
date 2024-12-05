import { useLeafletContext } from "@react-leaflet/core"
import React, { useCallback, useContext, useEffect, useRef, useState } from "react"
import { Feature } from "geojson"
import L, { StyleFunction } from "leaflet"
import _ from "lodash"

import { IColorMetadata, ILeafletData,  IPopupData, IStandardColorRange } from "./interfaces/global"

import { FilterContext } from "../ProfileCompanyContent"

import provinceList from "../../../../media/geojson/province/list.json"
import useMapColorRange from "../../../../hooks/useMapColorRange"

interface ILayerGroupList {
  [province: string]: L.FeatureGroup
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

function District({ mapData, popupData, enabled, colorList, colorMetadata, setSelectedKabupaten }: IProvinceProps) {
  const context = useLeafletContext()
  const { calculateStandardColorRange } = useMapColorRange()

  const { filterProvinsi } = useContext(FilterContext)

  const mapDataRef = useRef<ILeafletData>(mapData)
  const colorListRef = useRef<Array<IStandardColorRange>>(colorList)
  const colorMetadataRef = useRef<IColorMetadata>(colorMetadata)
  const popupDataRef = useRef<IPopupData>(popupData)

  const layerGroupRef = useRef<L.LayerGroup>(new L.LayerGroup())
  const textLabelLayerGroupRef = useRef<L.LayerGroup>(new L.LayerGroup())

  const districtGeoJSONLayerListRef = useRef<ILayerGroupList>({})

  // Set styling for layer based on the current map data
  const setLayerStyle = useCallback((feature: Feature) => {
    if (feature.properties) {
      const key = feature.properties[GEOJSON_KEY].replace(".", "")
      const d = mapDataRef.current[key] || 0
  
      // Now based on the color list range we render the color
      let applicableColor = "#DDD"
      
      applicableColor = calculateStandardColorRange(colorListRef.current, d)

      return {
        color: "#000",
        weight: 0.4,
        fillColor: applicableColor,
        fillOpacity: 0.8,
      }
    }

    return {}
  }, [mapData])

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
    const featureGroup = new L.FeatureGroup()

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
              const layer = L.geoJSON(data)

              // Set the layer style
              layer.setStyle(setLayerStyle as StyleFunction)

              // Add text label only when the force flag is active
              if (forceLabel) {
                layer.eachLayer(setTextLabel)
              }

              // Add popup
              layer.eachLayer(setPopupContent)

              // Apply function to each layer
              layer.eachLayer(setEvents(district))

              featureGroup.addLayer(layer)
            })
        })
      })

    districtGeoJSONLayerListRef.current[province] = featureGroup
    districtGeoJSONLayerListRef.current[province].addTo(layerGroupRef.current)
  }, [setEvents, setLayerStyle, setPopupContent, setTextLabel])

  useEffect(() => {
    // If the map data is empty, then we just return
    if (Object.keys(mapData).length === 0) {
      return
    }

    if (layerGroupRef.current) {
      layerGroupRef.current.clearLayers()
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

      if (typeof provinceLayer !== "undefined") {
        provinceLayer.eachLayer((layer) => {
          const featureGroup = layer as L.FeatureGroup
  
          featureGroup.setStyle(setLayerStyle as L.PathOptions)

          featureGroup.eachLayer(setPopupContent)
        })
  
        provinceLayer.addTo(layerGroupRef.current)
        return
      }
  
      getDistrictByProvinceFromServer(filterProvinsi.value, true)
    } else {
      for (const province of provinceList) {
        const provinceLayer = districtGeoJSONLayerListRef.current[province]

        if (typeof provinceLayer !== "undefined") {
          provinceLayer.eachLayer((layer) => {
            const featureGroup = layer as L.FeatureGroup

            featureGroup.setStyle(setLayerStyle as L.PathOptions)

            featureGroup.eachLayer(setPopupContent)
          })

          provinceLayer.addTo(layerGroupRef.current)
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
  }, [])

  return null
}

export default District