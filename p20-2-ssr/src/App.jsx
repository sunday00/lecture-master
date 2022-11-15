import {Suspense} from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from '@c/Nav';
import RedPage from '@v/RedPage';
import BluePage from '@v/BluePage';
import { RecoilRoot } from 'recoil';
import UserPage from '@v/UserPage';
import { initRecoil } from '@/stores/share.jsx';

function App({preloads}) {
  return (
    <RecoilRoot initializeState={initRecoil(preloads)}>
      <Suspense fallback={<>loading</>}>
        <div className="App" data-theme="emerald">
          <Nav />
          <div className="hero min-h-screen">
            <Routes>
              <Route path="/" element={<RedPage />}></Route>
              <Route path="/blue" element={<BluePage />}></Route>
              <Route path="/users" element={<UserPage />}></Route>
            </Routes>
          </div>
        </div>
      </Suspense>
    </RecoilRoot>
  )
}

export default App
