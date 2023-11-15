import type { FC } from 'react'
import type { Props as ProductProps } from './components/Product'
import Product from './components/Product'

export interface Props {
  title: string,
  products: ProductProps[],
}

const Group: FC<Props> = ({ title, products }) => (
  <article>
    <h3>{title}</h3>
    <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4">
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
