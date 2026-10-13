import { ContentPageView } from "@/components/site/ContentPageView";
import { contentPages } from "@/lib/site-content";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "What We Do | Sourcing to Manufacturing",
  "From agricultural sourcing and processing to manufacturing, brands and distribution: how AcresxManna connects the food value chain.",
  "/what-we-do",
);

export default function WhatWeDoPage() {
  return <ContentPageView page={contentPages["what-we-do"]} path="/what-we-do" />;
}
