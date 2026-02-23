import Container from "@/components/layout/Container";
import CardLoader from "@/components/shared/CardLoader";
import type { CarouselApi } from "@/components/ui/carousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import ProductCard from "@/features/products/components/ProductCard";
import type { Product } from "@/features/products/types";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

interface ProductCarouselSectionProps {
  title: string;
  products: Product[];
  isLoading?: boolean;
}

const ProductCarouselSection: React.FC<ProductCarouselSectionProps> = ({
  title,
  products,
  isLoading,
}) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const [itemsPerPage, setItemsPerPage] = useState(
    typeof window !== "undefined" && window.innerWidth >= 768 ? 4 : 2,
  );
  const dotCount = Math.ceil(products.length / itemsPerPage);
  const activeDot = Math.floor(current / itemsPerPage);

  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(window.innerWidth >= 768 ? 4 : 2);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const loadingList = new Array(8).fill(0);

  return (
    <section className="">
      {isLoading ? (
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {loadingList.map((_, i) => (
              <CardLoader key={i} />
            ))}
          </div>
        </Container>
      ) : products.length > 0 ? (
        <Container>
          <div className="flex items-center justify-between mb-5">
            <h2 className="font-display font-black text-xl md:text-2xl text-kicks-dark">
              {title}
            </h2>
            <div className="flex gap-2">
              <button
                onClick={() => api?.scrollPrev()}
                className="w-8 h-8 rounded-lg bg-kicks-gray text-kicks-dark hover:bg-kicks-dark hover:text-white transition-colors flex items-center justify-center cursor-pointer"
                aria-label="Previous"
              >
                <MdOutlineKeyboardArrowLeft />
              </button>
              <button
                onClick={() => api?.scrollNext()}
                className="w-8 h-8 rounded-lg bg-kicks-gray text-kicks-dark hover:bg-kicks-dark hover:text-white transition-colors flex items-center justify-center cursor-pointer"
                aria-label="Next"
              >
                <MdOutlineKeyboardArrowRight />
              </button>
            </div>
          </div>

          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: false,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-3">
              {products.map((product, i) => (
                <CarouselItem
                  key={product.id}
                  className="pl-3 basis-1/2 md:basis-1/4"
                >
                  <ProductCard product={product} index={i} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {dotCount > 1 && (
            <div className="flex justify-center flex-wrap gap-1.5 mt-4">
              {Array.from({ length: dotCount }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => api?.scrollTo(i * itemsPerPage)}
                  className={cn(
                    "h-2 rounded-full transition-all duration-300 cursor-pointer",
                    i === activeDot
                      ? "sm:min-w-8 min-w-6 bg-kicks-blue"
                      : "sm:min-w-8 min-w-6 bg-gray-300 hover:bg-gray-400",
                  )}
                  aria-label={`Go to page ${i + 1}`}
                />
              ))}
            </div>
          )}
        </Container>
      ) : (
        <p>No products found</p>
      )}
    </section>
  );
};

export default ProductCarouselSection;
