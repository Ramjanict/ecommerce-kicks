import { Product } from '../types'
import ProductCard from './ProductCard'

interface ProductGridProps {
  products: Product[]
  columns?: 2 | 3 | 4
}

const colClasses = {
  2: 'grid-cols-1 sm:grid-cols-2',
  3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
  4: 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4',
}

export default function ProductGrid({ products, columns = 4 }: ProductGridProps) {
  return (
    <div className={`grid ${colClasses[columns]} gap-4`}>
      {products.map((product, i) => (
        <ProductCard key={product.id} product={product} index={i} />
      ))}
    </div>
  )
}
