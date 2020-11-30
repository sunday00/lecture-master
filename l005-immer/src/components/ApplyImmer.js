import React, { useRef, useState, useCallback } from 'react';
import { produce } from 'immer';

const ApplyImmer = () => {
  const nextId = useRef(1);
  const [form, setForm] = useState({ name: '', userName: '' });
  const [data, setData] = useState({
    array: [],
    uselessValue: null,
  });

  const firstInput = useRef();

  const onChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setForm(
        produce(form, (draft) => {
          draft[name] = value;
        }),
      );
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

      setData(
        produce(data, (draft) => {
          draft.array.push(info);
        }),
      );

      setForm({
        name: '',
        userName: '',
      });

      firstInput.current.focus();

      nextId.current++;
    },
    [data, form.name, form.userName],
  );

  const onRemove = useCallback(
    (id) => {
      setData(
        produce(data, (draft) => {
          draft.array = draft.array.filter((d) => d.id !== id);
        }),
      );
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
          ref={firstInput}
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

export default ApplyImmer;
