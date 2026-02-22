import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Heart, ShoppingBag, ChevronLeft, ChevronRight } from 'lucide-react'
import { useAppDispatch } from '@/app/hooks'
import { addToCart } from '@/features/cart/cartSlice'
import { products } from '@/features/products/productData'
import { formatCurrency } from '@/utils/formatCurrency'
import { fadeInUp } from '@/lib/motionVariants'
import Container from '@/components/layout/Container'
import PageTransition from '@/components/layout/PageTransition'
import Badge from '@/components/shared/Badge'
import RatingStars from '@/components/shared/RatingStars'
import SizeSelector from '@/features/products/components/SizeSelector'
import ProductCard from '@/features/products/components/ProductCard'
import Newsletter from '@/components/shared/Newsletter'

export default function ProductDetails() {
  const { id } = useParams<{ id: string }>()
  const dispatch = useAppDispatch()
  const product = products.find((p) => p.id === id) ?? products[0]
  const related = products.filter((p) => p.id !== product.id).slice(0, 4)

  const [selectedSize, setSelectedSize] = useState<number | null>(null)
  const [selectedColor, setSelectedColor] = useState(0)
  const [activeImg, setActiveImg] = useState(0)
  const [added, setAdded] = useState(false)
  const [sizeError, setSizeError] = useState(false)

  const handleAddToCart = () => {
    if (!selectedSize) {
      setSizeError(true)
      setTimeout(() => setSizeError(false), 2000)
      return
    }
    dispatch(
      addToCart({
        id: '',
        productId: product.id,
        name: product.name,
        brand: product.brand,
        price: product.price,
        image: product.images[0],
        size: selectedSize,
        color: product.colors[selectedColor]?.name ?? '',
        quantity: 1,
      })
    )
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <PageTransition>

      {/* ── MOBILE IMAGE SLIDER (full-width, no container) ── */}
      <div className="relative w-full bg-kicks-light-gray md:hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={activeImg}
            src={product.images[activeImg]}
            alt={product.name}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.25 }}
            className="w-full object-contain"
            style={{ height: 280 }}
          />
        </AnimatePresence>

        {/* Dot indicators */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
          {product.images.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveImg(i)}
              className={`rounded-full transition-all ${
                i === activeImg ? 'w-5 h-2 bg-kicks-blue' : 'w-2 h-2 bg-gray-300'
              }`}
            />
          ))}
        </div>

        {/* Prev/Next arrows */}
        <button
          onClick={() => setActiveImg((p) => Math.max(0, p - 1))}
          disabled={activeImg === 0}
          className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 rounded-full flex items-center justify-center shadow disabled:opacity-30"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <button
          onClick={() => setActiveImg((p) => Math.min(product.images.length - 1, p + 1))}
          disabled={activeImg === product.images.length - 1}
          className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 rounded-full flex items-center justify-center shadow disabled:opacity-30"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Thumbnail strip (mobile) */}
      <div className="flex gap-2 px-4 py-3 overflow-x-auto scrollbar-hide md:hidden bg-kicks-light-gray">
        {product.images.map((img, i) => (
          <button
            key={i}
            onClick={() => setActiveImg(i)}
            className={`shrink-0 w-16 h-16 rounded-xl overflow-hidden border-2 transition-all ${
              i === activeImg ? 'border-kicks-blue' : 'border-transparent'
            }`}
          >
            <img src={img} alt="" className="w-full h-full object-cover" />
          </button>
        ))}
      </div>

      {/* ── DESKTOP LAYOUT ─────────────────────────── */}
      <section className="py-6 md:py-10">
        <Container>
          <div className="flex flex-col md:grid md:grid-cols-2 md:gap-12">

            {/* Desktop gallery — hidden on mobile (shown above) */}
            <div className="hidden md:grid grid-cols-2 gap-3 self-start">
              {product.images.map((img, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setActiveImg(i)}
                  className={`aspect-square rounded-2xl overflow-hidden bg-kicks-light-gray cursor-pointer border-2 transition-all ${
                    i === activeImg ? 'border-kicks-blue' : 'border-transparent'
                  }`}
                >
                  <img src={img} alt={`${product.name} view ${i + 1}`} className="w-full h-full object-cover" />
                </motion.div>
              ))}
            </div>

            {/* ── PRODUCT INFO ─────────────────────── */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              className="flex flex-col gap-4 px-0"
            >
              {product.isNew && (
                <Badge label="New Release" variant="new" className="self-start" />
              )}

              <div>
                <h1 className="font-display font-black text-2xl md:text-3xl uppercase text-kicks-dark leading-tight">
                  {product.name}
                </h1>
                <p className="text-xl md:text-2xl font-black text-kicks-blue mt-1">
                  {formatCurrency(product.price)}
                </p>
              </div>

              {/* Color */}
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-kicks-dark mb-2">Color</p>
                <div className="flex gap-2">
                  {product.colors.map((color, i) => (
                    <motion.button
                      key={i}
                      whileTap={{ scale: 0.88 }}
                      onClick={() => setSelectedColor(i)}
                      className="w-8 h-8 rounded-full border-4 transition-all"
                      style={{
                        backgroundColor: color.hex,
                        borderColor: selectedColor === i ? '#3b5bdb' : 'transparent',
                        outline: selectedColor === i ? '2px solid #3b5bdb' : 'none',
                        outlineOffset: 2,
                      }}
                      title={color.name}
                    />
                  ))}
                </div>
              </div>

              {/* Size */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <p className={`text-xs font-bold uppercase tracking-wider ${sizeError ? 'text-red-500' : 'text-kicks-dark'}`}>
                    {sizeError ? 'Please select a size' : 'Size'}
                  </p>
                  <button className="text-xs text-kicks-blue font-bold hover:underline">SIZE CHART</button>
                </div>
                <SizeSelector sizes={product.sizes} selected={selectedSize} onSelect={setSelectedSize} />
              </div>

              {/* Add to Cart + Wishlist */}
              <div className="flex gap-2 mt-1">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={handleAddToCart}
                  className={`flex-1 py-3.5 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all ${
                    added ? 'bg-green-600 text-white' : 'bg-kicks-dark text-white hover:bg-kicks-blue'
                  }`}
                >
                  <ShoppingBag className="w-4 h-4" />
                  {added ? 'Added to Cart!' : 'ADD TO CART'}
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-12 h-12 border-2 border-gray-200 rounded-xl flex items-center justify-center hover:border-red-400 hover:text-red-400 transition-colors"
                >
                  <Heart className="w-4.5 h-4.5" />
                </motion.button>
              </div>

              {/* Buy Now */}
              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-kicks-blue text-white py-3.5 rounded-xl font-bold text-sm hover:bg-blue-700 transition-colors"
              >
                BUY IT NOW
              </motion.button>

              {/* About */}
              <div className="pt-1">
                <p className="text-xs font-bold uppercase tracking-wider text-kicks-dark mb-2">
                  About the Product
                </p>
                <p className="text-gray-500 text-sm">
                  {product.colors[selectedColor]?.name} / {product.colors.map(c => c.name).join(' / ')}
                </p>
                <p className="text-gray-400 text-xs mt-1.5 mb-2">
                  This product is excluded from all promotional discounts and offers.
                </p>
                <ul className="space-y-1">
                  {[
                    'Pay over time in interest-free installments with Affirm, Klarna or Afterpay.',
                    'Join adiClub to get unlimited free standard shipping, returns, & exchanges.',
                  ].map((item, i) => (
                    <li key={i} className="text-gray-500 text-xs flex gap-2">
                      <span className="text-kicks-dark mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ── YOU MAY ALSO LIKE ─────────────────────── */}
      <section className="py-6 md:py-10">
        <Container>
          <div className="flex items-center justify-between mb-5">
            <h2 className="font-display font-black text-xl md:text-2xl text-kicks-dark">
              You may also like
            </h2>
            <div className="flex gap-2">
              {[ChevronLeft, ChevronRight].map((Icon, i) => (
                <button
                  key={i}
                  className="w-8 h-8 rounded-lg bg-kicks-gray text-kicks-dark hover:bg-kicks-blue hover:text-white transition-colors flex items-center justify-center"
                >
                  <Icon className="w-4 h-4" />
                </button>
              ))}
            </div>
          </div>
          {/* 2-col on mobile, 4-col on desktop */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {related.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        </Container>
      </section>

      <Newsletter />
    </PageTransition>
  )
}
