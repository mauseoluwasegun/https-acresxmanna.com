"use client";

import Image from "next/image";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { MotionSection, ScrollReveal } from "@/components/animations/MotionSection";
import { PatternDivider } from "@/components/animations/PatternDivider";
import { HandDrawnIcon } from "@/components/ui/HandDrawnIcon";
import { DecorativeBlob } from "@/components/ui/DecorativeBlobs";
import { PatternWatermark, FloatingPatternMotif } from "@/components/ui/DecorativePatterns";
import { ScrollTypingText } from "@/components/animations/TypingText";
import { IconMapPin } from "@/components/ui/icons";
import { cn } from "@/lib/utils";

/* ========= Map pins (percent positioning within map container) ========= */
const HOTSPOTS = [
  {
    id: "ghana",
    country: "Ghana",
    region: "West Africa",
    flag: "🇬🇭",
    position: { left: "40%", top: "62%" },
    tag: "HQ & Primary Processing",
    tint: "terracotta" as const,
    size: "lg",
  },
  {
    id: "nigeria",
    country: "Nigeria",
    region: "West Africa",
    flag: "🇳🇬",
    position: { left: "45%", top: "56%" },
    tag: "Largest Market",
    tint: "mango" as const,
    size: "lg",
  },
  {
    id: "ivory-coast",
    country: "Côte d'Ivoire",
    region: "West Africa",
    flag: "🇨🇮",
    position: { left: "37%", top: "58%" },
    tag: "Cocoa Belt",
    tint: "forest" as const,
    size: "md",
  },
  {
    id: "kenya",
    country: "Kenya",
    region: "East Africa",
    flag: "🇰🇪",
    position: { left: "62%", top: "68%" },
    tag: "East Africa Hub",
    tint: "terracotta" as const,
    size: "md",
  },
  {
    id: "sa",
    country: "South Africa",
    region: "Southern Africa",
    flag: "🇿🇦",
    position: { left: "58%", top: "86%" },
    tag: "Regional Distribution",
    tint: "indigo" as const,
    size: "md",
  },
  {
    id: "uk",
    country: "United Kingdom",
    region: "Europe",
    flag: "🇬🇧",
    position: { left: "47%", top: "30%" },
    tag: "Exports · EU Market",
    tint: "indigo" as const,
    size: "sm",
  },
  {
    id: "us",
    country: "United States",
    region: "North America",
    flag: "🇺🇸",
    position: { left: "18%", top: "38%" },
    tag: "North America Entry",
    tint: "terracotta" as const,
    size: "sm",
  },
  {
    id: "uae",
    country: "UAE",
    region: "Middle East",
    flag: "🇦🇪",
    position: { left: "64%", top: "46%" },
    tag: "GCC Distribution",
    tint: "mango" as const,
    size: "sm",
  },
];

const tintClasses = {
  terracotta: {
    dot: "bg-terracotta-500",
    ring: "ring-terracotta-500",
    bg: "bg-terracotta-500/10",
    text: "text-terracotta-700",
  },
  mango: {
    dot: "bg-mango-500",
    ring: "ring-mango-500",
    bg: "bg-mango-500/10",
    text: "text-mango-600",
  },
  forest: {
    dot: "bg-forest-600",
    ring: "ring-forest-600",
    bg: "bg-forest-600/10",
    text: "text-forest-700",
  },
  indigo: {
    dot: "bg-indigo-700",
    ring: "ring-indigo-700",
    bg: "bg-indigo-700/10",
    text: "text-indigo-700",
  },
};

import { useTranslations } from "next-intl";

export function GlobalAmbitionSection() {
  const t = useTranslations("global");

  const exportStats = [
    {
      eyebrow: t("exportStats.currentEyebrow"),
      value: t("exportStats.currentValue"),
      label: t("exportStats.currentLabel"),
      accent: "terracotta" as const,
      icon: "globe" as const,
    },
    {
      eyebrow: t("exportStats.targetEyebrow"),
      value: t("exportStats.targetValue"),
      label: t("exportStats.targetLabel"),
      accent: "indigo" as const,
      icon: "markets" as const,
    },
    {
      eyebrow: t("exportStats.capacityEyebrow"),
      value: t("exportStats.capacityValue"),
      label: t("exportStats.capacityLabel"),
      accent: "mango" as const,
      icon: "capacity" as const,
    },
    {
      eyebrow: t("exportStats.exportsEyebrow"),
      value: t("exportStats.exportsValue"),
      label: t("exportStats.exportsLabel"),
      accent: "forest" as const,
      icon: "products" as const,
    },
  ];

  return (
    <>
      <PatternDivider
        pattern="bogolan"
        thickness="medium"
        eyebrow="— FROM LOCAL TO GLOBAL"
        eyebrowAccent="indigo"
      />

      <MotionSection
        id="global"
        className="relative py-24 sm:py-28 bg-cream-50 overflow-hidden"
      >
        <PatternWatermark pattern="bogolan" opacity={0.06} />
        <FloatingPatternMotif
          pattern="kente"
          size={200}
          rotate={-18}
          bottom="4%"
          left="2%"
          className="opacity-80"
        />
        <DecorativeBlob color="indigo" size="md" opacity={0.1} top="-8%" right="-4%" />
        <DecorativeBlob color="mango" size="sm" opacity={0.18} bottom="14%" right="16%" />

        <SectionContainer size="wide" className="relative">
          {/* Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end mb-14 sm:mb-18">
            <div className="lg:col-span-7">
              <Eyebrow accent="indigo" className="mb-5">
                {t("eyebrow")}
              </Eyebrow>
              <h2 className="font-display font-black text-display-1 leading-[0.98] text-balance max-w-4xl">
                <ScrollTypingText text={t("headlineP1")} speed={25} />
                <em className="not-italic text-terracotta-600"><ScrollTypingText text={t("headlineEmphasis")} speed={25} delay={0.1} /></em>
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="font-sans text-body-lg text-charcoal-700 leading-relaxed max-w-xl">
                {t("description")}
              </p>
            </div>
          </div>

          {/* ========= WORLD MAP ========= */}
          <div className="relative rounded-soft-lg overflow-hidden border border-cream-100 bg-white/50 shadow-card">
            <div
              aria-hidden
              className="absolute inset-0 bg-kente pattern-watermark opacity-[0.05]"
            />
            <div className="relative grid grid-cols-1 lg:grid-cols-12">
              {/* Left panel: map */}
              <div className="lg:col-span-8 p-6 sm:p-10">
                <div className="relative w-full aspect-[2/1.15] rounded-soft overflow-hidden bg-cream-50/80 border border-charcoal-900/5">
                  {/* World map background image */}
                  <Image
                    src="/images/world-map.jpg"
                    alt="World map showing Acres X Manna global presence"
                    fill
                    className="object-cover object-center opacity-90"
                    sizes="(max-width: 1024px) 100vw, 66vw"
                    priority
                  />

                  {/* Connection lines overlay */}
                  <svg
                    viewBox="0 0 1000 575"
                    className="absolute inset-0 w-full h-full"
                    aria-hidden
                  >
                    {/* Dashed lines from Ghana hub to export pins */}
                    <g stroke="#c4623a" strokeWidth="2.2" strokeDasharray="4 6" fill="none" strokeLinecap="round" opacity="0.55">
                      <path d="M 400 355 Q 450 230 470 175" /> {/* Ghana → UK */}
                      <path d="M 400 355 Q 280 260 180 220" /> {/* Ghana → US */}
                      <path d="M 400 355 Q 510 300 640 260" /> {/* Ghana → UAE */}
                      <path d="M 400 355 Q 470 370 620 395" /> {/* Ghana → Kenya */}
                      <path d="M 400 355 Q 460 460 580 490" /> {/* Ghana → SA */}
                    </g>
                  </svg>

                  {/* Pins */}
                  {HOTSPOTS.map((h) => {
                    const t = tintClasses[h.tint];
                    const sizeCls =
                      h.size === "lg" ? "w-5 h-5" : h.size === "md" ? "w-4 h-4" : "w-3.5 h-3.5";
                    const ring =
                      h.size === "lg"
                        ? "before:w-14 before:h-14"
                        : h.size === "md"
                          ? "before:w-11 before:h-11"
                          : "before:w-9 before:h-9";
                    return (
                      <button
                        type="button"
                        key={h.id}
                        className={cn(
                          "absolute -translate-x-1/2 -translate-y-full group focus:outline-none",
                        )}
                        style={{ left: h.position.left, top: h.position.top }}
                        aria-label={`${h.country} — ${h.tag}`}
                      >
                        <IconMapPin
                          className={cn("mb-0.5 drop-shadow", h.size === "lg" ? "w-7 h-7" : h.size === "md" ? "w-6 h-6" : "w-5 h-5", t.text)}
                        />
                        <span
                          className={cn(
                            "relative block rounded-full",
                            sizeCls,
                            t.dot,
                            "before:content-[''] before:absolute before:inset-0 before:m-auto before:rounded-full before:ring-2 before:animate-ping",
                            ring,
                            t.ring,
                          )}
                        />
                        {/* Tooltip */}
                        <span
                          className={cn(
                            "absolute bottom-full left-1/2 -translate-x-1/2 mb-3 whitespace-nowrap rounded-soft px-3 py-2 shadow-card border border-cream-100 bg-cream-50 font-sans text-xs text-charcoal-900 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none",
                          )}
                        >
                          <span className="inline-flex items-center gap-1.5 font-bold">
                            <span>{h.flag}</span>
                            <span className={t.text}>{h.country}</span>
                          </span>
                          <span className="block font-mono text-[10px] uppercase tracking-[0.14em] text-charcoal-700/80 mt-0.5">
                            {h.tag}
                          </span>
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Legend */}
                <div className="mt-5 flex flex-wrap gap-3">
                  {(["HQ & Primary Processing", "Largest Market", "Cocoa Belt", "East Africa Hub", "Regional Distribution", "Export Markets"] as const).map((l) => (
                    <span
                      key={l}
                      className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 bg-cream-100/70 border border-charcoal-900/5 font-sans text-xs text-charcoal-700"
                    >
                      <span className="w-2 h-2 rounded-full bg-terracotta-500" />
                      {l}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right panel: Africa focus + headline */}
              <div className="lg:col-span-4 relative border-t lg:border-t-0 lg:border-l border-cream-100 bg-cream-50/80 p-6 sm:p-8 flex flex-col">
                <Eyebrow accent="terracotta" className="mb-3">
                  {t("hqEyebrow")}
                </Eyebrow>
                <h4
                  className="font-display font-black text-heading-hero leading-[1.02]"
                  dangerouslySetInnerHTML={{ __html: t.raw("hqHeadline") }}
                />
                <p className="mt-4 font-sans text-body-md text-charcoal-700 leading-relaxed">
                  {t("hqDescription")}
                </p>

                <ul className="mt-7 space-y-4">
                  {[
                    { f: "🇬🇭", c: t("hqGhana") },
                    { f: "🇳🇬", c: t("hqNigeria") },
                    { f: "🇨🇮", c: t("hqCoteDivoire") },
                    { f: "🇰🇪", c: t("hqKenya") },
                    { f: "🇿🇦", c: t("hqSouthAfrica") },
                  ].map((row) => (
                    <li
                      key={row.c}
                      className="flex items-start gap-3 font-sans text-body-md text-charcoal-900"
                    >
                      <span className="w-9 h-9 shrink-0 rounded-soft bg-woven flex items-center justify-center text-lg">
                        {row.f}
                      </span>
                      <span>{row.c}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-10">
                  <Button
                    href="/contact?type=distributor"
                    variant="dark"
                    size="md"
                    className="w-full"
                    ariaLabel={t("bringToRegion")}
                  >
                    {t("bringToRegion")}
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* 4 export stats tiles */}
          <div className="mt-14 sm:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {exportStats.map((s, i) => (
              <ScrollReveal
                as="div"
                key={s.label}
                delay={0.05 * i}
                className="group relative rounded-soft-lg border border-cream-100 bg-white/60 p-6 sm:p-7 shadow-card hover:shadow-card-hover transition-all duration-500 hover:-translate-y-1"
              >
                <FloatingPatternMotif
                  pattern="kente"
                  size={90}
                  rotate={-18}
                  top="-8%"
                  right="-6%"
                  className="opacity-70"
                />
                <div className="flex items-start justify-between mb-5">
                  <HandDrawnIcon
                    name={s.icon}
                    size={36}
                    color={s.accent}
                    withFrame
                  />
                  <span className="font-mono text-label uppercase tracking-[0.14em] text-charcoal-700/70">
                    {s.eyebrow}
                  </span>
                </div>
                <p
                  className={cn(
                    "font-display font-black text-display-2 leading-none mb-2.5",
                    s.accent === "terracotta"
                      ? "text-terracotta-600"
                      : s.accent === "forest"
                        ? "text-forest-700"
                        : s.accent === "mango"
                          ? "text-mango-500"
                          : "text-indigo-700",
                  )}
                >
                  {s.value}
                </p>
                <p className="font-sans text-body-md text-charcoal-700 leading-snug">
                  {s.label}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </SectionContainer>
      </MotionSection>
    </>
  );
}
