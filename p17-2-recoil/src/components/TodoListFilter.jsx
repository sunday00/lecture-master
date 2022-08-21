import { useRecoilState } from 'recoil';
import { todoListFilterState } from '@/stores/todo.jsx';

export default () => {
  const [filter, setFilter] = useRecoilState(todoListFilterState)

  const updateFilter = (e) => {
    setFilter(e.target.value)
  }

  return (
    <div className="text-center">
      Filter:
      <select className="select w-full max-w-xs" value={filter} onChange={updateFilter}>
        <option value='Show All'>All</option>
        <option value='Show Completed'>Completed</option>
        <option value='Show Uncompleted'>Uncompleted</option>
      </select>
    </div>
  )
}