import React from 'react';
import { Route, Switch, BrowserRouter, NavLink } from 'react-router-dom';

import Home from './pages/Home/Home';
import Clock from './pages/Clock/Clock';
import Click from './pages/Click/Click';
import Cond from './pages/Cond/Cond';

const Menu = () => {
  const activeStyle = {
    color: 'blue',
    fontWeight: 'bold',
    textDecoration: 'underline'
  };

  const ulStyle = {
    width: '100%',
    overflow: 'auto'
  }

  const navStyle = {
    float: 'left',
    marginRight: '10px',
    listStyle: 'none'
  }

  return (
      <div>
          <ul style={ulStyle}>
              <li style={navStyle}><NavLink to="/" exact activeStyle={activeStyle}>Home</NavLink></li>
              <li style={navStyle}><NavLink to="/clock" activeStyle={activeStyle}>Clock</NavLink></li>
              <li style={navStyle}><NavLink to="/click" activeStyle={activeStyle}>Click</NavLink></li>
              <li style={navStyle}><NavLink to="/condition" activeStyle={activeStyle}>Condition</NavLink></li>
          </ul>
          <hr/>
      </div>
  );
};

export default class App extends React.Component
{
  constructor(props) {
    super(props);
    console.log('MOUNTED');
  }

  render() {
    return (
      <BrowserRouter>
        <Menu />
        <section>
          <Switch>
            <Route path="/clock" component={Clock} />
            <Route path="/click" component={Click} />
            <Route path="/condition/:isShow" component={Cond} />
            <Route path="/" component={Home} />
          </Switch>
        </section>
      </BrowserRouter>
    );
  }
}
