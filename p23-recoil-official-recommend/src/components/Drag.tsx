import { DraggableCore } from 'react-draggable';
import { ElementStyle } from './Rectangle/Rectangle';
import React, { useRef } from 'react';

type DragProps = {
  position: ElementStyle['position']
  onDrag: (position: ElementStyle['position']) => void,
}

export const Drag: React.FC<DragProps> = React.forwardRef(({ position, onDrag, children }, ref) => {
  const nodeRef = useRef(null)

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
      <div ref={nodeRef}>{children}</div>
    </DraggableCore>
  );
});
