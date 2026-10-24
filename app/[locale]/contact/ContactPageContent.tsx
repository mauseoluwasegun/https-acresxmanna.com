import { getTranslations } from "next-intl/server";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { PatternDivider } from "@/components/animations/PatternDivider";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  SITE_LOCATIONS,
} from "@/lib/constants";
import { BusinessFaq } from "@/components/sections/BusinessFaq";
import { EnquiryForm } from "@/components/forms/EnquiryForm";

export async function ContactPageContent() {
  const t = await getTranslations("pages.contact");
  const locationLabels = await getTranslations("locations");

  return (
    <main id="main" className="pb-24 pt-32">
      <SectionContainer size="wide">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <Eyebrow className="mb-5">{t("eyebrow")}</Eyebrow>
            <h1 className="font-display text-display-1 font-black">
              {t("heading")}
            </h1>
            <p className="mt-8 max-w-lg font-sans text-body-lg leading-relaxed text-charcoal-700">
              {t("intro")}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href={`mailto:${CONTACT_EMAIL}`} variant="primary" size="lg">
                {t("emailCta")}
              </Button>
              <Button
                href={`https://wa.me/${CONTACT_PHONE.replace(/\D/g, "")}`}
                variant="secondary"
                size="lg"
              >
                {t("whatsappCta")}
              </Button>
            </div>
            <p className="mt-6 font-sans text-body-md text-charcoal-700">
              {t.rich("callUs", {
                phone: (chunks) => (
                  <a
                    href={`tel:${CONTACT_PHONE.replace(/\s/g, "")}`}
                    className="font-bold text-purple-700 underline underline-offset-4"
                  >
                    {chunks}
                  </a>
                ),
              })}
            </p>
          </div>

          <div className="space-y-4">
            <div className="rounded-3xl border border-cream-200 bg-cream-50 p-6">
              <Eyebrow className="mb-3">{t("emailLabel")}</Eyebrow>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="break-all font-sans text-body-lg font-bold text-purple-700 underline underline-offset-4"
              >
                {CONTACT_EMAIL}
              </a>
            </div>
            {SITE_LOCATIONS.map(({ id, address }) => (
              <address
                key={id}
                className="rounded-3xl border border-cream-200 bg-white p-6 not-italic"
              >
                <Eyebrow className="mb-3">{locationLabels(id)}</Eyebrow>
                <p className="font-sans text-body-md leading-relaxed text-charcoal-700">
                  {address}
                </p>
              </address>
            ))}
          </div>
        </div>
      </SectionContainer>

      <div className="my-24">
        <PatternDivider pattern="kente" thickness="medium" />
      </div>

      <SectionContainer size="wide">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <Eyebrow className="mb-5">{t("formEyebrow")}</Eyebrow>
            <h2 className="font-display text-display-2 font-black">
              {t("formHeading")}
            </h2>
            <p className="mt-6 font-sans text-body-md leading-relaxed text-charcoal-700">
              {t("formBody")}
            </p>
          </div>
          <div className="rounded-3xl border border-cream-200 bg-white p-7 shadow-card">
            <EnquiryForm
              enquiryType="other"
              submitLabel={t("submitLabel")}
              showEnquiryType
            />
          </div>
        </div>
      </SectionContainer>

      <div className="my-24">
        <PatternDivider pattern="kente" thickness="medium" />
      </div>
      <BusinessFaq />
    </main>
  );
}
