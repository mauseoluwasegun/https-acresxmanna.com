import { CTA } from "@/components/site/CTA";
import { PageHero } from "@/components/site/PageHero";
import { SectionTitle } from "@/components/site/SectionTitle";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Impact | Value Addition",
  "How AcresxManna aims to create value and opportunity by processing African agricultural resources.",
  "/impact",
);

const themes = [
  ["Agricultural value addition", "Moving more products beyond the raw-commodity stage into higher-value food."],
  ["Economic opportunities", "A growing agro-processor can create opportunities across production, logistics, packaging, maintenance, quality, distribution and supporting services."],
  ["Supplier opportunities", "Stronger commercial relationships with suppliers and, where suitable, farmer groups."],
  ["Food systems and market access", "Processing, storage and distribution that connect production with consumers."],
  ["African industrial development", "Showing how African agricultural resources can support competitive manufacturing and supply to markets beyond their home countries."],
];

const measures = [
  "Tonnes processed",
  "Finished products manufactured",
  "Active suppliers and producer partnerships",
  "Direct jobs created and retained",
  "Product categories processed locally",
  "Countries with verified sales",
  "Compliance and quality measures",
];

export default function ImpactPage() {
  return (
    <main id="main">
      <PageHero eyebrow="Our impact" title="Processing creates value. Value creates opportunity." intro="A stronger African food economy depends on more than growing crops. It also depends on processing, manufacturing, distributing and selling them competitively." path="/impact" />
      <section className="section section--paper">
        <div className="section-inner">
          <SectionTitle eyebrow="What we’re working towards" title="Value that reaches further." align="center" />
          <div className="feature-grid">
            {themes.map(([title, body], index) => <article className="feature-card card-lift" key={title}><span className="feature-card__icon" aria-hidden="true">{index + 1}</span><h3>{title}</h3><p>{body}</p></article>)}
          </div>
        </div>
      </section>
      <section className="section section--purple">
        <div className="section-inner">
          <SectionTitle eyebrow="Our scorecard" title="Real progress. Verified numbers." intro="We’ll share these measures when every figure is real, sourced and approved." align="center" />
          <div className="scorecard">
            {measures.map((measure) => <div className="scorecard__tile" key={measure}><strong>Coming soon</strong><span>{measure}</span></div>)}
          </div>
          <p className="section-intro text-center" style={{ margin: "32px auto 0" }}>We want our growth measured not only by the products we sell, but by the productive capacity and economic opportunities we help create.</p>
        </div>
      </section>
      <CTA title="Partner with us" />
    </main>
  );
}
