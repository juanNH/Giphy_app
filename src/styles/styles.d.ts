import "styled-components";

export interface GlobalConfigurationsProps {
  screenSize: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
}

declare module "styled-components" {
  export interface DefaultTheme extends GlobalConfigurationsProps {
    title: string;
    colors: {
      primary: string;
      secondary: string;
      third: string;
      background: string;
      white: string;
      text: string;
      green: {
        main:string;
        light:string;
      }
    };
  }
}
