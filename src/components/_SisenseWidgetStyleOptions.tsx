import { DashboardWidgetStyleOptions } from '@sisense/sdk-ui';

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
    height: 550,
  };

  export const customStyle9: DashboardWidgetStyleOptions = {
    ...customStyle1,
    height: 450,
    backgroundColor : '#f0f9ff'
    
  };

  export const customStyle10: DashboardWidgetStyleOptions = {
    ...customStyle1,
    height: 650,
    
  };

  export const customStyle11: DashboardWidgetStyleOptions = {
    height: 250,
    backgroundColor : '#ffffff'
    
  };

  export const customStyle12: DashboardWidgetStyleOptions = {
    ...customStyle1,
    height: 150,
    
  };

  export const customStyle13: DashboardWidgetStyleOptions = {
    ...customStyle1,
    height: 550,
    
  };