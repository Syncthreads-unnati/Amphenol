import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./pages/navbar/navbar";
import History from "./pages/history/history";
import Dashboard from "./pages/dashboard/dashboard";
import UserControl from "./pages/admin/adminDashboard";
import UserControlTable from "./components/usercontrol/usercontrolTable";

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
    <Outlet /> 
  </>
);

// Define routes
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <UserControl/>,
      },
      { path: "/history", element: <History /> },
      {path: "/usertable", element: <UserControlTable/>}
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
