import { getTranslations } from "next-intl/server";
import { LazyImage } from "@/components/ui/LazyImage";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { ScrollReveal } from "@/components/animations/MotionSection";
import { PatternDivider } from "@/components/animations/PatternDivider";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";

const brands = [
  {
    id: "africanFoodKing",
    name: "African Food King",
    image: "/images/brands/african-food-king-logo.png",
    fit: "contain",
    status: "active",
  },
  {
    id: "uncleTobi",
    name: "UncleTobi",
    image: "/images/brands/uncletobi-logo.png",
    fit: "contain",
    status: "comingSoon",
  },
  {
    id: "ijgbFoods",
    name: "IJGB Foods",
    image: "/images/brands/ijgb-foods-logo.png",
    fit: "contain",
    status: "active",
  },
  {
    id: "happyManFoods",
    name: "HappyMan Foods",
    image: "/images/brands/happyman-foods-logo.svg",
    fit: "contain",
    status: "active",
  },
  {
    id: "maluzaFoods",
    name: "Maluza Foods Co.",
    image: "/images/brands/maluza-foods-logo.svg",
    fit: "contain",
    status: "live",
  },
] as const;

export async function BrandsSection() {
  const t = await getTranslations("sections.brandShowcase");
  const tStatus = await getTranslations("brandStatus");

  return (
    <>
      <PatternDivider
        pattern="ankara"
        thickness="medium"
        eyebrow={t("dividerEyebrow")}
      />
      <section className="bg-white py-16 sm:py-24">
        <SectionContainer size="wide">
          <div className="mb-10 max-w-3xl">
            <Eyebrow className="mb-5">{t("eyebrow")}</Eyebrow>
            <h2 className="font-display text-display-1 font-black">
              {t("headline")}
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {brands.map((brand, index) => (
              <ScrollReveal
                as="article"
                key={brand.id}
                delay={0.05 * index}
                className="group flex flex-col overflow-hidden rounded-3xl border border-cream-200 bg-cream-50 shadow-card transition duration-300 hover:shadow-card-hover"
              >
                <div
                  className={`relative aspect-[16/10] w-full overflow-hidden ${
                    brand.fit === "contain" ? "bg-white" : "bg-cream-200"
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
                  <h3 className="font-display text-heading-2 font-black">
                    {brand.name}
                  </h3>
                  <p className="mt-3 font-sans text-body-md leading-relaxed text-charcoal-700">
                    {t(`items.${brand.id}.description`)}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <div className="mt-8">
            <Button href="/our-brands" variant="secondary" size="lg">
              {t("cta")}
            </Button>
          </div>
        </SectionContainer>
      </section>
    </>
  );
}
