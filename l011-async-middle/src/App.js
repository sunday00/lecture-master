import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import store from './modules';
import CounterContainer from './containers/CounterContainer';
import SampleContainer from './containers/SampleContainer';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <div>
          <CounterContainer />
          <SampleContainer></SampleContainer>
        </div>
      </Provider>
    </div>
  );
}

export default App;
