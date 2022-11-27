import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getUsers } from '@/apis/users.jsx';

export default () => {
  const queryClient = useQueryClient()

  const query = useQuery({
    queryKey: ['users'],
    queryFn: getUsers
  })

  // const mutation = useMutation({
  //   mutationFn:
  // })

  return (<>
    <ul>
      {query.data?.map(u =>
        <li key={u.id}>{u.name}</li>
      )}
    </ul>
  </>)
}
