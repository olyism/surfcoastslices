import type { FC } from 'react'
import type { DarkMode } from '@/lib/interfaces'
import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline'
import cn from 'classnames'
import { neuton } from '@/lib/font'
import data from '@/app/_components/RootLayout/data.json'

const Contact: FC<DarkMode> = ({ isDarkMode = false}) => {
  const highlightTextColor = (
    isDarkMode ? 'text-white' : 'text-chocolate'
  )
  
  const bodyTextColor = (
    isDarkMode ? 'text-stone-400' : 'text-stone-500'
  )

  return (
    <section className="md:flex md:items-center">
      <article>
        <h2 className={cn('mb-1', 'text-2xl', 'font-medium', highlightTextColor)}>
          Mac Harvey
        </h2>
        <p className={bodyTextColor}>Wholesaler</p>
      </article>
      <div aria-hidden className={cn(
        ['my-8', 'w-8', 'h-1', 'rounded'],
        'sm:hidden',
        isDarkMode ? 'bg-white/25' : 'bg-stone-300'
      )} />
      <address className="text-center not-italic ml-auto mr-auto md:mr-0">
        <ul className="md:flex md:gap-4">
          <li className="my-6">
            <a
              className={cn(
                ['flex', 'gap-2', highlightTextColor],
                ['md:px-6', 'md:py-4', 'md:rounded-md'],
                isDarkMode ? 'md:bg-white/20' : 'md:bg-chocolate/5'
              )}
              href={`tel:${data.phone.trim()}`}
            >
              <PhoneIcon className={`w-6 h-6 ${highlightTextColor}`} />
              {data.phone}
            </a>
          </li>
          <li className="my-6">
            <a
              className={cn(
                ['flex', 'gap-2', highlightTextColor],
                ['md:px-6', 'md:py-4', 'md:rounded-md'],
                isDarkMode ? 'md:bg-white/20' : 'md:bg-chocolate/5'
              )}
              href={`mailto:${data.email}`}
            >
              <EnvelopeIcon className={`w-6 h-6 ${highlightTextColor}`} />
              {data.email}
            </a>
          </li>
        </ul>
      </address>
    </section>
  )
}

export default Contact
