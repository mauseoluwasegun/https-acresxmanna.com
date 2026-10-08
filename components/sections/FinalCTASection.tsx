"use client";

import { SectionContainer } from "@/components/layout/SectionContainer";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { PatternDivider } from "@/components/animations/PatternDivider";
import { DecorativeBlob, DecorativeBlobSet } from "@/components/ui/DecorativeBlobs";
import { PatternWatermark, FloatingPatternMotif, HandDrawnPlantLine } from "@/components/ui/DecorativePatterns";
import { IconPhone, IconMail, IconMapPin } from "@/components/ui/icons";

export function FinalCTASection() {
  return (
    <>
      <PatternDivider
        pattern="ankara"
        thickness="bold"
        eyebrow="— LET'S GROW TOGETHER"
        eyebrowAccent="mango"
      />

      <section id="contact-cta" className="relative bg-cream-100 py-20 sm:py-24 overflow-hidden">
        <PatternWatermark pattern="kente" opacity={0.07} />
        <DecorativeBlobSet className="opacity-80" />
        <HandDrawnPlantLine
          variant="maize"
          size={150}
          className="absolute top-6 right-8 text-terracotta-600/40"
        />
        <HandDrawnPlantLine
          variant="shea"
          size={120}
          className="absolute bottom-8 left-10 text-forest-700/40"
        />

        {/* ========= BIG IMAGE + OVERLAY CTA BAND ========= */}
        <SectionContainer size="wide" className="relative">
          <div className="relative rounded-soft-lg overflow-hidden shadow-cta border border-cream-100">
            <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-2">
              {/* Left half — hero editorial image with overlay */}
              <div className="relative h-full min-h-[420px] sm:min-h-[480px]">
                <img
                  src="/images/farm-origin.jpg"
                  alt="Acres X Manna partnership — farmers and agricultural excellence"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-charcoal-900/90 via-charcoal-900/60 to-cream-50/10" />

                <div className="relative h-full p-7 sm:p-10 lg:p-12 flex flex-col justify-between text-cream-100">
                  <div>
                    <Eyebrow accent="mango" className="mb-4">
                      Let&apos;s Talk
                    </Eyebrow>
                    <h3 className="font-display font-black italic text-[clamp(2rem,4.2vw,3.5rem)] leading-[1.02] tracking-tight max-w-xl">
                      Great partnerships
                      <br />
                      start with a{" "}
                      <span className="not-italic text-mango-400">
                        single conversation.
                      </span>
                    </h3>
                    <p className="mt-5 max-w-md font-sans text-body-md text-cream-50/90 leading-relaxed">
                      Whether you&apos;re a farmer, distributor, investor, or
                      retailer ready to stock African-made — our team is
                      ready to build the next step with you.
                    </p>
                  </div>
                  <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-4">
                    <li className="flex items-center gap-3">
                      <span className="w-10 h-10 rounded-full bg-cream-50/10 flex items-center justify-center ring-1 ring-cream-50/20 text-mango-400">
                        <IconMail size={18} />
                      </span>
                      <span className="font-sans text-body-md">Email: [TBC]</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-10 h-10 rounded-full bg-cream-50/10 flex items-center justify-center ring-1 ring-cream-50/20 text-mango-400">
                        <IconPhone size={18} />
                      </span>
                      <span className="font-sans text-body-md">Phone: [TBC]</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-10 h-10 rounded-full bg-cream-50/10 flex items-center justify-center ring-1 ring-cream-50/20 text-mango-400">
                        <IconMapPin size={18} />
                      </span>
                      <span className="font-sans text-body-md">HQ: [TBC]</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Right half — form panel */}
              <div className="relative h-full min-h-[420px] sm:min-h-[480px] bg-cream-50 p-7 sm:p-10 lg:p-12 flex flex-col">
                <FloatingPatternMotif
                  pattern="bogolan"
                  size={140}
                  rotate={18}
                  top="-4%"
                  right="-6%"
                  className="opacity-80"
                />
                <div className="relative">
                  <Eyebrow accent="terracotta" className="mb-3">
                    Quick Inquiry
                  </Eyebrow>
                  <h4 className="font-display font-black text-heading-hero leading-[1.02] max-w-md">
                    Tell us what you need —
                    <br />
                    <em className="text-terracotta-600">we&apos;ll reply in 48h.</em>
                  </h4>
                </div>

                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="relative mt-7 space-y-4"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <label className="block">
                      <span className="sr-only">Full Name</span>
                      <input
                        placeholder="Full name"
                        className="w-full rounded-soft border border-charcoal-900/10 bg-white px-4 py-3 text-body-md outline-none focus:ring-2 focus:ring-mango-500"
                      />
                    </label>
                    <label className="block">
                      <span className="sr-only">Email</span>
                      <input
                        type="email"
                        placeholder="you@email.com"
                        className="w-full rounded-soft border border-charcoal-900/10 bg-white px-4 py-3 text-body-md outline-none focus:ring-2 focus:ring-mango-500"
                      />
                    </label>
                  </div>
                  <label className="block">
                    <span className="sr-only">Company or Farm</span>
                    <input
                      placeholder="Company / Cooperative / Farm (optional)"
                      className="w-full rounded-soft border border-charcoal-900/10 bg-white px-4 py-3 text-body-md outline-none focus:ring-2 focus:ring-mango-500"
                    />
                  </label>
                  <label className="block">
                    <span className="sr-only">I&apos;m reaching out as a</span>
                    <select className="w-full rounded-soft border border-charcoal-900/10 bg-white px-4 py-3 text-body-md outline-none focus:ring-2 focus:ring-mango-500">
                      <option>I&apos;m reaching out as a...</option>
                      <option>Consumer</option>
                      <option>Farmer / Supplier</option>
                      <option>Distributor / Retailer</option>
                      <option>Business Partner</option>
                      <option>Investor</option>
                      <option>Press</option>
                      <option>Job Seeker</option>
                    </select>
                  </label>
                  <label className="block">
                    <span className="sr-only">Message</span>
                    <textarea
                      rows={4}
                      placeholder="A few sentences about what you need..."
                      className="w-full rounded-soft border border-charcoal-900/10 bg-white px-4 py-3 text-body-md outline-none focus:ring-2 focus:ring-mango-500 resize-none"
                    />
                  </label>
                  <div className="flex flex-wrap gap-3 pt-2">
                    <Button type="submit" variant="primary" size="lg">
                      Send Inquiry
                    </Button>
                    <Button href="/contact" variant="secondary" size="lg">
                      Full Contact Page
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Bottom micro-trust row */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-charcoal-900">
            {[
              { k: "✉", t: "48h response time" },
              { k: "🔒", t: "Secure, confidential process" },
              { k: "🌾", t: "Farmers-first sourcing" },
              { k: "🌏", t: "Global shipping + logistics" },
            ].map((row) => (
              <div
                key={row.t}
                className="flex items-center gap-3 rounded-soft bg-cream-50/60 border border-cream-100 px-4 py-3.5"
              >
                <span className="text-xl">{row.k}</span>
                <span className="font-sans text-body-md">{row.t}</span>
              </div>
            ))}
          </div>
        </SectionContainer>
      </section>
    </>
  );
}
