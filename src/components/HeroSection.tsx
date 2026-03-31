import heroImage from "@/assets/hero-cocktails.jpg";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <img
        src={heroImage}
        alt="Cocktail making ingredients on a dark marble counter"
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-background/70" />
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-3xl mx-auto">
        <p className="font-body text-primary uppercase tracking-[0.3em] text-xs sm:text-sm mb-4 animate-fade-in">
          Cocktails & Mocktails
        </p>
        <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold text-gradient-gold mb-6 animate-fade-in-up">
          The Art of<br />the Pour
        </h1>
        <p className="font-body text-muted-foreground text-base sm:text-lg md:text-xl max-w-xl mx-auto mb-10 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          Master the craft of mixology with step-by-step tutorials for both cocktails and alcohol-free creations.
        </p>
        <div className="flex gap-4 justify-center opacity-0 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <Button asChild variant="default" size="lg" className="font-body tracking-wider uppercase text-sm">
            <Link to="/recipes">Explore Recipes</Link>
          </Button>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-5 h-5 text-primary" />
      </div>
    </section>
  );
};

export default HeroSection;
