import type { FC } from 'react'
import Container from '@/components/Container'
import Catalog from './components/Catalog'

const HomePage: FC = () => (
  <main>
    <Container>
      <Catalog />
      <article className="prose py-10 text-center mx-auto">
        <h1 className="mb-2">Mac Harvey</h1>
        <p className="mt-0">Wholesaler</p>
      </article>
      <address className="text-center not-italic mx-auto">
        <ul>
          <li className="mb-4">
            <a href="mailto:info@surfcoastslices.com">info@surfcoastslices.com</a>
          </li>
          <li>
            <a href="tel:+61403899074">0403 899 074</a>
          </li>
        </ul>
      </address>
    </Container>
  </main>
)

export default HomePage
