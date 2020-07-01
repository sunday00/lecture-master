import React from 'react';
import { Route, Switch, BrowserRouter, NavLink } from 'react-router-dom';

import Home from './pages/Home/Home';
import Clock from './pages/Clock/Clock';
import Click from './pages/Click/Click';
import Cond from './pages/Cond/Cond';
import Loop from './pages/Loop/Loop';
import Form from './pages/Form/Form';
// load component file

const items = [
  { name : 'Home',  component:Home, path: '/', option : {exact: true} },
  { name : 'Clock', component:Clock, path: '/clock' },
  { name : 'Click', component:Click, path: '/click' },
  { name : 'Cond',  component:Cond, path: '/condition', option: { params: { key:'isShow', val:'true' } } },
  { name : 'Loop',  component:Loop, path: '/loop' },
  { name : 'Form',  component:Form, path: '/form' },
  // register component
];

const Menu = () => {
  const activeStyle = {
    color: 'cornflowerblue',
    fontWeight: 'bold',
    textDecoration: 'underline'
  };

  const ulStyle = {
    width: '100%',
    overflow: 'auto'
  }

  const navStyle = {
    color: 'gray',
    float: 'left',
    marginRight: '10px',
    listStyle: 'none'
  }

  function makePath(path, option){
    if (option && option.params) return `${path}/${option.params.val}`;
    return path;
  }

  function makeLiElement(item){
    let path = makePath(item.path, item.option);
    return <li style={navStyle} key={item.name}>
      <NavLink to={ path }
        exact={item.option && item.option.exact}
        activeStyle={activeStyle}>
        {item.name}
      </NavLink>
    </li>
  }

  return (
      <div>
          <ul style={ulStyle}>
              { items.map((item) => {
                return makeLiElement(item);
              }) }
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

  makePath(path, option){
    if (option && option.params) return `${path}/${option.params.val}`;
    return path;
  }

  makeView(item){
    return <Route
    path={this.makePath(item.path, item.option)} 
    exact={item.option && item.option.exact}
    component={item.component} 
    key={item.name} 
   />
  }

  render() {
    return (
      <BrowserRouter>
        <Menu />
        <section>
          <Switch>
            { items.map((item) => this.makeView(item) ) }
          </Switch>
        </section>
      </BrowserRouter>
    );
  }
}
