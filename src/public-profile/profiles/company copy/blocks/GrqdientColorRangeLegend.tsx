import { useLeafletContext } from "@react-leaflet/core"
import { useCallback, useEffect, useRef } from "react"
import L from "leaflet"
import _ from "lodash"

import { IColorMetadata, IComparisonColorRange } from "./interfaces/global"

interface IGradientColorRangeLegendProps {
  title: string

  colorList: IComparisonColorRange
  colorMetadata: IColorMetadata
}

const intl = new Intl.NumberFormat('id-ID')

function GradientColorRangeLegend({ title, colorList, colorMetadata }: IGradientColorRangeLegendProps) {
  const context = useLeafletContext()

  const legendRef = useRef<L.Control | null>(null)

  // Function to add the color range
  const onLegendAdded = useCallback(() => {
    const div = L.DomUtil.create("div", "gradient-legend")

    div.innerHTML = `
      <div class="gradient-bar" style="background: linear-gradient(to right, ${colorList.minColor}, #FFFFFF, ${colorList.maxColor});"></div>
      <div class="gradient-labels">
          <span>${_.escape(intl.format(colorMetadata.minVal))}</span>
          <span>0</span>
          <span>${_.escape(intl.format(colorMetadata.maxVal))}</span>
      </div>
    `

    L.DomEvent.disableClickPropagation(div)
    L.DomEvent.disableScrollPropagation(div)

    return div
  }, [title, colorList, colorMetadata])

  useEffect(() => {
    // If the legendRef has a value, then we destroy it first
    if (legendRef.current !== null) {
      legendRef.current.remove()
    }

    legendRef.current = new L.Control({
      position: "bottomleft"
    })

    legendRef.current.onAdd = onLegendAdded

    const map = context.map

    legendRef.current.addTo(map)

    return () => {
      legendRef.current?.remove()
    }
  }, [title, colorList, colorMetadata, onLegendAdded])

  return null
}

export default GradientColorRangeLegend