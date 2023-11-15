import type { FC } from 'react'
import { neuton } from '@/lib/font'
import cn from 'classnames'
import Container from '@/components/Container'

const Header: FC = () => (
  <header className={cn(
    ['pt-14', 'pb-16'],
    ['bg-gradient-to-r', 'from-chocolate', 'to-caramel'], 
    ['text-center', 'text-white'],
  )}>
    <Container>
      <h1 className={cn(
        neuton.className,
        ['text-4xl', 'uppercase', 'mb-6', 'tracking-wider'],
        'sm:text-5xl'
      )}>
        Surfcoast Slices
      </h1>
      <ul className={cn(
        ['text-lg', 'uppercase', 'tracking-widest', 'font-light'],
        ['flex', 'gap-5', 'justify-center']
      )}>
        <li>Slices</li>
        <li>Cookie</li>
        <li>Cakes</li>
      </ul>
    </Container>
  </header>
)

export default Header
