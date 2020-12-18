import React from 'react';
import { Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ThemedApp from './components/ThemedApp';

const useStyle = makeStyles({
  root: {
    height: '100vh',
    background: 'linear-gradient(45deg, #fe688b 30%, #ff8e53 90%)',
  },
});

function App() {
  const classes = useStyle();
  return (
    <div className={`${classes.root} App`}>
      <Button color="primary" variant="contained">
        hello
      </Button>
      <Typography variant="h3" color="primary">
        ?
      </Typography>
      <ThemedApp></ThemedApp>
    </div>
  );
}

export default App;
