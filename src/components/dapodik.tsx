import React, { useEffect, useState } from 'react';
import { DashboardWidget, DashboardWidgetStyleOptions, DrilldownOptions, Hierarchy, HierarchyId } from '@sisense/sdk-ui';
import { Filter, filterFactory } from '@sisense/sdk-data';

interface FilterState {
  widgetId: string;
  categoryValue: string;
  attribute: any;
  value: any;
}

interface Dashboard {
  id: string;
  name: string;
  widgets: Array<{
    id: string;
    colSpan: number;
    title?: string;
    backgroundColor?: DashboardWidgetStyleOptions;
    styleOptions?: DashboardWidgetStyleOptions;
    filters?: Filter[];
    
    onFilterChange?: (filter: any) => void;
  }>;
}

const DashboardGrid: React.FC<{ dashboard: Dashboard }> = ({ dashboard }) => {
  const [selectedFilters, setSelectedFilters] = useState<FilterState[]>([]);
  const [parsedFilters, setParsedFilters] = useState<Filter[]>([]);

  const handleDataPointsSelected = (widgetId: string) => (dataPoints: any) => {
    if (!dataPoints?.categoryValue) return;

    setSelectedFilters(prevFilters => {
      // Check if this widget's filter is already selected
      const existingFilterIndex = prevFilters.findIndex(
        filter => filter.widgetId === widgetId &&
          filter.categoryValue === dataPoints.categoryValue
      );

      if (existingFilterIndex !== -1) {
        // Remove the filter if it's already selected
        return prevFilters.filter((_, index) => index !== existingFilterIndex);
      } else {
        // Add new filter
        const newFilter: FilterState = {
          widgetId,
          categoryValue: dataPoints.categoryValue,
          attribute: dataPoints.entries.category[0].attribute,
          value: dataPoints.entries.category[0].value
        };
        return [...prevFilters, newFilter];
      }
    });

    console.log('Data points selected:', dataPoints);
  };

  useEffect(() => {
		// Convert selected filters to Sisense filter format
		const newParsedFilters = selectedFilters.map(filter =>
			filterFactory.equals(filter.attribute, filter.value)
		);
		setParsedFilters(newParsedFilters);
	}, [selectedFilters]);

  // Helper function to check if a widget is selected
  const isWidgetSelected = (widgetId: string) => {
    return selectedFilters.some(filter => filter.widgetId === widgetId);
  };

  return (
    <div className="dashboard-grid">
      <h2 className="dashboard-title text-center pb-lg-5"  style={{  fontFamily:'Open Sans, sans-serif' }}>{dashboard.name}</h2>
      <div className="widget-grid">
        {dashboard.widgets.map(widget => (
          <div key={widget.id} className={`widget-container col-${widget.colSpan}`}>
            <div className={'border '} style={{ borderRadius: '0.5rem', color: 'black', boxShadow: '0 0.5rem 0.5rem rgba(0, 0, 0, 0.15)' }}>
              <div className="widget-layer title-layer text-center pt-lg-5">
                <h5 className="widget-title">{widget?.title}
                  <i className="fas fa-filter"></i>
                </h5>
              </div>
              <div className="widget-content" style={{ position: 'relative', overflow: 'hidden' }}>
                <div style={{ marginTop: '-40px' }}>
                  {widget && (
                    <DashboardWidget
                      styleOptions={{
                        
                        ...widget.styleOptions,
                        border: isWidgetSelected(widget.id) ? '2px solid #007bff' : undefined,
                        header: {
                          ...widget.styleOptions?.header,
                          hidden: false,
                          titleAlignment: "Center",
                          backgroundColor: "transparent",
                          titleTextColor: "black",
                          renderToolbar: () => <div></div>
                        }
                      }}
                      title={''}
                      dashboardOid={dashboard.id}
                      widgetOid={widget.id}
                      onDataPointClick={handleDataPointsSelected(widget.id)}
                      filters={parsedFilters}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const sipd: React.FC = () => {
  const customStyle1: DashboardWidgetStyleOptions = {
    backgroundColor: 'transparent',
    cornerRadius: 'Medium',
    height: 200,
    shadow: 'None',
    header: {
      hidden: false,
      titleAlignment: "Center",
      backgroundColor: "transparent",
      renderToolbar: () => <div></div>,
    },
  };

  const customStyle2: DashboardWidgetStyleOptions = {
    ...customStyle1,
    height: 600,
    backgroundColor : '#ffffff'
  };

  const customStyle4: DashboardWidgetStyleOptions = {
    ...customStyle1,
    height: 500,
  };

  const customStyle3: DashboardWidgetStyleOptions = {
    ...customStyle1,
    height: 600,
  };

  const customStyle5: DashboardWidgetStyleOptions = {
    ...customStyle1,
    height: 400,
  };

  const dashboards: Dashboard[] = [
    {
      id: '671e1878fbe60a002a9f356f',
      name: 'Anggaran Pendidikan',
      widgets: [
        { id: '671e19cbfbe60a002a9f3575', colSpan: 6, styleOptions: customStyle1, title : 'Anggaran Urusan Pendidikan' },
        { id: '671e1bd7fbe60a002a9f3586', colSpan: 6, styleOptions: customStyle1, title : 'Anggaran SPM Pendidikan' },

        { id: '671e1db7fbe60a002a9f359a', colSpan: 6, styleOptions: customStyle3, title : 'Anggaran Bidang Pendidikan dan Bidang Lainnya' },
        { id: '671e1fb2fbe60a002a9f35b8', colSpan: 6, styleOptions: customStyle3, title : 'Alokasi Anggaran Urusan Pendidikan Per Daerah' },

        { id: '671e1dbefbe60a002a9f359c', colSpan: 6, styleOptions: customStyle3, title : 'Anggaran SPM Pendidikan dan SPM Lainnya' },
        { id: '671e2015fbe60a002a9f35be', colSpan: 6, styleOptions: customStyle3, title : 'Alokasi Anggaran SPM Pendidikan Per Daerah' },

        { id: '671e1f2dfbe60a002a9f35af', colSpan: 12, styleOptions: customStyle2, title : 'Alokasi Anggaran Kegiatan Urusan Pendidikan' },
      ]
    },
    {
      id: '671dfda0fbe60a002a9f34bf',
      name: 'Status Pendidikan Anak',
      widgets: [
        { id: '671e0074fbe60a002a9f34ce', colSpan: 4, styleOptions: customStyle1, title : 'Jumlah Siswa' },
        { id: '671e03ebfbe60a002a9f34f0', colSpan: 2, styleOptions: customStyle1, title : 'Jumlah Siswa SD' },
        { id: '671e043ffbe60a002a9f34f9', colSpan: 2, styleOptions: customStyle1, title : 'Jumlah Siswa SMK' },
        { id: '671e043cfbe60a002a9f34f7', colSpan: 2, styleOptions: customStyle1, title : 'Jumlah Siswa SMP' },
        { id: '671e0430fbe60a002a9f34f5', colSpan: 2, styleOptions: customStyle1, title : 'Jumlah Siswa SMA' },

        { id: '671e2579fbe60a002a9f35e2', colSpan: 6, styleOptions: customStyle4, title : 'Persentase Anak Bersekolah dan Tidak Bersekolah' },
        { id: '671e0b21fbe60a002a9f3531', colSpan: 6, styleOptions: customStyle4, title : 'Anak Bersekolah Berdasarkan Tingkat Pendidikan' },
        
        { id: '671e07d8fbe60a002a9f351a', colSpan: 6, styleOptions: customStyle4, title : 'Siswa Berdasarkan Tingkat Putus Sekolah' },
        { id: '671e11fffbe60a002a9f3560', colSpan: 6, styleOptions: customStyle4, title : 'Anak Tidak Sekolah Karena Belum Pernah Bersekolah (Usia)' },

        { id: '671e0f65fbe60a002a9f355b', colSpan: 6, styleOptions: customStyle4, title : 'Anak Tidak Bersekolah Karena Drop Out' },
        { id: '671e0c6bfbe60a002a9f3543', colSpan: 6, styleOptions: customStyle4, title : 'Anak TIdak Bersekolah Berdasarkan Tingkat Pendidikan' },

        { id: '671e226cfbe60a002a9f35cf', colSpan: 4, styleOptions: customStyle4, title : 'Drop Out Siswa SD Berdasarkan Kelas' },
        { id: '671e22a3fbe60a002a9f35d1', colSpan: 4, styleOptions: customStyle4, title : 'Drop Out Siswa SMP Berdasarkan Kelas' },
        { id: '671e2415fbe60a002a9f35dc', colSpan: 4, styleOptions: customStyle4, title : 'Drop Out Siswa SMA/SMK Berdasarkan Kelas' },
      ]
    },
  ];

  return (
    <div className="multi-dashboard-container">
      {dashboards.map(dashboard => (
        <DashboardGrid key={dashboard.id} dashboard={dashboard} />
      ))}
      <style>{`
        .multi-dashboard-container {
          display: flex;
          flex-direction: column;
          gap: 30px;
        }
        .dashboard-grid {
          border: 1px solid #ccc;
          padding: 20px;
          border-radius: 8px;
          background: #F9F9F9;
        }
        .dashboard-title {
          margin-top: 0;
          margin-bottom: 20px;
          color: #333;
          font-size: 48px;
        }
        .widget-grid {
          display: flex;
          flex-wrap: wrap;
          width: 100%;
          margin: -10px;
        }
        .widget-grid > div {
          padding: 30px;
          box-sizing: border-box;
        }
        .col-4 { width: 33.333%; }
        .col-6 { width: 50%; }
        .col-8 { width: 66.666%; }
        .col-12 { width: 100%; }
        @media (max-width: 768px) {
          .col-4, .col-6, .col-8 { width: 100%; }
        }
      `}</style>
    </div>
  );
};

export default sipd;
