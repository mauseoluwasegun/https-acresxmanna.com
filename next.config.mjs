import { fileURLToPath } from "node:url";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // A pnpm-workspace.yaml in the home directory otherwise makes Turbopack
  // guess a root above this repo and warn on every start.
  turbopack: {
    root: fileURLToPath(new URL(".", import.meta.url)),
  },
  async redirects() {
    const localePrefixes = [
      "",
      "/en",
      "/fr",
      "/tw",
      "/es",
      "/ru",
      "/pt",
      "/de",
      "/it",
      "/ar",
      "/zh-CN",
      "/nl",
    ];
    const legacyRoutes = [
      ["/expressions", "/our-brands"],
      ["/expressions/:path+", "/our-brands"],
      ["/brands", "/our-brands"],
      ["/brands/:path+", "/our-brands"],
      ["/partners", "/investors-partners"],
      ["/news", "/news-insights"],
    ];

    return localePrefixes.flatMap((prefix) =>
      legacyRoutes.map(([source, destination]) => ({
        source: `${prefix}${source}`,
        destination: `${prefix}${destination}`,
        permanent: true,
      })),
    );
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "coresg-normal.trae.ai",
        pathname: "/**",
      },
    ],
  },
};

export default withNextIntl(nextConfig);
