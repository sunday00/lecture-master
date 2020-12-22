import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../../components/common/Header';
import { logout } from '../../modules/users';

const HeaderContainer = () => {
  const { user } = useSelector(({ user }) => ({ user: user.user }));
  const dispatch = useDispatch();
  const onLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
  };
  return <Header user={user} onLogout={onLogout} />;
};

export default HeaderContainer;
