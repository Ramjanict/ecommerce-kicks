import { useAppDispatch } from "@/app/hooks";
import QuantitySelector from "@/components/shared/QuantitySelector";
import { formatCurrency } from "@/utils/formatCurrency";
import { motion } from "framer-motion";
import { Trash2 } from "lucide-react";
import {
  CartItem as CartItemType,
  removeFromCart,
  updateQuantity,
} from "./cartSlice";

interface CartItemProps {
  item: CartItemType;
}

export default function CartItem({ item }: CartItemProps) {
  const dispatch = useAppDispatch();

  return (
    <motion.div
      layout
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20, height: 0 }}
      className="flex gap-3 bg-kicks-light-gray rounded-2xl p-3 md:p-4"
    >
      <div className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-xl overflow-hidden shrink-0">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex-1 min-w-0 flex flex-col justify-between">
        <div className="flex items-start justify-between gap-1">
          <div className="min-w-0">
            <p className="font-display font-bold text-sm uppercase tracking-wide text-kicks-dark line-clamp-2 leading-tight">
              {item.name}
            </p>
            <p className="text-gray-500 text-xs mt-0.5">{item.category.name}</p>
          </div>
          <span className="font-black text-kicks-blue text-sm shrink-0 ml-1">
            {formatCurrency(item.price)}
          </span>
        </div>

        <div className="flex items-center justify-between mt-2">
          <span className="text-xs text-gray-600 border border-gray-200 bg-white rounded-lg px-2 py-0.5">
            Qty {item.quantity}
          </span>
          <button
            onClick={() => dispatch(removeFromCart(item.id))}
            className="p-1.5 hover:bg-red-50 rounded-lg transition-colors"
            aria-label="Remove"
          >
            <Trash2 className="w-3.5 h-3.5 text-red-400 cursor-pointer" />
          </button>
        </div>

        <div className="mt-2">
          <QuantitySelector
            value={item.quantity}
            onChange={(q) =>
              dispatch(updateQuantity({ id: item.id, quantity: q }))
            }
          />
        </div>
      </div>
    </motion.div>
  );
}
