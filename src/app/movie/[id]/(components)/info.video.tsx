import { getMovieDetail, wrongApi } from '@/api/movie'

const InfoVideo = async ({ id }: { id: string }) => {
  const movie = await getMovieDetail(id)
  // const eee = await wrongApi()

  return (
    <div>
      <h1>Movies/Detail | {movie.title}</h1>
    </div>
  )
}

export default InfoVideo
