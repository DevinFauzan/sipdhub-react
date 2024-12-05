import React, { useContext, useEffect, useState } from 'react';
import { IDashboard, IFilterState } from './_models';
import { customStyle1, customStyle11, customStyle2, customStyle3, customStyle4, customStyle5, customStyle6, customStyle8, customStyle9 } from './_SisenseWidgetStyleOptions';
import DashboardGridComponent from './DashboardGridComponent';
import { FcCollaboration, FcDiploma1, FcDisclaimer, FcGraduationCap, FcMoneyTransfer } from 'react-icons/fc';
import { FilterContext, MapDataContext } from '../public-profile/profiles/company copy';
import { DistrictWebPageFilterID, DPTPemulaDisabilitas, ProvinceWebPageFilterID, WebPageFilterID } from './_datamodels';
import { IPopupContent, IStandardColorRange } from '../public-profile/profiles/company copy/blocks/interfaces/global';
import axios from 'axios';

const provinceDataColorList: Array<IStandardColorRange> = [
  {
    stepMin: 0.00,
    stepMax: 19.9999999,
    color: '#B9DDF1'
  },
  {
    stepMin: 20.00,
    stepMax: 39.9999999,
    color: '#8BBADC'
  },
  {
    stepMin: 40.00,
    stepMax: 59.9999999,
    color: '#6798C1'
  },
  {
    stepMin: 60.00,
    stepMax: 79.9999999,
    color: '#4776A4'
  },
  {
    stepMin: 80.00,
    stepMax: 100.00,
    color: '#2A5783'
  }
]

const districtDataColorList: Array<IStandardColorRange> = [
  {
    stepMin: 0.00,
    stepMax: 19.9999999,
    color: '#B9DDF1'
  },
  {
    stepMin: 20.00,
    stepMax: 39.9999999,
    color: '#8BBADC'
  },
  {
    stepMin: 40.00,
    stepMax: 59.9999999,
    color: '#6798C1'
  },
  {
    stepMin: 60.00,
    stepMax: 79.9999999,
    color: '#4776A4'
  },
  {
    stepMin: 80.00,
    stepMax: 100.00,
    color: '#2A5783'
  }
]

const popupDataList: Array<IPopupContent> = [
  {
    sourceKey: "disabilitas_jumlah",
    title: "Jumlah DPT Disabilitas"
  },
  {
    sourceKey: "persentase_sudah_rekam",
    title: "Persentase DPT Sudah Rekam",
    percentage: true
  },
  {
    sourceKey: "disabilitas_rekam",
    title: "DPT Sudah Rekam"
  },
  {
    sourceKey: "disabilitas_belum_rekam",
    title: "DPT Belum Rekam"
  },
]

const SisenseDisabilitasComponent: React.FC<{ isSelected: boolean }> = ({ isSelected }) => {
  const { filterProvinsi, filterKabupaten } = useContext(FilterContext);
  const { setProvinceMapData, setDistrictMapData, setProvinceColorList, setDistrictColorList, setProvincePopupData, setDistrictPopupData, setMapLegendTitle } = useContext(MapDataContext)

  const [selectedFilters, setSelectedFilters] = useState<IFilterState[]>([]);

  const dashboards: IDashboard[] = [
    {
      id: '67311a6bfbe60a002a9f3d58',
      name: 'Disabilitas',
      widgets: [
        // baris 1
        {
          colSpan: 3,
          widgetType: 'default',
          widget: {
            id: '673307e5fbe60a002a9f3e9f', 
            title: 'Pemilih Disabilitas',
            styleOptions: customStyle1,
            titleWrapperClass: 'bg-stone-200',
            titleStyle: { paddingTop: '0.1rem', paddingBottom: '0.1rem' },
            widgetContentWrapperClass: 'bg-stone-100', widgetContentWrapperStyle: { paddingTop: '0rem' },
            iconWrapperClass: 'bg-blue-100',
            // icon: <FcMoneyTransfer className='text-4xl' />
          },
        },
        {
          colSpan: 3,
          widgetType: 'default',
          widget: {
            id: '67330820fbe60a002a9f3ea3', 
            title: 'Rekam',
            styleOptions: customStyle1,
            titleWrapperClass: 'bg-stone-200',
            widgetContentWrapperClass: 'bg-stone-100', widgetContentWrapperStyle: { paddingTop: '0rem' },
            iconWrapperClass: 'bg-blue-100',
            titleStyle: { paddingTop: '0.1rem', paddingBottom: '0.1rem' },
            // icon: <FcMoneyTransfer className='text-4xl' />
          },
        },
        {
          colSpan: 3,
          widgetType: 'default',
          widget: {
            id: '6733083afbe60a002a9f3ea7', 
            title: 'Belum Rekam',
            styleOptions: customStyle1,
            titleWrapperClass: 'bg-stone-200',
            titleStyle: { paddingTop: '0.1rem', paddingBottom: '0.1rem' },
            widgetContentWrapperClass: 'bg-stone-100', widgetContentWrapperStyle: { paddingTop: '0rem' },
            iconWrapperClass: 'bg-blue-100',
            // icon: <FcMoneyTransfer className='text-4xl' />
          },
        },

        // baris 2
        {
          colSpan: 3,
          widgetType: 'default',
          widget: {
            id: '67311f4cfbe60a002a9f3d6e', 
            title: '% Perekaman',
            styleOptions: customStyle5,
            titleWrapperClass: 'bg-stone-200',
            widgetContentWrapperClass: 'bg-stone-100', widgetContentWrapperStyle: { paddingTop: '0rem' },
            iconWrapperClass: 'bg-blue-100',
            titleStyle: { paddingTop: '0.1rem', paddingBottom: '0.1rem' },
            // icon: <FcMoneyTransfer className='text-4xl' />
          },
        },
        {
          colSpan: 3,
          widgetType: 'default',
          widget: {
            id: '67330773fbe60a002a9f3e9b', 
            title: 'Perekaman',
            styleOptions: customStyle5,
            titleWrapperClass: 'bg-stone-200',
            widgetContentWrapperClass: 'bg-stone-100', widgetContentWrapperStyle: { paddingTop: '0rem' },
            iconWrapperClass: 'bg-blue-100',
            titleStyle: { paddingTop: '0.1rem', paddingBottom: '0.1rem' },
            // icon: <FcMoneyTransfer className='text-4xl' />
          },
        },
        {
          colSpan: 3,
          widgetType: 'default',
          widget: {
            id: '67330702fbe60a002a9f3e92', 
            title: 'Belum Rekam',
            styleOptions: customStyle5,
            titleWrapperClass: 'bg-stone-200',
            widgetContentWrapperClass: 'bg-stone-100', widgetContentWrapperStyle: { paddingTop: '0rem' },
            iconWrapperClass: 'bg-blue-100',
            titleStyle: { paddingTop: '0.1rem', paddingBottom: '0.1rem' },
            // icon: <FcMoneyTransfer className='text-4xl' />
          },
        },
        // baris 3
        {
          colSpan: 6,
          widgetType: 'default',
          widget: {
            id: '673120eefbe60a002a9f3d7a', 
            title: 'Jumlah DPT Disabilitas Provinsi',
            styleOptions: customStyle11,
            titleWrapperClass: 'bg-stone-200',
            widgetContentWrapperClass: 'bg-stone-100', widgetContentWrapperStyle: { paddingTop: '0rem' },
            iconWrapperClass: 'bg-blue-100',
            titleStyle: { paddingTop: '0.1rem', paddingBottom: '0.1rem' },
            // icon: <FcMoneyTransfer className='text-4xl' />
          },
          filterable: true,
          tiangDewa: true,
          tiangDewaColor: '#F5F5F4'
        },
        {
          colSpan: 6,
          widgetType: 'default',
          widget: {
            id: '673c6c3bfbe60a002a9f40d2', 
            title: 'Jumlah DPT Disabilitas Kabupaten',
            styleOptions: customStyle11,
            titleWrapperClass: 'bg-stone-200',
            widgetContentWrapperClass: 'bg-stone-100', widgetContentWrapperStyle: { paddingTop: '0rem' },
            iconWrapperClass: 'bg-blue-100',
            titleStyle: { paddingTop: '0.1rem', paddingBottom: '0.1rem' },
            // icon: <FcMoneyTransfer className='text-4xl' />
          },
          sourceFilter: true,
          tiangDewa: true,
          tiangDewaColor: '#F5F5F4'
        },
      ]
    },
  ];

  useEffect(() => {
    // If the filter is triggered from Sisense's side, we just return to prevent double processing of filter
    const newFilter: Array<IFilterState> = [];
    if (filterProvinsi?.value) {
      newFilter.push({
        widgetId: ProvinceWebPageFilterID,
        categoryValue: filterProvinsi.value,
        attribute: DPTPemulaDisabilitas.NO_PROV,
        value: filterProvinsi.value
      })
    }

    if (filterKabupaten?.value) {
      newFilter.push({
        widgetId: DistrictWebPageFilterID,
        categoryValue: filterKabupaten.value,
        attribute: DPTPemulaDisabilitas.NO_KAB,
        value: filterKabupaten.value
      })
    }

    setSelectedFilters(newFilter)
  }, [filterProvinsi, filterKabupaten])

  useEffect(() => {
    const fetch = async () => {
      try {
        const provinceResponse = await axios.get(`${import.meta.env.VITE_APP_API_URL}/sumdpt-disabilitas-all-prov`)
        const districtResponse = await axios.get(`${import.meta.env.VITE_APP_API_URL}/sumdpt-disabilitas-all-kab`)

        setProvinceMapData({
          originalData: provinceResponse.data,
          dataKey: "persentase_sudah_rekam",
          percentage: true
        })

        setDistrictMapData({
          originalData: districtResponse.data,
          dataKey: "persentase_sudah_rekam",
          percentage: true
        })

        setProvinceColorList(provinceDataColorList)
        setDistrictColorList(districtDataColorList)

        setProvincePopupData(popupDataList)
        setDistrictPopupData(popupDataList)

        setMapLegendTitle("Persen DPT Disabilitas")
      } catch (error) {
        console.error(error)
      }
    }

    if (isSelected) {
      fetch()
    }
  }, [isSelected])

  return (
    <div className="multi-dashboard-container">
      {dashboards.map(dashboard => (
        <DashboardGridComponent key={dashboard.id} dashboard={dashboard} webpageFilters={selectedFilters} />
      ))}
    </div>
  );
};

export default SisenseDisabilitasComponent;
