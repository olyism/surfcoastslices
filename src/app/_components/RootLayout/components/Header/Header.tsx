'use client'

import { type FC, useState } from 'react'
import cn from 'classnames'
import { Bars2Icon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'
import { neuton } from '@/lib/font'
import Container from '@/components/Container'
import data from '@/app/_components/RootLayout/data.json'
import Menu from './components/Menu'

const Header: FC = () => {
  const [ isMenuOpen, setIsMenuOpen ] = useState(false)

  return (
    <>
      <header className={cn(
        ['pt-14', 'pb-16'],
        ['bg-gradient-to-r', 'from-chocolate', 'to-caramel'], 
        ['text-center', 'text-white']
      )}>
        <Container>
          <div className="flex md:block items-center justify-between mb-6">
            <h1 className={cn(
              [neuton.className, 'text-4xl', 'uppercase', 'tracking-wider'],
              'sm:text-5xl',
              'order-2'
              )}>
              Surfcoast Slices
            </h1>
            <address className="order-3 flex gap-4 w-16 text-right md:hidden">
              <a href={`mailto:${data.email}`}>
                <EnvelopeIcon className="w-6 text-white" />
              </a>
              <a href={`tel:${data.phone.trim()}`}>
                <PhoneIcon className="w-6 text-white" />
              </a>
            </address>
            <div className="order-1 w-16 text-left md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <Bars2Icon className="w-6 text-white" />
              </button>
            </div>
          </div>
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
      {isMenuOpen && (
        <Menu onMenuClose={() => setIsMenuOpen(false)} />
      )}
    </>
  )
}

export default Header
