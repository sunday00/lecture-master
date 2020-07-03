import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';

import Frag from './Frag';
import Ref from './Ref';
import LazyImport from './LazyImport';
import Cont from './Cont';
import ErrorBound from './ErrorBound';
import HOC from './HOC';

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
            <NavLink to="/etc1/frag" activeStyle={activeStyle}>
              input
            </NavLink>
          </li>
          <li style={navStyle}>
            <NavLink to="/etc1/ref" activeStyle={activeStyle}>
              ref
            </NavLink>
          </li>
          <li style={navStyle}>
            <NavLink to="/etc1/lazyImport" activeStyle={activeStyle}>
              lazyImport
            </NavLink>
          </li>
          <li style={navStyle}>
            <NavLink to="/etc1/context" activeStyle={activeStyle}>
              context
            </NavLink>
          </li>
          <li style={navStyle}>
            <NavLink to="/etc1/error" activeStyle={activeStyle}>
              error
            </NavLink>
          </li>
          <li style={navStyle}>
            <NavLink to="/etc1/hoc" activeStyle={activeStyle}>
              HOC
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
              <Route path="/etc1/frag" component={Frag} />
              <Route path="/etc1/ref" component={Ref} />
              <Route path="/etc1/lazyImport" component={LazyImport} />
              <Route path="/etc1/context" component={Cont} />
              <Route path="/etc1/error" component={ErrorBound} />
              <Route path="/etc1/hoc" component={HOC} />

            </Switch>
        </section>
      );
    }
  }