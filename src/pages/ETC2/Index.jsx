import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';

import Frag from './Fragment';
import Portals from './Portals';


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
            <NavLink to="/etc2/frag" activeStyle={activeStyle}>
              frag
            </NavLink>
          </li>
          <li style={navStyle}>
            <NavLink to="/etc2/portals" activeStyle={activeStyle}>
              portals
            </NavLink>
          </li>

        </ul>
        <hr/>
      </div>
    );
  }
  
  export default class Index extends React.Component
  {
    render(){
      return(
        <section>
          <Menu />
            <Switch>
              <Route path="/etc2/frag" component={Frag} />
              <Route path="/etc2/portals" component={Portals} />
              

            </Switch>
        </section>
      );
    }
  }