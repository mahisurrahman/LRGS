import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomeLayouts from "../layouts/homeLayouts";
import HomePage from "../pages/Home/HomePage";
import Activities from "../pages/Activities/Activities";
import ActivitesData from "../pages/Activities/ActivitesData";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayouts/>,
    children:[
      {
        path: "/",
        element: <HomePage/>,
      },
      {
        path: "/activities",
        element: <ActivitesData/>,
      }
    ]
  },
]);
export default router

