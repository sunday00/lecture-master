import React from 'react';
import Header from './components/Header'
import HeaderAbove from './components/Header-above'
import Game from './components/Game'

function App() {
  return (
    <div className="App container">
      <Header></Header>
      <HeaderAbove></HeaderAbove>
      <Game></Game>
    </div>
  );
}

export default App;
