import { NavLink } from 'react-router-dom';

export default () => {
  return (<nav>
    <NavLink className={ a => `btn btn-info mr-2 btn-xs active-${a.isActive}` } to={'/'}>home</NavLink>
    <NavLink className={ a => `btn btn-info mr-2 btn-xs active-${a.isActive}` } to={'/users'}>users</NavLink>
    <NavLink className={ a => `btn btn-info mr-2 btn-xs active-${a.isActive}` } to={'/planets'}>planets</NavLink>
    <NavLink className={ a => `btn btn-info mr-2 btn-xs active-${a.isActive}` } to={'/people'}>people</NavLink>
  </nav>)
}