import React from "react";
import ThemeProvider, {
  ThemeProviderProps,
} from "@mui/material/styles/ThemeProvider";
import { theme } from "./theme";
import { createTheme } from "@mui/material";

export interface MuiThemeProviderProps extends Partial<ThemeProviderProps> {}

export interface ThemeContextProps {
  mode: string;
  handleThemeToggle: (theme: string) => void;
}

export const ThemeContext = React.createContext<ThemeContextProps>({
  mode: localStorage.getItem("theme") || "light",
  handleThemeToggle: () => {},
});

const MuiThemeProvider: React.FC<MuiThemeProviderProps> = ({ children }) => {
  const [mode, setMode] = React.useState(
    localStorage.getItem("theme") || "light"
  );

  const [newTheme, setNewTheme] = React.useState(theme);

  React.useEffect(() => {
    if (mode === "dark")
      setNewTheme(createTheme({ palette: { mode: "dark", ...newTheme } }));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleThemeToggle = (theme: string) => {
    if (theme === "light") {
      localStorage.setItem("theme", "dark");
      setMode("dark");
      setNewTheme(createTheme({ palette: { mode: "dark", ...newTheme } }));
    } else {
      localStorage.setItem("theme", "light");
      setMode("light");
      setNewTheme(createTheme({ palette: { mode: "light", ...newTheme } }));
    }
  };

  return (
    <ThemeContext.Provider
      value={{ mode: mode, handleThemeToggle: handleThemeToggle }}
    >
      <ThemeProvider theme={newTheme}>{children}</ThemeProvider>;
    </ThemeContext.Provider>
  );
};

export default MuiThemeProvider;
