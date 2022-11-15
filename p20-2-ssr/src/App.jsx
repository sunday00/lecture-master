import { Routes, Route } from 'react-router-dom';
import Nav from '@c/Nav';
import RedPage from '@v/RedPage';
import BluePage from '@v/BluePage';
import Users from '@v/Users'
import { RecoilRoot } from 'recoil';

function App() {


  return (
    <RecoilRoot>
      <div className="App" data-theme="emerald">
        <Nav />
        <div className="hero min-h-screen">
          <Routes>
            <Route path="/" element={<RedPage />}></Route>
            <Route path="/blue" element={<BluePage />}></Route>
            <Route path="/users" element={<Users />}></Route>
          </Routes>
        </div>
      </div>
    </RecoilRoot>
  )
}

export default App
