import { recipes } from "@/data/recipes";
import RecipeCard from "@/components/RecipeCard";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const FeaturedRecipes = () => {
  const featured = recipes.slice(0, 6);

  return (
    <section className="py-24 bg-gradient-dark">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <p className="font-body text-primary uppercase tracking-[0.3em] text-sm mb-3">
            Curated Selection
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Featured Recipes
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {featured.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            to="/recipes"
            className="inline-flex items-center gap-2 font-body text-primary hover:text-gold-light transition-colors uppercase tracking-widest text-sm"
          >
            View All Recipes
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedRecipes;
