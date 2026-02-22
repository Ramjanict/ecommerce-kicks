import { Star } from 'lucide-react'
import { cn } from '@/utils/cn'

interface RatingStarsProps {
  rating: number
  max?: number
  size?: 'sm' | 'md'
  className?: string
}

export default function RatingStars({ rating, max = 5, size = 'sm', className }: RatingStarsProps) {
  const starSize = size === 'sm' ? 'w-3.5 h-3.5' : 'w-5 h-5'
  return (
    <div className={cn('flex items-center gap-0.5', className)}>
      {Array.from({ length: max }).map((_, i) => (
        <Star
          key={i}
          className={cn(starSize, i < Math.floor(rating) ? 'fill-amber-400 text-amber-400' : 'fill-gray-200 text-gray-200')}
        />
      ))}
      <span className="ml-1 text-xs font-semibold text-gray-600">{rating.toFixed(1)}</span>
    </div>
  )
}
