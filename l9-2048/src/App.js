import React from 'react';
import Header from './components/Header'
import HeaderAbove from './components/Header-above'
import Game from './components/Game'
import { useState } from 'react';

function App() {
  const [score, setScore] = useState(0);
  return (
    <div className="App container">
      <Header score={score} best="2222"></Header>
      <HeaderAbove></HeaderAbove>
      <Game setScore={setScore}></Game>
    </div>
  );
}

export default App;
