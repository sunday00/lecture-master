import { makeStyles, Button } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles({
  buttonA: {
    color: (props) => (props.cool ? 'indigo' : 'darkorange'),
  },
});

const DynamicalButton = (props) => {
  const classes = useStyles(props);
  return (
    <div>
      <Button className={classes.buttonA}>DYNAMIC</Button>
    </div>
  );
};

export default DynamicalButton;
