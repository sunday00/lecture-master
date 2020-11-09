import React from 'react';

function Content (props)
{
  return (
    <section>
      <h2>{props.content.title}</h2>
      <p>{props.content.description}</p>
    </section>
  );
}

export default Content;
