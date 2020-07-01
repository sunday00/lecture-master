import React from 'react'
import { Route, Switch, NavLink } from 'react-router-dom';

import InputBasic from './InputBasic';
import Select from './Select';
import File from './File';

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
          <NavLink to="/form/input" activeStyle={activeStyle}>
            input
          </NavLink>
        </li>
        <li style={navStyle}>
          <NavLink to="/form/select" activeStyle={activeStyle}>
            select
          </NavLink>
        </li>
        <li style={navStyle}>
          <NavLink to="/form/file" activeStyle={activeStyle}>
            file
          </NavLink>
        </li>
      </ul>
      <hr/>
    </div>
  );
}

export default class Form extends React.Component
{
  render(){
    return(
      <section>
        <Menu />
          <Switch>
            <Route path="/form/input" component={InputBasic} />
            <Route path="/form/select" component={Select} />
            <Route path="/form/file" component={File} />
          </Switch>
      </section>
    );
  }
}