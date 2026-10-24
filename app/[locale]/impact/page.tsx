import { getTranslations } from "next-intl/server";
import { LazyImage } from "@/components/ui/LazyImage";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { PatternDivider } from "@/components/animations/PatternDivider";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { CountUp } from "@/components/ui/CountUp";
import { IMPACT_METRICS, IMPACT_SCORECARD } from "@/lib/constants";
import { ScrollReveal } from "@/components/animations/MotionSection";


export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.impact" });

  return {
    title: t("metadataTitle"),
    description: t("metadataDescription"),
  };
}

const impactStories = [
  {
    id: "valueAddition",
    image: "/images/processing/palm-oil-bottling-wide.jpg",
  },
  {
    id: "localProduction",
    image: "/images/processing/full-facility-sorting-hall.jpg",
  },
  {
    id: "supplyChains",
    image: "/images/farms/greenhouse-tomato-rows.jpg",
  },
  {
    id: "globalMarkets",
    image: "/images/logistics/shipping-container-export-ready.jpg",
  },
];

const SCORECARD_IDS = [
  "tonnesProcessed",
  "finishedProducts",
  "activeSuppliers",
  "directJobs",
  "productCategories",
  "countriesWithVerifiedSales",
  "complianceQualityMeasures",
];

export default async function ImpactPage() {
  const t = await getTranslations("pages.impact");

  return (
    <main id="main" className="pb-24 pt-32">
      <SectionContainer size="wide" className="text-center">
        <Eyebrow className="mb-5">{t("eyebrow")}</Eyebrow>
        <h1 className="mx-auto max-w-5xl font-display text-display-1 font-black">
          {t("heading")}
        </h1>
        <p className="mx-auto mt-8 max-w-2xl font-sans text-body-lg leading-relaxed text-charcoal-700">
          {t("intro")}
        </p>
      </SectionContainer>

      <div className="my-20">
        <PatternDivider pattern="bogolan" thickness="medium" />
      </div>

      <SectionContainer size="wide">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {impactStories.map((item, index) => {
            const title = t(`stories.${item.id}.title`);

            return (
              <ScrollReveal
                as="article"
                key={title}
                delay={0.04 * index}
                className="group overflow-hidden rounded-3xl border border-cream-200 bg-white shadow-card transition duration-300 hover:shadow-card-hover"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-cream-100">
                  <LazyImage
                    src={item.image}
                    alt={title}
                    fill
                    sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    wrapperClassName="absolute inset-0"
                  />
                </div>
                <div className="p-6">
                  <h2 className="font-display text-heading-2 font-black text-charcoal-900">
                    {title}
                  </h2>
                  <p className="mt-2 font-sans text-body-sm leading-relaxed text-charcoal-600">
                    {t(`stories.${item.id}.caption`)}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </SectionContainer>

      {/* Spotlight on Smallholder Innovation */}
      <SectionContainer size="wide" className="mt-20">
        <div className="overflow-hidden rounded-3xl bg-purple-700 text-white shadow-card lg:grid lg:grid-cols-12">
          <div className="relative aspect-[4/3] lg:aspect-auto lg:col-span-5">
            <LazyImage
              src="/images/farms/farmer-papaya-cultivation.jpg"
              alt={t("spotlightImageAlt")}
              fill
              className="object-cover"
              sizes="(max-width: 1023px) 100vw, 40vw"
              wrapperClassName="absolute inset-0"
            />
          </div>
          <div className="p-8 sm:p-12 lg:col-span-7 flex flex-col justify-center">
            <Eyebrow className="mb-4 text-yellow-400">{t("spotlightEyebrow")}</Eyebrow>
            <h2 className="font-display text-display-2 font-black leading-tight">
              {t("spotlightHeading")}
            </h2>
            <p className="mt-4 font-sans text-body-lg leading-relaxed text-white/90">
              {t("spotlightText")}
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <span className="rounded-full bg-white/10 px-4 py-2 font-mono text-xs font-semibold uppercase tracking-wider text-yellow-300 border border-white/15">
                {t("spotlightTagSeedlings")}
              </span>
              <span className="rounded-full bg-white/10 px-4 py-2 font-mono text-xs font-semibold uppercase tracking-wider text-yellow-300 border border-white/15">
                {t("spotlightTagContracts")}
              </span>
              <span className="rounded-full bg-white/10 px-4 py-2 font-mono text-xs font-semibold uppercase tracking-wider text-yellow-300 border border-white/15">
                {t("spotlightTagWorkforce")}
              </span>
            </div>
          </div>
        </div>
      </SectionContainer>

      <SectionContainer size="wide" className="mt-20">
        <div className="mb-12 max-w-3xl">
          <Eyebrow className="mb-4">{t("scorecardEyebrow")}</Eyebrow>
          <h2 className="font-display text-display-2 font-black">
            {t("scorecardHeading")}
          </h2>
          <p className="mt-4 font-sans text-body-lg leading-relaxed text-charcoal-700">
            {t("scorecardText")}
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {IMPACT_SCORECARD.map((metric, index) => {
            const label = t(`scorecard.${SCORECARD_IDS[index]}.label`);

            return (
              <ScrollReveal
                as="article"
                key={label}
                delay={0.05 * index}
                className="group relative overflow-hidden rounded-3xl border border-cream-200 bg-white p-6 shadow-card transition-shadow duration-300 hover:shadow-card-hover"
              >
                {/* Subtle purple glow accent on hover */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-purple-100 opacity-0 transition-opacity duration-500 group-hover:opacity-60"
                />

                {metric.value > 0 ? (
                  <p className="font-display text-display-2 font-black text-purple-700">
                    <CountUp
                      to={metric.value}
                      suffix={metric.suffix}
                      duration={2000}
                    />
                  </p>
                ) : (
                  <p className="font-display text-heading-1 font-black text-charcoal-300">
                    —
                  </p>
                )}

                <p className="mt-3 font-display text-heading-3 font-bold text-charcoal-900 leading-snug">
                  {label}
                </p>

                <p className="mt-2 font-mono text-label font-semibold uppercase tracking-[0.1em] text-purple-600">
                  {metric.value > 0
                    ? t("verified")
                    : t(`scorecard.${SCORECARD_IDS[index]}.note`)}
                </p>
              </ScrollReveal>
            );
          })}
        </div>
      </SectionContainer>


      <SectionContainer className="mt-20 text-center">
        <p className="mx-auto max-w-4xl font-display text-heading-1 font-bold leading-relaxed">
          {t("closing")}
        </p>
        <Button href="/contact" variant="primary" size="lg">
          {t("cta")}
        </Button>
      </SectionContainer>
    </main>
  );
}
