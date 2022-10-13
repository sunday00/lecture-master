import { useRecoilValue } from 'recoil';
import { todoListStatsCounts } from '@/store/todo.store.jsx';

export default () => {
  const counts = useRecoilValue(todoListStatsCounts)

  return (<ul className="block w-64 mx-auto mb-4">
    <li>{counts.total}</li>
    <li>{counts.completed}</li>
    <li>{counts.uncompleted}</li>
    <li>{counts.completeCov}%</li>
  </ul>)
}