import React, { useRef, useState, useCallback } from 'react';

const NoImmer = () => {
  const nextId = useRef(1);
  const [form, setForm] = useState({ name: '', userName: '' });
  const [data, setData] = useState({
    array: [],
    uselessValue: null,
  });

  const onChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setForm({
        ...form,
        [name]: [value],
      });
    },
    [form],
  );

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const info = {
        id: nextId.current,
        name: form.name,
        userName: form.userName,
      };

      setData({
        ...data,
        array: data.array.concat(info),
      });

      setForm({
        name: '',
        userName: '',
      });

      nextId.current++;
    },
    [data, form.name, form.userName],
  );

  const onRemove = useCallback(
    (id) => {
      setData({
        ...data,
        array: data.array.filter((info) => info.id !== id),
      });
    },
    [data],
  );

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          name="userName"
          placeholder="id"
          value={form.userName}
          onChange={onChange}
        />
        <input
          name="name"
          placeholder="name"
          value={form.name}
          onChange={onChange}
        />
        <button type="submit">SUBMIT</button>
      </form>
      <div>
        <ul>
          {data.array.map((info) => (
            <li key={info.id} onClick={() => onRemove(info.id)}>
              {info.userName} ({info.name})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NoImmer;
