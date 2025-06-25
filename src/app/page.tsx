import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ProductsSection from '@/components/sections/ProductsSection';
import RecipeSection from '@/components/sections/RecipeSection';
import ContactSection from '@/components/sections/ContactSection';
import { Separator } from '@/components/ui/separator';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <ProductsSection />
        <div className="py-12 md:py-20">
          <Separator className="my-8 w-2/3 mx-auto" />
        </div>
        <RecipeSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
