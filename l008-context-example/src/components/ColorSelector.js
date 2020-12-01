import React from 'react';
import { ColorConsumer } from '../context/UpdatableColor';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const ColorSelector = () => {
  return (
    <div>
      <h2>Choose color.</h2>
      <ColorConsumer>
        {({ actions }) => (
          <div style={{ display: 'flex' }}>
            {colors.map((color) => (
              <div
                key={color}
                style={{
                  background: color,
                  width: '24px',
                  height: '24px',
                  cursor: 'pointer',
                }}
                onClick={() => actions.setColor(color)}
                onContextMenu={(e) => {
                  e.preventDefault();
                  actions.setSubColor(color);
                }}
              />
            ))}
          </div>
        )}
      </ColorConsumer>

      <hr />
    </div>
  );
};

export default ColorSelector;
