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
    eyebrow: "RAW MATERIALS",
    headline: "Hand-picked <em>African harvests.</em>",
    description:
      "Seasoned graders and QC officers receive grains, cocoa, shea nuts, fruits and indigenous crops directly from our cooperatives and farming partners. Traceable from farm-gate.",
    accent: "terracotta" as const,
    iconName: "wheat" as const,
    pattern: "kente" as const,
    img: "/images/farm-origin.jpg",
  },
  {
    eyebrow: "PROCESSING",
    headline: "Modern, <em>hygienic, precise.</em>",
    description:
      "Cleaning, sorting, milling, blending, roasting, pressing. Automated and semi-automated lines run under HACCP / ISO-aligned protocols, overseen by trained production teams.",
    accent: "forest" as const,
    iconName: "factory" as const,
    pattern: "mudcloth" as const,
    img: "/images/processing-facility.jpg",
  },
  {
    eyebrow: "PACKAGING",
    headline: "Built for the <em>shelf.</em>",
    description:
      "Shelf-stable, premium, culturally resonant packaging. Retort, aseptic and sustainable options. Every carton tells a small piece of the African story.",
    accent: "indigo" as const,
    iconName: "box" as const,
    pattern: "bogolan" as const,
    img: "/images/hero-bg.jpg",
  },
  {
    eyebrow: "FINISHED FOOD",
    headline: "Great food, <em>finally.</em>",
    description:
      "Rigorous final QA, shelf-life testing, and organoleptic sign-off before pallets leave our warehouses — bound for shelves, kitchens and dinner tables across the globe.",
    accent: "mango" as const,
    iconName: "plate" as const,
    pattern: "ankara" as const,
    img: "/images/product-jollof.jpg",
  },
] as const;

const TRIPTYCH = [
  {
    eyebrow: "QUALITY",
    headline: "Rigorous QA, every batch.",
    img: "/images/processing-facility.jpg",
    pattern: "kente" as const,
    corner: "terracotta" as const,
  },
  {
    eyebrow: "CERTIFICATIONS",
    headline: "HACCP · ISO · FDA-aligned.",
    img: "/images/hero-bg.jpg",
    pattern: "mudcloth" as const,
    corner: "forest" as const,
  },
  {
    eyebrow: "SUSTAINABILITY",
    headline: "Low waste, high purpose.",
    img: "/images/farm-origin.jpg",
    pattern: "bogolan" as const,
    corner: "indigo" as const,
  },
] as const;

const CAPABILITIES = [
  "Contract manufacturing",
  "Private label & white-label",
  "Co-packing & formulation",
  "HACCP / GMP / QA labs on-site",
  "Dry milling & blending",
  "Cold chain & beverage lines",
  "Cocoa & shea butter presses",
  "Export-ready palletization",
];

export function ManufacturingSection() {
  return (
    <>
      <PatternDivider
        pattern="woven"
        thickness="bold"
        eyebrow="— MANUFACTURING"
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
                How The Sausage Gets Made
              </Eyebrow>
              <h2 className="font-display font-black text-display-1 leading-[0.98] text-balance max-w-4xl">
                <ScrollTypingText text="From raw harvest to the " speed={25} />
                <em className="not-italic text-terracotta-600"><ScrollTypingText text="finished plate" speed={25} delay={0.1} /></em>
                <ScrollTypingText text=" — end-to-end, in our hands." speed={25} delay={0.2} />
              </h2>
            </div>
            <div className="lg:col-span-5 lg:pr-6">
              <p className="font-sans text-body-lg text-charcoal-700 leading-relaxed max-w-lg">
                The work of transformation happens in four stages. Scroll
                through our process, capabilities, and the standards that
                bind them together.
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
                      src={`https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=${s.img}&image_size=landscape_4_3`}
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
                    src={`https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=${t.img}&image_size=landscape_4_3`}
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
