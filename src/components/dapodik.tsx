import React from 'react';

import { IDashboard } from './_models';

import { customStyle1, customStyle3, customStyle4, customStyle5, customStyle6, customStyle9 } from './_SisenseWidgetStyleOptions';
import DashboardGridComponent from './DashboardGridComponent';
import { FcCollaboration, FcDiploma1, FcDisclaimer, FcGraduationCap, FcMoneyTransfer } from 'react-icons/fc';



const dapodik: React.FC = () => {

  const dashboards: IDashboard[] = [
    {
      id: '671e1878fbe60a002a9f356f',
      name: 'ANGGARAN PENDIDIKAN',
      widgets: [
        {
          colSpan: 3,
          widgetType: 'default',
          widget: {
            id: '671e19cbfbe60a002a9f3575', title: 'Anggaran Urusan Pendidikan',
            styleOptions: customStyle3,
            titleWrapperClass: 'bg-blue-100',
            widgetContentWrapperClass: 'bg-blue-50', widgetContentWrapperStyle: { paddingTop: '0rem' },
            iconWrapperClass: 'bg-blue-100',
            icon: <FcMoneyTransfer className='text-4xl' />
          },
        },
        {
          colSpan: 3,
          widgetType: 'default',
          widget: {
            id: '671e1db7fbe60a002a9f359a', title: 'Anggaran Bidang Pendidikan dan Bidang Lainnya',
            styleOptions: customStyle3,
            titleWrapperClass: 'bg-blue-100',
            widgetContentWrapperClass: 'bg-blue-50', widgetContentWrapperStyle: { paddingTop: '0rem' },
            iconWrapperClass: 'bg-blue-200',
          },
        },
        {
          colSpan: 3,
          widgetType: 'default',
          widget: {
            id: '671e1bd7fbe60a002a9f3586', title: 'Anggaran SPM Pendidikan',
            styleOptions: customStyle3,
            titleWrapperClass: 'bg-sky-100',
            widgetContentWrapperClass: 'bg-sky-50', widgetContentWrapperStyle: { paddingTop: '0.3rem' },
            iconWrapperClass: 'bg-sky-100',
            icon: <FcGraduationCap className='text-4xl' />
          },
        },
        {
          colSpan: 3,
          widgetType: 'default',
          widget: {
            id: '671e1dbefbe60a002a9f359c', title: 'Anggaran SPM Pendidikan dan Anggaran SPM Bidang Lainnya',
            styleOptions: customStyle3,
            titleWrapperClass: 'bg-sky-100',
            widgetContentWrapperClass: 'bg-sky-50', widgetContentWrapperStyle: { paddingTop: '0rem' },
            iconWrapperClass: 'bg-sky-100',
            // icon: <FcGraduationCap className='text-4xl' />
          },
        },
        {
          colSpan: 6,
          widgetType: 'default',
          widget: {
            id: '671e1fb2fbe60a002a9f35b8', title: 'Alokasi Anggaran Urusan Pendidikan Per Daerah',
            styleOptions: customStyle5,
            titleWrapperClass: 'bg-blue-100',
            widgetContentWrapperClass: 'bg-blue-50', widgetContentWrapperStyle: { paddingTop: '2rem' },
            iconWrapperClass: 'bg-blue-200',
          },
        },


        {
          colSpan: 6,
          widgetType: 'default',
          widget: {
            id: '671e2015fbe60a002a9f35be', title: 'Alokasi Anggaran SPM Pendidikan Per Daerah',
            styleOptions: customStyle5,
            titleWrapperClass: 'bg-sky-100',
            widgetContentWrapperClass: 'bg-sky-50', widgetContentWrapperStyle: { paddingTop: '2rem' },
            iconWrapperClass: 'bg-sky-200',
          },
        },

        {
          colSpan: 12,
          widgetType: 'default',
          widget: {
            id: '671e1f2dfbe60a002a9f35af', title: 'Alokasi Anggaran Kegiatan Urusan Pendidikan',
            styleOptions: customStyle9,
            titleWrapperClass: 'bg-sky-100',
            widgetContentWrapperClass: 'bg-sky-50',
            widgetContentWrapperStyle: { paddingTop: '3.1rem' },
            iconWrapperClass: 'bg-sky-200',
          },
        },
      ]
    },
    {
      id: '671dfda0fbe60a002a9f34bf',
      name: 'STATUS PENDIDIKAN ANAK',
      widgets: [
        {
          colSpan: 4,
          widgetType: 'default',
          widget: {
            id: '671e0074fbe60a002a9f34ce', title: 'Jumlah Siswa',
            styleOptions: customStyle1,
            titleWrapperClass: 'bg-stone-200',
            widgetContentWrapperClass: 'bg-stone-100',
            widgetContentWrapperStyle: { paddingTop: '0.5rem' },
            iconWrapperClass: 'bg-stone-200',
            icon: <FcCollaboration className='text-4xl' />
          },
        },
        {
          colSpan: 2,
          widgetType: 'default',
          widget: {
            id: '671e03ebfbe60a002a9f34f0', title: 'Jumlah Siswa SD',
            styleOptions: customStyle1,
            titleWrapperClass: 'bg-stone-200',
            titleStyle: { paddingTop: '0.6rem', paddingBottom: '0.6rem' },
            widgetContentWrapperClass: 'bg-stone-100',
            widgetContentWrapperStyle: { paddingTop: '0.7rem' },
            iconWrapperClass: 'bg-stone-300',
          },
        },
        {
          colSpan: 2,
          widgetType: 'default',
          widget: {
            id: '671e043cfbe60a002a9f34f7', title: 'Jumlah Siswa SMP',
            styleOptions: customStyle1,
            titleWrapperClass: 'bg-stone-200',
            widgetContentWrapperClass: 'bg-stone-100',
            titleStyle: { paddingTop: '0.6rem', paddingBottom: '0.6rem' },
            widgetContentWrapperStyle: { paddingTop: '0.7rem' },
            iconWrapperClass: 'bg-stone-300',
          },
        },
        {
          colSpan: 2,
          widgetType: 'default',
          widget: {
            id: '671e043ffbe60a002a9f34f9', title: 'Jumlah Siswa SMK',
            styleOptions: customStyle1,
            titleWrapperClass: 'bg-stone-200',
            widgetContentWrapperClass: 'bg-stone-100',
            widgetContentWrapperStyle: { paddingTop: '0.7rem' },
            titleStyle: { paddingTop: '0.6rem', paddingBottom: '0.6rem' },
            iconWrapperClass: 'bg-stone-300',
          },
        },
        {
          colSpan: 2,
          widgetType: 'default',
          widget: {
            id: '671e0430fbe60a002a9f34f5', title: 'Jumlah Siswa SMA',
            styleOptions: customStyle1,
            titleWrapperClass: 'bg-stone-200',
            widgetContentWrapperClass: 'bg-stone-100',
            widgetContentWrapperStyle: { paddingTop: '0.7rem' },
            titleStyle: { paddingTop: '0.6rem', paddingBottom: '0.6rem' },
            iconWrapperClass: 'bg-stone-300',
          },
        },
        {
          colSpan: 6,
          widgetType: 'default',
          widget: {
            id: '671e2579fbe60a002a9f35e2', title: 'Persentase Anak Bersekolah dan Tidak Bersekolah',
            styleOptions: customStyle6,
            titleWrapperClass: 'bg-zinc-200',
            widgetContentWrapperClass: 'bg-zinc-100',
            widgetContentWrapperStyle: { paddingTop: '0rem' },
            iconWrapperClass: 'bg-zinc-200',
            icon: <FcGraduationCap className='text-4xl' />
          },
        },
        {
          colSpan: 6,
          widgetType: 'default',
          widget: {
            id: '671e0b21fbe60a002a9f3531', title: 'Anak Bersekolah Berdasarkan Tingkat Pendidikan',
            styleOptions: customStyle6,
            titleWrapperClass: 'bg-zinc-200',
            widgetContentWrapperClass: 'bg-zinc-100',
            widgetContentWrapperStyle: { paddingTop: '0rem' },
            titleStyle: { paddingTop: '0.7rem', paddingBottom: '0.7rem' },
            iconWrapperClass: 'bg-zinc-200',
            icon: <FcGraduationCap className='text-4xl' />

          },
        },
        {
          colSpan: 6,
          widgetType: 'default',
          widget: {
            id: '671e0f65fbe60a002a9f355b', title: 'Anak Tidak Bersekolah Karena Drop Out',
            styleOptions: customStyle6,
            titleWrapperClass: 'bg-stone-200',
            widgetContentWrapperClass: 'bg-stone-100',
            widgetContentWrapperStyle: { paddingTop: '0.5rem' },
            iconWrapperClass: 'bg-stone-200',
            // icon: <FcGraduationCap className='text-4xl' />
            icon: <FcDisclaimer className='text-4xl' />
          },
        },
        {
          colSpan: 6,
          widgetType: 'default',
          widget: {
            id: '671e0c6bfbe60a002a9f3543', title: 'Anak TIdak Bersekolah Berdasarkan Tingkat Pendidikan',
            styleOptions: customStyle6,
            titleWrapperClass: 'bg-stone-200',
            widgetContentWrapperClass: 'bg-stone-100',
            widgetContentWrapperStyle: { paddingTop: '0.5rem' },
            titleStyle: { paddingTop: '0.7rem', paddingBottom: '0.7rem' },
            iconWrapperClass: 'bg-stone-200',
            icon: <FcDisclaimer className='text-4xl' />

          },
        },
        {
          colSpan: 6,
          widgetType: 'default',
          widget: {
            id: '671e07d8fbe60a002a9f351a', title: 'Siswa Berdasarkan Tingkat Putus Sekolah',
            styleOptions: customStyle6,
            titleWrapperClass: 'bg-zinc-200',
            widgetContentWrapperClass: 'bg-zinc-100',
            widgetContentWrapperStyle: { paddingTop: '0.5rem' },
            iconWrapperClass: 'bg-zinc-200',
            icon: <FcDiploma1 className='text-4xl' />
          },
        },
        {
          colSpan: 6,
          widgetType: 'default',
          widget: {
            id: '671e11fffbe60a002a9f3560', title: 'Anak Tidak Sekolah Karena Belum Pernah Bersekolah (Usia)', styleOptions: customStyle5,
            titleWrapperClass: 'bg-zinc-200',
            widgetContentWrapperClass: 'bg-zinc-100',
            titleStyle: { paddingTop: '0.7rem', paddingBottom: '0.7rem' },
            widgetContentWrapperStyle: { paddingTop: '3.5rem' },
            iconWrapperClass: 'bg-z-300',
            icon: <FcDiploma1 className='text-4xl' />

          },
        },
        {
          colSpan: 4,
          widgetType: 'default',
          widget: {
            id: '671e226cfbe60a002a9f35cf', title: 'Drop Out Siswa SD Berdasarkan Kelas',
            styleOptions: customStyle4,
            titleWrapperClass: 'bg-stone-200',
            widgetContentWrapperClass: 'bg-stone-100',
            widgetContentWrapperStyle: { paddingTop: '0.5rem' },
            iconWrapperClass: 'bg-stone-200',
            
          },
        },

        {
          colSpan: 4,
          widgetType: 'default',
          widget: { id: '671e22a3fbe60a002a9f35d1', title: 'Drop Out Siswa SMP Berdasarkan Kelas',
            styleOptions: customStyle4,
            titleWrapperClass: 'bg-stone-200',
            widgetContentWrapperClass: 'bg-stone-100',
            widgetContentWrapperStyle: { paddingTop: '0.5rem' },
            iconWrapperClass: 'bg-stone-200',},
        },
        {
          colSpan: 4,
          widgetType: 'default',
          widget: {id: '671e2415fbe60a002a9f35dc', title: 'Drop Out Siswa SMA/SMK Berdasarkan Kelas',
            styleOptions: customStyle4,
            titleWrapperClass: 'bg-stone-200',
            widgetContentWrapperClass: 'bg-stone-100',
            widgetContentWrapperStyle: { paddingTop: '0.5rem' },
            iconWrapperClass: 'bg-stone-200',},
        }
      ]
    },


    {
      id: '672d8dbefbe60a002a9f3bae',
      name: 'PENDIDIKAN',
      widgets: [
        {
          colSpan: 3,
          widgetType: 'default',
          widget: {
            id: '672dc126fbe60a002a9f3c29', title: 'Jumlah Siswa Bersekolah',
            styleOptions: customStyle1,
            titleWrapperClass: 'bg-stone-200',
            widgetContentWrapperClass: 'bg-stone-100',
            widgetContentWrapperStyle: { paddingTop: '0.5rem' },
            iconWrapperClass: 'bg-stone-200',
            icon: <FcCollaboration className='text-4xl' />
          },
        },
        {
          colSpan: 3,
          widgetType: 'default',
          widget: {
            id: '672dc12dfbe60a002a9f3c2d', title: 'Siswa SD Bersekolah',
            styleOptions: customStyle1,
            titleWrapperClass: 'bg-stone-200',
            titleStyle: { paddingTop: '0.6rem', paddingBottom: '0.6rem' },
            widgetContentWrapperClass: 'bg-stone-100',
            widgetContentWrapperStyle: { paddingTop: '0.7rem' },
            iconWrapperClass: 'bg-stone-300',
          },
        },
        {
          colSpan: 3,
          widgetType: 'default',
          widget: {
            id: '672dc12afbe60a002a9f3c2b', title: 'Siswa SMP Bersekolah',
            styleOptions: customStyle1,
            titleWrapperClass: 'bg-stone-200',
            widgetContentWrapperClass: 'bg-stone-100',
            titleStyle: { paddingTop: '0.6rem', paddingBottom: '0.6rem' },
            widgetContentWrapperStyle: { paddingTop: '0.7rem' },
            iconWrapperClass: 'bg-stone-300',
          },
        },
        {
          colSpan: 3,
          widgetType: 'default',
          widget: {
            id: '672dc131fbe60a002a9f3c2f', title: 'Siswa SMA/SMK Bersekolah',
            styleOptions: customStyle1,
            titleWrapperClass: 'bg-stone-200',
            widgetContentWrapperClass: 'bg-stone-100',
            widgetContentWrapperStyle: { paddingTop: '0.7rem' },
            titleStyle: { paddingTop: '0.6rem', paddingBottom: '0.6rem' },
            iconWrapperClass: 'bg-stone-300',
          },
        },
        {
          colSpan: 4,
          widgetType: 'default',
          widget: {
            id: '672dc38afbe60a002a9f3c47', title: 'Siswa Bersekolah dan Tidak Bersekolah',
            styleOptions: customStyle5,
            titleWrapperClass: 'bg-stone-200',
            widgetContentWrapperClass: 'bg-stone-100',
            widgetContentWrapperStyle: { paddingTop: '0.7rem' },
            titleStyle: { paddingTop: '0.6rem', paddingBottom: '0.6rem' },
            iconWrapperClass: 'bg-stone-300',
          },
        },
        {
          colSpan: 8,
          widgetType: 'default',
          widget: {
            id: '672dddf2fbe60a002a9f3c74', title: 'Anak Sekolah dan Tidak Sekolah',
            styleOptions: customStyle5,
            titleWrapperClass: 'bg-stone-200',
            widgetContentWrapperClass: 'bg-stone-100',
            widgetContentWrapperStyle: { paddingTop: '0.7rem' },
            titleStyle: { paddingTop: '0.6rem', paddingBottom: '0.6rem' },
            iconWrapperClass: 'bg-stone-300',
          },
        },
        {
          colSpan: 4,
          widgetType: 'default',
          widget: {
            id: '672dcd95fbe60a002a9f3c6a', title: 'Perbandingan Anak Bersekolah Berdasarkan Tingkat Pendidikan',
            styleOptions: customStyle5,
            titleWrapperClass: 'bg-stone-200',
            widgetContentWrapperClass: 'bg-stone-100',
            widgetContentWrapperStyle: { paddingTop: '0.7rem' },
            titleStyle: { paddingTop: '0.6rem', paddingBottom: '0.6rem' },
            iconWrapperClass: 'bg-stone-300',
          },
        },
        {
          colSpan: 8,
          widgetType: 'default',
          widget: {
            id: '672dcb40fbe60a002a9f3c56', title: 'Anak Bersekolah Berdasarkan Tingkat Pendidikan',
            styleOptions: customStyle5,
            titleWrapperClass: 'bg-stone-200',
            widgetContentWrapperClass: 'bg-stone-100',
            widgetContentWrapperStyle: { paddingTop: '0.7rem' },
            titleStyle: { paddingTop: '1.5rem', paddingBottom: '1.5rem' },
            iconWrapperClass: 'bg-stone-300',
          },
        },
        {
          colSpan: 4,
          widgetType: 'default',
          widget: {
            id: '672dddd6fbe60a002a9f3c72', title: 'Anak Tidak Bersekolah Berdasarkan Tingkat Pendidikan',
            styleOptions: customStyle5,
            titleWrapperClass: 'bg-stone-200',
            widgetContentWrapperClass: 'bg-stone-100',
            widgetContentWrapperStyle: { paddingTop: '0.7rem' },
            titleStyle: { paddingTop: '0.6rem', paddingBottom: '0.6rem' },
            iconWrapperClass: 'bg-stone-300',
          },
        },
        {
          colSpan: 8,
          widgetType: 'default',
          widget: {
            id: '672ddf2afbe60a002a9f3c7a', title: 'Anak Tidak Bersekolah Bersekolah Berdasarkan Tingkat Pendidikan',
            styleOptions: customStyle5,
            titleWrapperClass: 'bg-stone-200',
            widgetContentWrapperClass: 'bg-stone-100',
            widgetContentWrapperStyle: { paddingTop: '0.7rem' },
            titleStyle: { paddingTop: '1.5rem', paddingBottom: '1.5rem' },
            iconWrapperClass: 'bg-stone-300',
          },
        },
        {
          colSpan: 4,
          widgetType: 'default',
          widget: {
            id: '672de186fbe60a002a9f3c89', title: 'Anak Tidak Sekolah Karena Drop Out Tingkat SD',
            styleOptions: customStyle5,
            titleWrapperClass: 'bg-stone-200',
            widgetContentWrapperClass: 'bg-stone-100',
            widgetContentWrapperStyle: { paddingTop: '0.7rem' },
            titleStyle: { paddingTop: '1.5rem', paddingBottom: '1.5rem' },
            iconWrapperClass: 'bg-stone-300',
          },
        },
        {
          colSpan: 4,
          widgetType: 'default',
          widget: {
            id: '672de18bfbe60a002a9f3c8b', title: 'Anak Tidak Sekolah Karena Drop Out Tingkat SMP',
            styleOptions: customStyle5,
            titleWrapperClass: 'bg-stone-200',
            widgetContentWrapperClass: 'bg-stone-100',
            widgetContentWrapperStyle: { paddingTop: '0.7rem' },
            titleStyle: { paddingTop: '1.5rem', paddingBottom: '1.5rem' },
            iconWrapperClass: 'bg-stone-300',
          },
        },
        {
          colSpan: 4,
          widgetType: 'default',
          widget: {
            id: '672de18efbe60a002a9f3c8d', title: 'Anak Tidak Sekolah Karena Drop Out Tingkat SMA/SMK',
            styleOptions: customStyle5,
            titleWrapperClass: 'bg-stone-200',
            widgetContentWrapperClass: 'bg-stone-100',
            widgetContentWrapperStyle: { paddingTop: '0.7rem' },
            titleStyle: { paddingTop: '0.5rem', paddingBottom: '0.5rem' },
            iconWrapperClass: 'bg-stone-300',
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

export default dapodik;
