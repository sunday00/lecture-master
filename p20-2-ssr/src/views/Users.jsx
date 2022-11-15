import { useEffect } from 'react';
import { getUsers } from '@/apis/index.jsx';
import { useRecoilState } from 'recoil';
import { userList } from '@/stores/users.store.jsx';

export default () => {
  const [users, setUsers] = useRecoilState(userList)

  useEffect(() => {
    getUsers()
      .then((res) => {
        console.log(res.data)
      })
  },[])
}
