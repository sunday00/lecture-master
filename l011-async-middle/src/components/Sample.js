import React from 'react';

const Sample = (props) => {
  return (
    <div>
      <section>
        <h1>POST</h1>
        {props.loadingPost && 'loading...'}
        {!props.loadingPost && props.post && (
          <div>
            <h3>{props.post.title}</h3>
            <h3>{props.post.body}</h3>
          </div>
        )}
      </section>
      <hr />
      <section>
        <h1>Users</h1>
        {props.loadingUsers && 'loading'}
        {!props.loadingUsers && props.users && (
          <ul>
            {props.users.map((user) => (
              <li key={user.id}>{user.username}</li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
};

export default Sample;
