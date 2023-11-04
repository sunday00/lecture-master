import {createBrowserRouter, Link} from "react-router-dom";
import App from "../App.tsx";
import Home from "../page/Home.tsx";
import Merge from "../page/Merge.tsx";
import SwitchMap from "../page/SwitchMap.tsx";
import StateSubject from "../page/StateSubject.tsx";
import BehaviorSubjectComponent from "../page/BehaviorSubject.tsx";

/**
 * @CONF: add here to more subjects
 * @description not need to update router, nav.
 * */
const routes = {
  path: "/",
  element: <App />,
  children: [
    { index: true, path: "/", element: <Home /> },
    { path: "/merge", element: <Merge /> },
    { path: "/switch", element: <SwitchMap /> },
    { path: "/s-subject", element: <StateSubject /> },
    { path: "/b-subject", element: <BehaviorSubjectComponent /> },
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
