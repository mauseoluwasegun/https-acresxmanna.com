import { SectionContainer } from "@/components/layout/SectionContainer";
import { PatternDivider } from "@/components/animations/PatternDivider";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { PatternFramedImage } from "@/components/ui/PatternFrame";
import { PRODUCTS } from "@/lib/products";
import { useTranslations } from "next-intl";

export default function ProductsPage() {
  const t = useTranslations("products");
  const tNav = useTranslations("nav");

  return (
    <main id="main" className="pt-32 pb-24">
      <SectionContainer size="wide" className="text-center">
        <Eyebrow className="mb-5">{t("eyebrow")}</Eyebrow>
        <h1 className="font-display font-black text-display-1 text-balance mx-auto max-w-4xl">
          {t("headlineP1")} <em>{t("headlineEmphasis")}</em> {t("headlineP2")}
        </h1>
        <p className="mt-8 font-sans text-body-lg text-charcoal-700 max-w-2xl mx-auto leading-relaxed">
          {t("shelfHeadline")}
        </p>
      </SectionContainer>

      <div className="my-20">
        <PatternDivider pattern="kente" thickness="medium" />
      </div>

      <SectionContainer size="wide">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {PRODUCTS.map((p) => (
            <article
              key={p.id}
              className="group relative rounded-soft-lg bg-white/60 border border-cream-100 p-5 shadow-card hover:shadow-card-hover transition-all duration-500 hover:-translate-y-2"
            >
              <PatternFramedImage
                src={p.imageUrl}
                alt={p.name}
                width={600}
                height={760}
                thickness="medium"
                pattern={
                  p.accentColor === "forest"
                    ? "bogolan"
                    : p.accentColor === "indigo"
                      ? "mudcloth"
                      : p.accentColor === "mango"
                        ? "woven"
                        : "ankara"
                }
                cornerAccent={p.accentColor as any}
                className="aspect-[4/5] mb-6"
                priority={false}
              />
              <Eyebrow className="mb-3" accent={p.accentColor as any}>
                {p.category}
              </Eyebrow>
              <h3 className="font-display font-black text-heading-1 mb-2">
                {p.name}
              </h3>
              <p
                className="font-sans text-body-md text-charcoal-700 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: p.description }}
              />
            </article>
          ))}
        </div>

        <div className="text-center mt-20">
          <Button href="/" variant="secondary" size="lg">
            ← {tNav("home")}
          </Button>
        </div>
      </SectionContainer>
    </main>
  );
}
