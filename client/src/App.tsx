import { Nav } from '../components/layout.Nav.tsx'
import { Route } from 'wouter'
import { HandleMessage } from '../pages/HandleMessage.tsx'
import { Chat } from '../pages/Chat.tsx'

const App = () => {
  return (<>
    <Nav></Nav>

    <Route path="/handleMessage" component={HandleMessage} />
    <Route path="/chat" component={Chat} />
  </>)
}

export default App
