import React, { useState } from 'react';

export default () => {
  // const [username, setUsername] = useState('Jhn Doe');
  // const [age, setAge] = useState(10);
  const [user, setUser] = useState({
    username: 'Jhn Doe',
    age: 10,
  });

  // const handleChangeName = (e) => {
  //   setUsername(e.target.value);
  // };

  // const handleChangeAge = (e) => {
  //   setAge(e.target.value);
  // };
  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleConfirm = (e) => {
    if (e.code === 'Enter' || e.type === 'click') {
      // console.log(username, age);
      console.log(user.username, user.age);
      // setUsername('');
      // setAge(0);
      setUser({
        username: 'Jhn Doe',
        age: 0,
      });
    }
  };

  return (
    <div>
      <h1>Practice</h1>
      <input
        type="text"
        name="username"
        placeholder="username"
        // value={username}
        value={user.username}
        // onChange={handleChangeName}
        onChange={handleChange}
      />
      <input
        type="number"
        name="age"
        placeholder="age"
        // value={age}
        value={user.age}
        // onChange={handleChangeAge}
        onChange={handleChange}
        onKeyDown={handleConfirm}
      />
      <input type="submit" onClick={handleConfirm} value="confirm" />
    </div>
  );
};
