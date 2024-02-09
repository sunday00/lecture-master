import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from 'react'
import Navigation from '@/components/layout/navigation'
import styles from '@/app/page.module.css'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "study | home",
  description: "study with nomad code",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <main className={styles.main}>
          <Navigation />
          {children}
        </main>
      </body>
    </html>
  );
}
