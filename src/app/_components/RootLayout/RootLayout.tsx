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
  <html lang="en" className="scroll-smooth">
    <body className="bg-stone-100">
      <div className="mx-auto max-w-screen-2xl bg-white shadow-lg">
        <Header />
        <main>
          {children}
        </main>
      </div>
    </body>
  </html>
)

export default RootLayout
