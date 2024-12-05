// import React from 'react';

// import { IDashboard } from './_models';

// import { customStyle1, customStyle11, customStyle3, customStyle4, customStyle5, customStyle6, customStyle7, customStyle9 } from './_SisenseWidgetStyleOptions';
// import DashboardGridComponent from './DashboardGridComponent';
// import { FcCollaboration, FcDiploma1, FcDisclaimer, FcGraduationCap, FcMoneyTransfer } from 'react-icons/fc';



// const SisensePetahanaComponent: React.FC = () => {

//   const dashboards: IDashboard[] = [
//     {
//       id: '6731237efbe60a002a9f3d92',
//       name: 'Petahana',
//       widgets: [
//         {
//           colSpan: 2,
//           widgetType: 'default',
//           widget: {
//             id: '6733527efbe60a002a9f3f60', title: 'Total Petahana',
//             styleOptions: customStyle1,
//             titleWrapperClass: 'bg-stone-200',
//             widgetContentWrapperClass: 'bg-stone-100',
//             //  widgetContentWrapperStyle: { paddingTop: '1rem' },
//             iconWrapperClass: 'bg-blue-100',
//             // titleStyle: { paddingTop: '0.1rem', paddingBottom: '0.1rem' },
//             // icon: <FcMoneyTransfer className='text-4xl' />
//           },
//         },
//         {
//             colSpan: 2,
//             widgetType: 'default',
//             widget: {
//               id: '6733565cfbe60a002a9f3f7d', title: 'Calon Tunggal',
//               styleOptions: customStyle1,
//               titleWrapperClass: 'bg-stone-200',
//               widgetContentWrapperClass: 'bg-stone-100', widgetContentWrapperStyle: { paddingTop: '1rem' },
//               iconWrapperClass: 'bg-blue-100',
//               titleStyle: { paddingTop: '0.3rem', paddingBottom: '0.3rem' },
//               // icon: <FcMoneyTransfer className='text-4xl' />
//             },
//           },
//         {
//           colSpan: 2,
//           widgetType: 'default',
//           widget: {
//             id: '67335290fbe60a002a9f3f62', title: '',
//             styleOptions: customStyle4,
//             titleWrapperClass: 'bg-stone-100',
//             widgetContentWrapperClass: 'bg-stone-100', widgetContentWrapperStyle: { paddingTop: '0rem' },
//             iconWrapperClass: 'bg-blue-100',
//             titleStyle: { paddingTop: '0.3rem', paddingBottom: '0.3rem' },
//             // icon: <FcMoneyTransfer className='text-4xl' />
//           },
//         },
       
//           {
//             colSpan: 2,
//             widgetType: 'default',
//             widget: {
//               id: '673356d0fbe60a002a9f3f82', title: '',
//               styleOptions: customStyle4,
//               titleWrapperClass: 'bg-stone-100',
//               widgetContentWrapperClass: 'bg-stone-100', widgetContentWrapperStyle: { paddingTop: '0rem' },
//               iconWrapperClass: 'bg-blue-100',
//               titleStyle: { paddingTop: '0.3rem', paddingBottom: '0.3rem' },
//               // icon: <FcMoneyTransfer className='text-4xl' />
//             },
//           },
//       ]
//     },
//   ];
//   return (
//     <div className="multi-dashboard-container">
//       {dashboards.map(dashboard => (
//         <DashboardGridComponent key={dashboard.id} dashboard={dashboard} />
//       ))}
//     </div>
//   );
// };

// export default SisensePetahanaComponent;
