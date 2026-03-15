# Manage Goyoga Events and Retreats

This document dictates the absolute rules and process for implementing, validating, and translating new events and retreats on the Goyoga Tallinn website. It is specifically designed to prevent AI hallucinations, maintain proper Schema JSON-LD, ensure frontend automations behave correctly, and strictly adhere to the Goyoga brand's communicative guidelines.

## 1. Schema & Required Data
When adding a new event or retreat to `website/js/events.js`, **you must not make up or infer data**. You must request or verify the following accurate data points before injecting:
- **`id`**: Unique string without spaces (e.g., `new-moon-gong-apr-2026`).
- **`type`**: String, either `'studio'` or `'retreat'`.
- **`category`**: String, usually `'studio'`, `'estonia'`, or `'abroad'`.
- **`active`**: Boolean (`true` to display, `false` to hide limit rendering).
- **`startDate`**: ISO 8601 string (`YYYY-MM-DD`). 
- **`expiryDate`**: ISO 8601 string (`YYYY-MM-DD`). For single-day events, this is typically the day *after* the `startDate`.
- **`image`**: A valid relative URL (e.g., `/assets/events/...`) or absolute HTTP URL (e.g., Unsplash). Ensure it does not get incorrectly combined with the website base URL.
- **`teachers`**: Array of teacher IDs exactly matching `teachers.js` data (e.g., `['marit-tuisk', 'david-lepp']`).
- **`registerLink`**: Registration hook (e.g., `#contact` or `mailto:events@goyoga.ee`).

## 2. Multilingual Content Structure
Every event MUST include localized objects for exactly these four languages: `en`, `et`, `fi`, `ru`. Each language object MUST contain:
- **`title`**: The localized name of the event.
- **`date`**: Human-readable string (e.g., '14. märts 2026').
- **`location`**: The venue name/address.
- **`organizer`**: Usually 'Goyoga Tallinn', 'Casa Rituals', or specific teachers keys.
- **`description`**: A short 1-2 sentence hook.
- **`fullDescription`**: The complete event details (HTML `p` tags, `ul` tags supported).
- **`highlights`**: Array of 3-5 short bullet points summarizing the event.

## 3. Automation and Display Behaviors
The website uses frontend JavaScript (`script.js`) to automatically manage event timelines:
- **Status Tags (Automatically toggled based on `expiryDate`)**:
  - **TÄNA (TODAY) / Green Tag**: Automatically applied when the current date matches `expiryDate - 24h` (the calculated start date).
  - **HOMME (TOMORROW) / Blue Tag**: Automatically applied when the current date matches the day *before* the start date.
  - **MÖÖDUNUD (PASSED) / Gray Tag**: Automatically applied when the current date matches the day *after* the start date.
- **Auto-Removal**: The event automatically disappears from the frontend UI exactly 24 hours after the `expiryDate` passes. You do not need to manually delete past events immediately. They gracefully fall out of the UI logic. 

## 4. Translation and Tone Guidelines
It is absolutely critical to follow these translation rules for `et` (Estonian) and `ru` (Russian), applying the same philosophy to `fi` and `en`:
1. **NO AI Jargon**: Avoid typical AI patterns (e.g., "Welcome to a transformative journey", "Embark on an ethereal experience", "Delve into...").
2. **NO Markdown/Symbol Spam**: Stay away from overusing hyphens (`--`), asterisks (`**`), or emojis (`✨`, `🔮`) unless practically requested. Clean reads better.
3. **Estonian Relatability**: The language must sit naturally with Estonian men and women. It should sound grounded, direct, warm, but not overly dramatic. 
4. **Accessible to the 'Less Spiritual'**: Frame breathwork, yoga, and retreats in practical, somatic, and relatable terms. People entirely new to spiritual practices must feel understood to participate. Prioritize grounded benefits (e.g., "relieving physical stress", "calming the nervous system", "resting the body deep") over esoteric concepts (e.g., "activating quantum light bodies", "opening the third eye").

## 5. Deployment Post-Step
After inserting the event data, ALWAYS:
1. Re-run `cd website && python3 build_script.py` to regenerate all static HTML files and ensure all structured event schema attributes (`offers`, `performer`, `startDate`, `endDate`) are correctly rewritten.
2. Manually execute a `git commit` and `git push origin main` to deploy changes directly to Cloudflare.
