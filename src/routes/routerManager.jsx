import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomeLayouts from "../layouts/homeLayouts";
import HomePage from "../pages/Home/HomePage";
import ActivitesData from "../pages/Activities/ActivitesData";
import Team from "../pages/Team/Team";
import Publications from "../pages/Publications/Publications";

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
      },
      {
        path: "/team",
        element: <Team/>,
      },
      {
        path: "/publications",
        element: <Publications/>
      }
    ]
  },
]);
export default router

