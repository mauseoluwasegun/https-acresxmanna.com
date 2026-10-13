import { InquiryLandingPage } from "@/components/site/InquiryLandingPage";
import { contentPages } from "@/lib/site-content";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Business Enquiries",
  "Contact AcresxManna about manufacturing, partnerships, media or investment.",
  "/business-enquiries",
);

export default function BusinessEnquiriesPage() {
  return <InquiryLandingPage page={contentPages["business-enquiries"]} kind="business" path="/business-enquiries" />;
}
