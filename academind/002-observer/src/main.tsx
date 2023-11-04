import React from 'react'
import ReactDOM from 'react-dom/client'
import '@picocss/pico/scss/pico.scss'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import App from "./App.tsx";
import Home from "./Home.tsx";
import Observer01 from "./Observer01.tsx";
import Observer02 from "./Observer02.tsx";
import ObserverAsync from "./ObserverAsync.tsx";
import ObserveWithConstruct from "./ObserveWithConstruct.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, path: "/", element: <Home /> },
      { path: "/01", element: <Observer01 /> },
      { path: "/02", element: <Observer02 /> },
      { path: "/async", element: <ObserverAsync /> },
      { path: "/withConstructor", element: <ObserveWithConstruct /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
