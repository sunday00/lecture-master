import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Ref1 from './Ref1';
import Ref2 from './Ref2';
import Ref3 from './Ref3';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ul>
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/ref1">ref1</Link>
          </li>
          <li>
            <Link to="/ref2">ref2</Link>
          </li>
          <li>
            <Link to="/ref3">ref3</Link>
          </li>
        </ul>
        <section className="contents">
          <Route exact path="/"></Route>
          <Route path="/ref1" component={Ref1}></Route>
          <Route path="/ref2" component={Ref2}></Route>
          <Route path="/ref3" component={Ref3}></Route>
        </section>
      </BrowserRouter>
    </div>
  );
}

export default App;
