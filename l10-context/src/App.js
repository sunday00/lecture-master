import React, { createContext, useState } from 'react';
import Basic from './components/Basic';
import ContextUsed from './components/ContextUsed';
import { Context } from './contexts/Context';

function App() {
  const [name, setName] = useState('dark knight');

  return (
    <div className="App">
      <Basic name="joker"></Basic>
      <Context.Provider value={name}>
        <ContextUsed></ContextUsed>
        <input type="text" value={name} onChange={e => setName(e.target.value)} />
      </Context.Provider>
    </div>
  );
}

export default App;
