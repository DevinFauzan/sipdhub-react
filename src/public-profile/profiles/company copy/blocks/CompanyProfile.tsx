import { MapContainer, TileLayer } from 'react-leaflet'
import { useCallback, useContext, useEffect, useRef, useState } from 'react'
import { LatLngBoundsExpression, LatLngExpression } from 'leaflet'
import AdministrativeLegend from './AdministrativeLegend'
import ColorRangeLegend from './ColorRangeLegend'
import District from './District'
import Province from './Province'
import { IColorMetadata,  ILeafletData, IPopupData,  } from './interfaces/global'
import { FilterContext, MapDataContext, OptionType } from '../ProfileCompanyContent'
// import axios from 'axios'
// import useMapColorRange from '@/hooks/useMapColorRange'
import useMapColorRange from '../../../../hooks/useMapColorRange'
// import GradientColorRangeLegend from './GrqdientColorRangeLegend'
import ProvinceMarker from './ProvinceMarker'
import DistrictMarker from './DistrictMarker'

interface IProfileRow {
  icon: string
  text: string
  info: boolean
}
interface IProfileRows extends Array<IProfileRow> { }

interface IProfileProduct {
  label: string
}
interface IProfileProducts extends Array<IProfileProduct> { }

interface IOptions {
  center: LatLngExpression
  zoom: number
  minZoom: number
  maxZoom: number
  maxBounds: LatLngBoundsExpression
  maxBoundsViscosity: number
}

interface IDPT {
  kodeProv: string
  kodeKab: string
  namaProv: string
  namaKab: string | null
  totalDPT: number
}

const options: IOptions = {
  center: [-2.5, 118.0], // Posisi peta awal di tengah Indonesia
  zoom: 5, // Zoom level awal
  minZoom: 5,
  maxZoom: 19,
  maxBounds: [
    [-12, 94.0], // Batas koordinat bawah kiri (latitude, longitude)
    [6, 142.0] // Batas koordinat atas kanan (latitude, longitude)
  ], // Batasi tampilan peta hanya di sekitar Indonesia
  maxBoundsViscosity: 1.0 // Mengunci batas untuk mencegah scroll peta keluar batas
}

const CompanyProfile = () => {
  const { generateDynamicColorRange } = useMapColorRange()
  const {
    provinceMapData,
    districtMapData,
    provinceColorList,
    districtColorList,
    provincePopupData,
    districtPopupData,
    mapLegendTitle,
    selectedAdministrative,
    setSelectedAdministrative
  } = useContext(MapDataContext)

  const {
    filterJenisKandidat,
    filterProvinsi,
    filterKabupaten,
    setFilterJenisKandidat,
    setFilterProvinsi,
    setFilterKabupaten,
    optionsProvinsi,
    optionsKabupaten
  } = useContext(FilterContext)

  const [dataDPTProvinsi, setDataDPTProvinsi] = useState<ILeafletData>({})
  const [dataDPTKabupaten, setDataDPTKabupaten] = useState<ILeafletData>({})

  const [dataPopupProvinsi, setDataPopupProvinsi] = useState<IPopupData>({})
  const [dataPopupKabupaten, setDataPopupKabupaten] = useState<IPopupData>({})

  const [colorRange, setColorRange] = useState<any>([])
  const [colorMetadata, setColorMetadata] = useState<IColorMetadata>({ minVal: 0, maxVal: 0 })

  const localFilterProvinsiRef = useRef<OptionType | null>(null)
  const localFilterKabupatenRef = useRef<OptionType | null>(null)

  const localOptionsProvinsiRef = useRef<Array<OptionType>>([])
  const localOptionsKabupatenRef = useRef<Array<OptionType>>([])

  useEffect(() => {
    // Check if the selected adminsitrative is a district
    if (selectedAdministrative !== "kabupaten_kota") {
      return
    }

    // Check if the provinceMapData is an instance of comparison map or standard map
    const mapData: ILeafletData = {}
    const popupData: IPopupData = {}

    const dataKey = districtMapData.dataKey

    if (filterProvinsi?.value) {
      districtMapData?.originalData?.forEach((d: IDPT) => {
        if (d.kodeProv == filterProvinsi?.value) {
          mapData[d.kodeKab] = d[dataKey]

          popupData[d.kodeKab] = []
          districtPopupData.forEach((pd) => {
            popupData[d.kodeKab].push({
              title: pd.title || "",
              value: d[pd.sourceKey],
              percentage: pd.percentage
            })
          })
        }
      })
    } else {
      districtMapData?.originalData?.forEach((d: IDPT) => {
        mapData[d.kodeKab] = d[dataKey]

        popupData[d.kodeKab] = []
        districtPopupData.forEach((pd) => {
          popupData[d.kodeKab].push({
            title: pd.title || "",
            value: d[pd.sourceKey],
            percentage: pd.percentage
          })
        })
      })
    }

    setDataPopupKabupaten(popupData)
    setDataDPTKabupaten(mapData)

    const mapDataValues = Object.values(mapData)
    const minVal = mapDataValues.reduce((min, num) => (num < min ? num : min), mapDataValues[0])
    const maxVal = mapDataValues.reduce((max, num) => (num > max ? num : max), mapDataValues[0])

    setColorMetadata({ minVal, maxVal })

    if (districtMapData.dynamicColor) {
      setColorRange(generateDynamicColorRange(provinceColorList[0].color, provinceColorList[provinceColorList.length - 1].color, minVal, maxVal))
    } else {
      setColorRange(districtColorList)
    }
  }, [filterProvinsi, districtMapData, selectedAdministrative])

  useEffect(() => {
    // Check if the selected adminsitrative is a province
    if (selectedAdministrative !== "provinsi") {
      return
    }

    // Check if the provinceMapData is an instance of comparison map or standard map
    const mapData: ILeafletData = {}
    const popupData: IPopupData = {}

    const dataKey = provinceMapData.dataKey

    provinceMapData?.originalData?.forEach((d) => {
      mapData[d.kodeProv] = d[dataKey]

      popupData[d.kodeProv] = []
      provincePopupData.forEach((pd) => {
        popupData[d.kodeProv].push({
          title: pd.title || "",
          value: d[pd.sourceKey],
          percentage: pd.percentage
        })
      })
    })

    setDataPopupProvinsi(popupData)
    setDataDPTProvinsi(mapData)

    // Adjust coloring
    const mapDataValues = Object.values(mapData)
    const minVal = mapDataValues.reduce((min, num) => (num < min ? num : min), mapDataValues[0])
    const maxVal = mapDataValues.reduce((max, num) => (num > max ? num : max), mapDataValues[0])

    setColorMetadata({ minVal, maxVal })

    if (provinceMapData.dynamicColor) {
      setColorRange(generateDynamicColorRange(provinceColorList[0].color, provinceColorList[provinceColorList.length - 1].color, minVal, maxVal))
    } else {
      setColorRange(provinceColorList)
    }
  }, [provinceMapData, selectedAdministrative])

  const onDistrictSelected = useCallback((district: string) => {
    if (localFilterKabupatenRef.current?.value !== district) {
      let find = localOptionsKabupatenRef.current.find((kab) => kab.value == district.replace("_", ""))

      if (find) {
        setFilterKabupaten(find)
      }
    } else {
      setFilterKabupaten({
        value: "",
        label: "Semua Provinsi"
      })
    }
  }, [])

  const onProvinceSelected = useCallback((province: string) => {
    onDistrictSelected("")

    if (localFilterProvinsiRef.current?.value !== province) {
      let find = localOptionsProvinsiRef.current.find((prov) => prov.value === province)

      if (find) {
        setFilterProvinsi(find)
      }
    } else {
      setFilterProvinsi({
        value: "",
        label: "Semua Provinsi"
      })
    }
  }, [])

  const onAdministrativeChanged = useCallback((type: string) => {
    setSelectedAdministrative(type)

    if (type === "provinsi") {
      onProvinceSelected("")
      setFilterJenisKandidat("gubernur")
    } else if (type === "kabupaten_kota") {
      setFilterJenisKandidat("walikota")
    }
  }, [])

  useEffect(() => {
    localOptionsProvinsiRef.current = optionsProvinsi
  }, [optionsProvinsi])

  useEffect(() => {
    localOptionsKabupatenRef.current = optionsKabupaten
  }, [optionsKabupaten])

  useEffect(() => {
    localFilterProvinsiRef.current = filterProvinsi
  }, [filterProvinsi])

  useEffect(() => {
    localFilterKabupatenRef.current = filterProvinsi
  }, [filterProvinsi])

  useEffect(() => {
    if (filterJenisKandidat === "gubernur") {
      setSelectedAdministrative("provinsi")
    } else if (filterJenisKandidat === "walikota") {
      setSelectedAdministrative("kabupaten_kota")
    }
  }, [filterJenisKandidat])

  return (
    <div className="card h-auto border-0">
      {/* <div className="card-header items-center justify-center">
        <h3 className="card-title">Peta DPT PILKADA 2024</h3>
      </div> */}
      <div className="card-body flex flex-col" style={{ backgroundColor: '#F9F9F9' }}> {/* Adjust the RGBA value for transparency */}
        <div className="flex flex-wrap items-center gap-5 mb-1">
          <MapContainer
            style={{ width: '100%', height: '400px', backgroundColor: '#F9F9F9' }}
            center={options.center}
            zoom={options.zoom}
            minZoom={options.minZoom}
            maxZoom={options.maxZoom}
            maxBounds={options.maxBounds}
            maxBoundsViscosity={options.maxBoundsViscosity}
          >
            <TileLayer
              attribution='Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ'
              url="https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}"
              maxZoom={10}
              opacity={0.0} // Set opacity for the tile layer
              
            />
            <ProvinceMarker
              setSelectedProvince={onProvinceSelected}
              colorList={colorRange}
              colorMetadata={colorMetadata}
              mapData={dataDPTProvinsi}
              popupData={dataPopupProvinsi}
              enabled={(selectedAdministrative === 'provinsi') && (provinceMapData.markerMap)}
            />
            <Province
              setSelectedProvince={onProvinceSelected}
              colorList={colorRange}
              colorMetadata={colorMetadata}
              mapData={dataDPTProvinsi}
              popupData={dataPopupProvinsi}
              enabled={(selectedAdministrative === 'provinsi') && (!provinceMapData.markerMap)}
            />
            <DistrictMarker
              setSelectedKabupaten={onDistrictSelected}
              colorList={colorRange}
              colorMetadata={colorMetadata}
              mapData={dataDPTKabupaten}
              popupData={dataPopupKabupaten}
              enabled={(selectedAdministrative === 'kabupaten_kota') && (districtMapData.markerMap)}
            />
            <District
              setSelectedKabupaten={onDistrictSelected}
              colorList={colorRange}
              colorMetadata={colorMetadata}
              mapData={dataDPTKabupaten}
              popupData={dataPopupKabupaten}
              enabled={(selectedAdministrative === 'kabupaten_kota') && (!districtMapData.markerMap)}
            />
            <AdministrativeLegend
              selectedAdministrative={selectedAdministrative}
              setSelectedAdministrative={onAdministrativeChanged}
            />
            <ColorRangeLegend
              title={mapLegendTitle}
              colorRange={colorRange}
              percentage={selectedAdministrative === "provinsi" ? provinceMapData.percentage : districtMapData.percentage}
            />
          </MapContainer>
        </div>
      </div>


    </div>
  )
}

export {
  CompanyProfile,
  type IProfileRow,
  type IProfileRows,
  type IProfileProduct,
  type IProfileProducts
}
