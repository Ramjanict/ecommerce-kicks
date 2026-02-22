import PageTransition from "@/components/layout/PageTransition";
import Spinner from "@/components/shared/Spinner";
import AllProducts from "@/features/home/AllProducts";
import Category from "@/features/home/Category";
import Hero from "@/features/home/Hero";
import Review from "@/features/home/Review";
import {
  useGetAllProductsQuery,
  useGetProductsDetailsQuery,
} from "@/features/products/productAPI";
import { useState } from "react";

const Home = () => {
  const [catPage, setCatPage] = useState(0);

  const { data, isLoading } = useGetAllProductsQuery();
  const { data: details } = useGetProductsDetailsQuery(4);

  console.log("data", data);
  console.log("data", details);

  return (
    <PageTransition>
      <Hero />
      {isLoading ? (
        <Spinner />
      ) : data && data.length > 0 ? (
        <AllProducts allProducts={data} />
      ) : (
        <p>No products found</p>
      )}

      <Category setCatPage={setCatPage} />
      <Review />
    </PageTransition>
  );
};

export default Home;
