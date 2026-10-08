import { Hero } from "@/components/hero/Hero";
import { PatternDivider } from "@/components/animations/PatternDivider";
import { MotionSection } from "@/components/animations/MotionSection";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { HandDrawnIcon } from "@/components/ui/HandDrawnIcon";
import { Button } from "@/components/ui/Button";
import { FARM_TO_FOOD_STAGES } from "@/lib/constants";
import { AboutSection } from "@/components/sections/AboutSection";
import { ProductsSection } from "@/components/sections/ProductsSection";
import { StakeholderCube } from "@/components/sections/StakeholderCube";
import { ManufacturingSection } from "@/components/sections/ManufacturingSection";
import { ImpactSection } from "@/components/sections/ImpactSection";
import { GlobalAmbitionSection } from "@/components/sections/GlobalAmbitionSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations("farmToFood");

  return (
    <main id="main">
      <Hero />

      <PatternDivider
        pattern="kente"
        thickness="bold"
        eyebrow={t("sectionEyebrow")}
        eyebrowAccent="terracotta"
      />

      <MotionSection
        id="farm-to-food"
        className="py-20 sm:py-28 bg-cream-50 relative overflow-hidden"
      >
        <SectionContainer size="wide">
          <div className="text-center mb-16 sm:mb-20">
            <Eyebrow className="mb-5">{t("eyebrow")}</Eyebrow>
            <h2 
              className="font-display font-black text-display-1 text-balance max-w-3xl mx-auto"
              dangerouslySetInnerHTML={{ __html: t.raw("headline") }}
            />
            <p className="mt-6 max-w-2xl mx-auto font-sans text-body-lg text-charcoal-700">
              {t("description")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {FARM_TO_FOOD_STAGES.map((stage, i) => {
              const stageKey = `s${i + 1}` as "s1" | "s2" | "s3" | "s4" | "s5" | "s6";
              const stageEyebrow = t(`stages.${stageKey}.eyebrow`);
              const stageHeadline = t.raw(`stages.${stageKey}.headline`);
              const stageDesc = t(`stages.${stageKey}.description`);

              return (
                <article
                  key={stage.num}
                  className="group relative rounded-soft-lg p-6 sm:p-8 bg-white/60 border border-cream-100 hover:border-terracotta-500/40 transition-colors duration-500 shadow-card hover:shadow-card-hover"
                >
                  <div className="absolute top-4 right-6 font-display font-black text-6xl sm:text-7xl leading-none text-charcoal-900/5 group-hover:text-terracotta-600/10 transition-colors">
                    {stage.num}
                  </div>
                  <HandDrawnIcon
                    name={stage.icon as any}
                    size={44}
                    color={stage.accent as any}
                    withFrame
                    className="mb-6"
                  />
                  <Eyebrow className="mb-3" accent={stage.accent as any}>
                    {stageEyebrow || stage.eyebrow}
                  </Eyebrow>
                  <h3
                    className="font-display font-black text-heading-1 mb-3"
                    dangerouslySetInnerHTML={{ __html: stageHeadline || stage.headline }}
                  />
                  <p className="font-sans text-body-md text-charcoal-700 leading-relaxed">
                    {stageDesc || stage.description}
                  </p>
                </article>
              );
            })}
          </div>

          <div className="text-center mt-16">
            <Button href="/what-we-do" variant="ghost" size="lg">
              {t("exploreProcess")}
            </Button>
          </div>
        </SectionContainer>
      </MotionSection>

      <AboutSection />
      <ProductsSection />
      <StakeholderCube />
      <ManufacturingSection />
      <ImpactSection />
      <GlobalAmbitionSection />
      <FinalCTASection />
    </main>
  );
}
