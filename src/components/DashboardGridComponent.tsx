import React, { useCallback, useContext, useEffect, useState } from 'react';
import { IFilterState, IDashboard } from './_models';
import { DistrictWebPageFilterID, ProvinceWebPageFilterID } from './_datamodels';
import clsx from 'clsx';
import CustomButterflyChart from './CustomButterflyChart';
import { FilterContext } from '../public-profile/profiles/company copy';
import DashboardWidgetComponent from './DashboardWidgetComponent';
import FilterProvinsiKabupaten from './filter/FilterProvinsiKabupaten';
import CompanyProfile from '../public-profile/profiles/company copy/blocks/CompanyProfile';

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
  const [visibleButtons, setVisibleButtons] = useState<{ [key: string]: boolean }>({});
  const [hoveredButtons, setHoveredButtons] = useState<{ [key: string]: boolean }>({}); // Track hover state for each button

  const handleDataPointsSelected = (widgetId: string, filterable: boolean | undefined) => (dataPoints: any) => {
    if (!dataPoints?.categoryValue || !filterable) return;

    setSelectedFilters(prevFilters => {
      const existingFilterIndex = prevFilters.findIndex(
        filter =>
          (filter.widgetId === ProvinceWebPageFilterID) ||
          (filter.widgetId === DistrictWebPageFilterID) ||
          (filter.widgetId === widgetId && filter.categoryValue === dataPoints.categoryValue)
      );

      setIsSisenseTriggeredFilter(true);
      if (existingFilterIndex !== -1) {
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
        return [...prevFilters, newFilter];
      }
    });

    setVisibleButtons(prev => ({ ...prev, [widgetId]: true }));
  };

  const handleClearSelection = (widgetId: string) => {
    setSelectedFilters(prevFilters => {
      const updatedFilters = prevFilters.filter(filter => filter.widgetId !== widgetId);
      if (widgetId === ProvinceWebPageFilterID) {
        setFilterProvinsi(null);
      } else if (widgetId === DistrictWebPageFilterID) {
        setFilterKabupaten(null);
      }
      return updatedFilters;
    });

    setVisibleButtons(prev => ({ ...prev, [widgetId]: false }));
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

    if (provinceName || districtName) {
      return `${provinceName} ${districtName ? `- ${districtName}` : ''}`.trim();
    }

    return '';
  };

  return (
    <div className="dashboard-grid shadow">
      <h2 className="dashboard-title fw-semibold text-center pb-1" style={{
        fontFamily: 'Open Sans, sans-serif',
        marginBottom: dashboard.description ? "12px" : "24px",
        position: 'sticky',
        top: 0,
        backgroundColor: '#F9F9F9',
        zIndex: 900,
        padding: '10px'
      }}>
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
            errorEnabled={!!error}
          />
        )}
      </div>

      <div className="widget-grid mt-10 flex flex-wrap">
        {dashboard.widgets.map((item, index) => {
          const colSpan = item.colSpan;
          const flexBasis = `${(colSpan / 12) * 100}%`;

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
                      "widget-title-wrapper flex items-center p-3 rounded-t-lg h-16 overflow-hidden",
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
                    <div className="flex-grow flex items-center justify-between">
                      <div
                        className="widget-title text-center text-gray-900"
                        style={{
                          ...item.widget?.titleStyle,
                          fontSize: '18px',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          lineHeight: '1.5rem',
                          maxHeight: '3rem',
                          display: '-webkit-box',
                          WebkitBoxOrient: 'vertical',
                          WebkitLineClamp: 2,
                          width: 'auto',
                        }}
                      >
                        {item.widget?.title}
                        {visibleButtons[item.widget?.id ?? ''] && (
                        <button
                          className="clear-selection-button p-2 text-white rounded text-xs ml-12 transition-transform transform"
                          style={{
                            fontSize: '12px',
                            border: 'none',
                            boxShadow: hoveredButtons[item.widget?.id ?? ''] ? '0 8px 16px rgba(0, 0, 0, 0.3)' : '0 4px 8px rgba(0, 0, 0, 0.2)',
                            background: hoveredButtons[item.widget?.id ?? '']
                              ? 'linear-gradient(to bottom, #1a8b6e, #0e6a54)'
                              : 'linear-gradient(to bottom, #1d9b77, #0f7a5a)',
                            borderRadius: '8px',
                            transform: hoveredButtons[item.widget?.id ?? ''] ? 'scale(1.05)' : 'scale(1)',
                          }}
                          onMouseEnter={() => setHoveredButtons(prev => ({ ...prev, [item.widget?.id ?? '']: true }))}
                          onMouseLeave={() => setHoveredButtons(prev => ({ ...prev, [item.widget?.id ?? '']: false }))}
                          onClick={() => handleClearSelection(item.widget?.id ?? '')}
                        >
                          Clear Selection
                        </button>
                      )}
                      </div>
                      
                    </div>
                  </div>
                  <div className={clsx(`widget-content rounded-b-lg overflow-hidden `)}>
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
