import React from 'react';
import Responsive from '../components/common/Responsive';
import EditorContainer from '../containers/write/EditorContainer';
import TagboxContainer from '../containers/write/TagboxContainer';
import WriteActionButtonsContainer from '../containers/write/WriteActionButtonsContainer';

const WritePage = () => {
  return (
    <Responsive>
      <EditorContainer />
      <TagboxContainer />
      <WriteActionButtonsContainer />
    </Responsive>
  );
};

export default WritePage;
