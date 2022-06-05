import React, { useState, useEffect } from 'react';
import Counter from './Counter';

const Visible = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <button onClick={() => setVisible(!visible)}>
        {visible ? 'hide' : 'show'}
      </button>

      <hr />

      {visible && <Counter />}
    </div>
  );
};

export default Visible;
