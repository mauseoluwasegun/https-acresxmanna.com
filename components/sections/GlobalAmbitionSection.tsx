import { getTranslations } from "next-intl/server";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { MotionSection } from "@/components/animations/MotionSection";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SITE_LOCATIONS } from "@/lib/constants";

export async function GlobalAmbitionSection() {
  const t = await getTranslations("sections.globalAmbition");
  const locationLabels = await getTranslations("locations");
  return (
    <MotionSection className="bg-white py-20 sm:py-28">
      <SectionContainer size="wide">
        <div className="max-w-3xl">
          <Eyebrow className="mb-5">{t("eyebrow")}</Eyebrow>
          <h2 className="font-display text-display-1 font-black">
            {t("headline")}
          </h2>
          <p className="mt-6 font-sans text-body-lg leading-relaxed text-charcoal-700">
            {t("description")}
          </p>
        </div>
        <div className="mt-12 grid gap-8 border-t border-cream-200 pt-10 sm:grid-cols-3">
          {SITE_LOCATIONS.map(({ id, address }) => (
            <address key={id} className="not-italic">
              <Eyebrow className="mb-3">{locationLabels(id)}</Eyebrow>
              <p className="font-sans text-body-md leading-relaxed text-charcoal-700">
                {address}
              </p>
            </address>
          ))}
        </div>
      </SectionContainer>
    </MotionSection>
  );
}
