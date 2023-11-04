import React from 'react'
import ReactDOM from 'react-dom/client'
import '@picocss/pico/scss/pico.scss'
import {RouterProvider} from "react-router-dom";
import {router} from "./component/Nav.tsx";



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
