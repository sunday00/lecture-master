import React from 'react';
import styled, { css } from 'styled-components';
import palette from '../../lib/styles/palette';
import spacing from '../../lib/styles/spacing';
import Responsive from '../common/Responsive';
import SubInfo from '../common/SubInfo';
import Tags from '../common/Tags';

const PostViewerBlock = styled(Responsive)`
  ${(props) =>
    props.spacing &&
    css`
      ${spacing(props.spacing)}
    `}
`;

const PostHead = styled.div`
  border-bottom: 1px solid ${palette.gray[2]};
  padding-bottom: 3rem;
  margin-bottom: 3rem;
  hi {
    font-size: 3rem;
    line-height: 1.5;
    margin: 0;
  }
`;

const PostContent = styled.div`
  font-size: 1.3125rem;
  color: ${palette.gray[8]};
`;

const PostViewer = ({ post, error, loading, actionButton }) => {
  if (error) {
    if (error.response && error.response.status === 404) {
      return (
        <PostViewerBlock spacing="m-t-4">Not Found this post</PostViewerBlock>
      );
    }
    return <PostViewerBlock spacing="m-t-4">ERROR!</PostViewerBlock>;
  }

  if (loading || !post) {
    return null;
  }

  const { title, body, user, publishedDate, tags } = post;

  return (
    <PostViewerBlock spacing="m-t-4">
      <PostHead>
        <h1>{title}</h1>
        <SubInfo username={user.username} publishedDate={publishedDate} />
        <Tags tags={tags} />
      </PostHead>
      {actionButton}
      <PostContent dangerouslySetInnerHTML={{ __html: body }} />
    </PostViewerBlock>
  );
};

export default PostViewer;
