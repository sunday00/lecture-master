import { Routes, Route } from 'react-router-dom';
import Nav from '@c/Nav';
import RedPage from '@v/RedPage';
import BluePage from '@v/BluePage';

function App() {


  return (
    <div className="App" data-theme="emerald">
      <Nav />
      <div className="hero min-h-screen">
        <Routes>
          <Route path="/" element={<RedPage />}></Route>
          <Route path="/blue" element={<BluePage />}></Route>
        </Routes>
      </div>
    </div>
  )
}

export default App
