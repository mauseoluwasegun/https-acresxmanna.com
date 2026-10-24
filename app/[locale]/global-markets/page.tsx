import { getTranslations } from "next-intl/server";
import { LazyImage } from "@/components/ui/LazyImage";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { PatternDivider } from "@/components/animations/PatternDivider";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { BusinessFaq } from "@/components/sections/BusinessFaq";
import { ScrollReveal } from "@/components/animations/MotionSection";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.globalMarkets" });

  return {
    title: t("metadataTitle"),
    description: t("metadataDescription"),
  };
}

const marketSteps = [
  {
    id: "marketDevelopment",
    image: "/images/corporate/acresxmanna-office-purple-logo-wall.jpg",
  },
  {
    id: "productReadiness",
    image: "/images/processing/palm-oil-bottling-team.jpg",
  },
  {
    id: "commercialPartnerships",
    image: "/images/logistics/loading-bottled-nuts-container.jpg",
  },
  {
    id: "supplyReliability",
    image: "/images/logistics/container-bottled-products-export.jpg",
  },
];

const ROUTE_IDS = ["currentRoute", "nigerianRetail", "packSizes"];

export default async function GlobalMarketsPage() {
  const t = await getTranslations("pages.globalMarkets");

  return (
    <main id="main" className="pb-24 pt-32">
      <SectionContainer size="wide">
        <Eyebrow className="mb-5">{t("eyebrow")}</Eyebrow>
        <h1 className="max-w-5xl font-display text-display-1 font-black">
          {t("heading")}
        </h1>
        <p className="mt-8 max-w-3xl font-sans text-body-lg leading-relaxed text-charcoal-700">
          {t("intro")}
        </p>
      </SectionContainer>

      <div className="my-20">
        <PatternDivider pattern="kente" thickness="medium" />
      </div>

      <SectionContainer size="wide">
        <div className="grid gap-5 md:grid-cols-3">
          {ROUTE_IDS.map((id) => {
            const label = t(`routes.${id}.label`);

            return (
              <article
                key={label}
                className="rounded-3xl border border-cream-200 bg-white p-7 shadow-card"
              >
                <Eyebrow className="mb-4">{label}</Eyebrow>
                <h2 className="font-display text-heading-1 font-black">
                  {t(`routes.${id}.value`)}
                </h2>
              </article>
            );
          })}
        </div>
        <p className="mt-7 font-sans text-body-md text-charcoal-700">
          {t("destinationsNote")}
        </p>
      </SectionContainer>

      {/* Export Freight Spotlight */}
      <SectionContainer size="wide" className="mt-16">
        <div className="overflow-hidden rounded-3xl bg-purple-700 text-white shadow-card lg:grid lg:grid-cols-12">
          <div className="relative aspect-[16/10] lg:aspect-auto lg:col-span-6 bg-purple-900">
            <LazyImage
              src="/images/logistics/freight-container-truck-dispatch.jpg"
              alt={t("freightImageAlt")}
              fill
              className="object-cover"
              sizes="(max-width: 1023px) 100vw, 50vw"
              wrapperClassName="absolute inset-0"
            />
          </div>
          <div className="p-8 sm:p-12 lg:col-span-6 flex flex-col justify-center">
            <Eyebrow className="mb-4 text-yellow-400">{t("freightEyebrow")}</Eyebrow>
            <h2 className="font-display text-display-2 font-black leading-tight">
              {t("freightHeading")}
            </h2>
            <p className="mt-4 font-sans text-body-lg leading-relaxed text-white/90">
              {t("freightText")}
            </p>
          </div>
        </div>
      </SectionContainer>

      <SectionContainer size="wide" className="mt-20">
        <div className="mb-10 max-w-3xl">
          <Eyebrow className="mb-4">{t("accessEyebrow")}</Eyebrow>
          <h2 className="font-display text-display-2 font-black">
            {t("accessHeading")}
          </h2>
          <p className="mt-4 font-sans text-body-lg leading-relaxed text-charcoal-700">
            {t("accessText")}
          </p>
        </div>
        <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {marketSteps.map((step, index) => (
            <ScrollReveal
              as="li"
              key={step.id}
              delay={0.04 * index}
              className="group list-none overflow-hidden rounded-3xl border border-cream-200 bg-white shadow-card transition duration-300 hover:shadow-card-hover"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-cream-100">
                <LazyImage
                  src={step.image}
                  alt={t(`steps.${step.id}.alt`)}
                  fill
                  sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  wrapperClassName="absolute inset-0"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-heading-2 font-black text-charcoal-900">
                  {t(`steps.${step.id}.title`)}
                </h3>
                <p className="mt-3 font-sans text-body-sm leading-relaxed text-charcoal-600">
                  {t(`steps.${step.id}.description`)}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </ol>
      </SectionContainer>

      <SectionContainer size="wide" className="mt-16">
        <div className="rounded-3xl border border-cream-200 bg-purple-700 p-8 text-white">
          <Eyebrow className="mb-4 text-yellow-400">{t("ukOperationsEyebrow")}</Eyebrow>
          <h2 className="font-display text-heading-1 font-black">{t("ukOperationsHeading")}</h2>
          <p className="mt-4 max-w-3xl font-sans text-body-md leading-relaxed text-white/85">
            {t("ukOperationsText")}
          </p>
          <p className="mt-4 font-sans text-body-sm text-white/75">
            {t("ukOperationsNote")}
          </p>
        </div>
      </SectionContainer>

      <SectionContainer className="mt-16 text-center">
        <Button href="/business-enquiries?type=international-trade" variant="primary" size="lg">
        {t("cta")}
        </Button>
      </SectionContainer>
      <BusinessFaq />
    </main>
  );
}
