import { useQuery } from '@tanstack/react-query';
import { fetchPlanets } from '@/apis/starwas.jsx';
import Planet from '@c/Planet.jsx';
import { NavLink, useParams } from 'react-router-dom';

export default () => {
  const { page } = useParams()
  const {data, status} = useQuery({
    queryKey: ['planets', 'some-value', page ? page : 1],
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
        <>
          <ul>
            { data.results.map(planet =>
              <li key={planet.url}>
                <Planet planet={planet}/>
              </li>
            )}
          </ul>
          <div className="btn-group justify-center m-4">
              {[...Array(7).keys()].map((i) => (
                <NavLink
                  to={`/planets/${i + 1}`}
                  className={`btn ${i + 1 === parseInt(page) ? 'btn-active' : ''}`}
                >{i + 1}</NavLink>
              ))}
          </div>
        </>
      ) : null}
    </div>
  </>)
}
