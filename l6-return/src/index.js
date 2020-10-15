import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import App from './App';
import App2 from './App2';

function Home () {
  return  <h1>Home</h1>
}

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <ul>
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/app1">return1</Link>
          </li>
          <li>
            <Link to="/app2">portal</Link>
          </li>
        </ul>
        <section className="contents">
          <Route exact path="/" component={Home}></Route>
          <Route path="/app1" component={App}></Route>
          <Route path="/app2" component={App2}></Route>
        </section>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

