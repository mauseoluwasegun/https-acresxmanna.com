import { getTranslations } from "next-intl/server";
import { LazyImage } from "@/components/ui/LazyImage";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { PatternDivider } from "@/components/animations/PatternDivider";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SITE_LOCATIONS } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { MotionSection, ScrollReveal } from "@/components/animations/MotionSection";
import { BusinessFaq } from "@/components/sections/BusinessFaq";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.about" });

  return {
    title: t("metadataTitle"),
    description: t("metadataDescription"),
  };
}

const structures = [
  {
    id: "acresxmannaLtd",
    image: "/images/corporate/acresxmanna-reception-brand-wall.jpg",
  },
  {
    id: "uncleTobiShop",
    image: "/images/brands/uncletobi-logo.png",
    fit: "contain",
  },
];

const VALUE_IDS = [
  "qualityAndExcellence",
  "community",
  "innovation",
  "collaboration",
  "dedicationAndHeart",
  "capacityBuilding",
];

const GALLERY = [
  { id: "palmOilBottling", src: "/images/processing/palm-oil-bottling-wide.jpg" },
  { id: "seedlingNursery", src: "/images/farms/shadehouse-tomato-seedling-nursery.jpg" },
  { id: "papayaGrowing", src: "/images/farms/papaya-tree-greenhouse-harvest.jpg" },
  { id: "peanutProcessing", src: "/images/processing/nut-sorting-team-white-coats.jpg" },
  { id: "bottlingLine", src: "/images/processing/palm-oil-labelling-bottling-line.jpg" },
  { id: "finishedProductStock", src: "/images/products/coated-peanut-jars-snack-warehouse.jpg" },
];

const LOCATION_IDS = ["factory", "nigerianOffice", "ukWarehouse"];

export default async function AboutPage() {
  const t = await getTranslations("pages.about");

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

      <SectionContainer size="wide" className="mt-12">
        <div className="overflow-hidden rounded-3xl bg-cream-50 shadow-card lg:grid lg:grid-cols-12">
          <div className="p-7 sm:p-10 lg:col-span-7 flex flex-col justify-center">
            <Eyebrow className="mb-4">{t("storyEyebrow")}</Eyebrow>
            <h2 className="font-display text-display-2 font-black">
              {t("storyHeading")}
            </h2>
            <div className="mt-6 space-y-4 font-sans text-body-md leading-relaxed text-charcoal-700">
              <p>{t("storyParagraph1")}</p>
              <p>{t("storyParagraph2")}</p>
            </div>
          </div>
          <div className="relative aspect-[4/3] lg:aspect-auto lg:col-span-5 bg-cream-200">
            <LazyImage
              src="/images/corporate/acresxmanna-hq-showroom-desk.jpg"
              alt={t("storyImageAlt")}
              fill
              className="object-cover"
              sizes="(max-width: 1023px) 100vw, 40vw"
              wrapperClassName="absolute inset-0"
            />
          </div>
        </div>
      </SectionContainer>

      <div className="my-20">
        <PatternDivider pattern="woven" thickness="medium" />
      </div>

      <SectionContainer size="wide">
        <div className="grid gap-6 md:grid-cols-2">
          {structures.map((item) => {
            const title = t(`entities.${item.id}.title`);

            return (
              <article
                key={title}
                className="group overflow-hidden rounded-3xl border border-cream-200 bg-white shadow-card transition duration-300 hover:shadow-card-hover"
              >
                <div
                  className={`relative aspect-[16/10] w-full overflow-hidden ${
                    item.fit === "contain" ? "bg-white" : "bg-cream-100"
                  }`}
                >
                  <LazyImage
                    src={item.image}
                    alt={t(`entities.${item.id}.alt`)}
                    fill
                    sizes="(max-width: 767px) 100vw, 50vw"
                    className={`transition-transform duration-500 group-hover:scale-105 ${
                      item.fit === "contain"
                        ? "object-contain p-8"
                        : "object-cover"
                    }`}
                    wrapperClassName="absolute inset-0"
                  />
                </div>
                <div className="p-7">
                  <Eyebrow className="mb-3">{t("companyStructureEyebrow")}</Eyebrow>
                  <h2 className="font-display text-heading-1 font-black">
                    {title}
                  </h2>
                  <p className="mt-3 font-sans text-body-md leading-relaxed text-charcoal-700">
                    {t(`entities.${item.id}.description`)}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </SectionContainer>

      <MotionSection className="mt-16 bg-purple-700 py-16 text-white sm:py-20">
        <SectionContainer size="wide">
          <div className="grid gap-6 md:grid-cols-2">
            <article className="rounded-3xl border border-white/20 bg-white/5 p-7">
              <Eyebrow className="mb-4 text-yellow-400">{t("visionEyebrow")}</Eyebrow>
              <p className="font-display text-heading-1 font-bold leading-relaxed">
                {t("visionText")}
              </p>
            </article>
            <article className="rounded-3xl border border-white/20 bg-white/5 p-7">
              <Eyebrow className="mb-4 text-yellow-400">{t("missionEyebrow")}</Eyebrow>
              <p className="font-display text-heading-1 font-bold leading-relaxed">
                {t("missionText")}
              </p>
            </article>
          </div>
        </SectionContainer>
      </MotionSection>

      {/* Farm & Processing Gallery */}
      <SectionContainer size="wide" className="mt-16">
        <div className="mb-8 max-w-3xl">
          <Eyebrow className="mb-4">{t("fieldToFactoryEyebrow")}</Eyebrow>
          <h2 className="font-display text-display-2 font-black">
            {t("fieldToFactoryHeading")}
          </h2>
          <p className="mt-4 font-sans text-body-lg leading-relaxed text-charcoal-700">
            {t("fieldToFactoryText")}
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3" id="about-gallery">
          {GALLERY.map((item, i) => {
            const caption = t(`gallery.${item.id}.caption`);

            return (
              <ScrollReveal
                as="figure"
                key={caption}
                delay={0.05 * i}
                className="group overflow-hidden rounded-3xl border border-cream-200 bg-cream-50 shadow-card transition hover:shadow-card-hover"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <LazyImage
                    src={item.src}
                    alt={t(`gallery.${item.id}.alt`)}
                    fill
                    sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    wrapperClassName="absolute inset-0"
                  />
                </div>
                <figcaption className="px-5 py-4 font-sans text-body-sm font-medium text-charcoal-700">
                  {caption}
                </figcaption>
              </ScrollReveal>
            );
          })}
        </div>
      </SectionContainer>

      <SectionContainer size="wide" className="mt-16">
        <div className="mb-8 max-w-3xl">
          <Eyebrow className="mb-4">{t("valuesEyebrow")}</Eyebrow>
          <h2 className="font-display text-display-2 font-black">
            {t("valuesHeading")}
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {VALUE_IDS.map((id, index) => {
            const title = t(`values.${id}.title`);

            return (
              <ScrollReveal
                as="article"
                key={title}
                delay={0.04 * index}
                className="rounded-[2rem] border border-cream-200 bg-white p-6 shadow-card"
              >
                <h3 className="font-display text-heading-2 font-black">{title}</h3>
                <p className="mt-3 font-sans text-body-md leading-relaxed text-charcoal-700">
                  {t(`values.${id}.description`)}
                </p>
              </ScrollReveal>
            );
          })}
        </div>
        <blockquote className="mt-10 rounded-3xl bg-cream-50 p-7 font-display text-heading-1 font-bold leading-relaxed text-purple-700">
          {t("quote")}
        </blockquote>
      </SectionContainer>

      <SectionContainer size="wide" className="mt-16">
        <Eyebrow className="mb-5">{t("locationsEyebrow")}</Eyebrow>
        <div className="grid gap-4 md:grid-cols-3">
          {SITE_LOCATIONS.map((_, index) => {
            const label = t(`locations.${LOCATION_IDS[index]}.label`);

            return (
              <address
                key={label}
                className="rounded-2xl border border-cream-200 bg-cream-50 p-5 not-italic"
              >
                <p className="font-mono text-label font-bold uppercase tracking-[0.1em] text-purple-700">
                  {label}
                </p>
                <p className="mt-2 font-sans text-body-md leading-relaxed text-charcoal-700">
                  {t(`locations.${LOCATION_IDS[index]}.address`)}
                </p>
              </address>
            );
          })}
        </div>
      </SectionContainer>
      <BusinessFaq />
      <SectionContainer className="mt-16 text-center">
        <Button href="/contact" variant="primary" size="lg">
          {t("cta")}
        </Button>
      </SectionContainer>
    </main>
  );
}
