import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import { pageVariants } from '@/lib/motionVariants'

interface PageTransitionProps {
  children: ReactNode
}

export default function PageTransition({ children }: PageTransitionProps) {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      {children}
    </motion.div>
  )
}
