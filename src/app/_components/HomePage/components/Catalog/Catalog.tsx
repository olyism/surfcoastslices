import cn from 'classnames'
import Group, { Props as GroupProps} from './components/Group'
import { neuton } from '@/lib/font'
import data from './data.json'

const Catalog = () => (
  <>
    {data.map((d) => {
      const { title, desc, groups } = d

      return (
        <section className="my-24" key={title}>
          <header className="mb-12">
            <h2 className={cn(
              [neuton.className, 'text-3xl', 'text-chocolate', 'text-center'],
              'sm:text-4xl'
            )}>
              {title}
            </h2>
            {desc && (
              <p className="text-center my-2 text-stone-500">{desc}</p>
            )}
          </header>
          {groups.map((group: GroupProps) => {
            const { title, products } = group

            return (
              <Group key={title} title={title} products={products} />
            )
          })}
        </section>
      )
    })}
  </>
)

export default Catalog
