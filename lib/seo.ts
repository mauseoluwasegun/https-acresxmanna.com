import type { Metadata } from "next";

const siteUrl = "https://acresxmanna.com";

export function pageMetadata(title: string, description: string, path: string): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: "AcresxManna",
      title: `${title} | AcresxManna`,
      description,
      url: new URL(path, siteUrl),
      images: [{ url: "/opengraph-image.svg", width: 1200, height: 630, alt: "AcresxManna — African agro-processing and food" }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | AcresxManna`,
      description,
      images: ["/opengraph-image.svg"],
    },
  };
}
