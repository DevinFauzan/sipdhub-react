import { Filter, filterFactory } from "@sisense/sdk-data";
import { DashboardWidget } from "@sisense/sdk-ui"
import React, { useEffect, useState } from "react"

import * as DM from './_datamodels';
import { IFilterState, IWidgetLayout } from "./_models"

interface IDashboardWidgetComponentProps {
  item: IWidgetLayout,
  selectedFilters: IFilterState[],

  dashboardID: string
  handleDataPointsSelected: Function
}

const DashboardWidgetComponent: React.FC<IDashboardWidgetComponentProps> = ({ item, selectedFilters, dashboardID, handleDataPointsSelected }) => {
  const [parsedFilters, setParsedFilters] = useState<Filter[]>([]);

  // Helper function to check if a widget is selected
  const isWidgetSelected = (widgetId: string) => {
    return selectedFilters.some(filter => filter.widgetId === widgetId);
  };

  useEffect(() => {
    // Convert selected filters to Sisense filter format
    if (item.widget?.dataModel) {
      const newParsedFilters = selectedFilters.map((filter) => {
        const attribute = DM[item.widget?.dataModel!][filter.attribute]

        if (attribute) {
          return filterFactory.equals(DM[item.widget?.dataModel!][filter.attribute], filter.categoryValue)
        }

        return null
      })

      setParsedFilters(newParsedFilters.filter((npf) => npf !== null))
      return
    }

    setParsedFilters(selectedFilters.map(filter =>
      filterFactory.equals(filter.attribute, filter.value)
    ));
  }, [selectedFilters]);

  return (
    <DashboardWidget
      styleOptions={{
        ...item.widget?.styleOptions,
        border: isWidgetSelected(item.widget?.id || '') ? true : undefined,
        header: {
          ...item.widget?.styleOptions?.header,
          hidden: false,
          titleAlignment: "Center",
          backgroundColor: "transparent",
          titleTextColor: "black",
          renderToolbar: () => <div></div>
        }
      }}
      title={''}
      dashboardOid={dashboardID}
      includeDashboardFilters={false}
      widgetOid={item.widget?.id!}
      onDataPointClick={handleDataPointsSelected(item.widget?.id, item.sourceFilter)}
      filters={parsedFilters}
    />
  )
}

export default DashboardWidgetComponent