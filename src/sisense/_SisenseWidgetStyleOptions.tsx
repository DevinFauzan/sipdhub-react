import { blue } from '@mui/material/colors';
import { DashboardWidgetStyleOptions, WidgetContainerStyleOptions } from '@sisense/sdk-ui';

export const customStyle1: DashboardWidgetStyleOptions = {
    backgroundColor: 'transparent',
    cornerRadius: 'Medium',
    height: 200,
    shadow: 'None',
    header: {
      hidden: false,
      titleAlignment: "Center",
      backgroundColor: "transparent",
      titleTextColor: "black",
      renderToolbar: () => <div></div>,
    },
  };

export const customStyle2: DashboardWidgetStyleOptions = {
    ...customStyle1,
    height: 250,
  };

export const customStyle3: DashboardWidgetStyleOptions = {
    ...customStyle1,
    height: 300,
  };

export const customStyle4: DashboardWidgetStyleOptions = {
    ...customStyle1,
    height: 350,
  };

  export const customStyle42: DashboardWidgetStyleOptions = {
    ...customStyle4,
    
    header: {
      hidden: true,
      ...customStyle4.header,
      renderToolbar: () => <div></div>,
    }
  }

  export const customStyle5: DashboardWidgetStyleOptions = {
    ...customStyle1,
    height: 400,
  };

  export const customStyle6: DashboardWidgetStyleOptions = {
    ...customStyle1,
    height: 450,
  };

  export const customStyle7: DashboardWidgetStyleOptions = {
    ...customStyle1,
    height: 500,
  };

  export const customStyle8: DashboardWidgetStyleOptions = {
    ...customStyle1,
    height: 820,
  };

  export const customStyle9: DashboardWidgetStyleOptions = {
    ...customStyle1,
    height: 450,
    backgroundColor : '#f0f9ff'
    
  };

  export const customStyle10: DashboardWidgetStyleOptions = {
    height: 450,
    backgroundColor : '#f0f9ff'
    
  };

  export const customStyle11: DashboardWidgetStyleOptions = {
    height: 1035,
    
  };

  export const customstyle12: WidgetContainerStyleOptions ={
    ...customStyle11,
    backgroundColor : '#BBB88'
    
  }