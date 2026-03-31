import { useState } from "react";
import { Link } from "react-router-dom";
import { Wine, Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Wine className="w-6 h-6 text-primary" />
          <span className="font-display text-xl font-bold text-gradient-gold">
            The Pour
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6 font-body text-sm tracking-wide">
          <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
            Home
          </Link>
          <Link to="/recipes" className="text-muted-foreground hover:text-foreground transition-colors">
            Recipes
          </Link>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full border border-border hover:border-primary/40 transition-colors text-muted-foreground hover:text-foreground"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        </div>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full border border-border hover:border-primary/40 transition-colors text-muted-foreground hover:text-foreground"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-3 font-body text-sm tracking-wide">
            <Link
              to="/"
              onClick={() => setMobileOpen(false)}
              className="text-muted-foreground hover:text-foreground transition-colors py-2"
            >
              Home
            </Link>
            <Link
              to="/recipes"
              onClick={() => setMobileOpen(false)}
              className="text-muted-foreground hover:text-foreground transition-colors py-2"
            >
              Recipes
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
