import { Link } from "@/i18n/routing";
import { CTA } from "@/components/site/CTA";
import { ProductCard } from "@/components/site/ProductCard";
import { SectionTitle } from "@/components/site/SectionTitle";
import { FAQSection } from "@/components/site/FAQSection";
import { faqs, products } from "@/lib/site-content";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "African Agro-Processing and Food",
  "AcresxManna turns Africa’s agricultural resources into quality food products through processing, manufacturing and market access.",
  "/",
);

const capabilities = [
  ["Agricultural sourcing", "Dependable relationships with suppliers and producers."],
  ["Aggregation", "Bringing commodities together for consistent production."],
  ["Processing", "Turning raw materials into value-added food products."],
  ["Manufacturing", "Producing and packaging to defined specifications."],
  ["Brand development", "Products and brands for consumer and business markets."],
  ["Distribution and trade", "Routes to market across Africa and internationally."],
];

const steps = [
  ["Source", "Dependable supply relationships."],
  ["Process and manufacture", "Consistent products from controlled production."],
  ["Package and build brands", "Packaging, presentation and quality specifications."],
  ["Connect to markets", "Distribution and trade relationships."],
];

const impactPillars = [
  "Agricultural value addition",
  "Local production and employment",
  "Stronger supply chains",
  "African food in global markets",
];

export default function HomePage() {
  return (
    <main id="main">
      <section className="page-hero home-hero">
        <div className="page-hero__bubble page-hero__bubble--one" />
        <div className="page-hero__bubble page-hero__bubble--two" />
        <div className="page-hero__content">
          <p className="eyebrow eyebrow--gold">Redefining the African Agro-food Market Globally.</p>
          <h1>Africa’s food. Processed for the world.</h1>
          <p className="page-hero__intro">We turn Africa’s agricultural resources into quality food products through processing, manufacturing and market access.</p>
          <div className="hero-actions">
            <Link className="button button--yellow" href="/what-we-do">Explore our business</Link>
            <Link className="button button--light-outline" href="/products">Explore our products</Link>
          </div>
        </div>
        <div className="page-hero__wave" aria-hidden="true" />
      </section>

      <div className="product-ticker" aria-label="Our current and planned products">
        <div className="product-ticker__track" aria-hidden="true">
          {[0, 1].map((copy) => (
            <span key={copy}>Garri · Cassava flour · Konkote · Groundnuts · Cashew nuts · Plantain chips · Hibiscus and teas · Seasonings and spices</span>
          ))}
        </div>
      </div>

      <section className="section section--paper">
        <div className="section-inner home-intro">
          <div className="home-intro__art" aria-hidden="true"><span>From harvest to more tables.</span></div>
          <div>
            <p className="eyebrow">Our ambition</p>
            <h2>Africa should capture more value from what it grows.</h2>
            <p>Africa has immense agricultural resources. AcresxManna exists to help bridge the gap between agricultural production and the finished food products consumers and businesses need.</p>
            <p className="eyebrow">Who we are</p>
            <h2>More than food production. We’re building the platform.</h2>
            <p>We’re building an integrated agro-processing and food manufacturing business that connects agricultural sourcing with processing, production, quality assurance, product development and market access. Our principle is simple: agricultural value shouldn’t end at the farm gate.</p>
            <Link className="text-link" href="/about">Get to know us <span aria-hidden="true">→</span></Link>
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="section-inner">
          <SectionTitle eyebrow="What we do" title="From agricultural commodities to finished food products." intro="Each step connects agricultural supply with the products and markets people rely on." align="center" />
          <div className="feature-grid">
            {capabilities.map(([title, body], index) => (
              <article className="feature-card card-lift" key={title}>
                <span className="feature-card__icon" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
          <div className="content-page__cta"><Link className="button button--purple" href="/what-we-do">See how we work</Link></div>
        </div>
      </section>

      <section className="section section--paper">
        <div className="section-inner">
          <SectionTitle eyebrow="Our products" title="African ingredients. Everyday food. Global opportunity." intro="Our portfolio reflects the versatility of African agriculture and the opportunity in processing it into convenient, market-ready products." align="center" />
          <div className="product-grid">
            {products.map((product) => <ProductCard key={product.slug} product={product} />)}
          </div>
          <p className="status-note text-center">Export focused today, with Nigerian retail planned for the future.</p>
          <div className="content-page__cta"><Link className="button button--purple" href="/products">Explore all products</Link></div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="section-inner">
          <SectionTitle eyebrow="Our operating model" title="Building value across the food chain." align="center" />
          <div className="operating-model">
            {steps.map(([title, body], index) => (
              <article className="step-card" key={title}>
                <span className="number-badge">{index + 1}</span>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--paper">
        <div className="section-inner">
          <SectionTitle eyebrow="Our brands" title="One platform. Multiple opportunities." intro="Our wider ecosystem brings together food products, a bakery and an online grocery concept, each with its own role." align="center" />
          <div className="brands-grid">
            <article className="brand-card card-lift"><span className="status-tag">Active</span><h3>HappyMan Foods</h3><p>The brand AcresxManna uses to sell its products.</p></article>
            <article className="brand-card card-lift"><span className="status-tag">Live</span><h3>Maluza Foods Co.</h3><p>Our bakery, live in Ibadan and developing new products.</p></article>
            <article className="brand-card card-lift"><span className="status-tag status-tag--planned">Coming soon</span><h3>UncleTobi</h3><p>An online grocery concept that will bring together suppliers.</p></article>
          </div>
          <div className="content-page__cta"><Link className="button button--purple" href="/brands">Meet our brands</Link></div>
        </div>
      </section>

      <section className="section section--purple">
        <div className="section-inner">
          <SectionTitle eyebrow="Our impact" title="Processing creates value. Value creates opportunity." intro="The future of African agriculture depends not only on what is grown, but also on what is processed, manufactured and sold." align="center" />
          <div className="scorecard">
            {impactPillars.map((pillar) => <div className="scorecard__tile" key={pillar}><strong>Building</strong><span>{pillar}</span></div>)}
          </div>
          <div className="content-page__cta"><Link className="button button--yellow" href="/impact">Our approach to impact</Link></div>
        </div>
      </section>

      <section className="section section--paper">
        <div className="section-inner home-intro">
          <div>
            <p className="eyebrow">Global ambition</p>
            <h2>Built in Africa. Designed to compete globally.</h2>
            <p>We’re going beyond raw commodities. We’re building the processing capability, product portfolio and commercial relationships needed to compete in African and international food markets.</p>
            <Link className="text-link" href="/global-markets">Explore global markets <span aria-hidden="true">→</span></Link>
          </div>
          <div className="home-intro__art" aria-hidden="true"><span>Built here.<br />Made for more.</span></div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="section-inner">
          <SectionTitle eyebrow="Good questions" title="A little more about us." align="center" />
          <FAQSection entries={faqs.slice(0, 4)} />
        </div>
      </section>
      <CTA primaryLabel="Partner with us" primaryHref="/partners" thirdLabel="Become a supplier" thirdHref="/become-a-supplier" />
    </main>
  );
}
