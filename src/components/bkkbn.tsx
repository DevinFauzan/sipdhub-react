// // import React from 'react';
// // import { DashboardById, DashboardWidget } from '@sisense/sdk-ui';
// // import * as DM from '../components/SIPD-BKKBN';

// // // Updated interface to include the dashboard name
// // interface Dashboard {
// //   id: string;
// //   name: string;
// //   widgets: Array<{ id: string; colSpan: number, title?: string, backgroundColor?: DashboardWidgetStyleOptions, styleOptions?: DashboardWidgetStyleOptions }>;
// // }

// // // Updated component to render a single dashboard with its name
// // const bkkbn = () => {
// //   return (
// //     <>
// //        <DashboardWidget
// //         dashboardOid="6718965dfbe60a002a9f2f30"
// //         widgetOid="6718965dfbe60a002a9f2f35"
// //         includeDashboardFilters={true}
// //         styleOptions={{
// //           height: 380,
// //         }}
// //       />
// //       <DashboardWidget
// //         dashboardOid="6718965dfbe60a002a9f2f30"
// //         widgetOid="6718965dfbe60a002a9f2f36"
// //         styleOptions={{
// //           height: 380,
// //         }}
// //         drilldownOptions={{
// //           //these will be merged with existing drilldown paths defined in the widget
// //           drilldownDimensions: [
// //             DM.bkkbn_data_anggaran_kabkot.air_tidak_layak,
// //             DM.bkkbn_data_anggaran_prov.balita
// //           ]
// //         }}
// //       />
// //     </>
// //   );
// // };

// // export default bkkbn;


// import React, { useEffect, useState } from 'react';
// import { DashboardWidget, DashboardWidgetStyleOptions, DrilldownOptions } from '@sisense/sdk-ui';
// import { Filter } from '@sisense/sdk-data';
// import { IDashboard } from './_models';
// import { customStyle1, customStyle3, customStyle4, customStyle5, customStyle6, customStyle7, customStyle8, customStyle9 } from './_SisenseWidgetStyleOptions';


// import { filterFactory } from '@sisense/sdk-data';
// import * as DM from '../components/SIPD-BKKBN';


// // Common style configurations remain the same


// const DASHBOARD_ID = '6718965dfbe60a002a9f2f30';

// interface WidgetProps {
// 	widgetID: string;
// 	dashboardID: string;
// 	title?: string;
// 	styleOptions?: DashboardWidgetStyleOptions;
// 	colSize?: string;
// 	includeDashboardFilters?: boolean;
// 	drilldownOptions?: DrilldownOptions;
// 	filters?: Filter[];
// 	onDataPointClick?: (dataPoints: any) => void;
// 	isSelected?: boolean;
// }

// const Widget: React.FC<WidgetProps> = ({
// 	widgetID,
// 	dashboardID,
// 	styleOptions,
// 	colSize,
// 	includeDashboardFilters = false,
// 	drilldownOptions,
// 	filters,
// 	onDataPointClick,
// 	isSelected
// }) => {
// 	const containerClass = colSize ? `col-${colSize}` : 'col';

// 	return (
// 		<div className={containerClass}>
// 			<DashboardWidget
// 				widgetOid={widgetID}
// 				dashboardOid={dashboardID}
// 				// title={title}
// 				styleOptions={{
// 					...styleOptions,
// 					// Add visual feedback for selected widgets
// 					border: isWidgetSelected(widget.id) ? true : undefined,
// 				}}
// 				includeDashboardFilters={includeDashboardFilters}
// 				drilldownOptions={drilldownOptions}
// 				filters={filters}
// 				onDataPointClick={onDataPointClick}
// 			/>
// 		</div>
// 	);
// };

// interface FilterState {
// 	widgetId: string;
// 	categoryValue: string;
// 	attribute: any;
// 	value: any;
// }

// const bkkbn: React.FC = () => {
// 	// Track selected filters with their widget IDs
// 	const [selectedFilters, setSelectedFilters] = useState<FilterState[]>([]);
// 	const [parsedFilters, setParsedFilters] = useState<Filter[]>([]);

// 	useEffect(() => {
// 		// Convert selected filters to Sisense filter format
// 		const newParsedFilters = selectedFilters.map(filter =>
// 			filterFactory.equals(filter.attribute, filter.value)
// 		);
// 		setParsedFilters(newParsedFilters);
// 	}, [selectedFilters]);

// 	const handleDataPointsSelected = (widgetId: string) => (dataPoints: any) => {
// 		if (!dataPoints?.categoryValue) return;

// 		setSelectedFilters(prevFilters => {
// 			// Check if this widget's filter is already selected
// 			const existingFilterIndex = prevFilters.findIndex(
// 				filter => filter.widgetId === widgetId &&
// 					filter.categoryValue === dataPoints.categoryValue
// 			);

// 			if (existingFilterIndex !== -1) {
// 				// Remove the filter if it's already selected
// 				return prevFilters.filter((_, index) => index !== existingFilterIndex);
// 			} else {
// 				// Add new filter
// 				const newFilter: FilterState = {
// 					widgetId,
// 					categoryValue: dataPoints.categoryValue,
// 					attribute: dataPoints.entries.category[0].attribute,
// 					value: dataPoints.entries.category[0].value
// 				};
// 				return [...prevFilters, newFilter];
// 			}
// 		});

// 		console.log('Data points selected:', dataPoints);
// 	};

// 	// Helper function to check if a widget is selected
// 	const isWidgetSelected = (widgetId: string) => {
// 		return selectedFilters.some(filter => filter.widgetId === widgetId);
// 	};

// 	return (
// 		<div className='p-6 rounded-4'>
// 			<div className="p-5 border shadow bg-white rounded-4 overflow-hidden">
// 				<h1 className='text-center pb-lg-5'>BKKBN</h1>
// 				<div className="row">
// 					{/* Left Column - ANGGARAN BELANJA */}
// 					<div className="col-6">
// 						<h2 className='text-center'>ALOKASI BELANJA</h2>
// 						<div className="row">
// 							<Widget
// 								widgetID="6718965dfbe60a002a9f2f31"
// 								dashboardID={DASHBOARD_ID}
// 								colSize="4"
// 								styleOptions={customStyle1}
// 								onDataPointClick={handleDataPointsSelected("6718965dfbe60a002a9f2f31")}
// 								filters={parsedFilters}
// 								isSelected={isWidgetSelected("6718965dfbe60a002a9f2f31")}
// 							/>
// 							<Widget
// 								widgetID="6718965dfbe60a002a9f2f33"
// 								title='Total Belanja Pencegahan Stunting'
// 								dashboardID={DASHBOARD_ID}
// 								colSize="4"
// 								styleOptions={customStyle1}
// 								onDataPointClick={handleDataPointsSelected("6718965dfbe60a002a9f2f33")}
// 								filters={parsedFilters}
// 								isSelected={isWidgetSelected("6718965dfbe60a002a9f2f33")}
// 							/>
// 							<Widget
// 								widgetID="6718965dfbe60a002a9f2f3e"
// 								title='Total Belanja SPM Stunting'
// 								dashboardID={DASHBOARD_ID}
// 								colSize="4"
// 								styleOptions={customStyle3}
// 								onDataPointClick={handleDataPointsSelected("6718965dfbe60a002a9f2f3e")}
// 								filters={parsedFilters}
// 								isSelected={isWidgetSelected("6718965dfbe60a002a9f2f3e")}
// 							/>
// 						</div>

// 						<div className="row">
// 							<div className="col-6">
// 								<Widget
// 									widgetID="6718965dfbe60a002a9f2f35"
// 									dashboardID={DASHBOARD_ID}
//                                     styleOptions={customStyle3}
// 									onDataPointClick={handleDataPointsSelected("6718965dfbe60a002a9f2f35")}
// 									filters={parsedFilters}
// 									isSelected={isWidgetSelected("6718965dfbe60a002a9f2f35")}
// 								/>
// 							</div>
// 							<div className="col-6">
// 								<Widget
// 									widgetID="6718965dfbe60a002a9f2f36"
// 									dashboardID={DASHBOARD_ID}
//                                     styleOptions={customStyle3}
// 									includeDashboardFilters={true}
// 									drilldownOptions={{
// 										drilldownDimensions: [
// 											DM.bkkbn_data_anggaran_kabkot.air_tidak_layak,
// 											DM.bkkbn_data_anggaran_prov.balita
// 										]
// 									}}
// 									onDataPointClick={handleDataPointsSelected("6718965dfbe60a002a9f2f36")}
// 									filters={parsedFilters}
// 									isSelected={isWidgetSelected("6718965dfbe60a002a9f2f36")}
// 								/>
// 							</div>
// 						</div>

// 						<div className="row">
// 							<div className="col-6">
// 								<Widget
// 									widgetID="6718965dfbe60a002a9f2f3d"
// 									dashboardID={DASHBOARD_ID}
//                                     styleOptions={customStyle3}
// 									includeDashboardFilters={true}
// 									onDataPointClick={handleDataPointsSelected("6718965dfbe60a002a9f2f3d")}
// 									filters={parsedFilters}
// 									isSelected={isWidgetSelected("6718965dfbe60a002a9f2f3d")}
// 								/>
// 							</div>
// 							<div className="col-6">
// 								<Widget
// 									widgetID="6718965dfbe60a002a9f2f3f"
// 									dashboardID={DASHBOARD_ID}
//                                     styleOptions={customStyle3}
// 									drilldownOptions={{
// 										drilldownDimensions: [
// 											DM.sipd_apbd_nasional.id_bidang_urusan,
// 											DM.bkkbn_data_anggaran_prov.balita
// 										]
// 									}}
// 									onDataPointClick={handleDataPointsSelected("6718965dfbe60a002a9f2f3f")}
// 									filters={parsedFilters}
// 									isSelected={isWidgetSelected("6718965dfbe60a002a9f2f3f")}
// 								/>
// 							</div>
// 						</div>

// 						<div className="col-12">
// 							<Widget
// 								widgetID="6718d27cfbe60a002a9f3038"
// 								dashboardID={DASHBOARD_ID}
// 								styleOptions={customStyle3}
// 								drilldownOptions={{
// 									drilldownDimensions: [
// 										DM.sipd_apbd_nasional.id_bidang_urusan,
// 										DM.bkkbn_data_anggaran_prov.balita
// 									]
// 								}}
// 								onDataPointClick={handleDataPointsSelected("6718d27cfbe60a002a9f3038")}
// 								filters={parsedFilters}
// 								isSelected={isWidgetSelected("6718d27cfbe60a002a9f3038")}
// 							/>
// 						</div>
// 					</div>

// 					{/* Right Column - KELUARGA */}
// 					<div className="col-6">
// 						<h2 className='text-center'>KELUARGA BERESIKO STUNTING</h2>
// 						<div className="row">
// 							<div className="col-12">
// 								<Widget
// 									widgetID="6718965dfbe60a002a9f2f37"
// 									dashboardID={DASHBOARD_ID}
//                                     styleOptions={customStyle3}
// 									onDataPointClick={handleDataPointsSelected("6718965dfbe60a002a9f2f37")}
// 									filters={parsedFilters}
// 									title='Total Keluarga Sasaran'
// 									isSelected={isWidgetSelected("6718965dfbe60a002a9f2f37")}
// 								/>
// 							</div>
// 						</div>

// 						<div className="row">
// 							<div className="col-6">
// 								<Widget
// 									widgetID="6718965dfbe60a002a9f2f39"
// 									dashboardID={DASHBOARD_ID}
//                                     styleOptions={customStyle3}
// 									onDataPointClick={handleDataPointsSelected("6718965dfbe60a002a9f2f39")}
// 									filters={parsedFilters}
// 									title='Total keluarga Beresiko Stunting'
// 									isSelected={isWidgetSelected("6718965dfbe60a002a9f2f39")}
// 								/>
// 							</div>
// 							<div className="col-6">
// 								<Widget
// 									widgetID="6718965dfbe60a002a9f2f38"
// 									dashboardID={DASHBOARD_ID}
//                                     styleOptions={customStyle3}
// 									onDataPointClick={handleDataPointsSelected("6718965dfbe60a002a9f2f38")}
// 									filters={parsedFilters}
// 									title='Total keluarga Tidak Beresiko Stunting'
// 									isSelected={isWidgetSelected("6718965dfbe60a002a9f2f38")}
// 								/>
// 							</div>
// 						</div>

// 						<div className="col-12">
// 							<Widget
// 								widgetID="6718965dfbe60a002a9f2f40"
// 								dashboardID={DASHBOARD_ID}
// 								styleOptions={customStyle3}
// 								onDataPointClick={handleDataPointsSelected("6718965dfbe60a002a9f2f40")}
// 								filters={parsedFilters}
// 								title='Keluarga Beresiko Stunting Berdasarkan Keluarga Sasaran'
// 								isSelected={isWidgetSelected("6718965dfbe60a002a9f2f40")}
// 							/>
// 						</div>

// 						<div className="row">
// 							<div className="col-4">
// 								<Widget
// 									widgetID="6718965dfbe60a002a9f2f3b"
// 									dashboardID={DASHBOARD_ID}
//                                     styleOptions={customStyle3}
// 									onDataPointClick={handleDataPointsSelected("6718965dfbe60a002a9f2f3b")}
// 									filters={parsedFilters}
// 									title='Total PUS'
// 									isSelected={isWidgetSelected("6718965dfbe60a002a9f2f3b")}
// 								/>
// 							</div>
// 							<div className="col-4">
// 								<Widget
// 									widgetID="6718965dfbe60a002a9f2f3a"
// 									dashboardID={DASHBOARD_ID}
//                                     styleOptions={customStyle3}
// 									onDataPointClick={handleDataPointsSelected("6718965dfbe60a002a9f2f3a")}
// 									filters={parsedFilters}
// 									title='Total Peserta Non KB Modern'
// 									isSelected={isWidgetSelected("6718965dfbe60a002a9f2f3a")}
// 								/>
// 							</div>
// 							<div className="col-4">
// 								<Widget
// 									widgetID="6718965dfbe60a002a9f2f3c"
// 									dashboardID={DASHBOARD_ID}
//                                     styleOptions={customStyle3}
// 									onDataPointClick={handleDataPointsSelected("6718965dfbe60a002a9f2f3c")}
// 									filters={parsedFilters}
// 									title='Total PUS Hamil'
// 									isSelected={isWidgetSelected("6718965dfbe60a002a9f2f3c")}
// 								/>
// 							</div>
// 						</div>

// 						<div className="row">
// 							<div className="col-6">
// 								<Widget
// 									widgetID="6718965dfbe60a002a9f2f43"
// 									dashboardID={DASHBOARD_ID}
//                                     styleOptions={customStyle3}
// 									onDataPointClick={handleDataPointsSelected("6718965dfbe60a002a9f2f43")}
// 									filters={parsedFilters}
									
// 									isSelected={isWidgetSelected("6718965dfbe60a002a9f2f43")}
// 								/>
// 							</div>
// 							<div className="col-6">
// 								<Widget
// 									widgetID="6718965dfbe60a002a9f2f42"
// 									dashboardID={DASHBOARD_ID}
//                                     styleOptions={customStyle3}
// 									onDataPointClick={handleDataPointsSelected("6718965dfbe60a002a9f2f42")}
// 									filters={parsedFilters}
// 									title='Keluarga Sasaran Menurut Peringakt Kesejahteraan'
// 									isSelected={isWidgetSelected("6718965dfbe60a002a9f2f42")}
// 								/>
// 							</div>
// 						</div>

// 						<div className="col-12">
// 							<Widget
// 								widgetID="6718965dfbe60a002a9f2f45"
// 								dashboardID={DASHBOARD_ID}
// 								styleOptions={customStyle3}
// 								onDataPointClick={handleDataPointsSelected("6718965dfbe60a002a9f2f45")}
// 								filters={parsedFilters}
// 								isSelected={isWidgetSelected("6718965dfbe60a002a9f2f45")}
// 							/>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default bkkbn;
