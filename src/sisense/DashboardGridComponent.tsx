import React, { useCallback, useContext, useEffect, useState } from 'react';

import { IFilterState, IDashboard } from './_models';
import { DistrictWebPageFilterID, ProvinceWebPageFilterID, WebPageFilterID } from './_datamodels';
import clsx from 'clsx';
import CustomButterflyChart from './CustomButterflyChart';
import { FilterContext } from '../public-profile/profiles/company copy';
import DashboardWidgetComponent from './DashboardWidgetComponent';

const DashboardGridComponent: React.FC<{ dashboard: IDashboard, webpageFilters?: IFilterState[] }> = ({ dashboard, webpageFilters }) => {
  const { optionsProvinsi, setFilterProvinsi, setFilterKabupaten } = useContext(FilterContext)

  const [selectedFilters, setSelectedFilters] = useState<IFilterState[]>([]);

  const [isSisenseTriggeredFilter, setIsSisenseTriggeredFilter] = useState<boolean>(true)

  const handleDataPointsSelected = (widgetId: string, filterable: boolean | undefined) => (dataPoints: any) => {
    if (!dataPoints?.categoryValue || !filterable) return;

    setSelectedFilters(prevFilters => {
      // Check if this widget's filter is already selected
      const existingFilterIndex = prevFilters.findIndex(
        filter =>
          (filter.widgetId === ProvinceWebPageFilterID) ||
          (filter.widgetId === DistrictWebPageFilterID) ||
          (filter.widgetId === widgetId && filter.categoryValue === dataPoints.categoryValue)
      );

      setIsSisenseTriggeredFilter(true)

      if (existingFilterIndex !== -1) {
        setFilterProvinsi(null)
        setFilterKabupaten(null)

        // Remove the filter if it's already selected
        return [];
      } else {
        // Find the selected province on the optionsProvinsi, then add them to the overall filter
        const provinsi = optionsProvinsi.find((op) => op.value.toLowerCase() === dataPoints.categoryValue?.toLowerCase())
        if (provinsi) {
          setFilterProvinsi(provinsi)
        }

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
    if (isSisenseTriggeredFilter) {
      setIsSisenseTriggeredFilter(false)
      return
    }

    if (webpageFilters) {
      setSelectedFilters(webpageFilters)
    }
  }, [webpageFilters])

  // Function to filter out selected filters based on the widget parameters
  const getApplicableSelectedFilters = useCallback((isProvinceFilterable: boolean | undefined, isDistrictFilterable: boolean | undefined) => {
    return selectedFilters.filter((sf) => {
      if ((typeof isProvinceFilterable !== "undefined") && !isProvinceFilterable && (sf.widgetId === ProvinceWebPageFilterID)) {
        return false
      }

      if ((typeof isDistrictFilterable !== "undefined") && !isDistrictFilterable && (sf.widgetId === DistrictWebPageFilterID)) {
        return false
      }

      return true
    })
  }, [selectedFilters])

  return (
    <div className="dashboard-grid shadow">
      <h2 className="dashboard-title fw-semibold text-center pb-lg-5" style={{ fontFamily: 'Open Sans, sans-serif', marginBottom: dashboard.description ? "8px": "20px" }}>{dashboard.name}</h2>
      { dashboard.description && (<h4 className='dashboard-subtitle text-center'>{ dashboard.description }</h4>) }
      <div className="dashboard-grid__header justify-self-end mr-10 mb-5">Last Update at: {new Date().toLocaleTimeString()}</div>
      <div className="widget-grid">
        {dashboard.widgets.map((item, index) => (
          <div key={index} className={`widget-container flex-1`} style={{ flexBasis: `calc(1/${item.colSpan} * 100%)` }}>
            {item.widgetType === 'butterfly' && item.widgetButterfly ? (
              <CustomButterflyChart
                key={index}
                title={item.widgetButterfly.title}
                chartA={item.widgetButterfly.chartA}
                chartB={item.widgetButterfly.chartB}
              />
            ) : (
              <div className={'border  rounded-3'}>
                <div
                  className={clsx(`widget-title-wrapper flex gap-4 items-center p-3 rounded-top-3 h-[70px] overflow-hidden`, item.widget?.titleWrapperClass)} // Use flex for vertical centering
                  style={item.widget?.titleWrapperStyle}
                >
                  {item.widget?.icon && (
                    <div className="flex-shrink-0">
                      <div className={clsx(`widget-icon px-3 py-2 rounded-1`, item.widget?.iconWrapperClass)} style={item.widget?.iconWrapperStyle}>
                        {item.widget?.icon}
                      </div>
                    </div>
                  )}
                  <div className="flex-grow flex items-center justify-center"> {/* Center text vertically */}
                    <div
                      className="widget-title fira-sans-regular text-center  sm:text-sm md:text-[0.rem] lg:text-[1.0rem] 2lg:text-[1.2rem] text-gray-700" // Responsive font sizes for the title
                      style={item.widget?.titleStyle}
                    >
                      {item.widget?.title}
                    </div>
                  </div>
                </div>
                <div className={clsx(`widget-content rounded-bottom-3 position-center content-center overflow-hidden pt-[0.2rem]`)} >
                  <div className={clsx(`relative`, item.widget?.widgetContentWrapperClass)} style={{ marginTop: '-60px', ...item.widget?.widgetContentWrapperStyle }}>
                    {item.tiangDewa && <div className={`absolute w-[35px] z-5 right-[65px] top-0 bottom-[60px]`} style={{ background: item.tiangDewaColor || 'black' }}></div>}
                    {item.widget && (
                      <DashboardWidgetComponent
                        item={item}
                        selectedFilters={getApplicableSelectedFilters(item.provinceFilterable, item.districtFilterable)}
                        dashboardID={dashboard.id}
                        handleDataPointsSelected={handleDataPointsSelected} />
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default React.memo(DashboardGridComponent)