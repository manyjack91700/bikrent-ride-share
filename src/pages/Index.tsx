import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedBikes from "@/components/FeaturedBikes";
import Categories from "@/components/Categories";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <FeaturedBikes />
        <Categories />
        <HowItWorks />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
