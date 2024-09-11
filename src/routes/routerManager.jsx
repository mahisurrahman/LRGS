import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomeLayouts from "../layouts/homeLayouts";
import HomePage from "../pages/Home/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayouts/>,
    children:[
      {
        path: "/",
        element: <HomePage/>,
      }
    ]
  },
]);
export default router

