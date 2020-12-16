import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import AcUnitRoundedIcon from '@material-ui/icons/AcUnitRounded';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
  typographyStyles: {
    flex: 1,
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.typographyStyles}>
            This is Header
          </Typography>
          <AcUnitRoundedIcon />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
