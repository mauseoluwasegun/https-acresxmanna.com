import type { Metadata } from "next";
import { PageHero } from "@/components/site/PageHero";
import { ProductsFilter } from "@/components/site/ProductsFilter";
import { CTA } from "@/components/site/CTA";
import { SectionTitle } from "@/components/site/SectionTitle";
import { FAQSection } from "@/components/site/FAQSection";
import { faqs, products } from "@/lib/site-content";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(
  "Garri, Plantain Chips, Groundnuts and More",
  "Explore AcresxManna’s African food products: garri, cassava flour, groundnuts, cashew nuts, plantain chips and hibiscus teas.",
  "/products",
);

export default function ProductsPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Our products"
        title="African agricultural products, transformed into everyday food."
        intro="From traditional staples to snacks, ingredients and beverages, our portfolio is built around African agricultural resources."
        path="/products"
      />
      <section className="section section--paper">
        <div className="section-inner">
          <ProductsFilter products={products} />
          <p className="status-note text-center">Export focused today; Nigerian retail is planned through shops and the UncleTobi online grocery store. Products are packed to each client’s requirements, so we don’t publish standard pack sizes.</p>
        </div>
      </section>
      <section className="section section--soft">
        <div className="section-inner">
          <SectionTitle eyebrow="Good to know" title="Let’s answer a few product questions." align="center" />
          <FAQSection entries={faqs.slice(1, 7)} />
        </div>
      </section>
      <CTA title="Looking for a product or pack format?" text="Tell us what you need. Product details and availability depend on your requirements and destination." primaryLabel="Request product information" primaryHref="/contact?type=product" />
    </main>
  );
}
