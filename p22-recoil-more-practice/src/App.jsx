import { Routes, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Home from '@v/Home.jsx';
import Nav from "@c/Nav.jsx";
import Activity from '@v/Activity';

function App() {


  return (
    <RecoilRoot>
      <div className="App" data-theme="dracula">
        <Nav />
        <div>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/activity" element={<Activity />}></Route>
          </Routes>
        </div>
      </div>
    </RecoilRoot>
  )
}

export default App
