import React from 'react';
import qs from 'qs';

const User = (props) => {
  const q = qs.parse(window.location.search, {
    ignoreQueryPrefix: true,
  });
  return (
    <div>
      <h1>User</h1>
      <h2 style={{ color: q.color === 'dark' ? 'black' : 'hotpink' }}>
        {props.match.params.username}
      </h2>
    </div>
  );
};

export default User;
