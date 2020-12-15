import React from 'react';
import { Button, Typography } from '@material-ui/core';
import { ThemeProvider, makeStyles } from '@material-ui/core/styles';
import theme from './theme';

const useStyles = makeStyles({
  myStyle: {
    fontStyle: 'oblique',
  },
  myShadow: {
    boxShadow: '2px 2px 3px gray',
  },
});

function App() {
  return (
    <div className="App">
      <Typography variant="h2" color="primary" className={useStyles().myStyle}>
        <h2>Hello material ui</h2>
      </Typography>

      <ThemeProvider theme={theme}>
        <Button
          variant="outlined"
          fullWidth
          color="secondary"
          className={useStyles().myShadow}
        >
          Button
        </Button>
      </ThemeProvider>
    </div>
  );
}

export default App;
