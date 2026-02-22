import { cn } from '@/utils/cn'

interface BadgeProps {
  label: string
  variant?: 'new' | 'sale' | 'featured' | 'blue'
  className?: string
}

const variantClasses = {
  new: 'bg-kicks-blue text-white',
  sale: 'bg-red-500 text-white',
  featured: 'bg-kicks-orange text-white',
  blue: 'bg-kicks-blue text-white',
}

export default function Badge({ label, variant = 'new', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-2 py-0.5 rounded-md text-xs font-bold uppercase tracking-wide',
        variantClasses[variant],
        className
      )}
    >
      {label}
    </span>
  )
}
