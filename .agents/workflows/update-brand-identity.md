---
description: How to update the GoYoga brand identity — guidelines document and AI schema
---

# GoYoga Brand Identity Workflow

This workflow describes how to maintain, update, and apply the GoYoga brand identity system.

## When to Use This Workflow

- When the brand colours, fonts, or logo change
- When updating the brand voice or adding new guidelines
- When a new page is added to the website (needs Brand schema)
- When preparing assets for a new partner, designer, or AI tool

---

## Files Involved

| File | Purpose |
|---|---|
| `brand_identity.md` | Human-readable Single Source of Truth — update this first |
| `brand.html` | Public-facing brand portal page with animations and examples |
| `index.html` (head) | Full Brand JSON-LD schema (colours, fonts, philosophy) |
| `faq.html`, `offers.html`, `rent.html` | Compact Brand JSON-LD (slogan, colours, fonts) |

---

## Steps

### 1. Update the source of truth
// turbo

Update `brand_identity.md` with the new brand information. This is the human-readable document — update all relevant sections (Section 2 for visual changes, Section 3 for verbal changes, etc.).

### 2. Update the public brand page

Update `brand.html` to reflect any visual or verbal changes. Key areas to update:
- **Colour swatches** — the `onclick="copyHex('#HEXCODE')"` values and background colours
- **Typography demos** — if fonts change, update the demo text and the font links in `<head>`
- **Voice examples** — update Do/Don't cards in Section 4
- **JSON preview block** — update the code snippet in Section 6

### 3. Update the Brand JSON-LD in index.html

Find the `<!-- Brand Identity Schema -->` comment in `index.html`'s `<head>`. Update:
- `primaryColor` → new primary hex
- `headingFont` / `bodyFont` → new font names
- `brandPhilosophy` / `brandVoice` → if tone or positioning changes

### 4. Apply compact schema to all other HTML pages

The same Brand JSON-LD (compact form) must be in `faq.html`, `offers.html`, `rent.html`, `teacher.html`, `class.html`, and any new pages. Add it before the Google Analytics script in `<head>`.

Template:
```html
<!-- Brand Identity Schema — AI-Readiness Layer -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Brand",
  "@id": "https://www.goyoga.ee/#brand",
  "name": "GoYoga Tallinn",
  "url": "https://www.goyoga.ee",
  "logo": "https://www.goyoga.ee/assets/branding/logo-goyoga-tallinn-estonia-512x512.png",
  "slogan": "Yoga & Wellness Sanctuary",
  "additionalProperty": [
    { "@type": "PropertyValue", "name": "primaryColor",       "value": "#8A7055" },
    { "@type": "PropertyValue", "name": "backgroundColor",    "value": "#FAF9F6" },
    { "@type": "PropertyValue", "name": "accentColor",        "value": "#DB2777" },
    { "@type": "PropertyValue", "name": "headingFont",        "value": "Playfair Display" },
    { "@type": "PropertyValue", "name": "bodyFont",           "value": "Inter" },
    { "@type": "PropertyValue", "name": "guidelinesDocument", "value": "https://www.goyoga.ee/brand_identity.md" }
  ]
}
</script>
```

### 5. Verify footer link

Every page that has a footer must include the "Brand Identity" link in the Resources column:
```html
<li><a href="brand.html" class="hover:text-pink-400 transition-colors text-gray-400">Brand Identity</a></li>
```

### 6. Push to GitHub
// turbo
```bash
cd "/Users/markotuisk/Documents/Goyoga Tallinn/website"
git add brand.html brand_identity.md index.html faq.html offers.html rent.html
git commit -m "brand: add brand identity portal and AI-readiness schema"
git push
```

### 7. Validate live schema

After deploying, visit:
- https://search.google.com/test/rich-results → paste `https://www.goyoga.ee`
- https://validator.schema.org/ → paste `https://www.goyoga.ee`

Confirm the `Brand` entity appears with correct colour and font properties.

---

## Quick Reference: Brand Colours

| Name | Hex | Role |
|---|---|---|
| Linen White | `#FAF9F6` | Background |
| Shala Sand | `#8A7055` | Primary brand |
| Mysore Dark | `#282420` | Text |
| Cream | `#F2EFE9` | Card surfaces |
| Warm Ash | `#6B6057` | Muted text |
| Lotus Pink | `#DB2777` | Interactive accent |

## Quick Reference: Typography

- **Headings**: Playfair Display (400, 500, 600, italic)
- **Body**: Inter (300, 400, 500, 600, 700)
- **Technical UI only**: Roboto Mono (countdown timers, hex codes)
