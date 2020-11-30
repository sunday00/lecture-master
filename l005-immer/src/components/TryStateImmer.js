import produce from 'immer';
import React, { useState } from 'react';

const TryStateImmer = () => {
  const [val, setVal] = useState({ v: 0, b: true });

  const update = produce((draft) => {
    draft.v++;
  });

  const onClick = (e) => {
    setVal(update(val));
  };

  return (
    <div>
      <p>{val.v}</p>
      <button onClick={onClick}>CLICK</button>
    </div>
  );
};

export default TryStateImmer;
