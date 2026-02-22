import { cardHover, fadeInUp } from "@/lib/motionVariants";
import { formatCurrency } from "@/utils/formatCurrency";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Product } from "../types";

interface ProductCardProps {
  product: Product;
  index?: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, index = 0 }) => {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.07 }}
    >
      <motion.div
        initial="rest"
        whileHover="hover"
        variants={cardHover}
        className="h-full flex flex-co shadow-none!"
      >
        <Link to={`/product/${product.id}`} className="flex flex-col h-full">
          <div
            className="relative  overflow-hidden border-6 border-white rounded-2xl "
            style={{ aspectRatio: "1/1" }}
          >
            <div className="absolute top-0 left-0 w-[58px] h-[38px] z-10 rounded-tl-2xl rounded-br-2xl bg-kicks-blue text-white text-xs font-bold flex items-center justify-center">
              New
            </div>

            <motion.img
              src={product.images[0]}
              alt={product.title}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.07 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            />
          </div>

          {/* Info */}
          <div className="p-2.5 md:p-3.5 flex flex-col flex-1 mt-2 ">
            <p className="font-display font-bold text-xs md:text-sm uppercase tracking-wide text-kicks-dark line-clamp-2 leading-tight mb-2 flex-1">
              {product.title}
            </p>
            <div className="flex items-center justify-between bg-kicks-dark text-white rounded-lg px-2 py-1.5 md:px-3 md:py-2 text-[10px] md:text-xs font-bold mt-auto">
              <span>VIEW PRODUCT</span>
              <span className="text-kicks-orange">
                {formatCurrency(product.price)}
              </span>
            </div>
          </div>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default ProductCard;
