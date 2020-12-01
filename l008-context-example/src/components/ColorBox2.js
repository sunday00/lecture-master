import React from 'react';
import { ColorProvider, ColorConsumer } from '../context/UpdatableColor';
import ColorSelector from './ColorSelector';

const ColorBox2 = () => {
  return (
    <section>
      <ColorProvider color="lightyellow" subColor="indigo">
        <div>
          <ColorSelector></ColorSelector>
          <ColorConsumer>
            {(val) => (
              <div
                style={{
                  width: 64,
                  height: 64,
                  backgroundColor: val.state.color,
                  border: `3px solid ${val.state.subColor}`,
                }}
              ></div>
            )}
          </ColorConsumer>
        </div>
      </ColorProvider>
    </section>
  );
};

export default ColorBox2;