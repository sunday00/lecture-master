import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Practice from './Practice';
import Practice2 from './Practice2';
import Practice3 from './Practice3';
// import Hook4 from './Hook4';
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
            <Link to="/hook1">P1</Link>
          </li>
          <li>
            <Link to="/hook2">P2</Link>
          </li>
          <li>
            <Link to="/hook3">P3</Link>
          </li>
          
        </ul>
        <section className="contents">
          <Route exact path="/"></Route>
          {/* <Route path="/hook1" component={Practice}></Route> */}
          <Route path="/hook1" render={() => <Practice type='gold' middleNumber={120} />}></Route>
          <Route path="/hook2" component={Practice2}></Route>
          <Route path="/hook3" component={Practice3}></Route>
        </section>
      </BrowserRouter>
    </div>
  );
}

export default App;
