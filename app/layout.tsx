import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ThePlaced',
  description: 'A 2D choice-based narrative web game',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
