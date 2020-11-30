import React from 'react';
import Color from '../context/Color';

const ColorBox = () => {
  return (
    <Color.Provider value={{ color: 'tomato' }}>
      <div>
        <Color.Consumer>
          {(val) => (
            <div
              style={{
                width: 64,
                height: 64,
                backgroundColor: val.color,
                border: '1px solid gold',
              }}
            ></div>
          )}
        </Color.Consumer>
      </div>
    </Color.Provider>
  );
};

export default ColorBox;
