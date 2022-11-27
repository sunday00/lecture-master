import { useQuery } from '@tanstack/react-query';
import { fetchPlanets } from '@/apis/starwas.jsx';

export default () => {
  const {} = useQuery('planets', fetchPlanets)

  return (<>
    <h1>Planets</h1>
  </>)
}