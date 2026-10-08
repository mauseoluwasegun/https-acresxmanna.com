"use client";

import { SectionContainer } from "@/components/layout/SectionContainer";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { PatternFramedImage } from "@/components/ui/PatternFrame";
import { MotionSection, ScrollReveal } from "@/components/animations/MotionSection";
import { PatternDivider } from "@/components/animations/PatternDivider";
import { HandDrawnIcon } from "@/components/ui/HandDrawnIcon";
import { DecorativeBlob } from "@/components/ui/DecorativeBlobs";
import {
  PatternWatermark,
  HandDrawnPlantLine,
  FloatingPatternMotif,
} from "@/components/ui/DecorativePatterns";
import { ScrollTypingText } from "@/components/animations/TypingText";
import { cn } from "@/lib/utils";

const THREE_PILLARS = [
  {
    eyebrow: "GROUND TRUTH",
    headline: "Rooted in <em>Origin</em>.",
    description:
      "Every story starts with a seed — ours in the hands of African smallholder farmers and cooperatives who tend the land. We build for them first.",
    iconName: "farmer" as const,
    iconColor: "terracotta" as const,
    pattern: "kente" as const,
    corner: "terracotta" as const,
  },
  {
    eyebrow: "CRAFT",
    headline: "Built on <em>Transformation</em>.",
    description:
      "We combine ancestral craft with modern food manufacturing. Hygiene, traceability and flavor engineering meet age-old knowledge inside our facilities.",
    iconName: "factory" as const,
    iconColor: "forest" as const,
    pattern: "mudcloth" as const,
    corner: "forest" as const,
  },
  {
    eyebrow: "GLOBAL VOICE",
    headline: "Driven by <em>Ambition</em>.",
    description:
      "Africa's food on every major shelf in the world. We build brands, channels and partnerships that carry the continent's story farther each year.",
    iconName: "globe" as const,
    iconColor: "indigo" as const,
    pattern: "bogolan" as const,
    corner: "indigo" as const,
  },
];

const ORIGIN_IMG_1 = encodeURIComponent(
  "Sunrise over African savanna golden maize farm fields, a female farmer walking between rows carrying woven harvest basket, cinematic warm golden hour light, editorial documentary photography",
);
const ORIGIN_IMG_2 = encodeURIComponent(
  "A close-up group of African women farmers cooperatives sorting bright orange mangoes into hand-woven baskets, smiling community agriculture scene",
);
const PULLQUOTE_IMG = encodeURIComponent(
  "Mature African agricultural leader woman smiling standing under big acacia tree with sunset light, leadership portrait editorial photography",
);

import { useTranslations } from "next-intl";

export function AboutSection() {
  const t = useTranslations("about");

  const pillars = [
    {
      eyebrow: t("pillar1Eyebrow"),
      headline: t.raw("pillar1Headline"),
      description: t("pillar1Description"),
      iconName: "farmer" as const,
      iconColor: "terracotta" as const,
      pattern: "kente" as const,
      corner: "terracotta" as const,
    },
    {
      eyebrow: t("pillar2Eyebrow"),
      headline: t.raw("pillar2Headline"),
      description: t("pillar2Description"),
      iconName: "factory" as const,
      iconColor: "forest" as const,
      pattern: "mudcloth" as const,
      corner: "forest" as const,
    },
    {
      eyebrow: t("pillar3Eyebrow"),
      headline: t.raw("pillar3Headline"),
      description: t("pillar3Description"),
      iconName: "globe" as const,
      iconColor: "indigo" as const,
      pattern: "bogolan" as const,
      corner: "indigo" as const,
    },
  ];

  return (
    <>
      <PatternDivider
        pattern="bogolan"
        thickness="medium"
        eyebrow={t("dividerEyebrow")}
        eyebrowAccent="forest"
      />

      <MotionSection
        id="about"
        className="relative py-24 sm:py-32 bg-cream-50 overflow-hidden"
        delay={0.05}
      >
        <PatternWatermark pattern="woven" opacity={0.05} />
        <DecorativeBlob color="forest" size="lg" opacity={0.08} top="-8%" right="-4%" />
        <DecorativeBlob color="terracotta" size="md" opacity={0.12} bottom="-4%" left="10%" />

        {/* ========== ORIGIN STORY — editorial split ========== */}
        <SectionContainer size="wide" className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* LEFT 45% — imagery */}
            <ScrollReveal
              as="div"
              className="lg:col-span-5 relative"
              noBlur
              delay={0.05}
            >
              <div className="relative">
                <PatternFramedImage
                  src="/images/farm-origin.jpg"
                  alt="Sunrise over African maize farm fields with a farmer walking the rows"
                  width={700}
                  height={900}
                  thickness="bold"
                  pattern="kente"
                  cornerAccent="terracotta"
                  className="aspect-[4/5]"
                />
                <div className="absolute -bottom-8 -right-8 w-[55%] z-20">
                  <PatternFramedImage
                    src="/images/processing-facility.jpg"
                    alt="Clean food manufacturing line"
                    width={420}
                    height={420}
                    thickness="medium"
                    pattern="ankara"
                    cornerAccent="mango"
                    className="aspect-square"
                  />
                </div>
                <HandDrawnPlantLine
                  variant="rice"
                  size={140}
                  className="absolute -left-10 bottom-8 text-forest-700/50"
                />
              </div>
            </ScrollReveal>

            {/* RIGHT 55% — copy */}
            <ScrollReveal
              as="div"
              className="lg:col-span-7 lg:pl-6"
              noBlur
              delay={0.15}
            >
              <Eyebrow accent="forest" className="mb-5">
                {t("originEyebrow")}
              </Eyebrow>
              <h2 className="font-display font-black text-display-1 leading-[0.98] text-balance">
                <ScrollTypingText text={t("originHeadlineL1")} speed={25} />
                <br />
                <ScrollTypingText text={t("originHeadlineL2")} speed={25} delay={0.1} />
                <br />
                <ScrollTypingText text={t("originHeadlineL3")} speed={25} delay={0.2} />
              </h2>

              <p className="mt-8 font-sans text-body-lg text-charcoal-700 leading-relaxed max-w-2xl">
                {t("originParagraph1")}
              </p>

              <p className="mt-5 font-sans text-body-md text-charcoal-700 leading-relaxed max-w-2xl">
                {t("originParagraph2")}
              </p>

              {/* Meta row */}
              <div className="mt-10 grid grid-cols-3 gap-6 max-w-lg">
                <div>
                  <p className="font-display font-black text-display-2 leading-none text-terracotta-600">
                    {t("foundedYear")}
                  </p>
                  <p className="mt-1.5 font-mono text-micro uppercase tracking-[0.12em] text-charcoal-700/80">
                    {t("foundedLabel")}
                  </p>
                </div>
                <div className="w-px h-14 bg-charcoal-900/10 self-center" />
                <div>
                  <p className="font-display font-black text-display-2 leading-none text-terracotta-600">
                    {t("countriesCount")}
                  </p>
                  <p className="mt-1.5 font-mono text-micro uppercase tracking-[0.12em] text-charcoal-700/80">
                    {t("countriesLabel")}
                  </p>
                </div>
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <Button href="/about" variant="dark" size="md">
                  {t("readStory")}
                </Button>
                <Button href="/impact" variant="secondary" size="md">
                  {t("seeImpact")}
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </SectionContainer>

        {/* ========== THREE PILLARS ========== */}
        <SectionContainer size="wide" className="mt-24 sm:mt-36 relative">
          <div className="text-center mb-14 sm:mb-18 max-w-3xl mx-auto">
            <Eyebrow accent="terracotta" className="mb-5">
              {t("pillarsEyebrow")}
            </Eyebrow>
            <h2 
              className="font-display font-black text-display-1 leading-[0.98] text-balance"
              dangerouslySetInnerHTML={{ __html: t.raw("pillarsHeadline") }}
            />
            <p className="mt-6 font-sans text-body-lg text-charcoal-700">
              {t("pillarsDescription")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((p, i) => (
              <ScrollReveal
                as="article"
                key={p.eyebrow}
                delay={0.05 * i}
                className={cn(
                  "relative group h-full rounded-soft-lg p-7 sm:p-8 bg-white/70 border border-cream-100 shadow-card hover:shadow-card-hover transition-all duration-500 hover:-translate-y-1.5",
                  i === 1 && "md:mt-10 md:-mb-10",
                )}
              >
                <FloatingPatternMotif
                  pattern={p.pattern}
                  size={120}
                  rotate={-18 + i * 14}
                  top="2%"
                  right="2%"
                  className="opacity-80"
                />
                <div className="relative">
                  <div className="flex items-start justify-between mb-6">
                    <HandDrawnIcon
                      name={p.iconName}
                      size={46}
                      color={p.iconColor}
                      withFrame
                    />
                  </div>

                  <Eyebrow accent={p.corner} className="mb-3">
                    {p.eyebrow}
                  </Eyebrow>

                  <h3
                    className="font-display font-black text-heading-1 leading-tight mb-4"
                    dangerouslySetInnerHTML={{ __html: p.headline }}
                  />

                  <p className="font-sans text-body-md text-charcoal-700 leading-relaxed">
                    {p.description}
                  </p>

                  <div className="mt-7 h-[2px] bg-woven opacity-50 group-hover:opacity-100 transition-opacity" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </SectionContainer>

        {/* ========== PULL QUOTE ========== */}
        <SectionContainer size="wide" className="mt-28 sm:mt-40 relative">
          <div className="relative rounded-soft-lg overflow-hidden bg-charcoal-900 text-cream-100 py-16 sm:py-20 lg:py-24">
            <div
              aria-hidden
              className="absolute inset-0 bg-ankara pattern-watermark opacity-[0.1]"
            />
            <DecorativeBlob
              color="mango"
              size="lg"
              opacity={0.25}
              top="-30%"
              right="-8%"
            />
            <DecorativeBlob
              color="terracotta"
              size="md"
              opacity={0.3}
              bottom="-10%"
              left="-4%"
            />

            <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 items-center px-7 sm:px-12 lg:px-16">
              <div className="lg:col-span-5">
                <PatternFramedImage
                  src="/images/farm-origin.jpg"
                  alt="Agricultural leadership portrait"
                  width={600}
                  height={760}
                  thickness="medium"
                  pattern="kente"
                  cornerAccent="mango"
                  className="aspect-[4/5] w-full"
                />
              </div>

              <blockquote className="lg:col-span-7 relative">
                <div
                  aria-hidden
                  className="absolute -top-6 -left-2 font-display font-black text-[9rem] leading-none text-mango-500/20 select-none"
                >
                  “
                </div>
                <p className="relative font-display font-black italic text-[clamp(1.8rem,4.5vw,3.4rem)] leading-[1.05] tracking-tight max-w-3xl">
                  {t("pullquote")}
                </p>
                <footer className="mt-8 sm:mt-10">
                  <p className="font-display font-bold text-body-md tracking-wide uppercase text-mango-400">
                    {t("pullquoteName")}
                  </p>
                  <p className="mt-1 font-sans text-cream-50/80 text-body-md">
                    {t("pullquoteTitle")}
                  </p>
                </footer>
              </blockquote>
            </div>
          </div>
        </SectionContainer>
      </MotionSection>
    </>
  );
}
