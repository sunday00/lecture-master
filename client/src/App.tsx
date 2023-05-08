import { Nav } from '../components/layout.Nav.tsx'
import { Route } from 'wouter'
import { Create } from '../pages/Create.tsx'

function App() {
  return (<>
    <Nav></Nav>

    <Route path="/create">{Create}</Route>
  </>)
}

export default App
