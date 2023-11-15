import type { FC } from 'react'
import cn from 'classnames'
import type { Props as ProductProps } from './components/Product'
import Product from './components/Product'

export interface Props {
  id: string,
  title: string,
  products: ProductProps[],
}

const Group: FC<Props> = ({ id, title, products }) => (
  <article className="my-12" id={id}>
    <h3 className={cn(
      ['text-stone-500', 'text-sm', 'uppercase', 'tracking-widest'],
      ['flex', 'w-full', 'relative', 'my-6']
    )}>
      <span className="mx-auto px-1 bg-white inline-block z-10">{title}</span>
      <div className="border-b border-chocolate/10 absolute top-1/2 w-full"></div>
    </h3>
    <ul className="grid grid-cols-1 sm:grid-cols-3 gap-8">
      {products.map((product) => {
        const { title, image } = product

        return (
          <li key={title}>
            <Product title={title} image={image} />
          </li>
        )
      })}
    </ul>
  </article>
)

export default Group
