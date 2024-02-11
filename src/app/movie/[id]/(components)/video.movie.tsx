import { getMovieVideos } from '@/api/movie'
import { YTB_URL } from '@/constants/external'

const VideoMovie = async ({ id }: { id: string }) => {
  const videos = await getMovieVideos(id)

  return (
    <div>
      {videos.map((v: { key: string; id: string; name: string }) => (
        <iframe
          src={`${YTB_URL}/${v.key}`}
          key={v.id}
          title={v.name}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{
            border: 0,
            width: '100%',
            minHeight: '300px',
            marginBottom: '1em',
          }}
        />
      ))}
    </div>
  )
}

export default VideoMovie
