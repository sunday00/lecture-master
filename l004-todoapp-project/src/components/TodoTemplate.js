import React from 'react';
import '../resources/TodoTemplate.scss';

const TodoTemplate = (props) => {
  return (
    <section className="TodoTemplate">
      <h1 className="app-title">Manage Todo list</h1>
      <div className="content">{props.children}</div>
    </section>
  );
};

export default TodoTemplate;
