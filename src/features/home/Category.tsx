import Container from "@/components/layout/Container";
import CommonSpace from "@/components/shared/CommonSpace";
import SectionTitle from "@/components/shared/SectionTitle";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { slideInLeft, slideInRight } from "@/lib/motionVariants";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useGetAllCategoriesQuery } from "../products/productAPI";

const Category = () => {
  const { data: categories = [] } = useGetAllCategoriesQuery();

  return (
    <div>
      <CommonSpace>
        <section className="bg-kicks-dark">
          <Container>
            <Carousel opts={{ align: "start" }} className="w-full">
              <CommonSpace>
                <div className="flex items-center justify-between mb-5">
                  <SectionTitle title="Categories" />
                  <div className="flex items-center gap-2">
                    <CarouselPrevious className="static translate-y-0 rounded-md w-10 h-10 cursor-pointer" />
                    <CarouselNext className="static translate-y-0 rounded-md w-10 h-10 cursor-pointer" />
                  </div>
                </div>
              </CommonSpace>
              <CarouselContent className="ml-0 gap-0 flex-col sm:flex-row">
                {categories.map((cat, i) => (
                  <CarouselItem
                    key={cat.id}
                    className="basis-full sm:basis-1/2 pl-0"
                  >
                    <motion.div
                      variants={i === 0 ? slideInLeft : slideInRight}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="relative cursor-pointer group"
                      style={{ minHeight: 600 }}
                    >
                      <img
                        src={cat.image}
                        alt={cat.name}
                        className={`w-full h-full object-cover absolute inset-0 ${
                          i === 0 ? "rounded-tl-[48px]" : ""
                        }`}
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
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </Container>
        </section>
      </CommonSpace>
    </div>
  );
};

export default Category;
