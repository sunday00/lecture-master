import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const MyComponent = ({ name, hotNumber, children }) => {
  return (
    <Fragment>
      <div>Beautiful</div>
      <div>Inherit from parent value : {name}</div>
      {children}
      <div>
        <div>hotNumber : {hotNumber}</div>
      </div>
    </Fragment>
  );
};

MyComponent.defaultProps = {
  name: 'default name',
};

MyComponent.propTypes = {
  name: PropTypes.string,
  hotNumber: PropTypes.number.isRequired,
};

export default MyComponent;
