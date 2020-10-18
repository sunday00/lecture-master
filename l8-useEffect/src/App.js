import React, { useState } from 'react';
import Profile from './Profile';
import Profile2 from './Profile2';
import Size from './Size';

function App() {
  const [userId, setUserId] = useState(0);
  const [canIRender, setCanIRender] = useState(false);

  function onClick1 () {
    setUserId(userId + 1);
  }

  function onClick2 () {
    setUserId(userId + 1);
    setCanIRender(true);
  }

  function onClick3 () {
    setUserId(userId + 1, false);
    setCanIRender(false);
  }

  return (
    <div className="App">
      <Profile userId={userId} canIRender={canIRender}></Profile>
      <Profile2 userId={userId} canIRender={canIRender}></Profile2>
      <button onClick={onClick1}>get another user</button>
      <button onClick={onClick2}>get another user + canIRender true</button>
      <button onClick={onClick3}>get another user + canIRender false</button>

      <Size></Size>
    </div>
  );
}

export default App;
