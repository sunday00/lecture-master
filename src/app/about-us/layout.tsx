import "../globals.css";
import React from 'react'
import type {Metadata} from 'next'

export const metadata: Metadata = {
  title: {
    template: 'study | about | %s',
    default: ' ... '
  },
  description: "introduce myself",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      {children}
      <p>&copy; grayfield.net</p>
    </div>
  );
}
