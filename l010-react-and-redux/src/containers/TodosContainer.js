import React, { useCallback } from 'react';
// import { connect } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
import Todos from '../components/Todos';
import { changeInput, insert, toggle, remove } from '../modules/todos';

const TodosContainer = (props) => {
  const state = useSelector((state) => ({
    input: state.todos.input,
    todos: state.todos.todos,
  }));

  const dispatch = useDispatch();

  const onChange = useCallback((input) => dispatch(changeInput(input)), [
    dispatch,
  ]);
  const onInsert = useCallback((text) => dispatch(insert(text)), [dispatch]);
  const onToggle = useCallback((id) => dispatch(toggle(id)), [dispatch]);
  const onRemove = useCallback((id) => dispatch(remove(id)), [dispatch]);

  // return (
  //   <Todos
  //     input={props.input}
  //     todos={props.todos}
  //     onChange={props.changeInput}
  //     onInsert={props.insert}
  //     onToggle={props.toggle}
  //     onRemove={props.remove}
  //   ></Todos>
  // );

  return (
    <Todos
      input={state.input}
      todos={state.todos}
      onChange={onChange}
      onInsert={onInsert}
      onToggle={onToggle}
      onRemove={onRemove}
    ></Todos>
  );
};

// const mapStateToProps = (state) => ({
//   input: state.todos.input,
//   todos: state.todos.todos,
// });

export default TodosContainer;
// export default connect(mapStateToProps, {
//   changeInput,
//   insert,
//   toggle,
//   remove,
// })(TodosContainer);
