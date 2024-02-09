import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  description: 'hello movies',
}

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div>
      {children}
      <p>&copy; grayfield.net</p>
    </div>
  )
}
