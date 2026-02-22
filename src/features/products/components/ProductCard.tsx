import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { cardHover, fadeInUp } from '@/lib/motionVariants'
import { Product } from '../types'
import { formatCurrency } from '@/utils/formatCurrency'
import Badge from '@/components/shared/Badge'

interface ProductCardProps {
  product: Product
  index?: number
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      transition={{ delay: index * 0.07 }}
    >
      <motion.div
        initial="rest"
        whileHover="hover"
        variants={cardHover}
        className="bg-white rounded-2xl overflow-hidden h-full flex flex-col"
      >
        <Link to={`/product/${product.id}`} className="flex flex-col h-full">
          {/* Image */}
          <div className="relative bg-kicks-light-gray overflow-hidden" style={{ aspectRatio: '1/1' }}>
            {product.isNew && (
              <div className="absolute top-2 left-2 z-10">
                <Badge label="New" variant="new" />
              </div>
            )}
            {product.originalPrice && (
              <div className="absolute top-2 right-2 z-10">
                <Badge label="10% off" variant="sale" />
              </div>
            )}
            <motion.img
              src={product.images[0]}
              alt={product.name}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.07 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
            />
          </div>

          {/* Info */}
          <div className="p-2.5 md:p-3.5 flex flex-col flex-1">
            <p className="font-display font-bold text-xs md:text-sm uppercase tracking-wide text-kicks-dark line-clamp-2 leading-tight mb-2 flex-1">
              {product.name}
            </p>
            <div className="flex items-center justify-between bg-kicks-dark text-white rounded-lg px-2 py-1.5 md:px-3 md:py-2 text-[10px] md:text-xs font-bold mt-auto">
              <span>VIEW PRODUCT</span>
              <span className="text-kicks-orange">{formatCurrency(product.price)}</span>
            </div>
          </div>
        </Link>
      </motion.div>
    </motion.div>
  )
}
