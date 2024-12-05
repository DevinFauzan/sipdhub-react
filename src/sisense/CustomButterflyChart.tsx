import clsx from 'clsx'
import React, { useState, useEffect } from 'react'
import { DashboardWidget, DashboardWidgetStyleOptions } from '@sisense/sdk-ui';
import { Filter, filterFactory } from '@sisense/sdk-data';
import { IFilterState } from './_models';

export interface IDataChart {
	id: string;
	dashboardId: string;
	backgroundColor?: DashboardWidgetStyleOptions;
	styleOptions?: DashboardWidgetStyleOptions;
	title?: string;
}

export interface CustomButterflyChartProps {
	title: string
	titleClass?: string
	titleStyle?: React.CSSProperties

	wrapperClass?: string
	wrapperStyle?: React.CSSProperties

	chartA: IDataChart
	chartAWrapperClass?: string
	chartAStyle?: React.CSSProperties

	chartB: IDataChart
	chartBWrapperClass?: string
	chartBStyle?: React.CSSProperties
}

const CustomButterflyChart: React.FC<CustomButterflyChartProps> = ({
	title,
	titleClass,
	titleStyle,

	wrapperClass,
	wrapperStyle,

	chartA,
	chartAWrapperClass,
	chartAStyle,

	chartB,
	chartBWrapperClass,
	chartBStyle
}) => {


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
		<div className={clsx("d-flex flex-column rounded-4 overflow-hidden", wrapperClass)}>
			<div className={clsx(titleClass || "widget-title fira-sans-regular fs-5 text-gray-700 self-center")} style={titleStyle}>{title}</div>
			<div className={clsx("grid-container grid-col-2", wrapperClass)} style={wrapperStyle}>
				<div className={clsx("p-3 overflow-hidden", chartAWrapperClass)} style={chartAStyle}>
					<div style={{ marginLeft: "0px", marginTop: "-40px" }}>
						{chartA &&
							<DashboardWidget
								styleOptions={{
									...chartA.styleOptions,
									border: isWidgetSelected(chartA.id) ? true : undefined,
									header: {
										...chartA.styleOptions?.header,
										hidden: false,
										titleAlignment: "Center",
										backgroundColor: "transparent",
										titleTextColor: "black",
										renderToolbar: () => <div></div>
									}
								}}
								title={''}
								dashboardOid={chartA.dashboardId}
								includeDashboardFilters={false}
								widgetOid={chartA.id}
								onDataPointClick={handleDataPointsSelected(chartA.id)}
								filters={parsedFilters}
							/>
						}
					</div>
				</div>
				<div className={clsx("p-3 overflow-hidden", chartBWrapperClass)} style={chartBStyle}>
					<div style={{ marginLeft: "-45px", marginTop: "-40px", marginRight: "10px" }}>
						{chartB &&
							<DashboardWidget
								styleOptions={{
									...chartB.styleOptions,
									border: isWidgetSelected(chartB.id) ? true : undefined,
									header: {
										...chartB.styleOptions?.header,
										hidden: false,
										titleAlignment: "Center",
										backgroundColor: "transparent",
										titleTextColor: "black",
										renderToolbar: () => <div></div>
									}
								}}
								title={''}
								dashboardOid={chartB.dashboardId}
								includeDashboardFilters={false}
								widgetOid={chartB.id}
								onDataPointClick={handleDataPointsSelected(chartB.id)}
								filters={parsedFilters}
							/>
						}
					</div>
				</div>
			</div>
		</div>
	)
}

export default CustomButterflyChart