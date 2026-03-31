import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturedRecipes from "@/components/FeaturedRecipes";
import CategoryShowcase from "@/components/CategoryShowcase";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <FeaturedRecipes />
      <CategoryShowcase />
      <footer className="py-12 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <p className="font-body text-muted-foreground text-sm">
            © 2026 The Pour — Cocktail & Mocktail Tutorials
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
