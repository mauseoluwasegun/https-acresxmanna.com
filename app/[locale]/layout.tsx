import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { fontDisplay, fontSans, fontMono } from "@/lib/fonts";
import { SiteHeader } from "@/components/navigation/SiteHeader";
import { Footer } from "@/components/footer/Footer";
import { routing } from "@/i18n/routing";
import "../globals.css";

const SITE_URL = "https://acresxmanna.com";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'hero' });
  
  return {
    title: {
      default: "Acres X Manna — Africa's Richness, Transformed Into Great Food",
      template: "%s · Acres X Manna",
    },
    description: t('subheadline'),
  } satisfies Metadata;
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FAF6F0" },
    { media: "(prefers-color-scheme: dark)", color: "#1A1A1A" },
  ],
  width: "device-width",
  initialScale: 1,
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${fontDisplay.variable} ${fontSans.variable} ${fontMono.variable}`}
    >
      <body className="bg-cream-100 text-charcoal-900 antialiased">
        <NextIntlClientProvider messages={messages}>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-soft focus:bg-terracotta-500 focus:px-5 focus:py-3 focus:font-sans focus:font-bold focus:text-white"
          >
            Skip to content
          </a>
          <SiteHeader />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
