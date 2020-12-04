import React from 'react';
import { connect } from 'react-redux';
import Todos from '../components/Todos';
import { changeInput, insert, toggle, remove } from '../modules/todos';

const TodosContainer = (props) => {
  return (
    <Todos
      input={props.input}
      todos={props.todos}
      onChange={props.changeInput}
      onInsert={props.insert}
      onToggle={props.toggle}
      onRemove={props.remove}
    ></Todos>
  );
};

const mapStateToProps = (state) => ({
  input: state.todos.input,
  todos: state.todos.todos,
});

// export default TodosContainer;
export default connect(mapStateToProps, {
  changeInput,
  insert,
  toggle,
  remove,
})(TodosContainer);
