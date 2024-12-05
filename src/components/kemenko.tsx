import React from 'react';

import { IDashboard } from './_models';
import { FcBusinessman, FcBusinesswoman, FcCustomerSupport, FcMoneyTransfer, FcReadingEbook } from "react-icons/fc";

import { customStyle1, customStyle2, customStyle5, customStyle6, customStyle9 } from './_SisenseWidgetStyleOptions';
import DashboardGridComponent from './DashboardGridComponent';
import { RiEmotionSadLine } from 'react-icons/ri';
import { LiaMoneyBillWaveSolid } from 'react-icons/lia';
import { BiMaleFemale } from 'react-icons/bi';
import { MdOutlineElderly } from 'react-icons/md';




const Kemenko: React.FC = () => {

  const dashboards: IDashboard[] = [
    {
      id: '6719fa05fbe60a002a9f30d5',
      name: 'KEMISKINAN EKSTREM',
      widgets: [
        {
          colSpan: 4,
          widgetType: 'default',
          widget: {
            id: '671a0439fbe60a002a9f30e1', title: 'Total Kemiskinan Ekstrem',
            styleOptions: customStyle2,
            titleWrapperClass: 'bg-sky-200',
            widgetContentWrapperClass: 'bg-sky-100',
            // widgetContentWrapperStyle: { paddingTop: '0.2rem' },
            iconWrapperClass: 'bg-sky-200',
            // icon: <RiEmotionSadLine className='text-4xl' />
          },
        },
        {
          colSpan: 4,
          widgetType: 'default',
          widget: {
            id: '671a0cc9fbe60a002a9f30e4', title: 'Anggaran Kemiskinan Ekstrem',
            styleOptions: customStyle2,
            titleWrapperClass: 'bg-sky-100',
            widgetContentWrapperClass: 'bg-sky-50',
            // widgetContentWrapperStyle: { paddingTop: '0.2rem' },
            iconWrapperClass: 'bg-sky-100',
            // icon: <FcMoneyTransfer className='text-4xl' />
          },
        },
        {
          colSpan: 4,
          widgetType: 'default',
          widget: {
            id: '671a1066fbe60a002a9f30ec', title: 'Anggaran SPM Kemiskinan Ekstrem',
            styleOptions: customStyle2,
            titleWrapperClass: 'bg-cyan-100',
            widgetContentWrapperClass: 'bg-cyan-50',
            // widgetContentWrapperStyle: { paddingTop: '0.2rem' },
            iconWrapperClass: 'bg-cyan-100',
            // icon: <LiaMoneyBillWaveSolid className='text-4xl' />
          },
        },
        {
          colSpan: 4,
          widgetType: 'default',
          widget: {
            id: '671a13bdfbe60a002a9f30fc', title: 'Anggaran Nasional Kemiskinan Ekstrem',
            styleOptions: customStyle6,
            titleWrapperClass: 'bg-sky-200',
            widgetContentWrapperClass: 'bg-sky-100',
            titleStyle: { paddingTop: '1rem', paddingBottom: '1rem' },
            iconWrapperClass: 'bg-sky-300',
          },
        },
        {
          colSpan: 4,
          widgetType: 'default',
          widget: {
            id: '671a1be2fbe60a002a9f3110', title: 'Anggaran Kemiskinan Ekstrem Urusan Bidang',
            styleOptions: customStyle6,
            titleWrapperClass: 'bg-sky-100',
            widgetContentWrapperClass: 'bg-sky-50',
            titleStyle: { paddingTop: '0.3rem', paddingBottom: '1rem' },
            iconWrapperClass: 'bg-sky-200',
          },

        },
        {

          colSpan: 4,
          widgetType: 'default',
          widget: {
            id: '671a0fc9fbe60a002a9f30e8', title: 'Anggaran Kemiskinan Ekstrem SPM Bidang',
            styleOptions: customStyle6,
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
            id: '671a22a1fbe60a002a9f313f', title: 'Kemiskinan Ekstrem Individu dan Keluarga',
            styleOptions: customStyle6,
            titleWrapperClass: 'bg-blue-200',
            widgetContentWrapperClass: 'bg-blue-100',
            widgetContentWrapperStyle: { paddingTop: '0.4rem' },
            iconWrapperClass: 'bg-blue-200',
            // icon: <FcMoneyTransfer className='text-4xl' />
          },
        },

        {
          colSpan: 6,
          widgetType: 'default',
          widget: {
            id: '671a2658fbe60a002a9f3145', title: 'Kemiskinan Ekstrem Individu dan Keluarga Berdasarkan Daerah',
            styleOptions: customStyle6,
            titleWrapperClass: 'bg-blue-200',
            widgetContentWrapperClass: 'bg-blue-100',
            // titleStyle: { paddingTop: '0.7rem', paddingBottom: '0.7rem' },
            widgetContentWrapperStyle: { paddingTop: '0.4rem' },
            iconWrapperClass: 'bg-blue-300',
          },
        },
        {
          colSpan: 12,
          widgetType: 'default',
          widget: {
            id: '671a1e66fbe60a002a9f3124', title: 'Anggaran Giat Kemiskinan Ekstrem',
            styleOptions: customStyle9,
            titleWrapperClass: 'bg-sky-100',
            widgetContentWrapperClass: 'bg-sky-50',
            widgetContentWrapperStyle: { paddingTop: '3.1rem' },
            iconWrapperClass: 'bg-sky-200',
          },
        },
        {

          colSpan: 6,
          widgetType: 'default',
          widget: {
            id: '671a297cfbe60a002a9f316d', title: 'Desil 1 | Kelompok 10% Terendah',
            styleOptions: customStyle6,
            titleWrapperClass: 'bg-indigo-100',
            widgetContentWrapperClass: 'bg-indigo-50',
            // widgetContentWrapperStyle: { paddingTop: '1.9rem' },
            iconWrapperClass: 'bg-indigo-200',
          },
        },
        {

          colSpan: 6,
          widgetType: 'default',
          widget: {
            id: '671a298afbe60a002a9f3171', title: 'Desil 2 | Kelompok 10 - 20% Terendah',
            styleOptions: customStyle6,
            titleWrapperClass: 'bg-indigo-100',
            widgetContentWrapperClass: 'bg-indigo-50',
            // widgetContentWrapperStyle: { paddingTop: '1.9rem' },
            iconWrapperClass: 'bg-indigo-200',
          },
        },
        {

          colSpan: 6,
          widgetType: 'default',
          widget: {
            id: '671a2985fbe60a002a9f316f', title: 'Desil 3 | Kelompok 20 - 30% Terendah',
            styleOptions: customStyle6,
            titleWrapperClass: 'bg-indigo-100',
            widgetContentWrapperClass: 'bg-indigo-50',
            // widgetContentWrapperStyle: { paddingTop: '1.9rem' },
            iconWrapperClass: 'bg-indigo-200',
          },
        },
        {
          colSpan: 6,
          widgetType: 'default',
          widget: {
            id: '671a28f9fbe60a002a9f3161', title: 'Desil 4 | Kelompok 30 - 40% Terendah',
            styleOptions: customStyle6,
            titleWrapperClass: 'bg-indigo-100',
            widgetContentWrapperClass: 'bg-indigo-50',
            // widgetContentWrapperStyle: { paddingTop: '1.9rem' },
            iconWrapperClass: 'bg-indigo-200',
          },
        },

        {
          colSpan: 4,
          widgetType: 'default',
          widget: {
            id: '671b19bbfbe60a002a9f3231', title: 'Total Kepala Keluarga Perempuan',
            styleOptions: customStyle1,
            titleWrapperClass: 'bg-violet-100',
            widgetContentWrapperClass: 'bg-violet-50',
            // widgetContentWrapperStyle: { paddingTop: '1.9rem' },
            iconWrapperClass: 'bg-violet-100',
            // icon: <FcBusinesswoman className='text-4xl' />
          },
        },
        {
          colSpan: 4,
          widgetType: 'default',
          widget: {
            id: '671b2437fbe60a002a9f323e', title: 'Kepala Keluarga yang Bekerja',
            styleOptions: customStyle1,
            titleWrapperClass: 'bg-violet-200',
            widgetContentWrapperClass: 'bg-violet-100',
            // widgetContentWrapperStyle: { paddingTop: '1.9rem' },
            iconWrapperClass: 'bg-violet-200',
            // icon: <FcReadingEbook className='text-4xl' />
          }
        },
        {
          colSpan: 4,
          widgetType: 'default',
          widget: {
            id: '671b23e8fbe60a002a9f323c', title: 'Individu yang Bekerja',
            styleOptions: customStyle1,
            titleWrapperClass: 'bg-fuchsia-100',
            widgetContentWrapperClass: 'bg-fuchsia-50',
            // widgetContentWrapperStyle: { paddingTop: '1.9rem' },
            iconWrapperClass: 'bg-fuchsia-100',
            // icon: <FcCustomerSupport className='text-4xl' />
          },
        },
        {
          colSpan: 4,
          widgetType: 'default',
          widget: {
            id: '671b22f3fbe60a002a9f3233', title: 'Usia Keluarga Perempuan',
            styleOptions: customStyle6,
            titleWrapperClass: 'bg-violet-100',
            widgetContentWrapperClass: 'bg-violet-50',
            // widgetContentWrapperStyle: { paddingTop: '1.9rem' },
            iconWrapperClass: 'bg-violet-200',
          },
        },
        //
        {
          colSpan: 4,
          widgetType: 'default',
          widget: {
            id: '671b2596fbe60a002a9f324e', title: 'Total Pekerja dan Tidak Bekerja',
            styleOptions: customStyle6,
            titleWrapperClass: 'bg-violet-200',
            widgetContentWrapperClass: 'bg-violet-100',
            // widgetContentWrapperStyle: { paddingTop: '1.9rem' },
            iconWrapperClass: 'bg-violet-300',
          },
        },
        {
          colSpan: 4,
          widgetType: 'default',
          widget: {
            id: '671b269ffbe60a002a9f3255', title: 'Kelompok Pekerjaan',
            styleOptions: customStyle6,
            titleWrapperClass: 'bg-fuchsia-100',
            widgetContentWrapperClass: 'bg-fuchsia-50',
            iconWrapperClass: 'bg-fuchsia-200',
          },
        },
        {
          colSpan: 4,
          widgetType: 'default',
          widget: {
            id: '671b61d6fbe60a002a9f32d2', title: 'Fasilitas Sanitasi',
            styleOptions: customStyle2,
            titleWrapperClass: 'bg-violet-100',
            widgetContentWrapperClass: 'bg-violet-50',
            // widgetContentWrapperStyle: { paddingTop: '1.9rem' },
            iconWrapperClass: 'bg-violet-200',
          },
        },

        {
          colSpan: 4,
          widgetType: 'default',
          widget: {
            id: '671b4343fbe60a002a9f32af', title: 'Usia Pekerja',
            styleOptions: customStyle2,
            titleWrapperClass: 'bg-violet-200',
            widgetContentWrapperClass: 'bg-violet-100',
            // widgetContentWrapperStyle: { paddingTop: '1.9rem' },
            iconWrapperClass: 'bg-violet-300',
          },
        },
        {
          colSpan: 4,
          widgetType: 'default',
          widget: {
            id: '671b4387fbe60a002a9f32b9', title: 'Usia Tidak Pekerja',
            styleOptions: customStyle2,
            titleWrapperClass: 'bg-fuchsia-100',
            widgetContentWrapperClass: 'bg-fuchsia-50',
            // widgetContentWrapperStyle: { paddingTop: '1.9rem' },
            iconWrapperClass: 'bg-fuchsia-200',
          },
        },
        {
          colSpan: 6,
          widgetType: 'default',
          widget: {
            id: '671b2d1ffbe60a002a9f3260', title: 'Kelompok Pekerjaan Kepala Keluarga',
            styleOptions: customStyle2,
            titleWrapperClass: 'bg-violet-200',
            widgetContentWrapperClass: 'bg-violet-100',
            // widgetContentWrapperStyle: { paddingTop: '1.9rem' },
            iconWrapperClass: 'bg-violet-300',
          },
        },
        {
          colSpan: 6,
          widgetType: 'default',
          widget: {
            id: '671b2fbefbe60a002a9f326c', title: 'Kelompok Pekerjaan Individu',
            styleOptions: customStyle2,
            titleWrapperClass: 'bg-fuchsia-100',
            widgetContentWrapperClass: 'bg-fuchsia-50',
            // widgetContentWrapperStyle: { paddingTop: '1.9rem' },
            iconWrapperClass: 'bg-fuchsia-200',
          },
        },
        {
          colSpan: 6,
          widgetType: 'default',
          widget: {
            id: '671b6404fbe60a002a9f32de', title: 'Status Kepemilikan Rumah',
            styleOptions: customStyle5,
            titleWrapperClass: 'bg-pink-100',
            widgetContentWrapperClass: 'bg-pink-50',
            // widgetContentWrapperStyle: { paddingTop: '1.9rem' },
            iconWrapperClass: 'bg-pink-200',
          },
        },
        {
          colSpan: 6,
          widgetType: 'default',
          widget: {
            id: '671b654cfbe60a002a9f32f5', title: 'Penggunaan Listrik Rumah Tangga Per Watt',
            styleOptions: customStyle5,
            titleWrapperClass: 'bg-pink-100',
            widgetContentWrapperClass: 'bg-pink-50',
            // widgetContentWrapperStyle: { paddingTop: '1.9rem' },
            iconWrapperClass: 'bg-pink-200',
          },
        },
        {
          colSpan: 6,
          widgetType: 'default',
          widget: {
            id: '671b66a8fbe60a002a9f3305', title: 'Bahan Bakar Memasak',
            styleOptions: customStyle5,
            titleWrapperClass: 'bg-pink-100',
            widgetContentWrapperClass: 'bg-pink-50',
            // widgetContentWrapperStyle: { paddingTop: '1.9rem' },
            iconWrapperClass: 'bg-pink-200',
          },

        },
        {
          colSpan: 6,
          widgetType: 'default',
          widget: {
            id: '671b68c8fbe60a002a9f3315', title: 'Sumber Penerangan Rumah Tangga',
            styleOptions: customStyle5,
            titleWrapperClass: 'bg-pink-100',
            widgetContentWrapperClass: 'bg-pink-50',
            // widgetContentWrapperStyle: { paddingTop: '1.9rem' },
            iconWrapperClass: 'bg-pink-200',
          },
        },

        {
          colSpan: 6,
          widgetType: 'default',
          widget: {
            id: '671b7d23fbe60a002a9f332d', title: 'Populasi Perempuan',
            styleOptions: customStyle1,
            titleWrapperClass: 'bg-pink-200',
            widgetContentWrapperClass: 'bg-pink-100',
            // widgetContentWrapperStyle: { paddingTop: '1.9rem' },
            iconWrapperClass: 'bg-pink-200',
            // icon: <FcBusinesswoman className='text-4xl' />
          },
        },
        {
          colSpan: 6,
          widgetType: 'default',
          widget: {
            id: '671b7da3fbe60a002a9f332f', title: 'Populasi Laki - Laki',
            styleOptions: customStyle1,
            titleWrapperClass: 'bg-teal-200',
            widgetContentWrapperClass: 'bg-teal-100',
            // widgetContentWrapperStyle: { paddingTop: '1.9rem' },
            iconWrapperClass: 'bg-teal-200',
            // icon: <FcBusinessman className='text-4xl' />
          },
        },
        {
          colSpan: 4,
          widgetType: 'default',
          widget: {
            id: '6729ccd3fbe60a002a9f3a06', title: 'Penduduk Berdasarkan Jenis Kelamin',
            styleOptions: customStyle5,
            titleWrapperClass: 'bg-violet-100',
            widgetContentWrapperClass: 'bg-violet-50',
            // widgetContentWrapperStyle: { paddingTop: '1.9rem' },
            iconWrapperClass: 'bg-violet-100',
            // icon: <BiMaleFemale className='text-4xl' />
          },
        },
        {
          colSpan: 8,
          widgetType: 'butterfly',
          widgetButterfly: {
            title: 'Penduduk Perempuan dan Laki - Laki Berdasarkan Kelompok Umur',
            titleClass: 'text-violet-700',
            chartA: {
              title: 'Penduduk Perempuan',
              styleOptions: customStyle5,
              dashboardId: '671b7309fbe60a002a9f3329',
              id: '671b81f7fbe60a002a9f333d'
            },
            chartB: {
              title: 'Penduduk Laki - Laki',
              styleOptions: customStyle5,
              dashboardId: '671b7309fbe60a002a9f3329',
              id: '6729c359fbe60a002a9f39ea'
            }
          }
        },
        {
          colSpan: 4,
          widgetType: 'default',
          widget: {
            id: '6729cd7dfbe60a002a9f3a0a', 
            title: 'Penduduk Lansia Berdasarkan Jenis Kelamin',
            styleOptions: customStyle5,
            titleWrapperClass: 'bg-violet-100',
            widgetContentWrapperClass: 'bg-violet-50',
            // widgetContentWrapperStyle: { paddingTop: '1.9rem' },
            iconWrapperClass: 'bg-violet-100',
            // icon: <MdOutlineElderly className='text-4xl' />
          },
        },
        {
          colSpan: 8,
          widgetType: 'butterfly',
          widgetButterfly: {
            title: 'Penduduk Lansia Perempuan dan Laki - Laki',
            titleClass: 'text-violet-700',
            chartA: {
              title: 'Penduduk Perempuan',
              styleOptions: customStyle5,
              dashboardId: '671b7309fbe60a002a9f3329',
              id: '6729cbb2fbe60a002a9f3a00'
            },
            chartB: {
              title: 'Penduduk Laki - Laki',
              styleOptions: customStyle5,
              dashboardId: '671b7309fbe60a002a9f3329',
              id: '6729cbdbfbe60a002a9f3a02'
            }
          }
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

export default Kemenko;
