import {Link, Outlet} from "react-router-dom";


function App() {
  return (
    <>
      <main>
        <nav style={{display: 'flex', justifyContent: 'start', gap: '1em'}}>
          <li><Link to={'/'}>Home</Link></li>
          <li><Link to={'/01'}>01</Link></li>
          <li><Link to={'/02'}>02</Link></li>
          <li><Link to={'/async'}>async</Link></li>
          <li><Link to={'/withConstructor'}>withConstructor</Link></li>
        </nav>
        <Outlet />
      </main>
    </>
  )
}

export default App
