export const SITE_URL = "https://acresxmanna.com";
export const SITE_NAME = "AcresxManna";
export const CONTACT_EMAIL = "info@acresxmanna.com";
export const CONTACT_PHONE = "+234 804 700 0587";
export const INSTAGRAM_URL = "https://www.instagram.com/acresxmanna/";

export const SITE_LOCATIONS = [
  {
    id: "factory",
    label: "Factory",
    address: "The Goodland, Off Apapa Road, Moniya, Ibadan, Oyo State, Nigeria",
  },
  {
    id: "nigerianOffice",
    label: "Nigerian office",
    address: "10 Adeniyi Coker, Dideolu Estate, Victoria Island, Lagos, Nigeria",
  },
  {
    id: "ukWarehouse",
    label: "UK warehouse and office",
    address: "Orland House, Unit 1, Mead Lane, Hertford SG13 7AT, United Kingdom",
  },
] as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "What We Do", href: "/what-we-do" },
  { label: "Products", href: "/products" },
  { label: "Our Brands", href: "/our-brands" },
  { label: "Infrastructure", href: "/infrastructure" },
  { label: "Impact", href: "/impact" },
  { label: "Global Markets", href: "/global-markets" },
  { label: "Investors & Partners", href: "/investors-partners" },
  { label: "News & Insights", href: "/news-insights" },
  { label: "Contact", href: "/contact" },
] as const;

export const STAKEHOLDERS = [
  {
    id: "consumer",
    label: "Explore Products",
    icon: "cart",
    headline: "I want to Explore Products",
    description:
      "Explore our African agricultural food products.",
    ctaLabel: "Browse Catalog",
    ctaHref: "/products",
  },
  {
    id: "farmer",
    label: "Become a Supplier",
    icon: "wheat",
    headline: "Become a Supplier (Farmers)",
    description:
      "Tell us what agricultural commodities you grow, aggregate or trade.",
    ctaLabel: "Farmer Inquiry",
    ctaHref: "/become-a-supplier",
  },
  {
    id: "distributor",
    label: "Distribution",
    icon: "truck",
    headline: "Distribution Opportunities",
    description: "Discuss product availability and distribution opportunities with our team.",
    ctaLabel: "Distributor Inquiry",
    ctaHref: "/become-a-distributor",
  },
  {
    id: "partner",
    label: "Partner With Us",
    icon: "handshake",
    headline: "Business Enquiries",
    description: "Start a conversation about a commercial or manufacturing partnership.",
    ctaLabel: "Start Partnership",
    ctaHref: "/business-enquiries",
  },
  {
    id: "investor",
    label: "Invest in Growth",
    icon: "briefcase",
    headline: "Investors & Partners",
    description: "Start a conversation about building African agro-processing capacity.",
    ctaLabel: "Start a Conversation",
    ctaHref: "/investors-partners",
  },
  {
    id: "employee",
    label: "Join Our Team",
    icon: "user",
    headline: "Contact Our Team",
    description: "Get in touch with AcresxManna about products, supply or partnerships.",
    ctaLabel: "Say Hello",
    ctaHref: "/contact",
  },
] as const;

export const IMPACT_METRICS = [
  "Agricultural value addition",
  "Economic opportunities",
  "Supplier and farmer opportunities",
  "Food systems and market access",
  "African industrial development",
] as const;

/**
 * Impact Scorecard — real numbers provided by the team.
 * Each entry drives an animated CountUp tile on /impact.
 *
 * Fields:
 *   label   — human-readable metric name
 *   value   — the numeric target (used by CountUp)
 *   suffix  — appended after the number ("+", "%", "t", etc.)
 *   prefix  — prepended before the number ("$", etc.)
 *   note    — optional sub-label for context
 */
export const IMPACT_SCORECARD = [
  {
    label: "Tonnes processed",
    value: 0,
    suffix: "",
    note: "Target numbers coming soon",
  },
  {
    label: "Finished products manufactured",
    value: 0,
    suffix: "",
    note: "Target numbers coming soon",
  },
  {
    label: "Active suppliers & producer partnerships",
    value: 0,
    suffix: "+",
    note: "Target numbers coming soon",
  },
  {
    label: "Direct jobs created and retained",
    value: 0,
    suffix: "+",
    note: "Target numbers coming soon",
  },
  {
    label: "Product categories processed locally",
    value: 0,
    suffix: "",
    note: "Target numbers coming soon",
  },
  {
    label: "Countries with verified sales",
    value: 0,
    suffix: "+",
    note: "Target numbers coming soon",
  },
  {
    label: "Compliance & quality measures",
    value: 0,
    suffix: "",
    note: "Target numbers coming soon",
  },
] as const;

/** Type helper — a single scorecard entry */
export type ImpactScorecardEntry = (typeof IMPACT_SCORECARD)[number];

