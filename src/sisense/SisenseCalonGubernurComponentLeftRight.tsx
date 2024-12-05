import React from 'react';
import { IDashboard } from './_models';
import {
  customStyle1,
  customStyle11,
  customStyle3,
  customStyle4,
  customStyle5,
  customStyle6,
  customStyle7,
  customStyle8,
  customStyle9
} from './_SisenseWidgetStyleOptions';
// import DashboardGridComponent from './DashboardGridComponent';
// import DashboardGridRightAndLeftComponent from './DashboardGridRightAndLeft';
import DashboardGridComponent from './DashboardGridComponent';

const SisenseCalonGubernurComponent: React.FC = () => {
  const dashboards: IDashboard[] = [
    {
      id: '6731085ffbe60a002a9f3d2f',
      name: 'Analisis Calon Kandidat',
      widgets: [
        {
          colSpan: 12,
          widgetType: 'default',
          widget: {
            id: '6731090afbe60a002a9f3d31',
            title: 'Jumlah Calon Gubernur dan Wakil Gubernur by Provinsi',
            styleOptions: customStyle11,
            titleWrapperClass: 'bg-stone-200',
            titleStyle: { paddingTop: '0.8rem', paddingBottom: '0.8rem' },
            widgetContentWrapperClass: 'bg-stone-100',
            widgetContentWrapperStyle: { paddingTop: '0rem' },
            iconWrapperClass: 'bg-blue-100',
          },
        },
        {
          colSpan: 6,
          widgetType: 'default',
          widget: {
            id: '6732e1c8fbe60a002a9f3dda',
            title: 'Jumlah Calon Gubernur',
            titleStyle: { paddingTop: '0.8rem', paddingBottom: '0.8rem' },
            styleOptions: customStyle1,
            titleWrapperClass: 'bg-stone-200',
            widgetContentWrapperClass: 'bg-stone-100',
            widgetContentWrapperStyle: { paddingTop: '1.5rem' },
            iconWrapperClass: 'bg-blue-200',
          },
        },
        {
          colSpan: 6,
          widgetType: 'default',
          widget: {
            id: '6732e23cfbe60a002a9f3dde',
            title: 'Jumlah Calon Wakil Gubernur',
            titleStyle: { paddingTop: '0.8rem', paddingBottom: '0.8rem' },
            styleOptions: customStyle1,
            titleWrapperClass: 'bg-stone-200',
            widgetContentWrapperClass: 'bg-stone-100',
            widgetContentWrapperStyle: { paddingTop: '1.5rem' },
            iconWrapperClass: 'bg-blue-200',
          },
        },
        {
          colSpan: 6,
          widgetType: 'default',
          widget: {
            id: '67310cb3fbe60a002a9f3d37',
            title: 'Calon Gubernur Berdasarkan Jenis Kelamin',
            titleStyle: { paddingTop: '0.8rem', paddingBottom: '0.8rem' },
            styleOptions: customStyle4,
            titleWrapperClass: 'bg-stone-200',
            widgetContentWrapperClass: 'bg-stone-100',
            widgetContentWrapperStyle: { paddingTop: '1.5rem' },
            iconWrapperClass: 'bg-blue-200',
          },
        },
        {
          colSpan: 6,
          widgetType: 'default',
          widget: {
            id: '67310e23fbe60a002a9f3d3f',
            title: 'Calon Wakil Gubernur berdasarkan Jenis Kelamin',
            styleOptions: customStyle4,
            titleWrapperClass: 'bg-stone-200',
            titleStyle: { paddingTop: '0.8rem', paddingBottom: '0.8rem' },
            widgetContentWrapperClass: 'bg-stone-100',
            widgetContentWrapperStyle: { paddingTop: '1.5rem' },
            iconWrapperClass: 'bg-blue-100',
          },
        },
        {
          colSpan: 6,
          widgetType: 'default',
          widget: {
            id: '6731109cfbe60a002a9f3d49',
            title: 'Riwayat Calon Gubernur',
            styleOptions: customStyle4,
            titleWrapperClass: 'bg-stone-200',
            widgetContentWrapperClass: 'bg-stone-100',
            widgetContentWrapperStyle: { paddingTop: '0rem' },
            iconWrapperClass: 'bg-sky-100',
          },
        },
        {
          colSpan: 6,
          widgetType: 'default',
          widget: {
            id: '67311919fbe60a002a9f3d52',
            title: 'Riwayat Calon Wakil Gubenur',
            styleOptions: customStyle4,
            titleWrapperClass: 'bg-stone-200',
            widgetContentWrapperClass: 'bg-stone-100',
            widgetContentWrapperStyle: { paddingTop: '0rem' },
            iconWrapperClass: 'bg-blue-200',
          },
        },
      ],
    },
  ];

  return (
    <div className="multi-dashboard-container">
      {dashboards.map(dashboard => (
        <DashboardGridComponent key={dashboard.id} dashboard={dashboard} />
      ))}
    </div>
  );
};

export default SisenseCalonGubernurComponent;
