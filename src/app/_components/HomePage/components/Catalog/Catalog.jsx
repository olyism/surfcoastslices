const catalog = [
  {
    title: 'Slices',
    desc: 'Comes in boxes of 10 or 32 slices',
    groups: [
      {
        title: 'Slices',
        products: [
          'caramel',
          'chocCherry',
        ],
      },
      {
        title: 'Deluxe slices',
        products: [
          
        ],
      },
      {
        title: 'Specialty slices',
        products: [
    
        ],
      },
    ],
  },
  {
    title: 'Cakes 14"',
    groups: [
      {
        title: 'Cakes',
        products: [
    
        ],
      },
      {
        title: 'Cheese cakes',
        products: [
    
        ],
      },
      {
        title: 'Flourless cakes',
        desc: 'May contain traces of wheat/gluten',
        products: [
    
        ],
      },
      {
        title: 'Mouse cakes and tarts',
        products: [
    
        ],
      },
    ],
  },
]

const Catalog = () => (
  <ul>
    {catalog.map((c) => {
      const { title, desc, groups } = c

      return (
        <li key={title}>
          <h2>{title}</h2>
          {desc && (
            <p>{desc}</p>
          )}
          {groups.map((group) => {
            const { title, products } = group

            return (
              <div key={title}>
                <h3>{title}</h3>
                <ul>
                  {products.map((p) => {
                    return (
                      <li key={p}>{p}</li>
                    )
                  })}
                </ul>
              </div>
            )
          })}
        </li>
      )
    })}
  </ul>
)

export default Catalog
