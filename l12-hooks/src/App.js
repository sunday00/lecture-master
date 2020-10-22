import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Hook1 from './Hook1';
import Hook2 from './Hook2';
import Hook3 from './Hook3';
// import Ref4 from './Ref4';
// import Ref5 from './Ref5';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ul>
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/hook1">use memo</Link>
          </li>
          <li>
            <Link to="/hook2">use callback</Link>
          </li>
          <li>
            <Link to="/hook3">use reducer</Link>
          </li>
          {/* <li>
            <Link to="/ref4">ref4</Link>
          </li>
          <li>
            <Link to="/ref5">ref5</Link>
          </li> */}
        </ul>
        <section className="contents">
          <Route exact path="/"></Route>
          <Route path="/hook1" component={Hook1}></Route>
          <Route path="/hook2" component={Hook2}></Route>
          <Route path="/hook3" component={Hook3}></Route>
          {/* <Route path="/ref4" component={Ref4}></Route>
          <Route path="/ref5" component={Ref5}></Route> */}
        </section>
      </BrowserRouter>
    </div>
  );
}

export default App;
