import React from 'react';

import { IDashboard } from './_models';

import { customStyle1, customStyle2, customStyle3, customStyle4, customStyle5, customStyle6, customStyle9 } from './_SisenseWidgetStyleOptions';
import DashboardGridComponent from './DashboardGridComponent';
import { FcCamcorderPro, FcGraduationCap } from 'react-icons/fc';



const dapodik: React.FC = () => {
 
  const dashboards: IDashboard[] = [
    {
      id: '671e1878fbe60a002a9f356f',
      name: 'ANGGARAN PENDIDIKAN',
      widgets: [
        { id: '671e19cbfbe60a002a9f3575', title: 'Anggaran Urusan Pendidikan' ,
          colSpan: 3, styleOptions: customStyle3,
          titleWrapperClass: 'bg-blue-100',
          widgetContentWrapperClass: 'bg-blue-50', widgetContentWrapperStyle: { paddingTop: '0rem' },
          iconWrapperClass: 'bg-blue-200',
          icon: <FcGraduationCap className='text-4xl' />
        },
        { id: '671e1db7fbe60a002a9f359a', title: 'Anggaran Bidang Pendidikan dan Bidang Lainnya',
          colSpan: 3, styleOptions: customStyle3,
          titleWrapperClass: 'bg-blue-100',
          widgetContentWrapperClass: 'bg-blue-50', widgetContentWrapperStyle: { paddingTop: '0rem' },
          iconWrapperClass: 'bg-blue-200',
          // icon: <FcGraduationCap className='text-4xl' />
        },
        
        { id: '671e1bd7fbe60a002a9f3586', title: 'Anggaran SPM Pendidikan',
          colSpan: 3, styleOptions: customStyle3,
          titleWrapperClass: 'bg-sky-100',
          widgetContentWrapperClass: 'bg-sky-50', widgetContentWrapperStyle: { paddingTop: '0.3rem' },
          iconWrapperClass: 'bg-sky-200',
          icon: <FcGraduationCap className='text-4xl' />
        },
       
        { id: '671e1dbefbe60a002a9f359c',  title: 'Anggaran SPM Pendidikan dan SPM Lainnya',
          colSpan: 3, styleOptions: customStyle3,
          titleWrapperClass: 'bg-sky-100',
          widgetContentWrapperClass: 'bg-sky-50', widgetContentWrapperStyle: { paddingTop: '0rem' },
          iconWrapperClass: 'bg-sky-200',
          // icon: <FcGraduationCap className='text-4xl' />
        },


        { id: '671e1fb2fbe60a002a9f35b8', title: 'Alokasi Anggaran Urusan Pendidikan Per Daerah',
          colSpan: 6, styleOptions: customStyle5,
          titleWrapperClass: 'bg-blue-100',
          widgetContentWrapperClass: 'bg-blue-50', widgetContentWrapperStyle: { paddingTop: '2rem' },
          iconWrapperClass: 'bg-blue-200',
          // icon: <FcGraduationCap className='text-4xl' />
        },
        
        { id: '671e2015fbe60a002a9f35be',  title: 'Alokasi Anggaran SPM Pendidikan Per Daerah',
          colSpan: 6, styleOptions: customStyle5,
          titleWrapperClass: 'bg-sky-100',
          widgetContentWrapperClass: 'bg-sky-50', widgetContentWrapperStyle: { paddingTop: '2rem' },
          iconWrapperClass: 'bg-sky-200',
          // icon: <FcGraduationCap className='text-4xl' />
        },

        { id: '671e1f2dfbe60a002a9f35af', title: 'Alokasi Anggaran Kegiatan Urusan Pendidikan',
          colSpan:12, styleOptions: customStyle9,
          titleWrapperClass: 'bg-sky-100',
          widgetContentWrapperClass: 'bg-sky-50',
          widgetContentWrapperStyle: { paddingTop: '3.1rem' },
          iconWrapperClass: 'bg-sky-200',
          // icon: <FcMoneyTransfer className='text-4xl' />
        },
      ]
    },
    {
      id: '671dfda0fbe60a002a9f34bf',
      name: 'STATUS PENDIDIKAN ANAK',
      widgets: [
        { id: '671e0074fbe60a002a9f34ce',  title: 'Jumlah Siswa', 
          colSpan: 4, styleOptions: customStyle1,
          titleWrapperClass: 'bg-stone-200',
          widgetContentWrapperClass: 'bg-stone-100',
          widgetContentWrapperStyle: { paddingTop: '0.5rem' },
          iconWrapperClass: 'bg-stone-300',
          icon: <FcGraduationCap className='text-4xl' />
        },
        { id: '671e03ebfbe60a002a9f34f0', title: 'Jumlah Siswa SD', 
          colSpan: 2, styleOptions: customStyle1,
          titleWrapperClass: 'bg-stone-200',
          widgetContentWrapperClass: 'bg-stone-100',
          widgetContentWrapperStyle: { paddingTop: '2rem' },
          iconWrapperClass: 'bg-stone-300',
          // icon: <FcGraduationCap className='text-4xl' />
        },
        { id: '671e043cfbe60a002a9f34f7', title: 'Jumlah Siswa SMP',
          colSpan: 2, styleOptions: customStyle1,
          titleWrapperClass: 'bg-stone-200',
          widgetContentWrapperClass: 'bg-stone-100',
          widgetContentWrapperStyle: { paddingTop: '2rem' },
          iconWrapperClass: 'bg-stone-300',
          // icon: <FcGraduationCap className='text-4xl' />
        },
        { id: '671e043ffbe60a002a9f34f9', title: 'Jumlah Siswa SMK',
          colSpan: 2, styleOptions: customStyle1,
          titleWrapperClass: 'bg-stone-200',
          widgetContentWrapperClass: 'bg-stone-100',
           widgetContentWrapperStyle: { paddingTop: '2rem' },
          iconWrapperClass: 'bg-stone-300',
          // icon: <FcGraduationCap className='text-4xl' />
        },
        { id: '671e0430fbe60a002a9f34f5',  title: 'Jumlah Siswa SMA',
          colSpan: 2, styleOptions: customStyle1,
          titleWrapperClass: 'bg-stone-200',
          widgetContentWrapperClass: 'bg-stone-100',
           widgetContentWrapperStyle: { paddingTop: '2rem' },
          iconWrapperClass: 'bg-stone-300',
          // icon: <FcGraduationCap className='text-4xl' />
        },


        { id: '671e2579fbe60a002a9f35e2',  title: 'Persentase Anak Bersekolah dan Tidak Bersekolah',
          colSpan: 4, styleOptions: customStyle6,
          titleWrapperClass: 'bg-zinc-200',
          widgetContentWrapperClass: 'bg-zinc-100',
           widgetContentWrapperStyle: { paddingTop: '0rem' },
          iconWrapperClass: 'bg-zinc-200',
          icon: <FcGraduationCap className='text-4xl' />
        },
        { id: '671e0b21fbe60a002a9f3531',  title: 'Anak Bersekolah Berdasarkan Tingkat Pendidikan',
          colSpan: 4, styleOptions: customStyle6,
          titleWrapperClass: 'bg-zinc-200',
          widgetContentWrapperClass: 'bg-zinc-100',
           widgetContentWrapperStyle: { paddingTop: '2rem' },
          iconWrapperClass: 'bg-zinc-200',
          // icon: <FcGraduationCap className='text-4xl' />
        },
        { id: '671e07d8fbe60a002a9f351a',  title: 'Siswa Berdasarkan Tingkat Putus Sekolah',
          colSpan: 4, styleOptions: customStyle6,
          titleWrapperClass: 'bg-zinc-200',
          widgetContentWrapperClass: 'bg-zinc-100',
           widgetContentWrapperStyle: { paddingTop: '2rem' },
          iconWrapperClass: 'bg-zinc-200',
          // icon: <FcGraduationCap className='text-4xl' />
        },



        { id: '671e11fffbe60a002a9f3560', title: 'Anak Tidak Sekolah Karena Belum Pernah Bersekolah (Usia)' ,
          colSpan: 4, styleOptions: customStyle5,
          titleWrapperClass: 'bg-stone-200',
          widgetContentWrapperClass: 'bg-stone-100',
           widgetContentWrapperStyle: { paddingTop: '0.8rem' },
          iconWrapperClass: 'bg-stone-300',
          icon: <FcGraduationCap className='text-4xl' />
        },
        { id: '671e0f65fbe60a002a9f355b',  title: 'Anak Tidak Bersekolah Karena Drop Out',
          colSpan: 4, styleOptions: customStyle5,
          titleWrapperClass: 'bg-stone-200',
          widgetContentWrapperClass: 'bg-stone-100',
          widgetContentWrapperStyle: { paddingTop: '2.5rem' },
          iconWrapperClass: 'bg-stone-300',
          // icon: <FcGraduationCap className='text-4xl' />
        },
        { id: '671e0c6bfbe60a002a9f3543', title: 'Anak TIdak Bersekolah Berdasarkan Tingkat Pendidikan',
          colSpan: 4, styleOptions: customStyle5,
          titleWrapperClass: 'bg-stone-200',
          widgetContentWrapperClass: 'bg-stone-100',
          widgetContentWrapperStyle: { paddingTop: '0.8rem' },
          iconWrapperClass: 'bg-stone-300',
          // icon: <FcGraduationCap className='text-4xl' />
        },


        { id: '671e226cfbe60a002a9f35cf', title: 'Drop Out Siswa SD Berdasarkan Kelas' ,
          colSpan: 4, styleOptions: customStyle4,
          titleWrapperClass: 'bg-zinc-200',
          widgetContentWrapperClass: 'bg-zinc-100',
           widgetContentWrapperStyle: { paddingTop: '0.5rem' },
          iconWrapperClass: 'bg-zinc-200',
          icon: <FcGraduationCap className='text-4xl' />
        },
        { id: '671e22a3fbe60a002a9f35d1', title: 'Drop Out Siswa SMP Berdasarkan Kelas',
          colSpan: 4, styleOptions: customStyle4,
          titleWrapperClass: 'bg-zinc-200',
          widgetContentWrapperClass: 'bg-zinc-100',
           widgetContentWrapperStyle: { paddingTop: '2rem' },
          iconWrapperClass: 'bg-zinc-200',
          // icon: <FcGraduationCap className='text-4xl' />
        },
        { id: '671e2415fbe60a002a9f35dc', title: 'Drop Out Siswa SMA/SMK Berdasarkan Kelas',
          colSpan: 4, styleOptions: customStyle4,
          titleWrapperClass: 'bg-zinc-200',
          widgetContentWrapperClass: 'bg-zinc-100',
          widgetContentWrapperStyle: { paddingTop: '2rem' },
          iconWrapperClass: 'bg-zinc-200',
          // icon: <FcGraduationCap className='text-4xl' />
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
