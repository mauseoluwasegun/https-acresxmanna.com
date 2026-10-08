import { SectionContainer } from "@/components/layout/SectionContainer";
import { PatternDivider } from "@/components/animations/PatternDivider";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { useTranslations } from "next-intl";

export default function WhatWeDoPage() {
  const t = useTranslations("farmToFood");
  const tNav = useTranslations("nav");

  return (
    <main id="main" className="pt-32 pb-24">
      <SectionContainer size="narrow" className="text-center">
        <Eyebrow className="mb-5">{t("eyebrow")}</Eyebrow>
        <h1 
          className="font-display font-black text-display-1 text-balance mx-auto"
          dangerouslySetInnerHTML={{ __html: t.raw("headline") }}
        />
        <p className="mt-8 font-sans text-body-lg text-charcoal-700 max-w-2xl mx-auto leading-relaxed">
          {t("description")}
        </p>
      </SectionContainer>

      <div className="my-24">
        <PatternDivider pattern="woven" thickness="medium" />
      </div>

      <SectionContainer className="text-center">
        <Button href="/" variant="secondary" size="lg">
          ← {tNav("home")}
        </Button>
      </SectionContainer>
    </main>
  );
}
