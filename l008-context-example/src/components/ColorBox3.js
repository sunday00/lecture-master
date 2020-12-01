import React, { useContext } from 'react';
import UpdatableColor from '../context/UpdatableColor';

const ColorBox3 = () => {
  const { state } = useContext(UpdatableColor);

  return (
    <section>
      <>
        <div
          style={{
            width: '64px',
            height: '64px',
            background: state.color,
            border: `3px solid ${state.subColor}`,
          }}
        />
      </>
    </section>
  );
};

export default ColorBox3;
