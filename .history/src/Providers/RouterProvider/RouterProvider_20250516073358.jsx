import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
  import Root from '../../Pages/Root/Root'

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children:{

    }
  },
]);

