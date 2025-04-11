import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useLocation,
} from "react-router-dom";
import Navbar from "./pages/navbar/navbar";
import appRouter from "./appRouter";

// Layout component to include Navbar once
export function Layout() {
  const location = useLocation();

  // List of paths where Navbar should NOT be shown
  const noNavbarPaths = ["/"];

  const shouldShowNavbar = !noNavbarPaths.includes(location.pathname);
  return (
    <>
      {shouldShowNavbar && <Navbar />}
      <Outlet />
    </>
  );
}

function App() {
  // // Redirect to "/" if the user reloads on another path
  // if (window.location.pathname !== "/") {
  //   window.location.replace("/");
  // }

  return <RouterProvider router={appRouter} />;
}

export default App;
