import { BreadcrumbData } from "./StructuredData";

export function PageHero({ eyebrow, title, intro, compact = false, path, parent }: {
  eyebrow: string;
  title: string;
  intro: string;
  compact?: boolean;
  path?: string;
  parent?: { label: string; path: string };
}) {
  return (
    <section className={`page-hero${compact ? " page-hero--compact" : ""}`}>
      <div className="page-hero__bubble page-hero__bubble--one" />
      <div className="page-hero__bubble page-hero__bubble--two" />
      <div className="page-hero__content">
        {path && <BreadcrumbData label={eyebrow} path={path} parent={parent} />}
        <p className="eyebrow eyebrow--gold">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="page-hero__intro">{intro}</p>
      </div>
      <div className="page-hero__wave" aria-hidden="true" />
    </section>
  );
}
