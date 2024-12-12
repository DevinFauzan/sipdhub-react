import React, { useContext, useEffect, useState } from 'react';

import { IDashboard, IFilterState } from './_models';

import { customStyle1, customStyle10, customStyle12, customStyle2, customStyle3, customStyle4, customStyle5, customStyle6, customStyle7, customStyle8 } from './_SisenseWidgetStyleOptions';
import DashboardGridComponent from './DashboardGridComponent';
import { IStandardColorRange, IPopupContent } from '../public-profile/profiles/company copy/blocks/interfaces/global';
import { MapDataContext, FilterContext } from '../public-profile/profiles/company copy';
import axios from 'axios';
import { DistrictWebPageFilterID, ProvinceWebPageFilterID, SIPDBPJS } from './_datamodels';

const provinceDataColorList: Array<IStandardColorRange> = [
  {
    stepMin: 0.00,
    stepMax: 19.9999999,
    color: '#ecfccb'
  },
  {
    stepMin: 20.00,
    stepMax: 39.9999999,
    color: '#bef264'
  },
  {
    stepMin: 40.00,
    stepMax: 59.9999999,
    color: '#84cc16'
  },
  {
    stepMin: 60.00,
    stepMax: 79.9999999,
    color: '#4d7c0f'
  },
  {
    stepMin: 80.00,
    stepMax: 100.00,
    color: '#365314'
  }
]

// const provinceDataColorList: Array<IStandardColorRange> = [
//   {
//     stepMin: 0.00,
//     stepMax: 19.9999999,
//     color: '#ffedd5'
//   },
//   {
//     stepMin: 20.00,
//     stepMax: 39.9999999,
//     color: '#fdba74'
//   },
//   {
//     stepMin: 40.00,
//     stepMax: 59.9999999,
//     color: '#f97316'
//   },
//   {
//     stepMin: 60.00,
//     stepMax: 79.9999999,
//     color: '#c2410c'
//   },
//   {
//     stepMin: 80.00,
//     stepMax: 100.00,
//     color: '#7c2d12'
//   }
// ]

const districtDataColorList: Array<IStandardColorRange> = [
  {
    stepMin: 0.00,
    stepMax: 19.9999999,
    color: '#ecfccb'
  },
  {
    stepMin: 20.00,
    stepMax: 39.9999999,
    color: '#bef264'
  },
  {
    stepMin: 40.00,
    stepMax: 59.9999999,
    color: '#84cc16'
  },
  {
    stepMin: 60.00,
    stepMax: 79.9999999,
    color: '#4d7c0f'
  },
  {
    stepMin: 80.00,
    stepMax: 100.00,
    color: '#365314'
  }
]

const popupDataList: Array<IPopupContent> = [
  
]


const SisenseBPJS: React.FC<{ isSelected: boolean }> = ({ isSelected }) => {
  const { setProvinceMapData, setMapLegendTitle, setProvinceColorList, setDistrictColorList, setDistrictMapData, setProvincePopupData, setDistrictPopupData, setDropdownOptions } = useContext(MapDataContext)
  const { filterProvinsi, filterKabupaten } = useContext(FilterContext);

  const [selectedFilters, setSelectedFilters] = useState<IFilterState[]>([]);

  const dashboards: IDashboard[] = [
    {
      id: '6755bbf2d5db91003325bdc3',
      name: 'BPJS KESEHATAN',
      withMap: true,
      withMapFilter: true,
      widgets: [
        {
          colSpan: 4,
          widgetType: 'default',
          widget: {
            id: '6755bbf2d5db91003325bdc6', title: 'Jumlah Penduduk',
            styleOptions: customStyle1,
            titleWrapperClass: 'bg-orange-100',
            widgetContentWrapperClass: 'bg-orange-50',
            titleStyle: { paddingTop: '0.3rem', paddingBottom: '1rem' },
            iconWrapperClass: 'bg-sky-200',
            // icon: <RiEmotionSadLine className='text-4xl' />
          },
        },
        {
          colSpan: 4,
          widgetType: 'default',
          widget: {
            id: '6755bbf2d5db91003325bdc5', title: 'Jumlah Peserta BPJS Aktif',
            styleOptions: customStyle1,
            titleWrapperClass: 'bg-orange-100',
            widgetContentWrapperClass: 'bg-orange-50',
            titleStyle: { paddingTop: '0.3rem', paddingBottom: '1rem' },
            iconWrapperClass: 'bg-sky-100',
            // icon: <FcMoneyTransfer className='text-4xl' />
          },
        },
        {
          colSpan: 4,
          widgetType: 'default',
          widget: {
            id: '6755bbf2d5db91003325bdcb', title: 'Jumlah Peserta BPJS Tidak Aktif',
            styleOptions: customStyle1,
            titleWrapperClass: 'bg-orange-100',
            widgetContentWrapperClass: 'bg-orange-50',
            titleStyle: { paddingTop: '0.3rem', paddingBottom: '1rem' },
            iconWrapperClass: 'bg-sky-100',
            // icon: <FcMoneyTransfer className='text-4xl' />
          },
        },
        // {
        //   colSpan: 6,
        //   widgetType: 'default',
        //   widget: {
        //     id: '6755bd24d5db91003325bded', title: 'Peserta Aktif vs Penduduk',
        //     styleOptions: customStyle5,
        //     titleWrapperClass: 'bg-orange-100',
        //     widgetContentWrapperClass: 'bg-orange-50',
        //     titleStyle: { paddingTop: '0.3rem', paddingBottom: '1rem' },
        //     iconWrapperClass: 'bg-sky-100',
        //     // icon: <FcMoneyTransfer className='text-4xl' />
        //   },
        // },
        {
          colSpan: 6,
          widgetType: 'default',
          widget: {
            id: '6755bd7ad5db91003325bdf8', title: 'Peserta Aktif vs Peserta Tidak Aktif',
            styleOptions: customStyle8,
            titleWrapperClass: 'bg-orange-100',
            widgetContentWrapperClass: 'bg-orange-50',
            titleStyle: { paddingTop: '0.3rem', paddingBottom: '1rem' },
            widgetContentWrapperStyle: { paddingTop: '1rem' },
            iconWrapperClass: 'bg-sky-100',
            // icon: <FcMoneyTransfer className='text-4xl' />
          },
        },
        {
          colSpan: 6,
          widgetType: 'default',
          widget: {
            id: '6755bd2dd5db91003325bdf1', title: 'Peserta Aktif dan Tidak Aktif BPJS',
            styleOptions: customStyle8,
            titleWrapperClass: 'bg-orange-100',
            widgetContentWrapperClass: 'bg-orange-50',
            titleStyle: { paddingTop: '0.3rem', paddingBottom: '1rem' },
            widgetContentWrapperStyle: { paddingTop: '1rem' },
            iconWrapperClass: 'bg-sky-100',
            // icon: <FcMoneyTransfer className='text-4xl' />
          },
          filterable: true,
          tiangDewa: true,
          tiangDewaColor: 'bg-red-100',
        },
        // ANGGARAN BPJS
        // BARIS 1 
        {
          colSpan: 4,
          widgetType: 'default',
          widget: {
            id: '6755bea8d5db91003325be02', title: 'Total Anggaran BPJS tahun 2024',
            styleOptions: customStyle1,
            titleWrapperClass: 'bg-teal-100',
            widgetContentWrapperClass: 'bg-teal-50',
            titleStyle: { paddingTop: '0.3rem', paddingBottom: '1rem' },
            widgetContentWrapperStyle: { paddingTop: '1rem' },
            iconWrapperClass: 'bg-sky-100',
            // icon: <FcMoneyTransfer className='text-4xl' />
          },
        },

        {
          colSpan: 4,
          widgetType: 'default',
          widget: {
            id: '6755beadd5db91003325be04', title: 'Total Proyeksi Anggaran tahun 2024',
            styleOptions: customStyle1,
            titleWrapperClass: 'bg-teal-100',
            widgetContentWrapperClass: 'bg-teal-50',
            titleStyle: { paddingTop: '0.3rem', paddingBottom: '1rem' },
            widgetContentWrapperStyle: { paddingTop: '1rem' },
            iconWrapperClass: 'bg-sky-100',
            // icon: <FcMoneyTransfer className='text-4xl' />
          },
        },
        {
          colSpan: 4,
          widgetType: 'default',
          widget: {
            id: '6755c124d5db91003325be24', title: 'Tunggakan sd Desember 2023',
            styleOptions: customStyle1,
            titleWrapperClass: 'bg-teal-100',
            widgetContentWrapperClass: 'bg-teal-50',
            titleStyle: { paddingTop: '0.3rem', paddingBottom: '1rem' },
            widgetContentWrapperStyle: { paddingTop: '1rem' },
            iconWrapperClass: 'bg-sky-100',
            // icon: <FcMoneyTransfer className='text-4xl' />
          },
        },
        {
          colSpan: 6,
          widgetType: 'default',
          widget: {
            id: '6755c7cbd5db91003325be39', title: 'Total Anggaran BPJS Tahun 2024',
            styleOptions: customStyle7,
            titleWrapperClass: 'bg-teal-100',
            widgetContentWrapperClass: 'bg-teal-50',
            titleStyle: { paddingTop: '0.3rem', paddingBottom: '1rem' },
            widgetContentWrapperStyle: { paddingTop: '1rem' },
            iconWrapperClass: 'bg-sky-100',
            // icon: <FcMoneyTransfer className='text-4xl' />
          },
        },
        {
          colSpan: 6,
          widgetType: 'default',
          widget: {
            id: '675682f2d5db91003325bf55', title: 'Komparasi Total Anggaran BPJS 2024',
            styleOptions: customStyle7,
            titleWrapperClass: 'bg-teal-100',
            widgetContentWrapperClass: 'bg-teal-50',
            titleStyle: { paddingTop: '0.3rem', paddingBottom: '1rem' },
            widgetContentWrapperStyle: { paddingTop: '1rem' },
            iconWrapperClass: 'bg-sky-100',
            // icon: <FcMoneyTransfer className='text-4xl' />
          },
        },
        {
          colSpan: 6,
          widgetType: 'default',
          widget: {
            id: '67567778d5db91003325bf0d', title: 'Rincian Anggaran BPJS Tahun 2024 Berdasarkan Segmen',
            styleOptions: customStyle6,
            titleWrapperClass: 'bg-teal-100',
            widgetContentWrapperClass: 'bg-teal-50',
            titleStyle: { paddingTop: '0.3rem', paddingBottom: '1rem' },
            widgetContentWrapperStyle: { paddingTop: '1rem' },
            iconWrapperClass: 'bg-sky-100',
            // icon: <FcMoneyTransfer className='text-4xl' />
          },
        },
        {
          colSpan: 6,
          widgetType: 'default',
          widget: {
            id: '6755c8dbd5db91003325be47', 
            title: 'Komparasi Rincian Anggaran BPJS Tahun 2024 Berdasarkan Segmen',
            styleOptions: customStyle6,
            titleWrapperClass: 'bg-teal-100',
            widgetContentWrapperClass: 'bg-teal-50',
            titleStyle: { paddingTop: '0.3rem', paddingBottom: '1rem' },
            widgetContentWrapperStyle: { paddingTop: '1rem' },
            iconWrapperClass: 'bg-sky-100',
            // icon: <FcMoneyTransfer className='text-4xl' />
          },
        },
        {
          colSpan: 12,
          widgetType: 'default',
          widget: {
            id: '67596eedd5db91003325c6ed', title: 'Alokasi Anggran BPJS Berdasarkan Segmen Pemerintah',
            styleOptions: customStyle10,
            titleWrapperClass: 'bg-teal-100',
            widgetContentWrapperClass: 'bg-teal-50',
            titleStyle: { paddingTop: '0.3rem', paddingBottom: '1rem' },
            widgetContentWrapperStyle: { paddingTop: '1rem' },
            iconWrapperClass: 'bg-sky-100',
            
            // icon: <FcMoneyTransfer className='text-4xl' />
          },
        },
        {
          colSpan: 12,
          widgetType: 'default',
          widget: {
            id: '67596e91d5db91003325c6eb', title: 'Alokasi Anggran BPJS Berdasarkan AKUN Pemerintah',
            styleOptions: customStyle10,
            titleWrapperClass: 'bg-teal-100',
            widgetContentWrapperClass: 'bg-teal-50',
            titleStyle: { paddingTop: '0.3rem', paddingBottom: '1rem' },
            widgetContentWrapperStyle: { paddingTop: '1rem' },
            iconWrapperClass: 'bg-sky-100',
            
            // icon: <FcMoneyTransfer className='text-4xl' />
          },
        }
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
        attribute: SIPDBPJS.kode_prov,
        value: filterProvinsi.value
      })
    }

    if (filterKabupaten?.value) {
      newFilter.push({
        widgetId: DistrictWebPageFilterID,
        categoryValue: filterKabupaten.value,
        attribute: SIPDBPJS.kode_kab,
        value: filterKabupaten.value.slice(0, 2) + "." + filterKabupaten.value.slice(2)
      })
    }

    setSelectedFilters(newFilter)
  }, [filterProvinsi, filterKabupaten])

  useEffect(() => {
    const fetch = async () => {
      try {
        const provinceResponse = await axios.get(`${import.meta.env.VITE_APP_API_URL}/bpjs-jumlah`, { withCredentials: true })
        const districtResponse = await axios.get(`${import.meta.env.VITE_APP_API_URL}/bpjs-jumlah`, { withCredentials: true })
        setProvinceMapData({
          originalData: provinceResponse.data,
          dataKey: "jumlahPstAktif",
          dynamicColor: true
        })

        setDistrictMapData({
          originalData: districtResponse.data,
          dataKey: "jumlahPstAktif",
          dynamicColor: true
        })

        setProvinceColorList(provinceDataColorList)
        setDistrictColorList(districtDataColorList)

        setProvincePopupData([
          {
            sourceKey: "jumlahPstAktif",
            title: "Jumlah Pst Aktif",
            // percentage: true
          },
          {
            sourceKey: "jumlahPstTidakAktif",
            title: "Jumlah Pst Non Aktif",
            // percentage: true
          }
        ])

        setDistrictPopupData([
          {
            sourceKey: "kodeKab",
            title: "Kabupaten"
          },
          {
            sourceKey: "jumlahPstAktif",
            title: "Jumlah Pst Aktif",
            // percentage: true
          },
          {
            sourceKey: "jumlahPstTidakAktif",
            title: "Jumlah Pst Non Aktif",
            // percentage: true
          }
        ])

        setMapLegendTitle("Jumlah Peserta BPJS Aktif")

        setDropdownOptions([])
      } catch (error) {
        console.error(error)
      }
    }
    fetch();
  }, [])

  return (
    <div className="multi-dashboard-container">
      {dashboards.map(dashboard => (
        <DashboardGridComponent key={dashboard.id} dashboard={dashboard} webpageFilters={selectedFilters} />
      ))}
    </div>
  );
};

export default SisenseBPJS;
