"use client";

import { useTranslations } from "next-intl";
import { motion, useReducedMotion } from "framer-motion";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { PatternFramedImage } from "@/components/ui/PatternFrame";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { DecorativeBlobSet } from "@/components/ui/DecorativeBlobs";
import { FloatingPatternMotif, HandDrawnPlantLine } from "@/components/ui/DecorativePatterns";
import { TypingText } from "@/components/animations/TypingText";
import { ParallaxSection } from "@/components/animations/ParallaxSection";
import { LazyImage } from "@/components/ui/LazyImage";
import { cn } from "@/lib/utils";

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
        "inline-block align-bottom mr-[0.14em]",
        isItalic ? "italic text-yellow-400 font-serif" : "text-white",
      )}
      dangerouslySetInnerHTML={{ __html: word }}
    />
  );
}

export function Hero() {
  const t = useTranslations("sections.hero");
  const reduce = useReducedMotion();

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden bg-purple-700 pb-16 pt-24 text-white sm:pt-28"
    >
      {/* Hero backdrop blobs + watermark */}
      <div aria-hidden className="absolute inset-0">
        <div className="absolute inset-0 bg-woven opacity-[0.09]" />
      </div>
      <DecorativeBlobSet className="opacity-45" />
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
        className="pointer-events-none absolute -top-32 right-0 aspect-square w-[55%] opacity-70 blur-3xl"
        style={{
          background:
            "radial-gradient(ellipse at center, rgb(var(--mango-400)/0.35), rgb(255 255 255/0.12) 60%, transparent 70%)",
        }}
      />

      <SectionContainer size="wide" className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* LEFT - Copy */}
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

            <h1 className="font-display text-balance text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-[4.25rem] font-black leading-[0.98] tracking-tight !text-white">
              <span className="block mb-2 sm:mb-3">
                <WordReveal word={t("word0")} i={0} />
                <WordReveal word={t("word1")} i={1} isItalic />
              </span>
              <span className="block mb-2 sm:mb-3">
                <WordReveal word={t("word2")} i={2} />
                <WordReveal word={t("word3")} i={3} isItalic />
              </span>
              <span className="block">
                <WordReveal word={t("word4")} i={4} />
                <WordReveal word={t("word5")} i={5} isItalic />
              </span>
            </h1>

            <motion.p
              initial={reduce ? {} : { opacity: 0, y: 30, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.7, delay: 0.55 }}
              className="mt-6 max-w-xl font-sans text-body-lg leading-relaxed text-white/90 sm:mt-8"
            >
              <TypingText
                text={t("typingText")}
                delay={0.8}
                speed={20}
              />
            </motion.p>

            <motion.div
              initial={reduce ? {} : { opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.75 }}
              className="mt-8 flex flex-wrap gap-4 sm:gap-5"
            >
              <Button
                href="/products"
                variant="primary"
                size="lg"
                className="!bg-yellow-400 !text-purple-700 !shadow-none hover:brightness-95 font-bold"
              >
                {t("exploreProducts")}
              </Button>
              <Button
                href="/contact"
                variant="secondary"
                size="lg"
                className="!border-white !text-white hover:!bg-white/10"
              >
                {t("letsTalk")}
              </Button>
            </motion.div>

          </div>

          {/* RIGHT - Seamlessly Blended Hero Visual Showcase */}
          <motion.div
            initial={reduce ? {} : { opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-5 relative flex items-center justify-center pt-4 lg:pt-0"
          >
            {/* Multi-layered Backlight Aura */}
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-6 sm:-inset-10 rounded-full bg-gradient-to-tr from-yellow-400/35 via-purple-500/30 to-purple-800/40 blur-3xl opacity-85"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-8 -right-4 h-56 w-56 rounded-full bg-yellow-400/30 blur-2xl"
            />

            {/* Main Visual Composition Container */}
            <div className="relative w-full max-w-[440px] lg:max-w-[480px]">
              
              {/* Outer soft glowing frame with backdrop blur */}
              <div className="relative overflow-hidden rounded-3xl border border-white/20 bg-gradient-to-b from-white/15 to-purple-950/40 p-2.5 sm:p-3 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)] backdrop-blur-md">
                
                {/* Main Photo with gradient fade into the purple theme */}
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-purple-950/60 shadow-inner">
                  <LazyImage
                    src="/images/processing/palm-oil-bottling-wide.jpg"
                    alt={t("heroImageAlt")}
                    fill
                    priority
                    sizes="(max-width: 640px) 100vw, 480px"
                    className="object-cover object-center transition-transform duration-700 hover:scale-105"
                    wrapperClassName="h-full w-full"
                  />
                  
                  {/* Subtle edge-blend gradient overlay melting into background */}
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-purple-950/90 via-purple-900/30 to-transparent"
                  />
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 bg-gradient-to-r from-purple-950/40 via-transparent to-purple-950/20"
                  />

                  {/* Top-left Tag: 100% African Harvest */}
                  <div className="absolute top-3 left-3 flex items-center gap-2 rounded-full bg-purple-950/85 px-3 py-1.5 text-xs font-semibold text-yellow-300 backdrop-blur-md border border-yellow-400/30 shadow-lg">
                    <span className="inline-block h-2 w-2 rounded-full bg-yellow-400 animate-pulse" />
                    {t("tagAfricanHarvest")}
                  </div>

                  {/* Top-right Tag: Export Ready */}
                  <div className="absolute top-3 right-3 flex items-center gap-1.5 rounded-full bg-yellow-400 px-3 py-1 text-xs font-bold text-purple-950 shadow-lg">
                    <span>{t("tagExportReady")}</span>
                  </div>

                  {/* Bottom overlay info bar */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center text-xs text-white/95">
                    <span className="font-semibold drop-shadow tracking-wide bg-purple-950/70 backdrop-blur-sm px-2.5 py-1 rounded-lg border border-white/10">
                      {t("tagValueAdded")}
                    </span>
                  </div>
                </div>

                {/* Sub-bar below photo inside frame */}
                <div className="mt-3 flex items-center justify-between px-2 py-0.5 text-xs font-medium text-purple-200">
                  <span className="flex items-center gap-1.5 text-white/90">
                    <span className="text-yellow-400 font-bold">●</span> {t("tagFarmToGlobal")}
                  </span>
                  <span className="text-yellow-400 font-semibold tracking-wide pr-14 sm:pr-16">{t("tagQuality")}</span>
                </div>
              </div>

              {/* Dynamic Floating Brand Mascot Accent */}
              <motion.div
                initial={reduce ? {} : { scale: 0.8, y: 15, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.55 }}
                className="absolute -bottom-6 -right-5 sm:-bottom-8 sm:-right-8 w-28 sm:w-36 pointer-events-none select-none drop-shadow-[0_20px_35px_rgba(0,0,0,0.65)]"
              >
                <img
                  src="/brand/acres-manna-mascot-character-yellow.svg"
                  alt={t("mascotAlt")}
                  loading="lazy"
                  className="w-full h-auto filter drop-shadow-[0_4px_16px_rgba(253,220,66,0.4)]"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </SectionContainer>

      {/* Grain overlay */}
      <div aria-hidden className="pointer-events-none absolute inset-0 grain opacity-25 mix-blend-screen" />
    </section>
  );
}
