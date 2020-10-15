import React, { useState } from 'react';
import Toggler from './Toggler';

function App() {

  const [isTrue, setIsTrue] = useState(false);

  function onToggle(b){
    setIsTrue(b);
  }

  return (
    <React.Fragment>
      <p>Hello</p>
      <p>World</p>

      <Toggler onToggle={onToggle} />

      {isTrue && <h2> this can be shown when button is blue. </h2>}

    </React.Fragment>
  );
}

export default App;
