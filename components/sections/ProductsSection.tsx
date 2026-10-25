import { getTranslations } from "next-intl/server";
import { LazyImage } from "@/components/ui/LazyImage";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { PatternDivider } from "@/components/animations/PatternDivider";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { PRODUCTS } from "@/lib/products";
import { ScrollReveal } from "@/components/animations/MotionSection";
import { Link } from "@/i18n/routing";

export async function ProductsSection() {
  const t = await getTranslations("sections.products");
  // Varieties are shared product data, so they live in the catalog page
  // namespace. Reading them here keeps the homepage card copy in the active
  // locale instead of falling back to the English list in lib/products.ts.
  const tCatalog = await getTranslations("pages.products");
  return (
    <>
      <PatternDivider pattern="woven" thickness="medium" eyebrow={t("dividerEyebrow")} />
      <section className="bg-white py-20 sm:py-28">
        <SectionContainer size="wide">
          <div className="mb-12 flex flex-col gap-5 sm:mb-16 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <Eyebrow className="mb-5">{t("eyebrow")}</Eyebrow>
              <h2 className="font-display text-display-1 font-black">
                {t("headline")}
              </h2>
              <p className="mt-4 font-sans text-body-md text-charcoal-700">
                {t("description")}
              </p>
            </div>
            <Button href="/products" variant="secondary" size="lg">
              {t("cta")}
            </Button>
          </div>
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PRODUCTS.map((product) => {
              const name = t(`items.${product.id}.name`);
              const localizedVarieties = product.varieties
                ? (tCatalog.raw(`items.${product.id}.varieties`) as string[] | undefined)
                : undefined;
              const varieties =
                Array.isArray(localizedVarieties) && localizedVarieties.length > 0
                  ? localizedVarieties
                  : (product.varieties ?? []);
              return (
              <ScrollReveal
                as="li"
                key={product.id}
                className="list-none"
              >
                <Link
                  href={`/products/${product.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-3xl border border-cream-200 bg-cream-50 shadow-card transition hover:-translate-y-1 hover:shadow-card-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple-700"
                >
                  {product.image && (
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-cream-200">
                      <LazyImage
                        src={product.image}
                        alt={
                          product.imageAlt
                            ? t(`items.${product.id}.imageAlt`)
                            : name
                        }
                        fill
                        sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                        className={`${product.imageFit === "contain" ? "object-contain" : "object-cover"} transition-transform duration-500 group-hover:scale-105`}
                        wrapperClassName="absolute inset-0"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="rounded-full bg-white/90 px-3 py-1 font-mono text-xs font-bold uppercase tracking-wider text-purple-700 shadow-sm backdrop-blur-sm">
                          {product.status === "Available now"
                            ? t("statusAvailable")
                            : t("statusComingSoon")}
                        </span>
                      </div>
                    </div>
                  )}
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-display text-heading-2 font-black">
                      {name}
                    </h3>
                    {product.varieties && (
                      <p className="mt-2 font-sans text-body-sm text-charcoal-700">
                        {varieties.join(" · ")}
                      </p>
                    )}
                    <p className="mt-2 line-clamp-2 font-sans text-body-sm text-charcoal-600">
                      {t(`items.${product.id}.description`)}
                    </p>
                    <span className="mt-auto pt-4 inline-flex min-h-11 items-center font-sans font-bold text-purple-700 underline underline-offset-4">
                      {t("requestInfo")}
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
              );
            })}
          </ul>
        </SectionContainer>
      </section>
    </>
  );
}
