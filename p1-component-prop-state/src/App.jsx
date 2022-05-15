import React from 'react';
import './App.css';
import MyComponent from './Components/MyComponent';
import Say from './Components/Say';

function App() {
  const a = 'hello';
  let b;
  const style = {
    color: 'red',
    backgroundColor: 'blue',
  };

  return (
    <div className="App">
      {/* comment */}
      <h1>{a} React!!</h1>
      <h2>This is made with Vite</h2>
      <div style={style}>{b || 'default'}</div>
      <div style={{ color: 'blue' }} className="alpha">
        <MyComponent name="AHHA" hotNumber={3}>
          === this is equals slot
        </MyComponent>
      </div>
      <Say></Say>
    </div>
  );
}

export default App;
