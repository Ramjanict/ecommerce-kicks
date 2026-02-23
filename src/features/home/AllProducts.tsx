import Container from "@/components/layout/Container";
import CardLoader from "@/components/shared/CardLoader";
import CommonButton from "@/components/shared/CommonButton";
import CommonSpace from "@/components/shared/CommonSpace";
import SectionTitle from "@/components/shared/SectionTitle";
import ProductCard from "@/features/products/components/ProductCard";
import { useGetAllProductsQuery } from "../products/productAPI";
import { Product } from "../products/types";

const AllProducts = () => {
  const { data, isLoading } = useGetAllProductsQuery();
  const allProducts: Product[] = data ?? [];
  const loadingList = new Array(8).fill(0);
  return (
    <div>
      <Container>
        <div className="flex justify-between items-baseline-last">
          <SectionTitle
            className="text-[#232321]! "
            title="Don't miss out new drops"
          />
          <CommonButton>SHOP NEW DROPS</CommonButton>
        </div>
        <CommonSpace>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {isLoading ? (
              loadingList.map((_, i) => <CardLoader key={i} />)
            ) : allProducts.length > 0 ? (
              allProducts.map((product, i) => (
                <ProductCard key={product.id} product={product} index={i} />
              ))
            ) : (
              <p>No products found</p>
            )}
          </div>
        </CommonSpace>
      </Container>
    </div>
  );
};

export default AllProducts;
