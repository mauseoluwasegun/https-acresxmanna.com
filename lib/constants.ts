export const SITE_URL = "https://acresxmanna.com";

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "What We Do", href: "/what-we-do" },
  { label: "Impact", href: "/impact" },
  { label: "Contact", href: "/contact" },
] as const;

export const STAKEHOLDERS = [
  {
    id: "consumer",
    label: "Explore Products",
    icon: "cart",
    headline: "I want to Explore Products",
    description:
      "[TBC] Discover our range of premium African-made food products crafted for global tables.",
    ctaLabel: "Browse Catalog",
    ctaHref: "/products",
  },
  {
    id: "farmer",
    label: "Become a Supplier",
    icon: "wheat",
    headline: "Become a Supplier (Farmers)",
    description:
      "[TBC] Partner with us as a farmer or agricultural supplier. Fair prices, steady markets, shared growth.",
    ctaLabel: "Farmer Inquiry",
    ctaHref: "/contact?type=supplier",
  },
  {
    id: "distributor",
    label: "Distribution",
    icon: "truck",
    headline: "Distribution Opportunities",
    description:
      "[TBC] Bring Acres X Manna products to your region. Distributor, wholesaler &amp; retail partnerships.",
    ctaLabel: "Distributor Inquiry",
    ctaHref: "/contact?type=distributor",
  },
  {
    id: "partner",
    label: "Partner With Us",
    icon: "handshake",
    headline: "Partner With Us",
    description:
      "[TBC] Strategic business partnerships, co-branding, ingredient supply &amp; joint ventures welcome.",
    ctaLabel: "Start Partnership",
    ctaHref: "/contact?type=partner",
  },
  {
    id: "investor",
    label: "Invest in Growth",
    icon: "briefcase",
    headline: "Invest in Growth",
    description:
      "[TBC] Investment opportunities in African agro-processing and food manufacturing infrastructure.",
    ctaLabel: "Investor Deck",
    ctaHref: "/contact?type=investor",
  },
  {
    id: "employee",
    label: "Join Our Team",
    icon: "user",
    headline: "Join Our Team",
    description:
      "[TBC] Build a career at the intersection of African agriculture, food &amp; global commerce.",
    ctaLabel: "View Roles",
    ctaHref: "/contact?type=career",
  },
] as const;

export const IMPACT_METRICS = [
  { value: "10,000+", label: "Farmers supported", icon: "farmers", progress: 1 },
  { value: "[XX]", label: "Communities reached", icon: "communities", progress: 0.7 },
  { value: "[XX]+", label: "Products developed", icon: "products", progress: 0.5 },
  { value: "[XX]+", label: "Markets served", icon: "markets", progress: 0.4 },
  { value: "[XX]+", label: "Jobs created", icon: "jobs", progress: 0.6 },
  { value: "[XX] t/yr", label: "Production capacity", icon: "capacity", progress: 0.3 },
] as const;

export const FARM_TO_FOOD_STAGES = [
  {
    num: "01",
    eyebrow: "STAGE 01 · AGRICULTURE",
    headline: "Seeds of <em>Africa</em>.",
    description:
      "Sourced from smallholder farms and cooperatives across growing regions — grains, cocoa, fruits, and indigenous crops.",
    icon: "seed",
    accent: "forest",
  },
  {
    num: "02",
    eyebrow: "STAGE 02 · HARVEST",
    headline: "Golden <em>harvest</em>.",
    description:
      "Hand-picked and mechanically harvested at peak ripeness. Quality-checked at farm-gate before transport.",
    icon: "wheat",
    accent: "mango",
  },
  {
    num: "03",
    eyebrow: "STAGE 03 · PROCESSING",
    headline: "Modern <em>transformation</em>.",
    description:
      "Hygienic, tech-enabled facilities. Cleaning, sorting, milling, blending — precision at every step.",
    icon: "factory",
    accent: "terracotta",
  },
  {
    num: "04",
    eyebrow: "STAGE 04 · PACKAGING",
    headline: "Ready for <em>the shelf</em>.",
    description:
      "Premium, shelf-stable packaging that preserves flavor, tells our story, and meets global food standards.",
    icon: "box",
    accent: "indigo",
  },
  {
    num: "05",
    eyebrow: "STAGE 05 · FOOD",
    headline: "Great <em>food</em>.",
    description:
      "From our kitchens to yours. Delicious, nutritious, culturally rooted meals and ingredients.",
    icon: "plate",
    accent: "mango",
  },
  {
    num: "06",
    eyebrow: "STAGE 06 · GLOBAL MARKETS",
    headline: "For <em>the world</em>.",
    description:
      "Distributed across regional and international markets. Africa on the global plate.",
    icon: "globe",
    accent: "indigo",
  },
] as const;
