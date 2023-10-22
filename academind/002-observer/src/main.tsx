import React from 'react'
import ReactDOM from 'react-dom/client'
import '@picocss/pico/scss/pico.scss'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import App from "./App.tsx";
import Home from "./Home.tsx";
import Observer01 from "./Observer01.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, path: "/", element: <Home /> },
      { path: "/01", element: <Observer01 /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
