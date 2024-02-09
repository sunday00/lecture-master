import Link from 'next/link'

const MovieItem = ({item}: {item: {id: number, title: string}}) => {
  return <li>
    <Link href={`/movie/${item.id}`}>{item.title}</Link>
  </li>
}

export default MovieItem