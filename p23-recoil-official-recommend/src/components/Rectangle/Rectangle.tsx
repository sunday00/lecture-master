import { selectedElementState } from '../../Canvas';
import { Drag } from '../Drag';
import { RectangleContainer } from './RectangleContainer';
import { RectangleInner } from './RectangleInner';
import { useRecoilState, atomFamily } from 'recoil';

export type ElementStyle = {
  position: { top: number; left: number }
  size: { width: number; height: number }
}

export type Element = { style: ElementStyle }

const elementState = atomFamily<Element, number>({
  key: 'element',
  default: {
    style: {
      position: {top: 50, left: 50},
      size: {width:50, height: 50}
    }
  }
})

export const Rectangle = ({ id }: { id: number }) => {
  const [selectedElement, setSelectedElement] = useRecoilState(selectedElementState);

  const [element, setElement] = useRecoilState(elementState(id))

  return (
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
      <div style={{ position: 'absolute', top: (id + 1) * 10, left: (id + 1) * 10 }}>
        <RectangleContainer
          position={element.style.position}
          size={element.style.size}
          onSelect={() => {
            setSelectedElement(id);
          }}
        >
          <RectangleInner selected={id === selectedElement} />
        </RectangleContainer>
      </div>
    </Drag>
  );
};