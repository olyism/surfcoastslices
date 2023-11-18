import type { FC } from 'react'
import Container from '@/components/Container'
import Contact from '@/components/Contact'
import Catalog from './components/Catalog'

const HomePage: FC = () => (
  <Container>
    <div className="hidden md:block mt-4 px-8 py-0 rounded-md bg-chocolate">
      <Contact isDarkMode />
    </div>
    <Catalog />
  </Container>
)

export default HomePage
