import { useState } from 'react';
import './App.css';
import EventPractice from './Components/EventPractice.jsx';
import LoopExam from './Components/LoopExam';
import Visible from './Components/LifeCycle/Visible';

function App() {
  return (
    <div className="App">
      <section className="evt">
        <h1>EVENT</h1>
        <EventPractice></EventPractice>
      </section>
      <section className="loop">
        <LoopExam></LoopExam>
      </section>
      <section>
        <Visible></Visible>
      </section>
    </div>
  );
}

export default App;
