import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomeLayouts from "../layouts/homeLayouts";
import HomePage from "../pages/Home/HomePage";
import Activities from "../pages/Activities/Activities";

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
        element: <Activities/>,
      }
    ]
  },
]);
export default router

