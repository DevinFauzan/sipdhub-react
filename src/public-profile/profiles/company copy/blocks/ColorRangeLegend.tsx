import { useLeafletContext } from "@react-leaflet/core"
import { useEffect, useRef } from "react"
import L from "leaflet"

function ColorRangeLegend({ title, colorRange, percentage }: { title: string, colorRange: Array<any>, percentage: boolean | undefined }) {
  const context = useLeafletContext()
  const legendRef = useRef<L.Control>()

  useEffect(() => {
    const intl = new Intl.NumberFormat('id-ID')

    legendRef.current = new L.Control({
      position: "bottomleft",
    })

    legendRef.current.onAdd = function() {
      const div = L.DomUtil.create('div', 'color info legend')
      div.innerHTML += `<h4 class="fs-6 font-bold">${title}</h4>`

      for (let i = 0; i < colorRange.length; i++) {
        const color = colorRange[i]

        let text = ""
        if (color.stepMin === null) {
          text = `${color.stepMax > 0 ? "<=" : ""} ${intl.format(color.stepMax)}`
        } else if (color.stepMax === null) {
          text = `> ${intl.format(color.stepMin)}`
        } else if (color.stepMin === color.stepMax) {
          text = intl.format(color.stepMin)
        } else {
          text = `${intl.format(color.stepMin)} - ${intl.format(color.stepMax)}`
        }

        if (color.altText) {
          div.innerHTML += `
            <div style="${(i + 1) < colorRange.length ? "margin-bottom: 8px;" : ""}">
              <i style="background: ${color.color}; border: 1px solid #555;"></i> <span style="vertical-align: middle;">${color.altText}</span>
            </div>
          `
        } else {
          div.innerHTML += `
            <div style="${(i + 1) < colorRange.length ? "margin-bottom: 8px;" : ""}">
              <i style="background: ${color.color}; border: 1px solid #555;"></i> <span style="vertical-align: middle;">${text}${percentage ? "%" : ""}</span>
            </div>
          `
        }

      }

      L.DomEvent.disableClickPropagation(div)
      L.DomEvent.disableScrollPropagation(div)

      return div
    }

    const map = context.map

    legendRef.current.addTo(map)

    return () => {
      legendRef.current?.remove()
    }
  }, [context, colorRange])

  return null
}

export default ColorRangeLegend