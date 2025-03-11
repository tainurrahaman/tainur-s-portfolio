import { createBrowserRouter } from "react-router-dom";
import Main from "../Homelayout/Main";
import Banner from "../Components/Banner";
import About from "../Components/About";
import Home from "../Homelayout/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      // {
      //   path: "about",
      //   element: <About></About>,
      // },
    ],
  },
]);

export default router;
