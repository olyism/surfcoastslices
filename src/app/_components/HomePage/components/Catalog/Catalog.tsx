import Image from 'next/image'
import Group from './components/Group'
import data from './data.json'

const Catalog = () => (
  <>
    {data.map((d) => {
      const { title, desc, groups } = d

      return (
        <section key={title}>
          <h2>{title}</h2>
          {desc && (
            <p>{desc}</p>
          )}
          {groups.map((group) => {
            const { title, products } = group

            return (
              <Group key={title} products={products} />
            )
          })}
        </section>
      )
    })}
  </>
)

export default Catalog
