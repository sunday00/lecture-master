import UserContainer from '@/containers/UserContainer.jsx';
import { useParams } from 'react-router-dom';

export default () => {
  const { id } = useParams()

  return <UserContainer id={id}/>
}