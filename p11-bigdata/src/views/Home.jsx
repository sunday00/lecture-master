import {useCallback, useRef, useState} from 'react';

const Home = () => {
  const nextId = useRef(1);
  const [form, setForm] = useState({name: '', username: ''});
  const [data, setData] = useState({
    array: [],
    uselessValue: null,
  });

  const onChange = useCallback(
    (e) => {
      const {name, value} = e.target;
      setForm({
        ...form,
        [name]: [value],
      });
    },
    [form]
  );

  const onSubmit = useCallback((e) => {
    e.preventDefault();
    const info = {
      id: nextId.current,
      name: form.name,
      username: form.username,
    };

    setData({
      ...data,
      array: data.array.concat(info),
    });

    setForm({name: '', username: ''});

    nextId.current++;
  }, [data, form.name, form.username]);

  const onRemove = useCallback((id) => {
    setData({
      ...data,
      array: data.array.filter((info) => info.id !== id),
    });
  }, [data]);

  return (
    <div className="home-wrap">
      <form onSubmit={onSubmit}>
        <input name="username" placeholder="id" className="input input-bordered input-primary w-full max-w-xs" value={form.username} onChange={onChange} />
        <input name="name" placeholder="name" className="input input-bordered input-primary w-full max-w-xs" value={form.name} onChange={onChange} />
        <input type="submit" className="btn" value="send" />
      </form>
      <div>
        <ul>
          {data.array.map(info => (
            <li key={info.id} onClick={() => onRemove(info.id)}>
              {info.username} ({info.name})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
