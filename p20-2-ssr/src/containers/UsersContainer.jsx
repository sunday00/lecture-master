import { useEffect, useState } from 'react';
import { getUsers } from '@/apis/index.jsx';
import { useRecoilState, useRecoilValue } from 'recoil';
import { userList } from '@/stores/users.store.jsx';
import Users from '@v/Users.jsx';

export default () => {
  const users = useRecoilValue(userList)

  // useEffect(() => {
  //   if (users.length) return;
  //
  //   setLoading(true)
  //
  //   getUsers()
  //     .then((res) => {
  //       setUsers(res.data)
  //       setLoading(false)
  //     })
  // },[users.users, getUsers])

  return !users ? 'loading' : <Users users={users} />
}
