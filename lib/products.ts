export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  imageUrl: string;
  badge?: string;
  accentColor: "terracotta" | "mango" | "forest" | "indigo";
  ctaLabel?: string;
  origin?: string;
  terroir?: string;
  culturalNote?: string;
}

export const PRODUCTS: Product[] = [
  {
    id: "product-01",
    name: "Volta Ancient Grain Flour",
    category: "GRAINS & FLOURS",
    description:
      "Stone-ground blend of ancestral sorghum, fonio, and pearl millet from the Volta basin. Naturally gluten-free, mineral-dense, and revered in West African heritage cuisine.",
    imageUrl: "/images/product-flour.jpg",
    badge: "Heritage Selection",
    accentColor: "terracotta",
    origin: "Volta Basin · Ghana",
    terroir: "Alluvial plains & rainfed riverlands",
    culturalNote: "Sustaining West African culinary traditions for over 3,000 years",
    ctaLabel: "Explore Harvest",
  },
  {
    id: "product-02",
    name: "Ashanti Heirloom Cocoa Powder",
    category: "COCOA & CHOCOLATE",
    description:
      "Single-origin Ghanaian Forastero cocoa, fermented under plantain leaves and slow sun-cured. Imparts profound dark fruit notes, raw silk finish, and exceptional polyphenol depth.",
    imageUrl: "/images/product-cocoa.jpg",
    badge: "Grand Cru",
    accentColor: "forest",
    origin: "Sefwi Wiawso · Western North",
    terroir: "Tropical rainforest shade canopy",
    culturalNote: "Honoring the cocoa belt elders with 100% fair cooperative pricing",
  },
  {
    id: "product-03",
    name: "Wild Savanna Mango Nectar",
    category: "BEVERAGES",
    description:
      "Cold-extracted nectar from tree-ripened Keitt and Kent mangoes bathed in Sahelian sunshine. Pure single-press fruit essence with zero refined sugars, additives, or dilution.",
    imageUrl: "/images/product-mango.jpg",
    badge: "Single Press",
    accentColor: "mango",
    origin: "Kintampo Belt · Bono East",
    terroir: "Sub-Sahelian golden sunshine orchards",
    culturalNote: "Harvested at peak brix ripeness during the dry harmattan bounty",
  },
  {
    id: "product-04",
    name: "Northern Savanna Gold Shea",
    category: "SHEA & NATURAL OILS",
    description:
      "First cold-press unrefined vitellaria paradoxa butter. Handcrafted by master women custodians using woodsmoke roasting and cold filtration, preserving all active phytosterols.",
    imageUrl: "/images/product-shea.jpg",
    badge: "Women Cooperative Reserve",
    accentColor: "forest",
    origin: "Tamale & Dagbon · Northern Region",
    terroir: "Sacred wild shea parklands",
    culturalNote: "Direct off-take empowering 2,400+ women processors and their families",
  },
  {
    id: "product-05",
    name: "Heritage Jollof Feast Kit",
    category: "MEAL KITS & READY MEALS",
    description:
      "An homage to the West African culinary crown. Features long-grain parboiled rice, slow-simmered vine tomato purée, aged dawadawa seasoning, and Scotch bonnet aromatics.",
    imageUrl: "/images/product-jollof.jpg",
    badge: "Culinary Icon",
    accentColor: "terracotta",
    origin: "Accra & Kumasi Artisanal Kitchens",
    terroir: "Woodfire-simmered spice reductions",
    culturalNote: "The authentic party-pot smokiness celebrating joyous African feasts",
  },
  {
    id: "product-06",
    name: "Sahelian Hibiscus & Ginger Tisane",
    category: "TEAS & INFUSIONS",
    description:
      "Sun-dried crimson Bissap (Hibiscus sabdariffa) calyces balanced with fiery hand-crushed Volta ginger and wild mint. A deeply restorative, ruby-hued royal elixir.",
    imageUrl: "/images/product-tea.jpg",
    badge: "Royal Reserve",
    accentColor: "indigo",
    origin: "Upper East Savannas",
    terroir: "High-altitude mineral-rich soils",
    culturalNote: "Served across centuries at West African celebrations and ceremonies",
  },
];
