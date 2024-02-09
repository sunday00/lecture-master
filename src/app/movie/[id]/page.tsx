import type { Metadata } from 'next'
import { getMovieDetail, getMovieVideos } from '@/api/movie'

export const metadata: Metadata = {
  title: `movie | `,
}

const Movie = async ({ params: { id } }: { params: { id: string } }) => {
  const [movie, videos] = await Promise.all([
    getMovieDetail(id),
    getMovieVideos(id),
  ])

  return (
    <div>
      <h1>Movies/Detail | {movie.title}</h1>
    </div>
  )
}

export default Movie
