import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { fontDisplay, fontSans, fontMono, fontLogo } from "@/lib/fonts";
import { SiteHeader } from "@/components/navigation/SiteHeader";
import { Footer } from "@/components/footer/Footer";
import { CookieConsent } from "@/components/ui/CookieConsent";
import { CONTACT_EMAIL, CONTACT_PHONE, INSTAGRAM_URL, SITE_NAME, SITE_URL } from "@/lib/constants";
import { routing } from "@/i18n/routing";
import "../globals.css";

const isIndexable = process.env.VERCEL_ENV
  ? process.env.VERCEL_ENV === "production"
  : process.env.SITE_INDEXABLE === "true";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "layout" });
  const title = t("title");
  const description = t("description");

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: title,
      template: t("titleTemplate"),
    },
    description,
    robots: {
      index: isIndexable,
      follow: isIndexable,
    },
    icons: {
      icon: [
        { url: '/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
        { url: '/favicon.svg', type: 'image/svg+xml' },
      ],
      apple: '/apple-touch-icon.png',
    },
    openGraph: {
      type: 'website',
      url: SITE_URL,
      siteName: SITE_NAME,
      title,
      description,
      images: [
        {
          url: '/brand/acres-manna-social.png',
          width: 1200,
          height: 630,
          alt: t("ogImageAlt"),
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/brand/acres-manna-social.png'],
    },
  } satisfies Metadata;
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FFFFFF" },
    { media: "(prefers-color-scheme: dark)", color: "#3F346E" },
  ],
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({  children,
  params
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages();
  const t = await getTranslations("layout");

  return (
    <html
      lang={locale}
      dir={locale === "ar" ? "rtl" : "ltr"}
      className={`${fontDisplay.variable} ${fontSans.variable} ${fontMono.variable} ${fontLogo.variable} scroll-smooth`}
    >
      <head>
        <link rel="manifest" href="/manifest.json" />
        {/* Hreflang links for multilingual SEO */}
        {routing.locales.map((loc) => {
          const localePath = loc === routing.defaultLocale ? "" : `/${loc}`;
          return (
            <link
              key={loc}
              rel="alternate"
              href={`${SITE_URL}${localePath}`}
              hrefLang={loc}
            />
          );
        })}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: SITE_NAME,
              legalName: t("legalName"),
              url: SITE_URL,
              logo: `${SITE_URL}/brand/acres-manna-logo-horizontal.svg`,
              email: CONTACT_EMAIL,
              telephone: CONTACT_PHONE,
              sameAs: [INSTAGRAM_URL],
              address: {
                "@type": "PostalAddress",
                streetAddress: t("streetAddress"),
                addressLocality: t("addressLocality"),
                addressRegion: t("addressRegion"),
                addressCountry: t("addressCountry"),
              },
            }),
          }} />
      </head>
      <body className="bg-cream-100 text-charcoal-900 antialiased" suppressHydrationWarning>
        <NextIntlClientProvider messages={messages}>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-soft focus:bg-terracotta-500 focus:px-5 focus:py-3 focus:font-sans focus:font-bold focus:text-white"
          >
            {t("skipToContent")}
          </a>
          <SiteHeader />
          {children}
          <Footer />
          <CookieConsent />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}