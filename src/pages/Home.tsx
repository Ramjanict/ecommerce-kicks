import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, ChevronRight, ChevronLeft, ArrowUpRight } from 'lucide-react'
import { fadeInUp, staggerContainer, slideInLeft, slideInRight, scaleIn } from '@/lib/motionVariants'
import Container from '@/components/layout/Container'
import Newsletter from '@/components/shared/Newsletter'
import ProductCard from '@/features/products/components/ProductCard'
import RatingStars from '@/components/shared/RatingStars'
import PageTransition from '@/components/layout/PageTransition'
import Badge from '@/components/shared/Badge'
import { products, reviews, categories } from '@/features/products/productData'

export default function Home() {
  const newDrops = products.filter((p) => p.isNew)
  const [catPage, setCatPage] = useState(0)
  const [heroThumb, setHeroThumb] = useState(0)

  const heroThumbs = [
    'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format',
    'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&auto=format',
    'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&auto=format',
  ]

  return (
    <PageTransition>

      {/* ── HERO ─────────────────────────────────────── */}
      <section className="bg-kicks-light-gray">
        <Container>
          <div className="pt-5 pb-6">
            {/* Headline */}
            <motion.h1
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              className="font-display font-black uppercase leading-none tracking-tight mb-4"
              style={{ fontSize: 'clamp(52px, 14vw, 110px)' }}
            >
              DO IT{' '}
              <span className="text-kicks-blue">RIGHT</span>
            </motion.h1>

            {/* Hero card */}
            <motion.div
              variants={scaleIn}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.15 }}
              className="relative rounded-2xl overflow-hidden bg-amber-800"
              style={{ minHeight: 220 }}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={heroThumb}
                  src={heroThumbs[heroThumb]}
                  alt="Nike Air Max"
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full object-cover absolute inset-0"
                  style={{ minHeight: 220 }}
                />
              </AnimatePresence>

              {/* Gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/25 to-transparent" />

              {/* Vertical badge */}
              <div
                className="absolute left-0 top-1/2 -translate-y-1/2 bg-kicks-dark text-white font-bold tracking-widest uppercase py-4 px-1 rounded-r-md text-[7px]"
                style={{ writingMode: 'vertical-rl', transform: 'translateY(-50%) rotate(180deg)' }}
              >
                Nike product of the year
              </div>

              {/* Content */}
              <div className="relative z-10 p-5 flex flex-col justify-end" style={{ minHeight: 220 }}>
                <div className="mt-auto">
                  <h2 className="font-display font-black text-2xl md:text-4xl uppercase text-white leading-tight">
                    Nike Air Max
                  </h2>
                  <p className="text-white/80 text-xs md:text-sm mt-1 mb-3 max-w-[200px]">
                    Nike introducing the new air max for everyone's comfort
                  </p>
                  <Link
                    to="/product/5"
                    className="inline-flex items-center gap-1.5 bg-kicks-blue text-white px-4 py-2 rounded-lg text-xs font-bold hover:bg-blue-700 transition-colors"
                  >
                    SHOP NOW <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Thumbnails right */}
              <div className="absolute right-3 bottom-3 flex flex-col gap-2 z-10">
                {heroThumbs.slice(1).map((src, i) => (
                  <motion.button
                    key={i}
                    whileHover={{ scale: 1.07 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setHeroThumb(i + 1)}
                    className={`w-14 h-14 md:w-18 md:h-18 rounded-xl overflow-hidden border-2 transition-all ${
                      heroThumb === i + 1 ? 'border-white' : 'border-white/30'
                    }`}
                  >
                    <img src={src} alt="" className="w-full h-full object-cover" />
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ── NEW DROPS ─────────────────────────────────── */}
      <section className="py-8">
        <Container>
          {/* Header */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex items-end justify-between mb-5"
          >
            <h2 className="font-display font-black uppercase leading-tight"
              style={{ fontSize: 'clamp(20px, 5vw, 36px)' }}>
              Don't miss out<br />new drops
            </h2>
            <Link
              to="/"
              className="flex items-center gap-1 bg-kicks-blue text-white px-3 py-1.5 rounded-lg text-[11px] font-bold hover:bg-blue-700 transition-colors shrink-0 ml-3"
            >
              SHOP NEW DROPS <ChevronRight className="w-3 h-3" />
            </Link>
          </motion.div>

          {/* Mobile: 2-col grid | Desktop: 4-col */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {newDrops.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        </Container>
      </section>

      {/* ── CATEGORIES ───────────────────────────────── */}
      <section className="py-8 bg-kicks-dark">
        <Container>
          <div className="flex items-center justify-between mb-5">
            <h2 className="font-display font-black text-white uppercase text-2xl md:text-4xl">
              Categories
            </h2>
            <div className="flex gap-2">
              <button
                onClick={() => setCatPage((p) => Math.max(0, p - 1))}
                className="w-8 h-8 rounded-lg bg-white/10 text-white hover:bg-kicks-blue transition-colors flex items-center justify-center"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => setCatPage((p) => p + 1)}
                className="w-8 h-8 rounded-lg bg-white/10 text-white hover:bg-kicks-blue transition-colors flex items-center justify-center"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Mobile: single column stacked. Desktop: 2-col */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.id}
                variants={i === 0 ? slideInLeft : slideInRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative rounded-2xl overflow-hidden bg-kicks-light-gray cursor-pointer group"
                style={{ minHeight: 260 }}
              >
                <motion.img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-contain p-6 group-hover:scale-105 transition-transform duration-500 absolute inset-0"
                  style={{ minHeight: 260 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <h3 className="font-display font-black text-xl uppercase text-kicks-dark leading-tight">
                    {cat.name.split(' ')[0]}<br />{cat.name.split(' ').slice(1).join(' ')}
                  </h3>
                </div>
                <button className="absolute bottom-4 right-4 w-9 h-9 bg-kicks-dark rounded-lg flex items-center justify-center text-white hover:bg-kicks-blue transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── REVIEWS ──────────────────────────────────── */}
      <section className="py-8 bg-kicks-dark">
        <Container>
          <div className="flex items-center justify-between mb-5">
            <h2 className="font-display font-black text-white uppercase text-2xl md:text-4xl">
              Reviews
            </h2>
            <button className="bg-kicks-blue text-white text-xs font-bold px-4 py-2 rounded-xl hover:bg-blue-700 transition-colors">
              SEE ALL
            </button>
          </div>

          {/* Mobile: show first review as card + image below. Desktop: 3-col grid */}
          <div className="md:grid md:grid-cols-3 md:gap-5 space-y-4 md:space-y-0">
            {reviews.map((review, i) => (
              <motion.div
                key={review.id}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden"
              >
                {/* Review text row */}
                <div className="p-4 flex items-start gap-3">
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-sm text-kicks-dark">Good Quality</p>
                    <p className="text-gray-500 text-xs mt-0.5 truncate">
                      I highly recommend shopping from kicks
                    </p>
                    <RatingStars rating={review.rating} className="mt-1.5" />
                  </div>
                  <img
                    src={review.avatar}
                    alt={review.author}
                    className="w-10 h-10 rounded-full object-cover shrink-0"
                  />
                </div>
                {/* Review image */}
                {review.image && (
                  <div className="h-48 md:h-40 overflow-hidden">
                    <img src={review.image} alt="Review" className="w-full h-full object-cover" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── NEWSLETTER ───────────────────────────────── */}
      <Newsletter />

    </PageTransition>
  )
}
