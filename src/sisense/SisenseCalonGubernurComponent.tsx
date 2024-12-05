import React, { useContext, useEffect, useState } from 'react';
import { IDashboard, IFilterState } from './_models';
import { WebPageFilterID } from './_datamodels';
import {
  customStyle1,
  customStyle11,
  customStyle3,
  customStyle4,
  customStyle5,
  customStyle6,
  customStyle7,
  customStyle8,
  customStyle9
} from './_SisenseWidgetStyleOptions';
// import DashboardGridComponent from './DashboardGridComponent';
// import DashboardGridRightAndLeftComponent from './DashboardGridRightAndLeft';
import DashboardGridComponent from './DashboardGridComponent';
import { FilterContext, MapDataContext } from '../public-profile/profiles/company copy';
import axios from 'axios';
import { IPopupContent, IStandardColorRange } from '../public-profile/profiles/company copy/blocks/interfaces/global';

const provinceDataColorList: Array<IStandardColorRange> = [
  {
    stepMin: 1,
    stepMax: 1,
    color: '#b9ddf1'
  },
  {
    stepMin: 2,
    stepMax: 2,
    color: '#8bbadc'
  },
  {
    stepMin: 3,
    stepMax: 3,
    color: '#6798c1'
  },
  {
    stepMin: 4,
    stepMax: 4,
    color: '#4776a4'
  },
  {
    stepMin: 5,
    stepMax: 5,
    color: '#2a5783'
  }
]

const districtDataColorList: Array<IStandardColorRange> = [
  {
    stepMin: 1,
    stepMax: 1,
    color: '#b9ddf1'
  },
  {
    stepMin: 2,
    stepMax: 2,
    color: '#94c2e1'
  },
  {
    stepMin: 3,
    stepMax: 3,
    color: '#75a6cc'
  },
  {
    stepMin: 4,
    stepMax: 4,
    color: '#598ab6'
  },
  {
    stepMin: 5,
    stepMax: 5,
    color: '#42709e'
  },
  {
    stepMin: 6,
    stepMax: 6,
    color: '#2a5783'
  }
]

const provincePopupDataList: Array<IPopupContent> = [
  {
    sourceKey: "jumlahCalonGubernur",
    title: "Jumlah Calon Gubernur"
  }
]

const districtPopupDataList: Array<IPopupContent> = [
  {
    sourceKey: "jumlahCalonWalikotaBupati",
    title: "Jumlah Calon Bupati/Walikota"
  }
]

const SisenseCalonGubernurComponent: React.FC = () => {
  const { filterProvinsi, filterKabupaten } = useContext(FilterContext);
  const { setProvinceMapData, setDistrictMapData, setProvinceColorList, setDistrictColorList, setProvincePopupData, setDistrictPopupData, setMapLegendTitle } = useContext(MapDataContext)

  const [selectedFilters, setSelectedFilters] = useState<IFilterState[]>([]);

  const dashboards: IDashboard[] = [
    {
      id: '6731085ffbe60a002a9f3d2f',
      name: 'Analisis Calon Kandidat',
      widgets: [
        // baris 1
        // {
        //   colSpan: 4,
        //   widgetType: 'default',
        //   widget: {
        //     id: '6732e45ffbe60a002a9f3dea',
        //     title: 'Calon Kepala Daerah',
        //     titleStyle: { paddingTop: '0.8rem', paddingBottom: '0.8rem' },
        //     styleOptions: customStyle3,
        //     titleWrapperClass: 'bg-stone-200',
        //     widgetContentWrapperClass: 'bg-stone-100',
        //     widgetContentWrapperStyle: { paddingTop: '1.5rem' },
        //     iconWrapperClass: 'bg-blue-200',
            // dataModel: 'CalonCakada',
        //   },
        // },
        // {
        //   colSpan: 4,
        //   widgetType: 'default',
        //   widget: {
        //     id: '6732e3d2fbe60a002a9f3de5',
        //     title: 'Calon Partai Politik',
        //     titleStyle: { paddingTop: '0.8rem', paddingBottom: '0.8rem' },
        //     styleOptions: customStyle3,
        //     titleWrapperClass: 'bg-stone-200',
        //     widgetContentWrapperClass: 'bg-stone-100',
        //     widgetContentWrapperStyle: { paddingTop: '1.5rem' },
        //     iconWrapperClass: 'bg-blue-200',
            // dataModel: 'CalonCakada',
        //   },
        // },
        // {
        //   colSpan: 4,
        //   widgetType: 'default',
        //   widget: {
        //     id: '6732e42dfbe60a002a9f3de8',
        //     title: 'Calon Perseorangan',
        //     titleStyle: { paddingTop: '0.8rem', paddingBottom: '0.8rem' },
        //     styleOptions: customStyle3,
        //     titleWrapperClass: 'bg-stone-200',
        //     widgetContentWrapperClass: 'bg-stone-100',
        //     widgetContentWrapperStyle: { paddingTop: '1.5rem' },
        //     iconWrapperClass: 'bg-blue-200',
            // dataModel: 'CalonCakada',
        //   },
        // },
        // {
        //   colSpan: 4,
        //   widgetType: 'default',
        //   widget: {
        //     id: '67312473fbe60a002a9f3d96',
        //     title: 'Jenis Paslon',
        //     titleStyle: { paddingTop: '0.8rem', paddingBottom: '0.8rem' },
        //     styleOptions: customStyle3,
        //     titleWrapperClass: 'bg-stone-200',
        //     widgetContentWrapperClass: 'bg-stone-100',
        //     widgetContentWrapperStyle: { paddingTop: '1.5rem' },
        //     iconWrapperClass: 'bg-blue-200',
            // dataModel: 'CalonCakada',
        //   },
        // },
        // baris 2 
        {
          colSpan: 3,
          widgetType: 'default',
          widget: {
            id: '6732e1c8fbe60a002a9f3dda',
            title: 'Calon Gubernur',
            titleStyle: { paddingTop: '0.8rem', paddingBottom: '0.8rem' },
            styleOptions: customStyle1,
            titleWrapperClass: 'bg-rose-200',
            widgetContentWrapperClass: 'bg-rose-100',
            widgetContentWrapperStyle: { paddingTop: '1.5rem' },
            iconWrapperClass: 'bg-blue-200',
            dataModel: 'CalonGubernur',
          },
        },
        // {
        //   colSpan: 6,
        //   widgetType: 'default',
        //   widget: {
        //     id: '6732e23cfbe60a002a9f3dde',
        //     title: 'Jumlah Calon Wakil Gubernur',
        //     titleStyle: { paddingTop: '0rem', paddingBottom: '0rem' },
        //     styleOptions: customStyle1,
        //     titleWrapperClass: 'bg-stone-300',
        //     widgetContentWrapperClass: 'bg-stone-200',
        //     widgetContentWrapperStyle: { paddingTop: '1.5rem' },
        //     iconWrapperClass: 'bg-blue-200',
            // dataModel: 'CalonGubernur',
        //   },
        // },
        {
          colSpan: 3,
          widgetType: 'default',
          widget: {
            id: '6732f189fbe60a002a9f3dff',
            title: 'Calon Bupati',
            titleStyle: { paddingTop: '0.8rem', paddingBottom: '0.8rem' },
            styleOptions: customStyle1,
            titleWrapperClass: 'bg-sky-200',
            widgetContentWrapperClass: 'bg-sky-100',
            widgetContentWrapperStyle: { paddingTop: '1.5rem' },
            iconWrapperClass: 'bg-blue-200',
            dataModel: 'CalonCakada',
          },
        },
        // {
        //   colSpan: 6,
        //   widgetType: 'default',
        //   widget: {
        //     id: '6732f4aefbe60a002a9f3e19',
        //     title: 'Jumlah Calon Wakil Bupati',
        //     titleStyle: { paddingTop: '0.8rem', paddingBottom: '0.8rem' },
        //     styleOptions: customStyle1,
        //     titleWrapperClass: 'bg-slate-300',
        //     widgetContentWrapperClass: 'bg-slate-200',
        //     widgetContentWrapperStyle: { paddingTop: '1.5rem' },
        //     iconWrapperClass: 'bg-blue-200',
            // dataModel: 'CalonCakada',
        //   },
        // },
        {
          colSpan: 3,
          widgetType: 'default',
          widget: {
            id: '6732f213fbe60a002a9f3e02',
            title: 'Calon Walikota',
            titleStyle: { paddingTop: '0.8rem', paddingBottom: '0.8rem' },
            styleOptions: customStyle1,
            titleWrapperClass: 'bg-teal-200',
            widgetContentWrapperClass: 'bg-teal-100',
            widgetContentWrapperStyle: { paddingTop: '1.5rem' },
            iconWrapperClass: 'bg-blue-200',
            dataModel: 'CalonCakada',
          },
        },
        // {
        //   colSpan: 6,
        //   widgetType: 'default',
        //   widget: {
        //     id: '6732f4dbfbe60a002a9f3e1b',
        //     title: 'Calon Wakil Walikota',
        //     titleStyle: { paddingTop: '0.8rem', paddingBottom: '0.8rem' },
        //     styleOptions: customStyle1,
        //     titleWrapperClass: 'bg-gray-300',
        //     widgetContentWrapperClass: 'bg-gray-200',
        //     widgetContentWrapperStyle: { paddingTop: '1.5rem' },
        //     iconWrapperClass: 'bg-blue-200',
            // dataModel: 'CalonCakada',
        //   },
        // },
        {
          colSpan: 6,
          widgetType: 'default',
          widget: {
            id: '67310cb3fbe60a002a9f3d37',
            title: 'Calon Gubernur Berdasarkan Jenis Kelamin',
            titleStyle: { paddingTop: '0.8rem', paddingBottom: '0.8rem' },
            styleOptions: customStyle4,
            titleWrapperClass: 'bg-rose-200',
            widgetContentWrapperClass: 'bg-rose-100',
            widgetContentWrapperStyle: { paddingTop: '1.5rem' },
            iconWrapperClass: 'bg-blue-200',
            dataModel: 'CalonGubernur',
          },
        },
        {
          colSpan: 6,
          widgetType: 'default',
          widget: {
            id: '67310e23fbe60a002a9f3d3f',
            title: 'Calon Wakil Gubernur berdasarkan Jenis Kelamin',
            styleOptions: customStyle4,
            titleWrapperClass: 'bg-red-200',
            titleStyle: { paddingTop: '0.8rem', paddingBottom: '0.8rem' },
            widgetContentWrapperClass: 'bg-red-100',
            widgetContentWrapperStyle: { paddingTop: '1.5rem' },
            iconWrapperClass: 'bg-blue-100',
            dataModel: 'CalonGubernur',
          },
        },
        {
          colSpan: 6,
          widgetType: 'default',
          widget: {
            id: '673125b4fbe60a002a9f3d98',
            title: 'Calon Bupati berdasarkan Jenis Kelamin',
            titleStyle: { paddingTop: '0.8rem', paddingBottom: '0.8rem' },
            styleOptions: customStyle4,
            titleWrapperClass: 'bg-sky-200',
            widgetContentWrapperClass: 'bg-sky-100',
            widgetContentWrapperStyle: { paddingTop: '1.5rem' },
            iconWrapperClass: 'bg-sky-100',
            dataModel: 'CalonCakada',
          },
        },
        {
          colSpan: 6,
          widgetType: 'default',
          widget: {
            id: '6731265cfbe60a002a9f3d9c',
            title: 'Wakil Bupati berdasarkan Jenis Kelamin',
            titleStyle: { paddingTop: '0.8rem', paddingBottom: '0.8rem' },
            styleOptions: customStyle4,
            titleWrapperClass: 'bg-sky-200',
            widgetContentWrapperClass: 'bg-sky-100',
            widgetContentWrapperStyle: { paddingTop: '1.5rem' },
            iconWrapperClass: 'bg-blue-200',
            dataModel: 'CalonCakada',
          },
        },
        {
          colSpan: 6,
          widgetType: 'default',
          widget: {
            id: '6732f29afbe60a002a9f3e09',
            title: 'Calon Walikota berdasarkan Jenis Kelamin',
            titleStyle: { paddingTop: '0.8rem', paddingBottom: '0.8rem' },
            styleOptions: customStyle4,
            titleWrapperClass: 'bg-teal-200',
            widgetContentWrapperClass: 'bg-teal-100',
            widgetContentWrapperStyle: { paddingTop: '1.5rem' },
            iconWrapperClass: 'bg-blue-200',
            dataModel: 'CalonCakada',
          },
        },
        {
          colSpan: 6,
          widgetType: 'default',
          widget: {
            id: '6732f2f6fbe60a002a9f3e12',
            title: 'Wakil Walikota berdasarkan Jenis Kelamin',
            titleStyle: { paddingTop: '0.8rem', paddingBottom: '0.8rem' },
            styleOptions: customStyle4,
            titleWrapperClass: 'bg-teal-200',
            widgetContentWrapperClass: 'bg-teal-100',
            widgetContentWrapperStyle: { paddingTop: '1.5rem' },
            iconWrapperClass: 'bg-blue-200',
            dataModel: 'CalonCakada',
          },
        },
        // {
        //   colSpan: 2,
        //   widgetType: 'default',
        //   widget: {
        //     id: '6731109cfbe60a002a9f3d49',
        //     title: 'Riwayat Calon Gubernur',
        //     titleStyle: { paddingTop: '0.8rem', paddingBottom: '0.8rem' },
        //     styleOptions: customStyle4,
        //     titleWrapperClass: 'bg-gray-300',
        //     widgetContentWrapperClass: 'bg-gray-200',
        //     widgetContentWrapperStyle: { paddingTop: '1.5rem' },
        //     iconWrapperClass: 'bg-blue-200',
        //   },
        // },
        // {
        //   colSpan: 2,
        //   widgetType: 'default',
        //   widget: {
        //     id: '67311919fbe60a002a9f3d52',
        //     title: 'Riwayat Calon Wakil Gubernur',
        //     titleStyle: { paddingTop: '0.8rem', paddingBottom: '0.8rem' },
        //     styleOptions: customStyle4,
        //     titleWrapperClass: 'bg-gray-300',
        //     widgetContentWrapperClass: 'bg-gray-200',
        //     widgetContentWrapperStyle: { paddingTop: '1.5rem' },
        //     iconWrapperClass: 'bg-blue-200',
        //   },
        // },
      ],
    },
  ];

  useEffect(() => {
    // If the filter is triggered from Sisense's side, we just return to prevent double processing of filter
    const newFilter: Array<IFilterState> = [];
    if (filterProvinsi?.value) {
      newFilter.push({
        widgetId: WebPageFilterID,
        categoryValue: filterProvinsi.value,
        attribute: "KODE_PROV",
        value: filterProvinsi.value
      })

      if (filterKabupaten?.value) {
        newFilter.push({
          widgetId: WebPageFilterID,
          categoryValue: filterKabupaten.value,
          attribute: "KODE_KAB",
          value: filterKabupaten.value
        })
      }
    }

    setSelectedFilters(newFilter)
  }, [filterProvinsi, filterKabupaten])

  useEffect(() => {
    const fetch = async () => {
      try {
        const provinceResponse = await axios.get(`${import.meta.env.VITE_APP_API_URL}/sumcagub-all`)
        const districtResponse = await axios.get(`${import.meta.env.VITE_APP_API_URL}/sumcakada-all`)

        setProvinceMapData({
          originalData: provinceResponse.data,
          dataKey: "jumlahCalonGubernur"
        })

        setDistrictMapData({
          originalData: districtResponse.data,
          dataKey: "jumlahCalonWalikotaBupati"
        })

        setProvinceColorList(provinceDataColorList)
        setDistrictColorList(districtDataColorList)

        setProvincePopupData(provincePopupDataList)
        setDistrictPopupData(districtPopupDataList)

        setMapLegendTitle("Jumlah Kandidat")
      } catch (error) {
        console.error(error)
      }
    }

    fetch()
  }, [])

  return (
    <div className="multi-dashboard-container">
      {dashboards.map(dashboard => (
        <DashboardGridComponent key={dashboard.id} dashboard={dashboard} webpageFilters={selectedFilters} />
      ))}
    </div>
  );
};

export default SisenseCalonGubernurComponent;
