import React, { useContext, useEffect, useState } from 'react';

import { IDashboard, IFilterState } from './_models';

import { customStyle1, customStyle10, customStyle12, customStyle2, customStyle3, customStyle4, customStyle5, customStyle6, customStyle7 } from './_SisenseWidgetStyleOptions';
import DashboardGridComponent from './DashboardGridComponent';
import { IStandardColorRange, IPopupContent } from '../public-profile/profiles/company copy/blocks/interfaces/global';
import { MapDataContext, FilterContext } from '../public-profile/profiles/company copy';
import axios from 'axios';
import { DistrictWebPageFilterID, ProvinceWebPageFilterID, SIPDBPJS, SIPDKemenko } from './_datamodels';

const provinceDataColorList: Array<IStandardColorRange> = [
  {
    stepMin: 0.00,
    stepMax: 19.9999999,
    color: '#ffedd5'
  },
  {
    stepMin: 20.00,
    stepMax: 39.9999999,
    color: '#fdba74'
  },
  {
    stepMin: 40.00,
    stepMax: 59.9999999,
    color: '#f97316'
  },
  {
    stepMin: 60.00,
    stepMax: 79.9999999,
    color: '#c2410c'
  },
  {
    stepMin: 80.00,
    stepMax: 100.00,
    color: '#7c2d12'
  }
]

// const provinceDataColorList: Array<IStandardColorRange> = [
//   {
//     stepMin: 0.00,
//     stepMax: 19.9999999,
//     color: '#ecfccb'
//   },
//   {
//     stepMin: 20.00,
//     stepMax: 39.9999999,
//     color: '#bef264'
//   },
//   {
//     stepMin: 40.00,
//     stepMax: 59.9999999,
//     color: '#84cc16'
//   },
//   {
//     stepMin: 60.00,
//     stepMax: 79.9999999,
//     color: '#4d7c0f'
//   },
//   {
//     stepMin: 80.00,
//     stepMax: 100.00,
//     color: '#365314'
//   }
// ]

const districtDataColorList: Array<IStandardColorRange> = [
  {
    stepMin: 0.00,
    stepMax: 19.9999999,
    color: '#ffedd5'
  },
  {
    stepMin: 20.00,
    stepMax: 39.9999999,
    color: '#fdba74'
  },
  {
    stepMin: 40.00,
    stepMax: 59.9999999,
    color: '#f97316'
  },
  {
    stepMin: 60.00,
    stepMax: 79.9999999,
    color: '#c2410c'
  },
  {
    stepMin: 80.00,
    stepMax: 100.00,
    color: '#7c2d12'
  }
]



const SisenseKemenko: React.FC<{ isSelected: boolean }> = ({ isSelected }) => {
  const { setProvinceMapData, setMapLegendTitle, setProvinceColorList, setDistrictColorList, setDistrictMapData, setProvincePopupData, setDistrictPopupData } = useContext(MapDataContext)
  const { filterProvinsi, filterKabupaten } = useContext(FilterContext);

  const [selectedFilters, setSelectedFilters] = useState<IFilterState[]>([]);
  const dashboards: IDashboard[] = [
    {
      id: '6719fa05fbe60a002a9f30d5',
      name: 'KEMISKINAN EKSTREM',
      widgets: [
        {
          colSpan: 6,
          widgetType: 'default',
          widget: {
            id: '674d775ad5db91003325b49a', title: 'Jumlah Keluarga Desil',
            styleOptions: customStyle1,
            titleWrapperClass: 'bg-sky-100',
            widgetContentWrapperClass: 'bg-sky-50',
            // widgetContentWrapperStyle: { paddingTop: '0.2rem' },
            iconWrapperClass: 'bg-sky-200',
            // icon: <RiEmotionSadLine className='text-4xl' />
          },
        },
        {
          colSpan: 6,
          widgetType: 'default',
          widget: {
            id: '674d7754d5db91003325b498', title: 'Jumlah Individu Desil',
            styleOptions: customStyle1,
            titleWrapperClass: 'bg-orange-100',
            widgetContentWrapperClass: 'bg-orange-50',
            // widgetContentWrapperStyle: { paddingTop: '0.2rem' },
            iconWrapperClass: 'bg-sky-100',
            // icon: <FcMoneyTransfer className='text-4xl' />
          },
        },

        {
          colSpan: 3,
          widgetType: 'default',
          widget: {
            id: '674d795ed5db91003325b4b2', title: 'Jumlah Kepala Keluarga Perempuan',
            styleOptions: customStyle1,
            titleWrapperClass: 'bg-sky-100',
            widgetContentWrapperClass: 'bg-sky-50',
            titleStyle: { paddingTop: '0.3rem', paddingBottom: '1rem' },
            iconWrapperClass: 'bg-sky-200',
            // icon: <RiEmotionSadLine className='text-4xl' />
          },
        },
        {
          colSpan: 3,
          widgetType: 'default',
          widget: {
            id: '674d7e38d5db91003325b4d7', title: 'Jumlah Kepala Keluarga Bekerja',
            styleOptions: customStyle1,
            titleWrapperClass: 'bg-sky-100',
            widgetContentWrapperClass: 'bg-sky-50',
            titleStyle: { paddingTop: '0.3rem', paddingBottom: '1rem' },
            iconWrapperClass: 'bg-sky-100',
            // icon: <FcMoneyTransfer className='text-4xl' />
          },
        },

        {
          colSpan: 3,
          widgetType: 'default',
          widget: {
            id: '674d4d0cd5db91003325b471', title: 'Jumlah Penduduk Individu Bekerja',
            styleOptions: customStyle1,
            titleWrapperClass: 'bg-orange-100',
            widgetContentWrapperClass: 'bg-orange-50',
            titleStyle: { paddingTop: '0.3rem', paddingBottom: '1rem' },
            iconWrapperClass: 'bg-sky-200',
            // icon: <RiEmotionSadLine className='text-4xl' />
          },
        },
        {
          colSpan: 3,
          widgetType: 'default',
          widget: {
            id: '674563adfbe60a002a9f4337', title: 'Jumlah Penduduk Status Bekerja',
            styleOptions: customStyle1,
            titleWrapperClass: 'bg-orange-100',
            widgetContentWrapperClass: 'bg-orange-50',
            titleStyle: { paddingTop: '0.3rem', paddingBottom: '1rem' },
            iconWrapperClass: 'bg-sky-100',
            // icon: <FcMoneyTransfer className='text-4xl' />
          },
        },
        // {
        //   colSpan: 12,
        //   widgetType: 'default',
        //   widget: {
        //     id: '674d9799d5db91003325b52e', title: 'Jumlah Keluarga Desil',
        //     styleOptions: customStyle11,
        //     // titleWrapperClass: 'bg-white-100',
        //     // widgetContentWrapperClass: 'bg-white-50',
        //     widgetContentWrapperStyle: { paddingTop: '2rem' },
        //     iconWrapperClass: 'bg-sky-100',
        //     // icon: <FcMoneyTransfer className='text-4xl' />
        //   },
        // },
        {
          colSpan: 3,
          widgetType: 'default',
          widget: {
            id: '674563adfbe60a002a9f4340', title: 'Status Pekerjaan Kepala Keluarga',
            styleOptions: customStyle5,
            titleWrapperClass: 'bg-sky-100',
            widgetContentWrapperClass: 'bg-sky-50',
            titleStyle: { paddingTop: '0.3rem', paddingBottom: '1rem' },
            iconWrapperClass: 'bg-sky-100',
            // icon: <FcMoneyTransfer className='text-4xl' />
          },
        },
        {
          colSpan: 3,
          widgetType: 'default',
          widget: {
            id: '674d82ccd5db91003325b4f6', title: 'Jenis Pekerjaan Kepala Keluarga',
            styleOptions: customStyle5,
            titleWrapperClass: 'bg-sky-100',
            widgetContentWrapperClass: 'bg-sky-50',
            titleStyle: { paddingTop: '0.3rem', paddingBottom: '1rem' },
            iconWrapperClass: 'bg-sky-100',
            // icon: <FcMoneyTransfer className='text-4xl' />
          },
        },
        {
          colSpan: 3,
          widgetType: 'default',
          widget: {
            id: '67501213d5db91003325b8d7', title: 'Status Pekerjaan Individu',
            styleOptions: customStyle5,
            titleWrapperClass: 'bg-orange-100',
            widgetContentWrapperClass: 'bg-orange-50',
            titleStyle: { paddingTop: '0.3rem', paddingBottom: '1rem' },
            iconWrapperClass: 'bg-sky-100',
            // icon: <FcMoneyTransfer className='text-4xl' />
          },
        },
        {
          colSpan: 3,
          widgetType: 'default',
          widget: {
            id: '674d9dcad5db91003325b559', title: 'Jenis Pekerjaan Individu',
            styleOptions: customStyle5,
            titleWrapperClass: 'bg-orange-100',
            widgetContentWrapperClass: 'bg-orange-50',
            titleStyle: { paddingTop: '0.3rem', paddingBottom: '1rem' },
            iconWrapperClass: 'bg-sky-100',
            // icon: <FcMoneyTransfer className='text-4xl' />
          },
        },

        {
          colSpan: 6,
          widgetType: 'default',
          widget: {
            id: '674563adfbe60a002a9f4339', title: 'Kepala Keluarga Perempuan',
            styleOptions: customStyle5,
            titleWrapperClass: 'bg-sky-100',
            widgetContentWrapperClass: 'bg-sky-50',
            // widgetContentWrapperStyle: { paddingTop: '0.2rem' },
            iconWrapperClass: 'bg-sky-100',
            // icon: <FcMoneyTransfer className='text-4xl' />
          },
        },
        {
          colSpan: 6,
          widgetType: 'default',
          widget: {
            id: '6751923ed5db91003325bb38', title: 'Individu Bekerja dan Tidak Bekerja',
            styleOptions: customStyle5,
            titleWrapperClass: 'bg-orange-100',
            widgetContentWrapperClass: 'bg-orange-50',
            // widgetContentWrapperStyle: { paddingTop: '0.2rem' },
            iconWrapperClass: 'bg-sky-100',
            // icon: <FcMoneyTransfer className='text-4xl' />
          },
        },

        {
          colSpan: 6,
          widgetType: 'default',
          widget: {
            id: '674563adfbe60a002a9f4336', title: 'Klasifikasi Usia Individu',
            styleOptions: customStyle5,
            titleWrapperClass: 'bg-sky-100',
            widgetContentWrapperClass: 'bg-sky-50',
            // widgetContentWrapperStyle: { paddingTop: '0.2rem' },
            iconWrapperClass: 'bg-sky-100',
            // icon: <FcMoneyTransfer className='text-4xl' />
          },
        },
        {
          colSpan: 6,
          widgetType: 'default',
          widget: {
            id: '674563adfbe60a002a9f433e', title: 'Klasifikasi Usia Lansia',
            styleOptions: customStyle5,
            titleWrapperClass: 'bg-orange-100',
            widgetContentWrapperClass: 'bg-orange-50',
            // widgetContentWrapperStyle: { paddingTop: '0.2rem' },
            iconWrapperClass: 'bg-sky-100',
            // icon: <FcMoneyTransfer className='text-4xl' />
          },
        },

        {
          colSpan: 6,
          widgetType: 'default',
          widget: {
            id: '674d63c9d5db91003325b486', title: 'Fasilitas Rumah',
            styleOptions: customStyle5,
            titleWrapperClass: 'bg-zinc-200',
            widgetContentWrapperClass: 'bg-zinc-100',
            // widgetContentWrapperStyle: { paddingTop: '0.2rem' },
            iconWrapperClass: 'bg-sky-100',
            // icon: <FcMoneyTransfer className='text-4xl' />
          },
        },
        {
          colSpan: 6,
          widgetType: 'default',
          widget: {
            id: '674d98ddd5db91003325b53a', title: 'Fasilitas Sumber Listrik',
            styleOptions: customStyle5,
            titleWrapperClass: 'bg-zinc-200',
            widgetContentWrapperClass: 'bg-zinc-100',
            // widgetContentWrapperStyle: { paddingTop: '0.2rem' },
            iconWrapperClass: 'bg-sky-100',
            // icon: <FcMoneyTransfer className='text-4xl' />
          },
        },

        {
          colSpan: 6,
          widgetType: 'default',
          widget: {
            id: '674563adfbe60a002a9f433a', title: 'Fasilitas Memasak',
            styleOptions: customStyle5,
            titleWrapperClass: 'bg-zinc-200',
            widgetContentWrapperClass: 'bg-zinc-100',
            // widgetContentWrapperStyle: { paddingTop: '0.2rem' },
            iconWrapperClass: 'bg-sky-100',
            // icon: <FcMoneyTransfer className='text-4xl' />
          },
        },
        {
          colSpan: 6,
          widgetType: 'default',
          widget: {
            id: '6751902ad5db91003325bb22', title: 'Fasilitas Sanitasi',
            styleOptions: customStyle5,
            titleWrapperClass: 'bg-zinc-200',
            widgetContentWrapperClass: 'bg-zinc-100',
            // widgetContentWrapperStyle: { paddingTop: '0.2rem' },
            iconWrapperClass: 'bg-sky-100',
            // icon: <FcMoneyTransfer className='text-4xl' />
          },
        },
        // ANGGARAN KEMENKO

        {
          colSpan: 4,
          widgetType: 'default',
          widget: {
            id: '674563b7fbe60a002a9f4372', title: 'Anggaran Nasional',
            styleOptions: customStyle12,
            titleWrapperClass: 'bg-teal-100',
            widgetContentWrapperClass: 'bg-teal-50',
            titleStyle: { paddingTop: '0.3rem', paddingBottom: '1rem' },
            widgetContentWrapperStyle: { paddingTop: '1rem' },
            iconWrapperClass: 'bg-lime-200',
          },
        },
       

        {
          colSpan: 4,
          widgetType: 'default',
          widget: {
            id: '6752dfd4d5db91003325bd7d', title: 'Anggaran Provinsi',
            styleOptions: customStyle12,
            titleWrapperClass: 'bg-teal-100',
            widgetContentWrapperClass: 'bg-teal-50',
            titleStyle: { paddingTop: '0.3rem', paddingBottom: '1rem' },
            widgetContentWrapperStyle: { paddingTop: '1rem' },
            iconWrapperClass: 'bg-lime-200',
          },
        },
        
       
        {
          colSpan: 4,
          widgetType: 'default',
          widget: {
            id: '6752dfd7d5db91003325bd7f', title: 'Anggaran Kabupaten',
            styleOptions: customStyle12,
            titleWrapperClass: 'bg-teal-100',
            widgetContentWrapperClass: 'bg-teal-50',
            titleStyle: { paddingTop: '0.3rem', paddingBottom: '1rem' },
            widgetContentWrapperStyle: { paddingTop: '1rem' },
            iconWrapperClass: 'bg-lime-200',
          },
        },
        {
          colSpan: 4,
          widgetType: 'default',
          widget: {
            id: '6752e402d5db91003325bd9c', title: 'Anggaran SPM Nasional',
            styleOptions: customStyle12,
            titleWrapperClass: 'bg-teal-100',
            widgetContentWrapperClass: 'bg-teal-50',
            titleStyle: { paddingTop: '0.3rem', paddingBottom: '1rem' },
            widgetContentWrapperStyle: { paddingTop: '1rem' },
            iconWrapperClass: 'bg-lime-200',
          },
        },
        {
          colSpan: 4,
          widgetType: 'default',
          widget: {
            id: '6752e408d5db91003325bd9e', title: 'Anggaran SPM Provinsi',
            styleOptions: customStyle12,
            titleWrapperClass: 'bg-teal-100',
            widgetContentWrapperClass: 'bg-teal-50',
            titleStyle: { paddingTop: '0.3rem', paddingBottom: '1rem' },
            widgetContentWrapperStyle: { paddingTop: '1rem' },
            iconWrapperClass: 'bg-lime-200',
          },
        },
        {
          colSpan: 4,
          widgetType: 'default',
          widget: {
            id: '6752e40dd5db91003325bda0', title: 'Anggaran SPM Kabupaten',
            styleOptions: customStyle12,
            titleWrapperClass: 'bg-teal-100',
            widgetContentWrapperClass: 'bg-teal-50',
            titleStyle: { paddingTop: '0.3rem', paddingBottom: '1rem' },
            widgetContentWrapperStyle: { paddingTop: '1rem' },
            iconWrapperClass: 'bg-lime-200',
          },
        },

        {
          colSpan: 6,
          widgetType: 'default',
          widget: {
            id: '674563b7fbe60a002a9f4375', title: 'Anggaran Nasional Kemiskinan Ekstrem',
            styleOptions: customStyle7,
            titleWrapperClass: 'bg-teal-100',
            widgetContentWrapperClass: 'bg-teal-50',
            titleStyle: { paddingTop: '0.3rem', paddingBottom: '1rem' },
            widgetContentWrapperStyle: { paddingTop: '1rem' },
            iconWrapperClass: 'bg-lime-200',
          },
        },
        {
          colSpan: 6,
          widgetType: 'default',
          widget: {
            id: '6752d6d4d5db91003325bd14', title: 'Anggaran SPM Kemiskinan Ekstrim',
            styleOptions: customStyle7,
            titleWrapperClass: 'bg-teal-100',
            widgetContentWrapperClass: 'bg-teal-50',
            titleStyle: { paddingTop: '0.3rem', paddingBottom: '1rem' },
            widgetContentWrapperStyle: { paddingTop: '1rem' },
            iconWrapperClass: 'bg-lime-200',
          },
        },
        {
          colSpan: 12,
          widgetType: 'default',
          widget: {
            id: '6752de15d5db91003325bd51', title: 'Anggaran Urusan Pemerintahan Pilihan',
            styleOptions: customStyle5,
            titleWrapperClass: 'bg-teal-100',
            widgetContentWrapperClass: 'bg-teal-50',
            titleStyle: { paddingTop: '0.3rem', paddingBottom: '1rem' },
            widgetContentWrapperStyle: { paddingTop: '1rem' },
            iconWrapperClass: 'bg-lime-200',
          },
        },
        {
          colSpan: 6,
          widgetType: 'default',
          widget: {
            id: '6752df14d5db91003325bd70', title: 'Anggaran Urusan Pemerintahan Pilihan',
            styleOptions: customStyle4,
            titleWrapperClass: 'bg-teal-100',
            widgetContentWrapperClass: 'bg-teal-50',
            titleStyle: { paddingTop: '0.3rem', paddingBottom: '1rem' },
            widgetContentWrapperStyle: { paddingTop: '1rem' },
            iconWrapperClass: 'bg-lime-200',
          },
        },
        {
          colSpan: 6,
          widgetType: 'default',
          widget: {
            id: '6752df4fd5db91003325bd79', title: 'Anggaran SPM Urusan Pemerintahan Pilihan',
            styleOptions: customStyle4,
            titleWrapperClass: 'bg-teal-100',
            widgetContentWrapperClass: 'bg-teal-50',
            titleStyle: { paddingTop: '0.3rem', paddingBottom: '1rem' },
            widgetContentWrapperStyle: { paddingTop: '1rem' },
            iconWrapperClass: 'bg-lime-200',
          },
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
        attribute: SIPDKemenko.kode_prov,
        value: filterProvinsi.value
      })
    }

    if (filterKabupaten?.value) {
      newFilter.push({
        widgetId: DistrictWebPageFilterID,
        categoryValue: filterKabupaten.value,
        attribute: SIPDKemenko.kode_kab,
        value: filterKabupaten.value.slice(0, 2) + "." + filterKabupaten.value.slice(2)
      })
    }

    setSelectedFilters(newFilter)
  }, [filterProvinsi, filterKabupaten])

  useEffect(() => {
    const fetch = async () => {
      try {
        const provinceResponse = await axios.get(`${import.meta.env.VITE_APP_API_URL}/kemenko-data`, { withCredentials: true })
        const districtResponse = await axios.get(`${import.meta.env.VITE_APP_API_URL}/kemenko-data`, { withCredentials: true })
        setProvinceMapData({
          originalData: provinceResponse.data,
          dataKey: "jumlahKeluarga",
          dynamicColor: true
        })

        setDistrictMapData({
          originalData: districtResponse.data,
          dataKey: "jumlahKeluarga",
          dynamicColor: true
        })

        setProvinceColorList(provinceDataColorList)
        setDistrictColorList(districtDataColorList)

        setProvincePopupData([
          {
            sourceKey: "jumlahKeluarga",
            title: "Jumlah Keluarga"
          },
          {
            sourceKey: "jumlahKeluargaDesil",
            title: "Jumlah Keluarga Desil",
            // percentage: true
          },
          {
            sourceKey: "jumlahIndividuDesil",
            title: "Jumlah Individu Desil",
            // percentage: true
          }
        ])

        setDistrictPopupData([
          {
            sourceKey: "jumlahKeluarga",
            title: "Jumlah Keluarga"
          },
          {
            sourceKey: "jumlahKeluargaDesil",
            title: "Jumlah Keluarga Desil",
            // percentage: true
          },
          {
            sourceKey: "jumlahIndividuDesil",
            title: "Jumlah Individu Desil",
            // percentage: true
          }
        ])

        setMapLegendTitle("Jumlah Peserta BPJS Aktif")
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

export default SisenseKemenko;
