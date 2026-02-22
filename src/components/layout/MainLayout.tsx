import { useLocation, Outlet } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './Navbar'
import Footer from './Footer'

export default function MainLayout() {
  const location = useLocation()

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <AnimatePresence mode="wait" initial={false}>
          <Outlet key={location.pathname} />
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  )
}
