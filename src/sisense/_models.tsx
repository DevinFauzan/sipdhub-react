import { DashboardWidgetStyleOptions} from '@sisense/sdk-ui';
import { Attribute, Dimension, Filter } from '@sisense/sdk-data';
import React from 'react';
import { CustomButterflyChartProps as IWidgetButterfly } from './CustomButterflyChart';

export interface IFilterState {
    widgetId: string;
    categoryValue: string | number;
    attribute: any;
    value: any;
}

export interface IWidget {
  id: string;
  title?: string;
  titleWrapperClass?: string;
  titleStyle?: React.CSSProperties;
  titleWrapperStyle?: React.CSSProperties;
  
  icon?: React.ReactNode;
  iconWrapperClass?: string;
  iconWrapperStyle?: React.CSSProperties;

  backgroundColor?: DashboardWidgetStyleOptions;
  styleOptions?: DashboardWidgetStyleOptions;
  filters?: Filter[];

  widgetContentWrapperClass?: string;
  widgetContentWrapperStyle?: React.CSSProperties;
  widgetTittleWrapperClass?: React.CSSProperties;
  widgetTittleWrapperStyle?: React.CSSProperties;
  onFilterChange?: (filter: any) => void;

  dataModel?: string;

  chartThemeSettings?: any;
  WidgetThemeSettings?: any;
}

export interface IWidgetLayout {
  colSpan: number;
  widgetType: 'default' | 'butterfly'
  widget?: IWidget;
  widgetButterfly?: IWidgetButterfly;
  ChartThemeSettings?: any;
  filterable?: boolean;
  sourceFilter?: boolean;
  provinceFilterable?: boolean;
  districtFilterable?: boolean;
  tiangDewa?: boolean;
  tiangDewaColor?: string;
  WidgetThemeSettings?: any;

}

export interface IDashboard {
  id: string;
  // id2: string;
  name?: string;
  widgets: Array<IWidgetLayout>;
  description?: string
}

export interface DPTPemulaDisabilitasDimension extends Dimension {
  NO_PROV: Attribute;
  NAMA_PROV: Attribute;
  NO_KAB: Attribute;
  NAMA_KAB: Attribute;
}