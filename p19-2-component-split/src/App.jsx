import { NavLink, Routes, Route } from 'react-router-dom';
import CodeSplit from '@v/CodeSplit';
import LazyImport from '@v/LazyImport';
import Home from '@v/Home.jsx';
import Loadable from '@v/Loadable.jsx'

function App() {
  return (
    <div className="App" data-theme="dracula">
      <nav>
        <NavLink className={ a => `btn btn-info btn-xs active-${a.isActive}` } to={'/'}>home</NavLink>
        <NavLink className={ a => `btn btn-info btn-xs active-${a.isActive}` } to={'/code-split'}>Just Code Split</NavLink>
        <NavLink className={ a => `btn btn-info btn-xs active-${a.isActive}` } to={'/lazy-import'}>Lazy import</NavLink>
        <NavLink className={ a => `btn btn-info btn-xs active-${a.isActive}` } to={'/loadable'}>loadable</NavLink>
      </nav>
      <div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/code-split" element={<CodeSplit />}></Route>
          <Route path="/lazy-import" element={<LazyImport />}></Route>
          <Route path="/loadable" element={<Loadable />}></Route>
        </Routes>
      </div>
    </div>
  )
}

export default App
