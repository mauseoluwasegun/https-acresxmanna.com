import { Link } from "@/i18n/routing";
import type { ContentPage } from "@/lib/site-content";
import { CTA } from "./CTA";
import { PageHero } from "./PageHero";

export function ContentPageView({ page, path }: { page: ContentPage; path: string }) {
  const tileLayout = page.sections.length > 1 && page.sections.length <= 8;

  return (
    <main id="main">
      <PageHero eyebrow={page.eyebrow} title={page.title} intro={page.intro} path={path} />
      <section className="section section--paper">
        <div className={tileLayout ? "content-grid" : "content-stack"}>
          {page.sections.map((section, index) => (
            <article className="content-card card-lift" key={section.title}>
              {section.label && <span className={`status-tag${section.label === "Planned" || section.label === "Coming soon" ? " status-tag--planned" : ""}`}>{section.label}</span>}
              {tileLayout && <span className="number-badge" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>}
              <h2>{section.title}</h2>
              <p>{section.body}</p>
              {section.items && (
                <ul className="check-list">
                  {section.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              )}
            </article>
          ))}
        </div>
        {page.cta && (
          <div className="content-page__cta">
            <Link className="button button--purple" href={page.cta.href}>{page.cta.label}</Link>
          </div>
        )}
      </section>
      <CTA />
    </main>
  );
}
