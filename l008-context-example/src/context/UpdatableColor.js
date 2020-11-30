import React, { createContext, useState } from 'react';

const UpdatableColor = createContext({
  state: { color: '', subColor: '' },
  actions: {
    setColor: () => {},
    setSubColor: () => {},
  },
});

const ColorProvider = (props) => {
  const [color, setColor] = useState(props.color);
  const [subColor, setSubColor] = useState(props.subColor);

  const value = {
    state: { color, subColor },
    actions: { setColor, setSubColor },
  };

  return (
    <UpdatableColor.Provider value={value}>
      {props.children}
    </UpdatableColor.Provider>
  );
};

const { Consumer: ColorConsumer } = UpdatableColor;

export { ColorProvider, ColorConsumer };

export default UpdatableColor;
