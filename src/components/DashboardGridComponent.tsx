import React, { useCallback, useContext, useEffect, useState } from 'react';
import { IFilterState, IDashboard } from './_models';
import { DistrictWebPageFilterID, ProvinceWebPageFilterID } from './_datamodels';
import clsx from 'clsx';
import CustomButterflyChart from './CustomButterflyChart';
import { CompanyProfile, FilterContext } from '../public-profile/profiles/company copy';
import DashboardWidgetComponent from './DashboardWidgetComponent';
import FilterProvinsiKabupaten from './filter/FilterProvinsiKabupaten';
// import axios from 'axios';

const DashboardGridComponent: React.FC<{ dashboard: IDashboard, webpageFilters?: IFilterState[] }> = ({ dashboard, webpageFilters }) => {
  const {
    optionsProvinsi,
    optionsKabupaten,
    filterProvinsi,
    filterKabupaten,
    setFilterProvinsi,
    setFilterKabupaten
  } = useContext(FilterContext);

  const [selectedFilters, setSelectedFilters] = useState<IFilterState[]>([]);
  const [isSisenseTriggeredFilter, setIsSisenseTriggeredFilter] = useState<boolean>(true);
  const [error] = useState<string | null>(null);

  

  const handleDataPointsSelected = (widgetId: string, filterable: boolean | undefined) => (dataPoints: any) => {
    // console.log(!dataPoints?.categoryValue)
    // console.log('Data points selected:',  !filterable);
    if (!dataPoints?.categoryValue || !filterable) return;
   
    setSelectedFilters(prevFilters => {
      const existingFilterIndex = prevFilters.findIndex(
        filter =>
          (filter.widgetId === ProvinceWebPageFilterID) ||
          (filter.widgetId === DistrictWebPageFilterID) ||
          (filter.widgetId === widgetId && filter.categoryValue === dataPoints.categoryValue)
      );
  
      setIsSisenseTriggeredFilter(true);
      console.log('existingFilterIndex', existingFilterIndex);
      if (existingFilterIndex !== -1) {
        // Remove the filter if it's already selected
        setFilterProvinsi(null);
        setFilterKabupaten(null);
        return prevFilters.filter((_, index) => index !== existingFilterIndex);
      } else {
        const provinsi = optionsProvinsi.find(op => op.value.toLowerCase() === dataPoints.categoryValue?.toLowerCase());
        if (provinsi) {
          setFilterProvinsi(provinsi);
        }
  
        const newFilter: IFilterState = {
          widgetId,
          categoryValue: dataPoints.categoryValue,
          attribute: dataPoints.entries.category[0].attribute,
          value: dataPoints.entries.category[0].value
        };
        console.log('Data points selected:', newFilter);
        return [...prevFilters, newFilter]; // Add new filter
      }
    });
  };
 

  useEffect(() => {
    if (isSisenseTriggeredFilter) {
      setIsSisenseTriggeredFilter(false);
      return;
    }

    if (webpageFilters) {
      setSelectedFilters(webpageFilters);
    }
  }, [webpageFilters]);

  const getApplicableSelectedFilters = useCallback((isProvinceFilterable: boolean | undefined, isDistrictFilterable: boolean | undefined) => {
    return selectedFilters.filter((sf) => {
      if ((typeof isProvinceFilterable !== "undefined") && !isProvinceFilterable && (sf.widgetId === ProvinceWebPageFilterID)) {
        return false;
      }

      if ((typeof isDistrictFilterable !== "undefined") && !isDistrictFilterable && (sf.widgetId === DistrictWebPageFilterID)) {
        return false;
      }

      return true;
    });
  }, [selectedFilters]);
  const getDynamicTitle = () => {
    const provinceName = filterProvinsi ? filterProvinsi.label : '';
    const districtName = filterKabupaten ? filterKabupaten.label : '';
  
    // Only return a title if at least one filter is selected
    if (provinceName || districtName) {
      return `${provinceName} ${districtName ? `- ${districtName}` : ''}`.trim();
    }
    
    return ''; // Return an empty string if no filters are selected
  };

  return (
   
      <div className="dashboard-grid shadow">
      <h2
        className="dashboard-title fw-semibold text-center pb-1"
        style={{
          fontFamily: 'Open Sans, sans-serif',
          marginBottom: dashboard.description ? "12px" : "24px",
          position: 'sticky',
          top: 0,
          backgroundColor: '#F9F9F9',
          zIndex: 1000, 
          padding: '10px' 
        }}
      >
        <span style={{ fontWeight: 'bold' }}>{dashboard.name}</span> 
        {getDynamicTitle() && <span style={{ margin: '0 10px' }}>||</span>} 
        <span>{getDynamicTitle()}</span> 
      </h2>

      {dashboard.withMap && <CompanyProfile />}

      <div className="pt-10 mr-3">
        {dashboard.withMapFilter && (
          <FilterProvinsiKabupaten
          filterProvinsi={filterProvinsi}
          setFilterProvinsi={setFilterProvinsi}
          filterKabupaten={filterKabupaten}
          setFilterKabupaten={setFilterKabupaten}
          optionsKabupaten={optionsKabupaten}
          optionsProvinsi={optionsProvinsi}
          labelClass="text-gray-700 text-sm font-bold"
          errorEnabled={!!error} // Pass error state to the component
        />
        )}
      </div>

      <div className="widget-grid mt-10 flex flex-wrap">
        {dashboard.widgets.map((item, index) => {
          const colSpan = item.colSpan; // Assuming colSpan is set to 9 or 3 for 3/4 and 1/4
          const flexBasis = `${(colSpan / 12) * 100}%`; // Calculate flex basis based on colSpan

          return (
            <div key={index} className={`widget-container`} style={{ flexBasis }}>
              {item.widgetType === 'butterfly' && item.widgetButterfly ? (
                <CustomButterflyChart
                  title={item.widgetButterfly.title}
                  chartA={item.widgetButterfly.chartA}
                  chartB={item.widgetButterfly.chartB}
                />
              ) : (
                <div className={'border rounded-lg'}>
                <div
                  className={clsx(
                    "widget-title-wrapper flex items-center p-3 rounded-t-lg h-16 overflow-hidden", // Tailwind classes
                    item.widget?.titleWrapperClass
                  )}
                  style={item.widget?.titleWrapperStyle}
                >
                  {item.widget?.icon && (
                    <div className="flex-shrink-0">
                      <div className={clsx("widget-icon px-3 py-2 rounded", item.widget?.iconWrapperClass)} style={item.widget?.iconWrapperStyle}>
                        {item.widget?.icon}
                      </div>
                    </div>
                  )}
                  <div className="flex-grow flex items-center justify-center">
                    <div
                      className="widget-title text-center text-gray-900"
                      style={{
                        ...item.widget?.titleStyle,
                        fontSize: '18px',
                        overflow: 'hidden', // Hide overflow text
                        textOverflow: 'ellipsis', // Add ellipsis for overflow text
                        lineHeight: '1.5rem', // Set line height for better vertical alignment
                        maxHeight: '3rem', // Set a maximum height for the title
                        display: '-webkit-box', // Use flexbox for multi-line text
                        WebkitBoxOrient: 'vertical', // Allow vertical orientation
                        WebkitLineClamp: 2, // Limit to 2 lines
                        width: '100%', // Ensure it takes full width
                      }}
                    >
                      {item.widget?.title}
                    </div>
                  </div>
                </div>
                <div className={clsx(`widget-content rounded-b-lg overflow-hidden`)}>
                  <div className={clsx(`relative`, item.widget?.widgetContentWrapperClass)} style={{ marginTop: '-60px', ...item.widget?.widgetContentWrapperStyle }}>
                    {item.widget && (
                      <DashboardWidgetComponent
                        item={item}
                        selectedFilters={getApplicableSelectedFilters(item.provinceFilterable, item.districtFilterable)}
                        dashboardID={dashboard.id}
                        handleDataPointsSelected={handleDataPointsSelected}
                      />
                    )}
                  </div>
                </div>
              </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default React.memo(DashboardGridComponent);
