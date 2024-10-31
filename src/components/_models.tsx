import { DashboardWidgetStyleOptions} from '@sisense/sdk-ui';
import { Filter } from '@sisense/sdk-data';

export interface IFilterState {
    widgetId: string;
    categoryValue: string;
    attribute: any;
    value: any;
}

export interface IDashboard {
    id: string;
    name: string;
    widgets: Array<{
      id: string;
      colSpan: number;

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
  
  
      onFilterChange?: (filter: any) => void;
    }>;
  }