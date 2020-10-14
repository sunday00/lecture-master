import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Room from './Room';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ul>
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/photo">photo</Link>
          </li>
          <li>
            <Link to="/room">room</Link>
          </li>
        </ul>
        <section className="contents">
          <Route exact path="/" component={Home}></Route>
          <Route path="/photo" component={Photo}></Route>
          <Route path="/room" component={Room}></Route>
        </section>
      </BrowserRouter>
    </div>
  );
}

function Home(){
  return <h2>Home</h2>
}
function Photo(){
  return <h2>Photo</h2>
}

export default App;
