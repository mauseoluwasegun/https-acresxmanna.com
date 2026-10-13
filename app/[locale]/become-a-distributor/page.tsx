import { InquiryLandingPage } from "@/components/site/InquiryLandingPage";
import { contentPages } from "@/lib/site-content";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Become a Distributor",
  "Stock African-made food from AcresxManna brands as a retailer, wholesaler, distributor or importer.",
  "/become-a-distributor",
);

export default function DistributorPage() {
  return <InquiryLandingPage page={contentPages["become-a-distributor"]} kind="distributor" path="/become-a-distributor" />;
}
