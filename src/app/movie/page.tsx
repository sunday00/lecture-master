import type {Metadata} from 'next'

export const metadata: Metadata = {
  title: 'movie'
}

const URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

async function getMovies() {
  // await new Promise((resolve) => setTimeout(resolve, 5000));
  return await fetch(URL).then((r) => r.json());
}

const Movie = async () => {
  const movies = await getMovies()

  return (
    <div>
      <h1>Movies/List</h1>

      <ul>
        {movies.map((m: {id: number, title:string}) => {
          return (<li key={m.id}>{m.title}</li>)
        })}
      </ul>
    </div>
  )
}

export default Movie