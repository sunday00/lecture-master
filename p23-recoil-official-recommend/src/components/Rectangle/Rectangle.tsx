import { selectedElementState } from '../../Canvas';
import { Drag } from '../Drag';
import { RectangleContainer } from './RectangleContainer';
import { RectangleInner } from './RectangleInner';
import { useRecoilState, atomFamily } from 'recoil';
import { Resize } from '../Resize';
import React, { useRef } from 'react';

export type ElementStyle = {
  position: { top: number; left: number }
  size: { width: number; height: number }
}

export type Element = { style: ElementStyle }

export const elementState = atomFamily<Element, number>({
  key: 'element',
  default: {
    style: {
      position: { top: 50, left: 50 },
      size: { width: 50, height: 50 }
    }
  }
});

export const Rectangle = ({ id }: { id: number }) => {
  const [selectedElement, setSelectedElement] = useRecoilState(selectedElementState);

  const [element, setElement] = useRecoilState(elementState(id));

  const isSelected = id === selectedElement;

  const handleResize = (style: ElementStyle) => {
    setElement({
      ...element,
      style
    });
  };

  return (
    <RectangleContainer
      position={element.style.position}
      size={element.style.size}
      onSelect={() => {
        setSelectedElement(id);
      }}
    >
      <Resize onResize={(style) => {
        handleResize(style);
      }} selected={isSelected} position={element.style.position} size={element.style.size}>
        <Drag
          position={element.style.position}
          onDrag={(position) => {
            setElement({
              style: {
                ...element.style,
                position
              }
            });
          }}
        >
          <RectangleInner selected={isSelected} />
        </Drag>
      </Resize>
    </RectangleContainer>
  );
};