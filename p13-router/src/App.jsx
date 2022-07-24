import {useState} from 'react';
import {Link, Route, Routes} from "react-router-dom";
import Home from '@v/Home.jsx';
import About from "@v/About.jsx";
import Profiles from "@v/Profiles.jsx";
import HistorySample from "@v/HistorySample";

function App() {


  return (
    <div className="App" data-theme="dracula">
      <section className="fixed w-full">
        <nav className="flex mb-4 p-4 gap-2 justify-center">
          <Link className="btn btn-info" to={'/'}>home</Link>
          <Link className="btn btn-info" to={'/about'}>소개 보기</Link>
          <Link className="btn btn-info" to={'/profiles'}>과일 보기</Link>
          <Link className="btn btn-info" to={'/history-sample'}>history 사용</Link>
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
      </Routes>
    </div>
  )
}

export default App
