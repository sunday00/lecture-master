import type {Metadata} from 'next'
import MovieItem from '@/app/movie/MovieItem'
import {getMovies} from '@/api/movie'

export const metadata: Metadata = {
  title: 'movie'
}

const Movie = async () => {
  const movies = await getMovies()

  return (
    <div>
      <h1>Movies/List</h1>

      <ul>
        {
          movies.map((m: {id: number, title:string}) => {
            return (<MovieItem key={m.id} item={m} />)
          })
        }
      </ul>
    </div>
  )
}

export default Movie