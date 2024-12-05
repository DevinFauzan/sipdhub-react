import React, { useContext, useEffect, useState } from 'react';

import { IDashboard, IFilterState } from './_models';

import { customStyle1, customStyle3, customStyle5, customStyle6 } from './_SisenseWidgetStyleOptions';
import DashboardGridComponent from './DashboardGridComponent';
import { IStandardColorRange, IPopupContent } from '../public-profile/profiles/company copy/blocks/interfaces/global';
import { MapDataContext, FilterContext } from '../public-profile/profiles/company copy';
import axios from 'axios';
import { DistrictWebPageFilterID, ProvinceWebPageFilterID, SIPDKemendikbudDapodik } from './_datamodels';


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
    color: '#1d4ed8'
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
    sourceKey: "namaProv",
    title: "Jumlah Pendidikan"

  },
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
    title : "jumlah Bpb"
  },
  {
    sourceKey : "jumlahLtm",
    title : "jumlah Ltm"
  }
]


const KemendikbudPendidikan: React.FC<{ isSelected: boolean}> = ({isSelected}) => {
  const { setProvinceMapData,setMapLegendTitle,setProvinceColorList, setDistrictColorList, setDistrictMapData, setProvincePopupData, setDistrictPopupData } = useContext(MapDataContext)
  const { filterProvinsi, filterKabupaten } = useContext(FilterContext);

  const [selectedFilters, setSelectedFilters] = useState<IFilterState[]>([]);
 
  const dashboards: IDashboard[] = [
    {
      id: '674821d1fbe60a002a9f453b',
      name: 'PENDIDIKAN',
      widgets: [
        // BARIS 1 
        {
          colSpan: 4,
          widgetType: 'default',
          widget: {
            id: '674821d1fbe60a002a9f453c', title: 'Jumlah Siswa',
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
            id: '674821d1fbe60a002a9f453e', title: 'Sekolah Dasar',
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
            id: '674821d1fbe60a002a9f453d', title: 'Sekolah Menengah Pertama',
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
            id: '674821d1fbe60a002a9f453f', title: 'Sekolah Menengah Atas',
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
            id: '674da23fd5db91003325b566', title: 'Belum Pernah Bersekolah',
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
            id: '67499ed6fbe60a002a9f47c7', title: 'Siswa Bersekolah dan Drop out ',
            styleOptions: customStyle6,
            titleWrapperClass: 'bg-blue-100',
            widgetContentWrapperClass: 'bg-blue-50', 
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
            id: '674821d1fbe60a002a9f4542', title: 'Siswa Bersekolah Berdasarkan Tingkat Pendidikan',
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
            id: '674821d1fbe60a002a9f4543', title: 'Siswa Drop out Berdasarkan Tingkat Pendidikan',
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
          colSpan: 6,
          widgetType: 'default',
          widget: {
            id: '67499c30fbe60a002a9f478b', title: 'Siswa Bersekolah Berdasarkan Tingkat Pendidikan',
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
            id: '674ea589d5db91003325b6d8', title: 'Siswa Drop out Berdasarkan Tingkat Pendidikan',
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
            id: '674821d1fbe60a002a9f4545', title: 'Anak Tidak Bersekolah',
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
            id: '6749a5d7fbe60a002a9f4808', title: 'Anak Belum Pernah Bersekolah',
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
            id: '6749a3fafbe60a002a9f47e3', title: 'Anak Lulus Tidak Melanjutkan Sekolah',
            styleOptions: customStyle6,
            titleWrapperClass: 'bg-sky-100',
            widgetContentWrapperClass: 'bg-sky-50', widgetContentWrapperStyle: { paddingTop: '0rem' },
            iconWrapperClass: 'bg-sky-100',
            // icon: <FcGraduationCap className='text-4xl' />
          },
        },
        {
          colSpan: 9,
          widgetType: 'default',
          widget: {
            id: '67501d73d5db91003325b913', title: 'Belum Pernah Bersekolah',
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
            id: '67501d7bd5db91003325b915', title: 'Lulus Tidak Melanjutkan Tingkat',
            styleOptions: customStyle5,
            titleWrapperClass: 'bg-sky-100',
            widgetContentWrapperClass: 'bg-sky-50', widgetContentWrapperStyle: { paddingTop: '2rem' },
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
    }

    if (filterKabupaten?.value) {
      newFilter.push({
        widgetId: DistrictWebPageFilterID,
        categoryValue: filterKabupaten.value,
        attribute: SIPDKemendikbudDapodik.kode_kab,
        value: filterKabupaten.value.slice(0, 2) + "." + filterKabupaten.value.slice(2)
      });
    }

    setSelectedFilters(newFilter);
  }, [filterProvinsi, filterKabupaten]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_APP_API_URL}/kemendikbud-dapodik`, { withCredentials: true });
        
        // Assuming the response structure is as follows:
        // response.data = [
        //   { kodeProv: "11", jumlahBersekolah: 898401, jumlahDropout: 13510016, jumlahBpb: 14569672, jumlahLtm: 23975016 },
        //   ...
        // ];

        // Set province map data
        setProvinceMapData({
          originalData: response.data,
          dataKey: "kodeProv", // Use the correct key for your data
          // dynamicColor: true
        });

        // Set district map data if needed (you might want to adjust this based on your API response)
        setDistrictMapData({
          originalData: response.data, // Adjust this if you have separate district data
          dataKey: "kodeProv", // Use the correct key for your data
        });

        // Set color lists
        setProvinceColorList(provinceDataColorList);
        setDistrictColorList(districtDataColorList);

        // Set popup data
        setProvincePopupData(popupDataList);
        setDistrictPopupData(popupDataList);

        // Set the map legend title
        setMapLegendTitle("Jumlah Data DAPODIK");
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