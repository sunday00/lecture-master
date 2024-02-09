import type { Metadata } from 'next'
import InfoVideo from '@/app/movie/[id]/(components)/info.video'
import VideoMovie from '@/app/movie/[id]/(components)/video.movie'
import { Suspense } from 'react'
import Loading from '@/app/loading'

export const metadata: Metadata = {
  title: `movie | `,
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
