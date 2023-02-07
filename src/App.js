import React from "react";
import { useSelector } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import RootLayout from "./routes/RootLayout";
import WelcomePage from "./pages/WelcomePage";
import Layout from "./pages/Layout";

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

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

const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Layout />,
      },
      {
        path: "/welcome",
        element: <WelcomePage />,
      },
    ],
  },
]);

export default function App() {
  const darkMode = useSelector((state) => state.theme.darkMode);
  const mode = darkMode ? "dark" : "light";

  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ColorModeContext.Provider value={mode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={routes} />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
