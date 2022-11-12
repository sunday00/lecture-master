import { NavLink } from 'react-router-dom';

export default () => {
  return (
    <nav>
      <NavLink className={ a => `btn btn-info btn-xs active-${a.isActive}` } to={'/'}>red</NavLink>
      <NavLink className={ a => `btn btn-info btn-xs active-${a.isActive}` } to={'/blue'}>blue</NavLink>
    </nav>
  )
}