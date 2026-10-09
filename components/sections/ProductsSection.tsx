"use client";

import { useState } from "react";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { PatternFramedImage } from "@/components/ui/PatternFrame";
import { MotionSection } from "@/components/animations/MotionSection";
import { PatternDivider } from "@/components/animations/PatternDivider";
import { HandDrawnIcon } from "@/components/ui/HandDrawnIcon";
import { DecorativeBlob, DecorativeBlobSet } from "@/components/ui/DecorativeBlobs";
import { PatternWatermark } from "@/components/ui/DecorativePatterns";
import { ScrollTypingText } from "@/components/animations/TypingText";
import { PRODUCTS, type Product } from "@/lib/products";
import { cn } from "@/lib/utils";

const CATEGORIES = [
  { id: "all", label: "All" },
  { id: "grains", label: "Grains & Flours" },
  { id: "cocoa", label: "Cocoa & Chocolate" },
  { id: "beverages", label: "Beverages" },
  { id: "shea", label: "Shea & Oils" },
  { id: "meals", label: "Meal Kits" },
  { id: "teas", label: "Teas & Infusions" },
] as const;

type CategoryId = (typeof CATEGORIES)[number]["id"];

function categorize(p: Product): CategoryId {
  const c = p.category.toLowerCase();
  if (c.includes("grain") || c.includes("flour")) return "grains";
  if (c.includes("cocoa") || c.includes("chocolate")) return "cocoa";
  if (c.includes("beverage") || c.includes("nectar")) return "beverages";
  if (c.includes("shea") || c.includes("oil")) return "shea";
  if (c.includes("meal") || c.includes("kit")) return "meals";
  if (c.includes("tea") || c.includes("infusion")) return "teas";
  return "all";
}

const accentToPattern: Record<Product["accentColor"], any> = {
  terracotta: "ankara",
  mango: "kente",
  forest: "mudcloth",
  indigo: "bogolan",
};

const accentToCorner: Record<Product["accentColor"], any> = {
  terracotta: "terracotta",
  mango: "mango",
  forest: "forest",
  indigo: "indigo",
};

import { useTranslations } from "next-intl";

export function ProductsSection() {
  const t = useTranslations("products");
  const [active, setActive] = useState<CategoryId>("all");

  const categories: { id: CategoryId; label: string }[] = [
    { id: "all", label: t("categories.all") },
    { id: "grains", label: t("categories.grains") },
    { id: "cocoa", label: t("categories.cocoa") },
    { id: "beverages", label: t("categories.beverages") },
    { id: "shea", label: t("categories.shea") },
    { id: "meals", label: t("categories.meals") },
    { id: "teas", label: t("categories.teas") },
  ];

  const visible =
    active === "all"
      ? PRODUCTS
      : PRODUCTS.filter((p) => categorize(p) === active);

  return (
    <>
      <PatternDivider
        pattern="ankara"
        thickness="medium"
        eyebrow={t("dividerEyebrow")}
        eyebrowAccent="mango"
      />

      <MotionSection
        id="products"
        className="relative py-24 sm:py-28 bg-cream-100 overflow-hidden"
      >
        <PatternWatermark pattern="kente" opacity={0.045} />
        <DecorativeBlobSet className="opacity-70" />

        <SectionContainer size="wide" className="relative">
          {/* ====== Header + tabs ====== */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end mb-14 sm:mb-16">
            <div className="lg:col-span-7">
              <Eyebrow accent="terracotta" className="mb-5">
                {t("eyebrow")}
              </Eyebrow>
              <h2 className="font-display font-black text-display-1 leading-[0.98] text-balance max-w-3xl">
                <ScrollTypingText text={t("headlineP1")} speed={25} />
                <em className="not-italic text-terracotta-600"><ScrollTypingText text={t("headlineEmphasis")} speed={25} delay={0.1} /></em>
                <ScrollTypingText text={t("headlineP2")} speed={25} delay={0.2} />
              </h2>
            </div>
            <div className="lg:col-span-5 flex lg:justify-end">
              <div className="flex flex-wrap gap-2.5 max-w-xl">
                {categories.map((cat) => {
                  const isActive = active === cat.id;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => setActive(cat.id)}
                      aria-pressed={isActive}
                      className={cn(
                        "group relative font-sans font-bold uppercase tracking-[0.08em] text-xs sm:text-[0.72rem] px-4 sm:px-5 py-2.5 rounded-full transition-all duration-300",
                        "border",
                        isActive
                          ? "bg-charcoal-900 text-cream-50 border-charcoal-900 shadow-card"
                          : "bg-cream-50/60 text-charcoal-700 border-charcoal-900/10 hover:text-charcoal-900 hover:border-terracotta-500/40",
                      )}
                    >
                      {cat.label}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* ====== Asymmetric poster grid ====== */}
          <div
            className="grid gap-6 sm:gap-8"
            style={{
              gridTemplateColumns: "repeat(12, minmax(0,1fr))",
              gridAutoRows: "minmax(140px, auto)",
            }}
          >
            {visible.slice(0, 4).map((p, i) => {
              const areas = [
                // A: big-left col 1-7 / rows 1-3
                "col-span-12 sm:col-span-7 row-span-3",
                // B: top-right col 8-12 / rows 1-2
                "col-span-12 sm:col-span-5 row-span-2",
                // C: bottom-right col 8-10 / row 3
                "col-span-7 sm:col-span-3 row-span-1",
                // D: tiny col 11-12 / row 3
                "col-span-5 sm:col-span-2 row-span-1",
              ];
              return (
                <article
                  key={p.id}
                  className={cn(
                    "group relative rounded-soft-lg overflow-hidden bg-white/60 border border-cream-100 shadow-card hover:shadow-card-hover transition-all duration-500 hover:-translate-y-1",
                    areas[i],
                  )}
                >
                  <div className="absolute top-4 left-4 z-20">
                    <HandDrawnIcon
                      name="products"
                      size={28}
                      color={p.accentColor}
                      withFrame={false}
                    />
                  </div>
                  {p.badge && (
                    <div className="absolute top-4 right-4 z-20 rounded-full px-3.5 py-1.5 bg-charcoal-900/90 backdrop-blur border border-mango-400/30 text-mango-300 font-mono text-micro uppercase tracking-[0.14em] shadow-sm">
                      {p.badge}
                    </div>
                  )}

                  <PatternFramedImage
                    src={p.imageUrl}
                    alt={p.name}
                    width={i === 0 ? 900 : 700}
                    height={i === 0 ? 900 : i === 1 ? 700 : i === 2 ? 500 : 400}
                    thickness={i === 0 ? "bold" : i === 1 ? "medium" : "thin"}
                    pattern={accentToPattern[p.accentColor]}
                    cornerAccent={accentToCorner[p.accentColor]}
                    className={cn(
                      "h-full min-h-full w-full",
                      i === 0 && "aspect-[4/5] sm:aspect-auto",
                      i === 1 && "aspect-[4/3] sm:aspect-auto",
                      i >= 2 && "aspect-square sm:aspect-auto",
                    )}
                  />

                  <div className="absolute inset-x-0 bottom-0 z-20 p-5 sm:p-7 bg-gradient-to-t from-charcoal-900/95 via-charcoal-900/60 to-transparent">
                    <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                      <p
                        className={cn(
                          "font-mono text-micro uppercase tracking-[0.16em]",
                          p.accentColor === "terracotta"
                            ? "text-mango-400"
                            : p.accentColor === "forest"
                              ? "text-forest-200"
                              : p.accentColor === "indigo"
                                ? "text-indigo-200"
                                : "text-mango-300",
                        )}
                      >
                        {p.category}
                      </p>
                      {p.origin && (
                        <>
                          <span className="text-cream-100/40 text-xs">·</span>
                          <span className="font-mono text-[11px] text-cream-100/80 tracking-wide">
                            📍 {p.origin}
                          </span>
                        </>
                      )}
                    </div>
                    <h3 className="font-display font-black text-[clamp(1.1rem,2.1vw,1.9rem)] leading-[1.05] text-cream-50">
                      {p.name}
                    </h3>
                    {i === 0 && (
                      <p
                        className="mt-2 text-cream-50/90 font-sans text-body-sm max-w-md leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: p.description }}
                      />
                    )}
                    {p.culturalNote && (
                      <p className="mt-2 font-sans italic text-xs text-mango-200/90 line-clamp-1">
                        &ldquo;{p.culturalNote}&rdquo;
                      </p>
                    )}
                  </div>
                </article>
              );
            })}
          </div>

          {visible.length === 0 && (
            <p className="text-center font-sans text-body-md text-charcoal-700 py-16">
              No products in this category yet — real catalog coming soon.
            </p>
          )}

          {/* ====== Shelf-style product carousel ====== */}
          <div className="mt-20 sm:mt-24">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 mb-10">
              <div>
                <Eyebrow accent="forest" className="mb-4">
                  Explore The Shelf
                </Eyebrow>
                <h3 className="font-display font-black text-heading-hero max-w-xl">
                  Swipe through <em>the full line</em>.
                </h3>
              </div>
              <div className="flex items-center gap-2.5">
                <a
                  href="#products"
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.getElementById("shelf-scroll");
                    el?.scrollBy({ left: -420, behavior: "smooth" });
                  }}
                  aria-label="Scroll products left"
                  className="w-11 h-11 rounded-full bg-cream-50 border border-charcoal-900/10 text-charcoal-900 flex items-center justify-center hover:bg-terracotta-500 hover:text-cream-50 hover:border-terracotta-500 transition-colors"
                >
                  <span className="font-display font-black">←</span>
                </a>
                <a
                  href="#products"
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.getElementById("shelf-scroll");
                    el?.scrollBy({ left: 420, behavior: "smooth" });
                  }}
                  aria-label="Scroll products right"
                  className="w-11 h-11 rounded-full bg-charcoal-900 text-cream-50 flex items-center justify-center hover:bg-terracotta-500 transition-colors"
                >
                  <span className="font-display font-black">→</span>
                </a>
              </div>
            </div>

            <div className="relative">
              {/* wooden shelf rail */}
              <div
                aria-hidden
                className="absolute bottom-4 left-0 right-0 h-3 rounded-full bg-woven opacity-50"
              />
              <div
                id="shelf-scroll"
                className="flex gap-6 sm:gap-8 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-10 -mx-4 px-4"
              >
                {PRODUCTS.map((p, i) => (
                  <article
                    key={`shelf-${p.id}`}
                    style={{ minWidth: "260px" }}
                    className="snap-start shrink-0 w-[68%] sm:w-72 relative group"
                  >
                    <PatternFramedImage
                      src={p.imageUrl}
                      alt={p.name}
                      width={460}
                      height={600}
                      thickness="medium"
                      pattern={accentToPattern[p.accentColor]}
                      cornerAccent={accentToCorner[p.accentColor]}
                      className={cn(
                        "aspect-[4/5]",
                        i === 2 || i === 5 ? "translate-y-4" : "",
                      )}
                    />
                    <p className="mt-4 font-mono text-micro uppercase tracking-[0.16em] text-terracotta-700">
                      {p.category}
                    </p>
                    <h4 className="mt-1 font-display font-black text-heading-2 leading-tight text-charcoal-900">
                      {p.name}
                    </h4>
                    <p
                      className="mt-1.5 font-sans text-body-sm text-charcoal-700 line-clamp-2"
                      dangerouslySetInnerHTML={{ __html: p.description }}
                    />
                  </article>
                ))}
              </div>
            </div>
          </div>

          {/* ====== Filters bar (placeholder, cosmetic) ====== */}
          <div className="mt-16 rounded-soft-lg border border-cream-100 bg-white/50 shadow-card p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center gap-3 text-charcoal-700">
              <div className="w-10 h-10 rounded-full bg-cream-100 flex items-center justify-center">
                <HandDrawnIcon name="markets" size={22} withFrame={false} color="terracotta" />
              </div>
              <p className="font-sans text-body-md">
                {t("showing")} <strong className="text-charcoal-900">{visible.length}</strong> {t("of")}{" "}
                <strong className="text-charcoal-900">{PRODUCTS.length}</strong>{" "}
                {t("placeholderProducts")}
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-mono text-label uppercase tracking-[0.12em] text-charcoal-700/80">
                {t("filters")} ·
              </span>
              <span className="px-3 py-1.5 rounded-full bg-cream-100 font-sans text-sm text-charcoal-700">
                {t("allOrigins")}
              </span>
              <span className="px-3 py-1.5 rounded-full bg-cream-100 font-sans text-sm text-charcoal-700">
                {t("allSizes")}
              </span>
              <span className="px-3 py-1.5 rounded-full bg-cream-100 font-sans text-sm text-charcoal-700">
                {t("priceAll")}
              </span>
              <Button
                href="/products"
                variant="text"
                size="md"
                className="!px-0 pl-2"
                ariaLabel="Open full catalog"
              >
                {t("fullCatalog")}
              </Button>
            </div>
          </div>

          <div className="mt-14 flex flex-wrap justify-center gap-4">
            <Button href="/products" variant="primary" size="lg">
              {t("viewAll")}
            </Button>
            <Button href="/contact?type=distributor" variant="secondary" size="lg">
              {t("becomeDistributor")}
            </Button>
          </div>
        </SectionContainer>
      </MotionSection>
    </>
  );
}
