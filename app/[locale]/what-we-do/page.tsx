import { getTranslations } from "next-intl/server";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { PatternDivider } from "@/components/animations/PatternDivider";
import { ScrollReveal } from "@/components/animations/MotionSection";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.whatWeDo" });

  return {
    title: t("metadataTitle"),
    description: t("metadataDescription"),
  };
}

const CAPABILITY_IDS = [
  "agriculturalSourcing",
  "aggregationAndSupply",
  "agroProcessing",
  "foodManufacturing",
  "qualityAssurance",
  "productAndBrandDevelopment",
  "distributionAndInternationalTrade",
  "contractManufacturing",
];

export default async function WhatWeDoPage() {
  const t = await getTranslations("pages.whatWeDo");

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
        <PatternDivider pattern="woven" thickness="medium" />
      </div>

      <SectionContainer size="wide">
        <ol className="grid gap-5 sm:grid-cols-2">
          {CAPABILITY_IDS.map((id, index) => {
            const title = t(`capabilities.${id}.title`);

            return (
              <ScrollReveal
                as="li"
                key={title}
                delay={0.04 * index}
                className="list-none rounded-3xl border border-cream-200 bg-white p-7 shadow-card"
              >
                <h2 className="font-display text-heading-2 font-black">
                  {title}
                </h2>
                <p className="mt-3 font-sans text-body-md leading-relaxed text-charcoal-700">
                  {t(`capabilities.${id}.description`)}
                </p>
              </ScrollReveal>
            );
          })}
        </ol>
      </SectionContainer>

      <SectionContainer className="mt-16 text-center">
        <h2 className="mx-auto max-w-3xl font-display text-display-2 font-black">
          {t("closing")}
        </h2>
        <Button
          href="/contact?type=partner"
          variant="primary"
          size="lg"
          className="mt-7"
        >
          {t("cta")}
        </Button>
      </SectionContainer>
    </main>
  );
}
