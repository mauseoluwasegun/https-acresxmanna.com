import { PageHero } from "@/components/site/PageHero";
import { CTA } from "@/components/site/CTA";
import { SectionTitle } from "@/components/site/SectionTitle";
import { pageMetadata } from "@/lib/seo";

const categories = ["Company news", "Products and innovation", "Industry insights", "Supply chain", "Global trade"];

export const metadata = pageMetadata(
  "News and Insights",
  "Updates, products and perspectives on African agro-processing, food manufacturing and value addition.",
  "/news",
);

export default function NewsPage() {
  return (
    <main id="main">
      <PageHero eyebrow="News and insights" title="Ideas, progress and perspectives shaping African food." intro="Follow the developments, partnerships and thinking behind our work in agro-processing, food manufacturing and agricultural value addition." compact path="/news" />
      <section className="section section--paper">
        <div className="section-inner">
          <SectionTitle eyebrow="Explore by topic" title="Stories from across our work." align="center" />
          <div className="filter-chips" aria-label="News topics">
            {categories.map((category) => <span className="filter-chip" key={category}>{category}</span>)}
          </div>
          <div className="empty-state">
            <p className="eyebrow">Coming soon</p>
            <h2>Our first stories are coming soon.</h2>
            <p>There are no published articles yet. We’ll share updates when they’re ready.</p>
          </div>
        </div>
      </section>
      <CTA title="Have a story to share?" primaryLabel="Contact our team" />
    </main>
  );
}
