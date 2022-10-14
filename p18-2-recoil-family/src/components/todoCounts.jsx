import { useRecoilValue } from 'recoil';
import { todoListStatsCounts } from '@/store/todo.store.jsx';

export default () => {
  const counts = useRecoilValue(todoListStatsCounts)

  return (<ul className="block w-64 mx-auto mb-4">
    <li>total: {counts.total}</li>
    <li>completed: {counts.completed}</li>
    <li>uncompleted: {counts.uncompleted}</li>
    <li>completedCov: {Math.round(counts.completeCov)}%</li>
  </ul>)
}