import type { FC } from 'react'
import { Neuton } from 'next/font/google'
import cn from 'classnames'
import Container from '@/components/Container'

const neuton = Neuton({
  subsets: ['latin'],
  weight: ['400'],
})

const Header: FC = () => (
  <header className={cn(
    'py-12',
    ['bg-gradient-to-r', 'from-chocolate', 'to-caramel'], 
    ['text-center', 'text-white'],
  )}>
    <Container>
      <div className={cn(
        neuton.className,
        ['text-5xl', 'uppercase', 'mb-5', 'tracking-wide'],
      )}>
        Surfcoast Slices
      </div>
      <div className="text-2xl uppercase">Slices cookie cakes</div>
    </Container>
  </header>
)

export default Header
