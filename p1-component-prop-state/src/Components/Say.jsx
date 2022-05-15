import React, { useState } from 'react';

const Say = () => {
  const [msg, setMsg] = useState('Hello');
  const [color, setColor] = useState('magenta');
  const [arr, setArr] = useState([1, 2, 3, 4]);

  const handleClickEnter = () => {
    setMsg('Hello');
  };

  const handleClickExit = () => {
    setMsg('Bye');
  };

  return (
    <div>
      <button onClick={handleClickEnter}>Enter</button>
      <button onClick={handleClickExit}>Exit</button>
      <p style={{ color: color }}>{msg}</p>
      <button onClick={() => setColor('pink')}>PINK</button>
      <button onClick={() => setColor('purple')}>PURPLE</button>
      <p>{arr.map((a) => a + ', ')}</p>
      <button onClick={() => setArr([...arr, arr[arr.length - 1] + 1])}>
        +
      </button>
    </div>
  );
};

export default Say;
