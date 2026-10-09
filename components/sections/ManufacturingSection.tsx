"use client";

import { SectionContainer } from "@/components/layout/SectionContainer";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { PatternFramedImage } from "@/components/ui/PatternFrame";
import { MotionSection, ScrollReveal } from "@/components/animations/MotionSection";
import { PatternDivider } from "@/components/animations/PatternDivider";
import { HandDrawnIcon } from "@/components/ui/HandDrawnIcon";
import { DecorativeBlob, DecorativeBlobSet } from "@/components/ui/DecorativeBlobs";
import { PatternWatermark, FloatingPatternMotif } from "@/components/ui/DecorativePatterns";
import { ScrollTypingText } from "@/components/animations/TypingText";
import { cn } from "@/lib/utils";

const MFG_STAGES = [
  {
    eyebrow: "HARVEST & TERROIR",
    headline: "Hand-picked by <em>generational custodians.</em>",
    description:
      "Sourced directly from outgrower cooperatives across the Ashanti cocoa belt, Sahelian shea parklands, and Volta grain plains. Graded at the farm gate, honoring traditional harvesting rhythms with digital batch traceability.",
    accent: "terracotta" as const,
    iconName: "wheat" as const,
    pattern: "kente" as const,
    img: "/images/farm-origin.jpg",
  },
  {
    eyebrow: "TRANSFORMATION",
    headline: "Ancestral craft, <em>modern food science.</em>",
    description:
      "Sun-curing under plantain leaves, stone-milling, and precision cold extraction. Our Tema manufacturing lines marry age-old agro-wisdom with strict HACCP and ISO 22000 protocols.",
    accent: "forest" as const,
    iconName: "factory" as const,
    pattern: "mudcloth" as const,
    img: "/images/processing-facility.jpg",
  },
  {
    eyebrow: "CULINARY PRESERVATION",
    headline: "Engineered for <em>global fine dining.</em>",
    description:
      "Sustainable barrier packaging and retort technologies that lock in delicate volatile aromas, nutrients, and terroir identity — free from artificial additives or preservatives.",
    accent: "indigo" as const,
    iconName: "box" as const,
    pattern: "bogolan" as const,
    img: "/images/hero-bg.jpg",
  },
  {
    eyebrow: "AFRICAN SOVEREIGNTY",
    headline: "Finished food, <em>celebrated worldwide.</em>",
    description:
      "Rigorous sensory panels, nutritional certification, and organoleptic sign-off before pallets depart Accra — proudly elevating African culinary heritage across 24+ global markets.",
    accent: "mango" as const,
    iconName: "plate" as const,
    pattern: "ankara" as const,
    img: "/images/product-jollof.jpg",
  },
] as const;

const TRIPTYCH = [
  {
    eyebrow: "TERROIR INTEGRITY",
    headline: "100% Value Added on African Soil.",
    img: "/images/processing-facility.jpg",
    pattern: "kente" as const,
    corner: "terracotta" as const,
  },
  {
    eyebrow: "WORLD-CLASS STANDARDS",
    headline: "HACCP · ISO 22000 · FDA-Aligned.",
    img: "/images/hero-bg.jpg",
    pattern: "mudcloth" as const,
    corner: "forest" as const,
  },
  {
    eyebrow: "COMMUNAL PROSPERITY",
    headline: "Fair Off-Take & Living Income Premiums.",
    img: "/images/farm-origin.jpg",
    pattern: "bogolan" as const,
    corner: "indigo" as const,
  },
] as const;

const CAPABILITIES = [
  "Single-origin cocoa & liquor pressing",
  "Sahelian cold-pressed virgin shea butter",
  "Heritage ancient grain milling (fonio, sorghum, millet)",
  "HACCP & ISO 22000 certified cleanrooms",
  "Retort pouching & shelf-stable African ready meals",
  "Private label & bespoke formulation for luxury hospitality",
  "Solar-assisted dehydration & botanical teas",
  "Direct AfCFTA, EU & North America export logistics",
];

export function ManufacturingSection() {
  return (
    <>
      <PatternDivider
        pattern="woven"
        thickness="bold"
        eyebrow="— MANUFACTURING & HERITAGE"
        eyebrowAccent="mango"
      />

      <MotionSection
        id="manufacturing"
        className="relative py-24 sm:py-32 bg-cream-50 overflow-hidden"
      >
        <PatternWatermark pattern="ankara" opacity={0.05} />
        <DecorativeBlobSet className="opacity-70" />
        <FloatingPatternMotif
          pattern="mudcloth"
          size={180}
          rotate={22}
          top="4%"
          right="2%"
        />

        <SectionContainer size="wide" className="relative">
          {/* Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end mb-16 sm:mb-20">
            <div className="lg:col-span-7">
              <Eyebrow accent="forest" className="mb-5">
                The Science of African Transformation
              </Eyebrow>
              <h2 className="font-display font-black text-display-1 leading-[0.98] text-balance max-w-4xl">
                <ScrollTypingText text="From ancestral harvest to the " speed={25} />
                <em className="not-italic text-terracotta-600"><ScrollTypingText text="world's tables" speed={25} delay={0.1} /></em>
                <ScrollTypingText text=" — sovereign, pristine, uncompromising." speed={25} delay={0.2} />
              </h2>
            </div>
            <div className="lg:col-span-5 lg:pr-6">
              <p className="font-sans text-body-lg text-charcoal-700 leading-relaxed max-w-lg">
                We believe Africa should never just export raw bulk ingredients. We transform our continent&apos;s richness in-country — with generational reverence, laboratory precision, and culinary artistry.
              </p>
            </div>
          </div>

          {/* ========== 4-stage timeline ========== */}
          <div className="relative">
            {/* Horizontal connector line behind desktop stages */}
            <div
              aria-hidden
              className="hidden md:block absolute left-0 right-0 top-[28%] h-[4px] bg-woven opacity-80 rounded-full"
            />
            <div
              aria-hidden
              className="hidden md:block absolute left-0 right-0 top-[28%] h-[4px] bg-gradient-to-r from-terracotta-500 via-mango-500 to-forest-600 rounded-full w-0 animate-[timeline_2.2s_ease-out_forwards]"
            />

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-10">
              {MFG_STAGES.map((s, i) => (
                <ScrollReveal
                  as="article"
                  key={s.iconName}
                  delay={0.06 * i}
                  className="group relative"
                >
                  {/* Stage icon */}
                  <div className="relative mb-6 flex items-center justify-center">
                    <div
                      aria-hidden
                      className={cn(
                        "absolute w-24 h-24 rounded-full blur-2xl opacity-40 animate-pulse-slow",
                        s.accent === "terracotta"
                          ? "bg-terracotta-500"
                          : s.accent === "forest"
                            ? "bg-forest-600"
                            : s.accent === "mango"
                              ? "bg-mango-500"
                              : "bg-indigo-700",
                      )}
                    />
                    <div className="relative">
                      <HandDrawnIcon
                        name={s.iconName}
                        size={44}
                        color={s.accent}
                        withFrame
                      />
                    </div>
                  </div>

                  <div className="mb-5">
                    <PatternFramedImage
                      src={s.img}
                      alt={s.headline}
                      width={640}
                      height={500}
                      thickness="medium"
                      pattern={s.pattern}
                      cornerAccent={s.accent}
                      className="aspect-[4/3] w-full"
                    />
                  </div>

                  <Eyebrow accent={s.accent} className="mb-2.5">
                    {s.eyebrow}
                  </Eyebrow>
                  <h3
                    className="font-display font-black text-heading-1 leading-[1.02] mb-3"
                    dangerouslySetInnerHTML={{ __html: s.headline }}
                  />
                  <p className="font-sans text-body-md text-charcoal-700 leading-relaxed">
                    {s.description}
                  </p>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* ========== TRIPTYCH ========== */}
          <div className="mt-28 sm:mt-36">
            <div className="text-center mb-14 max-w-3xl mx-auto">
              <Eyebrow accent="indigo" className="mb-5">
                The Standards
              </Eyebrow>
              <h3 className="font-display font-black text-heading-hero text-balance">
                Three promises we bake <em>into every line.</em>
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-7 lg:gap-10">
              {TRIPTYCH.map((t, i) => (
                <ScrollReveal
                  as="div"
                  key={t.headline}
                  delay={0.06 * i}
                  className="group"
                >
                  <PatternFramedImage
                    src={t.img}
                    alt={t.headline}
                    width={700}
                    height={900}
                    thickness={i === 1 ? "bold" : "medium"}
                    pattern={t.pattern}
                    cornerAccent={t.corner}
                    className={cn(
                      "aspect-[4/5] w-full",
                      i !== 1 ? "md:translate-y-10" : "",
                    )}
                  />
                  <div className="mt-6">
                    <Eyebrow accent={t.corner} className="mb-2">
                      {t.eyebrow}
                    </Eyebrow>
                    <h4 className="font-display font-black text-heading-1 leading-tight">
                      {t.headline}
                    </h4>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* ========== Capabilities grid ========== */}
          <div className="mt-24 sm:mt-32 relative rounded-soft-lg overflow-hidden border border-cream-100 bg-white/60 p-8 sm:p-10 lg:p-12 shadow-card">
            <PatternWatermark pattern="woven" opacity={0.14} />
            <DecorativeBlob color="terracotta" size="md" opacity={0.12} top="-20%" right="-6%" />
            <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-5">
                <Eyebrow accent="terracotta" className="mb-4">
                  Manufacturing Capabilities
                </Eyebrow>
                <h4 className="font-display font-black text-heading-hero leading-[1.02] max-w-md">
                  Turnkey food production, <em>ready to scale.</em>
                </h4>
                <p className="mt-5 font-sans text-body-md text-charcoal-700 leading-relaxed max-w-md">
                  From co-packing a single SKU to standing up full private
                  label lines — our plants are built to flex with your
                  roadmap.
                </p>
                <div className="mt-7 flex flex-wrap gap-3.5">
                  <Button href="/what-we-do" variant="primary" size="md">
                    Deep Dive Process
                  </Button>
                  <Button href="/contact?type=partner" variant="secondary" size="md">
                    Request a Quote
                  </Button>
                </div>
              </div>
              <div className="lg:col-span-7">
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                  {CAPABILITIES.map((line) => (
                    <li
                      key={line}
                      className="flex items-start gap-3 font-sans text-body-md text-charcoal-900 py-2 border-b border-cream-100 last:border-b-0"
                    >
                      <span
                        aria-hidden
                        className="mt-2 shrink-0 w-2.5 h-2.5 rounded-full bg-gradient-to-br from-terracotta-500 to-mango-500"
                      />
                      {line}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </SectionContainer>
      </MotionSection>
    </>
  );
}
