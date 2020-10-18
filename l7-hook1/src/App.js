import React, { useEffect, useState } from 'react';

function App() {

  const [a, setA] = useState(0);

  const onClick = () => {
    /*
    setA( a+1 );
    setA( a+1 );
    */ // this is not worked twice.
    // react run async.

    setA((a) => a + 1);
    setA((a) => a + 1);

    console.log('click');
  }

  useEffect(() => {
    document.title = a;
  });

  return (
    <div className="App">
      <h2>{a}</h2>
      <button onClick={onClick}>click</button>
    </div>
  );
}

export default App;
