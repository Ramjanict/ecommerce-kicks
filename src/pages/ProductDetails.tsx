import { useAppDispatch } from "@/app/hooks";
import Container from "@/components/layout/Container";
import PageTransition from "@/components/layout/PageTransition";
import Badge from "@/components/shared/Badge";
import ColorCircleButton from "@/components/shared/ColorCircleButton";
import { addToCart } from "@/features/cart/cartSlice";
import ProductCard from "@/features/products/components/ProductCard";
import SizeSelector from "@/features/products/components/SizeSelector";
import {
  useGetAllProductsQuery,
  useGetProductsDetailsQuery,
} from "@/features/products/productAPI";
import { fadeInUp } from "@/lib/motionVariants";
import { formatCurrency } from "@/utils/formatCurrency";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Heart, ShoppingBag } from "lucide-react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const { data, isLoading } = useGetAllProductsQuery();
  const { data: productDetails } = useGetProductsDetailsQuery(Number(id), {
    skip: !id,
  });

  const recommendedProducts =
    data?.filter((p) => p.id !== productDetails?.id) ?? [];
  console.log("productDetails", productDetails, isLoading);

  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  const [activeImg, setActiveImg] = useState(0);
  const [added, setAdded] = useState(false);
  const [sizeError, setSizeError] = useState(false);

  const handleAddToCart = () => {
    if (!selectedSize) {
      setSizeError(true);
      setTimeout(() => setSizeError(false), 2000);
      return;
    }
    dispatch(
      addToCart({
        productId: productDetails?.id || 0,
        name: productDetails?.title || "",
        price: productDetails?.price || 0,
        image: productDetails?.images[0] || "",
        category: productDetails?.category || {
          id: 0,
          name: "",
          slug: "",
          image: "",
          creationAt: "",
          updatedAt: "",
        },
        quantity: 1,
      }),
    );
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <PageTransition>
      <div className="relative w-full bg-kicks-light-gray md:hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={activeImg}
            src={productDetails?.images[0]}
            alt={productDetails?.title}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.25 }}
            className="w-full object-contain"
            style={{ height: 280 }}
          />
        </AnimatePresence>

        {/* Dot indicators */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
          {productDetails?.images.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveImg(i)}
              className={`rounded-full transition-all ${
                i === activeImg
                  ? "w-5 h-2 bg-kicks-blue"
                  : "w-2 h-2 bg-gray-300"
              }`}
            />
          ))}
        </div>

        <button
          onClick={() => setActiveImg((p) => Math.max(0, p - 1))}
          disabled={activeImg === 0}
          className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 rounded-full flex items-center justify-center shadow disabled:opacity-30"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <button
          onClick={() =>
            setActiveImg((p) =>
              Math.min((productDetails?.images.length ?? 1) - 1, p + 1),
            )
          }
          disabled={activeImg === (productDetails?.images.length ?? 1) - 1}
          className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 rounded-full flex items-center justify-center shadow disabled:opacity-30"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      <div className="flex gap-2 px-4 py-3 overflow-x-auto scrollbar-hide md:hidden bg-kicks-light-gray">
        {productDetails?.images.map((img, i) => (
          <button
            key={i}
            onClick={() => setActiveImg(i)}
            className={`shrink-0 w-16 h-16 rounded-xl overflow-hidden border-2 transition-all ${
              i === activeImg ? "border-kicks-blue" : "border-transparent"
            }`}
          >
            <img src={img} alt="" className="w-full h-full object-cover" />
          </button>
        ))}
      </div>

      <section className="py-6 md:py-10">
        <Container>
          <div className="flex flex-col md:grid md:grid-cols-2 md:gap-12">
            <div className="hidden md:grid grid-cols-2 gap-3 self-start">
              {productDetails?.images.map((img, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setActiveImg(i)}
                  className={`aspect-square rounded-2xl overflow-hidden bg-kicks-light-gray cursor-pointer border-2 transition-all ${
                    i === activeImg ? "border-kicks-blue" : "border-transparent"
                  }`}
                >
                  <img
                    src={img}
                    alt={`${productDetails.title} view ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              ))}
            </div>

            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              className="flex flex-col gap-4 px-0"
            >
              <Badge label="New Release" variant="new" className="self-start" />

              <div>
                <h1 className="font-display font-black text-2xl md:text-3xl uppercase text-kicks-dark leading-tight">
                  {productDetails?.title}
                </h1>
                <p className="text-xl md:text-2xl font-black text-kicks-blue mt-1">
                  {formatCurrency(productDetails?.price || 0)}
                </p>
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-kicks-dark mb-2">
                  Color
                </p>
                <div className="flex gap-3">
                  <ColorCircleButton color="#3b5bdb" size={40} />
                  <ColorCircleButton color="#f03e3e" size={40} />
                  <ColorCircleButton color="#c1c1c1" size={40} />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <p
                    className={`text-xs font-bold uppercase tracking-wider ${sizeError ? "text-red-500" : "text-kicks-dark"}`}
                  >
                    {sizeError ? "Please select a size" : "Size"}
                  </p>
                  <button className="text-xs text-kicks-blue font-bold hover:underline">
                    SIZE CHART
                  </button>
                </div>
                <SizeSelector
                  sizes={[56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68]}
                  selected={selectedSize}
                  onSelect={setSelectedSize}
                />
              </div>

              <div className="flex gap-2 mt-1">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={handleAddToCart}
                  className={`flex-1 py-3.5 rounded-xl cursor-pointer font-bold text-sm flex items-center justify-center gap-2 transition-all ${
                    added
                      ? "bg-green-600 text-white"
                      : "bg-kicks-dark text-white hover:bg-kicks-blue"
                  }`}
                >
                  <ShoppingBag className="w-4 h-4" />
                  {added ? "Added to Cart!" : "ADD TO CART"}
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-12 h-12 border-2 cursor-pointer border-gray-200 rounded-xl flex items-center justify-center hover:border-red-400 hover:text-red-400 transition-colors "
                >
                  <Heart className="w-4.5 h-4.5" />
                </motion.button>
              </div>

              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-kicks-blue text-white py-3.5 cursor-pointer rounded-xl font-bold text-sm hover:bg-blue-700 transition-colors"
              >
                BUY IT NOW
              </motion.button>

              <div className="pt-1">
                <p className="text-xs font-bold uppercase tracking-wider text-kicks-dark mb-2">
                  About the Product
                </p>
                <p className="text-gray-500 text-sm">
                  {productDetails?.description}
                </p>
                <p className="text-gray-400 text-xs mt-1.5 mb-2">
                  This product is excluded from all promotional discounts and
                  offers.
                </p>
                <ul className="space-y-1">
                  {[
                    "Pay over time in interest-free installments with Affirm, Klarna or Afterpay.",
                    "Join adiClub to get unlimited free standard shipping, returns, & exchanges.",
                  ].map((item, i) => (
                    <li key={i} className="text-gray-500 text-xs flex gap-2">
                      <span className="text-kicks-dark mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      <section className="py-6 md:py-10">
        <Container>
          <div className="flex items-center justify-between mb-5">
            <h2 className="font-display font-black text-xl md:text-2xl text-kicks-dark">
              You may also like
            </h2>
            <div className="flex gap-2">
              {[ChevronLeft, ChevronRight].map((Icon, i) => (
                <button
                  key={i}
                  className="w-8 h-8 rounded-lg bg-kicks-gray text-kicks-dark hover:bg-kicks-blue hover:text-white transition-colors flex items-center justify-center"
                >
                  <Icon className="w-4 h-4" />
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {recommendedProducts.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        </Container>
      </section>
    </PageTransition>
  );
};

export default ProductDetails;
