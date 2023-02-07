import { useMemo } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          primary: {
            main: "#E6EAFC",
          },
          divider: "#E9EAED",
          background: {
            default: "#E6EAFC",
            paper: "#E6EAFC",
            secondary: "#E7EBFD",
          },
          text: {
            primary: "#342D5D",
            secondary: "#8D93AE",
          },
        }
      : {
          // palette values for dark mode
          primary: {
            main: "#3E3458",
          },
          divider: "#7E729D",
          background: {
            default: "#3E3357",
            paper: "#2C265F",
            secondary: "#40355B",
          },
          text: {
            primary: "#fff",
            secondary: "#fff",
          },
        }),
  },
  typography: {
    fontFamily: "Nunito",
  },
});

const RootLayout = () => {
  const darkMode = useSelector((state) => state.theme.darkMode);
  const mode = darkMode ? "dark" : "light";

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Outlet />
    </ThemeProvider>
  );
};

export default RootLayout;
