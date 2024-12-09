import React, { useContext, useEffect, useState } from 'react';

import { IDashboard, IFilterState } from './_models';

import { customStyle1, customStyle12, customStyle2, customStyle3, customStyle4, customStyle5, customStyle6, customStyle7 } from './_SisenseWidgetStyleOptions';
import DashboardGridComponent from './DashboardGridComponent';
import { IStandardColorRange, IPopupContent } from '../public-profile/profiles/company copy/blocks/interfaces/global';
import { MapDataContext, FilterContext } from '../public-profile/profiles/company copy';
import axios from 'axios';
import { DistrictWebPageFilterID, ProvinceWebPageFilterID, SIPDBKKBNKeluargaBeresikoStunting } from './_datamodels';

const provinceDataColorList: Array<IStandardColorRange> = [
  {
    stepMin: 0.00,
    stepMax: 19.9999999,
    color: '#fee2e2'
  },
  {
    stepMin: 20.00,
    stepMax: 39.9999999,
    color: '#fca5a5'
  },
  {
    stepMin: 40.00,
    stepMax: 59.9999999,
    color: '#ef4444'
  },
  {
    stepMin: 60.00,
    stepMax: 79.9999999,
    color: '#b91c1c'
  },
  {
    stepMin: 80.00,
    stepMax: 100.00,
    color: '#450a0a'
  }
]

const districtDataColorList: Array<IStandardColorRange> = [
  {
    stepMin: 0.00,
    stepMax: 19.9999999,
    color: '#fee2e2'
  },
  {
    stepMin: 20.00,
    stepMax: 39.9999999,
    color: '#fca5a5'
  },
  {
    stepMin: 40.00,
    stepMax: 59.9999999,
    color: '#ef4444'
  },
  {
    stepMin: 60.00,
    stepMax: 79.9999999,
    color: '#b91c1c'
  },
  {
    stepMin: 80.00,
    stepMax: 100.00,
    color: '#450a0a'
  }
]


const SisenseBkkbnKeluargaStunting: React.FC<{ isSelected: boolean }> = ({ isSelected }) => {
  const { setProvinceMapData, setMapLegendTitle, setProvinceColorList, setDistrictColorList, setDistrictMapData, setProvincePopupData } = useContext(MapDataContext)
  const { filterProvinsi, filterKabupaten } = useContext(FilterContext);

  const [selectedFilters, setSelectedFilters] = useState<IFilterState[]>([]);
  const dashboards: IDashboard[] = [
    {
      id: '67514ffdd5db91003325b982',
      name: 'KELUARGA BERESIKO STUNTING',
      widgets: [
        {
          colSpan: 3,
          widgetType: 'default',
          widget: {
            id: '67514ffdd5db91003325b983', title: 'Jumlah Keluarga',
            styleOptions: customStyle1,
            titleWrapperClass: 'bg-red-100',
            widgetContentWrapperClass: 'bg-red-50',
            titleStyle: { paddingTop: '0.3rem', paddingBottom: '1rem' },
          },
        },
        {
          colSpan: 3,
          widgetType: 'default',
          widget: {
            id: '67514ffdd5db91003325b984', title: 'Keluarga Sasaran',
            styleOptions: customStyle1,
            titleWrapperClass: 'bg-red-100',
            widgetContentWrapperClass: 'bg-red-50',
            titleStyle: { paddingTop: '0.3rem', paddingBottom: '1rem' },
            iconWrapperClass: 'bg-lime-200',
          },
        },
        {
          colSpan: 3,
          widgetType: 'default',
          widget: {
            id: '67514ffdd5db91003325b985', title: 'Peserta Non KB Modern',
            styleOptions: customStyle1,
            titleWrapperClass: 'bg-red-100',
            widgetContentWrapperClass: 'bg-red-50',
            titleStyle: { paddingTop: '0.3rem', paddingBottom: '1rem' },
            iconWrapperClass: 'bg-lime-200',
          },
        },
        {
          colSpan: 3,
          widgetType: 'default',
          widget: {
            id: '675189e9d5db91003325bad8', title: 'Pasangan Usia Subur',
            styleOptions: customStyle1,
            titleWrapperClass: 'bg-red-100',
            widgetContentWrapperClass: 'bg-red-50',
            titleStyle: { paddingTop: '0.3rem', paddingBottom: '1rem' },
            iconWrapperClass: 'bg-lime-200',
          },
        },
        {
          colSpan: 6,
          widgetType: 'default',
          widget: {
            id: '67514ffdd5db91003325b988', title: 'Keluarga Sasaran',
            styleOptions: customStyle7,
            titleWrapperClass: 'bg-red-100',
            widgetContentWrapperClass: 'bg-red-50',
            titleStyle: { paddingTop: '0.3rem', paddingBottom: '1rem' },
            iconWrapperClass: 'bg-lime-200',
          },
        },

        {
          colSpan: 6,
          widgetType: 'default',
          widget: {
            id: '67518621d5db91003325baa9', title: 'Usia Anak dan PUS',
            styleOptions: customStyle7,
            titleWrapperClass: 'bg-red-100',
            widgetContentWrapperClass: 'bg-red-50',
            titleStyle: { paddingTop: '0.3rem', paddingBottom: '1rem' },
            iconWrapperClass: 'bg-lime-200',
          },
        },
        {
          colSpan: 6,
          widgetType: 'default',
          widget: {
            id: '67514ffdd5db91003325b98e', title: 'Fasilitas Kesehatan Tidak Layak',
            styleOptions: customStyle7,
            titleWrapperClass: 'bg-red-100',
            widgetContentWrapperClass: 'bg-red-50',
            titleStyle: { paddingTop: '0.3rem', paddingBottom: '1rem' },
            iconWrapperClass: 'bg-lime-200',
          },
        },
        {
          colSpan: 6,
          widgetType: 'default',
          widget: {
            id: '67518671d5db91003325baae', title: 'Pasangan Usia Subur',
            styleOptions: customStyle7,
            titleWrapperClass: 'bg-red-100',
            widgetContentWrapperClass: 'bg-red-50',
            titleStyle: { paddingTop: '0.3rem', paddingBottom: '1rem' },
            iconWrapperClass: 'bg-lime-200',
          },
        },

        {
          colSpan: 12,
          widgetType: 'default',
          widget: {
            id: '67518a5bd5db91003325bae0', title: 'Keluarga Sasaran',
            styleOptions: customStyle7,
            titleWrapperClass: 'bg-red-100',
            widgetContentWrapperClass: 'bg-red-50',
            titleStyle: { paddingTop: '0.3rem', paddingBottom: '1rem' },
            iconWrapperClass: 'bg-lime-200',
          },
        },

        // Anggaran 
        {
          colSpan: 4,
          widgetType: 'default',
          widget: {
            id: '6752c128d5db91003325bc6a', title: 'Anggaran Urusan Stunting',
            styleOptions: customStyle12,
            titleWrapperClass: 'bg-teal-100',
            widgetContentWrapperClass: 'bg-teal-50',
            titleStyle: { paddingTop: '0.3rem', paddingBottom: '1rem' },
            iconWrapperClass: 'bg-lime-200',
            widgetContentWrapperStyle: { paddingTop: '2rem' }
          },
        },
        
        {
          colSpan: 4,
          widgetType: 'default',
          widget: {
            id: '67567219d5db91003325becc', title: 'Anggaran Provinsi Urusan Stunting',
            styleOptions: customStyle12,
            titleWrapperClass: 'bg-teal-100',
            widgetContentWrapperClass: 'bg-teal-50',
            titleStyle: { paddingTop: '0.3rem', paddingBottom: '1rem' },
            iconWrapperClass: 'bg-lime-200',
            widgetContentWrapperStyle: { paddingTop: '2rem' }
          },
        },
        {
          colSpan: 4,
          widgetType: 'default',
          widget: {
            id: '67567224d5db91003325bed0', title: 'Anggaran Kabupaten Urusan Stunting',
            styleOptions: customStyle12,
            titleWrapperClass: 'bg-teal-100',
            widgetContentWrapperClass: 'bg-teal-50',
            titleStyle: { paddingTop: '0.3rem', paddingBottom: '1rem' },
            iconWrapperClass: 'bg-lime-200',
            widgetContentWrapperStyle: { paddingTop: '2rem' }
          },
        },
      
       
        {
          colSpan: 4,
          widgetType: 'default',
          widget: {
            id: '6752c12cd5db91003325bc6c', title: 'Anggaran SPM Stunting',
            styleOptions: customStyle12,
            titleWrapperClass: 'bg-teal-100',
            widgetContentWrapperClass: 'bg-teal-50',
            titleStyle: { paddingTop: '0.3rem', paddingBottom: '1rem' },
            iconWrapperClass: 'bg-lime-200',
            widgetContentWrapperStyle: { paddingTop: '2rem' }
          },
        },
        {
          colSpan: 4,
          widgetType: 'default',
          widget: {
            id: '6756721fd5db91003325bece', title: 'Anggaran Provinsi SPM Stunting',
            styleOptions: customStyle12,
            titleWrapperClass: 'bg-teal-100',
            widgetContentWrapperClass: 'bg-teal-50',
            titleStyle: { paddingTop: '0.3rem', paddingBottom: '1rem' },
            iconWrapperClass: 'bg-lime-200',
            widgetContentWrapperStyle: { paddingTop: '2rem' }
          },
        },
        {
          colSpan: 4,
          widgetType: 'default',
          widget: {
            id: '67567229d5db91003325bed2', title: 'Anggaran Kabupaten SPM Stunting',
            styleOptions: customStyle12,
            titleWrapperClass: 'bg-teal-100',
            widgetContentWrapperClass: 'bg-teal-50',
            titleStyle: { paddingTop: '0.3rem', paddingBottom: '1rem' },
            iconWrapperClass: 'bg-lime-200',
            widgetContentWrapperStyle: { paddingTop: '2rem' }
          },
        },
        {
          colSpan: 6,
          widgetType: 'default',
          widget: {
            id: '6752c131d5db91003325bc70', title: 'Persentase Anggaran Stunting Bidang Kesehatan Pada Anggaran Nasional',
            styleOptions: customStyle7,
            titleWrapperClass: 'bg-teal-100',
            widgetContentWrapperClass: 'bg-teal-50',
            titleStyle: { paddingTop: '0.3rem', paddingBottom: '1rem' },
            iconWrapperClass: 'bg-lime-200',
          },
        },
        {
          colSpan: 6,
          widgetType: 'default',
          widget: {
            id: '6752c135d5db91003325bc72', title: 'Persentase Anggaran Stunting Pada Anggaran Nasional',
            styleOptions: customStyle7,
            titleWrapperClass: 'bg-teal-100',
            widgetContentWrapperClass: 'bg-teal-50',
            titleStyle: { paddingTop: '0.3rem', paddingBottom: '1rem' },
            iconWrapperClass: 'bg-lime-200',
          },
        },
        {
          colSpan: 6,
          widgetType: 'default',
          widget: {
            id: '6752c139d5db91003325bc74', title: 'Anggaran Stunting Berdasarkan Bidang Urusan Pemerintah',
            styleOptions: customStyle6,
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
            id: '6752c13cd5db91003325bc76', title: 'Anggaran Stunting Berdasarkan SPM Bidang Pemerintah',
            styleOptions: customStyle6,
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
        attribute: SIPDBKKBNKeluargaBeresikoStunting.kode_prov,
        value: filterProvinsi.value
      })
    }

    if (filterKabupaten?.value) {
      newFilter.push({
        widgetId: DistrictWebPageFilterID,
        categoryValue: filterKabupaten.value,
        attribute: SIPDBKKBNKeluargaBeresikoStunting.kode_kab,
        value: filterKabupaten.value.slice(0, 2) + "." + filterKabupaten.value.slice(2)
      })
    }

    setSelectedFilters(newFilter)
  }, [filterProvinsi, filterKabupaten])

  useEffect(() => {
    const fetch = async () => {
      try {
        const provinceResponse = await axios.get(`${import.meta.env.VITE_APP_API_URL}/bkkbn-jumlah-keluarga-beresiko-stunting`, { withCredentials: true })
        const districtResponse = await axios.get(`${import.meta.env.VITE_APP_API_URL}/bkkbn-jumlah-keluarga-beresiko-stunting`, { withCredentials: true })
        setProvinceMapData({
          originalData: provinceResponse.data,
          dataKey: "namaProv",
          dynamicColor: true
        })

        setDistrictMapData({
          originalData: districtResponse.data,
          dataKey: "namaProv",
          percentage: true
        })

        setProvinceColorList(provinceDataColorList)
        setDistrictColorList(districtDataColorList)

        setProvincePopupData([
          {
            sourceKey: "namaProv",
            title: "Jumlah Keluarga"
          }
        ])

        setMapLegendTitle("Jumlah Data Keluarga Beresiko Stunting")
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

export default SisenseBkkbnKeluargaStunting;
