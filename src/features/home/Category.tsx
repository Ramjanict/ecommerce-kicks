import Container from "@/components/layout/Container";
import CommonSpace from "@/components/shared/CommonSpace";
import SectionTitle from "@/components/shared/SectionTitle";
import { categories } from "@/features/products/productData";
import { slideInLeft, slideInRight } from "@/lib/motionVariants";
import { motion } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
interface CategoryProps {
  setCatPage: (p: number) => void;
}
const Category: React.FC<CategoryProps> = ({ setCatPage }) => {
  return (
    <div>
      <section className=" bg-kicks-dark pt-10">
        <Container>
          <CommonSpace>
            <div className="flex items-center justify-between mb-5">
              <SectionTitle title="Categories" />

              <div className="flex gap-2">
                <button
                  onClick={() => setCatPage((p) => Math.max(0, p - 1))}
                  className="w-8 h-8 rounded-lg bg-[#E7E7E3] text-kicks-dark  transition-colors flex items-center justify-center cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setCatPage((p) => p + 1)}
                  className="w-8 h-8 rounded-lg bg-[#E7E7E3] text-kicks-dark  transition-colors flex items-center justify-center cursor-pointer"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </CommonSpace>

          <div className="grid grid-cols-1 md:grid-cols-2 w-full  ">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.id}
                variants={i === 0 ? slideInLeft : slideInRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative  cursor-pointer group"
                style={{ minHeight: 600 }}
              >
                <motion.img
                  src={cat.image}
                  alt={cat.name}
                  className={`w-full h-full   transition-transform duration-500 absolute inset-0  ${i === 0 ? "rounded-tl-[48px]" : ""} `}
                  style={{ minHeight: 600 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <h3 className="font-display font-black text-xl uppercase text-kicks-dark leading-tight">
                    {cat.name.split(" ")[0]}
                    <br />
                    {cat.name.split(" ").slice(1).join(" ")}
                  </h3>
                </div>
                <button className="absolute bottom-4 right-4 w-9 h-9 bg-kicks-dark rounded-lg flex items-center justify-center text-white hover:bg-kicks-blue transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Category;
