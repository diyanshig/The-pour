import { Link } from "react-router-dom";
import { Clock, BarChart3 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { Recipe } from "@/data/recipes";
import { drinkImages } from "@/lib/images";

const RecipeCard = ({ recipe }: { recipe: Recipe }) => {
  return (
    <Link
      to={`/recipe/${recipe.id}`}
      className="group block overflow-hidden rounded-lg bg-gradient-card border border-border hover:border-primary/40 transition-all duration-500 hover:glow-gold"
    >
      <div className="aspect-[4/5] overflow-hidden relative">
        <img
          src={drinkImages[recipe.image]}
          alt={recipe.name}
          loading="lazy"
          width={640}
          height={800}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
        <div className="absolute top-3 left-3">
          <Badge variant={recipe.type === "cocktail" ? "default" : "secondary"} className="uppercase tracking-widest text-[10px] font-body font-semibold">
            {recipe.type}
          </Badge>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="font-display text-xl font-semibold text-foreground mb-2 group-hover:text-gradient-gold transition-colors">
            {recipe.name}
          </h3>
          <p className="text-muted-foreground text-sm font-body line-clamp-2 mb-3">
            {recipe.description}
          </p>
          <div className="flex items-center gap-4 text-xs text-muted-foreground font-body">
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3 text-primary" />
              {recipe.prepTime}
            </span>
            <span className="flex items-center gap-1">
              <BarChart3 className="w-3 h-3 text-primary" />
              {recipe.difficulty}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RecipeCard;
