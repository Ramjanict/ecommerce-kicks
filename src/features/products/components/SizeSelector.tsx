import { cn } from "@/utils/cn";
import { motion } from "framer-motion";

interface SizeSelectorProps {
  sizes: number[];
  selected: number | null;
  onSelect: (size: number) => void;
}

export default function SizeSelector({
  sizes,
  selected,
  onSelect,
}: SizeSelectorProps) {
  return (
    <div className="flex flex-wrap gap-1.5 md:gap-2">
      {sizes.map((size) => (
        <motion.button
          key={size}
          whileTap={{ scale: 0.9 }}
          onClick={() => onSelect(size)}
          className={cn(
            "w-10 h-10 md:w-11 md:h-11 cursor-pointer rounded-lg text-xs md:text-sm font-bold border-2 transition-all duration-150",
            selected === size
              ? "bg-kicks-dark text-white border-kicks-dark"
              : "bg-white text-kicks-dark border-gray-200 hover:border-kicks-dark",
          )}
        >
          {size}
        </motion.button>
      ))}
    </div>
  );
}
