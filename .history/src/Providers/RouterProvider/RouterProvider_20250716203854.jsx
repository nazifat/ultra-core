import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Home from "../../Pages/Home/Home";
import Root from '../../Pages/Root/Root';
import About from "../../Pages/About/About";
import Services from '../../Pages/Services/Services';
import Blog from '../../Pages/Blog/Blog'
import Hire from '../../Pages/Hire/Hire'
import HowItWorks from '../../Pages/HowItWorks/HowItWorks'
import SingleBlogPage from "../../Pages/Blog/SingleBlogPage";
import Contact from "../../Pages/Contact/Contact";


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
        path: "/about",
        element: <About></About>
      },
      {
        path:"/services",
        element: <Services></Services>
        
      },
      {
        path: "/why-ultracore",
        element: <CaseStudies></CaseStudies>
      },
      {
        path: "/blog",
        element: <Blog></Blog>
      },
      {
        path: "/how-it-works",
        element: <HowItWorks></HowItWorks>
      },
      {
        path: "/hire",
        element:<Hire></Hire>
      },
      {
        path: "/blog/:id",
        element: <SingleBlogPage></SingleBlogPage>

      },
      {
        path: "/contact",
        element: <Contact></Contact>
      }
    ]
  },
]);

