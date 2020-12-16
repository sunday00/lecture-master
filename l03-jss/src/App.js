import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core';
import DynamicalButton from './components/DynamicalButton';
import ThemedButton from './components/ThemedButton';

const useStyles = makeStyles({
  buttonA: {
    color: 'tomato',
  },
  textA: {
    color: 'lightgreen',
  },
});

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <Button className={classes.buttonA}>SMALL BUTTON</Button>
      <h3 className={classes.textA}>TEXT</h3>
      <DynamicalButton cool={true}></DynamicalButton>
      <ThemedButton cool={true}></ThemedButton>
    </div>
  );
}

export default App;
