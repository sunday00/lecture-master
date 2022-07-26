import {useState} from 'react';
import { NavLink, Route, Routes } from "react-router-dom";
import Home from '@v/Home.jsx';
import About from "@v/About.jsx";
import Profiles from "@v/Profiles.jsx";
import HistorySample from "@v/HistorySample";
import WithSample from "@v/WithSample";

function App() {


  return (
    <div className="App" data-theme="city">
      <section className="fixed w-full">
        <nav className="flex mb-4 p-4 gap-2 justify-center">
          <NavLink className={ a => `btn btn-info active-${a.isActive}` } to={'/'}>home</NavLink>
          <NavLink className={ a => `btn btn-info active-${a.isActive}` } to={'/about'}>소개 보기</NavLink>
          <NavLink className={ a => `btn btn-info active-${a.isActive}` } to={'/profiles'}>과일 보기</NavLink>
          <NavLink className={ a => `btn btn-info active-${a.isActive}` } to={'/history-sample'}>history 사용</NavLink>
          <NavLink className={ a => `btn btn-info active-${a.isActive}` } to={'/with-sample'}>with 사용</NavLink>
        </nav>
      </section>
      <Routes>
        <Route path="/" element={<Home/>} exact={true}></Route>
        <Route path={"/about"} element={<About/>}></Route>
        <Route path={"/info"} element={<About/>}></Route>
        {/* https://velog.io/@soryeongk/ReactRouterDomV6 */}
        {/* https://stackoverflow.com/questions/70228810/having-multiple-paths-to-the-same-component-in-react-router-dom-v6 */}
        {/*<Route path={"/profile/:username"} element={<Profile />}></Route>*/}
        <Route path={"/profiles/*"} element={<Profiles />}></Route>
        <Route path={"/history-sample"} element={<HistorySample />}></Route>
        <Route path={"/with-sample"} exact element={<WithSample />}></Route>
        <Route path={"/with-sample/:id"} element={<WithSample />}></Route>
      </Routes>
    </div>
  )
}

export default App
