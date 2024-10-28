// import React from 'react';
// import { DashboardById, DashboardWidget } from '@sisense/sdk-ui';

// // Updated interface to include the dashboard name
// interface Dashboard {
//   id: string;
//   name: string;
//   widgets: Array<{ id: string; colSpan: number }>;
// }

// // Updated component to render a single dashboard with its name
// const bkkbn = () => {
//   return (
//     <>
//       <DashboardById
//         dashboardOid="66e1770bfbe60a002a9f259b"
//       />
//     </>
//   );
// };

// export default bkkbn;

import React from 'react';
import { DashboardWidget, DashboardWidgetProps, DashboardWidgetStyleOptions, DrilldownOptions } from '@sisense/sdk-ui';
import { Filter } from '@sisense/sdk-data';

// Updated interface to include the dashboard name
interface Dashboard {
    id: string;
    name: string;
    widgets: Array<{ id: string; colSpan: number, title?: string, backgroundColor?: DashboardWidgetStyleOptions, styleOptions?: DashboardWidgetStyleOptions }>;
}

interface ILayoutWidget {
    as: 'row' | 'col' | 'widget'
    widget?: IWidget[]
}

interface IWidget {
    dashboardID: string
    widgetID: string
    title?: string
    styleOptions?: DashboardWidgetStyleOptions
    colSize?: string
    includeDashboardFilters?: boolean
    drilldownOptions?: DrilldownOptions
    filters?: Filter[]
}

const WidgetComponent = ({
    widgetID,
    dashboardID,
    title,
    styleOptions,
    colSize,
    includeDashboardFilters = false,
    drilldownOptions,
    filters
}: IWidget) => {
    const containerClass = colSize ? `col-${colSize}` : `col`
    if (title) {
        return (
            <div className={containerClass}>
                <DashboardWidget
                    styleOptions={styleOptions}
                    title={title}
                    dashboardOid={dashboardID}
                    widgetOid={widgetID}
                    includeDashboardFilters={includeDashboardFilters}
                    drilldownOptions={drilldownOptions}
                    filters={filters}
                />
            </div>
        )
    } else {
        return (
            <div className={containerClass}>
                <DashboardWidget
                    styleOptions={styleOptions}
                    dashboardOid={dashboardID}
                    widgetOid={widgetID}
                    includeDashboardFilters={includeDashboardFilters}
                    drilldownOptions={drilldownOptions}
                />
            </div>
        )
    }
}

interface DashboardProps {
    title: string
    containerClass?: string
    children?: React.ReactNode
}

const DashboardComponent = ({ title, children, containerClass }: DashboardProps) => {
    return (
        <div className={`${containerClass}`}>
            <h2>{title}</h2>
            {/* {widgets.map((row, index) => (
        <div className="row" key={index}>
          {row.map((widget, index2) => (
            <WidgetComponent
              key={index2}
              widgetID={widget.widgetID}
              dashboardID={widget.dashboardID}
              title={widget.title}
              styleOptions={widget.styleOptions}
              colSize={widget.colSize}
            />
          ))}
        </div>
      ))} */}
            {children}
        </div>
    )
}

// Updated component to render a single dashboard with its name
const DashboardGrid: React.FC<{ dashboard: Dashboard }> = ({ dashboard }) => (
    <div className="dashboard-grid">
        <h2 className="dashboard-title">{dashboard.name}</h2>
        <div className="widget-grid">
            {dashboard.widgets.map(widget => (
                <div key={widget.id} className={`col-${widget.colSpan}`}>
                    {widget?.title ? (
                        <DashboardWidget
                            styleOptions={widget.styleOptions}
                            title={widget?.title}
                            dashboardOid={dashboard.id}
                            widgetOid={widget.id}
                        />
                    ) : (
                        <DashboardWidget
                            styleOptions={widget.styleOptions}
                            dashboardOid={dashboard.id}
                            widgetOid={widget.id}
                        />
                    )}
                </div>
            ))}
        </div>
    </div>
);

// Main component to render multiple dashboards
const latihan: React.FC = () => {
    const customStyle1: DashboardWidgetStyleOptions =
    {
        backgroundColor: 'transparent',
        shadow: 'None',
        height: 200,
        cornerRadius: 'Medium'
    };
    const customStyle2: DashboardWidgetStyleOptions =
    {
        backgroundColor:
            'transparent',
        "border": true,
        "header": {
            "hidden": false,
            "titleAlignment": "Center",
            "backgroundColor": "transparent",
            "titleTextColor": "black"
        },
        "borderColor": "green",
        shadow: 'None', height: 800,
        cornerRadius: 'Medium'
    };
    const dashboards1: Dashboard[] = [
        {
            id: '6718965dfbe60a002a9f2f30',
            name: 'SIPD bkkbn',
            widgets: [
                { id: '6719f788fbe60a002a9f30c2', colSpan: 4, styleOptions: customStyle1, },
                { id: '6719f9cefbe60a002a9f30d3', colSpan: 4, title: '', styleOptions: customStyle1 },
                { id: '6719f9cefbe60a002a9f30d3', colSpan: 4, styleOptions: customStyle1 },

                { id: '6719f84dfbe60a002a9f30c5', colSpan: 6, styleOptions: customStyle2, },
                { id: '6719f872fbe60a002a9f30c7', colSpan: 6, styleOptions: customStyle2 },


            ]
        },

        // Add more dashboards as needed
    ];

    return (
        <div className="multi-dashboard-container">
            <div className="row">
                <div className="col-12">
                    {dashboards1.map(dashboard => (
                        <DashboardGrid key={dashboard.id} dashboard={dashboard} />
                    ))}
                </div>
                {/* <div className="col-6">
          {dashboards2.map(dashboard => (
            <DashboardGrid key={dashboard.id} dashboard={dashboard} />
          ))}
        </div> */}
            </div>
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
          font-size: 24px;
        }
        .widget-grid {
          display: flex;
          flex-wrap: wrap;
          margin: -10px;
        }
        .widget-grid > div {
          padding: 10px;
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

// const bkkbn = () => {
//   const DashboardID = '6718965dfbe60a002a9f2f30';

//   const scoreStyle0: DashboardWidgetStyleOptions = {
//     height: 300,
//     shadow: 'None',
//     cornerRadius: 'Medium',
//     spaceAround: 'Large',

//   };

//   const scoreStyle1: DashboardWidgetStyleOptions = {
//     height: 300,
//     shadow: 'None',
//   };

//   const style2: DashboardWidgetStyleOptions = {
//     height: 200,
//     shadow: 'None',
//   };

//   const style3: DashboardWidgetStyleOptions = {
//     height: 600,
//     shadow: 'None',
//   };

//   const style4: DashboardWidgetStyleOptions = {
//     height: 1000,
//     shadow: 'None',
//   };
//   return (
//     <div className='p-6'>
//       <DashboardComponent
//         title="latihan"
//         containerClass="p-5 border shadow bg-white rounded-4 overflow-hidden"
//       >
//         <div className="row">
//           {/* Kiri */}
//           <div className="col-6">
//             <div className="row">
//               {/* Total Anggaran */}
//               <WidgetComponent
//                 widgetID="6719f788fbe60a002a9f30c2"
//                 dashboardID={DashboardID}
//                 title="Data Table"
//                 colSize="4"
//                 styleOptions={scoreStyle1}
//               />
//               <WidgetComponent
//                 widgetID="6719f9cefbe60a002a9f30d3"
//                 dashboardID={DashboardID}
//                 title="Data Table"
//                 colSize="4"
//                 styleOptions={scoreStyle1}
//               />
//               <WidgetComponent
//                 widgetID="6719f984fbe60a002a9f30d0"
//                 dashboardID={DashboardID}
//                 title="Data Table"
//                 colSize="4"
//                 styleOptions={scoreStyle1}
//               />
//             </div>
//             <div className="row">
//               <div className="col-6">
//                 <DashboardWidget
//                   widgetOid="6719f84dfbe60a002a9f30c5"
//                   dashboardOid={DashboardID}
//                   title="Data Table"
//                   styleOptions={style4}
//                   />
//               </div>
//               <div className="col-6">
//                 <DashboardWidget
//                   widgetOid="6719f872fbe60a002a9f30c7"
//                   dashboardOid={DashboardID}
//                   title="Data Table"
//                   styleOptions={style4}
//                   />
//               </div>
//             </div>
//           </div>
//           {/* Kanan */}
//           <div className="col-6">
//             <div className="row">
//             <div className="col-6">
//                 <DashboardWidget
//                   widgetOid="6719f42bfbe60a002a9f3084"
//                   dashboardOid={DashboardID}
//                   title="Data Table"
//                   styleOptions={style2}
//                   />
//               </div>
//               <div className="col-6">
//                 <DashboardWidget
//                   widgetOid="6719f460fbe60a002a9f3086"
//                   dashboardOid={DashboardID}
//                   title="Data Table"
//                   styleOptions={style2}
//                   />
//               </div>
//               <div className="col-6">
//                 <DashboardWidget
//                   widgetOid="6719f520fbe60a002a9f30a3"
//                   dashboardOid={DashboardID}
//                   title="Data Table"
//                   styleOptions={style3}
//                   />
//               </div>
//               <div className="col-6">
//                 <DashboardWidget
//                   widgetOid="6719f541fbe60a002a9f30a9"
//                   dashboardOid={DashboardID}
//                   title="Data Table"
//                   styleOptions={style3}
//                   />
//               </div>
//               <div className="col-6">
//                 <DashboardWidget
//                   widgetOid="6719f53afbe60a002a9f30a7"
//                   dashboardOid={DashboardID}
//                   title="Data Table"
//                   styleOptions={style3}
//                   />
//               </div>
//               <div className="col-6">
//                 <DashboardWidget
//                   widgetOid="6719f55ffbe60a002a9f30ad"
//                   dashboardOid={DashboardID}
//                   title="Data Table"
//                   styleOptions={style3}
//                   />
//               </div>
//             </div>
//           </div>
//         </div>
//       </DashboardComponent>
//     </div>
//   )
// }

export default latihan;