import { Nav } from '../components/layout.Nav.tsx'
import { Route } from 'wouter'
import { HandleMessage } from '../pages/HandleMessage.tsx'
import { Chat } from '../pages/Chat.tsx'
import { Room } from '../pages/Room.tsx'

const App = () => {
  return (<>
    <Nav></Nav>

    <Route path="/handleMessage" component={HandleMessage} />
    <Route path="/chat" component={Chat} />
    <Route path="/room" component={Room} />
  </>)
}

export default App
