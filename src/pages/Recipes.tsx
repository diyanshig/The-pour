import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Flame, PartyPopper, Leaf } from "lucide-react";
import Navbar from "@/components/Navbar";
import RecipeCard from "@/components/RecipeCard";
import { recipes, categoryInfo, type Category } from "@/data/recipes";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  flame: Flame,
  "party-popper": PartyPopper,
  leaf: Leaf,
};

type TypeFilter = "all" | "cocktail" | "mocktail";

const Recipes = () => {
  const [searchParams] = useSearchParams();
  const [typeFilter, setTypeFilter] = useState<TypeFilter>("all");
  const [categoryFilter, setCategoryFilter] = useState<Category | null>(null);

  useEffect(() => {
    const cat = searchParams.get("category") as Category | null;
    if (cat && cat in categoryInfo) {
      setCategoryFilter(cat);
    }
  }, [searchParams]);

  const filtered = recipes.filter((r) => {
    const typeMatch = typeFilter === "all" || r.type === typeFilter;
    const catMatch = !categoryFilter || r.categories?.includes(categoryFilter);
    return typeMatch && catMatch;
  });

  const typeFilters: { label: string; value: TypeFilter }[] = [
    { label: "All", value: "all" },
    { label: "Cocktails", value: "cocktail" },
    { label: "Mocktails", value: "mocktail" },
  ];

  const categories = Object.entries(categoryInfo) as [Category, typeof categoryInfo[Category]][];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-28 pb-24 container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <p className="font-body text-primary uppercase tracking-[0.3em] text-sm mb-3">
            Browse
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            All Recipes
          </h1>
        </div>

        {/* Type filters */}
        <div className="flex justify-center gap-2 mb-6 flex-wrap">
          {typeFilters.map((f) => (
            <button
              key={f.value}
              onClick={() => setTypeFilter(f.value)}
              className={`font-body text-sm uppercase tracking-widest px-5 py-2 rounded-full border transition-all duration-300 ${
                typeFilter === f.value
                  ? "bg-primary text-primary-foreground border-primary"
                  : "border-border text-muted-foreground hover:border-primary/40 hover:text-foreground"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Category filters */}
        <div className="flex justify-center gap-2 mb-12 flex-wrap">
          {categories.map(([key, info]) => (
            <button
              key={key}
              onClick={() => setCategoryFilter(categoryFilter === key ? null : key)}
              className={`font-body text-sm px-4 py-2 rounded-full border transition-all duration-300 ${
                categoryFilter === key
                  ? "bg-primary text-primary-foreground border-primary"
                  : "border-border text-muted-foreground hover:border-primary/40 hover:text-foreground"
              }`}
            >
              {(() => { const Icon = iconMap[info.icon]; return Icon ? <Icon className="w-4 h-4 inline mr-1" /> : null; })()}
              {info.label}
            </button>
          ))}
        </div>

        {/* Active category description */}
        {categoryFilter && (
          <p className="text-center text-muted-foreground font-body text-sm mb-8">
            {(() => { const Icon = iconMap[categoryInfo[categoryFilter].icon]; return Icon ? <Icon className="w-4 h-4 inline mr-1" /> : null; })()} {categoryInfo[categoryFilter].description}
          </p>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filtered.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground font-body mt-12">
            No recipes match your filters. Try a different combination!
          </p>
        )}
      </div>
    </div>
  );
};

export default Recipes;
