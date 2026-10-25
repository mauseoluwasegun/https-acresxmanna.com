import { getTranslations } from "next-intl/server";
import { LazyImage } from "@/components/ui/LazyImage";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { PatternDivider } from "@/components/animations/PatternDivider";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Link } from "@/i18n/routing";
import { SITE_URL } from "@/lib/constants";
import { PRODUCTS } from "@/lib/products";
import { EnquiryForm } from "@/components/forms/EnquiryForm";

type ProductPageProps = {
  params: Promise<{ slug: string; locale: string }>;
};

export function generateStaticParams() {
  return PRODUCTS.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug, locale } = await params;
  const product = PRODUCTS.find((item) => item.slug === slug);

  if (!product) {
    return { title: "Product not found" };
  }

  // Read the card copy in the active locale so translated pages do not ship
  // English titles and descriptions in their metadata.
  const tProducts = await getTranslations({ locale, namespace: "pages.products.items" });
  const name = tProducts(`${product.id}.name`);

  return {
    title: name,
    description: `${name} — ${tProducts(`${product.id}.description`)}`,
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = PRODUCTS.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  const t = await getTranslations("pages.productDetail");
  const tProducts = await getTranslations("pages.products.items");
  const tNav = await getTranslations("nav");
  const name = tProducts(`${product.id}.name`);
  const description = tProducts(`${product.id}.description`);
  const varieties = product.varieties
    ? (tProducts.raw(`${product.id}.varieties`) as string[])
    : undefined;
  const highlights = product.highlights
    ? (tProducts.raw(`${product.id}.highlights`) as string[])
    : undefined;
  const caption = tProducts(`${product.id}.caption`);

  const available = product.status === "Available now";
  const relatedProducts = PRODUCTS.filter(
    (item) => item.id !== product.id && item.status === product.status,
  ).slice(0, 3);
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Product",
      name,
      description,
      brand: {
        "@type": "Brand",
        name: "HappyMan Foods",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: tNav("home"),
          item: SITE_URL,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: tNav("products"),
          item: `${SITE_URL}/products`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name,
          item: `${SITE_URL}/products/${product.slug}`,
        },
      ],
    },
  ];

  return (
    <main id="main" className="pb-24 pt-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <SectionContainer size="wide">
        <Link
          href="/products"
          className="mb-8 inline-flex min-h-11 items-center font-sans font-bold text-purple-700 underline underline-offset-4"
        >
          {t("backToProducts")}
        </Link>

        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-7">
            <Eyebrow className="mb-5">
              {available ? t("onSaleBadge") : t("plannedBadge")}
            </Eyebrow>
            <h1 className="max-w-4xl font-display text-display-1 font-black">
              {name}
            </h1>
            <p className="mt-8 max-w-2xl font-sans text-body-lg leading-relaxed text-charcoal-700">
              {tProducts(`${product.id}.description`)}
            </p>
            {varieties && (
              <p className="mt-5 font-sans text-body-md text-charcoal-700">
                {t("varieties", { varieties: varieties.join(", ") })}
              </p>
            )}
            {highlights && (
              <section className="mt-8 max-w-2xl">
                <Eyebrow className="mb-4">{t("productHighlights")}</Eyebrow>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="rounded-2xl border border-cream-200 bg-white p-4 font-sans text-body-md leading-relaxed text-charcoal-700"
                    >
                      {highlight}
                    </li>
                  ))}
                </ul>
              </section>
            )}
            {available && (
              <p className="mt-8 max-w-2xl font-sans text-body-md leading-relaxed text-charcoal-700">
                {t("enquiryWelcome")}
              </p>
            )}
            <p className="mt-6 max-w-2xl font-sans text-body-sm leading-relaxed text-charcoal-500">
              {t("packSizesNote")}
            </p>
          </div>

          {product.image && (
            <div className="lg:col-span-5">
              <figure className="overflow-hidden rounded-3xl border border-cream-200 bg-white p-3 shadow-card">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-cream-100">
                  <LazyImage
                    src={product.image}
                    alt={tProducts(`${product.id}.imageAlt`) || name}
                    fill
                    priority
                    sizes="(max-width: 1023px) 100vw, 42vw"
                    className={product.imageFit === "contain" ? "object-contain" : "object-cover"}
                    wrapperClassName="absolute inset-0"
                  />
                </div>
                {product.caption && (
                  <figcaption className="p-4 text-center font-sans text-body-sm text-charcoal-600">
                    {caption}
                  </figcaption>
                )}
              </figure>
            </div>
          )}
        </div>
      </SectionContainer>

      {available && (
        <>
          <div className="my-20">
            <PatternDivider pattern="kente" thickness="medium" />
          </div>
          <SectionContainer size="wide">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
              <div>
                <Eyebrow className="mb-5">{t("requestInformationEyebrow")}</Eyebrow>
                <h2 className="font-display text-display-2 font-black">
                  {t("requestInformationHeading")}
                </h2>
                <p className="mt-6 font-sans text-body-md leading-relaxed text-charcoal-700">
                  {t("requestInformationText")}
                </p>
              </div>
              <div className="rounded-3xl border border-cream-200 bg-white p-7 shadow-card">
                <EnquiryForm
                  enquiryType="product"
                  product={name}
                  submitLabel={t("requestProductInformation")}
                  showCompany
                  showProduct
                />
              </div>
            </div>
          </SectionContainer>
        </>
      )}

      <div className="my-20">
        <PatternDivider pattern="kente" thickness="medium" />
      </div>

      <SectionContainer size="wide">
        <Eyebrow className="mb-5">{t("moreProducts")}</Eyebrow>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {relatedProducts.map((item) => (
            <article
              key={item.id}
              className="rounded-3xl border border-cream-200 bg-white p-6 shadow-card"
            >
              <h2 className="font-display text-heading-2 font-black">
                {tProducts(`${item.id}.name`)}
              </h2>
              <p className="mt-3 font-sans text-body-md leading-relaxed text-charcoal-700">
                {tProducts(`${item.id}.description`)}
              </p>
              <Link
                href={`/products/${item.slug}`}
                className="mt-5 inline-flex min-h-11 items-center font-sans font-bold text-purple-700 underline underline-offset-4"
              >
                {t("viewProduct")}
              </Link>
            </article>
          ))}
        </div>
      </SectionContainer>
    </main>
  );
}
