import React, { useEffect } from "react";
import Navbar from "./components/navbar/navbar";
import {
  BrowserRouter as Router,
  createBrowserRouter,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import InputSection from "./components/inputSection/inputSection";
import DefectTable from "./components/defectTable/defectTable";
import Defects from "./components/defects/defects";
import ComponentDashboard from "./components/componant-dashboard/component-dashboard";
function App() {

  // const ErrorPage = () => {
  //   const navigate = useNavigate();
  //   useEffect(() => {
  //     navigate("/", { replace: true });
  //   }, [navigate]);

  //   return null;
  // };

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
        <Navbar />
        <InputSection />
        <Defects />
        <ComponentDashboard/>
        </>
      ),

      // errorElement: <ErrorPage />,
    },
  ]);

  return (
    <>
      <RouterProvider router={appRouter}></RouterProvider>
    </>
  );
}

export default App;
