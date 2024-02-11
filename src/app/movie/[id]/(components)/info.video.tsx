import { getMovieDetail, wrongApi } from '@/api/movie'
import Image from 'next/image'

const InfoVideo = async ({ id }: { id: string }) => {
  const movie: {
    title: string
    poster_path: string
    vote_average: string
    overview: string
    homepage?: string
  } = await getMovieDetail(id)
  // const eee = await wrongApi()

  return (
    <div>
      <h1>
        Movies/Detail | {movie.title} | {movie.vote_average}
      </h1>

      <div style={{ display: 'flex', gap: '2em', margin: '1em' }}>
        <Image
          src={movie.poster_path}
          alt={movie.title}
          width={200}
          height={0}
          priority={true}
          style={{ width: '400px', height: 'auto' }}
        />

        <div>
          <div style={{ marginBottom: '1em' }}>{movie.overview}</div>
          {movie.homepage ? (
            <p>
              <a href={movie.homepage}>-&gt; site</a>
            </p>
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  )
}

export default InfoVideo
