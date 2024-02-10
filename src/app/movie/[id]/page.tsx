import type { Metadata } from 'next'
import InfoVideo from '@/app/movie/[id]/(components)/info.video'
import VideoMovie from '@/app/movie/[id]/(components)/video.movie'
import { Suspense } from 'react'
import Loading from '@/app/loading'
import { getMovieDetail } from '@/api/movie'

// export const metadata: Metadata = {
//   title: `movie | `,
// }

export const generateMetadata = async ({
  params: { id },
}: {
  params: { id: string }
}) => {
  const movie = await getMovieDetail(id)

  return {
    title: `movie | ${movie.title}`,
  }
}

const Movie = async ({ params: { id } }: { params: { id: string } }) => {
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <InfoVideo id={id} />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <VideoMovie id={id} />
      </Suspense>
    </div>
  )
}

export default Movie
