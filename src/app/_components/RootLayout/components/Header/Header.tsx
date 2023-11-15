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
      <div className={cn(
        neuton.className,
        ['text-5xl', 'uppercase', 'mb-6', 'tracking-wider'],
      )}>
        Surfcoast Slices
      </div>
      <ul className={cn(
        ['text-lg', 'uppercase', 'tracking-widest', 'font-light'],
        ['flex', 'gap-6', 'justify-center']
      )}>
        <li>Slices</li>
        <li>Cookie</li>
        <li>Cakes</li>
      </ul>
    </Container>
  </header>
)

export default Header
