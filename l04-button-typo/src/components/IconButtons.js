import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import AlarmIcon from '@material-ui/icons/Alarm';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import WcIcon from '@material-ui/icons/Wc';

export const IconButtons = () => {
  return (
    <div>
      <IconButton aria-label="delete">
        <DeleteIcon />
      </IconButton>
      <IconButton aria-label="delete" disabled color="primary">
        <DeleteIcon />
      </IconButton>
      <IconButton color="secondary" aria-label="add an alarm">
        <AlarmIcon />
      </IconButton>
      <IconButton color="primary" aria-label="add to shopping cart">
        <AddShoppingCartIcon />
      </IconButton>
      <IconButton style={{ color: 'gold' }} aria-label="WC" size="small">
        <WcIcon size="small" />
      </IconButton>
      <IconButton style={{ color: 'gold' }} aria-label="WC" size="medium">
        <WcIcon />
      </IconButton>
    </div>
  );
};
