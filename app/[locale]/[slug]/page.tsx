import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ContentPageView } from "@/components/site/ContentPageView";
import { contentPages } from "@/lib/site-content";
import { pageMetadata } from "@/lib/seo";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return Object.keys(contentPages).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = contentPages[slug];
  if (!page) return { title: "Page not found" };
  const seoTitles: Record<string, string> = {
    brands: "Our Brands",
    infrastructure: "Infrastructure",
    "global-markets": "Global Markets",
    "become-a-supplier": "Become a Supplier",
    "become-a-distributor": "Become a Distributor",
    privacy: "Privacy notice",
    terms: "Terms of use",
    cookies: "Cookie policy",
    glossary: "Food and supply-chain glossary",
  };
  return pageMetadata(seoTitles[slug] ?? page.eyebrow, page.intro, `/${slug}`);
}

export default async function ContentPage({ params }: PageProps) {
  const { slug } = await params;
  const page = contentPages[slug];
  if (!page) notFound();
  return <ContentPageView page={page} path={`/${slug}`} />;
}
