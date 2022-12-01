import { useQuery } from '@tanstack/react-query';
import { fetchPeople } from '@/apis/starwas.jsx';
import People from '@c/Person.jsx';

export default () => {
  const {data, status} = useQuery({
    queryKey: ['people'],
    queryFn: fetchPeople,
  })

  return (<>
    <h1 className="text-3xl p-4">People</h1>
    <div className="items-center text-center">
      {status === 'loading' ? (
        <p className="radial-progress text-primary m-4"></p>
      ) : null}

      {status === 'error' ? (
        <p className="text-red-300">Failed to fetch Data</p>
      ) : null}

      {status === 'success' ? (
        <ul>
          { data.results.map(person =>
            <li key={person.url}>
              <People person={person}/>
            </li>
          )}
        </ul>
      ) : null}
    </div>
  </>)
}
