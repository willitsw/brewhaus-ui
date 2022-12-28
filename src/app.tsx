import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/home";
import BrewCrewPage from "./pages/brew-crew";
import ContactPage from "./pages/contact";
import MediaPage from "./pages/media";
import ShopPage from "./pages/shop";
import WhereToBuyPage from "./pages/where-to-buy";
import Layout from "./components/layout/layout";
import ErrorBoundary from "./components/error-boundary";
import StoryPage from "./pages/story";
import { ConfigProvider } from "antd";
import ParticipatingSchoolsPage from "./pages/participating-schools";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorBoundary />,
      children: [
        {
          path: "home",
          element: <HomePage />,
          errorElement: <ErrorBoundary />,
        },
        {
          path: "brew-crew",
          errorElement: <ErrorBoundary />,
          children: [
            { path: "", element: <BrewCrewPage /> },
            {
              path: "participating-schools",
              element: <ParticipatingSchoolsPage />,
            },
          ],
        },
        {
          path: "contact",
          element: <ContactPage />,
          errorElement: <ErrorBoundary />,
        },
        {
          path: "media",
          element: <MediaPage />,
          errorElement: <ErrorBoundary />,
        },
        {
          path: "shop",
          element: <ShopPage />,
          errorElement: <ErrorBoundary />,
        },
        {
          path: "where-to-buy",
          element: <WhereToBuyPage />,
          errorElement: <ErrorBoundary />,
        },
        {
          path: "story",
          element: <StoryPage />,
          errorElement: <ErrorBoundary />,
        },
      ],
    },
  ]);

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#e05353",
          colorLink: "#e05353",
          colorSuccess: "#52c41a",
          colorWarning: "#faad14",
          colorError: "#f5222d",
        },
      }}
    >
      <RouterProvider router={router} />
    </ConfigProvider>
  );
};

export default App;
