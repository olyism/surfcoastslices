import type { FC } from 'react'
import type { DarkMode } from '@/lib/interfaces'
import Container from '@/components/Container'
import Contact from '@/components/Contact'

const Footer:FC<DarkMode> = ({ isDarkMode }) => (
  <footer className="bg-chocolate py-16">
    <Container>
      <Contact isDarkMode={isDarkMode} />
    </Container>
  </footer>
)

export default Footer
