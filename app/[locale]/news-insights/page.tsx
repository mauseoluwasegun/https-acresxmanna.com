import { getTranslations } from "next-intl/server";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { PatternDivider } from "@/components/animations/PatternDivider";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.newsInsights" });

  return {
    title: t("metadataTitle"),
    description: t("metadataDescription"),
  };
}

const CATEGORY_IDS = [
  "companyNews",
  "productsAndInnovation",
  "industryInsights",
  "supplyChain",
  "globalTrade",
];

export default async function NewsInsightsPage() {
  const t = await getTranslations("pages.newsInsights");

  return (
    <main id="main" className="pt-32 pb-24">
      <SectionContainer size="wide" className="text-center">
        <Eyebrow className="mb-5">{t("eyebrow")}</Eyebrow>
        <h1 className="font-display font-black text-display-1 text-balance mx-auto max-w-5xl">
          {t("heading")}
        </h1>
        <p className="mt-8 font-sans text-body-lg text-charcoal-700 max-w-2xl mx-auto leading-relaxed">
          {t("intro")}
        </p>
      </SectionContainer>

      <div className="my-20">
        <PatternDivider pattern="bogolan" thickness="medium" />
      </div>

      <SectionContainer size="wide">
        <div className="mb-8 flex flex-wrap justify-center gap-3">
          {CATEGORY_IDS.map((id) => {
            const label = t(`categories.${id}`);

            return (
              <span
                key={label}
                className="rounded-full border border-purple-700/20 bg-white px-4 py-2 font-sans text-sm font-semibold text-purple-700"
              >
                {label}
              </span>
            );
          })}
        </div>
        <div className="rounded-3xl border border-cream-200 bg-white p-8 text-center shadow-card">
          <Eyebrow className="mb-4">{t("comingSoonEyebrow")}</Eyebrow>
          <p className="font-sans text-body-lg text-charcoal-700">
            {t("comingSoonText")}
          </p>
        </div>
        <div className="mt-10 text-center">
          <p className="font-sans text-body-md text-charcoal-700">
            {t("meantimeText")}
          </p>
          <Button href="/contact" variant="primary" size="lg" className="mt-4">
            {t("cta")}
          </Button>
        </div>
      </SectionContainer>
    </main>
  );
}
