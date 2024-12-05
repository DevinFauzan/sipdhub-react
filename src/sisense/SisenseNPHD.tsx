// import React, { useContext, useEffect, useState } from 'react';
// import { IDashboard, IFilterState } from './_models';
// import { customStyle1, customStyle11, customstyle12, customStyle2, customStyle3, customStyle4, customStyle5, customStyle6, customStyle8, customStyle9 } from './_SisenseWidgetStyleOptions';
// import DashboardGridComponent from './DashboardGridComponent';
// import { FcCollaboration, FcDiploma1, FcDisclaimer, FcGraduationCap, FcMoneyTransfer } from 'react-icons/fc';
// import { FilterContext, MapDataContext } from '../public-profile/profiles/company copy';
// import { DistrictWebPageFilterID, NPHD, ProvinceWebPageFilterID, WebPageFilterID } from './_datamodels';
// import { text } from 'stream/consumers';
// import { getDashboardBackgroundFilters } from 'node_modules/@sisense/sdk-ui/dist/packages/sdk-ui/src/dashboard-widget/translate-dashboard-filters';
// import axios from 'axios';
// import { IPopupContent, IStandardColorRange } from '../public-profile/profiles/company copy/blocks/interfaces/global';

// const colorList: Array<IStandardColorRange> = [
//     {
//       stepMin: 0.00,
//       stepMax: 19.9999999,
//       color: '#B9DDF1'
//     },
//     {
//       stepMin: 20.00,
//       stepMax: 39.9999999,
//       color: '#8BBADC'
//     },
//     {
//       stepMin: 40.00,
//       stepMax: 59.9999999,
//       color: '#6798C1'
//     },
//     {
//       stepMin: 60.00,
//       stepMax: 79.9999999,
//       color: '#4776A4'
//     },
//     {
//       stepMin: 80.00,
//       stepMax: 100.00,
//       color: '#2A5783'
//     }
// ]

// const popupDataList: Array<IPopupContent> = [
//     {
//       sourceKey: "persentaseRealisasiKPU",
//       title: "Persentase Realisasi KPU",
//       percentage: true
//     },
//     {
//       sourceKey: "anggaranKPU",
//       title: "Jumlah Anggaran KPU"
//     },
//     {
//       sourceKey: "realisasiKPU",
//       title: "Realisasi Anggaran KPU"
//     },
// ]

// interface SisenseNPHDComponentProps {
//     isSelected: boolean
// }

// const SisenseNPHDComponent: React.FC<SisenseNPHDComponentProps> = ({ isSelected }) => {
//     const { filterProvinsi, filterKabupaten } = useContext(FilterContext);
//     const { setProvinceMapData, setDistrictMapData, setProvinceColorList, setDistrictColorList, setProvincePopupData, setDistrictPopupData, setMapLegendTitle, setSelectedAdministrative } = useContext(MapDataContext)

//     const [selectedFilters, setSelectedFilters] = useState<IFilterState[]>([]);
//     const [isLoaded, setIsLoaded] = useState<boolean>(false)

//     const dashboards: IDashboard[] = [
//         {
//             id: '673c3d26fbe60a002a9f408c',
//             name: 'NPHD Tingkat Provinsi',
//             description: "(Dalam miliar rupiah)",
//             widgets: [
//                 // baris 1
//                 {
//                     colSpan: 4,
//                     widgetType: 'default',
//                     widget: {
//                         id: '673c3e10fbe60a002a9f408e',
//                         title: 'KPU',
//                         styleOptions: customStyle1,
//                         titleWrapperClass: 'bg-red-200',
//                         widgetContentWrapperClass: 'bg-red-100',
//                         widgetContentWrapperStyle: { paddingTop: '0rem' },
//                         iconWrapperClass: 'bg-red-100',
//                         titleStyle: { paddingTop: '0.1rem', paddingBottom: '0.1rem' },
//                         // icon: <FcMoneyTransfer className='text-4xl' />
//                     },
//                 },
//                 {
//                     colSpan: 4,
//                     widgetType: 'default',
//                     widget: {
//                         id: '673c3e3afbe60a002a9f4090',
//                         title: 'BAWASLU',
//                         styleOptions: customStyle1,
//                         titleWrapperClass: 'bg-red-300',
//                         widgetContentWrapperClass: 'bg-red-200', widgetContentWrapperStyle: { paddingTop: '0rem' },
//                         iconWrapperClass: 'bg-red-100',
//                         titleStyle: { paddingTop: '0.1rem', paddingBottom: '0.1rem' },
//                         // icon: <FcMoneyTransfer className='text-4xl' />
//                     },
//                 },
//                 {
//                     colSpan: 4,
//                     widgetType: 'default',
//                     widget: {
//                         id: '673c3e8bfbe60a002a9f4096',
//                         title: 'POLRI',
//                         styleOptions: customStyle1,
//                         titleWrapperClass: 'bg-zinc-300',
//                         widgetContentWrapperClass: 'bg-zinc-200', widgetContentWrapperStyle: { paddingTop: '0rem' },
//                         iconWrapperClass: 'bg-blue-100',
//                         titleStyle: { paddingTop: '0.1rem', paddingBottom: '0.1rem' },
//                         // icon: <FcMoneyTransfer className='text-4xl' />
//                     },
//                 },  
//                 {
//                     colSpan: 4,
//                     widgetType: 'default',
//                     widget: {
//                         id: '673c3ec8fbe60a002a9f409a',
//                         title: 'TNI',
//                         styleOptions: customStyle1,
//                         titleWrapperClass: 'bg-zinc-400',
//                         titleStyle: { paddingTop: '0.1rem', paddingBottom: '0.1rem' },
//                         widgetContentWrapperClass: 'bg-zinc-300', 
//                         widgetContentWrapperStyle: { paddingTop: '0rem' },
//                         iconWrapperClass: 'bg-blue-200',
//                         // icon: <FcMoneyTransfer className='text-4xl' />
//                     },
//                 },
//                 //    baris 2
//                 {
//                     colSpan: 4,
//                     widgetType: 'default',
//                    WidgetThemeSettings: {
//                        backgroundColor: '#1f2937',
//                    },
//                     widget: {
//                         WidgetThemeSettings: {
//                             backgroundColor: '#1f2937',
//                         },
//                         id: '673c3f26fbe60a002a9f409e',
//                         title: '',
//                         styleOptions: customStyle3,
//                         titleWrapperClass: 'bg-red-100', 
//                         widgetContentWrapperClass: 'bg-red-100',
//                         titleStyle: { height: '1rem' },
//                         // icon: <FcMoneyTransfer className='text-4xl' />
//                     },
//                 },
//                 {
//                     colSpan: 4,
//                     widgetType: 'default',
//                     widget: {
//                         id: '673d5519fbe60a002a9f40e4',
//                         title: '',
//                         styleOptions: customStyle3,
//                         titleWrapperClass: 'bg-red-200',
//                         widgetContentWrapperClass: 'bg-red-200',
//                         widgetContentWrapperStyle: { paddingTop: '0rem' },
//                         iconWrapperClass: 'bg-blue-100',
//                         titleStyle: { paddingTop: '0.1rem', paddingBottom: '0.1rem' },
//                         // icon: <FcMoneyTransfer className='text-4xl' />
//                     },
//                 },
//                 {
//                     colSpan: 4,
//                     widgetType: 'default',
//                     widget: {
//                         id: '673d561afbe60a002a9f40e8',
//                         title: '',
//                         styleOptions: customStyle3,
//                         titleWrapperClass: 'bg-zinc-200',
//                         widgetContentWrapperClass: 'bg-zinc-200', widgetContentWrapperStyle: { paddingTop: '0rem' },
//                         iconWrapperClass: 'bg-blue-100',
//                         titleStyle: { paddingTop: '0.1rem', paddingBottom: '0.1rem' },
//                         // icon: <FcMoneyTransfer className='text-4xl' />
//                     },
//                 },
//                 {
//                     colSpan: 4,
//                     widgetType: 'default',
//                     widget: {
//                         id: '673d5731fbe60a002a9f40ee',
//                         title: '',
//                         styleOptions: customStyle3,
//                         titleWrapperClass: 'bg-zinc-300',
//                         titleStyle: { paddingTop: '0.1rem', paddingBottom: '0.1rem' },
//                         widgetContentWrapperClass: 'bg-zinc-300', widgetContentWrapperStyle: { paddingTop: '0rem' },
//                         iconWrapperClass: 'bg-blue-200',
//                         // icon: <FcMoneyTransfer className='text-4xl' />
//                     },
//                 },
//                 // baris 3
//                 // {
//                 //     colSpan: 6,
//                 //     widgetType: 'default',
//                 //     widget: {
//                 //         id: '673d59c8fbe60a002a9f40f8',
//                 //         title: 'KPU',
//                 //         styleOptions: customStyle11,
//                 //         titleWrapperClass: 'bg-gray-300',
//                 //         widgetContentWrapperClass: 'bg-gray-200', 
//                 //         iconWrapperClass: 'bg-blue-100',
//                 //         // icon: <FcMoneyTransfer className='text-4xl' />
//                 //     },
//                 //     tiangDewa: true,
//                 //     tiangDewaColor: '#f3f4f6'
//                 // },
//                 // {
//                 //     colSpan: 6,
//                 //     widgetType: 'default',
//                 //     widget: {
//                 //         id: '673d5a75fbe60a002a9f40fd',
//                 //         title: 'KABUPATEN KPU',
//                 //         styleOptions: customStyle11,
//                 //         titleWrapperClass: 'bg-gray-300',
//                 //         widgetContentWrapperClass: 'bg-gray-200', 
//                 //         iconWrapperClass: 'bg-blue-100',
                        
//                 //         // icon: <FcMoneyTransfer className='text-4xl' />
//                 //     },
//                 // },
//             ]
//         },
//     ];

//     useEffect(() => {
//         // If the filter is triggered from Sisense's side, we just return to prevent double processing of filter
//         const newFilter: Array<IFilterState> = [];
//         if (filterProvinsi?.value) {
//         newFilter.push({
//             widgetId: ProvinceWebPageFilterID,
//             categoryValue: filterProvinsi.value,
//             attribute: NPHD.KODE_PROV,
//             value: filterProvinsi.value
//         })
//         }

//         if (filterKabupaten?.value) {
//         newFilter.push({
//             widgetId: DistrictWebPageFilterID,
//             categoryValue: filterKabupaten.value,
//             attribute: NPHD.KODE_KAB,
//             value: filterKabupaten.value
//         })
//         }

//         setSelectedFilters(newFilter)
//     }, [filterProvinsi, filterKabupaten])

//     useEffect(() => {
//         const fetch = async () => {
//           try {
//             const provinceResponse = await axios.get(`${import.meta.env.VITE_APP_API_URL}/nphd-all-prov`)
//             const districtResponse = await axios.get(`${import.meta.env.VITE_APP_API_URL}/nphd-all-kab`)
    
//             setProvinceMapData({
//               originalData: provinceResponse.data,
//               dataKey: "persentaseRealisasiKPU",
//               percentage: true
//             })
    
//             setDistrictMapData({
//               originalData: districtResponse.data,
//               dataKey: "persentaseRealisasiKPU",
//               percentage: true
//             })
    
//             setProvinceColorList(colorList)
//             setDistrictColorList(colorList)
    
//             setProvincePopupData(popupDataList)
//             setDistrictPopupData(popupDataList)
    
//             setMapLegendTitle("Persen Realisasi Anggaran")
//           } catch (error) {
//             console.error(error)
//           }
//         }
    
//         if (isSelected) {
//             setSelectedAdministrative("provinsi")
      
//             if (!isLoaded) {
//               fetch()
//               setIsLoaded(true)
//             }
//           }
//       }, [isSelected])

//     return (
//         <div className="multi-dashboard-container">
//             {dashboards.map(dashboard => (
//                 <DashboardGridComponent key={dashboard.id} dashboard={dashboard} webpageFilters={selectedFilters} />
//             ))}
//         </div>
//     );
// };

// export default SisenseNPHDComponent;
