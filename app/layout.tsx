import type { Metadata } from 'next'
import { Rubik } from 'next/font/google'
import './globals.css'
import Provider from '@/app/Provider'

const rubik = Rubik({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Frontend Quiz',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={rubik.className}>
      <Provider>
        <main>
          {children}
        </main>
      </Provider>
      </body>
    </html>
  )
}
