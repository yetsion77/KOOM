import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'משחק המקומות בישראל',
  description: 'משחק טריוויה על מקומות בישראל',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="he" dir="rtl">
      <body>
        {children}
      </body>
    </html>
  )
}