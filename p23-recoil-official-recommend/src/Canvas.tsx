import { createContext, useState } from 'react';
import { Element, Rectangle } from './components/Rectangle/Rectangle';
import { PageContainer } from './PageContainer';
import { Toolbar } from './Toolbar';
import { atom, useSetRecoilState } from 'recoil';


export const selectedElementState = atom<number | null>({
  key: 'selectElement',
  default: null
});

function Canvas() {
  const setSelectedElement = useSetRecoilState(selectedElementState);

  return (
    <PageContainer
      onClick={() => {
        setSelectedElement(null);
      }}
    >
      <Toolbar />
      {elements.map((element, index) => (
        <Rectangle key={index} element={element} index={index} />
      ))}
    </PageContainer>

  );
}

export default Canvas;
