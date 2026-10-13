import { InquiryLandingPage } from "@/components/site/InquiryLandingPage";
import { contentPages } from "@/lib/site-content";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Become a Supplier",
  "Supply agricultural commodities to AcresxManna’s processing operations.",
  "/become-a-supplier",
);

export default function SupplierPage() {
  return <InquiryLandingPage page={contentPages["become-a-supplier"]} kind="supplier" path="/become-a-supplier" />;
}
