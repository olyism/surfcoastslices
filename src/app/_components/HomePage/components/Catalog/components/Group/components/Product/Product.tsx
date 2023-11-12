import Image from 'next/image'
import type { FC } from 'react'

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
        <div className="text-center text-stone-500 absolute inset-0 bg-slate-100 top-1/2 -m-2">
          Image coming soon
        </div>
      )}
    </div>
    {title}
  </div>
)

export default Product
