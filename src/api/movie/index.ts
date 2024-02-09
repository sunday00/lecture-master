import { API_URL } from '@/constants/external'

export const getMovies = async () => {
  // await new Promise((resolve) => setTimeout(resolve, 5000));
  return await fetch(API_URL).then((r) => r.json())
}

export const getMovieDetail = async (id: string) => {
  return await fetch(`${API_URL}/${id}`).then((r) => r.json())
}

export const getMovieVideos = async (id: string) => {
  return await fetch(`${API_URL}/${id}/videos`).then((r) => r.json())
}

export const wrongApi = async () => {
  return await fetch('https://something.not/found')
}
