import { CTA } from "@/components/site/CTA";
import { PageHero } from "@/components/site/PageHero";
import { SectionTitle } from "@/components/site/SectionTitle";
import { pageMetadata } from "@/lib/seo";

const values = [
  ["Quality and excellence", "Standards, discipline and consistency that earn confidence."],
  ["Community", "Growth that creates opportunity for suppliers, workers, producers and communities."],
  ["Innovation", "Better ways to process, package and deliver African food."],
  ["Collaboration", "Partnerships, shared expertise and strong commercial relationships."],
  ["Dedication and heart", "Responsibility, resilience and commitment to people."],
  ["Capacity building", "Investing in people, processes, partnerships and infrastructure."],
];

export const metadata = pageMetadata(
  "About | Our Story and Vision",
  "Learn how AcresxManna is building an African agro-processing business that captures more value from what Africa grows.",
  "/about",
);

export default function AboutPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="About us"
        title="We believe Africa should capture more value from its agriculture."
        intro="AcresxManna is building an African agro-processing and food manufacturing business that turns agricultural resources into quality products and long-term commercial opportunities."
        path="/about"
      />
      <section className="section section--paper">
        <div className="section-inner home-intro">
          <div className="home-intro__art" aria-hidden="true"><span>More value after harvest.</span></div>
          <div>
            <p className="eyebrow">Our story</p>
            <h2>More of the value can stay in what we make.</h2>
            <p>Africa has significant agricultural resources, yet much of the value in the food economy sits in what happens after harvest. We believe more of that value can be captured through processing, manufacturing, packaging, quality control and competitive food brands.</p>
            <p>Through our operating capabilities in Nigeria and our UK-facing business, we’re building the foundations for a stronger link between African food production and international markets. We understand both sides: the realities of sourcing and processing in Africa, and the quality, consistency and commercial needs of the markets we want to serve.</p>
          </div>
        </div>
      </section>
      <section className="section section--soft">
        <div className="section-inner">
          <SectionTitle eyebrow="Our direction" title="A clear vision. A practical mission." align="center" />
          <div className="content-grid">
            <article className="content-card"><span className="eyebrow">Our vision</span><h2>To become Africa’s leading agro-processing and food manufacturing company.</h2><p>Recognised globally for scale, quality, innovation and the value we create from African agriculture.</p></article>
            <article className="content-card"><span className="eyebrow">Our mission</span><h2>To transform African agricultural resources into competitive food products.</h2><p>Through processing, manufacturing, quality control, brand development and access to markets.</p></article>
          </div>
        </div>
      </section>
      <section className="section section--paper">
        <div className="section-inner">
          <SectionTitle eyebrow="What guides us" title="The values behind the work." align="center" />
          <div className="value-grid">
            {values.map(([title, body], index) => <article className="feature-card card-lift" key={title}><span className="feature-card__icon" aria-hidden="true">{index + 1}</span><h3>{title}</h3><p>{body}</p></article>)}
          </div>
        </div>
      </section>
      <section className="section section--purple">
        <div className="section-inner section-title section-title--center">
          <p className="eyebrow eyebrow--gold">Our philosophy</p>
          <h2>Africa’s agricultural wealth should create African industrial value.</h2>
          <p className="section-intro">More commodities turned into finished products, more production capability built within African economies, and more African food businesses competing confidently worldwide.</p>
        </div>
      </section>
      <section className="section section--paper">
        <div className="section-inner">
          <SectionTitle eyebrow="Our people" title="The team story is still growing." intro="Leadership names, biographies and photographs will be added once approved. We don’t publish placeholder profiles." align="center" />
        </div>
      </section>
      <CTA />
    </main>
  );
}
