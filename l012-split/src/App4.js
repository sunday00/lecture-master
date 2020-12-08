import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import loadable from '@loadable/component';

const SplitMe = loadable(() => import('./components/SplitMe'), {
  fallback: <div>loading...</div>,
});

function App3() {
  const [visible, setVisible] = useState(false);

  const onClick = (e) => {
    setVisible(true);
  };

  const onMouseOver = () => {
    SplitMe.preload();
  };

  return (
    <div className="App">
      <img
        src={logo}
        alt="logo"
        width="100px"
        onClick={onClick}
        onMouseOver={onMouseOver}
      />
      {visible && <SplitMe />}
    </div>
  );
}

export default App3;
