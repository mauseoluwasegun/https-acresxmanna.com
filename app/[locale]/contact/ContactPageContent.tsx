"use client";

import { SectionContainer } from "@/components/layout/SectionContainer";
import { PatternDivider } from "@/components/animations/PatternDivider";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";

import { useTranslations } from "next-intl";

export function ContactPageContent() {
  const t = useTranslations("cta");
  const tNav = useTranslations("nav");

  return (
    <main id="main" className="pt-32 pb-24">
      <SectionContainer size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div>
            <Eyebrow className="mb-5">{t("eyebrow")}</Eyebrow>
            <h1 
              className="font-display font-black text-display-1 text-balance"
              dangerouslySetInnerHTML={{ __html: t.raw("headline") }}
            />
            <p className="mt-8 font-sans text-body-lg text-charcoal-700 leading-relaxed max-w-lg">
              {t("description")}
            </p>
            <div className="mt-8 space-y-3 font-mono text-sm text-charcoal-700">
              <p>{t("emailLabel")}</p>
              <p>{t("phoneLabel")}</p>
              <p>{t("hqLabel")}</p>
            </div>
          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="rounded-soft-lg bg-white/60 border border-cream-100 shadow-card p-6 sm:p-8 space-y-5"
          >
            <div>
              <label className="block font-mono text-label uppercase tracking-[0.12em] text-terracotta-700 mb-2">
                {t("placeholderName")}
              </label>
              <input
                placeholder={t("placeholderName")}
                className="w-full rounded-soft border border-charcoal-900/10 bg-cream-50 px-4 py-3 outline-none focus:ring-2 focus:ring-mango-500"
              />
            </div>

            <div>
              <label className="block font-mono text-label uppercase tracking-[0.12em] text-terracotta-700 mb-2">
                {t("placeholderEmail")}
              </label>
              <input
                type="email"
                placeholder={t("placeholderEmail")}
                className="w-full rounded-soft border border-charcoal-900/10 bg-cream-50 px-4 py-3 outline-none focus:ring-2 focus:ring-mango-500"
              />
            </div>

            <div>
              <label className="block font-mono text-label uppercase tracking-[0.12em] text-terracotta-700 mb-2">
                {t("placeholderCompany")}
              </label>
              <input
                placeholder={t("placeholderCompany")}
                className="w-full rounded-soft border border-charcoal-900/10 bg-cream-50 px-4 py-3 outline-none focus:ring-2 focus:ring-mango-500"
              />
            </div>

            <div>
              <label className="block font-mono text-label uppercase tracking-[0.12em] text-terracotta-700 mb-2">
                {t("selectDefault")}
              </label>
              <select className="w-full rounded-soft border border-charcoal-900/10 bg-cream-50 px-4 py-3 outline-none focus:ring-2 focus:ring-mango-500">
                <option>{t("selectConsumer")}</option>
                <option>{t("selectFarmer")}</option>
                <option>{t("selectDistributor")}</option>
                <option>{t("selectPartner")}</option>
                <option>{t("selectInvestor")}</option>
                <option>{t("selectPress")}</option>
                <option>{t("selectJobSeeker")}</option>
              </select>
            </div>

            <div>
              <label className="block font-mono text-label uppercase tracking-[0.12em] text-terracotta-700 mb-2">
                {t("placeholderMessage")}
              </label>
              <textarea
                rows={5}
                placeholder={t("placeholderMessage")}
                className="w-full rounded-soft border border-charcoal-900/10 bg-cream-50 px-4 py-3 outline-none focus:ring-2 focus:ring-mango-500 resize-none"
              />
            </div>

            <Button type="submit" variant="primary" size="lg" className="w-full">
              {t("sendInquiry")}
            </Button>
          </form>
        </div>
      </SectionContainer>

      <div className="my-24">
        <PatternDivider pattern="kente" thickness="medium" />
      </div>

      <SectionContainer className="text-center">
        <Button href="/" variant="secondary" size="lg" icon="none">
          ← {tNav("home")}
        </Button>
      </SectionContainer>
    </main>
  );
}
