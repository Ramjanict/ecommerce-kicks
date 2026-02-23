import image1 from "@/assets/images/product1.jpg";
import image2 from "@/assets/images/small1.jpg";
import image3 from "@/assets/images/small2.jpg";
import CommonButton from "@/components/shared/CommonButton";
import CommonSpace from "@/components/shared/CommonSpace";
import SectionTitle from "@/components/shared/SectionTitle";
import { scaleIn } from "@/lib/motionVariants";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
const heroThumbs = [image1, image2, image3];
const Hero = () => {
  const [heroThumb, setHeroThumb] = useState(0);

  return (
    <div className="w-full mx-auto max-w-330 px-4 sm:px-6 lg:px-8">
      <div className="w-full  flex items-center justify-center  overflow-hidden">
        <h1 className="flex items-center whitespace-nowrap font-bold leading-none text-[60px] sm:text-[60px] lg:text-[100px] xl:text-[216px]">
          <span className="text-kicks-dark">DO&nbsp;IT&nbsp;</span>
          <span className="text-kicks-blue">RIGHT</span>
        </h1>
      </div>

      <CommonSpace>
        <motion.div
          variants={scaleIn}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.15 }}
          className="relative rounded-2xl overflow-hidden bg-amber-800"
          style={{ minHeight: 600 }}
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={heroThumb}
              src={heroThumbs[heroThumb]}
              alt="Nike Air Max"
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="w-full h-full object-cover absolute inset-0"
              style={{ minHeight: 220 }}
            />
          </AnimatePresence>

          <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/25 to-transparent" />

          <div
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-kicks-dark text-white font-semibold tracking-widest  p-4 rounded-l-xl   text-base"
            style={{
              writingMode: "vertical-rl",
              transform: "translateY(-50%) rotate(180deg)",
            }}
          >
            Nike product of the year
          </div>

          <div className="absolute left-4 bottom-4 sm:left-8 sm:bottom-8 z-10 sm:p-5 flex flex-col justify-end   ">
            <div className="">
              <SectionTitle
                title="Nike Air Max"
                subtitle="Nike introducing the new air max for everyone's comfort"
              />

              <CommonButton>
                <Link to="/product/72">SHOP NOW</Link>
              </CommonButton>
            </div>
          </div>

          <div className="absolute right-4 bottom-4 sm:right-8 sm:bottom-8 flex flex-col gap-2 z-10">
            {heroThumbs.slice(1).map((src, i) => (
              <motion.button
                key={i}
                whileHover={{ scale: 1.07 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setHeroThumb(i + 1)}
                className={`w-14 h-14 md:w-40 md:h-40 rounded-xl overflow-hidden border-2 transition-all ${
                  heroThumb === i + 1 ? "border-white" : "border-white/30"
                }`}
              >
                <img
                  src={src}
                  alt=""
                  className="w-full h-full object-cover cursor-pointer"
                />
              </motion.button>
            ))}
          </div>
        </motion.div>
      </CommonSpace>
    </div>
  );
};

export default Hero;
