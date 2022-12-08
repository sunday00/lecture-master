import { NavLink } from 'react-router-dom';

export default () => {
  return (<nav>
    <NavLink className={ a => `btn btn-info btn-xs active-${a.isActive} mr-1` } to={'/'}>home</NavLink>
    <NavLink className={ a => `btn btn-info btn-xs active-${a.isActive}` } to={'/activity'}>Activity</NavLink>
  </nav>)
}