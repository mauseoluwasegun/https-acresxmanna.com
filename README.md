# AcresxManna website build

An isolated implementation of the October 2026 AcresxManna website guide. This build lives in its own Git worktree and does not change the original project folder.

The horizontal Acres & Manna logo and brand symbol are vector artwork sourced from the supplied brand-guidelines PDF.

## Run locally

1. Install dependencies with `npm ci`.
2. Copy `.env.example` to `.env.local` and configure a trusted HTTPS webhook before expecting form submissions to be delivered. Keep `INQUIRIES_ENABLED=false` until privacy/legal review and end-to-end delivery testing are complete.
3. Run `npm run dev`, then open `http://localhost:3000`.
4. Run `npm run build` to verify the production build.

Forms intentionally do not show a success state unless the configured webhook accepts a submission. The webhook must persist the enquiry, route it to the approved inboxes and send the approved auto-reply. Until configured, visitors are directed to the confirmed public email and phone number.

## Pre-launch items still requiring AcresxManna

- Confirm the CMS platform and connect the approved content model.
- Supply approved product and operational photography, leadership details and brand relationship wording.
- Confirm the UK entity's legal name and registration details, form-routing inboxes, response-time wording and mailing-list provider.
- Configure durable server-side rate limiting, inquiry persistence, routing and email auto-replies behind the webhook.
- Have qualified advisers finalise Privacy, Terms and Cookie notices for the actual entities and services.
- Connect a consent-aware analytics tool only after its policy and consent behaviour are approved.
- Validate destination-specific product specifications, pack information, certifications and country-level market claims.
- Update the launch robots policy and remove the no-index setting only after approval and launch QA.

No real operating photographs, team profiles, unverified market claims, fabricated impact figures or invented product specifications are included. Product imagery in this preview is decorative illustration.
