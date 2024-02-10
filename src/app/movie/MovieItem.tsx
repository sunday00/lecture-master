'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import style from './(style)/movie.module.scss'

const MovieItem = ({
  item,
}: {
  item: { id: number; title: string; poster_path: string }
}) => {
  const navigator = useRouter()

  const handleMoveTo = () => {
    navigator.push(`/movie/${item.id}`)
  }

  return (
    <li className={style.listItem}>
      <Image
        src={item.poster_path}
        alt={item.title}
        width={100}
        height={130}
        priority={true}
        onClick={handleMoveTo}
      />
      <Link href={`/movie/${item.id}`}>{item.title}</Link>
    </li>
  )
}

export default MovieItem
