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
    titleStyle?: React.CSSProperties;
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
                <h5 className="widget-title" style={widget.titleStyle}>{widget?.title}
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

  const customStyle2: DashboardWidgetStyleOptions = {
    ...customStyle1,
    height: 400,
    backgroundColor: '#ffffff'
  };

  const customStyle3: DashboardWidgetStyleOptions = {
    ...customStyle1,
    height: 400,
  };

  const customStyle4: DashboardWidgetStyleOptions = {
    ...customStyle1,
    height: 600,
  };

  const dashboards: Dashboard[] = [
    {
      id: '671de99ffbe60a002a9f3465',
      name: 'Alokasi Anggaran Nasional',
      widgets: [
        { id: '671dea45fbe60a002a9f3467', colSpan: 3, styleOptions: customStyle1, title: 'Belanja Nasional' },
        { id: '671deb04fbe60a002a9f346c', colSpan: 3, styleOptions: customStyle1, title: 'Belanja Urusan dan SPM Bidang' },
        { id: '671e27c3fbe60a002a9f360a', colSpan: 3, styleOptions: customStyle1, title: 'Anggaran Stunting' },
        { id: '671e27d9fbe60a002a9f360c', colSpan: 3, styleOptions: customStyle1, title: 'Anggaran Kemiskinan Ekstrem' },

        { id: '671e28ddfbe60a002a9f3616', colSpan: 3, styleOptions: customStyle4, title: 'Distribusi Penanganan Stunting dan Kemiskinan Ekstrem Nasional' },
        { id: '671e2a3cfbe60a002a9f3623', colSpan: 6, styleOptions: customStyle4, title: 'Penanganan Stunting dan Kemiskinan Ekstrem Berdasarkan SPM Bidang Pemerintah', titleStyle: { marginBottom: '2rem'} },
        { id: '671dec83fbe60a002a9f3473', colSpan: 3, styleOptions: customStyle4, title: 'Belanja Nasional Berdasarkan SPM Bidang', titleStyle: { marginBottom: '2rem'} },
       

        { id: '671df7c3fbe60a002a9f3496', colSpan: 12, styleOptions: customStyle2, title: 'Alokasi Belanja Stunting dan Kemiskinan Ekstrem' },

        { id: '671dee08fbe60a002a9f347c', colSpan: 6, styleOptions: customStyle3, title: 'Belanja Nasional Berdasarkan Urusan Bidang Pemerintah' },
        { id: '671e28fbfbe60a002a9f3618', colSpan: 6, styleOptions: customStyle3, title: 'Penanganan Stunting dan Kemiskinan Ekstrem Berdasarkan Urusan Bidang Pemerintah' },


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
