import { useRecoilState } from 'recoil';
import { todoListFilterState } from '@/store/todo.store.jsx';

export default () => {
  const [filter, setFilter] = useRecoilState(todoListFilterState)

  const updateFilter = ({target}) => {
    setFilter(target.value)
  }

  return (<div className="flex justify-center">
    <label className="">Filter:
      <select className="select select-bordered w-64 pl-8 pr-16 ml-2 mb-2" value={filter} onChange={updateFilter}>
        <option value='All'>All</option>
        <option value='Completed'>Completed</option>
        <option value='UnCompleted'>UnCompleted</option>
      </select>
    </label>
  </div>)
}