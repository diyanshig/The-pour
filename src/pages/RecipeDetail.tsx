import { useParams, Link } from "react-router-dom";
import { recipes, categoryInfo } from "@/data/recipes";
import { drinkImages } from "@/lib/images";
import Navbar from "@/components/Navbar";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Clock, BarChart3, Wine, GlassWater, Flame, PartyPopper, Leaf } from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  flame: Flame,
  "party-popper": PartyPopper,
  leaf: Leaf,
};

const RecipeDetail = () => {
  const { id } = useParams();
  const recipe = recipes.find((r) => r.id === id);

  if (!recipe) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Recipe not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-24 container mx-auto px-4 sm:px-6">
        <Link
          to="/recipes"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors font-body text-sm mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Recipes
        </Link>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Image */}
          <div className="rounded-lg overflow-hidden glow-gold">
            <img
              src={drinkImages[recipe.image]}
              alt={recipe.name}
              width={640}
              height={800}
              className="w-full object-cover max-h-[500px] lg:max-h-[600px]"
            />
          </div>

          {/* Details */}
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <Badge variant={recipe.type === "cocktail" ? "default" : "secondary"} className="uppercase tracking-widest text-[10px] font-body font-semibold">
                {recipe.type}
              </Badge>
              {recipe.categories?.map((cat) => (
                <Badge key={cat} variant="outline" className="font-body text-[10px] tracking-wider">
                  {(() => { const Icon = iconMap[categoryInfo[cat].icon]; return Icon ? <Icon className="w-3 h-3 inline mr-1" /> : null; })()}{categoryInfo[cat].label}
                </Badge>
              ))}
            </div>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-gradient-gold mb-4">
              {recipe.name}
            </h1>
            <p className="text-muted-foreground font-body text-base sm:text-lg mb-6 leading-relaxed">
              {recipe.description}
            </p>

            {/* Meta */}
            <div className="flex flex-wrap gap-4 sm:gap-6 mb-8 text-sm font-body text-muted-foreground">
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                {recipe.prepTime}
              </span>
              <span className="flex items-center gap-2">
                <BarChart3 className="w-4 h-4 text-primary" />
                {recipe.difficulty}
              </span>
              <span className="flex items-center gap-2">
                <GlassWater className="w-4 h-4 text-primary" />
                {recipe.glassware}
              </span>
              <span className="flex items-center gap-2">
                <Wine className="w-4 h-4 text-primary" />
                {recipe.garnish}
              </span>
            </div>

            {/* Ingredients */}
            <div className="mb-8">
              <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                Ingredients
              </h2>
              <ul className="space-y-2">
                {recipe.ingredients.map((ing, i) => (
                  <li key={i} className="flex items-start gap-3 font-body text-secondary-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    {ing}
                  </li>
                ))}
              </ul>
            </div>

            {/* Steps */}
            <div>
              <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                Instructions
              </h2>
              <ol className="space-y-4">
                {recipe.steps.map((step, i) => (
                  <li key={i} className="flex gap-4 font-body text-secondary-foreground">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm font-semibold">
                      {i + 1}
                    </span>
                    <span className="pt-0.5">{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Tags */}
            <div className="mt-8 flex flex-wrap gap-2">
              {recipe.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="font-body text-xs tracking-wider">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
