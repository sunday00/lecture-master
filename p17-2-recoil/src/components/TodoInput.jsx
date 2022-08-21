import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { todoListState } from '@/stores/todo.jsx';

let id = 3;
function getId () {
  return ++id;
}

export default () => {
  const [value, setValue] = useState('')
  const setTodoList = useSetRecoilState(todoListState)

  const addItem = (e) => {
    e.preventDefault()

    setTodoList(state => [
      ...state,
      {
        id: getId(),
        text: value,
        done: false,
      }
    ])

    setValue('')
  }

  const onChange = (e) => {
    setValue(e.target.value)
  }

  return (
    <form  className="w-full max-w-md mx-auto" onSubmit={addItem}>
      <div className="input-group w-full justify-center">
        <input type="text" placeholder="input here"
               className="input input-bordered input-md w-full max-w-md"
               value={value} onChange={onChange}
          />
        <button className="btn w-20" onClick={addItem}>submit</button>
      </div>
    </form>
  )
}
