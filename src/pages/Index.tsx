import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import FeaturedSection from "@/components/home/FeaturedSection";
import CategoriesSection from "@/components/home/CategoriesSection";
import StatsSection from "@/components/home/StatsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <FeaturedSection />
        <CategoriesSection />
        <StatsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
