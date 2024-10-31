import React from 'react';

import { FaChildren } from "react-icons/fa6";
import { IDashboard } from './_models';
import { FcBullish, FcBusinessman, FcBusinesswoman, FcConferenceCall, FcDislike, FcLike, FcNightPortrait, FcPaid } from "react-icons/fc";

import { customStyle3, customStyle4, customStyle6, customStyle7 } from './_SisenseWidgetStyleOptions';
import DashboardGridComponent from './DashboardGridComponent';
// import { HiOutlineAcademicCap } from "react-icons/hi2";
import {  RiPercentLine } from 'react-icons/ri';
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
          id: '671e3e0efbe60a002a9f3641', title: 'Anggaran Kesehatan',
          colSpan: 3, styleOptions: customStyle3,
          titleWrapperClass: 'bg-lime-100',
          widgetContentWrapperClass: 'bg-lime-50', widgetContentWrapperStyle: { paddingTop: '2.2rem' },
          iconWrapperClass: 'bg-lime-200',
          icon: <FcLike className='text-4xl' />
        },

        {
          id: '671e406ffbe60a002a9f3651', title: 'Persentase Anggaran Stunting Kesehatan Pada Anggaran',
          colSpan: 3, styleOptions: customStyle3,
          titleWrapperClass: 'bg-lime-100',
          widgetContentWrapperClass: 'bg-lime-50',
          iconWrapperClass: 'bg-lime-200',
          icon: <FcLike className='text-4xl' />
        },

        {
          id: '671e3ed5fbe60a002a9f364b', title: 'Anggaran Stunting',
          colSpan: 3, styleOptions: customStyle3,
          titleWrapperClass: 'bg-cyan-100',
          widgetContentWrapperClass: 'bg-cyan-50', widgetContentWrapperStyle: { paddingTop: '2.2rem' },
          iconWrapperClass: 'bg-cyan-200',
          icon: <FcNightPortrait className='text-4xl' />
        },

        {
          id: '671e404efbe60a002a9f364f', title: 'Persentase Anggaran Stunting Pada Anggaran Nasional',
          colSpan: 3, styleOptions: customStyle3,
          titleWrapperClass: 'bg-cyan-100',
          widgetContentWrapperClass: 'bg-cyan-50',
          iconWrapperClass: 'bg-cyan-200',
          icon: <FcNightPortrait className='text-4xl' />
        },

        {
          id: '671e4148fbe60a002a9f365a', title: 'Anggaran Stunting Berdasarkan Bidang Urusan Pemerintah',
          colSpan: 6, styleOptions: customStyle6,
          titleWrapperClass: 'bg-rose-200',
          widgetContentWrapperClass: 'bg-rose-100',
          iconWrapperClass: 'bg-rose-300',
          icon: <FcPaid className='text-4xl' />
        },

        {
          id: '671e414efbe60a002a9f365c', title: 'Anggaran Stunting Berdasarkan SPM Bidang Pemerintah',
          colSpan: 6, styleOptions: customStyle6,
          titleWrapperClass: 'bg-yellow-200',
          widgetContentWrapperClass: 'bg-yellow-100',
          iconWrapperClass: 'bg-yellow-300',
          icon: <FcConferenceCall className='text-4xl' />
        },

      ]
    },

    {
      id: '671e2b69fbe60a002a9f362f',
      name: 'KELUARGA BERESIKO STUNTING',
      widgets: [
        {
          id: '671e42e0fbe60a002a9f366f', title: 'Keluarga Sasaran',
          colSpan: 3, styleOptions: customStyle4,
          titleWrapperClass: 'bg-emerald-200',
          widgetContentWrapperClass: 'bg-emerald-100',
          iconWrapperClass: 'bg-emerald-300',
          widgetContentWrapperStyle: { paddingTop: '1.10rem' },
          icon: <FcConferenceCall className='text-4xl' />
        },
        {
          id: '671e44a5fbe60a002a9f3681', title: 'Persentase Keluarga Sasaran Pada Total Keluarga',
          colSpan: 3, styleOptions: customStyle4,
          titleWrapperClass: 'bg-emerald-200',
          widgetContentWrapperClass: 'bg-emerald-100',
          widgetContentWrapperStyle: { paddingTop: '0.72rem' },
          iconWrapperClass: 'bg-emerald-300',
          icon: <RiPercentLine className='text-4xl' />
        },
        {
          id: '671e432bfbe60a002a9f3671', title: 'Keluarga Beresiko Stunting',
          colSpan: 3, styleOptions: customStyle4,
          titleWrapperClass: 'bg-red-200',
          widgetContentWrapperClass: 'bg-red-100',
          widgetContentWrapperStyle: { paddingTop: '1.10rem' },
          iconWrapperClass: 'bg-red-300',
          icon: <IoSadOutline className='text-4xl' />
        },
        {
          id: '671e44abfbe60a002a9f3683', title: 'Keluarga Beresiko dan Tidak Beresiko Stunting',
          colSpan: 3, styleOptions: customStyle4,
          titleWrapperClass: 'bg-red-200',
          widgetContentWrapperClass: 'bg-red-100',
          widgetContentWrapperStyle: { paddingTop: '0.72rem' },
          iconWrapperClass: 'bg-red-300',
          icon: <RiPercentLine className='text-4xl' />
        },


        { id: '671e43b7fbe60a002a9f3675', title: 'Peserta Non KB Modern',
          colSpan: 3, styleOptions: customStyle4,
          titleWrapperClass: 'bg-emerald-200',
          widgetContentWrapperClass: 'bg-emerald-100',
          widgetContentWrapperStyle: { paddingTop: '0.72rem' },
          iconWrapperClass: 'bg-emerald-300',
          icon: <FcBusinesswoman className='text-4xl' />
        },
        { id: '671e43cefbe60a002a9f3677', title: 'Total Pasangan Usia Subur (PUS) Hamil',
          colSpan: 3, styleOptions: customStyle4,
          titleWrapperClass: 'bg-emerald-200',
          widgetContentWrapperClass: 'bg-emerald-100',
          widgetContentWrapperStyle: { paddingTop: '0.72rem' },
          iconWrapperClass: 'bg-emerald-300',
          icon: <FcBusinessman className='text-4xl' />
        },
        { id: '671e4908fbe60a002a9f36a7', title: 'Fasilitas Kesehatan Tidak Layak',
          colSpan: 3, styleOptions: customStyle4,
          titleWrapperClass: 'bg-red-200',
          widgetContentWrapperClass: 'bg-red-100',
          widgetContentWrapperStyle: { paddingTop: '0.72rem' },
          iconWrapperClass: 'bg-red-300',
          icon: <FcDislike className='text-4xl' />
        },
        { id: '671e48a2fbe60a002a9f36a5',  title: 'Keluarga Sasaran Menurut Usia Anak', 
          colSpan: 3, styleOptions: customStyle4,
          titleWrapperClass: 'bg-red-200',
          widgetContentWrapperClass: 'bg-red-100',
          widgetContentWrapperStyle: { paddingTop: '0.72rem' },
          iconWrapperClass: 'bg-red-300',
          icon: <FaChildren className='text-4xl' />
        },



        { id: '671e480dfbe60a002a9f369f',  title: 'Tingkat Kesejahteraan Keluarga Sasaran',
          colSpan: 4, styleOptions: customStyle7,
          titleWrapperClass: 'bg-indigo-200',
          widgetContentWrapperClass: 'bg-indigo-100',
          widgetContentWrapperStyle: { paddingTop: '0.72rem' },
          iconWrapperClass: 'bg-indigo-300',
          icon: <FcBullish className='text-4xl' />
        },
        { id: '671e459dfbe60a002a9f368b',  title: 'Keluarga Sasaran Berdasarkan Wilayah',
          colSpan: 4, styleOptions: customStyle7,
          titleWrapperClass: 'bg-indigo-200',
          widgetContentWrapperClass: 'bg-indigo-100',
          widgetContentWrapperStyle: { paddingTop: '0.72rem' },
          iconWrapperClass: 'bg-indigo-300',
          icon: <ImMap className='text-4xl' />
        },
        { id: '671e4592fbe60a002a9f3687', title: 'Keluarga Beresiko dan Tidak Beresiko Stunting Per Wilayah',
          colSpan: 4, styleOptions: customStyle7,
          titleWrapperClass: 'bg-indigo-200',
          widgetContentWrapperClass: 'bg-indigo-100',
          widgetContentWrapperStyle: { paddingTop: '0.72rem' },
          iconWrapperClass: 'bg-indigo-300',
          icon: <MdFamilyRestroom className='text-4xl' />
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
