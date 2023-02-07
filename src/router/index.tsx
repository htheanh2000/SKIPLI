import {
    createBrowserRouter,
  } from "react-router-dom";
  import HomePage from '../pages/public/home';
  import VerifyPage from '../pages/public/verify';
  import DashboardPage from '../pages/private/dashboard'
  import PrivateRoute  from "./protectedRoute";
  export const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage/>,
    },
    {
      path: "/verify",
      element: <VerifyPage/>,
    },
    {
      path: "/dashboard",
      element: <PrivateRoute><DashboardPage/></PrivateRoute>,
    },
  ]);
  