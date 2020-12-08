import logo from './logo.svg';
import './App.css';
import React, { useState, Suspense } from 'react';

const SplitMe = React.lazy(() => import('./components/SplitMe'));

function App3() {
  const [visible, setVisible] = useState(false);

  const onClick = (e) => {
    setVisible(true);
  };
  return (
    <div className="App">
      <img src={logo} alt="logo" width="100px" onClick={onClick} />
      <Suspense fallback={<div>loading...</div>}>
        {visible && <SplitMe></SplitMe>}
      </Suspense>
    </div>
  );
}

export default App3;
