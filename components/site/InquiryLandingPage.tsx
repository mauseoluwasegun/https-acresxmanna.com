import { InquiryForm, type InquiryKind } from "./InquiryForm";
import { PageHero } from "./PageHero";
import type { ContentPage } from "@/lib/site-content";

export function InquiryLandingPage({ page, kind, path }: { page: ContentPage; kind: InquiryKind; path: string }) {
  return (
    <main id="main">
      <PageHero eyebrow={page.eyebrow} title={page.title} intro={page.intro} compact path={path} />
      <section className="section section--paper">
        <div className="section-inner inquiry-landing">
          <div className="inquiry-landing__details">
            {page.sections.map((section) => (
              <article className="content-card" key={section.title}>
                {section.label && <span className={`status-tag${section.label === "Coming soon" ? " status-tag--planned" : ""}`}>{section.label}</span>}
                <h2>{section.title}</h2>
                <p>{section.body}</p>
                {section.items && <ul className="check-list">{section.items.map((item) => <li key={item}>{item}</li>)}</ul>}
              </article>
            ))}
            <div className="contact-card">
              <h2>Need a hand?</h2>
              <p>Reach our team directly at <a href="mailto:info@acresxmanna.com">info@acresxmanna.com</a> or call <a href="tel:+2348047000587">+234 804 700 0587</a>.</p>
            </div>
          </div>
          <InquiryForm kind={kind} />
        </div>
      </section>
    </main>
  );
}
