import { useRecoilValue } from 'recoil';
import { userList, userOne } from '@/stores/users.store.jsx';
import User from '@c/User.jsx';
import Users from '@v/Users.jsx';

export default ({id}) => {
  const users = useRecoilValue(userList)
  const user = useRecoilValue(userOne(id))

  return (<div>
    <Users users={users} />

    <hr />

    <User user={user} />
  </div>)
}