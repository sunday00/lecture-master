import { getMovieVideos } from '@/api/movie'

const VideoMovie = async ({ id }: { id: string }) => {
  const videos = await getMovieVideos(id)

  return (
    <div>
      <h6>{JSON.stringify(videos)}</h6>
    </div>
  )
}

export default VideoMovie
