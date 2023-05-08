import { Link } from 'wouter'

export const Nav = () => {
  return (<>
    <nav>
      <Link href="/create"><a className="create">Create</a></Link>
    </nav>
  </>)
}