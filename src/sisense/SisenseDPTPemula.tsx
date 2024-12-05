// import React, { useContext, useEffect, useState } from 'react';
// import { IDashboard, IFilterState } from './_models';
// import { customStyle1, customStyle11, customstyle12, customStyle2, customStyle3, customStyle4, customStyle5, customStyle6, customStyle8, customStyle9 } from './_SisenseWidgetStyleOptions';
// import DashboardGridComponent from './DashboardGridComponent';
// import { FcCollaboration, FcDiploma1, FcDisclaimer, FcGraduationCap, FcMoneyTransfer } from 'react-icons/fc';
// import { FilterContext, MapDataContext } from '../public-profile/profiles/company copy';
// import { DistrictWebPageFilterID, DPTPemulaDisabilitas, ProvinceWebPageFilterID, WebPageFilterID } from './_datamodels';
// import axios from 'axios';
// import { IPopupContent, IStandardColorRange } from '../public-profile/profiles/company copy/blocks/interfaces/global';

// const provinceDataColorList: Array<IStandardColorRange> = [
//   {
//     stepMin: 0.00,
//     stepMax: 19.9999999,
//     color: '#B9DDF1'
//   },
//   {
//     stepMin: 20.00,
//     stepMax: 39.9999999,
//     color: '#8BBADC'
//   },
//   {
//     stepMin: 40.00,
//     stepMax: 59.9999999,
//     color: '#6798C1'
//   },
//   {
//     stepMin: 60.00,
//     stepMax: 79.9999999,
//     color: '#4776A4'
//   },
//   {
//     stepMin: 80.00,
//     stepMax: 100.00,
//     color: '#2A5783'
//   }
// ]

// const districtDataColorList: Array<IStandardColorRange> = [
//   {
//     stepMin: 0.00,
//     stepMax: 19.9999999,
//     color: '#B9DDF1'
//   },
//   {
//     stepMin: 20.00,
//     stepMax: 39.9999999,
//     color: '#8BBADC'
//   },
//   {
//     stepMin: 40.00,
//     stepMax: 59.9999999,
//     color: '#6798C1'
//   },
//   {
//     stepMin: 60.00,
//     stepMax: 79.9999999,
//     color: '#4776A4'
//   },
//   {
//     stepMin: 80.00,
//     stepMax: 100.00,
//     color: '#2A5783'
//   }
// ]

// const popupDataList: Array<IPopupContent> = [
//   {
//     sourceKey: "pemula_jumlah",
//     title: "Jumlah DPT Pemula"
//   },
//   {
//     sourceKey: "persentase_sudah_rekam",
//     title: "Persentase DPT Sudah Rekam",
//     percentage: true
//   },
//   {
//     sourceKey: "pemula_sudah_rekam",
//     title: "DPT Sudah Rekam"
//   },
//   {
//     sourceKey: "pemula_belum_rekam",
//     title: "DPT Belum Rekam"
//   },
// ]

// const SisenseDPTPemulaComponent: React.FC<{ isSelected: boolean }> = ({ isSelected }) => {
//   const { filterProvinsi, filterKabupaten } = useContext(FilterContext);
//   const { setProvinceMapData, setDistrictMapData, setProvinceColorList, setDistrictColorList, setProvincePopupData, setDistrictPopupData, setMapLegendTitle } = useContext(MapDataContext)

//   const [selectedFilters, setSelectedFilters] = useState<IFilterState[]>([]);

//   const dashboards: IDashboard[] = [
//     {
//       id: '67311a6bfbe60a002a9f3d58',
//       name: 'Pemula',
//       widgets: [
//         // baris 1
//         {
//           colSpan: 3,
//           widgetType: 'default',
//           widget: {
//             id: '6733023ffbe60a002a9f3e62', 
//             title: 'Pemilih Pemula',
//             styleOptions: customStyle1,
//             titleWrapperClass: 'bg-zinc-300',
//             widgetContentWrapperClass: 'bg-zinc-200', 
//             widgetContentWrapperStyle: { paddingTop: '0rem' },
//             iconWrapperClass: 'bg-blue-100',
//             titleStyle: { paddingTop: '0.1rem', paddingBottom: '0.1rem' },
//             // icon: <FcMoneyTransfer className='text-4xl' />
//           },
//         },
//         {
//           colSpan: 3,
//           widgetType: 'default',
//           widget: {
//             id: '67330400fbe60a002a9f3e68', 
//             title: 'Rekam',
//             styleOptions: customStyle1,
//             titleWrapperClass: 'bg-zinc-300',
//             widgetContentWrapperClass: 'bg-zinc-200', widgetContentWrapperStyle: { paddingTop: '0rem' },
//             iconWrapperClass: 'bg-blue-100',
//             titleStyle: { paddingTop: '0.1rem', paddingBottom: '0.1rem' },
//             // icon: <FcMoneyTransfer className='text-4xl' />
//           },
//         },
//         {
//           colSpan: 3,
//           widgetType: 'default',
//           widget: {
//             id: '67330430fbe60a002a9f3e6c', 
//             title: 'Belum Rekam',
//             styleOptions: customStyle1,
//             titleWrapperClass: 'bg-zinc-300',
//             widgetContentWrapperClass: 'bg-zinc-200', widgetContentWrapperStyle: { paddingTop: '0rem' },
//             iconWrapperClass: 'bg-blue-100',
//             titleStyle: { paddingTop: '0.1rem', paddingBottom: '0.1rem' },
//             // icon: <FcMoneyTransfer className='text-4xl' />
//           },
//         },

//         // baris 2
//         {
//           colSpan: 3,
//           widgetType: 'default',
//           widget: {
//             id: '67311da7fbe60a002a9f3d60', 
//             title: '% Perekaman',
//             styleOptions: customStyle5,
//             titleWrapperClass: 'bg-zinc-300',
//             titleStyle: { paddingTop: '0.1rem', paddingBottom: '0.1rem' },
//             widgetContentWrapperClass: 'bg-zinc-200', widgetContentWrapperStyle: { paddingTop: '0rem' },
//             iconWrapperClass: 'bg-blue-200',
//             // icon: <FcMoneyTransfer className='text-4xl' />
//           },
//         },
//         {
//           colSpan: 3,
//           widgetType: 'default',
//           widget: {
//             id: '673304f1fbe60a002a9f3e7a', 
//             title: 'Rekaman',
//             styleOptions: customStyle5,
//             titleWrapperClass: 'bg-zinc-300',
//             titleStyle: { paddingTop: '0.1rem', paddingBottom: '0.1rem' },
//             widgetContentWrapperClass: 'bg-zinc-200', widgetContentWrapperStyle: { paddingTop: '0rem' },
//             iconWrapperClass: 'bg-blue-200',
//             // icon: <FcMoneyTransfer className='text-4xl' />
//           },
//         },
//         {
//           colSpan: 3,
//           widgetType: 'default',
//           widget: {
//             id: '6733049dfbe60a002a9f3e76', 
//             title: 'Belum Rekam',
//             styleOptions: customStyle5,
//             titleWrapperClass: 'bg-zinc-300',
//             widgetContentWrapperClass: 'bg-zinc-200', widgetContentWrapperStyle: { paddingTop: '0rem' },
//             iconWrapperClass: 'bg-blue-100',
//             titleStyle: { paddingTop: '0.1rem', paddingBottom: '0.1rem' },
//             // icon: <FcMoneyTransfer className='text-4xl' />
//           },
//         },
//         // baris 3
//         {
//           colSpan: 6,
//           widgetType: 'default',
//           widget: {
//             id: '67311ba4fbe60a002a9f3d5c', 
//             title: 'Jumlah DPT Pemula Provinsi',
//             styleOptions: customStyle11,
//             titleWrapperClass: 'bg-zinc-300',
//             widgetContentWrapperClass: 'bg-zinc-200', widgetContentWrapperStyle: { paddingTop: '0rem' },
//             iconWrapperClass: 'bg-blue-100',
//             titleStyle: { paddingTop: '0.1rem', paddingBottom: '0.1rem' },
//             // icon: <FcMoneyTransfer className='text-4xl' />
//           },
//           sourceFilter: true,
//           districtFilterable: false,
//           provinceFilterable: false,
//           tiangDewa: true,
//           tiangDewaColor: '#E4E4E7'
//         }, {
//           colSpan: 6,
//           widgetType: 'default',
//           widget: {
//             id: '673c6bfffbe60a002a9f40ce', 
//             title: 'Jumlah DPT Pemula Kabupaten',
//             styleOptions: customStyle11,
//             titleWrapperClass: 'bg-zinc-300',
//             widgetContentWrapperClass: 'bg-zinc-200', widgetContentWrapperStyle: { paddingTop: '0rem' },
//             iconWrapperClass: 'bg-blue-100',
//             titleStyle: { paddingTop: '0.1rem', paddingBottom: '0.1rem' },
//             // icon: <FcMoneyTransfer className='text-4xl' />
//           },
//           filterable: true,
//           tiangDewa: true,
//           tiangDewaColor: '#E4E4E7'
//         },
//       ]
//     },
//   ];

//   useEffect(() => {
//     // If the filter is triggered from Sisense's side, we just return to prevent double processing of filter
//     const newFilter: Array<IFilterState> = [];
//     if (filterProvinsi?.value) {
//       newFilter.push({
//         widgetId: ProvinceWebPageFilterID,
//         categoryValue: filterProvinsi.value,
//         attribute: DPTPemulaDisabilitas.NO_PROV,
//         value: filterProvinsi.value
//       })
//     }

//     if (filterKabupaten?.value) {
//       newFilter.push({
//         widgetId: DistrictWebPageFilterID,
//         categoryValue: filterKabupaten.value,
//         attribute: DPTPemulaDisabilitas.NO_KAB,
//         value: filterKabupaten.value
//       })
//     }

//     setSelectedFilters(newFilter)
//   }, [filterProvinsi, filterKabupaten])

//   useEffect(() => {
//     const fetch = async () => {
//       try {
//         const provinceResponse = await axios.get(`${import.meta.env.VITE_APP_API_URL}/sumdpt-pemula-all-prov`)
//         const districtResponse = await axios.get(`${import.meta.env.VITE_APP_API_URL}/sumdpt-pemula-all-kab`)

//         setProvinceMapData({
//           originalData: provinceResponse.data,
//           dataKey: "persentase_sudah_rekam",
//           percentage: true
//         })

//         setDistrictMapData({
//           originalData: districtResponse.data,
//           dataKey: "persentase_sudah_rekam",
//           percentage: true
//         })

//         setProvinceColorList(provinceDataColorList)
//         setDistrictColorList(districtDataColorList)

//         setProvincePopupData(popupDataList)
//         setDistrictPopupData(popupDataList)

//         setMapLegendTitle("Persen DPT Pemula")
//       } catch (error) {
//         console.error(error)
//       }
//     }

//     if (isSelected) {
//       fetch()
//     }
//   }, [isSelected])

//   return (
//     <div className="multi-dashboard-container">
//       {dashboards.map(dashboard => (
//         <DashboardGridComponent key={dashboard.id} dashboard={dashboard} webpageFilters={selectedFilters} />
//       ))}
//     </div>
//   );
// };

// export default SisenseDPTPemulaComponent;
