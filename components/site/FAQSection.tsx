import { FAQ } from "./FAQ";
import { StructuredData } from "./StructuredData";

export function FAQSection({ entries }: { entries: { question: string; answer: string }[] }) {
  return (
    <>
      <StructuredData
        value={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: entries.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: { "@type": "Answer", text: item.answer },
          })),
        }}
      />
      <FAQ entries={entries} />
    </>
  );
}
