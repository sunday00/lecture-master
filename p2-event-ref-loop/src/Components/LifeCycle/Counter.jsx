import React, { useState, useEffect, useReducer } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { value: state.value + 1 };
    case 'DECREMENT':
      return { value: state.value - 1 };
    default:
      return state;
  }
};

const Counter = () => {
  // const [value, setValue] = useState(0);
  const [state, dispatch] = useReducer(reducer, { value: 0 });

  useEffect(() => {
    console.log('effect');
    return () => {
      console.log('clear' + state.value);
    };
  }, []);

  return (
    <div>
      {/* <p>{value}</p> */}
      <p>{state.value}</p>
      {/* <button onClick={() => setValue(value + 1)}>+</button>
      <button onClick={() => setValue(value - 1)}>-</button> */}
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
    </div>
  );
};

export default Counter;
