"use client";

import Image from "next/image";
import { useState } from "react";
import { Link } from "@/i18n/routing";

const primaryLinks = [
  ["About Us", "/about"],
  ["What We Do", "/what-we-do"],
  ["Products", "/products"],
  ["Our Brands", "/brands"],
  ["Infrastructure", "/infrastructure"],
];

const moreLinks = [
  ["Impact", "/impact"],
  ["Global Markets", "/global-markets"],
  ["Investors & Partners", "/partners"],
  ["News & Insights", "/news"],
  ["Contact", "/contact"],
  ["Become a Supplier", "/become-a-supplier"],
  ["Become a Distributor", "/become-a-distributor"],
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link className="brand-logo-link" href="/" onClick={() => setMenuOpen(false)} aria-label="AcresxManna home">
          <Image
            alt=""
            className="brand-logo brand-logo--header"
            height={320}
            preload
            src="/logos/acres-manna-horizontal.svg"
            unoptimized
            width={988}
          />
        </Link>
        <button
          aria-expanded={menuOpen}
          aria-controls="site-navigation"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          className="menu-toggle"
          onClick={() => setMenuOpen((open) => !open)}
          type="button"
        >
          <span />
          <span />
        </button>
        <nav id="site-navigation" className={`site-nav${menuOpen ? " is-open" : ""}`} aria-label="Main navigation">
          <div className="site-nav__links">
            {primaryLinks.map(([label, href]) => (
              <Link href={href} key={href} onClick={() => setMenuOpen(false)}>{label}</Link>
            ))}
            <details className="nav-more">
              <summary>More <span aria-hidden="true">⌄</span></summary>
              <div className="nav-more__panel">
                {moreLinks.map(([label, href]) => (
                  <Link href={href} key={href} onClick={() => setMenuOpen(false)}>{label}</Link>
                ))}
              </div>
            </details>
          </div>
          <Link className="button button--yellow nav-cta" href="/contact" onClick={() => setMenuOpen(false)}>Let’s talk</Link>
        </nav>
      </div>
    </header>
  );
}
