import Image from "next/image";
import { Link } from "@/i18n/routing";
import { CookieSettingsButton } from "./cookie-settings-button";

const footerLinks = [
  ["Become a Supplier", "/become-a-supplier"],
  ["Become a Distributor", "/become-a-distributor"],
  ["Business Enquiries", "/business-enquiries"],
  ["Privacy", "/privacy"],
  ["Terms", "/terms"],
  ["Cookies", "/cookies"],
  ["Glossary", "/glossary"],
];

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__main">
        <div>
          <Link className="brand-logo-link brand-logo-link--footer" href="/" aria-label="AcresxManna home">
            <Image
              alt=""
              className="brand-logo brand-logo--footer"
              height={320}
              src="/logos/acres-manna-horizontal-white.svg"
              unoptimized
              width={988}
            />
          </Link>
          <p>Redefining the African Agro-food Market Globally.</p>
          <p className="footer-small">More value from Africa’s harvest. More opportunities across the food value chain.</p>
          <p className="footer-small">Get progress updates, new products and partnership news. <a href="mailto:info@acresxmanna.com">Say hello by email</a>.</p>
        </div>
        <div className="footer-contact">
          <h2>Say hello</h2>
          <a href="mailto:info@acresxmanna.com">info@acresxmanna.com</a>
          <a href="tel:+2348047000587">+234 804 700 0587</a>
          <a href="https://www.instagram.com/acresxmanna/" target="_blank" rel="noreferrer">Instagram · @acresxmanna</a>
        </div>
        <nav className="footer-links" aria-label="Footer navigation">
          <h2>Explore</h2>
          {footerLinks.map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}
          <CookieSettingsButton />
        </nav>
      </div>
      <div className="site-footer__bottom">
        <span>© {new Date().getFullYear()} AcresxManna</span>
        <span>Built in Africa. Designed to compete globally.</span>
      </div>
    </footer>
  );
}
