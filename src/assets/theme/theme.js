import { createTheme } from "@material-ui/core";
import typography from "./typography";

const baseTheme = {
  breakpoints: {
    values: {
      xs: 0,
      sm: 700,
      md: 960,
      lg: 1320,
      xl: 1920,
    },
  },
  navbarHeight: "70px",
  mobileNavbarHeight: "55px",
  typography,
  overrides: {
    MuiButton: {
      root: {
        textTransform: "none",
        fontSize: "16px",
      },
      text: {
        letterSpacing: "2px",
        borderRadius: 0,
        "&:hover": {
          color: "rgb(230,230,230)",
          backgroundColor: "inherit",
        },
      },
    },
  },
};

const darkTheme = createTheme({
  palette: {
    background: {
      default: "#1A1A1A ",
      paper: "#bd3b22",
    },
    primary: {
      main: "#bd3b22",
      contrastText: "#fff",
    },
    progress: {
      main: "#bd3b22",
    },
    secondary: {
      main: "#2C394B",
      contrastText: "#fff",
    },
    text: {
      primary: "#FFF",
      secondary: "rgb(200,200,200)",
    },
    action: {
      disabled: "rgb(70,70,70)",
      disabledBackground: "rgb(150,150,150)",
    },
  },
  logoColor: "#bd3b22",
  ...baseTheme,
});

const lightTheme = createTheme({
  palette: {
    background: {
      default: "#b38a82",
    },
    primary: {
      main: "#000",
      contrastText: "#000",
    },
    progress: {
      main: "#bd3b22",
    },
    secondary: {
      main: "#a19762",
      contrastText: "rgb(230,230,230)",
    },
    text: {
      primary: "#000",
      secondary: "rgb(30,30,30)",
    },
    action: {
      disabled: "rgb(70,70,70)",
      disabledBackground: "rgb(255, 255, 255)",
    },
  },
  backgroundSecondary: {
    bg: "#6F4C5B",
    text: "rgb(230,230,230) ",
  },
  logoColor: "#ffff",
  ...baseTheme,
});

export { darkTheme, lightTheme };
