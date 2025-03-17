import React, { useEffect } from "react";
import Navbar from "./components/navbar/navbar";
import { createBrowserRouter, RouterProvider, Outlet, useNavigate } from "react-router-dom";
import InputSection from "./components/inputSection/inputSection";
import Defects from "./components/defects/defects";
import ComponentDashboard from "./components/componant-dashboard/component-dashboard";
import History from "./components/history/history";

function ErrorPage() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/", { replace: true });
  }, [navigate]);

  return null;
}

// Layout component to include Navbar once
const Layout = () => (
  <>
    <Navbar />
    <Outlet /> {/* This renders the matching child route */}
  </>
);

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Wrap all routes with Navbar
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <><InputSection /><Defects /><ComponentDashboard /></> },
      { path: "/history", element: <History /> }
    ],
  },
]);

function App() {
  return <RouterProvider router={appRouter} />;
}

export default App;
