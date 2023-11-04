import {Outlet} from "react-router-dom"
import {Nav} from "./component/Nav.tsx";

function App() {
  return (
    <>
      <main>
        <Nav />
        <Outlet />
      </main>
    </>
  )
}

export default App
