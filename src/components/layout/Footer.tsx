import { Link } from 'react-router-dom'
import { Facebook, Instagram, Twitter } from 'lucide-react'
import Container from './Container'

export default function Footer() {
  return (
    <footer className="bg-kicks-dark text-white">
      <Container>
        {/* Mobile: single column stacked. Desktop: 4 col grid */}
        <div className="py-10 flex flex-col gap-8 md:grid md:grid-cols-4 md:gap-10">

          {/* About */}
          <div>
            <h4 className="text-kicks-orange font-bold text-base mb-3">About us</h4>
            <p className="text-gray-300 text-sm leading-relaxed">
              We are the biggest hyperstore in the universe. We got you all cover with our exclusive
              collections and latest drops.
            </p>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-kicks-orange font-bold text-base mb-3">Categories</h4>
            <ul className="space-y-2">
              {['Runners', 'Sneakers', 'Basketball', 'Outdoor', 'Golf', 'Hiking'].map((item) => (
                <li key={item}>
                  <Link to="/" className="text-gray-300 text-sm hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-kicks-orange font-bold text-base mb-3">Company</h4>
            <ul className="space-y-2">
              {['About', 'Contact', 'Blogs'].map((item) => (
                <li key={item}>
                  <Link to="/" className="text-gray-300 text-sm hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow */}
          <div>
            <h4 className="text-kicks-orange font-bold text-base mb-3">Follow us</h4>
            <div className="flex items-center gap-4">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                  aria-label="Social link"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
              {/* TikTok */}
              <a href="#" className="text-gray-300 hover:text-white transition-colors" aria-label="TikTok">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.83a8.18 8.18 0 004.78 1.52V6.89a4.85 4.85 0 01-1.01-.2z"/>
                </svg>
              </a>
            </div>
          </div>

        </div>
      </Container>

      {/* Giant KICKS watermark */}
      <div className="overflow-hidden select-none">
        <p className="font-display font-black leading-none text-white/10 text-center"
          style={{ fontSize: 'clamp(80px, 22vw, 200px)' }}>
          KICKS
        </p>
      </div>

      <div className="border-t border-white/10 py-3">
        <p className="text-center text-gray-500 text-xs">© All rights reserved</p>
      </div>
    </footer>
  )
}
