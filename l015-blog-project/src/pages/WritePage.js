import React from 'react';
import Responsive from '../components/common/Responsive';
import EditorContainer from '../containers/write/EditorContainer';
import TagboxContainer from '../containers/write/TagboxContainer';
import WriteActionButtonsContainer from '../containers/write/WriteActionButtonsContainer';
import { Helmet } from 'react-helmet-async';

const WritePage = () => {
  return (
    <Responsive>
      <Helmet>
        <title>Write</title>
      </Helmet>
      <EditorContainer />
      <TagboxContainer />
      <WriteActionButtonsContainer />
    </Responsive>
  );
};

export default WritePage;
