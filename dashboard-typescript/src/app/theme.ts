import { DefaultTheme } from "styled-components";
const theme: DefaultTheme = {
  colors: {
    primary: "#135846",
    primaryLight: "#ebf1ef",
    colorIconsNavBar: "#8a9f92",
    secondaryRed: "#e23428",
    secondary20: "#e2342820",
    green: "#5ad07a",
    background: "#f8f8f8",
    inactiveTabs: "#767676",
    barInactiveTabs: "#d4d4d4",
    textColor: "#262626",
    light: "#799283",
    white: "#FFFFFF"
  },
  font: "'Poppins', sans-serif",
  fontSizes: {
    xs: "0.5rem",
    sm: "1rem",
    md: "2rem",
    lg: "3rem"
  },
  boxShadow: {
    dirY: "0 4px 8px #58565617",
    md: "0 4px 8px #58565675",
    dirX: "4px 0 24px #58565617"
  },
  breakpoint: {
    up: {
      xs: "(min-width: 320px)",
      sm: "(min-width: 475px)",
      md: "(min-width: 768px)",
      lg: "(min-width: 1024px)",
      xl: "(min-width: 1280px)",
    },
    down: {
      xs: "(max-width: 320px)",
      sm: "(max-width: 475px)",
      md: "(max-width: 768px)",
      lg: "(max-width: 1024px)",
      xl: "(max-width: 1280px)",
    }
  }
};
// const darkTheme = {
//   background: "#171717",
//   navBar: "#202020",
//   btnGrey: "#3d3d3d"
// };
export { theme };
