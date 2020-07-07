import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';

import Frag from './Fragment';
import Portals from './Portals';
import RenderProp from './RenderProp';
import Typecheck from './Typecheck';
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
            <NavLink to="/etc2/frag" activeStyle={activeStyle}>
              frag
            </NavLink>
          </li>
          <li style={navStyle}>
            <NavLink to="/etc2/portals" activeStyle={activeStyle}>
              portals
            </NavLink>
          </li>
          <li style={navStyle}>
            <NavLink to="/etc2/renderProp" activeStyle={activeStyle}>
              renderProp
            </NavLink>
          </li>
          <li style={navStyle}>
            <NavLink to="/etc2/typecheck" activeStyle={activeStyle}>
              typecheck
            </NavLink>
          </li>
          <li style={navStyle}>
            <NavLink to="/etc2/file" activeStyle={activeStyle}>
              file
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
              <Route path="/etc2/renderProp" component={RenderProp} />
              <Route path="/etc2/typecheck" component={Typecheck} />
              <Route path="/etc2/file" component={File} />
              

            </Switch>
        </section>
      );
    }
  }