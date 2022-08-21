import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { todoListState } from '@/stores/todo.jsx';

const replaceItemAtIndex = (arr, index, newValue) => {
  return [
    ...arr.slice(0, index), newValue, ...arr.slice(index + 1)
  ]
}

const removeItemAtIndex = (arr, index) => {
  return [
    ...arr.slice(0, index), ...arr.slice(index + 1)
  ]
}

const TodoItem = ({ item }) => {
  const [todoList, setTodoList] = useRecoilState(todoListState)
  const index = todoList.findIndex(t => t === item)

  const editItemText = (e) => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      text: e.target.value,
    })

    setTodoList(newList)
  }

  const toggleItemComplete = () => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      done: !item.done,
    })

    setTodoList(newList)
  }

  const deleteItem = () => {
    const newList = removeItemAtIndex(todoList, index);

    setTodoList(newList)
  }

  return (<div className="mb-4">
    <div className="form-control flex flex-row w-full max-w-md">
      <label className="label cursor-pointer flex-1">
        <input type="checkbox" checked={item.done}
               className="checkbox checkbox-primary mr-2"
               onChange={toggleItemComplete}
        />
        <span className={`label-text text-left flex-1 ${item.done ? 'todo-done' : ''}` }>{item.text}</span>
      </label>
      <button className="btn btn-error" onClick={deleteItem}>Delete</button>
    </div>
  </div>)
}

export default TodoItem