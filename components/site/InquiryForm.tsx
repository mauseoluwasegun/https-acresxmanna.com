"use client";

import { useEffect, useState, type FormEvent } from "react";
import { useLocale } from "next-intl";

export type InquiryKind = "contact" | "supplier" | "distributor" | "business" | "product";

const fieldSets: Record<InquiryKind, { name: string; label: string; required?: boolean; options?: string[] }[]> = {
  contact: [
    { name: "name", label: "Full name", required: true },
    { name: "email", label: "Business email", required: true },
    { name: "company", label: "Company or organisation (optional)" },
    { name: "type", label: "Enquiry type", required: true, options: ["Product enquiry", "Supply or farming partnership", "Distribution or wholesale", "Manufacturing partnership", "Investment enquiry", "Other business enquiry"] },
    { name: "message", label: "Message", required: true },
  ],
  supplier: [
    { name: "name", label: "Full name", required: true },
    { name: "email", label: "Business email", required: true },
    { name: "business", label: "Farm or business name" },
    { name: "location", label: "Location" },
    { name: "commodities", label: "What do you grow or supply?" },
    { name: "volumes", label: "Estimated volumes and season" },
    { name: "phone", label: "Phone or WhatsApp" },
    { name: "message", label: "Message", required: true },
  ],
  distributor: [
    { name: "name", label: "Full name", required: true },
    { name: "email", label: "Business email", required: true },
    { name: "company", label: "Company" },
    { name: "location", label: "Country and region" },
    { name: "businessType", label: "Type of business", options: ["Retailer", "Wholesaler", "Distributor", "Importer", "Food service"] },
    { name: "products", label: "Products of interest" },
    { name: "message", label: "Message", required: true },
  ],
  business: [
    { name: "name", label: "Full name", required: true },
    { name: "email", label: "Business email", required: true },
    { name: "company", label: "Organisation" },
    { name: "interest", label: "Type of interest", options: ["Investment", "Supply", "Distribution", "Manufacturing", "Technology or operations", "Media", "Other"] },
    { name: "message", label: "Message", required: true },
  ],
  product: [
    { name: "name", label: "Full name", required: true },
    { name: "email", label: "Business email", required: true },
    { name: "company", label: "Company or organisation" },
    { name: "country", label: "Country" },
    { name: "product", label: "Product of interest", required: true },
    { name: "message", label: "Message", required: true },
  ],
};

const submitText: Record<InquiryKind, string> = {
  contact: "Send message",
  supplier: "Apply to become a supplier",
  distributor: "Apply to become a distributor",
  business: "Start the conversation",
  product: "Request product information",
};

export function InquiryForm({ kind, productName }: { kind: InquiryKind; productName?: string }) {
  const locale = useLocale();
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [deliveryReady, setDeliveryReady] = useState(false);

  useEffect(() => {
    let active = true;
    fetch("/api/inquiries", { cache: "no-store" })
      .then(async (response) => {
        if (!response.ok) throw new Error("Could not check form delivery status");
        const result: unknown = await response.json();
        if (active && typeof result === "object" && result !== null && "enabled" in result) {
          setDeliveryReady(result.enabled === true);
        }
      })
      .catch(() => {
        if (active) setDeliveryReady(false);
      });
    return () => {
      active = false;
    };
  }, []);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setBusy(true);
    setError("");
    const form = event.currentTarget;
    const fields = Object.fromEntries(new FormData(form).entries());
    try {
      const response = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ kind, fields }),
      });
      if (!response.ok) {
        const result = await response.json().catch(() => null);
        setError(result?.error ?? "Oops, that didn’t send. Please try again or email us directly.");
        return;
      }
      window.location.assign(`${locale === "en" ? "" : `/${locale}`}/thank-you/${kind}`);
    } catch {
      setError("Oops, that didn’t send. Please try again or email us directly.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <form className="inquiry-form" onSubmit={submit}>
      {fieldSets[kind].map((field) => (
        <div className="form-field" key={field.name}>
          <label htmlFor={`${kind}-${field.name}`}>{field.label}</label>
          {field.options ? (
            <select defaultValue="" id={`${kind}-${field.name}`} name={field.name} required={field.required}>
              <option disabled value="">Choose an option</option>
              {field.options.map((option) => <option key={option}>{option}</option>)}
            </select>
          ) : field.name === "message" ? (
            <textarea id={`${kind}-${field.name}`} maxLength={3000} name={field.name} required={field.required} rows={5} />
          ) : (
            <input
              autoComplete={field.name === "email" ? "email" : field.name === "name" ? "name" : undefined}
              id={`${kind}-${field.name}`}
              maxLength={field.name === "email" ? 254 : 200}
              name={field.name}
              required={field.required}
              type={field.name === "email" ? "email" : "text"}
              defaultValue={field.name === "product" ? productName : undefined}
            />
          )}
        </div>
      ))}
      <div className="honeypot" aria-hidden="true">
        <label htmlFor={`${kind}-website`}>Leave this field empty</label>
        <input autoComplete="off" id={`${kind}-website`} name="website" tabIndex={-1} />
      </div>
      <p className="form-consent">
        By sending this form you agree to us using your details to reply, as explained in our <a href="/privacy">Privacy notice</a>.
        {" "}{deliveryReady ? "You can also reach us at " : "Form delivery is unavailable in this preview. Please email "}
        <a href="mailto:info@acresxmanna.com">info@acresxmanna.com</a>.
      </p>
      {error && <p className="form-error" role="alert">{error}</p>}
      <button className="button button--yellow button--submit" disabled={busy || !deliveryReady} type="submit">
        {busy ? "Sending…" : deliveryReady ? submitText[kind] : "Form delivery unavailable"}
      </button>
    </form>
  );
}
