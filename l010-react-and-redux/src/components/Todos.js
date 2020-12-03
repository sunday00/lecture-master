import React from 'react';

const TodoItem = (props) => {
  return (
    <div>
      <div>
        <input type="checkbox" />
        <span>do</span>
        <button>del</button>
      </div>
    </div>
  );
};

const Todos = (props) => {
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input />
        <button type="submit">submit</button>
      </form>
      <div>
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </div>
    </div>
  );
};

export default Todos;
