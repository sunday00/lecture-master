import { useRecoilState } from 'recoil';
import { todoItemState, todoListState } from '@/store/todo.store.jsx';

function removeItemAtIndex(arr, index) {
  return [...arr.slice(0, index), ...arr.slice(index + 1)]
}

export default ({ id }) => {
  const [todoItem, setTodoItem] = useRecoilState(todoItemState(id))
  const [todoList, setTodoList] = useRecoilState(todoListState)
  const index = todoList.findIndex((listItem) => listItem === id)

  const editItemText = ({target: {value}}) => {
    setTodoItem({ ...todoItem, text: value })
  }

  const toggleItemCompletion = () => {
    setTodoItem({ ...todoItem, isCompleted: !todoItem.isCompleted })
  }

  const deleteItem = () => {
    const newList = removeItemAtIndex(todoList, index)

    setTodoList(newList)
  }

  return (
    <div className="form-control mt-2">
      <label className='input-group justify-center'>
        <span className="border border-neutral">
          <input type='checkbox' checked={todoItem.isCompleted||false} className="bg-neutral px-3" onChange={toggleItemCompletion} />
        </span>
        <input type='text' className="input input-bordered" value={todoItem.text} onChange={editItemText} />
        <button className="bg-neutral px-3" onClick={deleteItem}>X</button>
      </label>
    </div>
  )
}