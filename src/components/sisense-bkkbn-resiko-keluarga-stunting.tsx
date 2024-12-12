import React, { useCallback, useContext, useEffect, useRef, useState } from 'react';

import { IDashboard, IFilterState } from './_models';

import { customStyle1, customStyle12, customStyle2, customStyle3, customStyle4, customStyle5, customStyle6, customStyle7 } from './_SisenseWidgetStyleOptions';
import DashboardGridComponent from './DashboardGridComponent';
import { IStandardColorRange, IPopupContent, IDropdownData } from '../public-profile/profiles/company copy/blocks/interfaces/global';
import { MapDataContext, FilterContext } from '../public-profile/profiles/company copy';
import axios from 'axios';
import { DistrictWebPageFilterID, ProvinceWebPageFilterID, SIPDAPBDNasional, SIPDBKKBNKeluargaBeresikoStunting1, SIPDBKKBNKeluargaBeresikoStunting2 } from './_datamodels';

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

const dropdownOptions: Array<IDropdownData> = [
  { value: "jumlah", text: "Jumlah Keluarga" },
  { value: "sasaran", text: "Keluarga Sasaran" },
  { value: "non_kb", text: "Peserta Non-KB Modern" },
  { value: "pus", text: "Pasangan Usia Subur" }
]


const SisenseBkkbnKeluargaStunting: React.FC<{ isSelected: boolean }> = ({ isSelected }) => {
  const { setProvinceMapData, setMapLegendTitle, setProvinceColorList, setDistrictColorList, setDistrictMapData, setProvincePopupData, setDistrictPopupData, setDropdownOptions, registerOptionsHandler } = useContext(MapDataContext)
  const { filterProvinsi, filterKabupaten } = useContext(FilterContext);

  const dataBKKBNRef = useRef([])
  const dataBKKBNKabupatenRef = useRef([])

  const [selectedFilters, setSelectedFilters] = useState<IFilterState[]>([]);
  const dashboards: IDashboard[] = [
    {
      id: '67514ffdd5db91003325b982',
      name: 'KELUARGA BERESIKO STUNTING',
      withMap: true,
      withMapFilter: true,
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
            id: '67518671d5db91003325baae', title: 'Pasangan Usia Subur',
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
            id: '67518621d5db91003325baa9', title: 'Usia Anak dan PUS',
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
        // BARIS 1
        {
          colSpan: 4,
          widgetType: 'default',
          widget: {
            id: '675921b9d5db91003325c3f7', title: 'Anggaran Urusan Stunting',
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
            id: '675921c1d5db91003325c3f9', title: 'Anggaran Provinsi Urusan Stunting',
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
            id: '675921c4d5db91003325c3fb', title: 'Anggaran Kabupaten Urusan Stunting',
            styleOptions: customStyle12,
            titleWrapperClass: 'bg-teal-100',
            widgetContentWrapperClass: 'bg-teal-50',
            titleStyle: { paddingTop: '0.3rem', paddingBottom: '1rem' },
            iconWrapperClass: 'bg-lime-200',
            widgetContentWrapperStyle: { paddingTop: '2rem' }
          },
        },
      // BARIS 2 
       
        {
          colSpan: 4,
          widgetType: 'default',
          widget: {
            id: '67592209d5db91003325c413', title: 'Anggaran SPM Stunting',
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
            id: '6759220bd5db91003325c415', title: 'Anggaran Provinsi SPM Stunting',
            styleOptions: customStyle12,
            titleWrapperClass: 'bg-teal-100',
            widgetContentWrapperClass: 'bg-teal-50',
            titleStyle: { paddingTop: '0.3rem', paddingBottom: '1rem' },
            iconWrapperClass: 'bg-lime-200',
            widgetContentWrapperStyle: { paddingTop: '2rem' }
          },
          districtFilterable: false
        },
        {
          colSpan: 4,
          widgetType: 'default',
          widget: {
            id: '6759220ed5db91003325c417', title: 'Anggaran Kabupaten SPM Stunting',
            styleOptions: customStyle12,
            titleWrapperClass: 'bg-teal-100',
            widgetContentWrapperClass: 'bg-teal-50',
            titleStyle: { paddingTop: '0.3rem', paddingBottom: '1rem' },
            iconWrapperClass: 'bg-lime-200',
            widgetContentWrapperStyle: { paddingTop: '2rem' }
          },
          districtFilterable: false
        },
        // BARIS 3 
        {
          colSpan: 6,
          widgetType: 'default',
          widget: {
            id: '67592214d5db91003325c419', title: 'Persentase Anggaran Stunting Berdasarkan Anggaran Nasional',
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
            id: '67592217d5db91003325c41b', title: 'Persentase Anggaran SPM Stunting Berdasarkan Anggaran SPM Nasional',
            styleOptions: customStyle7,
            titleWrapperClass: 'bg-teal-100',
            widgetContentWrapperClass: 'bg-teal-50',
            titleStyle: { paddingTop: '0.3rem', paddingBottom: '1rem' },
            iconWrapperClass: 'bg-lime-200',
          },
        },
        // BARIS 4
        {
          colSpan: 12,
          widgetType: 'default',
          widget: {
            id: '67597affd5db91003325c7c3', title: 'Alokasi Anggaran Stunting Berdasarkan Urusan Pemerintah',
            styleOptions: customStyle7,
            titleWrapperClass: 'bg-teal-100',
            widgetContentWrapperClass: 'bg-teal-50',
            titleStyle: { paddingTop: '0.3rem', paddingBottom: '1rem' },
            widgetContentWrapperStyle: { paddingTop: '1rem' },
            iconWrapperClass: 'bg-lime-200',
          },
          sourceFilter: true,
          filterable: true
        },
        {
          colSpan: 12,
          widgetType: 'default',
          widget: {
            id: '6759223fd5db91003325c427', title: 'Alokasi Anggaran Stunting Berdasarkan Bidang Urusan Pemerintah',
            styleOptions: customStyle7,
            titleWrapperClass: 'bg-teal-100',
            widgetContentWrapperClass: 'bg-teal-50',
            titleStyle: { paddingTop: '0.3rem', paddingBottom: '1rem' },
            widgetContentWrapperStyle: { paddingTop: '1rem' },
            iconWrapperClass: 'bg-lime-200',
          },
          sourceFilter: true,
          filterable: true
        },
        {
          colSpan: 12,
          widgetType: 'default',
          widget: {
            id: '67597dfcd5db91003325c800', title: 'Alokasi Anggaran Stunting Berdasarkan GIAT Urusan Pemerintah',
            styleOptions: customStyle7,
            titleWrapperClass: 'bg-teal-100',
            widgetContentWrapperClass: 'bg-teal-50',
            titleStyle: { paddingTop: '0.3rem', paddingBottom: '1rem' },
            widgetContentWrapperStyle: { paddingTop: '1rem' },
            iconWrapperClass: 'bg-lime-200',
          },
          sourceFilter: true,
          filterable: true
        },
        {
          colSpan: 12,
          widgetType: 'default',
          widget: {
            id: '67597edbd5db91003325c814', title: 'Alokasi Anggaran Stunting Berdasarkan Sub GIAT Urusan Pemerintah',
            styleOptions: customStyle7,
            titleWrapperClass: 'bg-teal-100',
            widgetContentWrapperClass: 'bg-teal-50',
            titleStyle: { paddingTop: '0.3rem', paddingBottom: '1rem' },
            widgetContentWrapperStyle: { paddingTop: '1rem' },
            iconWrapperClass: 'bg-lime-200',
          },
          sourceFilter: true,
          filterable: true
        },
        {
          colSpan: 12,
          widgetType: 'default',
          widget: {
            id: '67597f26d5db91003325c81f', title: 'Alokasi Anggaran Stunting Berdasarkan Akun Urusan Pemerintah',
            styleOptions: customStyle7,
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
        attribute: SIPDBKKBNKeluargaBeresikoStunting1.kode_prov,
        value: filterProvinsi.value
      })

      newFilter.push({
        widgetId: ProvinceWebPageFilterID,
        categoryValue: filterProvinsi.value,
        attribute: SIPDBKKBNKeluargaBeresikoStunting2.kode_prov,
        value: filterProvinsi.value
      })

      newFilter.push({
        widgetId: ProvinceWebPageFilterID,
        categoryValue: filterProvinsi.value,
        attribute: SIPDAPBDNasional.kode_wil_prov,
        value: filterProvinsi.value
      })
    }

    if (filterKabupaten?.value) {
      newFilter.push({
        widgetId: DistrictWebPageFilterID,
        categoryValue: filterKabupaten.value,
        attribute: SIPDAPBDNasional.kode_kab,
        value: filterKabupaten.value.slice(0, 2) + "." + filterKabupaten.value.slice(2)
      })

      newFilter.push({
        widgetId: DistrictWebPageFilterID,
        categoryValue: filterKabupaten.value,
        attribute: SIPDBKKBNKeluargaBeresikoStunting1.kode_kab,
        value: filterKabupaten.value.slice(0, 2) + "." + filterKabupaten.value.slice(2)
      })

      newFilter.push({
        widgetId: DistrictWebPageFilterID,
        categoryValue: filterKabupaten.value,
        attribute: SIPDBKKBNKeluargaBeresikoStunting2.kode_kab,
        value: filterKabupaten.value.slice(0, 2) + "." + filterKabupaten.value.slice(2)
      })
    }

    setSelectedFilters(newFilter)
  }, [filterProvinsi, filterKabupaten])

  const onMapOptionsChanged = useCallback((e: Event) => {
    if (e.target) {
      switch (e.target.value) {
        case "jumlah":
          setProvinceMapData({
            originalData: dataBKKBNRef.current,
            dataKey: "keluargaStunting",
            dynamicColor: true
          })
  
          setDistrictMapData({
            originalData: dataBKKBNKabupatenRef.current,
            dataKey: "keluargaStunting",
            dynamicColor: true
          })

          setProvincePopupData([
            {
              sourceKey: "keluargaStunting",
              title: "Jumlah Keluarga Beresiko"
            }
          ])
          setDistrictPopupData([
            {
              sourceKey: "keluargaStunting",
              title: "Jumlah Keluarga Beresiko"
            }
          ])

          setMapLegendTitle("Jumlah Data Keluarga Beresiko Stunting")
          break
        case "sasaran":
          setProvinceMapData({
            originalData: dataBKKBNRef.current,
            dataKey: "keluargaSasaran",
            dynamicColor: true
          })
  
          setDistrictMapData({
            originalData: dataBKKBNKabupatenRef.current,
            dataKey: "keluargaSasaran",
            dynamicColor: true
          })

          setProvincePopupData([
            {
              sourceKey: "keluargaSasaran",
              title: "Jumlah Keluarga Sasaran"
            }
          ])
          setDistrictPopupData([
            {
              sourceKey: "keluargaSasaran",
              title: "Jumlah Keluarga Sasaran"
            }
          ])

          setMapLegendTitle("Jumlah Data Keluarga Sasaran")
          break
        case "non_kb":
          setProvinceMapData({
            originalData: dataBKKBNRef.current,
            dataKey: "pesertaNonKBModern",
            dynamicColor: true
          })
  
          setDistrictMapData({
            originalData: dataBKKBNKabupatenRef.current,
            dataKey: "pesertaNonKBModern",
            dynamicColor: true
          })

          setProvincePopupData([
            {
              sourceKey: "pesertaNonKBModern",
              title: "Jumlah Peserta Non KB Modern"
            }
          ])
          setDistrictPopupData([
            {
              sourceKey: "pesertaNonKBModern",
              title: "Jumlah Peserta Non KB Modern"
            }
          ])

          setMapLegendTitle("Jumlah Peserta Non KB Modern")
          break
        case "pus":
          setProvinceMapData({
            originalData: dataBKKBNRef.current,
            dataKey: "jumlahPUS",
            dynamicColor: true
          })
  
          setDistrictMapData({
            originalData: dataBKKBNKabupatenRef.current,
            dataKey: "jumlahPUS",
            dynamicColor: true
          })

          setProvincePopupData([
            {
              sourceKey: "jumlahPUS",
              title: "Jumlah PUS"
            }
          ])
          setDistrictPopupData([
            {
              sourceKey: "jumlahPUS",
              title: "Jumlah PUS"
            }
          ])

          setMapLegendTitle("Jumlah PUS")
          break
        
      }
    }
  }, [])

  useEffect(() => {
    const fetch = async () => {
      try {
        const provinceResponse = await axios.get(`${import.meta.env.VITE_APP_API_URL}/bkkbn-jumlah-keluarga-beresiko-stunting`, { withCredentials: true })
        const districtResponse = await axios.get(`${import.meta.env.VITE_APP_API_URL}/bkkbn-jumlah-keluarga-beresiko-stunting-kab`, { withCredentials: true })

        dataBKKBNRef.current = provinceResponse.data
        dataBKKBNKabupatenRef.current = districtResponse.data

        setProvinceMapData({
          originalData: provinceResponse.data,
          dataKey: "keluargaStunting",
          dynamicColor: true
        })

        setDistrictMapData({
          originalData: districtResponse.data,
          dataKey: "keluargaStunting",
          dynamicColor: true
        })

        setProvinceColorList(provinceDataColorList)
        setDistrictColorList(districtDataColorList)

        setProvincePopupData([
          {
            sourceKey: "keluargaStunting",
            title: "Jumlah Keluarga"
          }
        ])

        setDistrictPopupData([
          {
            sourceKey: "keluargaStunting",
            title: "Jumlah Keluarga"
          }
        ])

        setMapLegendTitle("Jumlah Data Keluarga Beresiko Stunting")
        registerOptionsHandler(onMapOptionsChanged)

        setDropdownOptions(dropdownOptions)
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
