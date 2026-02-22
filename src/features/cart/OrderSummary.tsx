import { motion } from 'framer-motion'
import { fadeInUp } from '@/lib/motionVariants'
import { formatCurrency } from '@/utils/formatCurrency'
import { ChevronRight } from 'lucide-react'

interface OrderSummaryProps {
  subtotal: number
  delivery?: number
  itemCount?: number
}

export default function OrderSummary({ subtotal, delivery = 6.99, itemCount = 1 }: OrderSummaryProps) {
  const total = subtotal + delivery

  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
      className="bg-white rounded-2xl p-4 md:p-6"
    >
      <h2 className="font-display font-black text-xl md:text-2xl uppercase text-kicks-dark mb-4">
        Order Summary
      </h2>
      <div className="space-y-3 text-sm">
        <div className="flex justify-between">
          <span className="text-gray-500">
            {itemCount} {itemCount === 1 ? 'ITEM' : 'ITEMS'}
          </span>
          <span className="font-semibold">{formatCurrency(subtotal)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500">Delivery</span>
          <span className="font-semibold">{formatCurrency(delivery)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500">Sales Tax</span>
          <span className="text-gray-400">-</span>
        </div>
        <div className="border-t border-gray-100 pt-3 flex justify-between">
          <span className="font-bold text-base">Total</span>
          <span className="font-black text-lg">{formatCurrency(total)}</span>
        </div>
      </div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="mt-5 w-full bg-kicks-dark text-white py-3.5 rounded-xl font-bold text-sm hover:bg-kicks-blue transition-colors tracking-wide"
      >
        CHECKOUT
      </motion.button>

      <button className="mt-2.5 w-full flex items-center justify-center gap-1 text-sm text-gray-500 hover:text-kicks-dark transition-colors py-1">
        User a promo code <ChevronRight className="w-3.5 h-3.5" />
      </button>
    </motion.div>
  )
}
