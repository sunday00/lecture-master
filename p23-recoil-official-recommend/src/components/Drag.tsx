import { DraggableCore } from 'react-draggable';
import { ElementStyle } from './Rectangle/Rectangle';
import React from 'react';

type DragProps = {
  position: ElementStyle['position']
  onDrag: (position: ElementStyle['position']) => void
}

export const Drag: React.FC<DragProps> = ({ position, onDrag, children }) => {
  const nodeRef = React.useRef(null);

  return (
    <DraggableCore
      onDrag={(e: any) => {
        onDrag({
          left: e.movementX + position.left,
          top: e.movementY + position.top
        });
      }}
      nodeRef={nodeRef}
    >
      <div ref={nodeRef}>
        {children}
      </div>
    </DraggableCore>
  );
};
