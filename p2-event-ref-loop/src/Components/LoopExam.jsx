import React, { useState } from 'react';

export default () => {
  const [items, setItems] = useState([
    { id: 1, name: 'apple' },
    { id: 2, name: 'banana' },
    { id: 3, name: 'cherry' },
    { id: 4, name: 'durian' },
    { id: 5, name: 'egg' },
    { id: 6, name: 'fish' },
    { id: 7, name: 'ginger' },
  ]);

  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setItems([
      ...items,
      {
        id: items[items.length - 1].id + 1,
        name: value,
      },
    ]);
    setValue('');
  };

  const handleRemove = (id) => {
    setItems(items.filter((i) => i.id !== id));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={handleChange} />
        <input type="submit" value="ADD" />
      </form>
      <ul>
        {items.map((i) => (
          <li key={i.id} onDoubleClick={() => handleRemove(i.id)}>
            {i.name}
          </li>
        ))}
      </ul>
    </>
  );
};
