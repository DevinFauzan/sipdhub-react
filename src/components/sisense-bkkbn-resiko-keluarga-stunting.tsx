import React, { useContext, useEffect, useState } from 'react';

import { IDashboard, IFilterState } from './_models';

import { customStyle1, customStyle3, customStyle5, customStyle6 } from './_SisenseWidgetStyleOptions';
import DashboardGridComponent from './DashboardGridComponent';
import { IStandardColorRange, IPopupContent } from '../public-profile/profiles/company copy/blocks/interfaces/global';
import { MapDataContext, FilterContext } from '../public-profile/profiles/company copy';
import axios from 'axios';
import { DistrictWebPageFilterID, ProvinceWebPageFilterID, SIPDBKKBNKeluargaBeresikoStunting } from './_datamodels';

const provinceDataColorList: Array<IStandardColorRange> = [
  {
    stepMin: 0.00,
    stepMax: 19.9999999,
    color: '#fce7f3'
  },
  {
    stepMin: 20.00,
    stepMax: 39.9999999,
    color: '#f9a8d4'
  },
  {
    stepMin: 40.00,
    stepMax: 59.9999999,
    color: '#ec4899'
  },
  {
    stepMin: 60.00,
    stepMax: 79.9999999,
    color: '#be185d'
  },
  {
    stepMin: 80.00,
    stepMax: 100.00,
    color: '#FD0099'
  }
]

const districtDataColorList: Array<IStandardColorRange> = [
  {
    stepMin: 0.00,
    stepMax: 19.9999999,
    color: '#fce7f3'
  },
  {
    stepMin: 20.00,
    stepMax: 39.9999999,
    color: '#f9a8d4'
  },
  {
    stepMin: 40.00,
    stepMax: 59.9999999,
    color: '#ec4899'
  },
  {
    stepMin: 60.00,
    stepMax: 79.9999999,
    color: '#be185d'
  },
  {
    stepMin: 80.00,
    stepMax: 100.00,
    color: '#FD0099'
  }
]

const popupDataList: Array<IPopupContent> = [
  {
    sourceKey: "namaProv",
    title: "Jumlah Pendidikan"
  },
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
            titleWrapperClass: 'bg-pink-100',
            widgetContentWrapperClass: 'bg-pink-50',
            titleStyle: { paddingTop: '1rem', paddingBottom: '1rem' },
          },
        },
        {
          colSpan: 3,
          widgetType: 'default',
          widget: {
            id: '67514ffdd5db91003325b984', title: 'Keluarga Sasaran',
            styleOptions: customStyle1,
            titleWrapperClass: 'bg-pink-100',
            widgetContentWrapperClass: 'bg-pink-50',
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
            titleWrapperClass: 'bg-pink-100',
            widgetContentWrapperClass: 'bg-pink-50',
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
            titleWrapperClass: 'bg-pink-100',
            widgetContentWrapperClass: 'bg-pink-50',
            titleStyle: { paddingTop: '0.3rem', paddingBottom: '1rem' },
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
            title: "Jumlah Keluarga beresiko stunting"
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
