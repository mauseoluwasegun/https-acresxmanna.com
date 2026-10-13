"use client";

import { useMemo, useState } from "react";
import type { Product } from "@/lib/site-content";
import { ProductCard } from "./ProductCard";

const categories = ["All products", "Cassava products", "Nuts", "Snacks", "Drinks and infusions", "Seasonings"];

export function ProductsFilter({ products }: { products: Product[] }) {
  const [active, setActive] = useState("All products");
  const visibleProducts = useMemo(
    () => active === "All products" ? products : products.filter((product) => product.category === active),
    [active, products],
  );

  return (
    <>
      <div className="filter-chips" aria-label="Filter products">
        {categories.map((category) => (
          <button
            aria-pressed={active === category}
            className={`filter-chip${active === category ? " is-active" : ""}`}
            key={category}
            onClick={() => setActive(category)}
            type="button"
          >
            {category}
          </button>
        ))}
      </div>
      <div className="product-grid">
        {visibleProducts.map((product) => <ProductCard key={product.slug} product={product} />)}
      </div>
    </>
  );
}
