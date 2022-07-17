import { useCallback, useRef, useState } from 'react';

const Home = () => {
  const nextId = useRef(1);
  const [form, setForm] = useState({ name: '', username: '' });
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

    setForm({ name: '', username: '' });

    nextId.current++;
  });

  const onRemove = useCallback((id) => {
    setData({
      ...data,
      array: data.array.filter((info) => info.id !== id),
    });
  });

  return (
    <div className="home-wrap">
      <section className="hero min-h-screen"></section>
    </div>
  );
};

export default Home;
