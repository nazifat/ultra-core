import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Home from "../../Pages/Home/Home";
import Root from '../../Pages/Root/Root';
import About form '../../Pages/About/About';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/",
        element: <About></About>
      }
    ]
  },
]);

