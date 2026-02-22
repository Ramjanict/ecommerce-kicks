import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, User, ShoppingBag, Menu, X, Flame, ChevronDown } from 'lucide-react'
import { useAppSelector } from '@/app/hooks'
import { selectCartCount } from '@/features/cart/cartSlice'
import Container from './Container'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const cartCount = useAppSelector(selectCartCount)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    setSearchOpen(false)
    setSearchQuery('')
  }

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-white'
        } border-b border-gray-100`}
      >
        <Container>
          <div className="flex items-center justify-between h-14 md:h-16">

            {/* LEFT: hamburger (mobile) | nav links (desktop) */}
            <div className="flex items-center gap-4 min-w-[80px]">
              <button
                onClick={() => setMobileOpen(true)}
                className="md:hidden p-1.5 rounded-lg hover:bg-gray-100 transition-colors"
                aria-label="Open menu"
              >
                <Menu className="w-5 h-5" />
              </button>
              <div className="hidden md:flex items-center gap-5">
                <Link to="/" className="flex items-center gap-1.5 text-sm font-semibold text-kicks-dark hover:text-kicks-blue transition-colors">
                  <Flame className="w-4 h-4 text-kicks-orange" />
                  New Drops
                </Link>
                <button className="flex items-center gap-1 text-sm font-medium text-kicks-dark hover:text-kicks-blue transition-colors">
                  Men <ChevronDown className="w-3.5 h-3.5" />
                </button>
                <button className="flex items-center gap-1 text-sm font-medium text-kicks-dark hover:text-kicks-blue transition-colors">
                  Women <ChevronDown className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* CENTER: Logo — always absolute centered */}
            <Link to="/" className="absolute left-1/2 -translate-x-1/2">
              <span className="font-display font-black text-xl md:text-2xl tracking-widest text-kicks-dark">
                KICKS
              </span>
            </Link>

            {/* RIGHT: search (desktop) | user | cart */}
            <div className="flex items-center gap-1 min-w-[80px] justify-end">
              <button
                onClick={() => setSearchOpen(true)}
                className="hidden md:flex p-2 rounded-lg hover:bg-gray-100 transition-colors"
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>
              <Link to="/" className="p-2 rounded-lg hover:bg-gray-100 transition-colors" aria-label="Account">
                <User className="w-5 h-5" />
              </Link>
              <Link
                to="/cart"
                className="relative p-2 rounded-lg hover:bg-gray-100 transition-colors"
                aria-label="Cart"
              >
                <ShoppingBag className="w-5 h-5" />
                <AnimatePresence>
                  {cartCount > 0 && (
                    <motion.span
                      key="badge"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      className="absolute -top-0.5 -right-0.5 bg-kicks-orange text-white font-black rounded-full flex items-center justify-center"
                      style={{ fontSize: 9, minWidth: 17, height: 17, padding: '0 3px' }}
                    >
                      {cartCount}
                    </motion.span>
                  )}
                </AnimatePresence>
              </Link>
            </div>

          </div>
        </Container>
      </motion.nav>

      {/* Search overlay */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/40 backdrop-blur-sm"
            onClick={() => setSearchOpen(false)}
          >
            <motion.div
              initial={{ y: -80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -80, opacity: 0 }}
              transition={{ type: 'spring', damping: 28, stiffness: 320 }}
              className="bg-white shadow-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <Container>
                <form onSubmit={handleSearch} className="flex items-center gap-3 py-4">
                  <Search className="w-5 h-5 text-gray-400 shrink-0" />
                  <input
                    autoFocus
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search sneakers, brands..."
                    className="flex-1 text-base outline-none bg-transparent"
                  />
                  <button type="button" onClick={() => setSearchOpen(false)} className="p-1.5 hover:bg-gray-100 rounded-lg">
                    <X className="w-5 h-5" />
                  </button>
                </form>
              </Container>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-black/50"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: -280 }}
              animate={{ x: 0 }}
              exit={{ x: -280 }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed left-0 top-0 bottom-0 z-[101] w-72 bg-white shadow-2xl flex flex-col"
            >
              <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
                <span className="font-display font-black text-xl tracking-widest">KICKS</span>
                <button onClick={() => setMobileOpen(false)} className="p-1.5 hover:bg-gray-100 rounded-lg">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <nav className="flex-1 overflow-y-auto p-4 space-y-1">
                {[
                  { label: '🔥 New Drops', to: '/' },
                  { label: 'Men', to: '/' },
                  { label: 'Women', to: '/' },
                  { label: 'Runners', to: '/' },
                  { label: 'Sneakers', to: '/' },
                  { label: 'Basketball', to: '/' },
                  { label: 'Outdoor', to: '/' },
                  { label: 'Golf', to: '/' },
                  { label: 'Hiking', to: '/' },
                ].map((item) => (
                  <Link
                    key={item.label}
                    to={item.to}
                    onClick={() => setMobileOpen(false)}
                    className="block px-4 py-3 rounded-xl text-sm font-semibold hover:bg-kicks-light-gray transition-colors text-kicks-dark"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Spacer */}
      <div className="h-14 md:h-16" />
    </>
  )
}
