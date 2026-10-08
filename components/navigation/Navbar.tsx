"use client";

import { Link, usePathname, useRouter } from "@/i18n/routing";
import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { NAV_LINKS } from "@/lib/constants";
import { Logo } from "@/components/navigation/Logo";
import { Button } from "@/components/ui/Button";
import { IconMenu, IconX } from "@/components/ui/icons";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useTranslations } from "next-intl";

const NAV_KEY_MAP: Record<string, string> = {
  "/": "home",
  "/about": "about",
  "/products": "products",
  "/what-we-do": "whatWeDo",
  "/impact": "impact",
  "/contact": "contact",
};

export function Navbar({ onOpenMenu }: { onOpenMenu: () => void }) {
  const pathname = usePathname();
  const router = useRouter();
  const reduce = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const t = useTranslations("nav");
  const tHero = useTranslations("hero");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 300);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isLight = !scrolled && pathname === "/";
  const textClass = isLight ? "text-white" : "text-charcoal-900";
  const hoverClass = isLight ? "hover:text-mango-400" : "hover:text-terracotta-600";

  return (
    <motion.header
      initial={reduce ? {} : { y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 180, damping: 24, delay: 0.1 } as any}
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-colors duration-300 will-change-transform",
        scrolled
          ? "bg-cream-100/95 backdrop-blur supports-[backdrop-filter]:bg-cream-100/80 shadow-[0_6px_30px_-20px_rgba(26,26,26,0.25)] border-b border-cream-50"
          : "bg-transparent",
      )}
    >
      <div className="container-page flex items-center justify-between h-16 sm:h-20">
        <Logo
          variant={isLight ? "light" : "dark"}
          onClick={() => router.push("/")}
        />

        <nav
          className="hidden lg:flex items-center gap-8"
          aria-label="Primary"
        >
          {NAV_LINKS.map((link) => {
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
                  "group relative font-sans font-bold uppercase tracking-[0.12em] text-sm py-2 transition-colors",
                  textClass,
                  hoverClass,
                )}
              >
                {label}
                <span
                  aria-hidden
                  className={cn(
                    "absolute left-0 -bottom-0.5 h-[2px] w-0 transition-all duration-300 ease-spring group-hover:w-full",
                    active ? "w-full" : "",
                    isLight ? "bg-mango-400" : "bg-terracotta-500",
                  )}
                />
              </Link>
            );
          })}

          <div className="pl-2 flex items-center gap-4">
            <LanguageSwitcher isLight={isLight} />
            <Button
              href="/contact?type=partner"
              variant="primary"
              size="md"
              ariaLabel={tHero("cta.partner")}
            >
              {tHero("cta.partner")}
            </Button>
          </div>
        </nav>

        <button
          type="button"
          aria-label="Open menu"
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
  const tHero = useTranslations("hero");

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

  const panel = {
    open: {
      clipPath: "circle(150% at 95% 5%)",
      transition: {
        type: "spring",
        stiffness: 220,
        damping: 26,
        staggerChildren: 0.07,
        delayChildren: 0.1,
      } as any,
    },
    closed: {
      clipPath: "circle(0% at 95% 5%)",
      transition: { duration: 0.35, ease: "easeInOut" as any },
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
          y: 0,
          rotate: 0,
          transition: { type: "spring", stiffness: 200, damping: 22 } as any,
        },
        closed: { opacity: 0, y: 40, rotate: -2 },
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
            aria-label="Mobile"
            className="fixed inset-0 z-[90] bg-cream-100 overflow-hidden"
          >
            <div
              aria-hidden
              className="absolute inset-0 bg-ankara pattern-watermark opacity-[0.08]"
            />
            <div aria-hidden className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-terracotta-500/20 animate-blob-drift" />
            <div aria-hidden className="absolute bottom-10 right-0 w-72 h-72 rounded-full bg-mango-400/25 animate-blob-drift" style={{ animationDelay: "2s" }} />
            <div aria-hidden className="absolute top-1/3 left-10 w-40 h-40 rounded-full bg-forest-600/10 animate-blob-drift" style={{ animationDelay: "4s" }} />

            <div className="container-page relative h-full flex flex-col">
              <div className="flex items-center justify-between h-20">
                <Logo variant="dark" onClick={onClose} />
                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close menu"
                  className="p-2.5 rounded-soft text-charcoal-900 hover:bg-charcoal-900/5 transition-colors"
                >
                  <IconX size={28} />
                </button>
              </div>

              <div className="flex-1 flex flex-col justify-center gap-2 sm:gap-4 -mt-12">
                {NAV_LINKS.map((link, i) => {
                  const active =
                    pathname === link.href ||
                    (link.href !== "/" && pathname?.startsWith(link.href));
                  const navKey = NAV_KEY_MAP[link.href];
                  const label = navKey ? t(navKey as any) : link.label;

                  return (
                    <motion.div
                      key={link.href}
                      variants={item}
                      custom={i}
                    >
                      <Link
                        href={link.href}
                        onClick={onClose}
                        aria-current={active ? "page" : undefined}
                        className={cn(
                          "block font-display font-black leading-[0.95] py-2 transition-colors",
                          "text-[clamp(2.4rem,7vw,4.5rem)]",
                          active
                            ? "text-terracotta-600"
                            : "text-charcoal-900 hover:text-terracotta-600",
                        )}
                      >
                        {label}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              <motion.div
                variants={item}
                className="pb-12 pt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
              >
                <div className="flex justify-start">
                  <LanguageSwitcher />
                </div>
                <Button
                  href="/contact?type=partner"
                  variant="primary"
                  size="lg"
                  className="w-full"
                  ariaLabel={tHero("cta.partner")}
                >
                  {tHero("cta.partner")}
                </Button>
              </motion.div>
            </div>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  );
}
