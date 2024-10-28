// import React from 'react';
// import { DashboardById, DashboardWidget } from '@sisense/sdk-ui';

// // Updated interface to include the dashboard name
// interface Dashboard {
//   id: string;
//   name: string;
//   widgets: Array<{ id: string; colSpan: number }>;
// }

// // Updated component to render a single dashboard with its name
// const kemenko = () => {
//   return (
//     <>
//       <DashboardById
//         dashboardOid="6719fa05fbe60a002a9f30d5"
//       />
//     </>
//   );
// };

// export default kemenko;

import React, { useEffect, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  DashboardWidget,
  DashboardWidgetStyleOptions,
  ThemeSettings,
  ThemeSettingsFont,
  ThemeSettingsFontSource,
} from '@sisense/sdk-ui';
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
    fontSize?: number;
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

const Kemenko: React.FC = () => {
  const customStyle1: DashboardWidgetStyleOptions = {
    backgroundColor: 'transparent',
    height: 200,
    cornerRadius: 'Medium',
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
    height: 600,
  };

  const customStyle6: DashboardWidgetStyleOptions = {
    ...customStyle1,
    height: 500,
  };

  const customStyle3: DashboardWidgetStyleOptions = {
    ...customStyle1,
    height: 1200,
  };



  const dashboards: Dashboard[] = [
    {
      id: '6719fa05fbe60a002a9f30d5',
      name: 'Kemiskinan Ekstrem',
      widgets: [
        { id: '671a0cc9fbe60a002a9f30e4', colSpan: 4, styleOptions: customStyle1, title: 'Anggaran Kemiskinan Ekstrem' },
        { id: '671a1066fbe60a002a9f30ec', colSpan: 4, styleOptions: customStyle1, title: 'Anggaran SPM Kemiskinan Ekstrem' },
        { id: '671a0439fbe60a002a9f30e1', colSpan: 4, styleOptions: customStyle1, title: 'Total Kemiskinan Ekstrem' },

        { id: '671a13bdfbe60a002a9f30fc', colSpan: 4, styleOptions: customStyle6, title: 'Anggaran Nasional Kemiskinan Ekstrem' },
        { id: '671a1be2fbe60a002a9f3110', colSpan: 4, styleOptions: customStyle6, title: 'Anggaran Kemiskinan Ekstrem Urusan Bidang' },
        { id: '671a0fc9fbe60a002a9f30e8', colSpan: 4, styleOptions: customStyle6, title: 'Anggaran Kemiskinan Ekstrem SPM Bidang' },

        { id: '671a22a1fbe60a002a9f313f', colSpan: 4, styleOptions: customStyle6, title: 'Kemiskinan Ekstrem Individu dan Keluarga' },
        { id: '671a2658fbe60a002a9f3145', colSpan: 4, styleOptions: customStyle6, title: 'Kemiskinan Ekstrem Individu dan Keluarga Berdasarkan Daerah' },
        { id: '671a1e66fbe60a002a9f3124', colSpan: 4, styleOptions: customStyle6, title: 'Anggaran Giat Kemiskinan Ekstrem' },

        { id: '671a297cfbe60a002a9f316d', colSpan: 6, styleOptions: customStyle6, title: 'Desil 1 | Kelompok 10% Terendah' },
        { id: '671a298afbe60a002a9f3171', colSpan: 6, styleOptions: customStyle6, title: 'Desil 2 | Kelompok 10 - 20% Terendah' },
        { id: '671a2985fbe60a002a9f316f', colSpan: 6, styleOptions: customStyle6, title: 'Desil 3 | Kelompok 20 - 30% Terendah' },
        { id: '671a28f9fbe60a002a9f3161', colSpan: 6, styleOptions: customStyle6, title: 'Desil 4 | Kelompok 30 - 40% Terendah' },
      ]
    },

    {
      id: '671b1998fbe60a002a9f322f',
      name: 'Pekerjaan dan Fasilitas Rumah Tangga',
      widgets: [
        { id: '671b19bbfbe60a002a9f3231', colSpan: 4, styleOptions: customStyle1, title: 'Total Kepala Keluarga Perempuan' },
        { id: '671b2437fbe60a002a9f323e', colSpan: 4, styleOptions: customStyle1, title: 'Kepala Keluarga yang Bekerja' },
        { id: '671b23e8fbe60a002a9f323c', colSpan: 4, styleOptions: customStyle1, title: 'Individu yang Bekerja' },

        { id: '671b22f3fbe60a002a9f3233', colSpan: 4, styleOptions: customStyle6, title: 'Usia Keluarga Perempuan' },
        { id: '671b2596fbe60a002a9f324e', colSpan: 4, styleOptions: customStyle6, title: 'Total Pekerja dan Tidak Bekerja' },
        { id: '671b269ffbe60a002a9f3255', colSpan: 4, styleOptions: customStyle6, title: 'Kelompok Pekerjaan' },

        { id: '671b4343fbe60a002a9f32af', colSpan: 6, styleOptions: customStyle1, title: 'Usia Pekerja' },
        { id: '671b4387fbe60a002a9f32b9', colSpan: 6, styleOptions: customStyle1, title: 'Usia Tidak Pekerja' },

        { id: '671b2fbefbe60a002a9f326c', colSpan: 6, styleOptions: customStyle1, title: 'Kelompok Pekerjaan Individu' },
        { id: '671b2d1ffbe60a002a9f3260', colSpan: 6, styleOptions: customStyle1, title: 'Kelompok Pekerjaan Kepala Keluarga' },

        { id: '671b61d6fbe60a002a9f32d2', colSpan: 12, styleOptions: customStyle1, title: 'Fasilitas Sanitasi' },


        { id: '671b6404fbe60a002a9f32de', colSpan: 6, styleOptions: customStyle6, title: 'Status Kepemilkan Rumah' },
        { id: '671b654cfbe60a002a9f32f5', colSpan: 6, styleOptions: customStyle6, title: 'Penggunaan Listrik Rumah Tangga Per Watt' },
        { id: '671b66a8fbe60a002a9f3305', colSpan: 6, styleOptions: customStyle6, title: 'Bahan Bakar Memasak' },
        { id: '671b68c8fbe60a002a9f3315', colSpan: 6, styleOptions: customStyle6, title: 'Sumber Penerangan Rumah Tangga' },
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
          font-size: 8px;
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

export default Kemenko;

// import React, { useEffect, useState } from 'react';
// import { DashboardWidget, DashboardWidgetStyleOptions } from '@sisense/sdk-ui';
// import { filterFactory } from '@sisense/sdk-data';

// interface Dashboard {
//     id: string;
//     name: string;
//     widgets: Array<{
//         id: string;
//         colSpan: number;
//         title?: string;
//         backgroundColor?: DashboardWidgetStyleOptions;
//         styleOptions?: DashboardWidgetStyleOptions;
//         filters?: any[];
//         onFilterChange?: (filter: any) => void;
//     }>;
// }

// const DashboardGrid: React.FC<{ dashboard: Dashboard }> = ({ dashboard }) => {
//     const [filters, setFilters] = useState<{ [key: string]: any }>({});
//     const [parsedFilters, setParsedFilters] = useState<any[]>([]);
//     const [selectedID, setSelectedID] = useState<string | null>(null);

//     const handleDataPointsSelected = (id: string) => (dataPoints: any) => {
//         console.log("Selected Widget ID:", id);
//         console.log("Received Data Points:", dataPoints);

//         if (dataPoints?.categoryValue) {
//             const newFilters = { ...filters };

//             // If the widget ID already has filters, remove them
//             if (newFilters[id]) {
//                 console.log(`Removing filters for widget ID: ${id}`);
//                 delete newFilters[id];
//             } else {
//                 // Determine whether entries is an array or an object
//                 console.log("Processing Entries...");
//                 console.log("Entries:", dataPoints.entries);

//                 if (Array.isArray(dataPoints.entries)) {
//                     console.log("Processing Entries as Array:", dataPoints.entries);
//                     newFilters[id] = dataPoints.entries.map((entry: any) => {
//                         console.log("Processing Entry (Array):", entry);
//                         // Access measure safely
//                         const measureName = entry?.measure?.name || "Unknown Measure"; // Fallback for undefined
//                         const firstValue = Array.isArray(entry.value) ? entry.value[0] : entry.value; // Get the first value

//                         return {
//                             attribute: measureName,
//                             value: firstValue,
//                         };
//                     });
//                 } else if (typeof dataPoints.entries === 'object' && dataPoints.entries !== null) {
//                     console.log("Processing Entries as Object:", dataPoints.entries);
//                     newFilters[id] = []; // Initialize for the widget ID
//                     for (const key in dataPoints.entries) {
//                         if (dataPoints.entries.hasOwnProperty(key)) {
//                             const entry = dataPoints.entries[key];
//                             // Validate entry structure
//                             if (entry.measure && entry.measure.name) {
//                                 const measureName = entry.measure.name; // Safely get the name
//                                 const firstValue = Array.isArray(entry.value) ? entry.value[0] : entry.value; // Safely get the first value

//                                 newFilters[id].push({
//                                     attribute: measureName,
//                                     value: firstValue,
//                                 });
//                                 console.log("Added filter entry:", newFilters[id]);
//                             } else {
//                                 console.warn("Invalid entry structure, missing measure or name:", entry);
//                             }
//                         }
//                     }
//                 } else {
//                     console.error("Unexpected format for entries:", dataPoints.entries);
//                 }
//             }

//             setFilters(newFilters); // Update filters
//             setSelectedID(newFilters[id] ? null : id); // Conditionally set selected ID
//         }
//     };

//     useEffect(() => {
//         // Transform filters into parsed filters for widget updates
//         const allParsedFilters: any[] = [];
//         for (const key in filters) {
//             if (filters[key]) {
//                 filters[key].forEach((entry: any) => {
//                     if (entry.attribute && entry.value !== undefined) {
//                         allParsedFilters.push(filterFactory.equals(entry.attribute, entry.value));
//                     } else {
//                         console.warn("Invalid filter entry:", entry);
//                     }
//                 });
//             }
//         }
//         setParsedFilters(allParsedFilters); // Update parsed filters for widgets
//         console.log("Parsed Filters:", allParsedFilters);
//     }, [filters]);

//     return (
//         <div className="dashboard-grid">
//             <h2 className="dashboard-title">{dashboard.name}</h2>
//             <div className="widget-grid">
//                 {dashboard.widgets.map(widget => (
//                     <div key={widget.id} className={`col-${widget.colSpan}`}>
//                         <DashboardWidget
//                             styleOptions={widget.styleOptions}
//                             title={widget?.title}
//                             dashboardOid={dashboard.id}
//                             widgetOid={widget.id}
//                             onDataPointClick={handleDataPointsSelected(widget.id)}
//                             filters={widget.id !== selectedID ? parsedFilters : []} // Apply filters conditionally
//                         />
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// // Main component to render multiple dashboards
// const Kemenko: React.FC = () => {
//     const customStyle1: DashboardWidgetStyleOptions =
//     {
//         backgroundColor: 'transparent',
//         shadow: 'None',
//         "header": {
//             "hidden": false,
//             "titleAlignment": "Center",
//             "backgroundColor": "transparent",
//             "titleTextColor": "black",
//             "renderToolbar": () => <div></div>,
//         },
//     }
//     const customStyle2: DashboardWidgetStyleOptions =
//     {
//         backgroundColor: 'transparent',
//         shadow: 'None',
//         height: 800,
//         "header": {
//             "hidden": false,
//             "titleAlignment": "Center",
//             "backgroundColor": "transparent",
//             "titleTextColor": "black",
//             "renderToolbar": () => <div></div>,
//         },
//     }

//     const customStyle3: DashboardWidgetStyleOptions =
//     {
//         backgroundColor: 'transparent',
//         shadow: 'None',
//         height: 800,
//         "header": {
//             "hidden": false,
//             "titleAlignment": "Center",
//             "backgroundColor": "transparent",
//             "titleTextColor": "black",
//             "renderToolbar": () => <div></div>,
//         },
//     }

//     const dashboards: Dashboard[] = [
//         {
//             id: '6719fa05fbe60a002a9f30d5',
//             name: 'SIPD Kemenko',
//             widgets: [
//                 { id: '671a0cc9fbe60a002a9f30e4', colSpan: 4, filters: [], styleOptions: customStyle1 },
//                 { id: '671a1066fbe60a002a9f30ec', colSpan: 4, filters: [], styleOptions: customStyle1 },
//                 { id: '671a0439fbe60a002a9f30e1', colSpan: 4, filters: [], styleOptions: customStyle1 },

//                 { id: '671a0fc9fbe60a002a9f30e8', colSpan: 4, filters: [], styleOptions: customStyle3 },
//                 { id: '671a13bdfbe60a002a9f30fc', colSpan: 4, filters: [], styleOptions: customStyle1 },
//                 { id: '671a22a1fbe60a002a9f313f', colSpan: 4, filters: [], styleOptions: customStyle1 },

//                 { id: '671a1be2fbe60a002a9f3110', colSpan: 4, styleOptions: customStyle2 },
//                 { id: '671a1e66fbe60a002a9f3124', colSpan: 4, styleOptions: customStyle2 },
//                 { id: '671a2658fbe60a002a9f3145', colSpan: 4, styleOptions: customStyle2 },
//             ]
//         },

//         // Add more dashboards as needed
//     ];

//     return (
//         <div className="multi-dashboard-container">
//             {dashboards.map(dashboard => (
//                 <DashboardGrid key={dashboard.id} dashboard={dashboard} />
//             ))}
//             <style>{`
//         .multi-dashboard-container {
//           display: flex;
//           flex-direction: column;
//           gap: 30px;
//         }
//         .dashboard-grid {
//           border: 1px solid #ccc;
//           padding: 20px;
//           border-radius: 8px;
//         }
//         .dashboard-title {
//           margin-top: 0;
//           margin-bottom: 20px;
//           color: #333;
//           font-size: 24px;
//         }
//         .widget-grid {
//           display: flex;
//           flex-wrap: wrap;
//           margin: -10px;
//         }
//         .widget-grid > div {
//           padding: 10px;
//           box-sizing: border-box;
//         }
//         .col-4 { width: 33.333%; }
//         .col-6 { width: 50%; }
//         .col-8 { width: 66.666%; }
//         .col-12 { width: 100%; }
//         @media (max-width: 768px) {
//           .col-4, .col-6, .col-8 { width: 100%; }
//         }
//       `}</style>
//         </div>
//     );
// };

// export default Kemenko;
