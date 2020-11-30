import React, { useState } from 'react';

const PromiseExample = () => {
  const [number, setNumber] = useState(0);

  const increase = (n) => {
    const promise = new Promise((suc, fai) => {
      setTimeout(() => {
        const result = n + 10;
        if (result > 50) {
          const e = new Error('Too big');
          return fai(e);
        }
        suc(result);
      }, 1000);
    });
    return promise;
  };

  const onClick = async (e) => {
    let n = await increase(number);
    console.log(n);
    n = await increase(n);
    console.log(n);
    n = await increase(n);
    console.log(n);
    n = await increase(n);
    console.log(n);
    n = await increase(n);
    console.log(n);
  };

  return (
    <>
      <div>{number}</div>
      <button onClick={onClick}>start</button>
    </>
  );
};

export default PromiseExample;
