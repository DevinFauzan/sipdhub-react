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
import DashboardGridComponent from './DashboardGridComponent';
// import DashboardGridComponent from './DashboardGridComponent';
// import DashboardGridRightAndLeftComponent from './DashboardGridRightAndLeft';
// import DashboardGridRightAndLeftCakadaComponent from './DashboardGridRightAndLeftCakada';

const SisenseCakadaComponent: React.FC = () => {
  const dashboards: IDashboard[] = [
    {
      id: '6731237efbe60a002a9f3d92',
      name: 'Calon Kepala Daerah',
      widgets: [
        {
          colSpan: 12,
          widgetType: 'default',
          widget: {
            id: '673123defbe60a002a9f3d94',
            title: 'Calon Kepala Daerah by Provinsi',
            styleOptions: customStyle11,
            titleWrapperClass: 'bg-stone-200',
            titleStyle: { paddingTop: '0.8rem', paddingBottom: '0.8rem' },
            widgetContentWrapperClass: 'bg-stone-100',
            widgetContentWrapperStyle: { paddingTop: '0rem' },
            iconWrapperClass: 'bg-blue-100',
          },
        },
        {
          colSpan: 4,
          widgetType: 'default',
          widget: {
            id: '6732e45ffbe60a002a9f3dea',
            title: 'Calon Kepala Daerah',
            titleStyle: { paddingTop: '0rem', paddingBottom: '0rem' },
            styleOptions: customStyle4,
            titleWrapperClass: 'bg-gray-300',
            widgetContentWrapperClass: 'bg-gray-200',
            widgetContentWrapperStyle: { paddingTop: '0rem' },
            iconWrapperClass: 'bg-blue-200',
          },
        },
        {
          colSpan: 4,
          widgetType: 'default',
          widget: {
            id: '67312473fbe60a002a9f3d96',
            title: 'Jenis Paslon',
            titleStyle: { paddingTop: '0rem', paddingBottom: '0rem' },
            styleOptions: customStyle4,
            titleWrapperClass: 'bg-gray-300',
            widgetContentWrapperClass: 'bg-gray-200',
            widgetContentWrapperStyle: { paddingTop: '0rem' },
            iconWrapperClass: 'bg-blue-200',
          },
        },
        {
          colSpan: 4,
          widgetType: 'default',
          widget: {
            id: '6732f189fbe60a002a9f3dff',
            title: 'Calon Bupati',
            titleStyle: { paddingTop: '0rem', paddingBottom: '0rem' },
            styleOptions: customStyle1,
            titleWrapperClass: 'bg-stone-300',
            widgetContentWrapperClass: 'bg-stone-200',
            widgetContentWrapperStyle: { paddingTop: '0rem' },
            iconWrapperClass: 'bg-blue-200',
          },
        },
        {
          colSpan: 4,
          widgetType: 'default',
          widget: {
            id: '6732f4aefbe60a002a9f3e19',
            title: 'Calon Wakil Bupati',
            styleOptions: customStyle1,
            titleWrapperClass: 'bg-stone-300',
            widgetContentWrapperClass: 'bg-stone-200',
            widgetContentWrapperStyle: { paddingTop: '0rem' },
            iconWrapperClass: 'bg-blue-100',
          },
        },
        {
          colSpan: 4,
          widgetType: 'default',
          widget: {
            id: '673125b4fbe60a002a9f3d98',
            title: 'Calon Bupati',
            styleOptions: customStyle4,
            titleWrapperClass: 'bg-stone-300',
            widgetContentWrapperClass: 'bg-stone-200',
            widgetContentWrapperStyle: { paddingTop: '0rem' },
            iconWrapperClass: 'bg-sky-100',
          },
        },
        {
          colSpan: 4,
          widgetType: 'default',
          widget: {
            id: '6731265cfbe60a002a9f3d9c',
            title: 'Calon Wakil Bupati',
            styleOptions: customStyle4,
            titleWrapperClass: 'bg-stone-300',
            widgetContentWrapperClass: 'bg-stone-200',
            widgetContentWrapperStyle: { paddingTop: '0rem' },
            iconWrapperClass: 'bg-sky-100',
          },
        },
        {
          colSpan: 4,
          widgetType: 'default',
          widget: {
            id: '6732f213fbe60a002a9f3e02',
            title: 'Calon Walikota',
            styleOptions: customStyle1,
            titleWrapperClass: 'bg-zinc-300',
            widgetContentWrapperClass: 'bg-zinc-200',
            widgetContentWrapperStyle: { paddingTop: '0rem' },
            iconWrapperClass: 'bg-blue-100',
          },
        },
        {
          colSpan: 4,
          widgetType: 'default',
          widget: {
            id: '6732f4dbfbe60a002a9f3e1b',
            title: 'Calon Wakil Walikota',
            styleOptions: customStyle1,
            titleWrapperClass: 'bg-zinc-300',
            widgetContentWrapperClass: 'bg-zinc-200',
            widgetContentWrapperStyle: { paddingTop: '0rem' },
            iconWrapperClass: 'bg-blue-100',
          },
        },
        {
          colSpan: 4,
          widgetType: 'default',
          widget: {
            id: '6732f29afbe60a002a9f3e09',
            title: 'Calon Walikota berdasarkan Jenis Kelamin',
            styleOptions: customStyle4,
            titleWrapperClass: 'bg-zinc-300',
            widgetContentWrapperClass: 'bg-zinc-200',
            widgetContentWrapperStyle: { paddingTop: '0rem' },
            iconWrapperClass: 'bg-sky-100',
          },
        },
        {
          colSpan: 4,
          widgetType: 'default',
          widget: {
            id: '6732f2f6fbe60a002a9f3e12',
            title: 'Wakil Walikota berdasarkan Jenis Kelamin',
            styleOptions: customStyle4,
            titleWrapperClass: 'bg-zinc-300',
            widgetContentWrapperClass: 'bg-zinc-200',
            widgetContentWrapperStyle: { paddingTop: '0rem' },
            iconWrapperClass: 'bg-sky-100',
          },
        },
        {
          colSpan: 4,
          widgetType: 'default',
          widget: {
            id: '6732e3d2fbe60a002a9f3de5',
            title: 'Calon Partai Politik',
            styleOptions: customStyle1,
            titleWrapperClass: 'bg-zinc-200',
            widgetContentWrapperClass: 'bg-zinc-100',
            widgetContentWrapperStyle: { paddingTop: '0rem' },
            iconWrapperClass: 'bg-blue-100',
          },
        },
        {
          colSpan: 4,
          widgetType: 'default',
          widget: {
            id: '6732e42dfbe60a002a9f3de8',
            title: 'Calon Perseorangan',
            styleOptions: customStyle1,
            titleWrapperClass: 'bg-zinc-200',
            widgetContentWrapperClass: 'bg-zinc-100',
            widgetContentWrapperStyle: { paddingTop: '0rem' },
            iconWrapperClass: 'bg-blue-100',
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

export default SisenseCakadaComponent;
