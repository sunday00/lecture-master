'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const LinkWrap = ({ href, name }: { href: string; name: string }) => {
  const path = usePathname()

  const isActivated = () => {
    if (name === 'Home') {
      return path === '/' ? '🔥' : ''
    } else {
      return path.startsWith(href) ? '🔥' : ''
    }
  }

  return (
    <Link href={href}>
      <p>
        {name} {isActivated()}
      </p>
    </Link>
  )
}

export default LinkWrap
