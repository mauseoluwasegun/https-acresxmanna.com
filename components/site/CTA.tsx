import { Link } from "@/i18n/routing";

export function CTA({ title = "Let’s build Africa’s food future!", text = "We welcome conversations with investors, agricultural suppliers, distributors, retailers, food manufacturers and international buyers.", primaryLabel = "Let’s talk", primaryHref = "/contact", thirdLabel, thirdHref }: {
  title?: string;
  text?: string;
  primaryLabel?: string;
  primaryHref?: string;
  thirdLabel?: string;
  thirdHref?: string;
}) {
  return (
    <section className="cta-band">
      <div className="cta-band__bubble" aria-hidden="true" />
      <div className="cta-band__inner">
        <p className="eyebrow eyebrow--gold">Good things grow together</p>
        <h2>{title}</h2>
        <p>{text}</p>
        <div className="button-row">
          <Link className="button button--yellow" href={primaryHref}>{primaryLabel}</Link>
          <Link className="button button--light-outline" href="/products">Explore our products</Link>
          {thirdLabel && thirdHref && <Link className="button button--light-outline" href={thirdHref}>{thirdLabel}</Link>}
        </div>
      </div>
    </section>
  );
}
