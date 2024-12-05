import React, { useContext, useEffect, useState } from 'react';

import { IDashboard, IFilterState } from './_models';

import { customStyle1, customStyle11, customStyle3, customStyle4, customStyle5, customStyle6, customStyle7, customStyle9 } from './_SisenseWidgetStyleOptions';
import DashboardGridComponent from './DashboardGridComponent';
import { FcCollaboration, FcDiploma1, FcDisclaimer, FcGraduationCap, FcMoneyTransfer } from 'react-icons/fc';
import { FilterContext, MapDataContext } from '../public-profile/profiles/company copy';
import { DistrictWebPageFilterID, DPTJenisKelamin, ProvinceWebPageFilterID, WebPageFilterID } from './_datamodels';
import { ILeafletData, IPopupContent, IStandardColorRange } from '../public-profile/profiles/company copy/blocks/interfaces/global';
import axios from 'axios';

const provinceDataColorList: Array<IStandardColorRange> = [
  {
    stepMin: null,
    stepMax: 1000000,
    color: '#bce4d8'
  },
  {
    stepMin: 1000001,
    stepMax: 5000000,
    color: '#93cdcf'
  },
  {
    stepMin: 5000001,
    stepMax: 10000000,
    color: '#6eb8c5'
  },
  {
    stepMin: 10000001,
    stepMax: 15000000,
    color: '#45a2b9'
  },
  {
    stepMin: 15000001,
    stepMax: 20000000,
    color: '#3589a9'
  },
  {
    stepMin: 20000001,
    stepMax: 25000000,
    color: '#317097'
  },
  {
    stepMin: 25000001,
    stepMax: null,
    color: '#2c5985'
  }
]

const districtDataColorList: Array<IStandardColorRange> = [
  {
    stepMin: null,
    stepMax: 500000,
    color: '#93cdcf'
  },
  {
    stepMin: 500001,
    stepMax: 1000000,
    color: '#6eb8c5'
  },
  {
    stepMin: 1000001,
    stepMax: 1500000,
    color: '#45a2b9'
  },
  {
    stepMin: 1500001,
    stepMax: 2000000,
    color: '#3589a9'
  },
  {
    stepMin: 2000001,
    stepMax: 2500000,
    color: '#317097'
  },
  {
    stepMin: 2500001,
    stepMax: null,
    color: '#2c5985'
  }
]

const popupDataList: Array<IPopupContent> = [
  {
    sourceKey: "totalDPT",
    title: "Jumlah DPT"
  }
]

const SisenseDPTComponent: React.FC = () => {
  const { filterProvinsi, filterKabupaten } = useContext(FilterContext);
  const { setProvinceMapData, setDistrictMapData, setProvinceColorList, setDistrictColorList, setProvincePopupData, setDistrictPopupData, setMapLegendTitle } = useContext(MapDataContext)

  const [selectedFilters, setSelectedFilters] = useState<IFilterState[]>([]);

  const dashboards: IDashboard[] = [
    {
      id: '6731044cfbe60a002a9f3d29',
      name: 'DPT',
      widgets: [
        {
          colSpan: 6,
          widgetType: 'default',
          widget: {
            id: '67310558fbe60a002a9f3d2b', title: 'DPT by Provinsi',
            styleOptions: customStyle11,
            titleWrapperClass: 'bg-stone-200',
            widgetContentWrapperClass: 'bg-stone-100', widgetContentWrapperStyle: { paddingTop: '1rem' },
            iconWrapperClass: 'bg-blue-100',
            titleStyle: { paddingTop: '0.3rem', paddingBottom: '0.3rem' },
            // icon: <FcMoneyTransfer className='text-4xl' />
          },
          sourceFilter: true,
          districtFilterable: false,
          provinceFilterable: false,
          tiangDewa: true,
          tiangDewaColor: '#F5F5F4'
        },
        {
          colSpan: 2,
          widgetType: 'default',
          widget: {
            id: '6733a110fbe60a002a9f3fe6', title: 'DPT by Kabupaten',
            styleOptions: customStyle11,
            titleWrapperClass: 'bg-stone-200',
            widgetContentWrapperClass: 'bg-stone-100', widgetContentWrapperStyle: { paddingTop: '0rem' },
            iconWrapperClass: 'bg-blue-100',
            titleStyle: { paddingTop: '0.3rem', paddingBottom: '0.3rem' },
            // icon: <FcMoneyTransfer className='text-4xl' />
          },
          // sourceFilter: true
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
        attribute: DPTJenisKelamin.KODE_PROV,
        value: filterProvinsi.value
      })

      if (filterKabupaten?.value) {
        newFilter.push({
          widgetId: DistrictWebPageFilterID,
          categoryValue: filterKabupaten.value,
          attribute: DPTJenisKelamin.KODE_KAB,
          value: filterKabupaten.value
        })
      }
    }

    setSelectedFilters(newFilter)
  }, [filterProvinsi, filterKabupaten])

  useEffect(() => {
    const fetch = async () => {
      try {
        const provinceResponse = await axios.get(`${import.meta.env.VITE_APP_API_URL}/sumdpt-pilkada-all-prov`)
        const districtResponse = await axios.get(`${import.meta.env.VITE_APP_API_URL}/sumdpt-pilkada-all-kab`)

        setProvinceMapData({
          originalData: provinceResponse.data,
          dataKey: "totalDPT"
        })

        setDistrictMapData({
          originalData: districtResponse.data,
          dataKey: "totalDPT",
          dynamicColor: true
        })

        setProvinceColorList(provinceDataColorList)
        setDistrictColorList(districtDataColorList)

        setProvincePopupData(popupDataList)
        setDistrictPopupData(popupDataList)

        setMapLegendTitle("Jumlah DPT")
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

export default SisenseDPTComponent;
