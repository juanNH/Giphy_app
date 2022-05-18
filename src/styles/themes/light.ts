import { globalConfigurations } from "./globalConfigurations";
import { DefaultTheme } from 'styled-components';
const lightConfiguration = {
  title: "light",
  colors: {
    primary:"#1FAB89",  //"#062743",
    secondary: "#62D2A2", // "#113A5D",
    third: "#9DF3C4", // "#C4FFDD",
    background: "D7FBE8",
    white: "#F9F9F9",
    text: "#000000",
  },
};
export const light:DefaultTheme = Object.assign(lightConfiguration, globalConfigurations);