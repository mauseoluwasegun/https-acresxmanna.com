import type { Metadata } from "next";
import { InquiryForm, type InquiryKind } from "@/components/site/InquiryForm";
import { PageHero } from "@/components/site/PageHero";
import { FAQSection } from "@/components/site/FAQSection";
import { SectionTitle } from "@/components/site/SectionTitle";
import { faqs, products } from "@/lib/site-content";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(
  "Contact | Let’s Talk",
  "Get in touch about products, supply, distribution, manufacturing partnerships or investment.",
  "/contact",
);

type ContactProps = { searchParams: Promise<{ type?: string; product?: string }> };

export default async function ContactPage({ searchParams }: ContactProps) {
  const query = await searchParams;
  const type = query.type;
  const kind: InquiryKind = type === "supplier" || type === "distributor" || type === "business" || type === "product" ? type : "contact";
  const productName = products.find((product) => product.slug === query.product)?.name;

  return (
    <main id="main">
      <PageHero eyebrow="Contact" title="Great partnerships start with a conversation." intro="Whether you want to buy our products, supply agricultural commodities, distribute our brands, explore manufacturing partnerships or discuss investment, we’d love to hear from you." compact path="/contact" />
      <section className="section section--paper">
        <div className="section-inner contact-layout">
          <InquiryForm kind={kind} productName={productName} />
          <aside className="contact-card">
            <h2>Contact our team</h2>
            <p>Prefer to reach us directly? You can use the confirmed public details below.</p>
            <div className="contact-card__detail"><strong>Email</strong><a href="mailto:info@acresxmanna.com">info@acresxmanna.com</a></div>
            <div className="contact-card__detail"><strong>Phone and WhatsApp</strong><a href="https://wa.me/2348047000587">+234 804 700 0587</a></div>
            <div className="contact-card__detail"><strong>Instagram</strong><a href="https://www.instagram.com/acresxmanna/" rel="noreferrer" target="_blank">@acresxmanna</a></div>
            <div className="contact-card__detail"><strong>Factory and headquarters</strong><span>The Goodland, Off Apapa Road, Moniya, Ibadan, Oyo State, Nigeria</span></div>
            <div className="contact-card__detail"><strong>Nigerian office</strong><span>House 3, 10 Adeniyi Coker, Dideolu Estate, Victoria Island, Lagos</span></div>
            <div className="contact-card__detail"><strong>UK warehouse and office</strong><span>Orland House, Unit 1, Mead Lane, Hertford SG13 7AT, United Kingdom</span></div>
          </aside>
        </div>
      </section>
      <section className="section section--soft">
        <div className="section-inner">
          <SectionTitle eyebrow="Frequently asked questions" title="A few quick answers." align="center" />
          <FAQSection entries={faqs} />
        </div>
      </section>
    </main>
  );
}
