import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CTA } from "@/components/site/CTA";
import { PageHero } from "@/components/site/PageHero";
import { ProductCard } from "@/components/site/ProductCard";
import { Link } from "@/i18n/routing";
import { StructuredData } from "@/components/site/StructuredData";
import { products } from "@/lib/site-content";
import { pageMetadata } from "@/lib/seo";

type ProductParams = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return products.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: ProductParams): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  if (!product) return { title: "Product not found" };
  return pageMetadata(
    product.name,
    `${product.name} from AcresxManna. Request product information for availability, specifications and packing options.`,
    `/products/${product.slug}`,
  );
}

export default async function ProductDetailPage({ params }: ProductParams) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  if (!product) notFound();
  const relatedProducts = products.filter((item) => item.slug !== product.slug).slice(0, 3);

  return (
    <main id="main">
      <PageHero eyebrow={product.category} title={product.name} intro={product.description} compact path={`/products/${product.slug}`} parent={{ label: "Products", path: "/products" }} />
      <section className="section section--paper">
        <div className="section-inner product-detail">
          <StructuredData
            value={{
              "@context": "https://schema.org",
              "@type": "Product",
              name: product.name,
              description: product.description,
              category: product.category,
              brand: { "@type": "Brand", name: "HappyMan Foods" },
              url: `https://acresxmanna.com/products/${product.slug}`,
            }}
          />
          <div className={`product-art product-detail__art product-art--${product.slug}`} aria-hidden="true">
            <span className="product-art__shape" />
            <span className="product-art__name">{product.name}</span>
          </div>
          <div className="product-detail__copy">
            <span className={`status-tag${product.status === "Coming soon" ? " status-tag--planned" : ""}`}>{product.status}</span>
            <h2>About this product</h2>
            <p>{product.description}</p>
            {product.varieties && <><h2>Varieties</h2><ul>{product.varieties.map((variety) => <li key={variety}>{variety}</li>)}</ul></>}
            <h2>Specifications and packing</h2>
            <p>Products are packed to each client’s requirements. Contact us to discuss available specifications and packing options for your order.</p>
            <div className="product-detail__notice">
              Ingredients, origin, shelf life, storage guidance, allergens, certifications and product-specific preparation details are shared when verified for the product and destination. We don’t publish unconfirmed claims, prices or nutrition values.
            </div>
            <div className="button-row">
              {product.status === "Available now" && <Link className="button button--purple" href={`/contact?type=product&product=${product.slug}`}>Request product information</Link>}
              {product.status === "Coming soon" && <Link className="button button--purple" href="/contact?type=product">Ask about availability</Link>}
              <Link className="button button--outline" href="/become-a-distributor">Become a distributor</Link>
            </div>
          </div>
        </div>
      </section>
      <section className="section section--soft">
        <div className="section-inner">
          <h2 className="text-center">Explore more products</h2>
          <div className="product-grid">{relatedProducts.map((item) => <ProductCard key={item.slug} product={item} />)}</div>
        </div>
      </section>
      <CTA title="Need product details for your market?" text="Tell us what you’re looking for and where you plan to sell." primaryLabel="Request product information" primaryHref={`/contact?type=product&product=${product.slug}`} />
    </main>
  );
}
