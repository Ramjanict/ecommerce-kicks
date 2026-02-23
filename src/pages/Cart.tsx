import { useAppSelector } from "@/app/hooks";
import Container from "@/components/layout/Container";
import PageTransition from "@/components/layout/PageTransition";
import CartItemComponent from "@/features/cart/CartItem";
import { selectCartItems, selectCartTotal } from "@/features/cart/cartSlice";
import OrderSummary from "@/features/cart/OrderSummary";
import { useGetAllProductsQuery } from "@/features/products/productAPI";
import ProductCarouselSection from "@/features/products/ProductCarouselSection";
import { fadeInUp } from "@/lib/motionVariants";
import { AnimatePresence, motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

export default function Cart() {
  const items = useAppSelector(selectCartItems);
  const total = useAppSelector(selectCartTotal);
  const { data, isLoading } = useGetAllProductsQuery();
  const allProducts = data ?? [];

  return (
    <PageTransition>
      <section className="py-5 md:py-8">
        <Container>
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="mb-5"
          >
            <h2 className="font-bold text-lg md:text-xl text-kicks-dark">
              Saving to celebrate
            </h2>
            <p className="text-gray-500 text-sm mt-1 leading-relaxed">
              Enjoy up to 60% off thousands of styles during the End of Year
              sale - while supplies last. No code needed.{" "}
              <button className="text-kicks-blue font-semibold hover:underline">
                Join us
              </button>{" "}
              or{" "}
              <button className="text-kicks-blue font-semibold hover:underline">
                Sign-in
              </button>
            </p>
          </motion.div>

          {items.length === 0 ? (
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              className="flex flex-col items-center justify-center py-20 text-center"
            >
              <ShoppingBag className="w-16 h-16 text-gray-200 mb-4" />
              <h3 className="font-display font-black text-2xl uppercase text-gray-300 mb-2">
                Your bag is empty
              </h3>
              <p className="text-gray-400 text-sm mb-6">
                Add some kicks to get started
              </p>
              <Link
                to="/"
                className="bg-kicks-dark text-white px-8 py-3 rounded-xl font-bold hover:bg-kicks-blue transition-colors"
              >
                Shop Now
              </Link>
            </motion.div>
          ) : (
            <div className="flex flex-col lg:grid lg:grid-cols-3 lg:gap-8 gap-5">
              <div className="lg:col-span-2">
                <div className="bg-white rounded-2xl p-4 md:p-6">
                  <h2 className="font-display font-black text-xl md:text-2xl uppercase text-kicks-dark mb-0.5">
                    Your Bag
                  </h2>
                  <p className="text-gray-400 text-xs mb-4">
                    Items in your bag not reserved- check out now to make them
                    yours.
                  </p>
                  <div className="space-y-3">
                    <AnimatePresence mode="popLayout">
                      {items.map((item) => (
                        <CartItemComponent key={item.id} item={item} />
                      ))}
                    </AnimatePresence>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-1">
                <OrderSummary
                  subtotal={total}
                  itemCount={items.reduce((s, i) => s + i.quantity, 0)}
                />
              </div>
            </div>
          )}
        </Container>
      </section>

      <section className="py-6 md:py-10">
        <ProductCarouselSection
          title="You may also like"
          products={allProducts}
          isLoading={isLoading}
        />
      </section>
    </PageTransition>
  );
}
