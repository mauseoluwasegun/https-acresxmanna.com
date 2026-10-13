import { Link } from "@/i18n/routing";
import type { Product } from "@/lib/site-content";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link className="product-card card-lift" href={`/products/${product.slug}`}>
      <div className={`product-art product-art--${product.slug}`} aria-hidden="true">
        <span className="product-art__shape" />
        <span className="product-art__name">{product.name}</span>
      </div>
      <div className="product-card__body">
        <span className={`status-tag${product.status === "Coming soon" ? " status-tag--planned" : ""}`}>{product.status}</span>
        <p className="eyebrow">{product.category}</p>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <span className="text-link">View product <span aria-hidden="true">→</span></span>
      </div>
    </Link>
  );
}
