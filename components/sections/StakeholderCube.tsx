"use client";

import { useState, useMemo, useEffect } from "react";
import { motion, useMotionValue, useTransform, useReducedMotion } from "framer-motion";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { HandDrawnIcon } from "@/components/ui/HandDrawnIcon";
import { MotionSection } from "@/components/animations/MotionSection";
import { PatternDivider } from "@/components/animations/PatternDivider";
import { PatternWatermark, HandDrawnPlantLine } from "@/components/ui/DecorativePatterns";
import { DecorativeBlob } from "@/components/ui/DecorativeBlobs";
import { STAKEHOLDERS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import type { IconName } from "@/components/ui/HandDrawnIcon";

const FACE_LABELS = [
  { id: "consumer", title: "Customers", accent: "terracotta" as const, icon: "cart" as IconName },
  { id: "farmer", title: "Farmers", accent: "forest" as const, icon: "farmer" as IconName },
  { id: "distributor", title: "Distribution", accent: "mango" as const, icon: "truck" as IconName },
  { id: "partner", title: "Partners", accent: "indigo" as const, icon: "handshake" as IconName },
  { id: "investor", title: "Investors", accent: "earth" as const, icon: "briefcase" as IconName },
  { id: "employee", title: "Team", accent: "terracotta" as const, icon: "user" as IconName },
];

/* Face index mapping (each cube face → stakeholder idx)
   0 front  → customer
   1 right  → farmer
   2 back   → distributor
   3 left   → partner
   4 top    → investor
   5 bottom → employee */
const FACE_ORDER = ["consumer", "farmer", "distributor", "partner", "investor", "employee"];

function accentColor(id: string) {
  return FACE_LABELS.find((f) => f.id === id)?.accent ?? "terracotta";
}

export function StakeholderCube() {
  const reduce = useReducedMotion();
  const [activeIdx, setActiveIdx] = useState(0);
  const active = STAKEHOLDERS[activeIdx];
  const activeId = FACE_ORDER[activeIdx];

  const rotYByFace = [0, -90, -180, 90, 0, 0];
  const rotXByFace = [0, 0, 0, 0, -90, 90];

  /* Drag-free: mouse-based idle parallax OR just snap to selected face */
  const mvX = useMotionValue(0);
  const mvY = useMotionValue(0);

  const idle = useMemo(() => ({ rY: rotYByFace[activeIdx], rX: rotXByFace[activeIdx] }), [activeIdx]);

  /* Tiny ambient parallax when hovering over cube area */
  const [hoverBox, setHoverBox] = useState<{ x: number; y: number } | null>(null);
  useEffect(() => {
    if (!hoverBox) {
      mvX.set(idle.rY);
      mvY.set(idle.rX);
      return;
    }
    const { x, y } = hoverBox;
    // add ±14° parallax
    mvX.set(idle.rY + (x - 0.5) * 28);
    mvY.set(idle.rX + (y - 0.5) * -20);
  }, [hoverBox, idle, mvX, mvY]);

  const finalY = useTransform(mvX, (v) => v);
  const finalX = useTransform(mvY, (v) => v);

  const onBoxPointerMove = (e: React.PointerEvent) => {
    const box = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const x = (e.clientX - box.left) / box.width;
    const y = (e.clientY - box.top) / box.height;
    setHoverBox({ x, y });
  };

  const CUBE_SIZE = 320; // px (desktop)
  const FACE = CUBE_SIZE;
  const HALF = CUBE_SIZE / 2;

  const faceTransforms = [
    `translateZ(${HALF}px)`,
    `rotateY(90deg) translateZ(${HALF}px)`,
    `rotateY(180deg) translateZ(${HALF}px)`,
    `rotateY(-90deg) translateZ(${HALF}px)`,
    `rotateX(90deg) translateZ(${HALF}px)`,
    `rotateX(-90deg) translateZ(${HALF}px)`,
  ];

  const accentText =
    accentColor(activeId) === "terracotta"
      ? "text-terracotta-600"
      : accentColor(activeId) === "forest"
        ? "text-forest-700"
        : accentColor(activeId) === "mango"
          ? "text-mango-500"
          : accentColor(activeId) === "indigo"
            ? "text-indigo-700"
            : "text-earth-600";

  const accentBg =
    accentColor(activeId) === "terracotta"
      ? "bg-terracotta-500"
      : accentColor(activeId) === "forest"
        ? "bg-forest-600"
        : accentColor(activeId) === "mango"
          ? "bg-mango-500"
          : accentColor(activeId) === "indigo"
            ? "bg-indigo-700"
            : "bg-earth-600";

  const ringBorder =
    accentColor(activeId) === "terracotta"
      ? "border-terracotta-500/60"
      : accentColor(activeId) === "forest"
        ? "border-forest-600/60"
        : accentColor(activeId) === "mango"
          ? "border-mango-500/60"
          : accentColor(activeId) === "indigo"
            ? "border-indigo-700/60"
            : "border-earth-600/60";

  return (
    <>
      <PatternDivider
        pattern="mudcloth"
        thickness="medium"
        eyebrow="— PICK YOUR ROLE"
        eyebrowAccent="terracotta"
      />

      <MotionSection
        id="stakeholders"
        className="relative py-24 sm:py-28 bg-cream-50 overflow-hidden"
      >
        <PatternWatermark pattern="mudcloth" opacity={0.05} />
        <DecorativeBlob color="mango" size="md" opacity={0.15} top="-6%" left="4%" />
        <DecorativeBlob color="indigo" size="lg" opacity={0.08} bottom="-12%" right="-6%" />

        <SectionContainer size="wide" className="relative">
          {/* ====== Intro ====== */}
          <div className="text-center mb-14 sm:mb-18 max-w-3xl mx-auto">
            <Eyebrow accent="indigo" className="mb-5">
              For Everyone We Serve
            </Eyebrow>
            <h2 className="font-display font-black text-display-1 leading-[0.98] text-balance">
              Six faces. <em>One ecosystem.</em>
            </h2>
            <p className="mt-6 font-sans text-body-lg text-charcoal-700">
              Acres X Manna brings together a whole value chain. Rotate the
              cube to explore a starting point that fits you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* ====== LEFT 55% — Cube ====== */}
            <div className="lg:col-span-7 order-2 lg:order-1">
              <div
                aria-hidden={false}
                role="img"
                aria-label={`Interactive stakeholder cube. Active face: ${active.label}.`}
                className="relative mx-auto w-full h-[480px] sm:h-[560px] flex items-center justify-center select-none touch-none"
                style={{ perspective: reduce ? "none" : "1600px" }}
                onPointerMove={reduce ? undefined : onBoxPointerMove}
                onPointerLeave={() => setHoverBox(null)}
              >
                {/* Outer glow rings */}
                <div
                  aria-hidden
                  className={cn(
                    "absolute w-[420px] h-[420px] rounded-full ring-2 opacity-60 animate-pulse-slow",
                    ringBorder,
                  )}
                />
                <div
                  aria-hidden
                  className={cn(
                    "absolute w-[520px] h-[520px] rounded-full border border-dashed opacity-40 animate-pulse-slow",
                    ringBorder,
                  )}
                  style={{ animationDelay: "0.8s" }}
                />

                {/* Cube itself */}
                <motion.div
                  style={{
                    width: CUBE_SIZE,
                    height: CUBE_SIZE,
                    position: "relative",
                    transformStyle: "preserve-3d",
                    rotateY: reduce ? idle.rY : finalY,
                    rotateX: reduce ? idle.rX : finalX,
                    transition: reduce ? "all 0.35s ease" : undefined,
                  }}
                >
                  {FACE_ORDER.map((faceId, i) => {
                    const stake = STAKEHOLDERS[i];
                    const accent = accentColor(faceId);
                    const isActive = i === activeIdx;

                    /* Per-face pattern + bg gradient */
                    const faceBg =
                      i === 0
                        ? "from-terracotta-50 via-cream-50 to-mango-50 bg-kente"
                        : i === 1
                          ? "from-forest-50 via-cream-50 to-terracotta-50 bg-mudcloth"
                          : i === 2
                            ? "from-mango-50 via-cream-50 to-terracotta-50 bg-ankara"
                            : i === 3
                              ? "from-indigo-50 via-cream-50 to-mango-50 bg-bogolan"
                              : i === 4
                                ? "from-terracotta-50 via-mango-50 to-cream-50 bg-woven"
                                : "from-forest-50 via-cream-50 to-indigo-50 bg-kente";

                    return (
                      <button
                        type="button"
                        key={faceId}
                        onClick={() => setActiveIdx(i)}
                        aria-label={`Show ${stake.label} panel`}
                        aria-pressed={isActive}
                        className={cn(
                          "absolute inset-0 flex flex-col items-center justify-center p-8 rounded-soft-lg",
                          "backface-visible -webkit-backface-visible",
                          "text-charcoal-900",
                          "transition-colors duration-500",
                          isActive
                            ? "ring-2 ring-offset-2 ring-offset-cream-50 ring-charcoal-900 shadow-[0_20px_60px_-20px_rgba(26,26,26,0.35)]"
                            : "ring-1 ring-charcoal-900/10 shadow-card",
                        )}
                        style={{
                          transform: faceTransforms[i],
                          width: FACE,
                          height: FACE,
                          backfaceVisibility: reduce ? "visible" : ("inherit" as any),
                        }}
                      >
                        {/* pattern watermark */}
                        <div
                          aria-hidden
                          className={cn(
                            "absolute inset-0 bg-gradient-to-br opacity-10",
                            faceBg,
                          )}
                        />
                        <div
                          aria-hidden
                          className="absolute inset-0 rounded-soft-lg"
                          style={{
                            background:
                              "linear-gradient(160deg, rgba(255,255,255,0.55), rgba(255,255,255,0.1))",
                          }}
                        />
                        {/* corner triangles */}
                        <span
                          aria-hidden
                          className={cn(
                            "absolute top-0 left-0 w-6 h-6",
                            accent === "terracotta"
                              ? "bg-terracotta-500"
                              : accent === "forest"
                                ? "bg-forest-600"
                                : accent === "mango"
                                  ? "bg-mango-500"
                                  : accent === "indigo"
                                    ? "bg-indigo-700"
                                    : "bg-earth-600",
                          )}
                          style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
                        />
                        <span
                          aria-hidden
                          className={cn(
                            "absolute bottom-0 right-0 w-6 h-6",
                            accent === "terracotta"
                              ? "bg-terracotta-500"
                              : accent === "forest"
                                ? "bg-forest-600"
                                : accent === "mango"
                                  ? "bg-mango-500"
                                  : accent === "indigo"
                                    ? "bg-indigo-700"
                                    : "bg-earth-600",
                          )}
                          style={{ clipPath: "polygon(100% 100%, 0 100%, 100% 0)" }}
                        />

                        <div className="relative text-center">
                          <div className="flex items-center justify-center mb-5">
                            <HandDrawnIcon
                              name={FACE_LABELS[i].icon}
                              size={54}
                              color={accent}
                              withFrame
                            />
                          </div>
                          <p
                            className={cn(
                              "font-mono text-label uppercase tracking-[0.16em] mb-2",
                              accentText,
                            )}
                          >
                            {stake.label}
                          </p>
                          <h3 className="font-display font-black text-heading-2 leading-[1.05] mb-2">
                            {FACE_LABELS[i].title}
                          </h3>
                          <p className="font-sans text-body-sm text-charcoal-700 leading-relaxed max-w-[220px]">
                            {stake.description.replace("[TBC] ", "")}
                          </p>
                          <p
                            aria-hidden
                            className="mt-4 inline-flex items-center font-mono text-micro uppercase tracking-[0.16em] text-charcoal-700/70"
                          >
                            <span className={cn("mr-2 w-5 h-[2px]", accentBg)} />
                            Face
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </motion.div>

                {/* Bottom decorative plant */}
                <HandDrawnPlantLine
                  variant="leaf"
                  size={120}
                  className="absolute left-2 bottom-0 text-terracotta-600/50"
                />
                <HandDrawnPlantLine
                  variant="shea"
                  size={108}
                  className="absolute right-4 bottom-6 text-forest-700/50"
                />
              </div>

              {/* 6 face pill selector */}
              <div className="mt-4 sm:mt-8 max-w-2xl mx-auto">
                <p className="text-center font-mono text-micro uppercase tracking-[0.16em] text-charcoal-700/70 mb-4">
                  · Click cube faces, or pick directly ·
                </p>
                <div className="flex flex-wrap justify-center gap-2.5">
                  {STAKEHOLDERS.map((s, i) => {
                    const a = accentColor(FACE_ORDER[i]);
                    const activeNow = i === activeIdx;
                    return (
                      <button
                        key={s.id}
                        onClick={() => setActiveIdx(i)}
                        aria-pressed={activeNow}
                        className={cn(
                          "group inline-flex items-center gap-2 px-4 py-2.5 rounded-full font-sans font-bold uppercase tracking-[0.08em] text-xs sm:text-[0.72rem] border transition-all duration-300",
                          activeNow
                            ? a === "terracotta"
                              ? "bg-terracotta-500 text-cream-50 border-terracotta-500 shadow-card"
                              : a === "forest"
                                ? "bg-forest-700 text-cream-50 border-forest-700 shadow-card"
                                : a === "mango"
                                  ? "bg-mango-500 text-charcoal-900 border-mango-500 shadow-card"
                                  : a === "indigo"
                                    ? "bg-indigo-700 text-cream-50 border-indigo-700 shadow-card"
                                    : "bg-earth-600 text-cream-50 border-earth-600 shadow-card"
                            : "bg-cream-50 text-charcoal-700 border-charcoal-900/10 hover:text-charcoal-900 hover:border-terracotta-500/40",
                        )}
                      >
                        <HandDrawnIcon
                          name={FACE_LABELS[i].icon}
                          size={18}
                          color={a}
                          withFrame={false}
                          className={activeNow ? "!text-current" : ""}
                        />
                        {s.label}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* ====== RIGHT 45% — Dynamic content panel ====== */}
            <motion.div
              key={active.id}
              initial={reduce ? {} : { opacity: 0, x: 30, filter: "blur(8px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              transition={{ type: "spring", stiffness: 200, damping: 22 } as any}
              className="lg:col-span-5 order-1 lg:order-2"
            >
              <div className="relative rounded-soft-lg bg-white/70 border border-cream-100 shadow-card overflow-hidden p-7 sm:p-8">
                <div
                  aria-hidden
                  className="absolute inset-0 bg-woven opacity-[0.08]"
                />
                <div
                  aria-hidden
                  className={cn(
                    "absolute -top-10 -right-10 w-48 h-48 rounded-full blur-3xl opacity-40 animate-blob-drift",
                    accentColor(activeId) === "terracotta"
                      ? "bg-terracotta-500"
                      : accentColor(activeId) === "forest"
                        ? "bg-forest-600"
                        : accentColor(activeId) === "mango"
                          ? "bg-mango-400"
                          : accentColor(activeId) === "indigo"
                            ? "bg-indigo-700"
                            : "bg-earth-600",
                  )}
                />

                <div className="relative">
                  <div className="flex items-center justify-between mb-6">
                    <div className="inline-flex">
                      <HandDrawnIcon
                        name={FACE_LABELS[activeIdx].icon}
                        size={52}
                        color={accentColor(activeId)}
                        withFrame
                      />
                    </div>
                    <p className="font-mono text-label uppercase tracking-[0.16em] text-charcoal-700/60">
                      Panel
                    </p>
                  </div>

                  <Eyebrow
                    accent={
                      (accentColor(activeId) === "earth"
                        ? "terracotta"
                        : accentColor(activeId)) as
                        | "terracotta"
                        | "mango"
                        | "forest"
                        | "indigo"
                    }
                    className="mb-3"
                  >
                    {active.label}
                  </Eyebrow>

                  <h3
                    className="font-display font-black text-heading-hero leading-tight mb-5"
                    dangerouslySetInnerHTML={{ __html: active.headline }}
                  />

                  <p
                    className="font-sans text-body-lg text-charcoal-700 leading-relaxed mb-8"
                    dangerouslySetInnerHTML={{ __html: active.description }}
                  />

                  {/* mini stats row */}
                  <div className="grid grid-cols-3 gap-5 mb-8 pb-8 border-b border-cream-100">
                    <div>
                      <p className={cn("font-display font-black text-display-2 leading-none", accentText)}>
                        {activeIdx === 0
                          ? "6"
                          : activeIdx === 1
                            ? "10K+"
                            : activeIdx === 2
                              ? "[XX]"
                              : activeIdx === 3
                                ? "[5]"
                                : activeIdx === 4
                                  ? "[N]"
                                  : "[XX]+"}
                      </p>
                      <p className="mt-1.5 font-mono text-micro uppercase tracking-[0.12em] text-charcoal-700/80 leading-tight">
                        {activeIdx === 0
                          ? "Product lines"
                          : activeIdx === 1
                            ? "Farmers served"
                            : activeIdx === 2
                              ? "Countries"
                              : activeIdx === 3
                                ? "Partners"
                                : activeIdx === 4
                                  ? "Years horizon"
                                  : "Open roles"}
                      </p>
                    </div>
                    <div className="w-px h-14 self-center bg-cream-200" />
                    <div className="col-span-1">
                      <p className={cn("font-display font-black text-display-2 leading-none", accentText)}>
                        {activeIdx === 0
                          ? "24/7"
                          : activeIdx === 1
                            ? "Fair"
                            : activeIdx === 2
                              ? "D2W"
                              : activeIdx === 3
                                ? "Co-create"
                                : activeIdx === 4
                                  ? "Impact"
                                  : "Purpose"}
                      </p>
                      <p className="mt-1.5 font-mono text-micro uppercase tracking-[0.12em] text-charcoal-700/80 leading-tight">
                        {activeIdx === 0
                          ? "Availability"
                          : activeIdx === 1
                            ? "Pricing"
                            : activeIdx === 2
                              ? "Distribution"
                              : activeIdx === 3
                                ? "Business model"
                                : activeIdx === 4
                                  ? "Reporting"
                                  : "Driven by"}
                      </p>
                    </div>
                  </div>

                  {/* Checklist perks */}
                  <ul className="space-y-3 mb-8">
                    {[
                      activeIdx === 0
                        ? "Premium African-made food products"
                        : activeIdx === 1
                          ? "Fair, transparent pricing with steady off-take"
                          : activeIdx === 2
                            ? "Marketing, merchandising & training support"
                            : activeIdx === 3
                              ? "Co-branded & white-label capabilities"
                              : activeIdx === 4
                                ? "Quarterly impact + financial reporting"
                                : "Meaningful work, growth, community impact",
                      activeIdx === 0
                        ? "Consistent flavor, authentic African heritage"
                        : activeIdx === 1
                          ? "Input & training support where needed"
                          : activeIdx === 2
                            ? "Regional & global product assortment"
                            : activeIdx === 3
                              ? "Flexible MOQs and lead times"
                              : activeIdx === 4
                                ? "Full pipeline transparency"
                                : "Competitive compensation & equity",
                      activeIdx === 0
                        ? "Traceable, food-safe manufacturing"
                        : activeIdx === 1
                          ? "Long-term partnerships, not one-off buys"
                          : activeIdx === 2
                            ? "Margin-friendly distributor terms"
                            : activeIdx === 3
                              ? "Joint marketing & growth funding"
                              : activeIdx === 4
                                ? "Multiple vehicles: equity / debt / hybrid"
                                : "Hybrid & remote-friendly options",
                    ].map((line) => (
                      <li
                        key={line}
                        className="flex items-start gap-3 font-sans text-body-md text-charcoal-700"
                      >
                        <span
                          className={cn(
                            "mt-1 shrink-0 w-4 h-4 rounded-full flex items-center justify-center",
                            accentBg,
                          )}
                        >
                          <span className="w-1.5 h-1.5 bg-cream-50 rounded-full" />
                        </span>
                        {line}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-3.5">
                    <Button
                      href={active.ctaHref}
                      variant={activeIdx === 0 ? "primary" : activeIdx === 4 ? "dark" : "secondary"}
                      size="lg"
                      ariaLabel={active.ctaLabel}
                    >
                      {active.ctaLabel}
                    </Button>
                    <Button
                      href="/contact"
                      variant="ghost"
                      size="lg"
                      ariaLabel="Talk to our team"
                    >
                      Talk to our team
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </SectionContainer>
      </MotionSection>
    </>
  );
}
