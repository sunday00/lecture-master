import React, { useState } from 'react';
import FunctionalApp from './compare/FunctionalApp';
import ClassStyleApp from './compare/ClassStyleApp';

function App() {


  return (
    <>
      <FunctionalApp initNumber={2}></FunctionalApp>
      <ClassStyleApp initNumber={2}></ClassStyleApp>
    </>
  );
}

export default App;
