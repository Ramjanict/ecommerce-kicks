import Container from "@/components/layout/Container";
import CommonButton from "@/components/shared/CommonButton";
import CommonSpace from "@/components/shared/CommonSpace";
import RatingStars from "@/components/shared/RatingStars";
import SectionTitle from "@/components/shared/SectionTitle";
import { reviews } from "@/features/products/productData";
import { fadeInUp } from "@/lib/motionVariants";
import { motion } from "framer-motion";
const Review = () => {
  return (
    <div>
      <Container>
        <CommonSpace>
          <div className="flex items-center justify-between mb-5">
            <SectionTitle title="Reviews" className="text-kicks-dark!" />
            <CommonButton>SEE ALL</CommonButton>
          </div>

          <div className="md:grid md:grid-cols-3 md:gap-5 space-y-4 md:space-y-0 md:mt-10">
            {reviews.map((review, i) => (
              <motion.div
                key={review.id}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden"
              >
                {/* Review text row */}
                <div className="p-4 flex items-start gap-3">
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-sm text-kicks-dark">
                      Good Quality
                    </p>
                    <p className="text-gray-500 text-xs mt-0.5 truncate">
                      I highly recommend shopping from kicks
                    </p>
                    <RatingStars rating={review.rating} className="mt-1.5" />
                  </div>
                  <img
                    src={review.avatar}
                    alt={review.author}
                    className="w-10 h-10 rounded-full object-cover shrink-0"
                  />
                </div>
                {/* Review image */}
                {review.image && (
                  <div className="h-48 md:h-80 overflow-hidden">
                    <img
                      src={review.image}
                      alt="Review"
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </CommonSpace>
      </Container>
    </div>
  );
};

export default Review;
