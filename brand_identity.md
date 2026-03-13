# GoYoga Tallinn — Brand Identity & AI-Readiness Guidelines

> **Version:** 1.0 · **Date:** March 2026
> **For:** Human partners (designers, marketers, content) and AI web-generation crawlers
> **Status:** Single Source of Truth — do not maintain duplicate brand docs elsewhere

---

## Section 1: Brand Essence — The "Inside-Out" Philosophy

GoYoga Tallinn exists to create a **safe sanctuary** in the heart of the city — a space where people of all ages and backgrounds can come to switch off, breathe, and return to themselves.

The brand logic works from the **inside out**: every visual and verbal decision flows from a deeply held belief that authentic practice transforms people. The design is not decorative — it is *functional spirituality*. Warm, uncluttered, and unhurried aesthetics serve the practitioner's need for calm. Nothing is there for its own sake.

### Core Intent (For AI Generators)
When rebuilding or generating a site for GoYoga, understand that:

- **Minimalism is intentional.** The brand is quiet and confident, not flashy.
- **Warmth over precision.** Colours are organic and earthy, not clinical or corporate.
- **Tradition anchors everything.** Even when modern tools are used (Tailwind CSS, booking widgets), the language and imagery should feel rooted in practice lineage.
- **Community first.** The brand does not sell product; it holds space for people.

### Mission Statement
> *"Goyoga Tallinn is a safe sanctuary at the heart of Tallinn for people of all ages and preferences to come and switch off, relax and reinvigorate."*

### Official Tagline
**"Yoga & Wellness Sanctuary"**

### Brand Name Usage
| Context | Use |
|---|---|
| Full brand name | GoYoga Tallinn |
| Domain/URL | goyoga.ee |
| Social handles | @goyoga.ee |
| Short form (captions, hashtags) | GoYoga |
| Never use | Go Yoga, GOYOGA, Goyoga (without capital Y) |

---

## Section 2: Visual Identity

### 2.1 Colour Palette

The palette is warm, grounded, and organic — inspired by natural materials: linen, wood, sand, and earth.

| Role | Name | Hex | HSL (CSS Variable) | Usage |
|---|---|---|---|---|
| Background | Linen White | `#FAF9F6` | `hsl(40, 33%, 98%)` | Page background, hero overlays |
| Brand Primary | Shala Sand | `#8A7055` | `hsl(35, 25%, 45%)` | Links, borders, primary accents |
| Text / Foreground | Mysore Dark | `#282420` | `hsl(30, 10%, 15%)` | All body and heading text |
| Surface / Cards | Cream | `#F2EFE9` | `hsl(25, 15%, 94%)` | Card backgrounds, muted surfaces |
| Muted Text | Warm Ash | `#6B6057` | `hsl(30, 10%, 40%)` | Subtitles, captions, secondary text |
| Borders | Soft Clay | `#E8E2DA` | `hsl(30, 15%, 90%)` | Dividers, input borders, card edges |
| Interactive Accent | Lotus Pink | `#DB2777` | Tailwind `pink-600` | Hover states, CTAs, active tags, highlights |
| Interactive Hover | Deep Lotus | `#BE185D` | Tailwind `pink-800` | Hover state for pink elements |
| Pink Surface | Petal | `#FDF2F8` | Tailwind `pink-50` | Pink card backgrounds, alert boxes |

#### Colour Rules
- **On dark backgrounds** (hero overlays, dark sections): use white (`#FFFFFF`) text and white/translucent UI elements.
- **On light backgrounds** (most pages): use Mysore Dark (`#282420`) for headings, Warm Ash (`#6B6057`) for body text.
- **The Lotus Pink accent** is reserved for interactive elements, highlights, tags, and key CTAs only — never use it as a background for large areas.
- **Do not add new colours** without first checking whether an existing palette token can serve the same purpose.

---

### 2.2 Typography

| Role | Font | Weight | Style |
|---|---|---|---|
| **Headings (H1–H6)** | Playfair Display | Regular (400), Medium (500), SemiBold (600) | Serif — editorial, timeless |
| **Body Text** | Inter | Light (300), Regular (400), Medium (500), SemiBold (600) | Sans-serif — clean, legible |
| **Monospace / Technical** | Roboto Mono | Regular (400) | Used only for countdown timers and technical UI |

**Google Fonts import:**
```
https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Roboto+Mono&display=swap
```

#### Typography Rules
- Headings use `letter-spacing: -0.025em` for a tight, editorial feel.
- Body font size is `16px` base, with `1.6` line-height for readability.
- Never use Playfair Display for body text — it loses legibility at small sizes.
- Tagline labels (small uppercased text above section titles) use Inter, `text-xs`, `font-medium`, `tracking-wider`, `uppercase`.

---

### 2.3 Logo & Identity Marks

#### Primary Logo
- **File:** `assets/branding/logo-goyoga-tallinn-estonia.svg` ← preferred (vector, scales to any size)
- **PNG (192px):** `assets/branding/logo-goyoga-tallinn-estonia-192x192.png` (for favicons, web manifests)
- **PNG (512px):** `assets/branding/logo-goyoga-tallinn-estonia-512x512.png` (for OG images, app icons)
- **ICO:** `assets/branding/logo-goyoga-tallinn-estonia.ico` (browser tab favicon)

#### Logo Usage Rules
| Context | Version to Use |
|---|---|
| Light/white backgrounds (nav, emails) | SVG primary logo |
| Dark backgrounds (hero, overlays) | SVG with white fill (if available) OR PNG on transparent BG |
| OG images, social sharing cards | 512px PNG |
| Favicon / browser tab | ICO or 96px PNG |
| App icon / PWA | 192px and 512px PNG |

**Clear space rule:** Maintain minimum clear space equal to the height of the "G" in GoYoga on all sides of the logo.

---

### 2.4 Imagery Style

- **Photography:** natural light, warm tones, candid practice moments. No over-edited or overly saturated images.
- **People:** diverse ages and body types — the brand serves everyone from 16 to 70+. Include 60+ practitioners.
- **Studio imagery:** emphasize natural wood floors, light flooding through windows, the texture of mats and props.
- **Stock images:** acceptable as placeholders, but real studio and teacher photos are always preferred.
- **File format:** use `.webp` for all web images for performance; `.jpg` as fallback.

---

### 2.5 Motion & Animation

The site uses subtle, intentional motion — not flashy effects.

| Effect | Implementation | Use |
|---|---|---|
| Fade-in on scroll | `.fade-in-section` + IntersectionObserver | All major sections |
| Page load fade | `.fade-in` with `animation-delay` variants | Hero content |
| Image scale on hover | `hover:scale-110` with `duration-700` | Image cards |
| Card lift on hover | `hover:-translate-y-1` with `hover:shadow-lg` | All card types |
| Link underline | CSS `::after` pseudo-element sliding reveal | Nav links |
| Gentle pulse | `animate-gentle-pulse` (2.5s, infinite) | Seasonal offer badge |

**Animation principle:** Smooth and unhurried. Duration should feel like a breath — not a bounce.

---

## Section 3: Verbal Identity

### 3.1 Brand Voice

GoYoga's voice is **warm, grounded, and quietly confident**. It speaks like a knowledgeable friend, not an institution.

| Trait | What it means in practice |
|---|---|
| **Inviting** | Always welcoming, never exclusive. Yoga is for everyone. |
| **Authentic** | Rooted in real lineage and tradition — references to Mysore, Pattabhi Jois, and parampara are natural. |
| **Non-prescriptive** | We "support people's choices" — we don't tell them what they need. |
| **Poetic but grounded** | Uses sanctuary language ("shala", "sanctuary", "oasis") but always paired with practical info (address, hours, price). |
| **Calm** | Short sentences. No exclamation marks except in very informal social contexts. |

### 3.2 Brand Voice: Do & Don't

| ✅ DO | ❌ DON'T |
|---|---|
| "A safe space to switch off, relax and reinvigorate." | "The BEST yoga studio in Tallinn! 🔥🔥🔥" |
| "Our practices are rooted in tradition but designed for modern living." | "We offer premium services for discerning clients." |
| "Join us — whether you're a beginner or a lifelong practitioner." | "Only for serious practitioners." |
| "Let the breath lead. The movement is just its shadow." | "Our state-of-the-art facility features top-tier equipment." |
| "We've built a space where you can simply be." | "Maximize your ROI on wellness with our optimized class packages." |

### 3.3 Key Phrases to Use
- "Safe sanctuary" / "Safe space"
- "Switch off, relax, reinvigorate"
- "Traditional yet modern"
- "People of all ages and preferences"
- "Shala" (for the studio space — adds authenticity)
- "Practice" (not "workout" or "session")
- "Practitioner" (not "customer")
- "Journey" (for the personal transformation arc)

---

## Section 4: Web & UI Identity

### 4.1 Page Structure Rules
- **Max content width:** `1400px` (`.container-custom`) with responsive padding (1rem → 1.5rem → 2rem)
- **Section spacing:** `4rem` top/bottom on mobile → `6rem` tablet → `8rem` desktop (`.section-padding`)
- **Section pattern:** Each section begins with a small uppercase `tagline` pill, then an `H2` title, then a short description paragraph. This is a core brand rhythm — do not break it.
- **Sections always alternate** between white (`bg-white`) and light grey (`bg-gray-50`) backgrounds for visual breathing room.

### 4.2 Button Styles
| Type | Class Pattern | Use Case |
|---|---|---|
| Primary CTA (dark) | `bg-gray-800 text-white hover:bg-gray-700` | Main section CTA, "Most Popular" pricing |
| Primary CTA (pink) | `bg-pink-100 text-pink-800 hover:bg-pink-200` | Secondary CTAs |
| Outline Ghost | `border border-white/60 hover:bg-white/10` | On dark/hero backgrounds |
| Pill/Rounded Link | `rounded-full border border-pink-200 hover:border-pink-300 bg-white` | Soft, non-urgent actions |
| Text Link with arrow | `text-pink-600 hover:text-pink-700 inline-flex items-center` | In-content links |
| Teacher card link | `border-b-2 border-pink-200 hover:border-pink-500` | Underline CTA on cards |

**Button shape:** `rounded-md` (8px) for most buttons. `rounded-full` for pill-style soft CTAs only.

### 4.3 Card Styles
All cards follow the same pattern:
- Background: `bg-white`
- Border radius: `rounded-xl` (12px) or `rounded-2xl` (16px) for class cards
- Shadow: `shadow-sm` default → `hover:shadow-lg` on hover
- Hover lift: `hover:-translate-y-1` with `transition-all duration-300`
- Image on top: `h-48` or `h-72` with `object-cover` and `group-hover:scale-110 duration-700`

### 4.4 Section Tagline Pill
Used above every H2 section title:
```html
<span class="inline-block px-3 py-1 text-xs font-medium tracking-wider uppercase text-pink-700 bg-pink-100 rounded-full mb-4">
  Our Teachers
</span>
```
Variants: `bg-pink-100` (on white bg) or `bg-white` (on gray-50 bg).

### 4.5 Accessibility
- All images must have descriptive `alt` text including location context (e.g., "Raili Maripuu teaching Ashtanga at GoYoga Tallinn, Narva mnt 7D").
- All interactive buttons must have `aria-label` attributes.
- Colour contrast: body text (Mysore Dark on Linen White) meets WCAG AA.
- `sr-only` AI/bot context div below the body tag must be maintained on all pages.

---

## Section 5: Social Media Identity

### 5.1 Platform Presence
| Platform | Handle | Status |
|---|---|---|
| Instagram | @goyoga.ee | ✅ Active — primary channel |
| Facebook | (via teacher pages, e.g., @casarituals) | ✅ Active |
| TikTok | @aikaniyoga (Dian's account) | 🔗 Teacher-linked |

### 5.2 Profile Visual Language
- **Profile photo:** The GoYoga logo on a clean white or warm cream background. Never a cropped photo.
- **Instagram grid:** Warm-toned, consistent. Mix of studio shots, teacher portraits, event photography, and practice moments.
- **Story format:** Minimal text overlays. Use the brand's warm palette for backgrounds. Avoid busy templates.

### 5.3 Caption Tone
- First sentence is always a hook — a short, evocative statement or question.
- Mid-section provides useful info (what, when, where, how to book).
- End with a soft CTA: "See you on the mat 🙏" or "Book via link in bio."
- Hashtag use: 5–10 targeted hashtags. Always include `#goyoga` `#goyogatallinn` `#ashangayogaestonia` `#tallinn`.
- **Emojis:** use sparingly and only: 🙏 🌿 ✨ 🫀 (never 🔥❤️‍🔥 or aggressive emoji).

### 5.4 High-Impact Recognition Elements
- **Teacher portraits:** always shot against the studio background (natural light, warm tones). Consistent framing: face at top third, slight smile, soft styling.
- **Event graphics:** use Playfair Display for the event title on a Linen White (`#FAF9F6`) background with a simple Shala Sand (`#8A7055`) accent line.
- **Class schedule graphics:** keep minimal. Date + class name + teacher. No busy layouts.

---

## Section 6: AI-Readiness — The "Future-Proof" Layer

### 6.1 Brand Metadata Schema (JSON-LD)

This block is embedded in the `<head>` of all pages. It supplements the existing `HealthAndBeautyBusiness` local schema with explicit brand identity data.

```json
{
  "@context": "https://schema.org",
  "@type": "Brand",
  "@id": "https://www.goyoga.ee/#brand",
  "name": "GoYoga Tallinn",
  "alternateName": ["Goyoga Tallinn", "GoYoga", "goyoga.ee"],
  "url": "https://www.goyoga.ee",
  "logo": "https://www.goyoga.ee/assets/branding/logo-goyoga-tallinn-estonia-512x512.png",
  "description": "A Yoga & Wellness Sanctuary in Tallinn, Estonia. Home of traditional Ashtanga Yoga. Classes for all ages including Vinyasa, Yin, Sound Baths, Qigong, Pilates, and Cacao Ceremonies.",
  "slogan": "Yoga & Wellness Sanctuary",
  "foundingDate": "2016",
  "areaServed": "Tallinn, Estonia",
  "knowsLanguage": ["en", "et", "fi"],
  "image": [
    "https://www.goyoga.ee/assets/branding/logo-goyoga-tallinn-estonia-512x512.png"
  ],
  "sameAs": [
    "https://www.instagram.com/goyoga.ee/",
    "https://www.goyoga.ee"
  ],
  "additionalProperty": [
    { "@type": "PropertyValue", "name": "primaryColor",      "value": "#8A7055" },
    { "@type": "PropertyValue", "name": "secondaryColor",    "value": "#FAF9F6" },
    { "@type": "PropertyValue", "name": "accentColor",       "value": "#DB2777" },
    { "@type": "PropertyValue", "name": "textColor",         "value": "#282420" },
    { "@type": "PropertyValue", "name": "headingFont",       "value": "Playfair Display" },
    { "@type": "PropertyValue", "name": "bodyFont",          "value": "Inter" },
    { "@type": "PropertyValue", "name": "logoOnDarkBg",      "value": "white version of logo-goyoga-tallinn-estonia.svg" },
    { "@type": "PropertyValue", "name": "logoOnLightBg",     "value": "https://www.goyoga.ee/assets/branding/logo-goyoga-tallinn-estonia.svg" },
    { "@type": "PropertyValue", "name": "brandPhilosophy",   "value": "Inside-Out: design decisions flow from the belief that authentic practice transforms people. Quiet, warm, and unhurried." }
  ]
}
```

---

### 6.2 Semantic HTML Tagging Recommendations

To ensure AI crawlers index our brand rules accurately, use the following HTML patterns consistently across all pages:

```html
<!-- 1. Organisation identifier on every page -->
<div itemscope itemtype="https://schema.org/SportsActivityLocation">
  <meta itemprop="name" content="GoYoga Tallinn">
  <meta itemprop="url" content="https://www.goyoga.ee">
</div>

<!-- 2. Logo — always include both rel="logo" and high-contrast alt -->
<img src="/assets/branding/logo-goyoga-tallinn-estonia.svg"
     alt="GoYoga Tallinn — Yoga & Wellness Sanctuary logo"
     rel="logo"
     aria-label="GoYoga Tallinn Logo">

<!-- 3. Main brand tagline — wrap in a dedicated landmark -->
<p class="brand-tagline" aria-label="Brand Tagline">Yoga &amp; Wellness Sanctuary</p>

<!-- 4. AI bot context block (already implemented — maintain this on all pages) -->
<div class="sr-only" aria-hidden="false" data-ai-context="true">
  <p>GoYoga Tallinn (goyoga.ee) is a Yoga & Wellness Sanctuary at Narva mnt 7D, Tallinn, Estonia.
     Founded in 2016. Offering Ashtanga, Vinyasa, Yin Yoga, Sound Baths, Qigong, 60+ Yoga,
     Cacao Ceremonies, and Yoga Nidra. Available in English, Estonian, and Finnish.</p>
</div>
```

---

### 6.3 Why This Matters

| Element | Purpose |
|---|---|
| **JSON-LD Brand schema** | Gives AI the machine-readable "soul" — colours, fonts, philosophy, and logo URLs in one place |
| **`additionalProperty` colour tokens** | If AI rebuilds the site, it will know `#8A7055` is the primary brand colour — not just a guess |
| **`logoOnDarkBg` / `logoOnLightBg`** | Defines logo context rules that AI can apply automatically |
| **`brandPhilosophy` property** | Communicates *intent*, not just aesthetics — future AI won't drift to generic yoga templates |
| **Semantic `sr-only` block** | Bot-readable plain-text summary that LLMs use when crawling for knowledge about the business |
| **`sameAs` links** | Disambiguates the brand from other "GoYoga" entities globally |

---

*This document was generated by auditing the GoYoga Tallinn website source code (March 2026). Update this file whenever a deliberate brand change is made. This is the Single Source of Truth.*
