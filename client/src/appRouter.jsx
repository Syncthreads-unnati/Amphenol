import React from "react";
import { createBrowserRouter } from "react-router-dom";
import {Layout} from "./App";
// import ErrorPage from "./ErrorPage";
import History from "./pages/history/history";
import Dashboard from "./pages/dashboard/dashboard";
import UserControl from "./pages/admin/adminDashboard";
import UserControlTable from "./components/usercontrol/usercontrolTable";
import SystemControl from "./components/systemControl/systemcontrol";
import Login from "./components/login/login";
import FingerprintLogin from "./components/fingerprintlogin/fingerprintlogin";
function ErrorPage() {
  React.useEffect(() => {
    window.location.replace("/"); // Redirect to home page
  }, []);

  return null;
}
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/fingerprintlogin",
        element: <FingerprintLogin />,
      },
      {
        path: "/usercontrol",
        element: <UserControl />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/history",
        element: <History />,
      },
      {
        path: "/usertable",
        element: <UserControlTable />,
      },
      {
        path: "/systemcontrol",
        element: <SystemControl />,
      },
    ],
  },
]);

export default appRouter;
