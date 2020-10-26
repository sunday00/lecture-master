import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Component1 from './Component1';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ul>
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/Component1">Component1</Link>
          </li>
        </ul>

        <section className="contents">
          <Route exact path="/"></Route>
          {/* <Route path="/Component1" render={() => <Component1 p1='aaa' p2={100} />}></Route> */}
          <Route path="/Component1" component={Component1}></Route>
        </section>
      </BrowserRouter>
    </div>
  );
}

export default App;