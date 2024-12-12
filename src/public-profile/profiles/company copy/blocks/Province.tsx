import { useLeafletContext } from "@react-leaflet/core"
import React, { useCallback, useContext, useEffect, useRef } from "react"
import { Feature } from "geojson"
import L, { StyleFunction } from "leaflet"
import _ from "lodash"

import { IColorMetadata, ILeafletData, IPopupContent, IPopupData, IStandardColorRange } from "./interfaces/global"

import { FilterContext } from "../ProfileCompanyContent"

import provinceList from "../../../../media/geojson/province/list.json"
import useMapColorRange from "../../../../hooks/useMapColorRange"

interface ILayer {
  [id: string]: L.GeoJSON
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

function Province({ enabled, mapData, colorList, colorMetadata, popupData, setSelectedProvince }: IProvinceProps) {
  const context = useLeafletContext()
  const { calculateStandardColorRange } = useMapColorRange()

  const { filterProvinsi } = useContext(FilterContext)

  const mapDataRef = useRef<ILeafletData>(mapData)
  const colorListRef = useRef<Array<IStandardColorRange>>(colorList)
  const colorMetadataRef = useRef<IColorMetadata>(colorMetadata)
  const popupDataRef = useRef<IPopupData>(popupData)

  const layerGroupRef = useRef<L.LayerGroup>(new L.LayerGroup())
  const textLabelLayerGroupRef = useRef<L.LayerGroup>(new L.LayerGroup())

  const geoJSONLayerListRef = useRef<ILayer>({})

  // Set styling for layer based on the current map data
  const setLayerStyle = useCallback((feature: Feature) => {
    if (feature.properties) {
      const key = feature?.properties?.[GEOJSON_KEY]
      const d = mapDataRef.current[key] || 0
      // Now based on the color list range we render the color
      let applicableColor = "#DDD"

      applicableColor = calculateStandardColorRange(colorListRef.current, d)
  
      return {
        color: "#000",
        weight: 0.4,
        fillColor: applicableColor,
        fillOpacity: 0.6,
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
        fillOpacity: 0.8
      })
    })

    layer.on("mousemove", function (e) {
      layer.getPopup()?.setLatLng(e.latlng);
    })

    layer.on("mouseout", (e) => {
      layer.closePopup()

      e.target.setStyle({
        weight: 0.4,
        fillOpacity: 0.6
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
    const geoJSONLayer = geoJSONLayerListRef.current[province]

    // Apply proper styles to the GeoJSON layer
    geoJSONLayer.setStyle(setLayerStyle as StyleFunction)

    // Apply text label into the layer
    geoJSONLayer.eachLayer(setTextLabel)

    // Add popup
    geoJSONLayer.eachLayer(setPopupContent)

    // Add the GeoJSON layer into the layer group
    layerGroupRef.current?.addLayer(geoJSONLayer)

    return geoJSONLayer
  }, [setLayerStyle, setTextLabel])

  const getProvinceFromServer = useCallback((province: string, forceBounds?: boolean) => {
    fetch(`${import.meta.env.VITE_APP_MAP_URL}/geojson/province/${province}.geojson`)
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        const layer = L.geoJSON(data)

        // Set the layer style
        layer.setStyle(setLayerStyle as StyleFunction)

        // Add text label
        layer.eachLayer(setTextLabel)

        // Add popup
        layer.eachLayer(setPopupContent)

        // Apply function to each layer
        layer.eachLayer(setEvents(province))

        // Add the GeoJSON layer into the layer group and the layer list
        layerGroupRef.current?.addLayer(layer)
        geoJSONLayerListRef.current[province] = layer

        // Insert the GeoJSON layer into map
        if (forceBounds) {
          const map = context.map
          map.fitBounds(layer.getBounds())
        }
      })
  }, [setLayerStyle, setTextLabel, setPopupContent, setEvents])

  useEffect(() => {

    // If the current refs exist, then we remove them first from the map layer
    const map = context.map

    if (layerGroupRef.current) {
      layerGroupRef.current.clearLayers()
    }

    if (textLabelLayerGroupRef.current) {
      textLabelLayerGroupRef.current.clearLayers()
    }

    mapDataRef.current = mapData
    colorListRef.current = colorList
    colorMetadataRef.current = colorMetadata
    popupDataRef.current = popupData

    if (filterProvinsi?.value) {
      if (geoJSONLayerListRef.current[filterProvinsi.value]) {
        const geoJSONLayer = getProvinceFromList(filterProvinsi.value)

        // Insert the GeoJSON layer into map
        map.fitBounds(geoJSONLayer.getBounds())
      } else {
        getProvinceFromServer(filterProvinsi.value, true)
      }
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

    // const localGeoJSONLayerRef = geoJSONLayerListRef.current
    // const localLayerGroupRef = layerGroupRef.current
    // const localTextLabelLayerGroupRef = textLabelLayerGroupRef.current

    // return () => {
    //   // Clear layer group
    //   localLayerGroupRef.clearLayers()

    //   // Clear text label layer group
    //   const textLabelLayers = localTextLabelLayerGroupRef.getLayers()
    //   localTextLabelLayerGroupRef.clearLayers()

    //   textLabelLayers.forEach((layer) => {
    //     layer.remove()
    //   })

    //   const provinceList = Object.keys(localGeoJSONLayerRef)

    //   for (const province of provinceList) {
    //     const layer = localGeoJSONLayerRef[province]

    //     layer.clearAllEventListeners()
    //     layer.remove()

    //     delete localGeoJSONLayerRef[province]
    //   }
    // }
  }, [mapData, filterProvinsi, enabled])

  useEffect(() => {
    const map = context.map

    map.addLayer(layerGroupRef.current)
    map.addLayer(textLabelLayerGroupRef.current)
  }, [])

  return null
}

export default Province