import { createTheme } from "@mui/material/styles";

export const getTheme = (mode: "dark" | "light") => {
  return createTheme({
    palette: {
      mode: mode,
      primary: {
        main: mode === "dark" ? "#330000" : "#660000",
      },
      secondary: {
        main: "#edf2ff",
      },
      background:{
        default:  mode === "dark" ? '#262525' :'#e0d4d3',
      }
    },
    typography: {
      fontFamily: "inherit",
      h1: {
        fontWeight: "bold",
        fontSize: "2.5rem",
      },
      h2: {
        fontWeight: "bold",
        fontSize: "2rem",
      },
      h3: {
        fontWeight: "bold",
        fontSize: "1.5rem",
      },
      h4: {
        fontWeight: "bold",
        fontSize: "1rem",
      },
    },
  });
};
