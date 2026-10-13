import { CTA } from "@/components/site/CTA";
import { PageHero } from "@/components/site/PageHero";
import { SectionTitle } from "@/components/site/SectionTitle";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Investors and Partners",
  "Partner with AcresxManna to build African agro-processing capacity: supply, technology, capital and market access.",
  "/partners",
);

const building = [
  ["Production capacity", "Developing the capability to process agricultural commodities and manufacture food products."],
  ["Working capital", "Supporting raw materials, production cycles, packaging, inventory and fulfilment."],
  ["Product development", "Building a portfolio that reflects the versatility of African agriculture."],
  ["Market development", "Forming the commercial relationships needed to reach customers."],
];

const roles = [
  ["Investors", "Long-term interest in African agro-processing, food manufacturing and value addition."],
  ["Agricultural suppliers", "Suitable raw materials supplied to agreed specifications."],
  ["Distributors", "Routes to retail, wholesale and food-service channels."],
  ["Buyers", "Businesses looking for African food products and dependable commercial relationships."],
  ["Industrial and strategic partners", "Processing, packaging, logistics, technology or market access."],
];

export default function PartnersPage() {
  return (
    <main id="main">
      <PageHero eyebrow="Investors and partners" title="Building Africa’s next generation of agro-processing capacity." intro="AcresxManna is built around a big opportunity: transforming African agricultural resources into competitive food through processing, manufacturing and market development. Growth depends on the right mix of production capacity, working capital, supply relationships, market access and operational systems." path="/partners" />
      <section className="section section--paper">
        <div className="section-inner">
          <SectionTitle eyebrow="What we’re building" title="Four foundations for sustainable growth." align="center" />
          <div className="feature-grid">
            {building.map(([title, body], index) => <article className="feature-card card-lift" key={title}><span className="feature-card__icon" aria-hidden="true">{index + 1}</span><h3>{title}</h3><p>{body}</p></article>)}
          </div>
        </div>
      </section>
      <section className="section section--soft">
        <div className="section-inner">
          <SectionTitle eyebrow="Who we’d love to meet" title="Good things grow through the right partnerships." align="center" />
          <div className="value-grid">
            {roles.map(([title, body], index) => <article className="feature-card card-lift" key={title}><span className="feature-card__icon" aria-hidden="true">{index + 1}</span><h3>{title}</h3><p>{body}</p></article>)}
          </div>
          <p className="status-note text-center">We don’t publish fundraising amounts, valuation, equity terms or financial projections.</p>
        </div>
      </section>
      <CTA title="Let’s build Africa’s food future." text="We welcome people and organisations who can contribute capital, capabilities, supply, technology or market access." primaryLabel="Start a partnership conversation" primaryHref="/business-enquiries" />
    </main>
  );
}
