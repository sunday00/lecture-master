import {createBrowserRouter, Link} from "react-router-dom";
import App from "../App.tsx";
import Home from "../page/Home.tsx";
import Foo from "../page/Foo.tsx";
import Interval01 from "../page/Interval01.tsx";
import Subject01 from "../page/Subject01.tsx";
import Filter01 from "../page/Filter01.tsx";

/**
 * @CONF: add here to more subjects
 * @description not need to update router, nav.
 * */
const routes = {
  path: "/",
  element: <App />,
  children: [
    { index: true, path: "/", element: <Home /> },
    { path: "/foo", element: <Foo /> },
    { path: "/interval01", element: <Interval01 /> },
    { path: "/subject01", element: <Subject01 /> },
    { path: "/filter01", element: <Filter01 /> },
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