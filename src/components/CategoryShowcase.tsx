import { Link } from "react-router-dom";
import { Flame, PartyPopper, Leaf } from "lucide-react";
import { recipes, categoryInfo, type Category } from "@/data/recipes";
import RecipeCard from "./RecipeCard";

const iconMap = {
  flame: Flame,
  "party-popper": PartyPopper,
  leaf: Leaf,
};

const CategoryShowcase = () => {
  const categories: Category[] = ["trending", "party", "healthy"];

  return (
    <section className="py-24">
      <div className="container mx-auto px-4 sm:px-6">
        {categories.map((cat) => {
          const info = categoryInfo[cat];
          const catRecipes = recipes.filter((r) => r.categories?.includes(cat)).slice(0, 3);
          if (catRecipes.length === 0) return null;

          return (
            <div key={cat} className="mb-20 last:mb-0">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground flex items-center gap-2">
                    {(() => { const Icon = iconMap[info.icon as keyof typeof iconMap]; return Icon ? <Icon className="w-6 h-6 text-primary" /> : null; })()}
                    {info.label}
                  </h2>
                  <p className="font-body text-muted-foreground text-sm mt-1">
                    {info.description}
                  </p>
                </div>
                <Link
                  to={`/recipes?category=${cat}`}
                  className="hidden sm:inline-flex font-body text-primary hover:text-gold-light transition-colors uppercase tracking-widest text-xs"
                >
                  View All →
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {catRecipes.map((recipe) => (
                  <RecipeCard key={recipe.id} recipe={recipe} />
                ))}
              </div>
              <Link
                to={`/recipes?category=${cat}`}
                className="sm:hidden inline-flex mt-6 font-body text-primary hover:text-gold-light transition-colors uppercase tracking-widest text-xs"
              >
                View All →
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CategoryShowcase;
