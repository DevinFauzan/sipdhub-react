import { useLeafletContext } from "@react-leaflet/core"
import React, { useCallback, useContext, useEffect, useRef } from "react"
import { Feature } from "geojson"
import L, { StyleFunction } from "leaflet"
import _ from "lodash"

import { IColorMetadata, ILeafletData, IPopupData, IStandardColorRange } from "./interfaces/global"

import { FilterContext } from "../ProfileCompanyContent"

// import provinceList from "../../../../../media/geojson/province/list.json"
import provinceList from "../../../../media/geojson/province/list.json"
// import useMapColorRange from "@/hooks/useMapColorRange"
import useMapColorRange from "../../../../hooks/useMapColorRange"

interface ILayer {
  [id: string]: L.GeoJSON
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

  setSelectedProvince: (province: string) => void
}

const GEOJSON_KEY = "KDPPUM"
const formatter = new Intl.NumberFormat('id-ID')

function ProvinceMarker({ enabled, mapData, colorList, colorMetadata, popupData, setSelectedProvince }: IProvinceProps) {
  const context = useLeafletContext()
  const { calculateStandardColorRange } = useMapColorRange()

  const { filterProvinsi } = useContext(FilterContext)

  const mapDataRef = useRef<ILeafletData>(mapData)
  const colorListRef = useRef<Array<IStandardColorRange>>(colorList)
  const colorMetadataRef = useRef<IColorMetadata>(colorMetadata)
  const popupDataRef = useRef<IPopupData>(popupData)

  const layerGroupRef = useRef<L.LayerGroup>(new L.LayerGroup())
  const markerLayerGroupRef = useRef<L.LayerGroup>(new L.LayerGroup())
  const textLabelLayerGroupRef = useRef<L.LayerGroup>(new L.LayerGroup())

  const geoJSONLayerListRef = useRef<ILayer>({})
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
      const key = feature?.properties?.[GEOJSON_KEY]
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
  }, [mapData, colorList])

  // Set a text label for a layer
  const setTextLabel = useCallback((layer) => {
    const bounds = layer.getBounds()
    const center = bounds.getCenter()

    const textLabel = L.marker(center, {
      icon: L.divIcon({
          className: 'text-labels',
          html: `${_.escape(layer.feature.properties.WADMPR)}`
      }),
      zIndexOffset: 1000
    })

    // Add the text label into the text label group
    if (textLabelLayerGroupRef.current) {
      textLabel.addTo(textLabelLayerGroupRef.current)
    }
  }, [])

  // Set events for a layer
  const setEvents = useCallback((province: string) => (layer) => {
    layer.on("click", function () {
      setSelectedProvince(province)
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

  // Set popup for a layer
  const setPopupContent = useCallback((layer: L.Layer) => {
    if ("feature" in layer) {
      const feature: Feature = layer.feature as Feature
      
      // Create a popup object
      const popupContent = L.DomUtil.create("div")
      popupContent.innerHTML += `
        <div style="margin-bottom: 6px;">
          <b>${_.escape(feature?.properties?.WADMPR)}</b>
        </div>
      `

      if (popupDataRef.current) {
        const key = feature?.properties?.[GEOJSON_KEY]
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

  const getProvinceFromList = useCallback((province: string) => {
    // If filterProvinsi is not empty, then we add the provinsi into the map layer
    const markerLayer = markerLayerListRef.current[province]
    const geoJSONLayer = geoJSONLayerListRef.current[province]

    // Apply proper styles to the GeoJSON layer
    geoJSONLayer.setStyle(setLayerStyle as StyleFunction)

    // Apply text label into the layer
    geoJSONLayer.eachLayer(setTextLabel)

    // Add popup
    geoJSONLayer.eachLayer(setPopupContent)

    // Add the GeoJSON layer into the layer group
    layerGroupRef.current?.addLayer(geoJSONLayer)

    if (markerLayer) {
      markerLayerGroupRef.current?.addLayer(markerLayer)
    }

    return geoJSONLayer
  }, [setLayerStyle, setTextLabel])

  const getProvinceFromServer = useCallback((province: string) => {
    fetch(`${import.meta.env.VITE_APP_MAP_URL}/geojson/province/${province}.geojson`)
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        // If filterProvinsi is not empty, then we add the provinsi into the map layer
        const geoJSONLayer = L.geoJSON(data)

        // Apply proper styles to the GeoJSON layer
        geoJSONLayer.setStyle(setLayerStyle as StyleFunction)

        // Add text label
        geoJSONLayer.eachLayer(setTextLabel)

        // Add popup
        geoJSONLayer.eachLayer(setPopupContent)

        // Apply function to each layer
        geoJSONLayer.eachLayer(setEvents(province))

        layerGroupRef.current?.addLayer(geoJSONLayer)
        geoJSONLayerListRef.current[province] = geoJSONLayer

        // If there's already a marker in the province, then we just return
        if (markerLayerListRef.current[province]) {
          return
        }

        const key = data.properties?.[GEOJSON_KEY]
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
          markerLayerGroupRef.current?.addLayer(marker)

          markerLayerListRef.current[province] = marker
        }
      })
  }, [setLayerStyle, setTextLabel, setEvents, setPopupContent])

  useEffect(() => {
    // If the map data is empty, then we just return
    if (Object.keys(mapData).length === 0) {
      return
    }

    // If the current refs exist, then we remove them first from the map layer
    const map = context.map

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
      const geoJSONLayer = getProvinceFromList(filterProvinsi.value)

      // Insert the GeoJSON layer into map
      map.fitBounds(geoJSONLayer.getBounds())
    } else {
      for (const province of provinceList) {
        // If filterProvinsi is not empty, then we add the provinsi into the map layer
        if (geoJSONLayerListRef.current[province]) {
          getProvinceFromList(province)
        } else {
          getProvinceFromServer(province)
        }
      }
      
      map.setZoom(5)
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

export default ProvinceMarker