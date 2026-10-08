import { SectionContainer } from "@/components/layout/SectionContainer";
import { PatternDivider } from "@/components/animations/PatternDivider";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { useTranslations } from "next-intl";

export default function AboutPage() {
  const t = useTranslations("about");
  const tNav = useTranslations("nav");

  return (
    <main id="main" className="pt-32 pb-24">
      <SectionContainer size="narrow" className="text-center">
        <Eyebrow className="mb-5">{t("originEyebrow")}</Eyebrow>
        <h1 
          className="font-display font-black text-display-1 text-balance mx-auto"
          dangerouslySetInnerHTML={{ __html: t.raw("pillarsHeadline") }}
        />
        <p className="mt-8 font-sans text-body-lg text-charcoal-700 max-w-2xl mx-auto leading-relaxed">
          {t("originParagraph1")}
        </p>
        <p className="mt-4 font-sans text-body-md text-charcoal-700 max-w-2xl mx-auto leading-relaxed">
          {t("originParagraph2")}
        </p>
      </SectionContainer>

      <div className="my-24">
        <PatternDivider pattern="mudcloth" thickness="medium" />
      </div>

      <SectionContainer className="text-center">
        <p className="font-mono text-label uppercase tracking-[0.12em] text-terracotta-700 mb-4">
          {t("dividerEyebrow")}
        </p>
        <Button href="/" variant="secondary" size="lg">
          ← {tNav("home")}
        </Button>
      </SectionContainer>
    </main>
  );
}
