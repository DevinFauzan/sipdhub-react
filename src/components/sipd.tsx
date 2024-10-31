import React from 'react';

import { IDashboard } from './_models';

import { customStyle1, customStyle2, customStyle5, customStyle6, customStyle9 } from './_SisenseWidgetStyleOptions';
import DashboardGridComponent from './DashboardGridComponent';

import { FcShop,FcMoneyTransfer } from 'react-icons/fc';


const sipd: React.FC = () => {
  

  const dashboards: IDashboard[] = [
    {
      id: '671de99ffbe60a002a9f3465',
      name: 'ALOKASI ANGGARAN NASIONAL',
      widgets: [
        { id: '671dea45fbe60a002a9f3467', title: 'Belanja Nasional',
          colSpan: 3, styleOptions: customStyle1,
          titleWrapperClass: 'bg-lime-100',
          widgetContentWrapperClass: 'bg-lime-50',
          widgetContentWrapperStyle: { paddingTop: '1.6rem' },
          iconWrapperClass: 'bg-lime-200',
          icon: <FcShop className='text-4xl' />
        },
        { id: '671deb04fbe60a002a9f346c', title: 'Belanja Urusan dan SPM Bidang',
          colSpan: 3, styleOptions: customStyle1,
          titleWrapperClass: 'bg-lime-100',
          widgetContentWrapperClass: 'bg-lime-50',
          widgetContentWrapperStyle: { paddingTop: '1.2rem' },
          iconWrapperClass: 'bg-lime-200',
          icon: <FcShop className='text-4xl' />
        },
        { id: '671e27c3fbe60a002a9f360a', title: 'Anggaran Stunting',
          colSpan: 3, styleOptions: customStyle1,
          titleWrapperClass: 'bg-sky-100',
          widgetContentWrapperClass: 'bg-sky-50',
          widgetContentWrapperStyle: { paddingTop: '1.6rem' },
          iconWrapperClass: 'bg-sky-200',
          icon: <FcMoneyTransfer className='text-4xl' />
        },
        { id: '671e27d9fbe60a002a9f360c', title: 'Anggaran Kemiskinan Ekstrem', 
          colSpan: 3, styleOptions: customStyle1,
          titleWrapperClass: 'bg-sky-100',
          widgetContentWrapperClass: 'bg-sky-50',
          widgetContentWrapperStyle: { paddingTop: '1.2rem' },
          iconWrapperClass: 'bg-sky-200',
          icon: <FcMoneyTransfer className='text-4xl' />
        },


        { id: '671dec83fbe60a002a9f3473', title: 'Belanja Nasional Berdasarkan SPM Bidang',
          colSpan: 3, styleOptions: customStyle6,
          titleWrapperClass: 'bg-lime-100',
          widgetContentWrapperClass: 'bg-lime-50',
          widgetContentWrapperStyle: { paddingTop: '3.1rem' },
          iconWrapperClass: 'bg-lime-200',
          icon: <FcShop className='text-4xl' />
        },
        { id: '671e28ddfbe60a002a9f3616', colSpan: 3, title: 'Distribusi Penanganan Stunting dan Kemiskinan Ekstrem Nasional',
           styleOptions: customStyle6,
          titleWrapperClass: 'bg-sky-100',
          widgetContentWrapperClass: 'bg-sky-50',
          widgetContentWrapperStyle: { paddingTop: '1.2rem' },
          iconWrapperClass: 'bg-sky-200',
          icon: <FcMoneyTransfer className='text-4xl' />
        },
        { id: '671e2a3cfbe60a002a9f3623', title: 'Penanganan Stunting dan Kemiskinan Ekstrem Berdasarkan SPM Bidang Pemerintah',
          colSpan: 6, styleOptions: customStyle6,
          titleWrapperClass: 'bg-sky-100',
          widgetContentWrapperClass: 'bg-sky-50',
          widgetContentWrapperStyle: { paddingTop: '3.1rem' },
          iconWrapperClass: 'bg-sky-200',
          icon: <FcMoneyTransfer className='text-4xl' />
        },
        

        { id: '671dee08fbe60a002a9f347c',  title: 'Belanja Nasional Berdasarkan Urusan Bidang Pemerintah',
          colSpan: 6, styleOptions: customStyle6,
          titleWrapperClass: 'bg-lime-100',
          widgetContentWrapperClass: 'bg-lime-50',
          widgetContentWrapperStyle: { paddingTop: '3.1rem' },
          iconWrapperClass: 'bg-lime-200',
          icon: <FcShop className='text-4xl' />
        },
        { id: '671e28fbfbe60a002a9f3618',  title: 'Penanganan Stunting dan Kemiskinan Ekstrem Berdasarkan Urusan Bidang Pemerintah', 
          colSpan: 6, styleOptions: customStyle6,
          titleWrapperClass: 'bg-sky-100',
          widgetContentWrapperClass: 'bg-sky-50',
          widgetContentWrapperStyle: { paddingTop: '3.1rem' },
          iconWrapperClass: 'bg-sky-200',
          icon: <FcMoneyTransfer className='text-4xl' />
        },

        { id: '671df7c3fbe60a002a9f3496', title: 'Alokasi Belanja Stunting dan Kemiskinan Ekstrem',
          colSpan:12, styleOptions: customStyle9,
          titleWrapperClass: 'bg-sky-100',
          widgetContentWrapperClass: 'bg-sky-50',
          widgetContentWrapperStyle: { paddingTop: '3.1rem' },
          iconWrapperClass: 'bg-sky-200',
          icon: <FcMoneyTransfer className='text-4xl' />
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
