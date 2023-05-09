import { Nav } from '../components/layout.Nav.tsx'
import { Route } from 'wouter'
import { HandleMessage } from '../pages/HandleMessage.tsx'

function App() {
  return (<>
    <Nav></Nav>

    <Route path="/handleMessage">{HandleMessage}</Route>
  </>)
}

export default App
