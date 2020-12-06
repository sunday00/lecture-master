import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Sample from '../components/Sample';
import { getPost, getUsers } from '../modules/sample';

const SampleContainer = (props) => {
  useEffect(() => {
    props.getPost(1);
    props.getUsers(1);
  }, [getPost, getUsers]);

  return (
    <Sample
      post={props.post}
      users={props.users}
      loadingPost={props.loadingPost}
      loadingUsers={props.loadingUsers}
    ></Sample>
  );
};

// export default SampleContainer;
export default connect(
  ({ sample }) => ({
    post: sample.post,
    users: sample.users,
    loadingPost: sample.loading.GET_POST,
    loadingUsers: sample.loading.GET_USERS,
  }),
  {
    getPost,
    getUsers,
  },
)(SampleContainer);
