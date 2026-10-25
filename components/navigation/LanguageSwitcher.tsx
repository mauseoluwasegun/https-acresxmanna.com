"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";
import { useSearchParams } from "next/navigation";
import { useState, useRef, useEffect, useTransition } from "react";
import { cn } from "@/lib/utils";

// Language names are shown in their own language (endonyms) so the menu is
// recognisable whichever site language is active.
const languages = [
  { code: "en", flag: "gb", label: "English" },
  { code: "fr", flag: "fr", label: "Français" },
  { code: "tw", flag: "gh", label: "Twi" },
  { code: "es", flag: "es", label: "Español" },
  { code: "ru", flag: "ru", label: "Русский" },
  { code: "pt", flag: "pt", label: "Português" },
  { code: "de", flag: "de", label: "Deutsch" },
  { code: "it", flag: "it", label: "Italiano" },
  { code: "ar", flag: "ae", label: "العربية" },
  { code: "zh-CN", flag: "cn", label: "简体中文" },
  { code: "nl", flag: "nl", label: "Nederlands" },
];

export function LanguageSwitcher({ isLight, dropUp }: { isLight?: boolean; dropUp?: boolean }) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Locale switches go through next-intl's router so the page swaps in place.
  // A full `window.location` reload left the old language on screen until the
  // new locale finished compiling, which read as "the switcher does nothing".
  const switchLanguage = (newLocale: string) => {
    if (newLocale === locale) {
      setIsOpen(false);
      return;
    }
    setIsOpen(false);
    const query = searchParams?.toString();
    const href = query ? `${pathname || "/"}?${query}` : pathname || "/";
    startTransition(() => {
      router.replace(href, { locale: newLocale });
    });
  };

  const currentLang = languages.find((lang) => lang.code === locale) || languages[0];

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-busy={isPending}
        aria-haspopup="menu"
        aria-expanded={isOpen}
        className={cn(
          "flex items-center gap-2 px-3 py-2 text-sm font-bold tracking-wide transition-colors rounded-soft",
          isPending && "opacity-60",
          isLight
            ? "text-white hover:bg-white/10"
            : "text-charcoal-900 hover:bg-charcoal-900/5 hover:text-terracotta-600"
        )}
      >
        <img
          src={`/flags/${currentLang.flag}.svg`}
          alt=""
          aria-hidden="true"
          className="h-4 w-6 object-contain"
          loading="lazy"
        />
        <span className="uppercase">{currentLang.code}</span>
      </button>

      {isOpen && (
        <div
          className={cn(
            "absolute end-0 w-48 bg-white border border-charcoal-900/10 rounded-soft-lg shadow-xl overflow-hidden z-50",
            dropUp ? "bottom-full mb-2" : "mt-2"
          )}
        >
          <div className="py-2 max-h-64 overflow-y-auto">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => switchLanguage(lang.code)}
                className={cn(
                  "w-full text-start px-4 py-2 text-sm flex items-center gap-3 transition-colors",
                  locale === lang.code
                    ? "bg-cream-100 text-terracotta-600 font-bold"
                    : "text-charcoal-700 hover:bg-cream-50 hover:text-charcoal-900"
                )}
              >
                <img
                  src={`/flags/${lang.flag}.svg`}
                  alt=""
                  aria-hidden="true"
                  className="h-4 w-6 object-contain"
                  loading="lazy"
                />
                <span>{lang.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
