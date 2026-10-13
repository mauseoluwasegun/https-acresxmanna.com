import { Link } from "@/i18n/routing";

export default function NotFound() {
  return (
    <main className="error-page" id="main">
      <p className="eyebrow">Page not found</p>
      <h1>Oops! This page took a detour.</h1>
      <p>The page you’re looking for has moved or doesn’t exist. Let’s get you back to something delicious.</p>
      <div className="button-row" style={{ justifyContent: "center" }}>
        <Link className="button button--purple" href="/">Back to home</Link>
        <Link className="button button--outline" href="/products">Explore our products</Link>
        <Link className="button button--outline" href="/contact">Contact us</Link>
      </div>
    </main>
  );
}
