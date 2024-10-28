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
      <h2 className="dashboard-title fw-semibold text-center pb-lg-5" style={{  fontFamily:'Open Sans, sans-serif' }}>{dashboard.name}</h2>
      <div className="widget-grid">
        {dashboard.widgets.map(widget => (
          <div key={widget.id} className={`widget-container col-${widget.colSpan}`}>
            <div className={'border '} style={{ borderRadius: '0.5rem', color: 'black', boxShadow: '0 0.5rem 0.5rem rgba(0, 0, 0, 0.15)' }}>
              <div className="widget-layer title-layer text-center ">
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
      titleTextColor: "black",
      renderToolbar: () => <div></div>,
    },
  };

  const customStyle4: DashboardWidgetStyleOptions = {
    ...customStyle1,
    height: 200,
  };

  const customStyle2: DashboardWidgetStyleOptions = {
    ...customStyle1,
    height: 500,
  };

  const customStyle3: DashboardWidgetStyleOptions = {
    ...customStyle1,
    height: 400,
  };

  const dashboards: Dashboard[] = [
    {
      id: '671e2b69fbe60a002a9f362f',
      name: 'Alokasi Anggaran Stunting',
      widgets: [
        { id: '671e3e0efbe60a002a9f3641', colSpan: 6, styleOptions: customStyle1, title: 'Anggaran Pendidikan' },
        { id: '671e3ed5fbe60a002a9f364b', colSpan: 6, styleOptions: customStyle1, title: 'Anggaran Stunting' },

        { id: '671e404efbe60a002a9f364f', colSpan: 6, styleOptions: customStyle3, title: 'Persentase Anggaran Stunting Pada Anggaran Nasional' },
        { id: '671e406ffbe60a002a9f3651', colSpan: 6, styleOptions: customStyle3, title: 'Persentase Anggaran Stunting Bidang Kesehatan Pada Anggaran Nasional' },

        { id: '671e4148fbe60a002a9f365a', colSpan: 6, styleOptions: customStyle2, title: 'Anggaran Stunting Berdasarkan Bidang Urusan Pemerintah' },
        { id: '671e414efbe60a002a9f365c', colSpan: 6, styleOptions: customStyle2, title: 'Anggaran Stunting Berdasarkan SPM Bidang Pemerintah' },

      ]
    },

    {
      id: '671e2b69fbe60a002a9f362f',
      name: 'Keluarga Beresiko Stunting',
      widgets: [
        { id: '671e42e0fbe60a002a9f366f', colSpan: 6, styleOptions: customStyle4, title: 'Keluarga Sasaran' },
        { id: '671e432bfbe60a002a9f3671', colSpan: 6, styleOptions: customStyle4, title: 'Keluarga Beresiko Stunting' },

        { id: '671e44a5fbe60a002a9f3681', colSpan: 4, styleOptions: customStyle3, title: 'Persentase Keluarga Sasaran Pada Total Keluarga' },
        { id: '671e480dfbe60a002a9f369f', colSpan: 4, styleOptions: customStyle3, title: 'Tingkat Kesejahteraan Keluarga Sasaran' },
        { id: '671e44abfbe60a002a9f3683', colSpan: 4, styleOptions: customStyle3, title: 'Keluarga Beresiko dan Tidak Beresiko Stunting' },
        

        { id: '671e459dfbe60a002a9f368b', colSpan: 6, styleOptions: customStyle2, title: 'Keluarga Sasaran Berdasarkan Wilayah' },
        { id: '671e4592fbe60a002a9f3687', colSpan: 6, styleOptions: customStyle2, title: 'Keluarga Beresiko dan Tidak Beresiko Stunting Per Wilayah' },

        { id: '671e43b7fbe60a002a9f3675', colSpan: 6, styleOptions: customStyle4, title: 'Peserta Non KB Modern' },
        { id: '671e43cefbe60a002a9f3677', colSpan: 6, styleOptions: customStyle4, title: 'Total Pasangan Usia Subur (PUS) Hamil' },

        { id: '671e4908fbe60a002a9f36a7', colSpan: 6, styleOptions: customStyle3, title: 'Fasilitas Kesehatan Tidak Layak' },
        { id: '671e48a2fbe60a002a9f36a5', colSpan: 6, styleOptions: customStyle3, title: 'Keluarga Sasaran Menurut Usia Anak' },

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
        
          padding: 20px;
          border-radius: 8px;
        }
        .dashboard-title {
          margin-top: 0;
          margin-bottom: 20px;
          color: #333;
          font-family: geneva, sans-serif;
          font-size: 48px;
        }
        .widget-grid {
          display: flex;
          flex-wrap: wrap;
          width: 100%;
          margin: -10px;
        }
          .widget-title {
            margin-top: 5;]
            font-size: 16px;
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
