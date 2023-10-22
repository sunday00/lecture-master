import {Link, Outlet} from "react-router-dom";


function App() {
  return (
    <>
      <main>
        <nav style={{display: 'flex', justifyContent: 'start', gap: '1em'}}>
          <li>
            <Link to={'/'}>Home</Link>
          </li>
          <li>
            <Link to={'/01'}>01</Link>
          </li>
        </nav>
        <Outlet />
      </main>
    </>
  )
}

export default App
