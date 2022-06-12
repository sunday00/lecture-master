import React from 'react';
import useAddOne from './CustomHookPrac';

const CustomHookParcUsing = () => {
  const [i, addOne] = useAddOne(1);

  return (
    <>
      <p>{i}</p>
      <p>{addOne}</p>
    </>
  );
};

export default CustomHookParcUsing;
