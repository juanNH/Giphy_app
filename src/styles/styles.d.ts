import "styled-components";

export interface GlobalConfigurationsProps {
  screenSize: {
    small: string;
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
    };
  }
}