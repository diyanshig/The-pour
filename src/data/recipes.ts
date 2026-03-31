export type Category = "trending" | "party" | "healthy";

export type Recipe = {
  id: string;
  name: string;
  type: "cocktail" | "mocktail";
  image: string;
  difficulty: "Easy" | "Medium" | "Hard";
  prepTime: string;
  description: string;
  ingredients: string[];
  steps: string[];
  garnish: string;
  glassware: string;
  tags: string[];
  categories?: Category[];
};

export const categoryInfo: Record<Category, { label: string; icon: string; description: string }> = {
  trending: { label: "Trending", icon: "flame", description: "Most popular drinks right now" },
  party: { label: "Party Specials", icon: "party-popper", description: "Perfect for celebrations & gatherings" },
  healthy: { label: "Healthy & Light", icon: "leaf", description: "Low-calorie & guilt-free sips" },
};

export const recipes: Recipe[] = [
  {
    id: "old-fashioned",
    name: "Old Fashioned",
    type: "cocktail",
    image: "old-fashioned",
    difficulty: "Easy",
    prepTime: "5 min",
    description: "The quintessential whiskey cocktail. A timeless blend of bourbon, bitters, and a touch of sweetness that has been the gold standard since the 1800s.",
    ingredients: ["2 oz Bourbon or Rye Whiskey", "1 Sugar cube", "2-3 dashes Angostura bitters", "Orange peel", "Ice"],
    steps: [
      "Place the sugar cube in a rocks glass and saturate with bitters.",
      "Muddle the sugar cube until dissolved.",
      "Add a large ice cube to the glass.",
      "Pour the bourbon over the ice and stir gently for 20-30 seconds.",
      "Express an orange peel over the drink and drop it in."
    ],
    garnish: "Orange peel twist",
    glassware: "Rocks glass",
    tags: ["Whiskey", "Classic", "Strong"],
    categories: ["trending"],
  },
  {
    id: "mojito",
    name: "Mojito",
    type: "cocktail",
    image: "mojito",
    difficulty: "Easy",
    prepTime: "5 min",
    description: "A refreshing Cuban classic combining white rum, fresh lime, mint, and soda water. The perfect warm-weather sipper.",
    ingredients: ["2 oz White rum", "1 oz Fresh lime juice", "2 tsp Sugar", "6-8 Fresh mint leaves", "Soda water", "Crushed ice"],
    steps: [
      "Gently muddle mint leaves with sugar and lime juice in a tall glass.",
      "Add crushed ice to fill the glass.",
      "Pour in the rum and stir well.",
      "Top with soda water.",
      "Garnish with a sprig of fresh mint and a lime wheel."
    ],
    garnish: "Mint sprig & lime wheel",
    glassware: "Highball glass",
    tags: ["Rum", "Refreshing", "Classic"],
    categories: ["trending", "party"],
  },
  {
    id: "espresso-martini",
    name: "Espresso Martini",
    type: "cocktail",
    image: "espresso-martini",
    difficulty: "Medium",
    prepTime: "5 min",
    description: "A sophisticated after-dinner cocktail that perfectly balances the richness of espresso with the smoothness of vodka.",
    ingredients: ["2 oz Vodka", "1 oz Coffee liqueur", "1 oz Fresh espresso (cooled)", "0.5 oz Simple syrup"],
    steps: [
      "Brew a shot of espresso and let it cool slightly.",
      "Add all ingredients to a cocktail shaker with ice.",
      "Shake vigorously for 15-20 seconds to create a frothy top.",
      "Double strain into a chilled coupe or martini glass.",
      "Garnish with three coffee beans on top of the foam."
    ],
    garnish: "Three coffee beans",
    glassware: "Coupe glass",
    tags: ["Vodka", "Coffee", "Elegant"],
    categories: ["trending", "party"],
  },
  {
    id: "negroni",
    name: "Negroni",
    type: "cocktail",
    image: "negroni",
    difficulty: "Easy",
    prepTime: "3 min",
    description: "An Italian aperitif of perfect balance—equal parts gin, Campari, and sweet vermouth create a bold, bittersweet masterpiece.",
    ingredients: ["1 oz Gin", "1 oz Campari", "1 oz Sweet vermouth", "Orange peel", "Ice"],
    steps: [
      "Add gin, Campari, and sweet vermouth to a mixing glass with ice.",
      "Stir for 20-30 seconds until well chilled.",
      "Strain into a rocks glass over a large ice cube.",
      "Express an orange peel over the glass and drop it in."
    ],
    garnish: "Orange peel",
    glassware: "Rocks glass",
    tags: ["Gin", "Bitter", "Italian"],
    categories: ["trending"],
  },
  {
    id: "margarita",
    name: "Margarita",
    type: "cocktail",
    image: "margarita",
    difficulty: "Easy",
    prepTime: "5 min",
    description: "The iconic tequila cocktail. Fresh, citrusy, and perfectly balanced between sour, sweet, and salty.",
    ingredients: ["2 oz Tequila (blanco)", "1 oz Fresh lime juice", "0.75 oz Cointreau or triple sec", "Salt for rim", "Ice"],
    steps: [
      "Run a lime wedge around the rim of a coupe glass and dip in salt.",
      "Add tequila, lime juice, and Cointreau to a shaker with ice.",
      "Shake vigorously for 10-15 seconds.",
      "Strain into the prepared glass.",
      "Garnish with a lime wheel."
    ],
    garnish: "Lime wheel & salt rim",
    glassware: "Coupe glass",
    tags: ["Tequila", "Citrus", "Classic"],
    categories: ["trending", "party"],
  },
  {
    id: "virgin-pina-colada",
    name: "Virgin Piña Colada",
    type: "mocktail",
    image: "virgin-pina-colada",
    difficulty: "Easy",
    prepTime: "5 min",
    description: "A tropical escape in a glass. Creamy coconut and sweet pineapple blended to smooth perfection—no rum needed.",
    ingredients: ["4 oz Pineapple juice", "2 oz Coconut cream", "1 cup Crushed ice", "Whipped cream (optional)"],
    steps: [
      "Combine pineapple juice, coconut cream, and crushed ice in a blender.",
      "Blend until smooth and creamy.",
      "Pour into a hurricane or wine glass.",
      "Top with whipped cream if desired.",
      "Garnish with a pineapple wedge."
    ],
    garnish: "Pineapple wedge",
    glassware: "Hurricane glass",
    tags: ["Tropical", "Creamy", "Fruity"],
    categories: ["party"],
  },
  {
    id: "shirley-temple",
    name: "Shirley Temple",
    type: "mocktail",
    image: "shirley-temple",
    difficulty: "Easy",
    prepTime: "3 min",
    description: "The classic non-alcoholic drink named after the famous child actress. Sweet, fizzy, and iconic in its cherry-red hue.",
    ingredients: ["4 oz Ginger ale", "4 oz Lemon-lime soda", "1 oz Grenadine syrup", "Maraschino cherries", "Orange slice"],
    steps: [
      "Fill a tall glass with ice.",
      "Pour ginger ale and lemon-lime soda over the ice.",
      "Add grenadine syrup and stir gently.",
      "The grenadine will create a beautiful gradient effect.",
      "Garnish with maraschino cherries and an orange slice."
    ],
    garnish: "Maraschino cherry & orange slice",
    glassware: "Collins glass",
    tags: ["Sweet", "Fizzy", "Classic"],
    categories: ["party"],
  },
  {
    id: "cucumber-cooler",
    name: "Cucumber Mint Cooler",
    type: "mocktail",
    image: "cucumber-cooler",
    difficulty: "Easy",
    prepTime: "5 min",
    description: "A spa-inspired refresher. Cool cucumber and fresh mint combine with lime for an incredibly crisp and invigorating sip.",
    ingredients: ["4-5 Cucumber slices", "6-8 Fresh mint leaves", "1 oz Fresh lime juice", "1 oz Simple syrup", "Sparkling water", "Ice"],
    steps: [
      "Muddle cucumber slices and mint leaves in a tall glass.",
      "Add lime juice and simple syrup, stir to combine.",
      "Fill the glass with ice.",
      "Top with sparkling water and stir gently.",
      "Garnish with a cucumber ribbon and mint sprig."
    ],
    garnish: "Cucumber ribbon & mint sprig",
    glassware: "Highball glass",
    tags: ["Refreshing", "Herbaceous", "Light"],
    categories: ["healthy"],
  },
  {
    id: "berry-spritz",
    name: "Berry Spritz",
    type: "mocktail",
    image: "berry-spritz",
    difficulty: "Easy",
    prepTime: "5 min",
    description: "A vibrant and bubbly celebration of mixed berries. Beautiful, fruity, and effervescent—perfect for any occasion.",
    ingredients: ["1/4 cup Mixed berries (raspberries, blackberries, strawberries)", "1 oz Fresh lemon juice", "1 oz Honey syrup", "Sparkling water", "Ice"],
    steps: [
      "Muddle mixed berries in a wine glass.",
      "Add lemon juice and honey syrup, stir well.",
      "Fill the glass with ice.",
      "Top with sparkling water.",
      "Garnish with fresh berries and a mint leaf."
    ],
    garnish: "Fresh berries & mint leaf",
    glassware: "Wine glass",
    tags: ["Fruity", "Sparkling", "Vibrant"],
    categories: ["healthy", "party"],
  },
  {
    id: "mimosa",
    name: "Mimosa",
    type: "cocktail",
    image: "mimosa",
    difficulty: "Easy",
    prepTime: "2 min",
    description: "The brunch essential. Just two ingredients—chilled champagne and fresh orange juice—come together for pure sparkling sunshine.",
    ingredients: ["3 oz Champagne or sparkling wine", "3 oz Fresh orange juice", "Orange slice for garnish"],
    steps: [
      "Pour chilled orange juice into a champagne flute.",
      "Slowly top with chilled champagne or sparkling wine.",
      "Gently stir once to combine.",
      "Garnish with an orange slice on the rim."
    ],
    garnish: "Orange slice",
    glassware: "Champagne flute",
    tags: ["Sparkling", "Brunch", "Easy"],
    categories: ["trending", "party"],
  },
  {
    id: "gin-tonic",
    name: "Gin & Tonic",
    type: "cocktail",
    image: "gin-tonic",
    difficulty: "Easy",
    prepTime: "2 min",
    description: "The ultimate two-ingredient classic. Crisp gin paired with bubbly tonic water and a squeeze of citrus—effortlessly elegant.",
    ingredients: ["2 oz Gin", "4-5 oz Tonic water", "Lime wedge", "Ice"],
    steps: [
      "Fill a glass with ice cubes.",
      "Pour gin over the ice.",
      "Top with tonic water.",
      "Squeeze a lime wedge over the drink and drop it in.",
      "Give it one gentle stir."
    ],
    garnish: "Lime wedge",
    glassware: "Highball glass",
    tags: ["Gin", "Refreshing", "Classic"],
    categories: ["healthy"],
  },
  {
    id: "tequila-sunrise",
    name: "Tequila Sunrise",
    type: "cocktail",
    image: "tequila-sunrise",
    difficulty: "Easy",
    prepTime: "3 min",
    description: "A visually stunning layered cocktail that mimics a sunrise. Sweet orange juice meets tequila with a grenadine gradient.",
    ingredients: ["2 oz Tequila", "4 oz Orange juice", "0.5 oz Grenadine syrup", "Ice", "Orange slice & cherry"],
    steps: [
      "Fill a tall glass with ice.",
      "Pour tequila and orange juice over the ice and stir.",
      "Slowly pour grenadine over the back of a spoon so it sinks to the bottom.",
      "Let the gradient form naturally—don't stir.",
      "Garnish with an orange slice and a cherry."
    ],
    garnish: "Orange slice & maraschino cherry",
    glassware: "Highball glass",
    tags: ["Tequila", "Fruity", "Visual"],
    categories: ["party"],
  },
  {
    id: "whiskey-sour",
    name: "Whiskey Sour",
    type: "cocktail",
    image: "whiskey-sour",
    difficulty: "Easy",
    prepTime: "5 min",
    description: "A perfectly balanced blend of whiskey, citrus, and sweetness. Simple to make, impossible not to love.",
    ingredients: ["2 oz Bourbon", "1 oz Fresh lemon juice", "0.75 oz Simple syrup", "Ice", "Cherry for garnish"],
    steps: [
      "Add bourbon, lemon juice, and simple syrup to a shaker with ice.",
      "Shake well for 10-15 seconds.",
      "Strain into a rocks glass over fresh ice.",
      "Garnish with a cherry and an orange slice."
    ],
    garnish: "Cherry & orange slice",
    glassware: "Rocks glass",
    tags: ["Whiskey", "Citrus", "Classic"],
    categories: ["trending"],
  },
  {
    id: "arnold-palmer",
    name: "Arnold Palmer",
    type: "mocktail",
    image: "arnold-palmer",
    difficulty: "Easy",
    prepTime: "2 min",
    description: "Named after the legendary golfer, this half-lemonade, half-iced-tea combo is the ultimate thirst quencher.",
    ingredients: ["4 oz Iced tea (black tea, chilled)", "4 oz Lemonade", "Ice", "Lemon wedge"],
    steps: [
      "Fill a tall glass with ice.",
      "Pour iced tea and lemonade over the ice.",
      "Stir gently to combine.",
      "Garnish with a lemon wedge."
    ],
    garnish: "Lemon wedge",
    glassware: "Collins glass",
    tags: ["Refreshing", "Classic", "Light"],
    categories: ["healthy"],
  },
  {
    id: "lavender-lemonade",
    name: "Lavender Lemonade",
    type: "mocktail",
    image: "lavender-lemonade",
    difficulty: "Easy",
    prepTime: "5 min",
    description: "Floral, fragrant, and delightfully refreshing. Lavender syrup elevates classic lemonade into something truly special.",
    ingredients: ["2 oz Fresh lemon juice", "1 oz Lavender syrup", "6 oz Cold water", "Ice", "Dried lavender sprig"],
    steps: [
      "Add lemon juice and lavender syrup to a glass.",
      "Stir to combine.",
      "Fill the glass with ice.",
      "Top with cold water and stir gently.",
      "Garnish with a dried lavender sprig."
    ],
    garnish: "Dried lavender sprig",
    glassware: "Highball glass",
    tags: ["Floral", "Refreshing", "Elegant"],
    categories: ["healthy", "trending"],
  },
];
