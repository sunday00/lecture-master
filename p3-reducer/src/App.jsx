import React from 'react';
import ReducerExample from './components/ReducerExample';
import MemoExample from './components/MemoExample';
import ReduceExample2 from './components/ReduceExample2';
import UsingCustomHook from './components/UsingCustomHook';
import CustomHookParcUsing from './components/CustomHookPracUsing';

function App() {
  return (
    <div className="App">
      <section className="reducer">
        <ReducerExample></ReducerExample>
      </section>
      <section className="avg">
        <MemoExample></MemoExample>
      </section>
      <section>
        <ReduceExample2></ReduceExample2>
      </section>
      <section>
        <UsingCustomHook></UsingCustomHook>
      </section>
      <section>
        <CustomHookParcUsing></CustomHookParcUsing>
      </section>
    </div>
  );
}

export default App;
