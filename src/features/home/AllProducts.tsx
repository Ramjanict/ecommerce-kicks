import Container from "@/components/layout/Container";
import CommonButton from "@/components/shared/CommonButton";
import CommonSpace from "@/components/shared/CommonSpace";
import SectionTitle from "@/components/shared/SectionTitle";
import ProductCard from "@/features/products/components/ProductCard";
import { Product } from "../products/types";

interface ProductProps {
  allProducts: Product[];
}
const AllProducts: React.FC<ProductProps> = ({ allProducts }) => {
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
            {allProducts.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        </CommonSpace>
      </Container>
    </div>
  );
};

export default AllProducts;
