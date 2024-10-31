import React from 'react';

import { IDashboard } from './_models';
import { FcGraduationCap, FcMoneyTransfer } from "react-icons/fc";

import { customStyle1, customStyle2, customStyle5, customStyle6, customStyle3 } from './_SisenseWidgetStyleOptions';
import DashboardGridComponent from './DashboardGridComponent';




const Kemenko: React.FC = () => {
  const dashboards: IDashboard[] = [
    {
      id: '6719fa05fbe60a002a9f30d5',
      name: 'KEMISKINAN EKSTREM',
      widgets: [
        {
          id: '671a0cc9fbe60a002a9f30e4', title: 'Anggaran Kemiskinan Ekstrem',
          colSpan: 3, styleOptions: customStyle2,
          titleWrapperClass: 'bg-sky-100',
          widgetContentWrapperClass: 'bg-sky-50',
          widgetContentWrapperStyle: { paddingTop: '2rem' },
          iconWrapperClass: 'bg-sky-200',
          icon: <FcMoneyTransfer className='text-4xl' />
        },
        {
          id: '671a1066fbe60a002a9f30ec', title: 'Anggaran SPM Kemiskinan Ekstrem',
          colSpan: 3, styleOptions: customStyle2,
          titleWrapperClass: 'bg-sky-100',
          widgetContentWrapperClass: 'bg-sky-50',
          widgetContentWrapperStyle: { paddingTop: '2rem' },
          iconWrapperClass: 'bg-sky-200',
          icon: <FcMoneyTransfer className='text-4xl' /> 
        },
        {
          id: '671a0439fbe60a002a9f30e1', title: 'Total Kemiskinan Ekstrem',
          colSpan: 3, styleOptions: customStyle2,
          titleWrapperClass: 'bg-sky-100',
          widgetContentWrapperClass: 'bg-sky-50',
          widgetContentWrapperStyle: { paddingTop: '2.4rem' },
          iconWrapperClass: 'bg-sky-200',
          icon: <FcMoneyTransfer className='text-4xl' /> 
        },
        { id: '671a13bdfbe60a002a9f30fc', title: 'Anggaran Nasional Kemiskinan Ekstrem',
          colSpan: 3, styleOptions: customStyle2,
          titleWrapperClass: 'bg-sky-100',
          widgetContentWrapperClass: 'bg-sky-50',
          widgetContentWrapperStyle: { paddingTop: '2rem' },
          iconWrapperClass: 'bg-sky-200',
          icon: <FcMoneyTransfer className='text-4xl' /> 
        },

        { id: '671a1be2fbe60a002a9f3110', colSpan: 4, styleOptions: customStyle6, title: 'Anggaran Kemiskinan Ekstrem Urusan Bidang' },
        { id: '671a0fc9fbe60a002a9f30e8', colSpan: 4, styleOptions: customStyle6, title: 'Anggaran Kemiskinan Ekstrem SPM Bidang' },
        { id: '671a22a1fbe60a002a9f313f', colSpan: 4, styleOptions: customStyle6, title: 'Kemiskinan Ekstrem Individu dan Keluarga' },

        { id: '671a2658fbe60a002a9f3145', colSpan: 6, styleOptions: customStyle6, title: 'Kemiskinan Ekstrem Individu dan Keluarga Berdasarkan Daerah' },
        { id: '671a1e66fbe60a002a9f3124', colSpan: 6, styleOptions: customStyle6, title: 'Anggaran Giat Kemiskinan Ekstrem' },

        { id: '671a297cfbe60a002a9f316d', colSpan: 6, styleOptions: customStyle6, title: 'Desil 1 | Kelompok 10% Terendah' },
        { id: '671a298afbe60a002a9f3171', colSpan: 6, styleOptions: customStyle6, title: 'Desil 2 | Kelompok 10 - 20% Terendah' },
        { id: '671a2985fbe60a002a9f316f', colSpan: 6, styleOptions: customStyle6, title: 'Desil 3 | Kelompok 20 - 30% Terendah' },
        { id: '671a28f9fbe60a002a9f3161', colSpan: 6, styleOptions: customStyle6, title: 'Desil 4 | Kelompok 30 - 40% Terendah' },
      ]
    },

    {
      id: '671b1998fbe60a002a9f322f',
      name: 'PEKERJAAN DAN FASILITAS RUMAH TANGGA',
      widgets: [
        { id: '671b19bbfbe60a002a9f3231', colSpan: 3, styleOptions: customStyle1, title: 'Total Kepala Keluarga Perempuan' },
        { id: '671b2437fbe60a002a9f323e', colSpan: 3, styleOptions: customStyle1, title: 'Kepala Keluarga yang Bekerja' },
        { id: '671b23e8fbe60a002a9f323c', colSpan: 3, styleOptions: customStyle1, title: 'Individu yang Bekerja' },
        { id: '671b22f3fbe60a002a9f3233', colSpan: 3, styleOptions: customStyle1, title: 'Usia Keluarga Perempuan' },

        { id: '671b2596fbe60a002a9f324e', colSpan: 4, styleOptions: customStyle6, title: 'Total Pekerja dan Tidak Bekerja' },
        { id: '671b269ffbe60a002a9f3255', colSpan: 4, styleOptions: customStyle6, title: 'Kelompok Pekerjaan' },

        { id: '671b61d6fbe60a002a9f32d2', colSpan: 4, styleOptions: customStyle6, title: 'Fasilitas Sanitasi' },

        { id: '671b4343fbe60a002a9f32af', colSpan: 6, styleOptions: customStyle1, title: 'Usia Pekerja' },
        { id: '671b4387fbe60a002a9f32b9', colSpan: 6, styleOptions: customStyle1, title: 'Usia Tidak Pekerja' },

        { id: '671b2fbefbe60a002a9f326c', colSpan: 6, styleOptions: customStyle1, title: 'Kelompok Pekerjaan Individu' },
        { id: '671b2d1ffbe60a002a9f3260', colSpan: 6, styleOptions: customStyle1, title: 'Kelompok Pekerjaan Kepala Keluarga' },

        { id: '671b6404fbe60a002a9f32de', colSpan: 6, styleOptions: customStyle5, title: 'Status Kepemilkan Rumah' },
        { id: '671b654cfbe60a002a9f32f5', colSpan: 6, styleOptions: customStyle5, title: 'Penggunaan Listrik Rumah Tangga Per Watt' },
        { id: '671b66a8fbe60a002a9f3305', colSpan: 6, styleOptions: customStyle5, title: 'Bahan Bakar Memasak' },
        { id: '671b68c8fbe60a002a9f3315', colSpan: 6, styleOptions: customStyle5, title: 'Sumber Penerangan Rumah Tangga' },
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

export default Kemenko;
