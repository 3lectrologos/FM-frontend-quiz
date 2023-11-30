import type { Metadata } from 'next'
import { Rubik } from 'next/font/google'
import './globals.css'
import ThemeProvider from '@/app/ThemeProvider'

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
        <ThemeProvider>
          <main>
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
