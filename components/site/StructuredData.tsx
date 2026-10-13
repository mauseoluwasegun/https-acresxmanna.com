const siteUrl = "https://acresxmanna.com";

export function StructuredData({ value }: { value: Record<string, unknown> }) {
  const json = JSON.stringify(value).replace(/</g, "\\u003c");
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}

export function BreadcrumbData({ path, label, parent }: {
  path: string;
  label: string;
  parent?: { label: string; path: string };
}) {
  const trail = [
    { name: "Home", item: `${siteUrl}/` },
    ...(parent ? [{ name: parent.label, item: `${siteUrl}${parent.path}` }] : []),
    { name: label, item: `${siteUrl}${path}` },
  ];

  return (
    <StructuredData
      value={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: trail.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.name,
          item: item.item,
        })),
      }}
    />
  );
}
