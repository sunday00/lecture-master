import { useRecoilState } from 'recoil';
import { todoListState } from '@/store/todo.store.jsx';

function replaceItemAtIndex(arr, index, newValue) {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)]
}

function removeItemAtIndex(arr, index) {
  return [...arr.slice(0, index), ...arr.slice(index + 1)]
}

export default ({ item }) => {
  const [todoList, setTodoList] = useRecoilState(todoListState)
  const index = todoList.findIndex((listItem) => listItem === item)

  const editItemText = ({target: {value}}) => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      text: value,
    })

    setTodoList(newList)
  }

  const toggleItemCompletion = () => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      isComplete: !item.isComplete,
    })

    setTodoList(newList)
  }

  const deleteItem = () => {
    const newList = removeItemAtIndex(todoList, index)

    setTodoList(newList)
  }

  return (
    <div className="form-control mt-2">
      <label className='input-group justify-center'>
        <span className="border border-neutral">
          <input type='checkbox' checked={item.isComplete} className="bg-neutral px-3" onChange={toggleItemCompletion} />
        </span>
        <input type='text' className="input input-bordered" value={item.text} onChange={editItemText} />
        <button className="bg-neutral px-3" onClick={deleteItem}>X</button>
      </label>
    </div>
  )
}