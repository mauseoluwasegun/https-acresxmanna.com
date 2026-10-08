"use client";

import { Link } from "@/i18n/routing";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { PatternDivider } from "@/components/animations/PatternDivider";
import { NAV_LINKS } from "@/lib/constants";
import {
  IconInstagram,
  IconLinkedIn,
  IconFacebook,
  IconTwitter,
  IconYoutube,
  IconMail,
  IconPhone,
  IconMapPin,
} from "@/components/ui/icons";

import { useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");

  const socials = [
    { icon: IconInstagram, label: "Instagram", href: "#" },
    { icon: IconLinkedIn, label: "LinkedIn", href: "#" },
    { icon: IconFacebook, label: "Facebook", href: "#" },
    { icon: IconTwitter, label: "X / Twitter", href: "#" },
    { icon: IconYoutube, label: "YouTube", href: "#" },
  ];

  const productCategories = [
    t("grainsFlours"),
    t("cocoaChocolate"),
    t("beveragesNectars"),
    t("sheaOils"),
    t("mealKits"),
  ];

  return (
    <footer className="relative bg-cream-50 pt-16 sm:pt-24 border-t border-cream-100">
      <div className="absolute top-0 inset-x-0">
        <PatternDivider pattern="kente" thickness="medium" />
      </div>
      <SectionContainer className="relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-16">
          {/* Logo + short */}
          <div className="lg:col-span-4">
            <div className="mb-5">
              <img
                src="/logos/cresx-manna-concept2-horizontal.svg"
                alt="Cresx Manna"
                className="h-12 w-auto"
              />
            </div>
            <p className="font-sans text-body-md text-charcoal-700 max-w-sm leading-relaxed">
              {t("tagline")}
            </p>
            <div className="mt-7 flex items-center gap-3">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 rounded-soft bg-cream-100 hover:bg-terracotta-500 border border-cream-100 hover:border-terracotta-500 text-charcoal-700 hover:text-white transition flex items-center justify-center"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div>
            <p className="font-mono text-label uppercase tracking-[0.12em] text-terracotta-700 mb-5">
              {t("navigate")}
            </p>
            <ul className="space-y-3 font-sans text-body-md text-charcoal-900">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="hover:text-terracotta-600 transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-5 h-[2px] bg-terracotta-500 transition-all duration-300" />
                    {l.href === "/" ? tNav("home") : tNav(l.href.replace("/", "") as any) || l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <p className="font-mono text-label uppercase tracking-[0.12em] text-terracotta-700 mb-5">
              {t("footerProducts")}
            </p>
            <ul className="space-y-3 font-sans text-body-md text-charcoal-900">
              {productCategories.map((item) => (
                <li key={item}>
                  <span className="inline-flex items-center gap-2 group">
                    <span className="w-0 group-hover:w-5 h-[2px] bg-terracotta-500 transition-all duration-300" />
                    {item}
                  </span>
                </li>
              ))}
              <li>
                <Link
                  href="/products"
                  className="text-terracotta-600 hover:text-terracotta-700 font-bold inline-flex items-center gap-2"
                >
                  {t("viewFullCatalog")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <p className="font-mono text-label uppercase tracking-[0.12em] text-terracotta-700 mb-5">
              {t("stayConnected")}
            </p>
            <ul className="space-y-4 font-sans text-body-md text-charcoal-700">
              <li className="flex items-start gap-3">
                <IconMapPin size={18} className="mt-0.5 shrink-0 text-terracotta-600" />
                <span>{t("location")}</span>
              </li>
              <li className="flex items-center gap-3">
                <IconMail size={18} className="shrink-0 text-terracotta-600" />
                <a
                  href="mailto:hello@cresxmanna.com"
                  className="hover:text-terracotta-600 transition-colors"
                >
                  hello@cresxmanna.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <IconPhone size={18} className="shrink-0 text-terracotta-600" />
                <a
                  href="tel:+233200000000"
                  className="hover:text-terracotta-600 transition-colors"
                >
                  +233 20 000 0000
                </a>
              </li>
            </ul>

            <form onSubmit={(e) => e.preventDefault()} className="mt-7">
              <label className="block font-sans text-sm font-bold text-charcoal-900 mb-2 uppercase tracking-[0.1em]">
                {t("newsletter")}
              </label>
              <p className="text-xs text-charcoal-700 mb-3">{t("newsletterDescription")}</p>
              <div className="flex rounded-soft overflow-hidden ring-1 ring-charcoal-900/10 focus-within:ring-2 focus-within:ring-mango-500">
                <input
                  type="email"
                  placeholder="you@email.com"
                  aria-label="Email address"
                  className="flex-1 px-4 py-3 text-sm bg-white outline-none text-charcoal-900 placeholder:text-charcoal-700/50"
                />
                <button
                  type="submit"
                  className="px-4 bg-terracotta-500 hover:bg-terracotta-600 transition-colors text-white font-bold text-sm uppercase tracking-[0.08em]"
                >
                  {t("subscribe")}
                </button>
              </div>
            </form>
          </div>
        </div>
      </SectionContainer>

      <div className="border-t border-charcoal-900/5 bg-cream-100/60">
        <SectionContainer className="py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-charcoal-700 font-sans">
          <p>© {new Date().getFullYear()} Cresx Manna. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-terracotta-600">{t("privacy")}</a>
            <a href="#" className="hover:text-terracotta-600">{t("terms")}</a>
            <a href="#" className="hover:text-terracotta-600">{t("cookies")}</a>
          </div>
        </SectionContainer>
      </div>
    </footer>
  );
}
