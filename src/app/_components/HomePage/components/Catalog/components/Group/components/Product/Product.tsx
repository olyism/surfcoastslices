import Image from 'next/image'
import type { FC } from 'react'
import cn from 'classnames'

export interface Props {
  title: string,
  image?: string,
}

const Product: FC<Props> = ({ title, image = undefined }) => (
  <div>
    <div className="relative h-64 sm:h-48">
      {image ? (
        <Image
          alt={title}
          className="object-cover rounded"
          fill
          src={`/images/products/${image}.jpg`}
        />
      ): (
        <div className={cn(
          ['text-center', 'text-stone-500'], 
          ['absolute', 'inset-0'], 
          'bg-stone-100', 
          ['flex', 'items-center', 'place-content-center']
        )}>
          <span>Image coming soon</span>
        </div>
      )}
    </div>
    {title}
  </div>
)

export default Product
