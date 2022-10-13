import { RecoilRoot, atom, selector, useRecoilState, useRecoilValue } from 'recoil';
import { useState } from 'react';
import Home from '@v/Home.jsx';
import { NavLink, Route, Routes } from 'react-router-dom';
import TextCounter from '@v/TextCounter.jsx';
import TodoList from '@v/TodoList.jsx';

function App() {
  return (
    <RecoilRoot>
      <div className="App" data-theme="night">
        <section className="fixed w-full">
          <nav className="flex mb-4 p-4 gap-2 justify-center">
            <NavLink className={ a => `btn btn-info active-${a.isActive}` } to={'/'}>home</NavLink>
            <NavLink className={ a => `btn btn-info active-${a.isActive}` } to={'/text-count'}>Text-Count</NavLink>
            <NavLink className={ a => `btn btn-info active-${a.isActive}` } to={'/todo'}>Todo</NavLink>
          </nav>
        </section>
        <section>
          <div className="h-20"></div>
          <Routes>
            <Route path="/" element={<Home/>} exact={true}></Route>
            <Route path={"/text-count"} element={<TextCounter />}></Route>
            <Route path={"/todo"} element={<TodoList />}></Route>
          </Routes>
        </section>
      </div>
    </RecoilRoot>
  )
}

export default App
