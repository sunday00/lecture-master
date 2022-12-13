import { Rectangle } from './components/Rectangle/Rectangle';
import { PageContainer } from './PageContainer';
import { Toolbar } from './Toolbar';
import { atom, useRecoilValue, useSetRecoilState } from 'recoil';


export const selectedElementState = atom<number | null>({
  key: 'selectElement',
  default: null
});

export const elementsState = atom<number[]>({
  key: 'elements',
  default: [],
})

function Canvas() {
  const setSelectedElement = useSetRecoilState(selectedElementState);
  const elements = useRecoilValue(elementsState)

  return (
    <PageContainer
      onClick={() => {
        setSelectedElement(null);
      }}
    >
      <Toolbar />
      {elements.map((id) => (
        <Rectangle key={id} id={id} />
      ))}
    </PageContainer>

  );
}

export default Canvas;
