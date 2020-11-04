import React from 'react';
import Search from './services/Search';
import 'antd/dist/antd.css';
import { Route } from 'react-router-dom';
import User from './services/User';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Search}></Route>
      {/* <Route path="/Component1" render={() => <Component1 p1='aaa' p2={100} />}></Route> */}
      <Route path="/user/:name" component={User}></Route>
    </div>
  );
}

export default App;
