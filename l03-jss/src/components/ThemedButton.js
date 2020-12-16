import { Button, makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  buttonA: (props) => {
    return {
      color: 'salmon',
      [theme.breakpoints.up('sm')]: {
        color: props.cool ? 'teal' : 'indigo',
      },
    };
  },
  buttonB: {
    backgroundColor: 'orange',
  },
}));

const ThemedButton = (props) => {
  const classes = useStyles(props);
  return (
    <div>
      <Button className={(classes.buttonA, classes.buttonB)}>Themed</Button>
    </div>
  );
};

export default ThemedButton;
