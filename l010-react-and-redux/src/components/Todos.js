import React from 'react';

const TodoItem = (props) => {
  return (
    <div>
      <div>
        <input
          type="checkbox"
          onClick={() => props.onToggle(props.todo.id)}
          checked={props.todo.done}
          readOnly={true}
        />
        <span
          style={{ textDecoration: props.todo.done ? 'line-through' : 'none' }}
        >
          {props.todo.text}
        </span>
        <button onClick={() => props.onRemove(props.todo.id)}>del</button>
      </div>
    </div>
  );
};

const Todos = (props) => {
  const onSubmit = (e) => {
    e.preventDefault();
    props.onInsert(props.input);
    props.onChange('');
  };

  const onChange = (e) => {
    props.onChange(e.target.value);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={props.input} onChange={onChange} />
        <button type="submit">submit</button>
      </form>
      <div>
        {props.todos.map((todo) => (
          <TodoItem
            todo={todo}
            key={todo.id}
            onToggle={props.onToggle}
            onRemove={props.onRemove}
          />
        ))}
      </div>
    </div>
  );
};

export default Todos;
