import './App.css';
import logo from './logo.svg';

import React, { Component } from 'react';

export default class App2 extends Component {
  state = {
    SplitMe: null,
  };

  handleClick = async () => {
    const loadedModule = await import('./components/SplitMe');
    this.setState({
      SplitMe: loadedModule.default,
    });
  };

  render() {
    const { SplitMe } = this.state;
    return (
      <div className="App">
        <img src={logo} alt="logo" onClick={this.handleClick} />
        {SplitMe && <SplitMe />}
      </div>
    );
  }
}
