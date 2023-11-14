import './globals.css'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Admin Dashboard',
  description: 'Layout for an Admin Dashboard CMS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <main>
          <nav className="flex items-center justify-center m-4 ">
            <Link className='ml-4 mr-4' href="/">Home</Link>
            <Link className='ml-4 mr-4' href="/notes">Notes</Link>
          </nav>
          {children}
        </main>
      </body>
    </html>
  )
}
