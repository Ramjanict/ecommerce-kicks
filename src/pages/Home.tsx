import PageTransition from "@/components/layout/PageTransition";
import AllProducts from "@/features/home/AllProducts";
import Category from "@/features/home/Category";
import Hero from "@/features/home/Hero";
import Review from "@/features/home/Review";

const Home = () => {
  return (
    <PageTransition>
      <Hero />
      <AllProducts />
      <Category />
      <Review />
    </PageTransition>
  );
};

export default Home;
