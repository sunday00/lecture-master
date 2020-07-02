import React from 'react'
import { Route, Switch, NavLink } from 'react-router-dom';

import Basic from './Basic';
import Specialize from './Specialize';
import Dialog from './Dialog';

const Menu = () => {
  
  const navStyle = {
    color: 'gray',
    marginRight: '10px',
    listStyle: 'none'
  }

  const activeStyle = {
    fontWeight:'bold',
    color: 'tomato'
  }

  return (
    <div>
      <ul>
        <li style={navStyle}>
          <NavLink to="/inherit/basic" activeStyle={activeStyle}>
            basic
          </NavLink>
        </li>
        <li style={navStyle}>
          <NavLink to="/inherit/specialize" activeStyle={activeStyle}>
            specialize
          </NavLink>
        </li>
        <li style={navStyle}>
          <NavLink to="/inherit/dialog" activeStyle={activeStyle}>
            dialog
          </NavLink>
        </li>
      </ul>
      <hr/>
    </div>
  );
}

export default class Inherit extends React.Component
{
  render(){
    return(
      <section>
        <Menu />
          <Switch>
            <Route path="/inherit/basic" component={Basic} />
            <Route path="/inherit/specialize" component={Specialize} />
            <Route path="/inherit/dialog" component={Dialog} />
          </Switch>
      </section>
    );
  }
}