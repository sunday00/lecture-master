import { useCallback, useState } from 'react';

const TodoItem = ({ todo, onToggle, onRemove}) => {
  return (<div className="mb-4">
    <div className="form-control flex flex-row w-full max-w-md">
      <label className="label cursor-pointer flex-1">
        <input type="checkbox" checked={todo.done}
         className="checkbox checkbox-primary mr-2"
         onChange={() => onToggle(todo.id)}
        />
        <span className={`label-text text-left flex-1 ${todo.done ? 'todo-done' : ''}` }>{todo.text}</span>
      </label>
      <button className="btn btn-error" onClick={() => onRemove(todo.id)}>Delete</button>
    </div>
  </div>)
}

export default TodoItem
