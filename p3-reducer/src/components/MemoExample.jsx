import React, { useState, useMemo } from 'react';

const getAverage = (numbers) => {
  console.log('calculating...');
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState('');

  const onChange = (e) => {
    if (e.code === 'Enter') {
      onInsert(e);
      e.target.value = '';
      setNumber('');
    }
    setNumber(e.target.value);
  };

  const onInsert = (e) => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber('');
  };

  const memorizedAvg = useMemo(() => getAverage(list), [list]);

  return (
    <div>
      <input value={number} onChange={onChange} onKeyUp={onChange} />
      <button onClick={onInsert}>Insert</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <strong>Avg: </strong> {memorizedAvg}
      </div>
    </div>
  );
};

export default Average;
