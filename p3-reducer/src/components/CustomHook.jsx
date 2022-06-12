import { useReducer } from 'react';

const reducer = (state, action) => {
  return {
    ...state,
    [action.name]: action.value,
  };
};

const useInput = (initialForm) => {
  const [state, dispatch] = useReducer(reducer, initialForm);

  const handleChange = (e) => {
    dispatch(e.target);
  };

  return [state, handleChange];
};

export default useInput;
