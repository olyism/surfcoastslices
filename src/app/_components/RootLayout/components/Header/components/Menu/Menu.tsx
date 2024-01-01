import type { FC } from 'react'
import Link from 'next/link'
import cn from 'classnames'
import { XMarkIcon } from '@heroicons/react/24/outline'
import Container from '@/components/Container'
import { neuton } from '@/lib/font'

interface Props {
  onMenuClose: () => void
}

const Menu: FC<Props> = ({ onMenuClose }) => (
  <nav className={cn(
    ['fixed', 'inset-0', 'w-full', 'h-full', 'z-40', 'overflow-auto'],
    ['bg-white/95', 'text-center'],
    ['flex', 'items-center']
  )}>
    <Container>
      <ul>
        <li>
          <h2 className={`${neuton.className} my-5 text-4xl text-chocolate`}>
            Slices
          </h2>
          <ul>
            <li className="my-5">
              <Link 
                className="text-xl text-stone-500 font-light"
                href="/#slices"
                onClick={onMenuClose}
              >Slices</Link>
            </li>
            <li className="my-5">
              <Link 
                className="text-xl text-stone-500 font-light"
                href="/#deluxe_slices"
                onClick={onMenuClose}
              >Deluxe slices</Link>
            </li>
            <li className="my-5">
              <Link 
                className="text-xl text-stone-500 font-light"
                href="/#specialty_slices"
                onClick={onMenuClose}
              >Specialty slices</Link>
            </li>
          </ul>
        </li>
        <li aria-hidden>
          <div className="mx-auto my-10 w-8 h-1 bg-stone-300 rounded" />
        </li>
        <li>
          <h2 className={`${neuton.className} my-5 text-4xl text-chocolate`}>
            Cookies
          </h2>
          <ul>
            <li className="my-5">
              <Link 
                className="text-xl text-stone-500 font-light"
                href="/#cookies"
                onClick={onMenuClose}
              >All cookies</Link>
            </li>
          </ul>
        </li>
        <li aria-hidden>
          <div className="mx-auto my-10 w-8 h-1 bg-stone-300 rounded" />
        </li>
        <li>
          <h2 className={`${neuton.className} my-5 text-4xl text-chocolate`}>
            Cakes 14&quot;
          </h2>
          <ul>
            <li className="my-5">
              <Link 
                className="text-xl text-stone-500 font-light"
                href="/#cakes"
                onClick={onMenuClose}
              >Cakes</Link>
            </li>
            <li className="my-5">
              <Link 
                className="text-xl text-stone-500 font-light"
                href="/#cheese_cakes"
                onClick={onMenuClose}
              >Cheese cakes</Link>
            </li>
            <li className="my-5">
              <Link 
                className="text-xl text-stone-500 font-light"
                href="/#flourless_cakes"
                onClick={onMenuClose}
              >Flourless cakes</Link>
            </li>
            <li className="my-5">
              <Link 
                className="text-xl text-stone-500 font-light"
                href="/#mousse_cakes_and_tarts"
                onClick={onMenuClose}
              >Mousse cakes and tarts</Link>
            </li>
          </ul>
        </li>
      </ul>
    </Container>
    <button onClick={onMenuClose}>
      <XMarkIcon className="w-6 h-6 text-chocolate absolute z-40 top-4 right-4" />
    </button>
  </nav>
)

export default Menu
