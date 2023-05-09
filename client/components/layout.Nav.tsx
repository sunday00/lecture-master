import { Link } from 'wouter'

export const Nav = () => {
  return (<>
    <nav>
      <Link href="/handleMessage"><a className="handleMessage">handleMessage</a></Link>
    </nav>
  </>)
}