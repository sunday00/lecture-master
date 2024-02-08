"use client"

import Link from 'next/link'
import {usePathname} from 'next/navigation'

const LinkWrap = ({ href, name }: {href: string, name: string}) => {
  const path = usePathname()
  return (
    <Link href={href}>{name} {path === href ? '🔥' : ''}</Link>
  )
}

export default LinkWrap