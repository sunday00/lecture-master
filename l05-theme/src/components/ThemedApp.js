import React from 'react';
import {
  ThemeProvider,
  createMuiTheme,
  makeStyles,
  useTheme,
} from '@material-ui/core/styles';
import { green, red } from '@material-ui/core/colors';
import { Button, Paper } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#44942e',
    },
    secondary: green,
  },
});

const useStyles = makeStyles((theme) => ({
  button: {
    [theme.breakpoints.up('xs')]: {
      backgroundColor: 'gold',
    },
  },
}));

const CustomSpacedButton = (props) => {
  const theme = useTheme();
  return (
    <div style={{ margin: theme.spacing }}>
      {/* <Button>HI</Button> not work */}
      HI
    </div>
  );
};

const dark = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

const ThemedApp = (props) => {
  const classes = useStyles();
  // const themeObj = useTheme();
  return (
    <>
      <ThemeProvider theme={theme}>
        <Button color="primary">HI</Button>
        <Button color="secondary">HI</Button>
      </ThemeProvider>
      <Button className={classes.button}>HI</Button>
      {/* <Button style={{ marginTop: themeObj.spacing() }}>HI</Button> */}
      <ThemeProvider theme={{ spacing: '3px' }}>
        <CustomSpacedButton></CustomSpacedButton>
      </ThemeProvider>

      <ThemeProvider theme={dark}>
        <Paper>
          HI
          <Button>HI</Button>
        </Paper>
      </ThemeProvider>
    </>
  );
};

export default ThemedApp;
