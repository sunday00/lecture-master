import React from 'react';

export default () => {
  const items = [
    'apple',
    'banana',
    'cherry',
    'durian',
    'egg',
    'fish',
    'ginger',
  ];

  return (
    <ul>
      {items.map((i, idx) => (
        <li key={idx}>{i}</li>
      ))}
    </ul>
  );
};
