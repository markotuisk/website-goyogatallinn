# Short-term Memory - Goyoga Tallinn Website

Recent insights, discovered behaviors, and pending notes from the last sessions.

## Recent Insights (Feb 2026)
- **Language State Bug**: Discovered that re-rendering during language switch can lag behind if `localStorage` isn't updated *before* the UI refresh. Fixed by moving the update call in `setLanguage`.
- **Modals vs Hash**: Deep linking works by checking `window.location.hash` on load, but must be careful with smooth scroll implementation as it can prevent the URL from updating if generic preventDefaults are set.
- **Events Data**: The system is now 100% dynamic. Adding an event requires updating `js/events.js` and providing assets/titles for EN, ET, and FI.

## Identified "Gotchas"
- `lucide.createIcons()` needs to be recalled every time content is injected dynamically (e.g., after `renderEvents`).
- The "Share" feature uses `navigator.share` but requires a fallback specifically for desktop non-Chrome browsers (implemented clipboard copy).

## Current Context
- The project is now stable with full multi-language support and dynamic events.
- Individual event pages are live and support rich content like itineraries and galleries.
