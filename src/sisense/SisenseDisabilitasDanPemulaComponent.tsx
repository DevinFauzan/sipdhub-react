import React, { useContext, useEffect, useState } from 'react';
import { IDashboard, IFilterState } from './_models';
import { customStyle1, customStyle11, customStyle2, customStyle3, customStyle4, customStyle5, customStyle6, customStyle8, customStyle9 } from './_SisenseWidgetStyleOptions';
import DashboardGridComponent from './DashboardGridComponent';
import { FcCollaboration, FcDiploma1, FcDisclaimer, FcGraduationCap, FcMoneyTransfer } from 'react-icons/fc';
import { FilterContext } from '../public-profile/profiles/company copy';
import { DPTPemulaDisabilitas, WebPageFilterID } from './_datamodels';

const SisenseDisabilitasDanPemulaComponent: React.FC = () => {
  const { filterProvinsi, filterKabupaten } = useContext(FilterContext);

  const [selectedFilters, setSelectedFilters] = useState<IFilterState[]>([]);

  const dashboards: IDashboard[] = [
    {
      id: '67311a6bfbe60a002a9f3d58',
      name: 'Pemula dan Disabilitas',
      widgets: [
        // baris 1
        {
          colSpan: 6,
          widgetType: 'default',
          widget: {
            id: '6733023ffbe60a002a9f3e62', 
            title: 'Pemilih Pemula',
            styleOptions: customStyle1,
            titleWrapperClass: 'bg-zinc-300',
            widgetContentWrapperClass: 'bg-zinc-200', 
            widgetContentWrapperStyle: { paddingTop: '0rem' },
            iconWrapperClass: 'bg-blue-100',
            titleStyle: { paddingTop: '0.1rem', paddingBottom: '0.1rem' },
            // icon: <FcMoneyTransfer className='text-4xl' />
          },
        },
        {
          colSpan: 6,
          widgetType: 'default',
          widget: {
            id: '67330400fbe60a002a9f3e68', 
            title: 'Rekam',
            styleOptions: customStyle1,
            titleWrapperClass: 'bg-zinc-300',
            widgetContentWrapperClass: 'bg-zinc-200', widgetContentWrapperStyle: { paddingTop: '0rem' },
            iconWrapperClass: 'bg-blue-100',
            titleStyle: { paddingTop: '0.1rem', paddingBottom: '0.1rem' },
            // icon: <FcMoneyTransfer className='text-4xl' />
          },
        },
        {
          colSpan: 6,
          widgetType: 'default',
          widget: {
            id: '67330430fbe60a002a9f3e6c', 
            title: 'Belum Rekam',
            styleOptions: customStyle1,
            titleWrapperClass: 'bg-zinc-300',
            widgetContentWrapperClass: 'bg-zinc-200', widgetContentWrapperStyle: { paddingTop: '0rem' },
            iconWrapperClass: 'bg-blue-100',
            titleStyle: { paddingTop: '0.1rem', paddingBottom: '0.1rem' },
            // icon: <FcMoneyTransfer className='text-4xl' />
          },
        },
        {
          colSpan: 6,
          widgetType: 'default',
          widget: {
            id: '673307e5fbe60a002a9f3e9f', 
            title: 'Pemilih Disabilitas',
            styleOptions: customStyle1,
            titleWrapperClass: 'bg-stone-200',
            titleStyle: { paddingTop: '0.1rem', paddingBottom: '0.1rem' },
            widgetContentWrapperClass: 'bg-stone-100', widgetContentWrapperStyle: { paddingTop: '0rem' },
            iconWrapperClass: 'bg-blue-100',
            // icon: <FcMoneyTransfer className='text-4xl' />
          },
        },
        {
          colSpan: 6,
          widgetType: 'default',
          widget: {
            id: '67330820fbe60a002a9f3ea3', 
            title: 'Rekam',
            styleOptions: customStyle1,
            titleWrapperClass: 'bg-stone-200',
            widgetContentWrapperClass: 'bg-stone-100', widgetContentWrapperStyle: { paddingTop: '0rem' },
            iconWrapperClass: 'bg-blue-100',
            titleStyle: { paddingTop: '0.1rem', paddingBottom: '0.1rem' },
            // icon: <FcMoneyTransfer className='text-4xl' />
          },
        },
        {
          colSpan: 6,
          widgetType: 'default',
          widget: {
            id: '6733083afbe60a002a9f3ea7', 
            title: 'Belum Rekam',
            styleOptions: customStyle1,
            titleWrapperClass: 'bg-stone-200',
            titleStyle: { paddingTop: '0.1rem', paddingBottom: '0.1rem' },
            widgetContentWrapperClass: 'bg-stone-100', widgetContentWrapperStyle: { paddingTop: '0rem' },
            iconWrapperClass: 'bg-blue-100',
            // icon: <FcMoneyTransfer className='text-4xl' />
          },
        },

        // baris 2
        {
          colSpan: 6,
          widgetType: 'default',
          widget: {
            id: '67311da7fbe60a002a9f3d60', 
            title: '% Perekaman',
            styleOptions: customStyle5,
            titleWrapperClass: 'bg-zinc-300',
            titleStyle: { paddingTop: '0.1rem', paddingBottom: '0.1rem' },
            widgetContentWrapperClass: 'bg-zinc-200', widgetContentWrapperStyle: { paddingTop: '0rem' },
            iconWrapperClass: 'bg-blue-200',
            // icon: <FcMoneyTransfer className='text-4xl' />
          },
        },
        {
          colSpan: 6,
          widgetType: 'default',
          widget: {
            id: '673304f1fbe60a002a9f3e7a', 
            title: 'Rekaman',
            styleOptions: customStyle5,
            titleWrapperClass: 'bg-zinc-300',
            titleStyle: { paddingTop: '0.1rem', paddingBottom: '0.1rem' },
            widgetContentWrapperClass: 'bg-zinc-200', widgetContentWrapperStyle: { paddingTop: '0rem' },
            iconWrapperClass: 'bg-blue-200',
            // icon: <FcMoneyTransfer className='text-4xl' />
          },
        },
        {
          colSpan: 6,
          widgetType: 'default',
          widget: {
            id: '6733049dfbe60a002a9f3e76', 
            title: 'Belum Rekam',
            styleOptions: customStyle5,
            titleWrapperClass: 'bg-zinc-300',
            widgetContentWrapperClass: 'bg-zinc-200', widgetContentWrapperStyle: { paddingTop: '0rem' },
            iconWrapperClass: 'bg-blue-100',
            titleStyle: { paddingTop: '0.1rem', paddingBottom: '0.1rem' },
            // icon: <FcMoneyTransfer className='text-4xl' />
          },
        },
        {
          colSpan: 6,
          widgetType: 'default',
          widget: {
            id: '67311f4cfbe60a002a9f3d6e', 
            title: '% Perekaman',
            styleOptions: customStyle5,
            titleWrapperClass: 'bg-stone-200',
            widgetContentWrapperClass: 'bg-stone-100', widgetContentWrapperStyle: { paddingTop: '0rem' },
            iconWrapperClass: 'bg-blue-100',
            titleStyle: { paddingTop: '0.1rem', paddingBottom: '0.1rem' },
            // icon: <FcMoneyTransfer className='text-4xl' />
          },
        },
        {
          colSpan: 6,
          widgetType: 'default',
          widget: {
            id: '67330773fbe60a002a9f3e9b', 
            title: 'Perekaman',
            styleOptions: customStyle5,
            titleWrapperClass: 'bg-stone-200',
            widgetContentWrapperClass: 'bg-stone-100', widgetContentWrapperStyle: { paddingTop: '0rem' },
            iconWrapperClass: 'bg-blue-100',
            titleStyle: { paddingTop: '0.1rem', paddingBottom: '0.1rem' },
            // icon: <FcMoneyTransfer className='text-4xl' />
          },
        },
        {
          colSpan: 6,
          widgetType: 'default',
          widget: {
            id: '67330702fbe60a002a9f3e92', 
            title: 'Belum Rekam',
            styleOptions: customStyle5,
            titleWrapperClass: 'bg-stone-200',
            widgetContentWrapperClass: 'bg-stone-100', widgetContentWrapperStyle: { paddingTop: '0rem' },
            iconWrapperClass: 'bg-blue-100',
            titleStyle: { paddingTop: '0.1rem', paddingBottom: '0.1rem' },
            // icon: <FcMoneyTransfer className='text-4xl' />
          },
        },
        // baris 3
        {
          colSpan: 4,
          widgetType: 'default',
          widget: {
            id: '67311ba4fbe60a002a9f3d5c', 
            title: 'Jumlah DPT Pemula',
            styleOptions: customStyle11,
            titleWrapperClass: 'bg-zinc-300',
            widgetContentWrapperClass: 'bg-zinc-200', widgetContentWrapperStyle: { paddingTop: '0rem' },
            iconWrapperClass: 'bg-blue-100',
            titleStyle: { paddingTop: '0.1rem', paddingBottom: '0.1rem' },
            // icon: <FcMoneyTransfer className='text-4xl' />
          },
          filterable: true,
          tiangDewa: true,
          tiangDewaColor: '#E4E4E7'
        },
        {
          colSpan: 4,
          widgetType: 'default',
          widget: {
            id: '673120eefbe60a002a9f3d7a', 
            title: 'Jumlah DPT Disabilitas',
            styleOptions: customStyle11,
            titleWrapperClass: 'bg-stone-200',
            widgetContentWrapperClass: 'bg-stone-100', widgetContentWrapperStyle: { paddingTop: '0rem' },
            iconWrapperClass: 'bg-blue-100',
            titleStyle: { paddingTop: '0.1rem', paddingBottom: '0.1rem' },
            // icon: <FcMoneyTransfer className='text-4xl' />
          },
          filterable: true,
          tiangDewa: true,
          tiangDewaColor: '#F5F5F4'
        },
      ]
    },
  ];

  useEffect(() => {
    // If the filter is triggered from Sisense's side, we just return to prevent double processing of filter
    const newFilter: Array<IFilterState> = [];
    if (filterProvinsi?.value) {
      newFilter.push({
        widgetId: WebPageFilterID,
        categoryValue: filterProvinsi.value,
        attribute: DPTPemulaDisabilitas.NO_PROV,
        value: filterProvinsi.value
      })
    }

    setSelectedFilters(newFilter)
  }, [filterProvinsi, filterKabupaten])

  return (
    <div className="multi-dashboard-container">
      {dashboards.map(dashboard => (
        <DashboardGridComponent key={dashboard.id} dashboard={dashboard} webpageFilters={selectedFilters} />
      ))}
    </div>
  );
};

export default SisenseDisabilitasDanPemulaComponent;
