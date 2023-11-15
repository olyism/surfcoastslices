import Image from 'next/image'
import type { FC } from 'react'
import cn from 'classnames'

export interface Props {
  title: string,
  image?: string,
}

const Product: FC<Props> = ({ title, image = undefined }) => (
  <div>
    <div className="mb-3 pt-[66.6%] relative">
      {image ? (
        <Image
          alt={title}
          className="object-cover rounded-md"
          fill
          src={`/images/products/${image}.jpg`}
        />
      ): (
        <div className={cn(
          ['text-center', 'text-stone-500'], 
          ['absolute', 'inset-0'], 
          ['bg-stone-100', 'rounded-md'],
          ['flex', 'items-center', 'place-content-center']
        )}>
          <span>Image coming soon</span>
        </div>
      )}
    </div>
    <h4 className="text-center text-stone-600 font-medium">{title}</h4>
  </div>
)

export default Product
