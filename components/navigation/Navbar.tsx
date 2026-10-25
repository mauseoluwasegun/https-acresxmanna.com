"use client";

import { Link, usePathname, useRouter } from "@/i18n/routing";
import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { NAV_LINKS } from "@/lib/constants";
import { Logo } from "@/components/navigation/Logo";
import { Button } from "@/components/ui/Button";
import { IconChevronRight, IconMenu, IconX } from "@/components/ui/icons";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useTranslations } from "next-intl";

const NAV_KEY_MAP: Record<string, string> = {
  "/": "home",
  "/about": "about",
  "/what-we-do": "whatWeDo",
  "/products": "products",
  "/our-brands": "brands",
  "/infrastructure": "infrastructure",
  "/impact": "impact",
  "/global-markets": "globalMarkets",
  "/investors-partners": "investorsPartners",
  "/news-insights": "newsInsights",
  "/contact": "contact",
};

const PRIMARY_NAV_LINKS = NAV_LINKS.slice(0, 6);

const MORE_NAV_LINKS = NAV_LINKS.filter(({ href }) =>
  [
    "/impact",
    "/global-markets",
    "/investors-partners",
    "/news-insights",
  ].includes(href),
);

const REST_NAV_LINKS = NAV_LINKS.filter(({ href }) => href === "/contact");

export function Navbar({ onOpenMenu }: { onOpenMenu: () => void }) {
  const pathname = usePathname();
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const t = useTranslations("nav");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 300);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isLight = pathname === "/" && !scrolled;
  const textClass = isLight ? "text-white" : "text-charcoal-900";
  const hoverClass = isLight ? "hover:text-mango-400" : "hover:text-terracotta-600";

  return (
    <motion.header
      initial={false}
      animate={{ y: 0, opacity: 1 }}
      style={{ paddingTop: "env(safe-area-inset-top)" }}
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-colors duration-300 will-change-transform",
        scrolled
          ? "bg-cream-100/95 backdrop-blur supports-[backdrop-filter]:bg-cream-100/80 shadow-[0_6px_30px_-20px_rgba(26,26,26,0.25)] border-b border-cream-50"
          : "bg-transparent",
      )}
    >
      <div className="container-page flex items-center justify-between h-16 sm:h-20">
        <Logo
          variant={pathname === "/" && !scrolled ? "dark" : "light"}
          onClick={() => router.push("/")}
        />

        <nav
          className="hidden lg:flex min-w-0 items-center gap-3 xl:gap-5"
          aria-label={t("primaryAria")}
        >
          {PRIMARY_NAV_LINKS.map((link) => {
            const active =
              pathname === link.href ||
              (link.href !== "/" && pathname?.startsWith(link.href));
            const navKey = NAV_KEY_MAP[link.href];
            const label = navKey ? t(navKey as any) : link.label;

            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "group relative whitespace-nowrap font-sans font-bold uppercase tracking-[0.08em] xl:tracking-[0.12em] text-xs xl:text-sm py-2 transition-colors",
                  textClass,
                  hoverClass,
                )}
              >
                {label}
                <span
                  aria-hidden
                  className={cn(
                    "absolute start-0 -bottom-0.5 h-[2px] w-0 transition-all duration-300 ease-spring group-hover:w-full",
                    active ? "w-full" : "",
                    isLight ? "bg-mango-400" : "bg-terracotta-500",
                  )}
                />
              </Link>
            );
          })}

          <details className="group/more relative">
            <summary
              className={cn(
                "relative cursor-pointer list-none whitespace-nowrap py-2 font-sans font-bold uppercase tracking-[0.08em] xl:tracking-[0.12em] text-xs xl:text-sm",
                textClass,
                hoverClass,
                MORE_NAV_LINKS.some(
                  ({ href }) => pathname === href || pathname?.startsWith(href),
                ) && "text-terracotta-600",
              )}
            >
              {t("more")}
              <span
                aria-hidden
                className="ms-1 inline-block border-b-2 border-e-2 border-current p-[2px] align-[3px] rotate-45 rtl:-rotate-45"
              />
            </summary>
            <div className="absolute end-0 top-full z-50 mt-3 w-60 rounded-soft-lg border border-cream-100 bg-cream-50 p-2 shadow-card">
              {MORE_NAV_LINKS.map((link) => {
                const active = pathname === link.href || pathname?.startsWith(link.href);
                const navKey = NAV_KEY_MAP[link.href];

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "block rounded-soft px-3 py-2.5 font-sans text-sm font-bold transition-colors hover:bg-cream-100 hover:text-terracotta-600",
                      active ? "text-terracotta-600" : "text-charcoal-900",
                    )}
                  >
                    {navKey ? t(navKey as any) : link.label}
                  </Link>
                );
              })}
            </div>
          </details>

          <div className="flex shrink-0 items-center gap-2 xl:gap-4">
            <LanguageSwitcher isLight={isLight} />
            <Button
              href="/contact"
              variant="primary"
              size="md"
              className="px-3 py-3 text-xs xl:px-6 xl:py-3.5 xl:text-sm"
              ariaLabel={t("contact")}
            >
              {t("letsTalk")}
            </Button>
          </div>
        </nav>

        <button
          type="button"
          aria-label={t("openMenu")}
          onClick={onOpenMenu}
          className={cn(
            "lg:hidden p-2.5 rounded-soft transition-colors",
            textClass,
            hoverClass,
            isLight ? "hover:bg-white/10" : "hover:bg-charcoal-900/5",
          )}
        >
          <IconMenu size={26} />
        </button>
      </div>
    </motion.header>
  );
}

export function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const pathname = usePathname();
  const reduce = useReducedMotion();
  const t = useTranslations("nav");
  const [moreOpen, setMoreOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    setMoreOpen(
      MORE_NAV_LINKS.some(
        ({ href }) => pathname === href || pathname?.startsWith(href),
      ),
    );
  }, [open, pathname]);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  const backdrop = {
    open: {
      opacity: 1,
      transition: { duration: 0.3, ease: "easeOut" as any },
    },
    closed: {
      opacity: 0,
      transition: { duration: 0.25, ease: "easeIn" as any },
    },
  };

  const panel = reduce
    ? {
        open: { opacity: 1, transition: { duration: 0.2 } as any },
        closed: { opacity: 0, transition: { duration: 0.15 } as any },
      }
    : {
        open: {
          x: 0,
          transition: {
            type: "spring",
            stiffness: 320,
            damping: 34,
            staggerChildren: 0.045,
            delayChildren: 0.08,
          } as any,
        },
        closed: {
          x: "100%",
          transition: { duration: 0.3, ease: "easeInOut" as any },
        },
      };

  const item = reduce
    ? {
        open: { opacity: 1 },
        closed: { opacity: 0 },
      }
    : {
        open: {
          opacity: 1,
          x: 0,
          transition: { type: "spring", stiffness: 260, damping: 26 } as any,
        },
        closed: { opacity: 0, x: 28 },
      };

  const moreActive = MORE_NAV_LINKS.some(
    ({ href }) => pathname === href || pathname?.startsWith(href),
  );

  const renderNavLink = (link: (typeof NAV_LINKS)[number], compact = false) => {
    const active =
      pathname === link.href ||
      (link.href !== "/" && pathname?.startsWith(link.href));
    const navKey = NAV_KEY_MAP[link.href];
    const label = navKey ? t(navKey as any) : link.label;

    const row = (
      <Link
        href={link.href}
        onClick={onClose}
        aria-current={active ? "page" : undefined}
        className={cn(
          "flex items-center rounded-soft font-sans font-bold transition-colors",
          compact ? "px-3 py-2.5 text-sm" : "px-3 py-3 text-[15px]",
          active
            ? "bg-terracotta-500/10 text-terracotta-600"
            : "text-charcoal-900 hover:bg-charcoal-900/5 hover:text-terracotta-600",
        )}
      >
        <span className="truncate">{label}</span>
      </Link>
    );

    return compact ? (
      <div key={link.href}>{row}</div>
    ) : (
      <motion.div key={link.href} variants={item}>
        {row}
      </motion.div>
    );
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            variants={backdrop}
            initial="closed"
            animate="open"
            exit="closed"
            onClick={onClose}
            aria-hidden
            className="fixed inset-0 z-[80] bg-charcoal-900/40 backdrop-blur-sm"
          />
          <motion.nav
            variants={panel}
            initial="closed"
            animate="open"
            exit="closed"
            aria-label={t("mobileAria")}
            style={{
              paddingTop: "env(safe-area-inset-top)",
              paddingBottom: "env(safe-area-inset-bottom)",
            }}
            className="fixed inset-y-0 end-0 z-[90] flex w-[86%] max-w-[380px] flex-col overflow-hidden bg-cream-100 shadow-[-30px_0_70px_-35px_rgba(26,26,26,0.5)] rtl:shadow-[30px_0_70px_-35px_rgba(26,26,26,0.5)]"
          >
            <div
              aria-hidden
              className="absolute inset-0 bg-ankara pattern-watermark opacity-[0.07]"
            />

            <div className="relative flex h-16 shrink-0 items-center justify-between gap-2 border-b border-cream-50 px-3">
              <Logo variant="light" onClick={onClose} />
              <button
                type="button"
                onClick={onClose}
                aria-label={t("closeMenu")}
                className="shrink-0 rounded-soft p-2.5 text-charcoal-900 transition-colors hover:bg-charcoal-900/5"
              >
                <IconX size={22} />
              </button>
            </div>

            <div className="relative flex-1 overflow-y-auto overscroll-contain px-2 py-2">
              {PRIMARY_NAV_LINKS.map((link) => renderNavLink(link))}

              <motion.div variants={item}>
                <button
                  type="button"
                  onClick={() => setMoreOpen((value) => !value)}
                  aria-expanded={moreOpen}
                  className={cn(
                    "flex w-full items-center justify-between gap-3 px-3 py-3 font-sans text-xs font-bold uppercase tracking-[0.08em] transition-colors",
                    moreActive
                      ? "text-terracotta-600"
                      : "text-charcoal-700 hover:text-terracotta-600",
                  )}
                >
                  <span>{t("more")}</span>
                  <IconChevronRight
                    size={16}
                    className={cn(
                      "shrink-0 transition-transform duration-300",
                      moreOpen && "rotate-90",
                    )}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {moreOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="ms-5 border-s border-cream-50 ps-1">
                        {MORE_NAV_LINKS.map((link) => renderNavLink(link, true))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {REST_NAV_LINKS.map((link) => renderNavLink(link))}
            </div>

            <motion.div
              variants={item}
              className="relative flex shrink-0 flex-col gap-3 border-t border-cream-50 px-3 py-4"
            >
              <LanguageSwitcher dropUp />
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                className="w-full"
                ariaLabel={t("contact")}
              >
                {t("letsTalk")}
              </Button>
            </motion.div>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  );
}
