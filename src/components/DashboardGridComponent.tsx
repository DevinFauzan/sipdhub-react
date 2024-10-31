import React, { useEffect, useState } from 'react';
import { DashboardWidget } from '@sisense/sdk-ui';
import { Filter, filterFactory } from '@sisense/sdk-data';


import { IFilterState, IDashboard } from './_models';
import clsx from 'clsx';


const DashboardGridComponent: React.FC<{ dashboard: IDashboard }> = ({ dashboard }) => {
	const [selectedFilters, setSelectedFilters] = useState<IFilterState[]>([]);
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
				const newFilter: IFilterState = {
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
		<div className="dashboard-grid shadow">
			<h2 className="dashboard-title fw-semibold text-center pb-lg-5" style={{ fontFamily: 'Open Sans, sans-serif' }}>{dashboard.name}</h2>
			<div className="widget-grid">
				{dashboard.widgets.map((widget, index) => (
					<div key={index} className={`widget-container col-${widget.colSpan}`}>
						<div className={'border  rounded-3'}>
							<div className={clsx(`widget-title-wrapper d-flex gap-4 align-items-stretch p-3 rounded-top-3`, widget.titleWrapperClass)} style={widget.titleWrapperStyle}>
								{ widget.icon && ( 
									<div>
										<div className={clsx( `widget-icon border px-3 py-2 rounded-1`, widget.iconWrapperClass )} style={widget.iconWrapperStyle}>
											{widget.icon}
										</div> 
									</div>
								) }
								<div className="d-flex align-items-center">
									<div className="widget-title fira-sans-regular fs-5 text-gray-700 self-center" style={widget.titleStyle}>
										{widget?.title}
									</div>
								</div>
							</div>
							<div className={clsx(`widget-content rounded-bottom-3 position-center content-center overflow-hidden`)} >
								<div className={widget.widgetContentWrapperClass} style={{ marginTop: '-40px', ...widget.widgetContentWrapperStyle }}>
									{widget && (
										<DashboardWidget
											styleOptions={{
												...widget.styleOptions,
												border: isWidgetSelected(widget.id) ? true : undefined,
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

export default DashboardGridComponent