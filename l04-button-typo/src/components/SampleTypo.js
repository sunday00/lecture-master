import { colors, makeStyles, Typography } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import React from 'react';

const useStyles = makeStyles({
  typoType1: {
    color: 'mediumslateblue',
    width: '80%',
    margin: '0 auto',
  },
});

const theme = createMuiTheme({
  palette: {
    primary: {
      light: colors.amber[700],
      main: colors.amber[500],
      dark: colors.amber[300],
    },
    secondary: {
      light: colors.orange[700],
      main: colors.orange[500],
      dark: colors.orange[300],
    },
  },
  typography: {
    subtitle1: {
      color: 'green',
      fontSize: '2rem',
    },
  },
});

const SampleTypo = () => {
  const classes = useStyles();

  return (
    <div>
      <Typography variant="h2" className={classes.typoType1}>
        Hello example
      </Typography>
      <Typography noWrap className={classes.typoType1} color="primary">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, sed.
        Omnis non modi consequuntur dolores pariatur, sed, vitae eveniet
        praesentium temporibus cupiditate incidunt minus placeat laborum
        mollitia assumenda nostrum itaque?
      </Typography>
      <ThemeProvider theme={theme}>
        <Typography>this is default text</Typography>
        <Typography color="primary">this is themed text</Typography>
        <Typography color="secondary">this is themed text</Typography>
        <Typography variant="subtitle1">this is themed text</Typography>
      </ThemeProvider>
    </div>
  );
};

export default SampleTypo;
