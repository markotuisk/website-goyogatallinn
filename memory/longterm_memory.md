# Long-term Memory - GoYoga Website

Foundational context, architectural decisions, and design philosophy.

## Project Vision
GoYoga Tallinn is a premium yoga and wellness sanctuary. The website must feel organic, trustworthy, and visually stunning, reflecting the authentic practice of Ashtanga and holistic wellbeing.

## Technical Architecture
- **Stack**: Vanilla HTML/JavaScript/CSS (No complex JS frameworks for maximum speed and simplicity).
- **Styling**: Vanilla CSS supported by Tailwind CSS for rapid layout adjustments.
- **Iconography**: Lucide icons used throughout.
- **I18n**: Custom data-driven translation system (`js/data.js` and `js/script.js`).
- **Events Engine**: Custom data-driven event system (`js/events.js`) with auto-expiry filtering.

## Design Philosophy
- **Colors**: Earthy, muted tones (HSL centered around primary browns and whites).
- **Typography**: `Inter` for clarity, `Playfair Display` for elegant serif headers.
- **Interactions**: Subtle fade-ins and smooth scrolls to maintain a calm, premium atmosphere.

## Core Feature Logic
- **Modals**: Used for secondary information (pricing, contact details, directions) to keep the main flow clean.
- **Deep Linking**: Priority for SEO and shareability, allowing direct access to specific modals or event pages.
- **Auto-Expiry**: Automated site maintenance for time-sensitive events.
