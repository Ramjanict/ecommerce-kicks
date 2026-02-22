import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface ProductGalleryProps {
  images: string[]
  name: string
}

export default function ProductGallery({ images, name }: ProductGalleryProps) {
  const [selected, setSelected] = useState(0)

  return (
    <div className="grid grid-cols-2 gap-3">
      {images.map((img, i) => (
        <motion.div
          key={i}
          onClick={() => setSelected(i)}
          className={`relative aspect-square rounded-2xl overflow-hidden cursor-pointer bg-kicks-light-gray ${
            i === 0 ? 'col-span-1 row-span-1' : ''
          } ${selected === i ? 'ring-2 ring-kicks-blue' : ''}`}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <img
            src={img}
            alt={`${name} view ${i + 1}`}
            className="w-full h-full object-cover"
          />
        </motion.div>
      ))}
    </div>
  )
}
