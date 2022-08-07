import { useState } from 'react'
import { Routes, Route, NavLink } from 'react-router-dom';
import CounterContainer from '@v/CounterContainer.jsx'
import TodosContainer from '@v/TodosContainer';

function App() {


  return (
    <div className="App" data-theme="dracula">
      <nav className="flex gap-4 p-4 text-center justify-center">
        <NavLink className={ a => `btn btn-info active-${a.isActive}` } to={'/'}>Count</NavLink>
        <NavLink className={ a => `btn btn-info active-${a.isActive}` } to={'/todos'}>Todos</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<CounterContainer />} />
        <Route path="/todos" element={<TodosContainer />} />
      </Routes>
    </div>
  )
}

export default App
