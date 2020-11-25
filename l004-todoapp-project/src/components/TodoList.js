import React from 'react';
import TodoItem from './TodoItem';
import '../resources/TodoList.scss';

const TodoList = (props) => {
  return (
    <div className="TodoList">
      {props.todos.map((todo) => (
        <TodoItem
          todo={todo}
          key={todo.id}
          onToggle={props.onToggle}
          onRemove={props.onRemove}
        />
      ))}
    </div>
  );
};

export default TodoList;
