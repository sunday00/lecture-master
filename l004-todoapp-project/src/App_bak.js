import React, { useCallback, useRef, useState } from 'react';
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

function App() {
  //   const [todos, setTodos] = useState([
  //     { id: 1, text: 'Learn Laravel8', checked: true },
  //     { id: 2, text: 'Learn Spring-boot', checked: false },
  //     { id: 3, text: 'Learn React and Redux', checked: true },
  //   ]);

  const [todos, setTodos] = useState(createBulkData(2500));

  const nextId = useRef(2501);

  const onInsert = useCallback((text) => {
    setTodos((todos) =>
      todos.concat({
        id: nextId.current,
        text,
        checked: false,
      }),
    );
    nextId.current++;
  }, []);

  const onToggle = useCallback((id) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo,
      ),
    );
  }, []);

  const onRemove = useCallback((id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  }, []);

  return (
    <div className="App">
      <TodoTemplate>
        <TodoInsert onInsert={onInsert}></TodoInsert>
        <TodoList
          todos={todos}
          onToggle={onToggle}
          onRemove={onRemove}
        ></TodoList>
      </TodoTemplate>
    </div>
  );
}

export default App;
