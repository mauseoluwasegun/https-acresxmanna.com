export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  imageUrl: string;
  badge?: string;
  accentColor: "terracotta" | "mango" | "forest" | "indigo";
  ctaLabel?: string;
}

// TODO: Replace with real product data when final catalog is confirmed
export const PRODUCTS: Product[] = [
  {
    id: "product-01",
    name: "African Grain Flour Blend",
    category: "GRAINS & FLOURS",
    description:
      "Premium stone-ground blend of African ancient grains — versatile for baking, nutritious swallows, and porridge.",
    imageUrl: "/images/product-flour.jpg",
    badge: "Bestseller",
    accentColor: "terracotta",
    ctaLabel: "Learn More",
  },
  {
    id: "product-02",
    name: "Pure Ghanaian Cocoa Powder",
    category: "COCOA & CHOCOLATE",
    description:
      "Single-origin Ghanaian raw & alkalized cocoa powder, intensely rich in flavonoids and natural chocolate aroma.",
    imageUrl: "/images/product-cocoa.jpg",
    badge: "Premium",
    accentColor: "forest",
  },
  {
    id: "product-03",
    name: "Wildcrafted Mango Nectar",
    category: "BEVERAGES",
    description:
      "Cold-pressed fruit nectar made from sun-ripened West African mangoes with zero added sugar or preservatives.",
    imageUrl: "/images/product-mango.jpg",
    accentColor: "mango",
  },
  {
    id: "product-04",
    name: "Raw Organic Shea Butter",
    category: "SHEA & NATURAL OILS",
    description:
      "Handcrafted, 100% unrefined golden shea butter sustainably sourced from women's cooperatives in Northern Ghana.",
    imageUrl: "/images/product-shea.jpg",
    accentColor: "forest",
  },
  {
    id: "product-05",
    name: "Authentic Jollof Rice Kit",
    category: "MEAL KITS & READY MEALS",
    description:
      "Everything needed for restaurant-grade West African Jollof — premium parboiled rice, signature spice blend, and rich aromatics.",
    imageUrl: "/images/product-jollof.jpg",
    badge: "Bestseller",
    accentColor: "terracotta",
  },
  {
    id: "product-06",
    name: "Hibiscus Zobo & Ginger Tea",
    category: "TEAS & INFUSIONS",
    description:
      "Vibrant loose-leaf blend of sun-dried African hibiscus calyces, fiery ginger, and aromatic botanicals.",
    imageUrl: "/images/product-tea.jpg",
    accentColor: "indigo",
  },
];
