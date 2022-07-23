import { useState } from 'react';
import { Route, Routes } from "react-router-dom";
import Home from '@v/Home.jsx';
import About from "@v/About.jsx";
import Profile from "@v/Profile.jsx";

function App() {


  return (
    <div className="App" data-theme="dracula">
      <Routes>
        <Route path="/" element={<Home />} exact={true}></Route>
        <Route path={"/about"} element={<About />}></Route>
        <Route path={"/info"} element={<About />}></Route>
        {/* https://velog.io/@soryeongk/ReactRouterDomV6 */}
        {/* https://stackoverflow.com/questions/70228810/having-multiple-paths-to-the-same-component-in-react-router-dom-v6 */}
        <Route path={"/profile/:username"} element={<Profile />}></Route>
      </Routes>
    </div>
  )
}

export default App
