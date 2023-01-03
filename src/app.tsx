import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/home";
import BrewCrewPage from "./pages/brew-crew";
import ContactPage from "./pages/contact";
import MediaPage from "./pages/media";
import ShopPage from "./pages/shop";
import Layout from "./components/layout/layout";
import ErrorBoundary from "./components/error-boundary";
import StoryPage from "./pages/story";
import { ConfigProvider } from "antd";
import ParticipatingSchoolsPage from "./pages/participating-schools";
import ParticipatingBreweriesPage from "./pages/participating-breweries";
import VendorLocationsPage from "./pages/vendor-locations";

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
          path: "about",
          errorElement: <ErrorBoundary />,
          children: [
            { path: "brew-crew", element: <BrewCrewPage /> },
            { path: "story", element: <StoryPage /> },
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
          errorElement: <ErrorBoundary />,
          children: [
            {
              path: "participating-breweries",
              element: <ParticipatingBreweriesPage />,
            },
            { path: "vendor-locations", element: <VendorLocationsPage /> },
          ],
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
          colorLinkHover: "#e05353",
        },
      }}
    >
      <RouterProvider router={router} />
    </ConfigProvider>
  );
};

export default App;
