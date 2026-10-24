import { getTranslations } from "next-intl/server";
import { LazyImage } from "@/components/ui/LazyImage";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { PatternDivider } from "@/components/animations/PatternDivider";
import { ScrollReveal } from "@/components/animations/MotionSection";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { EnquiryForm } from "@/components/forms/EnquiryForm";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.investorsPartners" });

  return {
    title: t("metadataTitle"),
    description: t("metadataDescription"),
  };
}

const WHAT_WE_BUILD = [
  {
    id: "productionCapacity",
    image: "/images/processing/industrial-tilting-cooker-station.jpg",
  },
  {
    id: "workingCapital",
    image: "/images/logistics/warehouse-pallet-bottled-peanuts.jpg",
  },
  {
    id: "productDevelopment",
    image: "/images/products/packaged-snacks-jars.jpg",
  },
  {
    id: "marketDevelopment",
    image: "/images/logistics/shipping-container-export-ready.jpg",
  },
];

const PEOPLE_IDS = [
  "investors",
  "agriculturalSuppliers",
  "distributors",
  "buyers",
  "strategicPartners",
];

export default async function InvestorsPartnersPage() {
  const t = await getTranslations("pages.investorsPartners");

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

      {/* Corporate Facility Spotlight */}
      <SectionContainer size="wide" className="mt-12">
        <div className="overflow-hidden rounded-3xl bg-cream-50 shadow-card lg:grid lg:grid-cols-12">
          <div className="relative aspect-[16/10] lg:aspect-auto lg:col-span-5 bg-cream-200">
            <LazyImage
              src="/images/corporate/acresxmanna-reception-brand-wall.jpg"
              alt={t("spotlightImageAlt")}
              fill
              className="object-cover"
              sizes="(max-width: 1023px) 100vw, 40vw"
              wrapperClassName="absolute inset-0"
            />
          </div>
          <div className="p-8 sm:p-12 lg:col-span-7 flex flex-col justify-center">
            <Eyebrow className="mb-4">{t("spotlightEyebrow")}</Eyebrow>
            <h2 className="font-display text-display-2 font-black leading-tight">
              {t("spotlightHeading")}
            </h2>
            <p className="mt-4 font-sans text-body-lg leading-relaxed text-charcoal-700">
              {t("spotlightText")}
            </p>
          </div>
        </div>
      </SectionContainer>

      <div className="my-20">
        <PatternDivider pattern="woven" thickness="medium" />
      </div>

      <SectionContainer size="wide">
        <Eyebrow className="mb-5">{t("buildingEyebrow")}</Eyebrow>
        <div className="grid gap-6 md:grid-cols-2">
          {WHAT_WE_BUILD.map((item, index) => {
            const title = t(`building.${item.id}.title`);

            return (
              <ScrollReveal
                as="article"
                key={title}
                delay={0.05 * index}
                className="group overflow-hidden rounded-3xl border border-cream-200 bg-white shadow-card transition duration-300 hover:shadow-card-hover"
              >
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-cream-100">
                  <LazyImage
                    src={item.image}
                    alt={t(`building.${item.id}.alt`)}
                    fill
                    sizes="(max-width: 767px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    wrapperClassName="absolute inset-0"
                  />
                </div>
                <div className="p-7">
                  <h2 className="font-display text-heading-1 font-black">
                    {title}
                  </h2>
                  <p className="mt-3 font-sans text-body-md leading-relaxed text-charcoal-700">
                    {t(`building.${item.id}.description`)}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </SectionContainer>

      <SectionContainer size="wide" className="mt-16">
        <Eyebrow className="mb-5">{t("meetEyebrow")}</Eyebrow>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PEOPLE_IDS.map((id) => {
            const title = t(`people.${id}.title`);

            return (
              <article
                key={title}
                className="rounded-3xl border border-cream-200 bg-cream-50 p-6"
              >
                <h2 className="font-display text-heading-2 font-black">{title}</h2>
                <p className="mt-3 font-sans text-body-md leading-relaxed text-charcoal-700">
                  {t(`people.${id}.description`)}
                </p>
              </article>
            );
          })}
        </div>
      </SectionContainer>

      <div className="my-20">
        <PatternDivider pattern="kente" thickness="medium" />
      </div>

      <SectionContainer size="wide">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <Eyebrow className="mb-5">{t("conversationEyebrow")}</Eyebrow>
            <h2 className="font-display text-display-2 font-black">
              {t("conversationHeading")}
            </h2>
            <p className="mt-6 font-sans text-body-md leading-relaxed text-charcoal-700">
              {t("conversationText")}
            </p>
          </div>
          <div className="rounded-3xl border border-cream-200 bg-white p-7 shadow-card">
            <EnquiryForm
              enquiryType="investor"
              submitLabel={t("conversationSubmitLabel")}
              showCompany
            />
          </div>
        </div>
      </SectionContainer>
    </main>
  );
}
