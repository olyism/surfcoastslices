import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react';
import type { FC, ReactNode } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import data from './data.json'
import './globals.css'

export const metadata: Metadata = {
  title: 'Surf Coast Slices',
  description: `Slices • Cookies • Cakes - Contact Mac Harvey (wholesaler) ${data.phone} or ${data.email}`,
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
        <Footer isDarkMode={true} />
      </div>
      <Analytics />
    </body>
  </html>
)

export default RootLayout
