import React from 'react';
import ReducerExample from './components/ReducerExample';
import MemoExample from './components/MemoExample';

function App() {
  return (
    <div className="App">
      <section className="reducer">
        <ReducerExample></ReducerExample>
      </section>
      <section className="avg">
        <MemoExample></MemoExample>
      </section>
    </div>
  );
}

export default App;
