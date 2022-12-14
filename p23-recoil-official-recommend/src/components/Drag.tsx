import { DraggableCore } from 'react-draggable';
import { ElementStyle } from './Rectangle/Rectangle';
import React, { ReactNode, useRef } from 'react';

type DragProps = {
  position: ElementStyle['position']
  onDrag: (position: ElementStyle['position']) => void,
  // nodeRef: React.MutableRefObject<null>
}

export const Drag: React.FC<DragProps> = React.forwardRef(({ position, onDrag, children }, ref) => {
  return (
    <DraggableCore
      onDrag={(e: any) => {
        onDrag({
          left: e.movementX + position.left,
          top: e.movementY + position.top
        });
      }}
      nodeRef={ref as React.MutableRefObject<null>}
    >
      <div ref={ref as React.MutableRefObject<null>}>
        {children}
      </div>
    </DraggableCore>
  );
});
