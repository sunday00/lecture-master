import { useState } from 'react';
import Home from '@v/Home.jsx';

function App() {

  const handleClick = (e) => {
    import('./utils/notify.js')
      .then(res => res.default())
  }

  return (
    <div className="App" data-theme="dracula">
      {/*<Home />*/}
      <p onClick={handleClick}>Hello react</p>
    </div>
  )
}

export default App
