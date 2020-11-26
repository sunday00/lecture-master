import React, { useCallback, useReducer, useRef, useEffect } from 'react';
import './App.css';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';

import faker from 'faker';
// dev
function createBulkData(length) {
  return [...Array(length).keys()].map((k) => ({
    id: k,
    text: faker.name.jobTitle(),
    checked: faker.random.boolean(),
  }));
}
//

function todoReducer(todos, action) {
  switch (action.type) {
    case 'INSERT':
      return todos.concat(action.todo);
    case 'TOGGLE':
      return todos.map((todo) =>
        todo.id === action.id ? { ...todo, checked: !todo.checked } : todo,
      );
    case 'REMOVE':
      return todos.filter((todo) => todo.id !== action.id);
    default:
      return todos;
  }
}

function App() {
  //   const [todos, setTodos] = useState([
  //     { id: 1, text: 'Learn Laravel8', checked: true },
  //     { id: 2, text: 'Learn Spring-boot', checked: false },
  //     { id: 3, text: 'Learn React and Redux', checked: true },
  //   ]);

  // const [todos, setTodos] = useState(createBulkData(2500));
  const [todos, dispatch] = useReducer(todoReducer, undefined, () =>
    createBulkData(2500),
  );

  const nextId = useRef(2501);

  const listDom = useRef();

  useEffect(() => {
    listDom.current.scrollToRow(todos.length - 1);
  }, [todos]);

  const onInsert = useCallback((text) => {
    dispatch({
      type: 'INSERT',
      todo: {
        id: nextId.current,
        text,
        checked: false,
      },
    });
    nextId.current++;
  }, []);

  const onToggle = useCallback((id) => dispatch({ type: 'TOGGLE', id }), []);

  const onRemove = useCallback((id) => dispatch({ type: 'REMOVE', id }), []);

  return (
    <div className="App">
      <TodoTemplate>
        <TodoInsert onInsert={onInsert}></TodoInsert>
        <TodoList
          todos={todos}
          onToggle={onToggle}
          onRemove={onRemove}
          ref={listDom}
        ></TodoList>
      </TodoTemplate>
    </div>
  );
}

export default App;
