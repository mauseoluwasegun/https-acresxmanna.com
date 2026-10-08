"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { PatternFramedImage } from "@/components/ui/PatternFrame";
import { MotionSection, ScrollReveal } from "@/components/animations/MotionSection";
import { PatternDivider } from "@/components/animations/PatternDivider";
import { HandDrawnIcon, type IconName } from "@/components/ui/HandDrawnIcon";
import { DecorativeBlob, DecorativeBlobSet } from "@/components/ui/DecorativeBlobs";
import { PatternWatermark, HandDrawnPlantLine } from "@/components/ui/DecorativePatterns";
import { ScrollTypingText } from "@/components/animations/TypingText";
import { IMPACT_METRICS } from "@/lib/constants";
import { cn } from "@/lib/utils";

/* Progress ring — SVG with animated strokeDashoffset */
function ImpactRing({
  progress,
  color,
  size = 120,
  stroke = 10,
  children,
}: {
  progress: number;
  color: "terracotta" | "mango" | "forest" | "indigo" | "earth";
  size?: number;
  stroke?: number;
  children: React.ReactNode;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-120px" });
  const display = reduce ? progress : inView ? progress : 0;

  const strokeColor =
    color === "terracotta"
      ? "rgb(var(--terracotta-500))"
      : color === "forest"
        ? "rgb(var(--forest-600))"
        : color === "mango"
          ? "rgb(var(--mango-500))"
          : color === "indigo"
            ? "rgb(var(--indigo-700))"
            : "rgb(var(--earth-600))";

  const radius = (size - stroke) / 2;
  const circ = 2 * Math.PI * radius;

  return (
    <div
      ref={ref}
      className="relative inline-flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      <svg width={size} height={size} className="absolute inset-0 -rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="rgb(var(--charcoal-900) / 0.07)"
          strokeWidth={stroke}
          fill="none"
        />
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={strokeColor}
          strokeWidth={stroke}
          strokeLinecap="round"
          fill="none"
          strokeDasharray={circ}
          initial={{ strokeDashoffset: circ }}
          animate={{ strokeDashoffset: circ - display * circ }}
          transition={
            reduce
              ? { duration: 0.3 }
              : { duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.05 }
          }
        />
      </svg>
      <div className="relative z-10 text-center">{children}</div>
    </div>
  );
}

/* Counter — animates digits when metric enters viewport */
function ImpactCounter({ value, className }: { value: string; className?: string }) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-120px" });
  const [display, setDisplay] = useState(reduce ? value : "0");

  useEffect(() => {
    if (!inView || reduce) {
      setDisplay(value);
      return;
    }
    /* Extract number portion (strip non-digits/decimals for tweening) */
    const numMatch = value.match(/([\d,.]+)/);
    if (!numMatch) {
      setDisplay(value);
      return;
    }
    const raw = numMatch[1].replace(/,/g, "");
    const end = Number(raw);
    if (!Number.isFinite(end) || end <= 0) {
      setDisplay(value);
      return;
    }
    const suffix = value.replace(numMatch[1], "");
    const isDecimal = raw.includes(".");
    const start = performance.now();
    const dur = 1400;
    let raf = 0;
    const step = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      const now = end * eased;
      const formatted = isDecimal
        ? now.toFixed(1).replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        : Math.round(now).toLocaleString("en-US");
      setDisplay(formatted + suffix);
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, reduce]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}

const STORIES = [
  {
    eyebrow: "FARMER STORY · NORTHERN REGION",
    name: "Ama K. — Maize Farmer",
    text: "“Since joining Acres X Manna, I received training on improved maize varieties, a guaranteed market, and a 32% higher price at harvest.” — [TBC real quote]",
    accent: "terracotta" as const,
    pattern: "kente" as const,
    img: encodeURIComponent(
      "Portrait of a smiling Ghanaian woman farmer in maize field holding a corn cob, warm golden hour, authentic documentary photography",
    ),
  },
  {
    eyebrow: "COMMUNITY · COCOA COOPERATIVE",
    name: "Osei & Sons Cooperative",
    text: "“Premium cocoa prices year on year, plus a school scholarship fund for our 240 farmer families.” — [TBC real quote]",
    accent: "forest" as const,
    pattern: "mudcloth" as const,
    img: encodeURIComponent(
      "Group of African cocoa farmers in a cooperative drying cocoa beans outdoors, smiling, community agriculture documentary photography",
    ),
  },
  {
    eyebrow: "TEAM STORY · PRODUCTION LINE",
    name: "Nana A. — Production Lead",
    text: "“I started as a temp on the packaging line. Today I lead a team of 14 in the milling department.” — [TBC real quote]",
    accent: "indigo" as const,
    pattern: "bogolan" as const,
    img: encodeURIComponent(
      "Confident African female production line supervisor in white food safety coat standing in modern factory, leadership portrait",
    ),
  },
] as const;

const metricColors: Record<string, "terracotta" | "mango" | "forest" | "indigo" | "earth"> = {
  farmers: "terracotta",
  communities: "forest",
  products: "mango",
  markets: "indigo",
  jobs: "terracotta",
  capacity: "earth",
};

import { useTranslations } from "next-intl";

export function ImpactSection() {
  const t = useTranslations("impact");

  const stories = [
    {
      eyebrow: t("story1Eyebrow"),
      name: t("story1Name"),
      text: t("story1Text"),
      accent: "terracotta" as const,
      pattern: "kente" as const,
      img: "/images/farm-origin.jpg",
    },
    {
      eyebrow: t("story2Eyebrow"),
      name: t("story2Name"),
      text: t("story2Text"),
      accent: "forest" as const,
      pattern: "mudcloth" as const,
      img: "/images/hero-bg.jpg",
    },
    {
      eyebrow: t("story3Eyebrow"),
      name: t("story3Name"),
      text: t("story3Text"),
      accent: "indigo" as const,
      pattern: "bogolan" as const,
      img: "/images/processing-facility.jpg",
    },
  ];

  const metrics = [
    { label: t("metrics.farmersSupported"), value: t("metricsValues.farmers"), progress: 0.92, icon: "farmers" },
    { label: t("metrics.communitiesReached"), value: t("metricsValues.communities"), progress: 0.85, icon: "communities" },
    { label: t("metrics.productsDeveloped"), value: t("metricsValues.products"), progress: 0.78, icon: "products" },
    { label: t("metrics.marketsServed"), value: t("metricsValues.markets"), progress: 0.65, icon: "markets" },
    { label: t("metrics.jobsCreated"), value: t("metricsValues.jobs"), progress: 0.88, icon: "jobs" },
    { label: t("metrics.productionCapacity"), value: t("metricsValues.capacity"), progress: 0.75, icon: "capacity" },
  ];

  return (
    <>
      <PatternDivider
        pattern="kente"
        thickness="bold"
        eyebrow={t("dividerEyebrow")}
        eyebrowAccent="terracotta"
      />

      <MotionSection
        id="impact"
        className="relative py-24 sm:py-28 bg-cream-100 overflow-hidden"
      >
        <PatternWatermark pattern="mudcloth" opacity={0.055} />
        <DecorativeBlobSet className="opacity-60" />
        <HandDrawnPlantLine
          variant="cocoa"
          size={130}
          className="absolute top-16 left-4 text-forest-700/40"
        />

        <SectionContainer size="wide" className="relative">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <Eyebrow accent="terracotta" className="mb-5">
              {t("eyebrow")}
            </Eyebrow>
            <h2 className="font-display font-black text-display-1 leading-[0.98] text-balance">
              <ScrollTypingText text={t("headlineP1")} speed={25} />
              <em className="not-italic text-terracotta-600"><ScrollTypingText text={t("headlineFarmers")} speed={25} delay={0.1} /></em>
              <ScrollTypingText text=", " speed={25} delay={0.15} />
              <em className="not-italic text-terracotta-600"><ScrollTypingText text={t("headlineFamilies")} speed={25} delay={0.2} /></em>
              <ScrollTypingText text={t("headlineAnd")} speed={25} delay={0.25} />
              <em className="not-italic text-terracotta-600"><ScrollTypingText text={t("headlineFutures")} speed={25} delay={0.3} /></em>
            </h2>
            <p className="mt-6 font-sans text-body-lg text-charcoal-700 max-w-2xl mx-auto">
              {t("description")}
            </p>
          </div>

          {/* 6 metrics grid with progress rings + counters */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-7 sm:gap-10 mb-18 sm:mb-24">
            {metrics.map((m, i) => (
              <ScrollReveal
                as="div"
                key={m.label}
                delay={0.06 * i}
                className="flex flex-col items-center text-center"
              >
                <ImpactRing
                  progress={m.progress}
                  color={metricColors[m.icon] ?? "terracotta"}
                  size={128}
                  stroke={10}
                >
                  <ImpactCounter
                    value={m.value}
                    className="font-display font-black text-display-2 leading-none text-charcoal-900"
                  />
                </ImpactRing>
                <div className="mt-5 inline-flex">
                  <HandDrawnIcon
                    name={m.icon as IconName}
                    size={26}
                    color={metricColors[m.icon] ?? "terracotta"}
                    withFrame={false}
                  />
                </div>
                <p className="mt-2 font-mono text-label uppercase tracking-[0.14em] text-charcoal-700 leading-tight">
                  {m.label}
                </p>
              </ScrollReveal>
            ))}
          </div>

          {/* Stories triptych */}
          <div>
            <div className="text-center mb-12 max-w-2xl mx-auto">
              <Eyebrow accent="forest" className="mb-5">
                {t("storiesEyebrow")}
              </Eyebrow>
              <h3 
                className="font-display font-black text-heading-hero text-balance"
                dangerouslySetInnerHTML={{ __html: t.raw("storiesHeadline") }}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-7 lg:gap-10">
              {stories.map((s, i) => (
                <ScrollReveal
                  as="article"
                  key={s.name}
                  delay={0.05 * i}
                  className="group rounded-soft-lg overflow-hidden bg-white/60 border border-cream-100 shadow-card hover:shadow-card-hover transition-all duration-500 hover:-translate-y-1"
                >
                  <div className="relative">
                    <PatternFramedImage
                      src={s.img}
                      alt={`${s.name} story portrait`}
                      width={640}
                      height={820}
                      thickness={i === 1 ? "bold" : "medium"}
                      pattern={s.pattern}
                      cornerAccent={s.accent}
                      className="aspect-[4/5] w-full"
                    />
                  </div>
                  <div className="p-6 sm:p-7">
                    <Eyebrow accent={s.accent} className="mb-3">
                      {s.eyebrow}
                    </Eyebrow>
                    <h4 className="font-display font-black text-heading-2 leading-tight mb-3">
                      {s.name}
                    </h4>
                    <blockquote className="font-sans text-body-md text-charcoal-700 leading-relaxed">
                      {s.text}
                    </blockquote>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Impact report banner */}
          <div className="mt-20 sm:mt-28 relative rounded-soft-lg overflow-hidden p-8 sm:p-12 bg-charcoal-900 text-cream-100">
            <DecorativeBlob color="mango" size="md" opacity={0.3} top="-30%" right="-5%" />
            <DecorativeBlob color="terracotta" size="lg" opacity={0.22} bottom="-20%" left="-6%" />
            <div
              aria-hidden
              className="absolute inset-0 bg-ankara pattern-watermark opacity-[0.08]"
            />
            <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8">
                <p className="font-mono text-label uppercase tracking-[0.16em] text-mango-400 mb-4">
                  {t("reportEyebrow")}
                </p>
                <h4 
                  className="font-display font-black text-heading-hero leading-[1.02] max-w-3xl"
                  dangerouslySetInnerHTML={{ __html: t.raw("reportHeadline") }}
                />
              </div>
              <div className="lg:col-span-4 flex lg:justify-end">
                <div className="flex flex-wrap gap-3.5">
                  <Button
                    href="/impact"
                    variant="dark"
                    size="lg"
                    ariaLabel="Download Impact Report"
                  >
                    {t("downloadPdf")}
                  </Button>
                  <Button
                    href="/impact"
                    variant="ghost"
                    size="lg"
                    ariaLabel="Read Impact Stories"
                  >
                    {t("viewAllStories")}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </SectionContainer>
      </MotionSection>
    </>
  );
}
