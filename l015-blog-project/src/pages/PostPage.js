import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import PostViewer from '../components/post/PostViewer';

const PostPage = () => {
  return (
    <div>
      <HeaderContainer /> <PostViewer />
    </div>
  );
};

export default PostPage;
