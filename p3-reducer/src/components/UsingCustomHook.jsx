import React from 'react';
import useInput from './CustomHook';

const UsingCustomHook = () => {
  const [state, handleChange] = useInput({
    name: '',
    age: 0,
  });

  const { name, age } = state;

  return (
    <>
      <input type="text" name="name" value={name} onChange={handleChange} />
      <input type="number" name="age" value={age} onChange={handleChange} />

      <p>{name}</p>
      <p>{age}</p>
    </>
  );
};

export default UsingCustomHook;
