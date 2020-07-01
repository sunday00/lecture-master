import React from 'react';

export default class Home extends React.Component
{
  constructor(props) {
    super(props);
    console.log("home");
  }

  render() {
    return (
      <div>
        <h2>HOME</h2>
      </div>
    );
  }
}
