import { useEffect, useRef } from "react"
import { useLeafletContext } from "@react-leaflet/core"
import L from "leaflet"

import { IDropdownData } from "./interfaces/global"

interface IDropdownProps {
  options: Array<IDropdownData> | undefined
  onOptionSelected: (e: Event) => void | undefined
  position?: "bottomleft" | "bottomright" | "topleft" | "topright"
  placeholder?: string
}

function Dropdown({ options, onOptionSelected, placeholder="Pilih opsi", position="bottomright" }: IDropdownProps) {
  const context = useLeafletContext()

  const legendRef = useRef<L.Control>()
  const selectRef = useRef<Array<Element | ((e: Event) => void)>>([])

  useEffect(() => {
    const map = context.map
    if (legendRef.current) {
      map.removeControl(legendRef.current)
      legendRef.current.remove()
    }

    // If options and onOptionsSelected is undefined, then we just return
    if ((typeof options === "undefined") || (typeof onOptionSelected === "undefined") || (options.length === 0)) {
      return
    }

    legendRef.current = new L.Control({
      position
    })

    legendRef.current.onAdd = function () {
      const div = L.DomUtil.create('div', 'info legend')

      div.innerHTML += `
        <form id="dropdown_legend_form">
          <select class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="dropdown_map">
            <option selected disabled>${placeholder}</option>
            ${ options.map((o) => (
              `<option value="${o.value}">${o.text}</option>`
            )) }
          </select>
        </form>
      `

      L.DomEvent.disableClickPropagation(div)
      L.DomEvent.disableScrollPropagation(div)

      // Handle change event
      const select = div.querySelector('select[name="dropdown_map"]')
      if (select !== null) {
        const handler = function (e: Event) {
          onOptionSelected(e)
        }
  
        select?.addEventListener("change", handler)
        selectRef.current = [select, handler]
      }

      return div
    }

    legendRef.current.addTo(map)

    return () => {
      if (selectRef.current[0] && selectRef.current[1]) {
        const select = selectRef.current[0] as Element

        select.removeEventListener("change", selectRef.current[1] as ((e: Event) => void))
      }
    }
  }, [options])

  return null
}

export default Dropdown