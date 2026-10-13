import type { MetadataRoute } from "next";
import { contentPages, products } from "@/lib/site-content";

const siteUrl = "https://acresxmanna.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const fixedPaths = ["/", "/about", "/what-we-do", "/products", "/brands", "/infrastructure", "/impact", "/global-markets", "/partners", "/news", "/contact"];
  const productPaths = products.map((product) => `/products/${product.slug}`);
  const additionalPaths = Object.keys(contentPages).filter((slug) => !fixedPaths.includes(`/${slug}`)).map((slug) => `/${slug}`);
  return [...fixedPaths, ...productPaths, ...additionalPaths].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date("2026-10-12"),
  }));
}
