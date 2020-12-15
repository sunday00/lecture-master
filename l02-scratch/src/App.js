import React from 'react';
import { Grid } from '@material-ui/core';

function App() {
  return (
    <Grid container direction="column">
      <Grid item>HEADER</Grid>
      <Grid item container>
        <Grid item xs={false} sm={2} />
        <Grid item xs={12} sm={8}>
          this is where the content will bethis is where the content will bethis
          is where the content will bethis is where the content will bethis is
          where the content will bethis is where the content will bethis is
          where the content will be
        </Grid>
        <Grid item xs={false} sm={2} />
      </Grid>
    </Grid>
  );
}

export default App;
