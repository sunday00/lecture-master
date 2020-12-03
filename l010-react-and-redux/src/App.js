import logo from './logo.svg';
import './App.css';
import Todos from './components/Todos';
import { Provider } from 'react-redux';
import { store } from './modules';
// import Counter from './components/Counter';
import CounterContainer from './containers/CounterContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <img
          src={logo}
          alt="react"
          style={{
            width: 100,
            animation: 'spin 1000ms infinite linear',
          }}
        ></img>
        <CounterContainer></CounterContainer>
        <hr />
        <Todos></Todos>
      </div>
    </Provider>
  );
}

export default App;
