import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./routes/RootLayout";
import WelcomePage from "./pages/WelcomePage";
import Layout from "./pages/Layout";

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
  return <RouterProvider router={routes} />;
}
