import { useCallback, useState } from 'react';

const TodoItem = ({ todo, onToggle, onRemove}) => {
  const [checked, setChecked] = useState(false)

  const toggleChecked = useCallback(() => {
    setChecked(!checked)
  }, [checked])

  return (<div className="mb-4">
    <div className="form-control flex flex-row w-full max-w-md">
      <label className="label cursor-pointer flex-1">
        <input type="checkbox" checked={checked}
         className="checkbox checkbox-primary mr-2"
         onChange={toggleChecked}
        />
        <span className="label-text text-left flex-1">Example</span>
      </label>
      <button className="btn btn-error">Delete</button>
    </div>
  </div>)
}

export default TodoItem
