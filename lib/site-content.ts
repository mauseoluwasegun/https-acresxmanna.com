export type Product = {
  slug: string;
  name: string;
  status: "Available now" | "Coming soon";
  category: string;
  varieties?: string[];
  description: string;
};

export const products: Product[] = [
  {
    slug: "garri",
    name: "Garri",
    status: "Available now",
    category: "Cassava products",
    varieties: ["White", "Ijebu", "Yellow"],
    description: "A much-loved cassava staple, available in white, Ijebu and yellow varieties.",
  },
  {
    slug: "cassava-flour",
    name: "Cassava flour",
    status: "Available now",
    category: "Cassava products",
    description: "Cassava flour, packed to each client's requirements.",
  },
  {
    slug: "konkote",
    name: "Konkote",
    status: "Available now",
    category: "Cassava products",
    description: "Konkote (cassava flour), available for export enquiries.",
  },
  {
    slug: "groundnuts-and-peanuts",
    name: "Groundnuts and peanuts",
    status: "Available now",
    category: "Nuts",
    description: "Groundnuts and peanuts from AcresxManna's current product range.",
  },
  {
    slug: "cashew-nuts",
    name: "Cashew nuts",
    status: "Available now",
    category: "Nuts",
    description: "Cashew nuts from AcresxManna's current product range.",
  },
  {
    slug: "plantain-chips",
    name: "Plantain chips",
    status: "Available now",
    category: "Snacks",
    description: "Plantain chips from AcresxManna's current product range.",
  },
  {
    slug: "hibiscus-and-teas",
    name: "Hibiscus and teas",
    status: "Available now",
    category: "Drinks and infusions",
    description: "Hibiscus and tea products from AcresxManna's current product range.",
  },
  {
    slug: "seasonings-and-spices",
    name: "Seasonings and spices",
    status: "Coming soon",
    category: "Seasonings",
    description: "Seasonings and spices are planned and are not yet available.",
  },
];

export type ContentSection = {
  title: string;
  body: string;
  items?: string[];
  label?: string;
};

export type ContentPage = {
  eyebrow: string;
  title: string;
  intro: string;
  sections: ContentSection[];
  cta?: { label: string; href: string };
};

export const contentPages: Record<string, ContentPage> = {
  "what-we-do": {
    eyebrow: "What we do",
    title: "We turn agricultural potential into food products and commercial value.",
    intro: "We connect agricultural supply with processing, manufacturing, product development and market access.",
    sections: [
      { title: "Agricultural sourcing", body: "We build dependable supply relationships, starting with an understanding of raw material quality, availability and seasonality." },
      { title: "Aggregation and supply management", body: "We coordinate suppliers and incoming materials so production needs can be met consistently." },
      { title: "Agro-processing", body: "We transform commodities into products with more utility, convenience and value, using suitable equipment, defined procedures, trained people and quality control." },
      { title: "Food manufacturing", body: "We work towards consistent specifications, efficient production and appropriate packaging, expanding as demand, investment and readiness allow." },
      { title: "Product and brand development", body: "We develop our own products and brands, and explore processing for other businesses where it is operationally suitable." },
      { title: "Distribution and international trade", body: "We build commercial relationships and market access, supported by Nigerian sourcing, processing, production and quality-control operations." },
      { title: "Contract manufacturing", body: "We welcome conversations about sourcing, private label and production partnerships. Capabilities, minimum order quantities and lead times depend on the product and need to be confirmed." },
      { title: "Partnerships", body: "Each capability strengthens the next. We’re building one integrated African food business, not a pile of disconnected parts." },
    ],
    cta: { label: "Discuss a commercial partnership", href: "/business-enquiries" },
  },
  brands: {
    eyebrow: "Our brands",
    title: "One platform. Different ways to bring African food to market.",
    intro: "AcresxManna’s wider ecosystem includes food brands, a bakery and an online grocery concept, each with a distinct purpose in the food value chain.",
    sections: [
      { title: "HappyMan Foods", label: "Active", body: "The brand under which AcresxManna sells its products, from garri and cassava flour to peanuts, cashew nuts, plantain chips and hibiscus teas." },
      { title: "Maluza Foods Co.", label: "Live", body: "Our bakery, live in Ibadan and developing new products, with new stalls opening in and around the city." },
      { title: "UncleTobi", label: "Coming soon", body: "An online grocery concept that will bring together suppliers who will retail on the platform. Launch timing is yet to be announced." },
      { title: "How the brands relate", body: "The legal and operating relationship between each brand and AcresxManna is still being confirmed. We’ll explain each relationship clearly when those details are approved." },
    ],
    cta: { label: "Contact our team", href: "/contact" },
  },
  infrastructure: {
    eyebrow: "Infrastructure",
    title: "Building the capacity behind African food.",
    intro: "Our ambition needs more than agricultural supply. It needs production infrastructure, people, systems and partnerships to turn raw materials into consistent, market-ready food.",
    sections: [
      { title: "Production and processing", body: "We’re developing the capability to process commodities efficiently and manufacture to defined specifications." },
      { title: "Quality assurance", body: "Quality assurance is a core part of how we plan to build and assess production. Product-specific processes and any certifications will be shared only when verified." },
      { title: "Supply chain and warehousing", body: "Supplier coordination, appropriate storage, raw-material availability and finished-goods management support reliable operations." },
      { title: "What’s operating today", label: "Operating", body: "Our factory and headquarters are at The Goodland, Off Apapa Road, Moniya, Ibadan, Oyo State. Our Nigerian office is in Victoria Island, Lagos. Real operating photographs will be added when supplied." },
      { title: "What we’re building next", label: "Planned", body: "Planned priorities include more production capacity, more reliable energy, efficient processing and packaging, better storage and inventory control, wider product capability and greater resilience." },
    ],
    cta: { label: "Enquire about visiting", href: "/contact" },
  },
  impact: {
    eyebrow: "Our impact",
    title: "Processing creates value. Value creates opportunity.",
    intro: "A stronger African food economy depends on more than growing crops. It also depends on processing, manufacturing, distributing and selling them competitively.",
    sections: [
      { title: "Agricultural value addition", body: "Moving more products beyond the raw-commodity stage into higher-value food." },
      { title: "Economic opportunities", body: "A growing agro-processor can create opportunities across production, logistics, packaging, maintenance, quality, distribution and supporting services." },
      { title: "Supplier opportunities", body: "Stronger commercial relationships with suppliers and, where suitable, farmer groups." },
      { title: "Food systems and market access", body: "Processing, storage and distribution that connect production with consumers." },
      { title: "African industrial development", body: "Showing how African agricultural resources can support competitive manufacturing and supply to markets beyond their home countries." },
      { title: "Our scorecard", label: "Coming soon", body: "We’ll publish these measures when each figure is verified and has a source.", items: ["Tonnes processed", "Finished products manufactured", "Active suppliers and producer partnerships", "Direct jobs created and retained", "Product categories processed locally", "Countries with verified sales", "Compliance and quality measures"] },
    ],
    cta: { label: "Partner with us", href: "/partners" },
  },
  "global-markets": {
    eyebrow: "Global markets",
    title: "From African agricultural resources to global food markets.",
    intro: "We’re building a business that connects African food production with customers, businesses and opportunities in international markets.",
    sections: [
      { title: "Market development", body: "Markets are considered by demand, competition, regulation and distribution." },
      { title: "Product readiness", body: "Documents, packaging and specifications need to fit each destination." },
      { title: "Commercial partnerships", body: "We welcome conversations with importers, distributors, retailers and food businesses." },
      { title: "Supply reliability", body: "Production and sourcing systems support consistent orders." },
      { title: "How our businesses work", body: "AcresxManna Ltd in Nigeria manufactures, signs customer contracts and exports. UncleTobi.Shop invoices buyers and operates a warehouse and office in Hertford, United Kingdom. The UK entity’s full legal name and registration details are still to be confirmed." },
      { title: "Markets", label: "Verified sales only", body: "We do not currently publish country-level established markets or target-market lists. No country will be presented as an established market without verified sales or distribution." },
    ],
    cta: { label: "International trade enquiries", href: "/contact" },
  },
  partners: {
    eyebrow: "Investors and partners",
    title: "Building Africa’s next generation of agro-processing capacity.",
    intro: "Growth depends on the right mix of production capacity, working capital, supply relationships, market access and operational systems.",
    sections: [
      { title: "Production capacity", body: "Developing the capability to process agricultural commodities and manufacture food products." },
      { title: "Working capital", body: "Supporting raw materials, production cycles, packaging, inventory and fulfilment." },
      { title: "Product development", body: "Building a portfolio that reflects the versatility of African agriculture." },
      { title: "Market development", body: "Forming the commercial relationships needed to reach customers." },
      { title: "Who we’d love to meet", body: "We welcome investors with a long-term interest in African agro-processing, agricultural suppliers, distributors and buyers, and industrial or strategic partners in processing, packaging, logistics, technology or market access. We don’t publish fundraising details, valuation, equity terms or projections online." },
    ],
    cta: { label: "Start a partnership conversation", href: "/business-enquiries" },
  },
  news: {
    eyebrow: "News and insights",
    title: "Ideas, progress and perspectives shaping African food.",
    intro: "Follow the developments, partnerships and thinking behind our work in agro-processing, food manufacturing and agricultural value addition.",
    sections: [
      { title: "Our first stories are coming soon", body: "There are no published articles yet. We’ll share company news, product and innovation updates, supply-chain stories and perspectives on global trade when they’re ready." },
    ],
    cta: { label: "Get in touch", href: "/contact" },
  },
  "become-a-supplier": {
    eyebrow: "Grow with us",
    title: "Let’s source Africa’s harvest together.",
    intro: "A dependable processing business needs dependable agricultural supply. If you grow, aggregate or trade agricultural commodities, we’d love to hear from you.",
    sections: [
      { title: "What we look for", body: "Consistent quality, reliable seasonal supply, clear origin and handling, a willingness to work to agreed specifications, and honest long-term dealing." },
      { title: "Commodities of interest", body: "Cassava, plantain, groundnuts and peanuts, hibiscus, and spice and seasoning ingredients. The list is subject to confirmation." },
      { title: "How it works", body: "Tell us what you supply. We review quality, volume and timing. We agree specifications and terms. Then we build the supply relationship step by step." },
    ],
    cta: { label: "Apply to become a supplier", href: "/contact?type=supplier" },
  },
  "become-a-distributor": {
    eyebrow: "Stock the flavour",
    title: "Bring African-made food to your shelves.",
    intro: "We’re looking for retailers, wholesalers, distributors and importers who want dependable African food products and long-term partnerships.",
    sections: [
      { title: "A conversation, not a promise", body: "Product information, sampling, packaging options and order details depend on the product and channel. Our team can discuss what is available for your market." },
      { title: "How it works", body: "Introduce yourself. We share relevant product information. We discuss fit, volumes and logistics. Then we agree a way to work together." },
    ],
    cta: { label: "Apply to become a distributor", href: "/contact?type=distributor" },
  },
  "business-enquiries": {
    eyebrow: "Business enquiries",
    title: "Let’s talk business.",
    intro: "For anything that isn’t a product, supply or distribution question: manufacturing and private-label talks, partnerships, media, or ideas we haven’t thought of yet.",
    sections: [
      { title: "Start a conversation", body: "Choose the enquiry type that best fits your message and our team will direct it to the right place once form delivery is enabled." },
    ],
    cta: { label: "Start the conversation", href: "/contact?type=business" },
  },
  privacy: {
    eyebrow: "Privacy",
    title: "Your details deserve care.",
    intro: "This pre-launch privacy notice describes the limited information handling currently planned for this website. It is not a final policy and needs review by qualified legal advisers in Nigeria and the UK before launch.",
    sections: [
      { title: "Who we are", body: "AcresxManna is the trading name of AcresxManna Ltd in Nigeria. The full legal name and registration details of the UK-facing entity require confirmation before launch." },
      { title: "Information and enquiries", body: "The enquiry form is not enabled to collect or send personal data until a secure delivery service, retention period and responsible inboxes are configured. You can contact us directly using the public details on the Contact page." },
      { title: "Analytics and sharing", body: "No analytics or advertising trackers are enabled in this preview. This notice must be updated to describe any hosting, email, CRM, analytics, international-transfer, retention, rights and complaint processes before launch." },
      { title: "Review required", label: "Pre-launch", body: "A qualified adviser must finalise this notice for the actual legal entities, providers, data practices, retention periods and applicable privacy laws." },
    ],
  },
  terms: {
    eyebrow: "Terms of use",
    title: "A few useful notes before you explore.",
    intro: "This pre-launch summary is for general information only. It is not final legal advice or a completed set of terms.",
    sections: [
      { title: "Information on this site", body: "Website content may change and is not an offer to sell, a guarantee of product availability or a substitute for product specifications confirmed in writing." },
      { title: "Products and brands", body: "Product availability, specifications and packaging depend on the product and customer requirements. Brand and company relationships are described only where confirmed." },
      { title: "Third-party links", body: "Links to third-party services are provided for convenience. Their content and practices are managed by those providers." },
      { title: "Review required", label: "Pre-launch", body: "Qualified legal advisers must confirm ownership, permitted use, liability, governing law, registered details and dispute handling before these terms are published." },
    ],
  },
  cookies: {
    eyebrow: "Cookies",
    title: "You choose how this site remembers you.",
    intro: "This preview does not use analytics or advertising cookies. Optional tracking remains off unless a future, consented tool is configured.",
    sections: [
      { title: "Essential storage", body: "The site may store your cookie preference in your browser so it can remember your choice. No analytics or marketing tool is currently connected." },
      { title: "Change your choice", body: "Use the cookie settings control below to revisit your preference. The list of any future cookies, providers and durations must be reviewed before launch." },
    ],
  },
  glossary: {
    eyebrow: "Glossary",
    title: "Food and supply-chain terms, made clearer.",
    intro: "A few useful terms you may see as you explore our work.",
    sections: [
      { title: "Agro-processing", body: "Turning raw crops into finished or semi-finished food products." },
      { title: "Aggregation", body: "Gathering produce from suppliers into reliable, quality-checked volumes." },
      { title: "Value addition", body: "Increasing the worth of a crop through processing, packaging and branding." },
      { title: "Value chain", body: "Every step from the farm to the person who eats the food." },
      { title: "Commodity", body: "A raw agricultural product traded in bulk, such as cassava or groundnuts." },
      { title: "Private label", body: "A product made by one company and sold under another company’s brand." },
      { title: "Garri", body: "A staple food made from processed cassava." },
      { title: "Hibiscus", body: "The flower used in popular teas and drinks." },
    ],
  },
};

export const faqs = [
  { question: "What does AcresxManna do?", answer: "We turn Africa’s agricultural resources into quality food products through sourcing, processing, manufacturing, brand development and distribution, for African and international markets." },
  { question: "Where do you operate?", answer: "Our factory is at The Goodland, Off Apapa Road, Moniya, Ibadan, Oyo State, Nigeria. We also have an office in Victoria Island, Lagos, and a warehouse and office in Hertford, United Kingdom." },
  { question: "Which products are available now?", answer: "Garri (white, Ijebu and yellow), cassava flour, konkote, groundnuts and peanuts, cashew nuts, plantain chips, and hibiscus and teas are on sale now. Seasonings and spices are planned." },
  { question: "Can I buy your products?", answer: "We’re export focused today, so please send us an enquiry. Nigerian retail is planned through shops and the UncleTobi online grocery store." },
  { question: "Do you work with distributors and retailers?", answer: "Yes. We welcome enquiries from retailers, wholesalers, distributors and importers through our Become a Distributor page." },
  { question: "Do you export?", answer: "Yes. Export is our current focus. Contact us to discuss product availability and destination markets." },
  { question: "Are your products certified?", answer: "We’ll list certifications when their status is verified. Please contact us for current product-specific information." },
  { question: "What are the brands?", answer: "HappyMan Foods is the brand we sell our products under, Maluza Foods Co. is our bakery, and UncleTobi is an online grocery concept coming soon. The exact legal relationships are still being confirmed." },
];
