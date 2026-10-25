"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { Mail, Phone } from "lucide-react";
import { CONTACT_EMAIL, CONTACT_PHONE, INSTAGRAM_URL } from "@/lib/constants";

const LEGAL_LINKS = [
  { key: "privacyPolicy", href: "/privacy" },
  { key: "termsOfUse", href: "/terms" },
  { key: "cookiePolicy", href: "/cookies" },
];

const EXPLORE_LINKS = [
  { key: "aboutUs", href: "/about" },
  { key: "whatWeDo", href: "/what-we-do" },
  { key: "impact", href: "/impact" },
  { key: "globalMarkets", href: "/global-markets" },
  { key: "contactUs", href: "/contact" },
];

const PRODUCT_LINKS = [
  "grainsFlours",
  "cocoaChocolate",
  "beveragesNectars",
  "sheaOils",
  "mealKits",
];

const BRAND_LINKS = ["brand1Label", "brand2Label", "brand3Label", "brand4Label"];

export function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="relative bg-[#0a011d] text-white pt-20 pb-12 overflow-hidden border-t border-white/5">
      <SectionContainer size="wide">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14">
          {/* Column 1: Brand, tagline, social */}
          <div className="lg:col-span-4 pe-0 lg:pe-8">
            <Link href="/" className="inline-block group" aria-label={t("brandHomeAria")}>
              <img
                src="/brand/acres-manna-wordmark-white.png"
                alt={t("brandLogoAlt")}
                loading="lazy"
                className="h-10 sm:h-12 w-auto object-contain transition-opacity duration-300 group-hover:opacity-90"
              />
            </Link>
            <p className="mt-6 font-sans text-body-md text-white/80 leading-relaxed max-w-sm">
              {t("taglineText")}
            </p>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t("instagramAria")}
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 font-sans text-sm font-semibold text-white/80 transition-colors hover:border-white/40 hover:text-white"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-4 w-4"
              >
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
              </svg>
              Instagram
            </a>
          </div>

          {/* Column 2: Explore */}
          <div className="lg:col-span-2">
            <h3 className="font-display font-bold text-lg text-white mb-6 tracking-tight">
              {t("exploreHeading")}
            </h3>
            <ul className="space-y-4 font-sans text-body-md">
              {EXPLORE_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    {t(link.key as any)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Products */}
          <div className="lg:col-span-2">
            <h3 className="font-display font-bold text-lg text-white mb-6 tracking-tight">
              {t("footerProducts")}
            </h3>
            <ul className="space-y-4 font-sans text-body-md">
              {PRODUCT_LINKS.map((key) => (
                <li key={key}>
                  <Link
                    href="/products"
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    {t(key as any)}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/products"
                  className="font-semibold text-[#FDDC42] transition-colors hover:text-white"
                >
                  {t("viewFullCatalog")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Our Brands */}
          <div className="lg:col-span-2">
            <h3 className="font-display font-bold text-lg text-white mb-6 tracking-tight">
              {t("brandsHeading")}
            </h3>
            <ul className="space-y-4 font-sans text-body-md">
              {BRAND_LINKS.map((key) => (
                <li key={key}>
                  <Link
                    href="/our-brands"
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    {t(key as any)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Stay Connected */}
          <div className="lg:col-span-2">
            <h3 className="font-display font-bold text-lg text-white mb-6 tracking-tight">
              {t("stayConnected")}
            </h3>
            <ul className="space-y-4 font-sans text-body-md text-white/80">
              <li className="flex items-start gap-3">
                <Mail aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-white/50" />
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="break-all transition-colors hover:text-white"
                >
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-white/50" />
                <a
                  href={`tel:${CONTACT_PHONE.replace(/\s+/g, "")}`}
                  className="transition-colors hover:text-white"
                >
                  {CONTACT_PHONE}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Certified By strip */}
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
            <div className="max-w-xs">
              <h3 className="font-display font-bold text-lg text-white tracking-tight">
                {t("certifiedBy")}
              </h3>
              <p className="mt-2 font-sans text-xs leading-relaxed text-white/50">
                {t("certifiedByNote")}
              </p>
            </div>
            <img
              src="/images/brands/brand-ribbon.png"
              alt={t("certifiedByAlt")}
              loading="lazy"
              className="h-12 w-auto max-w-full object-contain sm:h-14 lg:h-16"
            />
          </div>
        </div>

        {/* Bottom copyright & legal bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-white/50 font-sans">
          <p>{t("copyrightLine", { year: new Date().getFullYear() })}</p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {LEGAL_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-white transition-colors"
              >
                {t(link.key as any)}
              </Link>
            ))}
          </div>
        </div>
      </SectionContainer>
    </footer>
  );
}
