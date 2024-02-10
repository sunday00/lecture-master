import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import React from 'react'
import Navigation from '@/components/layout/navigation'
import styles from '@/app/page.module.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: { template: 'study | %s', default: '...' },
  description: 'study with nomad code',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <Navigation />
        <main className={styles.main}>{children}</main>
      </body>
    </html>
  )
}
