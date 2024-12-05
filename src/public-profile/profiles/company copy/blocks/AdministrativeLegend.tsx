import { useLeafletContext } from "@react-leaflet/core"
import { ChangeEvent, useCallback, useEffect, useRef } from "react"
import L from "leaflet"

interface IAdministrativeLegend {
  selectedAdministrative: string
  setSelectedAdministrative: (sa: string) => void
}

function AdministrativeLegend({ selectedAdministrative, setSelectedAdministrative }: IAdministrativeLegend) {
  const context = useLeafletContext()

  const legendRef = useRef<L.Control>()
  const inputListRef = useRef<Array<Array<any>>>([])  

  const onAdministrativeSelected = useCallback((e) => {
    setSelectedAdministrative(e.target.value)
  }, [])

  useEffect(() => {
    legendRef.current = new L.Control({
      position: "topright"
    })

    legendRef.current.onAdd = function () {
      const div = L.DomUtil.create('div', 'color info legend')

      div.innerHTML += `
        <form id="administrative_legend_form">
          <div class="form-check mb-2">
            <input class="form-check-input align-middle" type="radio" name="administrative_filter" id="provinsi" value="provinsi" checked style="cursor: pointer;">
            <label class="form-check-label" for="provinsi" style="cursor: pointer;">
              Provinsi
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input align-middle" type="radio" name="administrative_filter" id="kabupaten_kota" value="kabupaten_kota" style="cursor: pointer;">
            <label class="form-check-label" for="kabupaten_kota" style="cursor: pointer;">
              Kabupaten/Kota
            </label>
          </div>
        </form>
      `

      L.DomEvent.disableClickPropagation(div)
      L.DomEvent.disableScrollPropagation(div)

      // Handle change event
      div.querySelectorAll('input[name="administrative_filter"]').forEach((input) => {
        const handler = function (e) {
          onAdministrativeSelected(e)
        }

        input.addEventListener("change", handler)
        inputListRef.current.push([input, handler])
      })

      return div
    }

    const map = context.map
    legendRef.current.addTo(map)

    return () => {
      inputListRef.current.forEach((input) => input[0].removeEventListener("change", input[1]))

      legendRef.current?.remove()
    }
  }, [])

  useEffect(() => {
    if (legendRef.current) {
      const form = document.getElementById("administrative_legend_form") as HTMLFormElement | null

      if (form !== null) {
        const radios = form.elements["administrative_filter"] as RadioNodeList

        if (radios) {
          for (let i = 0; i < radios.length; i++) {
            const radio = radios[i] as HTMLInputElement;
            radio.checked = radio.value === selectedAdministrative;
          } 
        }
      }
    }
  }, [selectedAdministrative])

  return null
}

export default AdministrativeLegend