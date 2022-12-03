import { useQuery } from '@tanstack/react-query';
import { fetchPlanets } from '@/apis/starwas.jsx';
import Planet from '@c/Planet.jsx';

export default () => {
  const {data, status} = useQuery({
    queryKey: ['planets'],
    queryFn: fetchPlanets,
    staleTime: 2000,
    // cacheTime: 10,
    onSuccess: () => {
      console.log('fine')
    }
  })

  return (<>
    <h1 className="text-3xl p-4">Planets</h1>
    <div className="items-center text-center">
      {status === 'loading' ? (
        <p className="radial-progress text-primary m-4"></p>
      ) : null}

      {status === 'error' ? (
        <p className="text-red-300">Failed to fetch Data</p>
      ) : null}

      {status === 'success' ? (
        <ul>
          { data.results.map(planet =>
            <li key={planet.url}>
              <Planet planet={planet}/>
            </li>
          )}
        </ul>
      ) : null}
    </div>
  </>)
}
