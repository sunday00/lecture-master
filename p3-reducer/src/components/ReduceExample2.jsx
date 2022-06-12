import React, { useReducer } from 'react';

const reducer = (state, action) => {
  let n = state.currentVal;

  switch (action.name) {
    case 'inc': // some logic ...
      n += 1;
      break;
    case 'dec': // some logic ...
      n -= 1;
      break;
  }

  return {
    ...state,
    currentVal: n,
  };
};

export default () => {
  const [state, dispatch] = useReducer(reducer, {
    name: '',
    age: '',
    currentVal: 10,
  });

  const handleClick = (e) => {
    dispatch(e.target);
  };

  return (
    <div>
      <button name="inc" onClick={handleClick}>
        +
      </button>
      <button name="dec" onClick={handleClick}>
        -
      </button>
      <p>{state.currentVal}</p>
    </div>
  );
};
