import { getTranslations } from "next-intl/server";
import { LazyImage } from "@/components/ui/LazyImage";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { PatternDivider } from "@/components/animations/PatternDivider";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SITE_LOCATIONS } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/animations/MotionSection";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.infrastructure" });

  return {
    title: t("metadataTitle"),
    description: t("metadataDescription"),
  };
}

const capabilityCards = [
  {
    id: "production",
    image: "/images/processing/nut-sorting-wide-team.jpg",
  },
  {
    id: "quality",
    image: "/images/processing/hygienic-nut-sorting-team.jpg",
  },
  {
    id: "supplyChain",
    image: "/images/logistics/warehouse-racking-branded-sacks.jpg",
  },
  {
    id: "growth",
    image: "/images/processing/industrial-tilting-cooker-station.jpg",
  },
];

const facilityGallery = [
  {
    id: "mixingSifting",
    image: "/images/processing/large-stainless-mixing-vats.jpg",
  },
  {
    id: "bakeryOvens",
    image: "/images/processing/bakery-staff-industrial-oven.jpg",
  },
  {
    id: "sortingQualityControl",
    image: "/images/processing/full-facility-sorting-hall.jpg",
  },
  {
    id: "palmOilBottlingLine",
    image: "/images/processing/palm-oil-bottling-team.jpg",
  },
  {
    id: "nutSortingLongTable",
    image: "/images/processing/nut-sorting-long-table-team.jpg",
  },
  {
    id: "rotaryCooker",
    image: "/images/processing/rotary-cooker-operators.jpg",
  },
  {
    id: "palletRacking",
    image: "/images/logistics/highbay-racking-warehouse-logistics.jpg",
  },
  {
    id: "containerLoading",
    image: "/images/logistics/loading-bottled-nuts-container.jpg",
  },
  {
    id: "sealedContainer",
    image: "/images/logistics/sealed-container-gcnu-sacks.jpg",
  },
];

const LOCATION_IDS = ["factory", "nigerianOffice", "ukWarehouse"];

export default async function InfrastructurePage() {
  const t = await getTranslations("pages.infrastructure");

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
        <div className="grid gap-6 md:grid-cols-2">
          {capabilityCards.map((item, index) => {
            const title = t(`cards.${item.id}.title`);

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
                    alt={title}
                    fill
                    sizes="(max-width: 767px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    wrapperClassName="absolute inset-0"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="rounded-full bg-white/90 px-3 py-1 font-mono text-xs font-bold uppercase tracking-wider text-purple-700 shadow-sm backdrop-blur-sm">
                      {t(`cards.${item.id}.status`)}
                    </span>
                  </div>
                </div>
                <div className="p-7">
                  <h2 className="font-display text-heading-2 font-black">
                    {title}
                  </h2>
                  <p className="mt-3 font-sans text-body-md leading-relaxed text-charcoal-700">
                    {t(`cards.${item.id}.description`)}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </SectionContainer>

      {/* Facility Visual Showcase */}
      <SectionContainer size="wide" className="mt-20">
        <div className="mb-10 max-w-3xl">
          <Eyebrow className="mb-4">{t("insideFacilityEyebrow")}</Eyebrow>
          <h2 className="font-display text-display-2 font-black">
            {t("insideFacilityHeading")}
          </h2>
          <p className="mt-4 font-sans text-body-lg leading-relaxed text-charcoal-700">
            {t("insideFacilityText")}
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" id="facility-gallery">
          {facilityGallery.map((item, index) => {
            const title = t(`gallery.${item.id}.title`);

            return (
              <ScrollReveal
                as="figure"
                key={title}
                delay={0.04 * index}
                className="group overflow-hidden rounded-3xl border border-cream-200 bg-cream-50 shadow-card transition hover:shadow-card-hover"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-cream-200">
                  <LazyImage
                    src={item.image}
                    alt={title}
                    fill
                    sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    wrapperClassName="absolute inset-0"
                  />
                </div>
                <figcaption className="p-5">
                  <h3 className="font-display text-heading-3 font-bold text-charcoal-900">
                    {title}
                  </h3>
                  <p className="mt-2 font-sans text-body-sm leading-relaxed text-charcoal-600">
                    {t(`gallery.${item.id}.caption`)}
                  </p>
                </figcaption>
              </ScrollReveal>
            );
          })}
        </div>
      </SectionContainer>

      <SectionContainer size="wide" className="mt-16">
        <div className="grid gap-4 md:grid-cols-3">
          {SITE_LOCATIONS.map((_, index) => {
            const label = t(`locations.${LOCATION_IDS[index]}.label`);

            return (
              <address
                key={label}
                className="rounded-3xl border border-cream-200 bg-white p-6 not-italic shadow-card"
              >
                <Eyebrow className="mb-4">{label}</Eyebrow>
                <p className="font-sans text-body-md leading-relaxed text-charcoal-700">
                  {t(`locations.${LOCATION_IDS[index]}.address`)}
                </p>
              </address>
            );
          })}
        </div>
      </SectionContainer>
      <SectionContainer className="mt-16 text-center">
        <Button href="/contact?type=visit" variant="primary" size="lg">
          {t("cta")}
        </Button>
      </SectionContainer>
    </main>
  );
}
