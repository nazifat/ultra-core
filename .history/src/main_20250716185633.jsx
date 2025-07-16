import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { router } from './Providers/RouterProvider/RouterProvider'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import {

  RouterProvider
} from "react-router-dom";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />

    </HelmetProvider>

  </StrictMode>,
)
