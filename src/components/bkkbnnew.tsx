import React from 'react';
import { IDashboard } from './_models';
import { FcBullish, FcConferenceCall, FcLike, FcNightPortrait, FcPaid } from "react-icons/fc";
import { customStyle1, customStyle3, customStyle4, customStyle6, customStyle7 } from './_SisenseWidgetStyleOptions';
import DashboardGridComponent from './DashboardGridComponent';
// import { HiOutlineAcademicCap } from "react-icons/hi2";

import { IoSadOutline } from 'react-icons/io5';
import { ImMap } from 'react-icons/im';
import { MdFamilyRestroom } from 'react-icons/md';


const bkkbn: React.FC = () => {

  const dashboards: IDashboard[] = [
    {
      id: '671e2b69fbe60a002a9f362f',
      name: 'ALOKASI ANGGARAN STUNTING',
      widgets: [
        {
          colSpan: 3,
          widgetType: 'default',
          widget: {
            id: '671e3e0efbe60a002a9f3641', title: 'Anggaran Kesehatan',
            styleOptions: customStyle3,
            titleWrapperClass: 'bg-lime-100',
            widgetContentWrapperClass: 'bg-lime-50',
            titleStyle: { paddingTop: '1rem', paddingBottom: '1rem' },
            // widgetContentWrapperStyle: { paddingTop: '0.5rem' },
            // iconWrapperClass: 'bg-lime-200',
            // icon: <FcLike className='text-4xl' />
          },
        },
        {
          colSpan: 3,
          widgetType: 'default',
          widget: {
            id: '671e406ffbe60a002a9f3651', title: 'Persentase Anggaran Stunting Kesehatan',
            styleOptions: customStyle3,
            titleWrapperClass: 'bg-lime-100',
            widgetContentWrapperClass: 'bg-lime-50',
            titleStyle: { paddingTop: '0.3rem', paddingBottom: '1rem' },
            iconWrapperClass: 'bg-lime-200',
          },
        },
        {
          colSpan: 3,
          widgetType: 'default',
          widget: {
            id: '671e3ed5fbe60a002a9f364b', title: 'Anggaran Stunting',
            styleOptions: customStyle3,
            titleWrapperClass: 'bg-cyan-100',
            widgetContentWrapperClass: 'bg-cyan-50',
            titleStyle: { paddingTop: '1rem', paddingBottom: '1rem' },
            //  widgetContentWrapperStyle: { paddingTop: '0.5rem' },
            iconWrapperClass: 'bg-cyan-100',
            // icon: <FcNightPortrait className='text-4xl' />
          },
        },

        {
          colSpan: 3,
          widgetType: 'default',
          widget: {
            id: '671e404efbe60a002a9f364f', title: 'Persentase Anggaran Stunting',
            styleOptions: customStyle3,
            titleWrapperClass: 'bg-cyan-100',
            widgetContentWrapperClass: 'bg-cyan-50',
            titleStyle: { paddingTop: '1rem', paddingBottom: '1rem' },
            iconWrapperClass: 'bg-cyan-200',
          },
        },
        {
          colSpan: 6,
          widgetType: 'default',
          widget: {
            id: '671e4148fbe60a002a9f365a', title: 'Anggaran Stunting Berdasarkan Bidang Urusan Pemerintah',
            styleOptions: customStyle6,
            titleWrapperClass: 'bg-lime-200',
            widgetContentWrapperClass: 'bg-lime-100',
            iconWrapperClass: 'bg-lime-200',
            // icon: <FcPaid className='text-4xl' />
          },
        },

        {
          colSpan: 6,
          widgetType: 'default',
          widget: {
            id: '671e414efbe60a002a9f365c', title: 'Anggaran Stunting Berdasarkan SPM Bidang Pemerintah', styleOptions: customStyle6,
            titleWrapperClass: 'bg-cyan-200',
            widgetContentWrapperClass: 'bg-cyan-100',
            iconWrapperClass: 'bg-cyan-200',
            // icon: <FcConferenceCall className='text-4xl' />
          },
        },
        {
          colSpan: 3,
          widgetType: 'default',
          widget: {
            id: '671e42e0fbe60a002a9f366f', title: 'Keluarga Sasaran',
            styleOptions: customStyle1,
            titleWrapperClass: 'bg-emerald-100',
            widgetContentWrapperClass: 'bg-emerald-50',
            titleStyle: { paddingTop: '1rem', paddingBottom: '1rem' },
            iconWrapperClass: 'bg-emerald-100',
            // widgetContentWrapperStyle: { paddingTop: '1.10rem' },
            // icon: <FcConferenceCall className='text-4xl' />
          },
        },
        {
          colSpan: 3,
          widgetType: 'default',
          widget: {
            id: '671e432bfbe60a002a9f3671', title: 'Keluarga Beresiko Stunting',
            styleOptions: customStyle1,
            titleWrapperClass: 'bg-emerald-100',
            widgetContentWrapperClass: 'bg-emerald-50',
            // widgetContentWrapperStyle: { paddingTop: '1.10rem' },
            titleStyle: { paddingTop: '1rem', paddingBottom: '1rem' },
            iconWrapperClass: 'bg-emerald-100',
          }
        },
        {
          colSpan: 3,
          widgetType: 'default',
          widget: {
            id: '671e43cefbe60a002a9f3677', title: 'Total Pasangan Usia Subur (PUS) Hamil',
            styleOptions: customStyle1,
            titleWrapperClass: 'bg-red-100',
            widgetContentWrapperClass: 'bg-red-50',
            iconWrapperClass: 'bg-red-100',
            titleStyle: { paddingTop: '1rem', paddingBottom: '1rem' },
            // icon: <IoSadOutline className='text-4xl' />
          }
        },
        {
          colSpan: 3,
          widgetType: 'default',
          widget: {
            id: '671e43b7fbe60a002a9f3675', title: 'Peserta Non KB Modern',
            styleOptions: customStyle1,
            titleWrapperClass: 'bg-red-100',
            titleStyle: { paddingTop: '1rem', paddingBottom: '1rem' },
            widgetContentWrapperClass: 'bg-red-50',
            // widgetContentWrapperStyle: { paddingTop: '1.2rem' },
            iconWrapperClass: 'bg-red-100',
          }
        },
        {
          colSpan: 3,
          widgetType: 'default',
          widget: {
            id: '671e44abfbe60a002a9f3683', title: 'Keluarga Beresiko dan Tidak Beresiko Stunting',
            styleOptions: customStyle4,
            titleWrapperClass: 'bg-emerald-100',
            widgetContentWrapperClass: 'bg-emerald-50',
            widgetContentWrapperStyle: { paddingTop: '0.72rem' },
            iconWrapperClass: 'bg-emerald-100',
            // icon: <RiPercentLine className='text-4xl' />};
          },
        },
        {
          colSpan: 3,
          widgetType: 'default',
          widget: {
            id: '671e44a5fbe60a002a9f3681', title: 'Persentase Keluarga Sasaran Pada Total Keluarga',
            styleOptions: customStyle4,
            titleWrapperClass: 'bg-emerald-100',
            widgetContentWrapperClass: 'bg-emerald-50',
            widgetContentWrapperStyle: { paddingTop: '0.72rem' },
            iconWrapperClass: 'bg-emerald-100',
          }
        },
        {
          colSpan: 3,
          widgetType: 'default',
          widget: {
            id: '671e4908fbe60a002a9f36a7', title: 'Fasilitas Kesehatan Tidak Layak',
            styleOptions: customStyle4,
            titleWrapperClass: 'bg-red-100',
            titleStyle: { paddingTop: '1rem', paddingBottom: '1rem' },
            widgetContentWrapperClass: 'bg-red-50',
            widgetContentWrapperStyle: { paddingTop: '0.5rem' },
            iconWrapperClass: 'bg-red-100',
            // icon: <FcDislike className='text-4xl' />},
          },
        },
        {
          colSpan: 3,
          widgetType: 'default',
          widget: {
            id: '671e48a2fbe60a002a9f36a5', title: 'Keluarga Sasaran Menurut Usia Anak',
            styleOptions: customStyle4,
            titleWrapperClass: 'bg-red-100',
            titleStyle: { paddingTop: '1rem', paddingBottom: '1rem' },
            widgetContentWrapperClass: 'bg-red-50',
            widgetContentWrapperStyle: { paddingTop: '0.5rem' },
            iconWrapperClass: 'bg-red-100',
            // icon: <FaChildren className='text-4xl' />},
          },
        },
        {
          colSpan: 4,
          widgetType: 'default',
          widget: {
            id: '671e480dfbe60a002a9f369f', title: 'Tingkat Kesejahteraan Keluarga Sasaran',
            styleOptions: customStyle7,
            titleWrapperClass: 'bg-indigo-200',
            widgetContentWrapperClass: 'bg-indigo-50',
            widgetContentWrapperStyle: { paddingTop: '0.72rem' },
            titleStyle: { paddingTop: '0.95rem', paddingBottom: '0.95rem' },
            iconWrapperClass: 'bg-indigo-200',
            // icon: <FcBullish className='text-4xl' />
          },
        },

        {
          colSpan: 4,
          widgetType: 'default',
          widget: {
            id: '671e459dfbe60a002a9f368b', title: 'Keluarga Sasaran Berdasarkan Wilayah',
            styleOptions: customStyle7,
            titleWrapperClass: 'bg-indigo-200',
            widgetContentWrapperClass: 'bg-indigo-50',
            widgetContentWrapperStyle: { paddingTop: '0.72rem' },
            titleStyle: { paddingTop: '0.95rem', paddingBottom: '0.95rem' },
            iconWrapperClass: 'bg-indigo-200',
            // icon: <ImMap className='text-4xl' />
          },
        },
        {
          colSpan: 4,
          widgetType: 'default',
          widget: {
            id: '671e4592fbe60a002a9f3687', title: 'Keluarga Beresiko dan Tidak Beresiko Stunting Per Wilayah',
            styleOptions: customStyle7,
            titleWrapperClass: 'bg-indigo-200',
            widgetContentWrapperClass: 'bg-indigo-50',
            widgetContentWrapperStyle: { paddingTop: '0.72rem' },
            titleStyle: { paddingTop: '0.95rem', paddingBottom: '0.95rem' },
            iconWrapperClass: 'bg-indigo-200',
            // icon: <MdFamilyRestroom className='text-4xl' />
          },
        },
      ]
    },
  ];

  return (
    <div className="multi-dashboard-container">
      {dashboards.map((dashboard, idx) => (
        <DashboardGridComponent key={idx} dashboard={dashboard} />
      ))}
    </div>
  );
};

export default bkkbn;
