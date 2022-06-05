import React, { useReducer } from 'react';

const reducer = (state, action) => {
  return {
    ...state,
    [action.name]: action.value,
  };
};

const Info = () => {
  const [state, dispatch] = useReducer(reducer, {
    name: '',
    nickname: '',
  });

  const { name, nickname } = state;

  const handleChange = (e) => {
    dispatch(e.target);
  };

  return (
    <div>
      <div>
        <input type="text" name="name" value={name} onChange={handleChange} />
        <input
          type="text"
          name="nickname"
          value={nickname}
          onChange={handleChange}
        />
      </div>
      <div>
        <p>
          <strong>{name}</strong>
        </p>
        <p>
          <strong>{nickname}</strong>
        </p>
      </div>
    </div>
  );
};

export default Info;
