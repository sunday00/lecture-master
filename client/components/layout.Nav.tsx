import { Link } from 'wouter'

export const Nav = () => {
  return (<>
    <nav>
      <ul>
        <li><Link href="/handleMessage"><a className="handleMessage">handleMessage</a></Link></li>
        <li><Link href="/chat"><a className="chat">chat</a></Link></li>
        <li><Link href="/room"><a className="room">room</a></Link></li>
      </ul>
    </nav>
  </>)
}