import React from 'react';
import {
  MdCheckBox,
  MdCheckBoxOutlineBlank,
  MdRemoveCircleOutline,
} from 'react-icons/md';
import cn from 'classnames';
import '../resources/TodoItem.scss';

const TodoItem = (props) => {
  const { checked } = props.todo;

  return (
    <div className="TodoItem">
      <div
        className={cn('checkbox', { checked })}
        onClick={(e) => props.onToggle(props.todo.id)}
      >
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className="text">{props.todo.text}</div>
      </div>
      <div
        className="remove"
        onClick={() => {
          props.onRemove(props.todo.id);
        }}
      >
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
};

export default TodoItem;
