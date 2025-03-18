import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./pages/navbar/navbar";
import InputSection from "./components/inputSection/inputSection";
import Defects from "./components/defects/defects";
import ComponentDashboard from "./components/componant-dashboard/component-dashboard";
import History from "./pages/history/history";

function ErrorPage() {
  React.useEffect(() => {
    window.location.replace("/"); // Redirect to home page
  }, []);

  return null;
}

// Layout component to include Navbar once
const Layout = () => (
  <>
    <Navbar />
    <Outlet /> {/* This renders the matching child route */}
  </>
);

// Define routes
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <><InputSection /><Defects /><ComponentDashboard /></> },
      { path: "/history", element: <History /> }
    ],
  },
]);

function App() {
  // Redirect to "/" if the user reloads on another path
  if (window.location.pathname !== "/") {
    window.location.replace("/");
  }

  return <RouterProvider router={appRouter} />;
}

export default App;
