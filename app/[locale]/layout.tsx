import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { ConsentBanner } from "@/components/site/ConsentBanner";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import { StructuredData } from "@/components/site/StructuredData";
import { routing } from "@/i18n/routing";
import "../site.css";

const SITE_URL = "https://acresxmanna.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "AcresxManna | African Agro-Processing and Food",
    template: "%s | AcresxManna",
  },
  description: "AcresxManna turns Africa’s agricultural resources into quality food products through processing, manufacturing and market access.",
  robots: { index: false, follow: false },
  openGraph: {
    type: "website",
    siteName: "AcresxManna",
    title: "AcresxManna | African Agro-Processing and Food",
    description: "Africa’s food. Processed for the world.",
    url: SITE_URL,
    images: [{ url: "/opengraph-image.svg", width: 1200, height: 630, alt: "AcresxManna — African agro-processing and food" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AcresxManna | African Agro-Processing and Food",
    description: "Africa’s food. Processed for the world.",
    images: ["/opengraph-image.svg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#594B9A",
  width: "device-width",
  initialScale: 1,
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html data-scroll-behavior="smooth" lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <StructuredData
            value={{
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "AcresxManna",
              url: SITE_URL,
              email: "info@acresxmanna.com",
              telephone: "+234 804 700 0587",
              sameAs: ["https://www.instagram.com/acresxmanna/"],
              logo: `${SITE_URL}/logos/acres-manna-horizontal.svg`,
            }}
          />
          <a className="skip-link" href="#main">Skip to content</a>
          <SiteHeader />
          {children}
          <SiteFooter />
          <ConsentBanner />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
