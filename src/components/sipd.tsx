import React from 'react';

import { IDashboard } from './_models';

import { customStyle1, customStyle6, customStyle9 } from './_SisenseWidgetStyleOptions';
import DashboardGridComponent from './DashboardGridComponent';

import { FcShop, FcMoneyTransfer } from 'react-icons/fc';


const sipd: React.FC = () => {


  const dashboards: IDashboard[] = [
    {
      id: '671de99ffbe60a002a9f3465',
      name: 'ALOKASI ANGGARAN NASIONAL',
      widgets: [
        {
          colSpan: 3,
          widgetType: 'default',
          widget: {
            id: '671dea45fbe60a002a9f3467', title: 'Belanja Nasional',
            styleOptions: customStyle1,
            titleWrapperClass: 'bg-lime-100',
            widgetContentWrapperClass: 'bg-lime-50',
            // widgetContentWrapperStyle: { paddingTop: '1.6rem' },
            titleStyle: { paddingTop: '0.7rem', paddingBottom: '0.7rem' },
            iconWrapperClass: 'bg-lime-100',
            // icon: <FcShop className='text-4xl' />
          },
        },
        {
          colSpan: 3,
          widgetType: 'default',
          widget: {
            id: '671deb04fbe60a002a9f346c', title: 'Belanja Urusan dan SPM Bidang',
            styleOptions: customStyle1,
            titleWrapperClass: 'bg-lime-100',
            widgetContentWrapperClass: 'bg-lime-50',
            titleStyle: { paddingTop: '0.7rem', paddingBottom: '0.7rem' },
            iconWrapperClass: 'bg-lime-200',
          },
        },
        {
          colSpan: 3,
          widgetType: 'default',
          widget: {
            id: '671e27c3fbe60a002a9f360a', title: 'Anggaran Stunting',
            styleOptions: customStyle1,
            titleWrapperClass: 'bg-sky-100',
            widgetContentWrapperClass: 'bg-sky-50',
            titleStyle: { paddingTop: '0.7rem', paddingBottom: '0.7rem' },
            iconWrapperClass: 'bg-sky-100',
            // icon: <FcMoneyTransfer className='text-4xl' />
          },
        },
        {
          colSpan: 3,
          widgetType: 'default',
          widget: {
            id: '671e27d9fbe60a002a9f360c', title: 'Anggaran Kemiskinan Ekstrem',
            styleOptions: customStyle1,
            titleWrapperClass: 'bg-sky-100',
            widgetContentWrapperClass: 'bg-sky-50',
            widgetContentWrapperStyle: { paddingTop: '0rem' },
            titleStyle: { paddingTop: '0.7rem', paddingBottom: '0.7rem' },
            iconWrapperClass: 'bg-sky-100',
          },
        },
        {
          colSpan: 4,
          widgetType: 'default',
          widget: {
            id: '671dec83fbe60a002a9f3473', title: 'Belanja Nasional Berdasarkan SPM Bidang ',
            styleOptions: customStyle6,
            titleWrapperClass: 'bg-lime-100',
            widgetContentWrapperClass: 'bg-lime-50',
            titleStyle: { paddingTop: '0.7rem', paddingBottom: '0.7rem' },
            iconWrapperClass: 'bg-lime-200',
          },
        },
        {
          colSpan: 4,
          widgetType: 'default',
          widget: {
            id: '671e28ddfbe60a002a9f3616', title: 'Distribusi Penanganan Stunting dan Kemiskinan Ekstrem Nasional',
            styleOptions: customStyle6,
            titleWrapperClass: 'bg-sky-100',
            widgetContentWrapperClass: 'bg-sky-50',
            // widgetContentWrapperStyle: { paddingTop: '1.2rem' },
            iconWrapperClass: 'bg-sky-200',
          },
        },
        {

          colSpan: 4,
          widgetType: 'default',
          widget: {
            id: '671e2a3cfbe60a002a9f3623', title: 'Penanganan Stunting dan Kemiskinan Ekstrem Berdasarkan SPM Bidang Pemerintah',
            styleOptions: customStyle6,
            titleWrapperClass: 'bg-sky-100',
            widgetContentWrapperClass: 'bg-sky-50',
            // widgetContentWrapperStyle: { paddingTop: '1.2rem' },
            iconWrapperClass: 'bg-sky-200',
          },
        },
        {
          colSpan: 6,
          widgetType: 'default',
          widget: {
            id: '671dee08fbe60a002a9f347c', title: 'Belanja Nasional Berdasarkan Urusan Bidang Pemerintah',
            styleOptions: customStyle6,
            titleWrapperClass: 'bg-lime-100',
            widgetContentWrapperClass: 'bg-lime-50',
            widgetContentWrapperStyle: { paddingTop: '3.1rem' },
            titleStyle: { paddingTop: '1rem', paddingBottom: '1rem' },
            iconWrapperClass: 'bg-lime-100',
            // icon: <FcShop className='text-4xl' />
          },
        },
        {
          colSpan: 6,
          widgetType: 'default',
          widget: {
            id: '671e28fbfbe60a002a9f3618', title: 'Penanganan Stunting dan Kemiskinan Ekstrem Berdasarkan Urusan Bidang Pemerintah',
            styleOptions: customStyle6,
            titleWrapperClass: 'bg-sky-100',
            widgetContentWrapperClass: 'bg-sky-50',
            widgetContentWrapperStyle: { paddingTop: '2.8rem' },
            titleStyle: { paddingTop: '0.3rem', paddingBottom: '1rem' },
            iconWrapperClass: 'bg-sky-100',
            // icon: <FcMoneyTransfer className='text-4xl' />
          },
        },
        {
          colSpan: 12,
          widgetType: 'default',
          widget: {
            id: '671df7c3fbe60a002a9f3496', title: 'Alokasi Belanja Stunting dan Kemiskinan Ekstrem',
            styleOptions: customStyle9,
            titleWrapperClass: 'bg-sky-100',
            widgetContentWrapperClass: 'bg-sky-50',
            widgetContentWrapperStyle: { paddingTop: '3.1rem' },
            iconWrapperClass: 'bg-sky-100',
            // icon: <FcMoneyTransfer className='text-4xl' />
          },
        },
      ]
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

export default sipd;
