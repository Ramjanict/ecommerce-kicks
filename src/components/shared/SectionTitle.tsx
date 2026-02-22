import { motion } from 'framer-motion'
import { fadeInUp } from '@/lib/motionVariants'
import { ReactNode } from 'react'

interface SectionTitleProps {
  children: ReactNode
  action?: ReactNode
  className?: string
}

export default function SectionTitle({ children, action, className }: SectionTitleProps) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={`flex items-end justify-between mb-6 ${className ?? ''}`}
    >
      <h2 className="font-display font-black text-3xl md:text-4xl tracking-tight text-kicks-dark uppercase">
        {children}
      </h2>
      {action && <div>{action}</div>}
    </motion.div>
  )
}
