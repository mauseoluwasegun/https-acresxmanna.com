"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";
import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

const languages = [
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "tw", name: "Twi", flag: "🇬🇭" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "ru", name: "Русский", flag: "🇷🇺" },
  { code: "pt", name: "Português", flag: "🇵🇹" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" },
  { code: "it", name: "Italiano", flag: "🇮🇹" },
  { code: "ar", name: "العربية", flag: "🇦🇪" },
  { code: "zh-CN", name: "简体中文", flag: "🇨🇳" },
  { code: "nl", name: "Nederlands", flag: "🇳🇱" },
];

export function LanguageSwitcher({ isLight }: { isLight?: boolean }) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations("languageSwitcher");
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
        <span className="text-lg leading-none">{currentLang.flag}</span>
        <span className="uppercase">{currentLang.code}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border border-charcoal-900/10 rounded-soft-lg shadow-xl overflow-hidden z-50">
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
                <span className="text-base">{lang.flag}</span>
                <span>{lang.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
