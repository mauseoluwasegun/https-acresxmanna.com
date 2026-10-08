# Acres X Manna — Website Execution Plan
**Brand**: Acres X Manna | African agro-processing & food manufacturing  
**Style**: Bold & Energetic × Full Immersion African Identity × Luxury Editorial Magazine  
**Status**: Creative direction LOCKED — ready for build

---

## 01 — CREATIVE DIRECTION SUMMARY

### Vibe (Decided)
**Bold & Energetic** — vibrant blocks of color, playful shapes, high-contrast typography,
dynamic compositions. Matches the energy of a modern global consumer food brand.

### African Identity Expression
**Full Immersion** — textures, bold colors, patterns, and cultural motifs woven
tastefully through EVERY section. No token gestures; African design language is the
backbone of the visual system.

### Background Base
**Warm Cream / Off-White** (#FAF6F0 family) as the canvas. Every accent color pops
against it. Creates premium luxury base feeling. Not sterile white.

---

## 02 — COLOR SYSTEM (Terracotta + Mango Orange Primary)

### Brand Core
| Token | Hex | Usage |
|-------|-----|-------|
| `--cream-50` | `#FBF8F3` | Page backgrounds |
| `--cream-100` | `#FAF6F0` | Section backgrounds, base canvas |
| `--terracotta-500` | `#C65D3A` | PRIMARY brand accent. CTAs, highlights. |
| `--terracotta-600` | `#A84A2C` | Hover states, bold text |
| `--terracotta-700` | `#8A3B22` | Dark text on light |
| `--mango-400` | `#F4A73A` | SECONDARY accent. Warm highlights, icons |
| `--mango-500` | `#E8922A` | Glows, gradients, decorative fills |
| `--earth-600` | `#6B4226` | Text, frames, pattern lines |
| `--forest-600` | `#2F5D3A` | Agricultural/plant accents |
| `--forest-700` | `#1F4029` | Deep green text, dark accents |
| `--indigo-700` | `#2B3A67` | Premium deep blue contrast moments |
| `--charcoal-900` | `#1A1A1A` | Primary body text (not black for warmth) |
| `--charcoal-700` | `#3D3D3D` | Secondary text |
| `--white` | `#FFFFFF` | Cards, contrast surfaces |

### Gradients (For Buttons / Accents)
```
Primary CTA gradient: --terracotta-500 → --mango-500  (warm sunset)
Dark moment gradient: --earth-600 → --terracotta-700
Gold moment gradient: --mango-400 → --terracotta-500
```

### Palette Rules
- **Terracotta 500** = primary "Acres X Manna" brand color. Used for all primary CTAs,
  main logo accent, section dividers, key numbers.
- **Mango 400/500** = energy accent. Highlights, glows, pattern fills, icons.
- **Never** use pure `#000000` for text. Always charcoal for warmth.
- Cream base, but **2–3 dark moment sections** (charcoal or forest background) on the
  homepage for dramatic contrast.

---

## 03 — TYPOGRAPHY SYSTEM (Luxury Serif + Modern Sans)

### Font Pairing
| Role | Font | Weight | Purpose |
|------|------|--------|---------|
| **Display** | **Playfair Display** (serif) | Black (900) | Hero headlines, section headings, impact numbers |
| **Display Italic** | **Playfair Display** | Black Italic | Accent words inside headlines ("Africa", "Great Food") |
| **Body / UI** | **DM Sans** | Regular 400 | Paragraphs, product descriptions, labels |
| **Body Bold** | **DM Sans** | Bold 700 | Sub-headings, navigation, CTA buttons |
| **UI Monospace** | **DM Mono** | Medium 500 | Numbers, stats, category labels |

### Type Scale
```
--fs-display-hero: clamp(3.5rem, 9vw, 7.5rem)   /* Main hero headline */
--fs-display-1:    clamp(2.5rem, 6vw, 5rem)     /* Section headlines */
--fs-display-2:    clamp(1.8rem, 4vw, 3rem)     /* Sub-section */
--fs-heading-1:    clamp(1.4rem, 2.5vw, 2rem)   /* Product names, card titles */
--fs-body-lg:      1.25rem / 1.7                /* Leading paragraph */
--fs-body:         1rem / 1.6                   /* Standard body */
--fs-label:        0.875rem / 1.3 (uppercase, letter-spacing 0.12em)
--fs-micro:        0.75rem
```

### Typography Rules
1. Every **hero / section headline** uses Playfair Display Black.
2. Select 1-2 words per headline get wrapped in `<em>` = Playfair Display Black Italic
   + mango/terracotta color.
3. Category labels, tags, eyebrow text = DM Sans Bold, UPPERCASE, `letter-spacing: 0.12em`.
4. Numbers in Impact section = Playfair Display Black OR DM Mono depending on context.
5. **All text must have 1.5+ line-height for readability.**

---

## 04 — IMAGERY & ASSET SYSTEM

### Image Treatment (Decided)
**Decorative Pattern Frames** around every photo — every image, product, and portrait
gets wrapped in a frame of repeating African textile patterns (kente diamonds,
ankara strips, woven texture borders).

### Frame Rules
- 3 frame thickness variants:
  - **Thin (2px pattern border)** → gallery, secondary imagery
  - **Medium (6–8px pattern frame)** → product cards, section features
  - **Thick (16–24px textile band frame)** → hero images, feature photos
- Frame pattern color rotates per section (terracotta / mango / indigo / forest)
- **Inside frame**: 4px inner solid cream border separating image from pattern
- Corner accents: optional tiny triangle/kente diamond at 4 corners

### Additional Imagery Layer
**Hero + key sections get:**
- Warm tone grade overlay (subtle mango/terracotta tint)
- Very faint film grain texture (SVG noise layer, 3–5% opacity)
- Not too heavy — keeps premium feel

### Asset Folder Structure
```
public/
├── images/
│   ├── hero/                  /* collage composite images */
│   ├── agriculture/           /* farms, crops, harvest photos */
│   ├── processing/            /* factory, machinery, packaging */
│   ├── products/              /* finished food, product shots */
│   ├── people/                /* farmers, team, community */
│   ├── global/                /* maps, shipping, markets */
│   ├── about/                 /* about-section specific */
│   └── impact/                /* impact imagery */
├── patterns/                  /* SVG African textile patterns */
│   ├── kente-diamonds.svg
│   ├── ankara-strips.svg
│   ├── woven-texture.svg
│   ├── mudcloth-dots.svg
│   └── bogolanfini.svg
├── icons/                     /* custom hand-drawn SVGs */
└── textures/                  /* grain, paper, noise SVGs */
```

### Placeholder Strategy
Every image source lives in `lib/images.ts` as structured URL strings. When real
photography arrives, update one file. Pattern frames accept any image URL.

Use the provided image API for placeholders during build:
```
https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt={prompt}&image_size={size}
```

---

## 05 — DECORATIVE ELEMENTS (Full Maximalist Mix)

All 5 types deployed. Section designer picks 2-3 types per section for layered
interest without clutter.

| Decor Type | Description | Where Used |
|------------|-------------|------------|
| **Organic Blobs** | Free-form amorphous rounded shapes (terracotta, mango, cream fills). Low opacity 10-25%. | Behind headlines, hero corners, empty space in sections |
| **Geometric Motifs** | Repeating diamonds, triangles, zig-zags, dots. Small 16-32px pattern elements. | Section corners, dividers, card accents |
| **Plant / Grain Illustrations** | Hand-drawn line art: cocoa pods, maize stalks, rice grains, leaves, shea nuts. Vector SVGs. | Corners of frames, paragraph lead-ins, decorative dividers |
| **Pattern Watermarks** | Full-bleed textile patterns at 4-8% opacity behind sections. | Hero, about, impact — sections where a backdrop texture adds richness |
| **Floating Pattern Motifs** | Isolated single kente diamond or ankara block (200-300px) floating in corners/margins. | Between sections, in the gutter, near CTAs |

---

## 06 — ICONOGRAPHY SYSTEM (Custom Hand-drawn)

Custom SVG hand-drawn icons. Style rules:
- Slightly imperfect stroke widths (not vector-perfect) — feels human, artisanal
- Rounded terminals, organic shapes
- Stroke 2–2.5px, terracotta-600 or earth-600
- Optional: tiny mango-400 fill accent inside each icon
- Icons live inside **pattern frames** when used for section features

### Icon Sets Needed
```
Farm story icons:   🌱 seed, 🌾 wheat, 🏭 factory, 📦 box, 🍽️ plate, 🌍 globe
Stakeholder icons:  🛒 consumer, 🌾 farmer, 🚚 distributor, 🤝 partner, 
                    💼 investor, 👤 employee
Product icons:      Category markers per product line
CTA icons:          Arrow, mail, phone, location
Navigation icons:   Menu, close, search, chevrons
Impact icons:       One per impact category (farmers, communities, etc.)
Global icons:       Map pins, airplanes, cargo ships, export arrows
```

All icons stored in `components/ui/icons.tsx` as React SVG components.

---

## 07 — NAVIGATION SYSTEM

### Architecture (Decided)
**Multi-Page With Dedicated Pages** — every nav link routes to a dedicated page with
rich content. The homepage contains a strong 11-section journey that links down into
the deeper pages.

### Routes
```
/                       Homepage (11-section hero journey)
/about                  Company deep-dive
/products               Full product catalog + filters
/what-we-do             Processing, manufacturing, supply chain explained
/impact                 Impact metrics + stories
/contact                Contact form + locations + stakeholder inquiry forms
```

### Navbar Behavior
- **Transparent over hero** with white text + mango accents
- **On scroll past 300px → slides to solid cream background** with subtle shadow +
  charcoal text. 300ms spring transition.
- Logo: "ACRES X" on left, "MANNA" on right — see Logo Reveal section below.
- Desktop nav links: Home / About / Products / What We Do / Impact / Contact
  (DM Sans Bold, uppercase labels, 0.12em tracking)
- **Primary CTA** = `Partner With Us` — soft rounded gradient button (terracotta→mango).
- Hover interaction: nav link underline slides in from left with mango color.

### Logo Reveal (Split Slide With 'X' Accent)
On page load:
1. Logo container has a vertical center line.
2. "ACRES X" slides in FROM THE LEFT with spring easing (elasticOut).
3. "MANNA" slides in FROM THE RIGHT simultaneously.
4. The "X" in the middle GLOWS with a mango radial gradient.
5. Decorative: tiny patterned frame border draws in around full logo after lock.
6. Navbar scroll transition preserves logo lock state (no re-animation).

### Mobile Menu
- Full-screen overlay (cream background, pattern watermark, scattered terracotta blobs)
- Hamburger → X morph animation on toggle
- Menu items: stacked large Playfair Display, one per line, letter-by-letter reveal
- CTA button pinned at bottom
- Backdrop blur + high contrast

---

## 08 — CTA & BUTTON SYSTEM

### Style (Decided)
**Soft Rounded + Gradient** with strong drop shadow.

```
border-radius: 14px
padding: 1rem 2.25rem
font: DM Sans Bold, 1rem, uppercase, 0.08em tracking
box-shadow: 0 10px 30px -12px rgba(198, 93, 58, 0.4)
```

### Variants
| Variant | Fill | Border | Text Color |
|---------|------|--------|------------|
| **Primary** | Gradient terracotta-500 → mango-500 | none | white |
| **Secondary** | Transparent | 2px terracotta-500 | terracotta-700 |
| **Dark** | Gradient forest-700 → indigo-700 | none | white |
| **Ghost** | cream-50 with 2px pattern frame | pattern frame | charcoal-900 |
| **Text** | No fill, underline only | none | terracotta-600 |

### Interaction Rules (High Intensity)
Hover = big move:
- `translateY(-4px) scale(1.03)`
- Shadow doubles in height and size
- Gradient shifts diagonally (`background-position` animates)
- Icon inside slides 4px to the right (arrow)
Press = scale down to 0.97, shadow collapses

Respects `prefers-reduced-motion` → soft opacity shift only.

---

## 09 — SECTION DIVIDERS (Textile Pattern Strip Bands)

Between EVERY major section on homepage:
```
[Section] 
  ↓
[24–64px high band — full-width African textile pattern]
  ↓
[Next Section]
```

### Divider Specs
- Height varies: 24px (thin), 40px (medium), 64px (bold — between signature sections)
- Pattern changes per divider (cycle through kente/ankara/mudcloth/woven)
- Colors: Each divider uses 2-3 colors from the palette (e.g., terracotta + mango,
  forest + indigo, earth + cream)
- Optional embedded eyebrow text: "→ NEXT: FROM FARM TO FOOD" DM Mono uppercase,
  0.75rem, positioned within divider

---

## 10 — HOMEPAGE — ALL 11 SECTIONS

### Section 1: HERO
**Visual Focus**: Everything combined — food dish + agricultural landscape + collage +
portrait of a farmer. One hero composition.

**Layout**: Asymmetric split.
- Left 60%: Massive Playfair Display Black headline with word-by-word reveal
  ```
  "Africa's <em>Richness</em>.
   Transformed Into
   <em>Great Food</em>."
  ```
- Eyebrow above headline: "Acres X Manna · African Agro-Processing" (DM Mono uppercase)
- Supporting paragraph (2 lines) under headline, DM Sans 1.25rem
- Under paragraph: two CTAs stacked horizontally
  [Explore Our Products ↓]  [Partner With Us →]
- Right 40%: Hero collage composition
  - Main large image (decorative pattern frame, thick)
  - 2-3 smaller offset overlapping images (thin frames)
  - Floating organic blobs behind images (terracotta, mango)
  - Hand-drawn plant illustration in corner
  - Single floating kente diamond

**Animation (Word-by-Word + Gentle Reveal)**:
1. Eyebrow text blurs in → sharp, fades up
2. Headline: each word springs in individually (80ms stagger)
3. Supporting paragraph fades up 400ms after headline start
4. CTAs pop in with 200ms stagger, spring easing
5. Hero image gently scales from 1.05 → 1 over 2s (parallax continues on scroll)
6. Decorative elements (blobs, illustrations, pattern corners) drift subtly
   continuously (very slow 10s loops)

---

### Section 2: FROM FARM TO FOOD (Signature Scroll Experience)
**Interaction**: Horizontal Scroll Journey (pinned section).

The section pins to viewport. As the user scrolls DOWN, the content scrolls HORIZONTALLY
through 6 stages.

**Stages (6 panels)**:
```
Panel 1 🌱 AGRICULTURE → Panel 2 🌾 HARVEST → Panel 3 🏭 PROCESSING
→ Panel 4 📦 PACKAGING → Panel 5 🍽️ FOOD → Panel 6 🌍 GLOBAL MARKETS
```

**Panel Structure (each identical framework)**:
- Large pattern-framed feature image (left)
- Stage number big in corner (Playfair Display Black, low opacity, huge size e.g. "01")
- Eyebrow: "STAGE 01 · AGRICULTURE"
- Headline (Playfair Display) with one italic accent word
- 2-line description
- Custom hand-drawn icon (big)

**Scroll-Triggered Animation**:
- Panels slide left → right in sequence with horizontal scroll
- As new panel enters: old one fades + blurs to side
- Connecting SVG line curves from panel to panel, stretching as you scroll
- Background color subtly shifts per panel (cream → soft green → terracotta tint → mango tint → cream → indigo tint)
- Progress bar pinned at top: 6 segments. Active segment fills with mango gradient.

---

### Section 3: ABOUT ACRES X MANNA
**Headline**: "Rooted in <em>Africa</em>. Built for <em>the world</em>."

**Layout**: Editorial magazine spread
- Large asymmetric format
- Left column (2/3 width): big framed portrait photo (farmers + team collage)
- Right column (1/3 width): headline + pull-quote + short paragraphs
- Pull quote: large Playfair Display Italic in terracotta with oversized opening quotation mark
- Paragraphs: very short (1-3 lines each), generous margins
- Decorative: hand-drawn plant lines along column edge, single kente diamond at end of text
- Below: 3 "pillars" small cards (Origin, Transformation, Ambition) each with hand-drawn icon + 1 line

**Animation**: Entrance blur-to-sharp + slide up staggered (image first, then text blocks)

---

### Section 4: PRODUCTS
**Layout**: Large Format Poster-style Grid (asymmetric, no identical cards)

```
Row 1: [ Product 1 · FULL WIDTH · huge image · big headline underneath ]
Row 2: [ Product 2 · 60% width ]  [ Product 3 · 40% width, offset down ]
Row 3: [ Product 4 · 40% width, offset up ]  [ Product 5 · 60% width ]
CTA strip below: [View Full Catalog →]
```

**Each Product "Moment" Includes**:
- Medium or thick pattern frame around product image
- Category eyebrow label above name
- Product name: Playfair Display, size varies by grid position
- 1-line description + [Learn More ↗] ghost CTA
- Background color block: each product card has a soft cream/terracotta/mango low-opacity blob fill

**Interaction (High Intensity Hover)**:
- Image scales to 1.08 with Ken-Burns-style subtle pan
- Entire container lifts 12px with bigger shadow
- Background color blob brightens + grows
- CTA slides in from bottom (was hidden)
- Small decorative plant/geometric elements float upward from card
- Mobile: tap once = reveal interaction state, tap again = route to product page

**Product Data Structure** (`lib/products.ts`):
```typescript
export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  imageUrl: string;
  badge?: string;        // "New", "Bestseller"
  accentColor: "terracotta" | "mango" | "forest" | "indigo";
  ctaLabel?: string;
}
```
Do NOT invent products. Seed with 5-6 placeholder entries with clear `TODO` comments
and the image API placeholder URLs.

---

### Section 5: WHO WE WORK WITH (Stakeholder)
**Concept**: "There's a place for you in the journey."

**Interaction**: 3D Multi-face Product Cube.

Large 3D CSS cube in center-left (40% of width). It has 6 faces = 6 stakeholder types:
1. 🛒 I want to Explore Products (Consumers)
2. 🌾 Become a Supplier (Farmers)
3. 🚚 Distribution Opportunities (Distributors)
4. 🤝 Partner With Us (Business Partners)
5. 💼 Invest in Growth (Investors)
6. 👤 Join Our Team (Employees)

**Cube Behavior**:
- Cube rotates smoothly continuously (very slow, user can stop by interacting)
- Each face has: hand-drawn icon + stakeholder type label (pattern frame)
- Hover or tap face → cube stops rotating, faces you directly, and expands slightly
- Right side of section (60%): content area that DYNAMICALLY UPDATES to show the
  currently-selected stakeholder's details:
  - Headline: "I want to Explore Products"
  - Short description (what's in it for them)
  - Custom CTA button + [Learn More] link (routes to contact page with pre-filled form state)
- Click cube face → content animates (old slides left, new slides right)
- Below: shortcut pill buttons for all 6 stakeholders (alternative non-3D nav)

---

### Section 6: MANUFACTURING / PROCESSING
**Concept**: Combine ALL approaches — Split-screen, Illustration, Triptych, Flipbook.

This section is LONG and layered — a full 4-stage scroll journey:

**Stage 1 (Scroll Stop 1) — Raw Materials**:
- Split-screen Before/After. Left: raw agricultural goods (crops, grains, cocoa). Right: empty processing line.
- Large headline: "Raw African <em>Goodness</em>."

**Stage 2 (Scroll Stop 2) — Processing**:
- Animated stylized factory floor illustration (SVG, conveyor belt motion arrows, machinery lights pulsing)
- 3 feature cards with icons: Quality Control / Technology / Scale

**Stage 3 (Scroll Stop 3) — Processing → Finished**:
- Triptych photo series × 2 rows = 6 images. Ken Burns zoom effects staggered as you scroll.
- Each photo in medium pattern frame. Shows: sorting, milling, blending, inspecting.

**Stage 4 (Scroll Stop 4) — Finished Food**:
- Cross-fade sequence "flipbook" — rapid sequence of 8-10 product images cross-fading
  as you scroll (like a movie). Ends on one beautiful packaged food hero.
- Headline: "Finished. <em>Perfect.</em> Globally ready."
- CTA: [See Our Standards →] links to /what-we-do page

---

### Section 7: IMPACT
**Layout**: Bold Number Grid + Counters.

Headline: "Impact We Can <em>Feel</em>."

Grid layout:
```
[  10,000+  ]  [  [XX]  ]  [  [XX]+  ]
 Farmers        Communities   Products
 supported      reached       developed

[  [XX]+  ]  [  [XX]+  ]  [  [XX] t/yr ]
 Markets        Jobs         Production
 served         created      capacity
```

**Each Number Cell**:
- Playfair Display Black, MASSIVE size (clamp 4rem → 8rem depending on position),
  terracotta-600 color
- DM Mono label underneath, uppercase, charcoal-700
- Subtle: animated circular progress ring behind each number (fills up as counter runs)
- Custom hand-drawn icon above label (one per category)
- Pattern frame outer border around each cell (thin or medium)

**Animation**: As each cell enters viewport:
1. Number counter animates UP from 0 to placeholder value (spring easing, 1.8s duration)
2. Progress ring behind it draws in
3. Label and icon fade-up slightly delayed

Placeholder numbers use `[XX]+` format. Update `lib/constants.ts` for values.

---

### Section 8: GLOBAL AMBITION
**Concept**: Combine ALL approaches — Map Export Lines, World Routes, Product Globe,
Origin→Cargo→Shelf.

Multi-stage scroll section (3 stops):

**Scroll Stop 1 — Origin Story**:
- Split visual: left = African farm landscape portrait, right = container ship / cargo visual
- Headline: "Made from <em>Africa</em>."

**Scroll Stop 2 — The Journey**:
- Africa map at center. Stylized.
- Animated SVG lines PULSE outwards from African coastlines toward global dots
  (Europe, North America, Asia, Middle East). Each pulse = a shipment.
- Product silhouettes scattered along the routes (tiny, mango outline).
- Large Playfair Display number overlay: continent count, market count (placeholder)

**Scroll Stop 3 — Ready For The World**:
- Product in center at massive scale, surrounded by ring of global market dots
- World map faded in background
- Headline: "Ready for <em>the world</em>."
- CTA: [Let's Talk Global →]

---

### Section 9: FINAL CTA
**Visual**: Distinct from the rest — this is the BIG dark moment section.
- Background: Deep charcoal (near-black) with very faint kente pattern watermark
- Large terracotta blobs floating behind content, mango glow at edges
- Headline (Playfair Display Black, cream-white):
  ```
  "Let's grow
   something
   <em style="color: mango-400">bigger</em>."
  ```
- Supporting paragraph: "Whether you're looking for great food, a supply partnership,
  distribution opportunities or a business collaboration, let's talk."
- Two large CTAs stacked with space:
  [Talk To Us (gradient primary)]  [Explore Products (white/cream ghost)]
- Decorative: hand-drawn arrows pointing from headline to CTAs; single large kente
  diamond in bottom corner of the section

Animation: Blur-to-sharp entrance, headline reveals line-by-line with stagger.

---

### Section 10: FOOTER
Structure:
```
[ Logo + 1-line description + Social icons ]
[ 4-column grid:
  1. NAV (Home / About / Products / What We Do / Impact / Contact)
  2. PRODUCTS (placeholder categories / "View catalog")
  3. CONTACT (Location: [TBC], Email: [TBC], Phone: [TBC])
  4. STAY CONNECTED (newsletter signup placeholder form)
]
[ Copyright band + pattern strip divider at top of band ]
```
- Footer background: cream-50
- Pattern strip band between main content and copyright band
- All placeholders clearly marked `[TBC]` — do NOT invent info
- Social icons (custom hand-drawn): Instagram, LinkedIn, Facebook, Twitter/X, YouTube

---

## 11 — ANIMATION SYSTEM (High Intensity)

### Animation Principles
- **Always use spring easing** for energetic feel (Framer Motion: `type: "spring"`,
  `stiffness: 260`, `damping: 20`; GSAP: `Power4.out` or `elastic.out(1, 0.6)` for bounces)
- **Never use linear**. Avoid plain `ease-in-out` when spring fits better.
- **Stagger 40-120ms** on word/element reveals
- Respect `prefers-reduced-motion` globally — wrap ALL animations in conditional
  that falls back to simple opacity fades / no motion.

### Page Entrance System (Every Section)
Use Framer Motion `motion.div` wrapper variants:
```ts
const fadeUp = {
  hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
  show:   { opacity: 1, y: 0,  filter: "blur(0px)", transition: { ... } }
};
```
Applies to every section's root and every group of children with stagger.

### Micro-interactions (High Intensity — Every Hover)
- **Links / Nav**: Underline slides in, text color shifts to terracotta, +1px translate
- **Cards / Images**: Lift 8-16px, scale 1.02-1.08, shadow grows, inner frame border
  color shifts
- **Pattern-framed images**: Frame animates slightly (pattern's stroke-width pulses)
- **CTA buttons**: Lift, scale, gradient shifts, shadow explodes
- **All product / stakeholder cells**: Exaggerated bounces, decorative elements float out

### Signature Animations
1. **Logo split-slide + X glow** (page load)
2. **Farm→Food horizontal pinned scroll** (section 2 — GSAP ScrollTrigger + pin)
3. **3D stakeholder cube rotating** (section 5)
4. **Impact number counters** (section 7 — `react-countup` or custom)
5. **Global map pulsing export lines** (section 8 — GSAP repeat animations)
6. **Staggered word-by-word headline reveal** (all headlines)

### Performance Rules
- GSAP ScrollTrigger ONLY for the pinned horizontal section (#2).
- Everything else = Framer Motion (lighter, React-friendly).
- ALL scroll-triggered animations use `will-change` sparingly.
- No layout thrash — animate only `transform` and `opacity`.
- Images always use `next/image` with `priority` on above-the-fold assets.
- Test Lighthouse target: ≥90 performance on mobile.

---

## 12 — COMPONENT ARCHITECTURE & FOLDER STRUCTURE

```
app/
├── layout.tsx                       /* Root layout: fonts, metadata, nav, footer */
├── globals.css                      /* Tailwind base, CSS variables, keyframes */
├── page.tsx                         /* Homepage: all 11 sections stitched together */
├── about/page.tsx
├── products/page.tsx
├── what-we-do/page.tsx
├── impact/page.tsx
└── contact/page.tsx

components/
├── navigation/
│   ├── Navbar.tsx                   /* Scroll-aware navbar, desktop */
│   ├── MobileMenu.tsx               /* Full-screen mobile overlay menu */
│   └── Logo.tsx                     /* Split-slide logo reveal component */
├── footer/
│   └── Footer.tsx                   /* Full footer with pattern strip above */
├── hero/
│   └── Hero.tsx                     /* Homepage hero + collage */
├── sections/
│   ├── FarmToFoodJourney.tsx        /* Signature: horizontal pinned scroll */
│   ├── AboutSection.tsx
│   ├── ProductsShowcase.tsx
│   ├── StakeholderCube.tsx          /* 3D cube + content panel */
│   ├── ManufacturingSection.tsx     /* 4-stage scroll: raw → process → triptych → flipbook */
│   ├── ImpactSection.tsx            /* Number grid + counters */
│   ├── GlobalAmbition.tsx           /* Multi-stage scroll + map animations */
│   └── FinalCTA.tsx                 /* Dark moment big CTA */
├── products/
│   └── ProductCard.tsx              /* Reusable product "moment" card */
├── animations/
│   ├── MotionSection.tsx            /* Wrapper: blur-up + stagger variants */
│   ├── ScrollReveal.tsx             /* Generic in-view reveal wrapper */
│   └── PatternDivider.tsx           /* Textile pattern strip band */
├── ui/
│   ├── Button.tsx                   /* All 5 CTA variants */
│   ├── PatternFrame.tsx             /* Decorative pattern image wrapper */
│   ├── HandDrawnIcon.tsx            /* Icon renderer with pattern frame */
│   ├── icons.tsx                    /* All custom SVG icons */
│   ├── DecorativeBlobs.tsx          /* Organic blob backgrounds */
│   ├── DecorativePatterns.tsx       /* Repeating geometric / plant / watermark */
│   └── Eyebrow.tsx                  /* Uppercase mono category label */
└── layout/
    └── SectionContainer.tsx         /* Max-width wrapper + padding presets */

lib/
├── products.ts                      /* Structured product data (placeholders) */
├── constants.ts                     /* Impact numbers, nav links, stakeholder types */
├── patterns.ts                      /* Pattern SVG data (colors, widths) */
├── fonts.ts                         /* Next.js Google Fonts configuration */
└── utils.ts                         /* cn() class merger, motion helpers */
```

---

## 13 — TECH SPECS & DEPENDENCIES

### Stack (Mandatory per Brief)
- **Next.js** (latest stable) + **App Router**
- **TypeScript** strict mode
- **Tailwind CSS** (standalone config, CSS vars for colors)
- **Framer Motion** (primary animation lib — everything except pinned horizontal section)
- **GSAP + ScrollTrigger** (ONLY for the Farm→Food horizontal pinned scroll journey)
- **Lucide React** (fallback icons where custom haven't been drawn yet)
- **next/image** (ALL imagery)
- **Google Fonts via next/font/google**
- Deployable to Vercel (zero config)

### Tailwind Config
- Define all 14 color tokens as CSS custom properties in `globals.css`
- Extend theme with:
  - Custom color palette (`colors: { cream, terracotta, mango, earth, forest, indigo, charcoal }`)
  - Type scale (`fontSize` config matching 03 typography)
  - Spring easings (`transitionTimingFunction`)
  - Custom `borderRadius` values (soft rounded, not pill)
  - Pattern-specific `backgroundImage` for SVG textures

### Accessibility (Mandatory)
- All images have descriptive `alt` text.
- Semantic HTML: `<header>`, `<nav>`, `<main>`, `<section>` ×11, `<article>`, `<footer>`.
- Visible `:focus-visible` ring (mango-500, 3px outline) on EVERY interactive element.
- Color contrast ≥ 4.5:1 for all body text. Use contrast-checker before shipping.
- Navigation, CTAs, form fields = fully keyboard operable.
- Skip-to-content link.
- `aria-current="page"` on active nav item.
- `aria-labels` on icon-only buttons (mobile menu toggle, social icons).
- Every Framer Motion / GSAP animation wrapped in motion `ReducedMotion` check.

### SEO
- `app/layout.tsx` exports `metadata` object with:
  - Title template: `%s · Acres X Manna — African Agro-Processing`
  - Default description (from core brand message)
  - Open Graph + Twitter cards
  - Canonical URL: `https://acresxmanna.com/...`
- Each page exports its own `metadata`.
- `<H1>` exactly one per page.
- Heading hierarchy `H1 → H2 → H3` never skipped.
- `sitemap.ts` and `robots.ts` in `app/` folder.
- Product structured data (`JSON-LD`) on `/products` page.

---

## 14 — DEVELOPMENT MILESTONES (19 STAGES)

Build order — each stage produces a BUILDABLE, clean application.

### Phase 1 — Foundation
| # | Stage | Output |
|---|-------|--------|
| 1 | **Set up project** | `npx create-next-app@latest` with App Router + TS + Tailwind. Install Framer Motion, GSAP, Lucide. File structure scaffolded. `npm run dev` works, `npm run build` clean. |
| 2 | **Typography + Color system** | Tailwind config extended, CSS variables set, Google fonts loaded. Test page renders all type scale sizes and color swatches. Pattern SVG data defined in `lib/patterns.ts`. |

### Phase 2 — Core UI Primitives
| # | Stage | Output |
|---|-------|--------|
| 3 | **Navigation (Navbar + Logo + Mobile Menu)** | Split-slide logo reveal, scroll transition, desktop links, Partner With Us CTA, full-screen animated mobile menu. Accessible keyboard nav. |
| 4 | **Hero Section** | Full homepage hero section. Split layout, collage imagery, word-by-word headline animation, both CTAs. Pattern frames in place. |
| 5 | **UI Components Suite** | `Button.tsx` (5 variants), `PatternFrame.tsx` (3 thicknesses), `MotionSection.tsx`, `Eyebrow.tsx`, `DecorativeBlobs`, all pattern SVG components, `SectionContainer.tsx`. |

### Phase 3 — Signature Sections
| # | Stage | Output |
|---|-------|--------|
| 6 | **Farm → Food (Horizontal Scroll Journey)** | Pinned 6-panel horizontal section with GSAP ScrollTrigger. Progress bar, color transitions, 6 stages populated with placeholder content + icons. |
| 7 | **About Section** | Editorial layout with pull-quote, pillars, pattern frames, plant illustrations. |
| 8 | **Products Section** | Large poster-style asymmetric grid + 6 placeholder products in `lib/products.ts`. High-intensity hover interactions. Mobile tap-state alternative. |
| 9 | **Stakeholder 3D Cube** | Rotating CSS 3D cube, 6 stakeholder faces, dynamic content panel, shortcut pills. Cube interaction + content swap animations. |

### Phase 4 — Remaining Sections
| # | Stage | Output |
|---|-------|--------|
| 10 | **Manufacturing Section (4 stages)** | Raw split-screen → animated factory illustration → triptych photos → cross-fade flipbook. All 4 scroll stops wired. |
| 11 | **Impact (Number Grid + Counters)** | 6-cell impact grid, counter animations, progress rings, placeholder `[XX]` values. |
| 12 | **Global Ambition (3 scroll stops)** | Origin split → map pulsing export lines → product globe + headline. |
| 13 | **Final CTA** | Dark charcoal section, kente watermark, blobs, glow, headline + 2 CTAs. |
| 14 | **Footer + Pattern Dividers** | Full 4-column footer with TBC placeholders. Pattern strip bands between ALL homepage sections. |

### Phase 5 — Polish & Production
| # | Stage | Output |
|---|-------|--------|
| 15 | **Page transitions + micro-interactions pass** | Every hover, link, card, frame, icon has motion. Decorative blobs/watermarks added to every section's empty space. Maximalist mix layered. |
| 16 | **Performance optimization** | `next/image` sizing review, priority flags, lazy loading below-the-fold. Lighthouse scores ≥90 performance. Animation perf audit (no layout thrash). |
| 17 | **Responsive layouts** | 3 breakpoints tested: mobile (375px), tablet (768px), desktop (1440px). Components collapse gracefully. Mobile product tap-state works. |
| 18 | **Accessibility + SEO pass** | Contrast audit, keyboard-only navigation review, aria checks. Metadata object per page. sitemap.ts + robots.ts. Structured data for products. |
| 19 | **Production build + Vercel deploy prep** | `npm run build` clean — 0 errors, 0 TS warnings, 0 ESLint errors. Vercel config ready (default Next). |

---

## 15 — VERIFICATION & SIGN-OFF CHECKLIST

Before any stage is marked "done":
- [ ] `npm run build` completes without errors or TypeScript warnings
- [ ] All interactive elements tabbable, focus rings visible
- [ ] Mobile view (375px Chrome DevTools) has no horizontal overflow
- [ ] `prefers-reduced-motion` toggled ON → animations degrade to fades only
- [ ] Console has 0 JavaScript errors
- [ ] No placeholder Lorem Ipsum text remains (use "[TBC]" / "[XX] placeholders as specified)
- [ ] Every image has an alt tag

---

## 16 — REFERENCE IMAGE API PROMPTS (Placeholder Photography)

Use these with the image generation endpoint for placeholders:

| Purpose | Prompt (URL-encode) | Size |
|---------|----------------------|------|
| Hero main | "A vibrant African agricultural landscape collage with golden maize fields, fresh ripe mango fruits, a bowl of colorful prepared West African jollof rice and vegetables, a smiling African farmer woman holding a harvest basket, warm golden hour sunlight, cinematic editorial food photography composition" | `landscape_16_9` |
| Farm stage 1 | "Lush green African farm field with rows of healthy crops, farmer hands tending to young plants in rich red earth soil, warm sunlight, editorial photography" | `landscape_4_3` |
| Harvest stage 2 | "African farmers harvesting golden grain and maize into woven baskets, overflowing harvest pile of colorful fresh produce, celebration, warm golden hour" | `landscape_4_3` |
| Processing stage 3 | "Modern clean food processing factory interior with stainless steel machinery, workers in hygienic coats sorting grains, bright professional facility" | `landscape_4_3` |
| Packaging stage 4 | "Modern food packaging line with branded premium boxes and bags being filled with African food products, clean industrial aesthetic" | `landscape_4_3` |
| Food stage 5 | "Beautiful plated African food — jollof rice with fried plantains, colorful vegetables, elegant plating on ceramic dish, restaurant food styling, dark moody background" | `portrait_4_3` |
| Product 1 | "Premium packaged African food product in elegant branded box with terracotta label, grain maize flour package, studio product photography, cream background" | `portrait_4_3` |
| About portrait | "Group portrait of African farmers and food production team standing together in a sunlit warehouse, diverse ages, smiling confidently, authentic human photography" | `portrait_4_3` |
| Impact community | "African women farmers cooperative standing together in a village setting with harvest baskets, community empowerment, warm lighting, documentary photography" | `portrait_4_3` |
| Factory illustration ref | "Detailed vector style illustration of modern food processing plant, conveyor belts, stainless steel machinery, clean lines, terracotta and mango color palette" | `landscape_16_9` |

---

**END OF PLAN** — Creative direction locked. Proceed to Stage 1 when ready.
