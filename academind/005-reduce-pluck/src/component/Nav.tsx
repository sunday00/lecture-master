import {createBrowserRouter, Link} from "react-router-dom";
import App from "../App.tsx";
import Home from "../page/Home.tsx";
import Reduce from "../page/Reduce.tsx";
import Scan from "../page/Scan.tsx";
import Pluck from "../page/Pluck.tsx";

/**
 * @CONF: add here to more subjects
 * @description not need to update router, nav.
 * */
const routes = {
  path: "/",
  element: <App />,
  children: [
    { index: true, path: "/", element: <Home /> },
    { path: "/reduce", element: <Reduce /> },
    { path: "/scan", element: <Scan /> },
    { path: "/pluck", element: <Pluck /> },
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
