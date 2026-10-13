import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Link } from "@/i18n/routing";
import { PageHero } from "@/components/site/PageHero";

const types = ["contact", "supplier", "distributor", "business", "product"] as const;

export function generateStaticParams() {
  return types.map((type) => ({ type }));
}

export const metadata: Metadata = {
  title: "Thank you | AcresxManna",
  robots: { index: false, follow: false },
};

export default async function ThankYouPage({ params }: { params: Promise<{ type: string }> }) {
  const { type } = await params;
  if (!types.includes(type as (typeof types)[number])) notFound();

  return (
    <main id="main">
      <PageHero eyebrow="Message received" title="Yay, message received!" intro="Thanks for reaching out to AcresxManna. A member of our team will read your message and reply." compact />
      <section className="section section--paper">
        <div className="section-inner text-center">
          <p>In the meantime, browse our products, read about our story or get in touch directly.</p>
          <div className="button-row" style={{ justifyContent: "center" }}>
            <Link className="button button--purple" href="/products">Explore our products</Link>
            <Link className="button button--outline" href="/about">Read our story</Link>
            <Link className="button button--outline" href="/contact">Contact our team</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
