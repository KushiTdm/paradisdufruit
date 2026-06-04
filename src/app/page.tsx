import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MenuCarousel from "@/components/MenuCarousel";
import RestaurantsSection from "@/components/RestaurantsSection";
import BotanicSection from "@/components/BotanicSection";
import FeaturesGrid from "@/components/FeaturesGrid";
import CuisineSection from "@/components/CuisineSection";
import DiscoverSection from "@/components/DiscoverSection";
import MarqueeSection from "@/components/MarqueeSection";
import EngagementsCarousel from "@/components/EngagementsCarousel";
import NewsCarousel from "@/components/NewsCarousel";
import InstagramSection from "@/components/InstagramSection";
import PreFooter from "@/components/PreFooter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <MenuCarousel />
        <RestaurantsSection />
        <BotanicSection />
        <FeaturesGrid />
        <CuisineSection />
        <DiscoverSection />
        <MarqueeSection />
        <EngagementsCarousel />
        <NewsCarousel />
        <InstagramSection />
        <PreFooter />
      </main>
      <Footer />
    </>
  );
}
