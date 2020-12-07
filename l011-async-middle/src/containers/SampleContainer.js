import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Sample from '../components/Sample';
import { getPost, getUsers } from '../modules/sample';

const SampleContainer = (props) => {
  // useEffect(() => {
  //   props.getPost(1);
  //   props.getUsers(1);
  // }, [getPost, getUsers]);
  const { getPost, getUsers } = props;
  useEffect(() => {
    const fn = async () => {
      await getPost(1);
      await getUsers(1);
    };
    fn().catch((err) => {
      console.error(err);
    });
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
  ({ sample, loading }) => ({
    post: sample.post,
    users: sample.users,
    // loadingPost: sample.loading.GET_POST,
    // loadingUsers: sample.loading.GET_USERS,
    loadingPost: loading['sample/GET_POST'],
    loadingUsers: loading['sample/GET_USERS'],
  }),
  {
    getPost,
    getUsers,
  },
)(SampleContainer);
