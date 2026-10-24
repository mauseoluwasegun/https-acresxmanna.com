"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";
import { useState, useRef, useEffect } from "react";
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
  const [isOpen, setIsOpen] = useState(false);
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

  const switchLanguage = (newLocale: string) => {
    setIsOpen(false);
    // Set cookie for next-intl
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000; SameSite=Lax`;
    
    // Get the current path without locale prefix
    let cleanPath = pathname || "/";
    if (cleanPath === "") cleanPath = "/";
    
    // Construct target URL
    const targetUrl = newLocale === "en" ? cleanPath : `/${newLocale}${cleanPath === "/" ? "" : cleanPath}`;
    window.location.href = targetUrl;
  };

  const currentLang = languages.find((lang) => lang.code === locale) || languages[0];

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "flex items-center gap-2 px-3 py-2 text-sm font-bold tracking-wide transition-colors rounded-soft",
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
            "absolute right-0 w-48 bg-white border border-charcoal-900/10 rounded-soft-lg shadow-xl overflow-hidden z-50",
            dropUp ? "bottom-full mb-2" : "mt-2"
          )}
        >
          <div className="py-2 max-h-64 overflow-y-auto">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => switchLanguage(lang.code)}
                className={cn(
                  "w-full text-left px-4 py-2 text-sm flex items-center gap-3 transition-colors",
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
