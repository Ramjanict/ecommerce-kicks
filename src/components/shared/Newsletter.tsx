import { useState } from 'react'
import { motion } from 'framer-motion'
import { fadeInUp } from '@/lib/motionVariants'
import Container from '@/components/layout/Container'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email.trim()) {
      setSubmitted(true)
      setEmail('')
      setTimeout(() => setSubmitted(false), 3000)
    }
  }

  return (
    <section className="px-4 py-6 md:py-8">
      <Container>
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-kicks-blue rounded-3xl p-7 md:p-12"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex-1">
              <h2 className="font-display font-black text-2xl md:text-4xl text-white uppercase leading-tight mb-1">
                Join our KicksPlus<br />Club &amp; get 15% off
              </h2>
              <p className="text-blue-100 text-sm mb-5">Sign up for free! Join the community.</p>
              <form onSubmit={handleSubmit} className="flex gap-2 max-w-sm">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email address"
                  className="flex-1 min-w-0 px-4 py-3 rounded-xl text-sm bg-white/20 text-white placeholder-blue-200 border border-white/30 focus:outline-none focus:border-white/70 transition-colors"
                />
                <button
                  type="submit"
                  className="bg-kicks-dark text-white px-5 py-3 rounded-xl text-sm font-bold hover:bg-black transition-colors shrink-0"
                >
                  {submitted ? '✓' : 'SUBMIT'}
                </button>
              </form>
            </div>
            {/* Big KICKS logo — hidden on small mobile, shows md+ */}
            <div className="hidden md:flex items-center gap-1 select-none">
              <span className="font-display font-black text-6xl text-white/20 tracking-widest">KICKS</span>
              <span className="text-kicks-orange font-black text-3xl leading-none mb-4">+</span>
            </div>
          </div>

          {/* Mobile KICKS branding at bottom */}
          <div className="mt-4 md:hidden select-none">
            <span className="font-display font-black text-4xl text-white/20 tracking-widest">KICKS</span>
            <span className="text-kicks-orange font-black text-2xl leading-none">+</span>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
