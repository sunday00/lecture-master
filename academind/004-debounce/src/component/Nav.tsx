import {createBrowserRouter, Link} from "react-router-dom";
import App from "../App.tsx";
import Home from "../page/Home.tsx";
import Debounce01 from "../page/Dabounce01.tsx";
import Debounce02 from "../page/Dabounce02.tsx";

/**
 * @CONF: add here to more subjects
 * @description not need to update router, nav.
 * */
const routes = {
  path: "/",
  element: <App />,
  children: [
    { index: true, path: "/", element: <Home /> },
    { path: "/debounce01", element: <Debounce01 /> },
    { path: "/debounce02", element: <Debounce02 /> },
  ],
}

// INFO: router
export const router = createBrowserRouter([routes]);

// INFO: nav
export const Nav = () => {
  return (<nav style={{display: 'flex', justifyContent: 'start', gap: '1em'}}>
    { routes.children.map((r, i) => (
        <Link key={i} to={r.path}>{r.element.type.name}</Link>
    ))}
  </nav>)
}