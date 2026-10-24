import { getTranslations } from "next-intl/server";
import { LazyImage } from "@/components/ui/LazyImage";
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
  const t = await getTranslations({ locale, namespace: "pages.ourBrands" });

  return {
    title: t("metadataTitle"),
    description: t("metadataDescription"),
  };
}

const BRANDS = [
  {
    id: "africanFoodKing",
    name: "African Food King",
    status: "active",
    image: "/images/brands/african-food-king-logo.png",
    fit: "contain",
  },
  {
    id: "happyManFoods",
    name: "HappyMan Foods",
    status: "active",
    image: "/images/brands/happyman-foods-logo.svg",
    fit: "contain",
  },
  {
    id: "maluzaFoods",
    name: "Maluza Foods Co.",
    status: "live",
    image: "/images/brands/maluza-foods-logo.svg",
    fit: "contain",
  },
  {
    id: "uncleTobi",
    name: "UncleTobi",
    status: "comingSoon",
    image: "/images/brands/uncletobi-logo.png",
    fit: "contain",
  },
  {
    id: "ijgbFoods",
    name: "IJGB Foods",
    status: "active",
    image: "/images/brands/ijgb-foods-logo.png",
    fit: "contain",
  },
] as const;

export default async function OurBrandsPage() {
  const t = await getTranslations("pages.ourBrands");
  const tStatus = await getTranslations("brandStatus");

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
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {BRANDS.map((brand) => (
            <article
              key={brand.id}
              className="group flex flex-col overflow-hidden rounded-3xl border border-cream-200 bg-white shadow-card transition duration-300 hover:shadow-card-hover"
            >
              <div
                className={`relative aspect-[16/10] w-full overflow-hidden ${
                  brand.fit === "contain" ? "bg-white" : "bg-cream-100"
                }`}
              >
                <LazyImage
                  src={brand.image}
                  alt={t(`items.${brand.id}.alt`)}
                  fill
                  unoptimized={brand.image.endsWith(".svg")}
                  sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 25vw"
                  className={`transition-transform duration-500 group-hover:scale-105 ${
                    brand.fit === "contain"
                      ? "object-contain p-6"
                      : "object-cover"
                  }`}
                  wrapperClassName="absolute inset-0"
                />
                <div className="absolute top-4 left-4">
                  <span className="rounded-full bg-white/90 px-3 py-1 font-mono text-xs font-bold uppercase tracking-wider text-purple-700 shadow-sm backdrop-blur-sm">
                    {tStatus(brand.status)}
                  </span>
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h2 className="font-display text-heading-1 font-black">
                  {brand.name}
                </h2>
                <p className="mt-3 font-sans text-body-md leading-relaxed text-charcoal-700">
                  {t(`items.${brand.id}.description`)}
                </p>
              </div>
            </article>
          ))}
        </div>
      </SectionContainer>

      <SectionContainer size="wide" className="mt-16">
        <div className="overflow-hidden rounded-3xl bg-purple-700 text-white lg:grid lg:grid-cols-12">
          <div className="relative aspect-[16/10] lg:aspect-auto lg:col-span-5 bg-purple-900">
            <LazyImage
              src="/images/logistics/palletised-bottled-peanuts-ready-for-distribution.jpg"
              alt={t("distribution.imageAlt")}
              fill
              className="object-cover"
              sizes="(max-width: 1023px) 100vw, 40vw"
              wrapperClassName="absolute inset-0"
            />
          </div>
          <div className="p-8 sm:p-10 lg:col-span-7 flex flex-col justify-center">
            <h2 className="font-display text-display-2 font-black">
              {t("distribution.heading")}
            </h2>
            <p className="mt-5 font-sans text-body-lg leading-relaxed text-white/90">
              {t("distribution.body")}
            </p>
          </div>
        </div>
      </SectionContainer>

      <SectionContainer className="mt-16 text-center">
        <p className="mx-auto max-w-2xl font-sans text-body-lg leading-relaxed text-charcoal-700">
          {t("contact.body")}
        </p>
        <Button href="/contact" variant="primary" size="lg" className="mt-6">
          {t("contact.cta")}
        </Button>
      </SectionContainer>
    </main>
  );
}
