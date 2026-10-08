"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { PatternFramedImage } from "@/components/ui/PatternFrame";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { DecorativeBlobSet } from "@/components/ui/DecorativeBlobs";
import { FloatingPatternMotif, HandDrawnPlantLine } from "@/components/ui/DecorativePatterns";
import { TypingText } from "@/components/animations/TypingText";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

const HEADLINE = [
  ["Africa&apos;s", "Richness."],
  ["Transformed Into"],
  ["Great Food."],
];

const HERO_MAIN_PROMPT = encodeURIComponent(
  "A vibrant African agricultural landscape collage with golden maize fields, fresh ripe mango fruits, a bowl of colorful prepared West African jollof rice and vegetables, a smiling African farmer woman holding a harvest basket, warm golden hour sunlight, cinematic editorial food photography composition",
);

const HERO_OFFSET_1 = encodeURIComponent(
  "Close-up of smiling African farmer hands holding freshly harvested orange mangoes and red tomatoes, warm sunlight, authentic documentary photography",
);

const HERO_OFFSET_2 = encodeURIComponent(
  "Elegant plated African jollof rice with fried plantains, colorful vegetables, restaurant food styling, warm terracotta ceramic dish, moody background",
);

const HERO_OFFSET_3 = encodeURIComponent(
  "Golden harvest pile of maize corn and grain sheaves in woven African baskets, warm golden hour sunset lighting, rustic agricultural photography",
);

function WordReveal({
  word,
  i,
  isItalic,
}: {
  word: string;
  i: number;
  isItalic?: boolean;
}) {
  const reduce = useReducedMotion();
  const variants = reduce
    ? {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { duration: 0.2, delay: 0.04 * i } },
      }
    : {
        hidden: { opacity: 0, y: 30, rotateX: -50, filter: "blur(6px)" },
        show: {
          opacity: 1,
          y: 0,
          rotateX: 0,
          filter: "blur(0px)",
          transition: {
            type: "spring",
            stiffness: 220,
            damping: 20,
            delay: 0.06 * i,
          } as any,
        },
      };
  return (
    <motion.span
      variants={variants}
      initial="hidden"
      animate="show"
      className={cn(
        "inline-block align-bottom mr-[0.12em]",
        isItalic && "italic text-terracotta-600",
      )}
      dangerouslySetInnerHTML={{ __html: word }}
    />
  );
}

export function Hero() {
  const reduce = useReducedMotion();
  const t = useTranslations("hero");

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] pt-28 sm:pt-32 pb-24 overflow-hidden"
    >
      {/* Hero backdrop blobs + watermark */}
      <div aria-hidden className="absolute inset-0 bg-cream-100">
        <div className="absolute inset-0 bg-woven opacity-[0.045]" />
      </div>
      <DecorativeBlobSet className="opacity-90" />
      <FloatingPatternMotif
        pattern="kente"
        size={260}
        top="8%"
        right="-2%"
        rotate={14}
        className="hidden sm:block"
      />
      <FloatingPatternMotif
        pattern="bogolan"
        size={170}
        bottom="12%"
        left="4%"
        rotate={-20}
        className="hidden md:block"
      />

      {/* Gradient glow over right side */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 right-0 w-[55%] aspect-square opacity-70 blur-3xl"
        style={{
          background:
            "radial-gradient(ellipse at center, rgb(var(--mango-400)/0.35), rgb(var(--terracotta-500)/0.12) 60%, transparent 70%)",
        }}
      />

      <SectionContainer size="wide" className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* LEFT 60% - Copy */}
          <div className="lg:col-span-7 relative z-10">
            <motion.div
              initial={reduce ? {} : { opacity: 0, y: 20, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="mb-6 sm:mb-8"
            >
              <Eyebrow accent="mango">
                {t("eyebrow")}
              </Eyebrow>
            </motion.div>

            <h1 className="font-display font-black text-display-hero leading-[0.92] text-charcoal-900 tracking-tight text-balance">
              <span className="block mb-2 sm:mb-3">
                <WordReveal word={t("headline.africa")} i={0} />
                <WordReveal word={t("headline.richness")} i={1} isItalic />
              </span>
              <span className="block mb-2 sm:mb-3">
                <WordReveal word={t("headline.transformed")} i={2} />
                <WordReveal word={t("headline.into")} i={3} />
              </span>
              <span className="block">
                <WordReveal word={t("headline.great")} i={4} />
                <WordReveal word={t("headline.food")} i={5} isItalic />
              </span>
            </h1>

            <motion.p
              initial={reduce ? {} : { opacity: 0, y: 30, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.7, delay: 0.55 }}
              className="mt-8 sm:mt-10 max-w-xl font-sans text-body-lg text-charcoal-700 leading-relaxed"
            >
              <TypingText
                text={t("subheadline")}
                delay={0.8}
                speed={20}
              />
            </motion.p>

            <motion.div
              initial={reduce ? {} : { opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.75 }}
              className="mt-10 flex flex-wrap gap-4 sm:gap-5"
            >
              <Button href="/products" variant="primary" size="lg">
                {t("cta.explore")}
              </Button>
              <Button
                href="/contact?type=partner"
                variant="secondary"
                size="lg"
              >
                {t("cta.partner")}
              </Button>
            </motion.div>

            {/* Trust row */}
            <motion.div
              initial={reduce ? {} : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1 }}
              className="mt-12 sm:mt-14 flex items-center gap-8 text-charcoal-700"
            >
              <div>
                <p className="font-display font-black text-display-2 leading-none text-terracotta-600">
                  {t("stats.farmersValue")}
                </p>
                <p className="mt-1.5 font-mono text-micro uppercase tracking-[0.12em] text-charcoal-700/80">
                  {t("stats.farmers")}
                </p>
              </div>
              <div className="w-px h-12 bg-charcoal-900/10" />
              <div>
                <p className="font-display font-black text-display-2 leading-none text-terracotta-600">
                  {t("stats.marketsValue")}
                </p>
                <p className="mt-1.5 font-mono text-micro uppercase tracking-[0.12em] text-charcoal-700/80">
                  {t("stats.markets")}
                </p>
              </div>
              <div className="w-px h-12 bg-charcoal-900/10 hidden sm:block" />
              <div className="hidden sm:block">
                <p className="font-display font-black text-display-2 leading-none text-terracotta-600">
                  {t("stats.capacityValue")}
                </p>
                <p className="mt-1.5 font-mono text-micro uppercase tracking-[0.12em] text-charcoal-700/80">
                  {t("stats.capacity")}
                </p>
              </div>
            </motion.div>
          </div>

          {/* RIGHT 40% - Collage */}
          <motion.div
            initial={reduce ? {} : { opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 24,
              delay: 0.3,
            } as any}
            className="lg:col-span-5 relative"
          >
            {/* Main thick-frame image */}
            <div className="relative z-10">
              <PatternFramedImage
                src="/images/hero-bg.jpg"
                alt="Vibrant African agricultural collage — farms, food, and a smiling farmer"
                width={900}
                height={760}
                thickness="bold"
                pattern="kente"
                cornerAccent="terracotta"
                priority
                className="aspect-[4/3]"
              />
            </div>

            {/* Overlap images */}
            <motion.div
              initial={reduce ? {} : { opacity: 0, y: 40, rotate: -8 }}
              animate={{ opacity: 1, y: 0, rotate: -4 }}
              transition={{
                type: "spring",
                stiffness: 160,
                damping: 22,
                delay: 0.75,
              } as any}
              className="absolute -top-6 -left-8 sm:-left-14 w-[46%] sm:w-[42%] z-20"
            >
              <PatternFramedImage
                src="/images/product-mango.jpg"
                alt="Farmer hands holding fresh mangoes and tomatoes"
                width={420}
                height={520}
                thickness="medium"
                pattern="ankara"
                cornerAccent="mango"
                className="aspect-[4/5]"
              />
            </motion.div>

            <motion.div
              initial={reduce ? {} : { opacity: 0, y: 40, rotate: 8 }}
              animate={{ opacity: 1, y: 0, rotate: 5 }}
              transition={{
                type: "spring",
                stiffness: 160,
                damping: 22,
                delay: 0.9,
              } as any}
              className="absolute -bottom-8 -right-6 sm:-right-12 w-[50%] sm:w-[46%] z-20"
            >
              <PatternFramedImage
                src="/images/product-jollof.jpg"
                alt="Plated jollof rice with fried plantains and vegetables"
                width={420}
                height={520}
                thickness="medium"
                pattern="mudcloth"
                cornerAccent="forest"
                className="aspect-[4/5]"
              />
            </motion.div>

            <motion.div
              initial={reduce ? {} : { opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 180,
                damping: 22,
                delay: 1.05,
              } as any}
              className="absolute top-[38%] -right-4 sm:-right-8 w-[28%] sm:w-[24%] z-30"
            >
              <PatternFramedImage
                src="/images/product-cocoa.jpg"
                alt="Golden cocoa and harvest products"
                width={260}
                height={260}
                thickness="thin"
                pattern="woven"
                cornerAccent="indigo"
                className="aspect-square"
              />
            </motion.div>

            {/* Hand-drawn plant line accent */}
            <motion.div
              initial={reduce ? {} : { opacity: 0, rotate: -30, y: 30 }}
              animate={{ opacity: 1, rotate: -14, y: 0 }}
              transition={{ duration: 1, delay: 1.15 }}
              className="absolute -bottom-20 -left-8 text-terracotta-600/70"
            >
              <HandDrawnPlantLine variant="maize" size={120} />
            </motion.div>

            <motion.div
              initial={reduce ? {} : { opacity: 0, rotate: 30, y: -20 }}
              animate={{ opacity: 1, rotate: 20, y: 0 }}
              transition={{ duration: 1, delay: 1.25 }}
              className="absolute -top-12 right-2 text-forest-700/60"
            >
              <HandDrawnPlantLine variant="cocoa" size={96} />
            </motion.div>
          </motion.div>
        </div>
      </SectionContainer>

      {/* Grain overlay */}
      <div aria-hidden className="pointer-events-none absolute inset-0 grain opacity-60 mix-blend-multiply" />
    </section>
  );
}
