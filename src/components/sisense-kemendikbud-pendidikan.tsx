import React, { useContext, useEffect, useState } from 'react';

import { IDashboard, IFilterState } from './_models';

import { customStyle1, customStyle11, customStyle12, customStyle13, customStyle3, customStyle5, customStyle6, customStyle7, customStyle9 } from './_SisenseWidgetStyleOptions';
import DashboardGridComponent from './DashboardGridComponent';
import { IStandardColorRange, IPopupContent } from '../public-profile/profiles/company copy/blocks/interfaces/global';
import { MapDataContext, FilterContext } from '../public-profile/profiles/company copy';
import axios from 'axios';
import { DistrictWebPageFilterID, ProvinceWebPageFilterID, SIPDAPBDNasional, SIPDKemendikbudDapodik, SIPDKemendikbudDataAnakTidakSekolahBPB } from './_datamodels';


const provinceDataColorList: Array<IStandardColorRange> = [
  {
    stepMin: 0.00,
    stepMax: 19.9999999,
    color: '#D5EAF7'
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
    color: '#1841b4'
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

// const popupDataList: Array<IPopupContent> = [
 
// ]


const KemendikbudPendidikan: React.FC<{ isSelected: boolean}> = ({isSelected}) => {
  const { setProvinceMapData,setMapLegendTitle,setProvinceColorList, setDistrictColorList, setDistrictMapData, setProvincePopupData, setDropdownOptions, setDistrictPopupData } = useContext(MapDataContext)
  const { filterProvinsi, filterKabupaten } = useContext(FilterContext);

  const [selectedFilters, setSelectedFilters] = useState<IFilterState[]>([]);
 
  const dashboards: IDashboard[] = [
    {
      id: '674f0e24d5db91003325b7eb',
      name: 'PENDIDIKAN',
      withMap: true,
      withMapFilter: true,
      widgets: [
        // BARIS 1 
        {
          colSpan: 4,
          widgetType: 'default',
          widget: {
            id: '674f0e24d5db91003325b7ec', title: 'Jumlah Siswa',
            styleOptions: customStyle1,
            titleWrapperClass: 'bg-blue-100',
            titleStyle: { paddingTop: '0.3rem', paddingBottom: '1rem' },
            widgetContentWrapperClass: 'bg-blue-50', 
            widgetContentWrapperStyle: { paddingTop: '0rem' },
            iconWrapperClass: 'bg-blue-100',

          },
        },
        {
          colSpan: 2,
          widgetType: 'default',
          widget: {
            id: '674f0e24d5db91003325b7ee', title: 'Sekolah Dasar',
            styleOptions: customStyle1,
            titleWrapperClass: 'bg-blue-100',
            titleStyle: { paddingTop: '0.3rem', paddingBottom: '1rem' },
            widgetContentWrapperClass: 'bg-blue-50', 
            widgetContentWrapperStyle: { paddingTop: '0rem' },
            iconWrapperClass: 'bg-blue-100',

          },
        },
        {
          colSpan: 2,
          widgetType: 'default',
          widget: {
            id: '674f0e24d5db91003325b7ed', title: 'Sekolah Menengah Pertama',
            styleOptions: customStyle1,
            titleWrapperClass: 'bg-blue-100',
            titleStyle: { paddingTop: '0.3rem', paddingBottom: '1rem' },
            widgetContentWrapperClass: 'bg-blue-50', 
            widgetContentWrapperStyle: { paddingTop: '0rem' },
            iconWrapperClass: 'bg-blue-100',

          },
        },
        {
          colSpan: 2,
          widgetType: 'default',
          widget: {
            id: '674f0e24d5db91003325b7ef', title: 'Sekolah Menengah Atas',
            styleOptions: customStyle1,
            titleStyle: { paddingTop: '0.3rem', paddingBottom: '1rem' },
            titleWrapperClass: 'bg-blue-100',
            widgetContentWrapperClass: 'bg-blue-50',
            widgetContentWrapperStyle: { paddingTop: '0rem' },
            iconWrapperClass: 'bg-blue-100',

          },
        },
        {
          colSpan: 2,
          widgetType: 'default',
          widget: {
            id: '674f0e24d5db91003325b7fe', title: 'Belum Pernah Bersekolah',
            styleOptions: customStyle1,
            titleWrapperClass: 'bg-blue-100',
            widgetContentWrapperClass: 'bg-blue-50',
            widgetContentWrapperStyle: { paddingBottom: '0rem' },
            titleStyle: { paddingTop: '0.3rem', paddingBottom: '1rem' },
            iconWrapperClass: 'bg-blue-100',

          },
        },
       

        //   BARIS 2 
        {
          colSpan: 4,
          widgetType: 'default',
          widget: {
            id: '674f0e24d5db91003325b7f9', title: 'Siswa Bersekolah dan Drop out ',
            styleOptions: customStyle6,
            titleWrapperClass: 'bg-sky-100',
            widgetContentWrapperClass: 'bg-sky-50',
            widgetContentWrapperStyle: { paddingTop: '0rem' },
            titleStyle: { paddingTop: '1rem', paddingBottom: '1rem' },
            iconWrapperClass: 'bg-blue-200',
            // icon: <FcGraduationCap className='text-4xl' />
          },
        },
        {
          colSpan: 4,
          widgetType: 'default',
          widget: {
            id: '674f0e24d5db91003325b7f1', title: 'Siswa Bersekolah Berdasarkan Tingkat Pendidikan',
            styleOptions: customStyle6,
            titleWrapperClass: 'bg-sky-100',
            widgetContentWrapperClass: 'bg-sky-50', 
            widgetContentWrapperStyle: { paddingTop: '0rem' },
            titleStyle: { paddingTop: '1rem', paddingBottom: '1rem' },
            iconWrapperClass: 'bg-sky-100',
            // icon: <FcGraduationCap className='text-4xl' />
          },
        },
        {
          colSpan: 4,
          widgetType: 'default',
          widget: {
            id: '674f0e24d5db91003325b7f2', title: 'Siswa Drop out Berdasarkan Tingkat Pendidikan',
            styleOptions: customStyle6,
            titleWrapperClass: 'bg-sky-100',
            widgetContentWrapperClass: 'bg-sky-50', 
            widgetContentWrapperStyle: { paddingTop: '0rem' },
            titleStyle: { paddingTop: '1rem', paddingBottom: '1rem' },
            iconWrapperClass: 'bg-sky-100',
            // icon: <FcGraduationCap className='text-4xl' />
          },
        },
        // BARIS 3 
        {
          colSpan: 6,
          widgetType: 'default',
          widget: {
            id: '674f0e24d5db91003325b7f8', title: 'Siswa Bersekolah Berdasarkan Tingkat Pendidikan',
            styleOptions: customStyle5,
            titleWrapperClass: 'bg-sky-100',
            widgetContentWrapperClass: 'bg-sky-50', widgetContentWrapperStyle: { paddingTop: '2rem' },
            iconWrapperClass: 'bg-sky-200',
          },
        },

        {
          colSpan: 6,
          widgetType: 'default',
          widget: {
            id: '674f0e24d5db91003325b7ff', title: 'Siswa Drop Out Berdasarkan Tingkat Pendidikan',
            styleOptions: customStyle5,
            titleWrapperClass: 'bg-sky-100',
            widgetContentWrapperClass: 'bg-sky-50', widgetContentWrapperStyle: { paddingTop: '2rem' },
            iconWrapperClass: 'bg-sky-200',
          },
        },
        // BARIS 3 

        {
          colSpan: 4,
          widgetType: 'default',
          widget: {
            id: '674f0e24d5db91003325b7f4', title: 'Anak Tidak Bersekolah',
            styleOptions: customStyle6,
            titleWrapperClass: 'bg-sky-100',
            widgetContentWrapperClass: 'bg-sky-50', widgetContentWrapperStyle: { paddingTop: '0rem' },
            iconWrapperClass: 'bg-sky-100',
            // icon: <FcGraduationCap className='text-4xl' />
          },
        },

        {
          colSpan: 4,
          widgetType: 'default',
          widget: {
            id: '674f0e24d5db91003325b7fc', title: 'Anak Belum Pernah Bersekolah',
            styleOptions: customStyle6,
            titleWrapperClass: 'bg-sky-100',
            widgetContentWrapperClass: 'bg-sky-50', widgetContentWrapperStyle: { paddingTop: '0rem' },
            iconWrapperClass: 'bg-sky-100',
            // icon: <FcGraduationCap className='text-4xl' />
          },
        },
     
        {
          colSpan: 4,
          widgetType: 'default',
          widget: {
            id: '674f0e24d5db91003325b7fa', title: 'Anak Lulus Tidak Melanjutkan Sekolah',
            styleOptions: customStyle6,
            titleWrapperClass: 'bg-sky-100',
            widgetContentWrapperClass: 'bg-sky-50', widgetContentWrapperStyle: { paddingTop: '0rem' },
            iconWrapperClass: 'bg-sky-100',
            // icon: <FcGraduationCap className='text-4xl' />
          },
        },
        // BARIS 4 
        {
          colSpan: 9,
          widgetType: 'default',
          widget: {
            id: '67501d73d5db91003325b913', title: 'Anak Tidak Bersekolah',
            styleOptions: customStyle5,
            titleWrapperClass: 'bg-sky-100',
            widgetContentWrapperClass: 'bg-sky-50', widgetContentWrapperStyle: { paddingTop: '2rem' },
            iconWrapperClass: 'bg-sky-200',
          },
        },

        {
          colSpan: 3,
          widgetType: 'default',
          widget: {
            id: '67501d7bd5db91003325b915', title: 'Anak Tidak Bersekolah',
            styleOptions: customStyle5,
            titleWrapperClass: 'bg-sky-100',
            widgetContentWrapperClass: 'bg-sky-50', widgetContentWrapperStyle: { paddingTop: '2rem' },
            iconWrapperClass: 'bg-sky-200',
          },
        },

        // ANGGARAN DAPODIK 
        // BARIS 1 
        {
          colSpan: 4,
          widgetType: 'default',
          widget: {
            id: '67568cecd5db91003325bfcf', title: 'Anggaran Urusan Bidang Pendidikan',
            styleOptions: customStyle1,
            titleWrapperClass: 'bg-teal-100',
            widgetContentWrapperClass: 'bg-teal-50', widgetContentWrapperStyle: { paddingTop: '2rem' },
            iconWrapperClass: 'bg-sky-200',
          },
        },
        {
          colSpan: 4,
          widgetType: 'default',
          widget: {
            id: '67568cc5d5db91003325bfcb', title: 'Anggaran Provinsi Urusan Bidang Pendidikan',
            styleOptions: customStyle1,
            titleWrapperClass: 'bg-teal-100',
            widgetContentWrapperClass: 'bg-teal-50', widgetContentWrapperStyle: { paddingTop: '2rem' },
            iconWrapperClass: 'bg-sky-200',
          },
        },
        {
          colSpan: 4,
          widgetType: 'default',
          widget: {
            id: '67568d81d5db91003325bfd5', title: 'Anggaran Kabupaten Urusan Bidang Pendidikan',
            styleOptions: customStyle1,
            titleWrapperClass: 'bg-teal-100',
            widgetContentWrapperClass: 'bg-teal-50', widgetContentWrapperStyle: { paddingTop: '2rem' },
            iconWrapperClass: 'bg-sky-200',
          },
        },
        // BARIS 2
        {
          colSpan: 4,
          widgetType: 'default',
          widget: {
            id: '67568cc1d5db91003325bfc9', title: 'Anggaran SPM Bidang Pendidikan',
            styleOptions: customStyle1,
            titleWrapperClass: 'bg-teal-100',
            widgetContentWrapperClass: 'bg-teal-50', widgetContentWrapperStyle: { paddingTop: '2rem' },
            iconWrapperClass: 'bg-sky-200',
          },
        },
        {
          colSpan: 4,
          widgetType: 'default',
          widget: {
            id: '67568cc8d5db91003325bfcd', title: 'Anggaran SPM Provinsi Bidang Pendidikan',
            styleOptions: customStyle1,
            titleWrapperClass: 'bg-teal-100',
            widgetContentWrapperClass: 'bg-teal-50', widgetContentWrapperStyle: { paddingTop: '2rem' },
            iconWrapperClass: 'bg-sky-200',
          },
        },
        {
          colSpan: 4,
          widgetType: 'default',
          widget: {
            id: '67568d84d5db91003325bfd7', title: 'Anggaran SPM Kabupaten Bidang Pendidikan',
            styleOptions: customStyle1,
            titleWrapperClass: 'bg-teal-100',
            widgetContentWrapperClass: 'bg-teal-50', widgetContentWrapperStyle: { paddingTop: '2rem' },
            iconWrapperClass: 'bg-sky-200',
          },
        },
        // BARIS 3 
        {
          colSpan: 6, 
          widgetType: 'default',
          widget: {
            id: '6757ca2ed5db91003325c21b', title: 'Anggaran Urusan Bidang Pendidikan Dengan Bidang Lainnya',
            styleOptions: customStyle9,
            titleWrapperClass: 'bg-teal-100',
            widgetContentWrapperClass: 'bg-teal-50', widgetContentWrapperStyle: { paddingTop: '2rem' },
            titleStyle: { paddingTop: '0.3rem', paddingBottom: '1rem' },
            iconWrapperClass: 'bg-sky-200',
          },
        },
        {
          colSpan: 6,
          widgetType: 'default',
          widget: {
            id: '67568d8dd5db91003325bfdb', title: 'Anggaran SPM Pendidikan dan SPM Lainnya',
            styleOptions: customStyle7,
            titleWrapperClass: 'bg-teal-100',
            widgetContentWrapperClass: 'bg-teal-50', widgetContentWrapperStyle: { paddingTop: '2rem' },
            titleStyle: { paddingTop: '0.3rem', paddingBottom: '1rem' },
            iconWrapperClass: 'bg-sky-200',
          },
        },
        // BARIS 4
        {
          colSpan: 12,
          widgetType: 'default',
          widget: {
            id: '67596ce2d5db91003325c6da', title: 'Alokasi Anggaran Pendidikan Berdasarkan Program Urusan Bidang Pendidikan',
            styleOptions: customStyle13,
            titleWrapperClass: 'bg-teal-100',
            widgetContentWrapperClass: 'bg-teal-50', widgetContentWrapperStyle: { paddingTop: '2rem' },
            titleStyle: { paddingTop: '0.3rem', paddingBottom: '1rem' },
            iconWrapperClass: 'bg-sky-200',
          },
          sourceFilter:true,
          filterable: true
        },
        {
          colSpan: 12,
          widgetType: 'default',
          widget: {
            id: '67595dc6d5db91003325c62a', title: 'Alokasi Anggaran Pendidikan Berdasarkan Kegiatan Urusan Bidang Pendidikan',
            styleOptions: customStyle13,
            titleWrapperClass: 'bg-teal-100',
            widgetContentWrapperClass: 'bg-teal-50', widgetContentWrapperStyle: { paddingTop: '2rem' },
            titleStyle: { paddingTop: '0.3rem', paddingBottom: '1rem' },
            iconWrapperClass: 'bg-sky-200',
          },
          sourceFilter:true,
          filterable: true
        },
        {
          colSpan: 12,
          widgetType: 'default',
          widget: {
            id: '6756e8f7d5db91003325c116', title: 'Alokasi Anggaran Pendidikan Berdasarkan Sub Kegiatan Urusan Bidang Pendidikan',
            styleOptions: customStyle13,
            titleWrapperClass: 'bg-teal-100',
            widgetContentWrapperClass: 'bg-teal-50', widgetContentWrapperStyle: { paddingTop: '2rem' },
            titleStyle: { paddingTop: '0.3rem', paddingBottom: '1rem' },
            iconWrapperClass: 'bg-sky-200',
          },
          sourceFilter:true,
          filterable: true
        },
        {
          colSpan: 12,
          widgetType: 'default',
          widget: {
            id: '675f0659d5db91003325cb63', title: 'Alokasi Anggaran Pendidikan Berdasarkan SKPD Urusan Bidang Pendidikan',
            styleOptions: customStyle13,
            titleWrapperClass: 'bg-teal-100',
            widgetContentWrapperClass: 'bg-teal-50', widgetContentWrapperStyle: { paddingTop: '2rem' },
            titleStyle: { paddingTop: '0.3rem', paddingBottom: '1rem' },
            iconWrapperClass: 'bg-sky-200',
          },
          sourceFilter:true,
          filterable: true
        },
        // {
        //   colSpan: 12,
        //   widgetType: 'default',
        //   widget: {
        //     id: '675f067cd5db91003325cb67', title: 'Alokasi Anggaran Pendidikan Berdasarkan Sub SKPD Urusan Bidang Pendidikan',
        //     styleOptions: customStyle13,
        //     titleWrapperClass: 'bg-teal-100',
        //     widgetContentWrapperClass: 'bg-teal-50', widgetContentWrapperStyle: { paddingTop: '2rem' },
        //     titleStyle: { paddingTop: '0.3rem', paddingBottom: '1rem' },
        //     iconWrapperClass: 'bg-sky-200',
        //   },
        //   sourceFilter:true,
        //   filterable: true
        // },
        {
          colSpan: 12,
          widgetType: 'default',
          widget: {
            id: '6756e914d5db91003325c11d', title: 'Alokasi Anggaran Pendidikan Berdasarkan AKUN Urusan Bidang Pendidikan',
            styleOptions: customStyle13,
            titleWrapperClass: 'bg-teal-100',
            widgetContentWrapperClass: 'bg-teal-50', widgetContentWrapperStyle: { paddingTop: '2rem' },
            titleStyle: { paddingTop: '0.3rem', paddingBottom: '1rem' },
            iconWrapperClass: 'bg-sky-200',
          },
        },
      ]
    },

  ];

  useEffect(() => {
    const newFilter: Array<IFilterState> = [];
    if (filterProvinsi?.value) {
      newFilter.push({
        widgetId: ProvinceWebPageFilterID,
        categoryValue: filterProvinsi.value,
        attribute: SIPDKemendikbudDapodik.kode_prov,
        value: filterProvinsi.value
      });
      newFilter.push({
        widgetId: ProvinceWebPageFilterID,
        categoryValue: filterProvinsi.value,
        attribute: SIPDAPBDNasional.kode_wil_prov,
        value: filterProvinsi.value
      });
      newFilter.push({
        widgetId: ProvinceWebPageFilterID,
        categoryValue: filterProvinsi.value,
        attribute: SIPDKemendikbudDataAnakTidakSekolahBPB.kode_prov,
        value: filterProvinsi.value
      });
    }

    if (filterKabupaten?.value) {
      newFilter.push({
        widgetId: DistrictWebPageFilterID,
        categoryValue: filterKabupaten.value,
        attribute: SIPDKemendikbudDapodik.kode_kab,
        value: filterKabupaten.value.slice(0, 2) + "." + filterKabupaten.value.slice(2)
      });
      newFilter.push({
        widgetId: DistrictWebPageFilterID,
        categoryValue: filterKabupaten.value,
        attribute: SIPDAPBDNasional.kode_kab,
        value: filterKabupaten.value.slice(0, 2) + "." + filterKabupaten.value.slice(2)
      });
      newFilter.push({
        widgetId: DistrictWebPageFilterID,
        categoryValue: filterKabupaten.value,
        attribute: SIPDKemendikbudDataAnakTidakSekolahBPB.kode_kab,
        value: filterKabupaten.value.slice(0, 2) + "." + filterKabupaten.value.slice(2)
      });
    }

    setSelectedFilters(newFilter);
  }, [filterProvinsi, filterKabupaten]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const Provinceresponse = await axios.get(`${import.meta.env.VITE_APP_API_URL}/kemendikbud-dapodik`, { withCredentials: true });
        const Districtresponse = await axios.get(`${import.meta.env.VITE_APP_API_URL}/kemendikbud-dapodik-kab`, { withCredentials: true });
        // Assuming the response structure is as follows:
        // response.data = [
        //   { kodeProv: "11", jumlahBersekolah: 898401, jumlahDropout: 13510016, jumlahBpb: 14569672, jumlahLtm: 23975016 },
        //   ...
        // ];

        // Set province map data
        setProvinceMapData({
          originalData: Provinceresponse.data,
          dataKey: "jumlahBersekolah", // Use the correct key for your data
          dynamicColor: true
        });

        // Set district map data if needed (you might want to adjust this based on your API response)
        setDistrictMapData({
          originalData: Districtresponse.data, // Adjust this if you have separate district data
          dataKey: "jumlahBersekolah", // Use the correct key for your data
          dynamicColor: true
        });

        // Set color lists
        setProvinceColorList(provinceDataColorList);
        setDistrictColorList(districtDataColorList);

        // Set popup data
        setProvincePopupData([
          {
            sourceKey: "jumlahBersekolah",
            title: "Jumlah Bersekolah"
          },
          {
            sourceKey : "jumlahDropout",
            title:"Jumlah Dropout"
          },
          {
            sourceKey : "jumlahBpb",
            title : "Jumlah Belum Pernah Bersekolah"
          },
          {
            sourceKey : "jumlahLtm",
            title : "Jumlah Lulus Tidak Lanjut Sekolah"
          }
        ])
        setDistrictPopupData([
          {
            sourceKey: "jumlahBersekolah",
            title: "Jumlah Bersekolah"
          },
          {
            sourceKey : "jumlahDropout",
            title:"Jumlah Dropout"
          },
          {
            sourceKey : "jumlahBpb",
            title : "Jumlah Belum Pernah Bersekolah"
          },
          {
            sourceKey : "jumlahLtm",
            title : "Jumlah Lulus Tidak Lanjut Sekolah"
          }
        ])
        // setDistrictPopupData(popupDataList);

        // Set the map legend title
        setMapLegendTitle("Jumlah Data DAPODIK");

        setDropdownOptions([])
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetch();
  }, []);

  return (
    <div className="multi-dashboard-container">
      {dashboards.map(dashboard => (
        <DashboardGridComponent key={dashboard.id} dashboard={dashboard} webpageFilters={selectedFilters} />
      ))}
    </div>
  );
};

export default KemendikbudPendidikan;