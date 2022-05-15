import { useState } from 'react';
import './App.css';
import EventPractice from './Components/EventPractice.jsx';
import LoopExam from './Components/LoopExam';

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
    </div>
  );
}

export default App;
