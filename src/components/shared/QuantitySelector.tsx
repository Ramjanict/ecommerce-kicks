import { Minus, Plus } from "lucide-react";

interface QuantitySelectorProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
}

export default function QuantitySelector({
  value,
  onChange,
  min = 1,
  max = 99,
}: QuantitySelectorProps) {
  return (
    <div className="flex items-center gap-1 border border-gray-200 rounded-lg overflow-hidden">
      <button
        onClick={() => onChange(Math.max(min, value - 1))}
        disabled={value <= min}
        className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 disabled:opacity-40 transition-colors"
      >
        <Minus className="w-3.5 h-3.5 cursor-pointer" />
      </button>
      <span className="w-8 text-center text-sm font-semibold">{value}</span>
      <button
        onClick={() => onChange(Math.min(max, value + 1))}
        disabled={value >= max}
        className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 disabled:opacity-40 transition-colors"
      >
        <Plus className="w-3.5 h-3.5 cursor-pointer" />
      </button>
    </div>
  );
}
