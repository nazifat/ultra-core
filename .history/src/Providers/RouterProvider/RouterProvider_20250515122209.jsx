import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
  import Root from '../../Pages/Root/Root'

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
  },
]);

