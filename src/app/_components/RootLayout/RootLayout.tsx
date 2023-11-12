import type { Metadata } from 'next'
import type { FC, ReactNode } from 'react'
import Header from './components/Header'
import './globals.css'

export const metadata: Metadata = {
  title: 'Surfcoast Slices',
  description: 'Slices, cookies, cakes',
}

interface Props {
  children: ReactNode,
}

const RootLayout: FC<Props> = ({ children }) => (
  <html lang="en">
    <body>
      <Header />
      <main>
        {children}
      </main>
    </body>
  </html>
)

export default RootLayout
