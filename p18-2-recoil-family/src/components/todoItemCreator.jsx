import { useState } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { todoItemState, todoListState } from '@/store/todo.store.jsx';

const getId = (todoList) => todoList.length ? todoList[todoList.length - 1] + 1 : 0

export default () => {
  const [inputValue, setInputValue] = useState('')
  const [todoList, setTodoList] = useRecoilState(todoListState)
  const setTodoItem = useSetRecoilState(todoItemState(getId(todoList)))

  const addItem = (e) => {
    if(e.key && e.key !== 'Enter') return

    const newId = getId(todoList)

    setTodoItem({newId, text: inputValue, isCompleted:false})

    setTodoList((oldTodoList) => [
      ...oldTodoList,
      newId,
    ])

    setInputValue('')
  }

  const onChange = ({target: {value}}) => {
    setInputValue(value);
  }

  return (<div className="form-control">
    <label className="input-group justify-center">
      <input className='input input-bordered text-neutral-content px-8' type='text' value={inputValue} onChange={onChange} onKeyDown={addItem} />
      <button className="bg-neutral px-3" onClick={addItem}>Add</button>
    </label>
  </div>)
}
