import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { todoListState } from '@/store/todo.store.jsx';

let id = 0;
const getId = () => id++

export default () => {
  const [inputValue, setInputValue] = useState('')
  const setTodoList = useSetRecoilState(todoListState)

  const addItem = () => {
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id: getId(),
        text: inputValue,
        isComplete: false,
      }
    ])
  }

  const onChange = ({target: {value}}) => {
    setInputValue(value);
  }

  return (<div className="form-control">
    <label className="input-group justify-center">
      <input className='input input-bordered text-neutral-content px-8' type='text' value={inputValue} onChange={onChange} />
      <button className="bg-neutral px-3" onClick={addItem}>Add</button>
    </label>
  </div>)
}
