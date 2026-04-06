---
name: "Manage Goyoga Events and Retreats"
description: "Guidelines and instructions for adding, editing, and managing events and retreats for the Goyoga Tallinn website."
---

# Manage Goyoga Events and Retreats

This skill outlines the strict process for implementing, validating, and translating new events and retreats on the Goyoga Tallinn website, preventing AI hallucinations and ensuring cultural relevancy.

## 1. Schema & Required Fields
When adding a new event or retreat to `website/js/events.js`, **you must not make up data**. You require the following accurate data points before injecting:
- **`id`**: Unique string without spaces (e.g., `new-moon-gong-apr-2026`).
- **`type`**: String, either `'studio'` or `'retreat'`.
- **`category`**: String, usually `'studio'`, `'estonia'`, or `'abroad'`.
- **`active`**: Boolean (`true` to display, `false` to hide).
- **`startDate`**: ISO 8601 string (`YYYY-MM-DD`). 
- **`expiryDate`**: ISO 8601 string (`YYYY-MM-DD`). For single-day events, this is typically the day *after* the `startDate`.
- **`startTime`**: (Required for Studio Events) String in HH:MM format (e.g., `'18:00'`).
- **`endTime`**: (Required for Studio Events) String in HH:MM format (e.g., `'20:00'`). These MUST be populated so that the schedule organically visually appears on both the homepage event cards and the single event details template.
- **`image`**: A valid relative URL (e.g., `/assets/events/...`) or absolute HTTP URL (e.g., Unsplash).
- **`teachers`**: Array of teacher IDs matching the `teachers.js` data (e.g., `['marit-tuisk', 'david-lepp']`).
- **`registerLink`**: Registration hook (e.g., `#contact` or `mailto:events@goyoga.ee`).

## 2. Multilingual Content Structure
Every event MUST include localized objects for `en`, `et`, `fi`, `ru`. Each language object MUST contain:
- **`title`**: The localized name of the event.
- **`date`**: Human-readable string (e.g., '14. märts 2026').
- **`location`**: The venue name/address.
- **`organizer`**: Usually 'Goyoga Tallinn', 'Casa Rituals', or specific teachers.
- **`description`**: A short 1-2 sentence hook.
- **`fullDescription`**: The complete event details (HTML `p` tags, `ul` tags supported).
- **`highlights`**: Array of 3-5 short bullet points summarizing the event.

## 3. Automation and Display Behaviors
The website uses frontend JavaScript (`script.js`) to automatically manage event timelines:
- **Status Tags**:
  - **TÄNA (TODAY) / Green Tag**: Automatically applied when the current date matches `expiryDate - 24h` (the start date).
  - **HOMME (TOMORROW) / Blue Tag**: Automatically applied when the current date matches the day *before* the start date.
  - **MÖÖDUNUD (PASSED) / Gray Tag**: Automatically applied when the current date matches the day *after* the start date.
- **Auto-Removal**: The event automatically disappears from the frontend UI exactly 24 hours after the `expiryDate` passes. You do not need to manually delete past events immediately. They will gracefully fall out of the UI. 

## 4. Translation and Tone Guidelines
It is absolutely critical to follow these translation rules for `et` (Estonian) and `ru` (Russian), and apply the same philosophy to `fi` and `en`:
1. **NO AI Jargon**: Avoid typical AI patterns (e.g., "Welcome to a transformative journey", "Embark on an ethereal experience", "Delve into...").
2. **NO Markdown/Symbol Spam**: Stay away from overusing hyphens (`--`), asterisks (`**`), or emojis (`✨`, `🔮`) unless specifically requested. Keep the text clean, structured, and legible.
3. **Estonian Relatability**: The language must sit right with the average Estonian man and woman. It should sound grounded, direct, but warm and inviting. 
4. **Accessible to the 'Less Spiritual'**: Frame breathwork, yoga, and retreats in practical, somatic, and relatable terms. People who are completely new to spiritual practices must feel comfortable reading it. Prioritize grounded benefits (e.g., "relieving stress", "calming the nervous system", "resting the body") over esoteric concepts (e.g., "activating quantum light bodies", "opening the third eye").

## 5. Deployment Step
After inserting the event data:
1. Re-run `build_script.py` to regenerate all static HTML (including JSON-LD schema metadata).
2. Manually commit the changes and push to the `main` branch to trigger a Cloudflare update.

## 6. Self-Correction & Technical Reminders (For AI Agent)
To prevent frustrating deployment and execution loops, completely adhere to the following:
1. **Cache-Busting Awareness**: Because Cloudflare and user browsers aggressively cache `js/events.js`, make sure the latest `build_script.py` implementation is utilized. It automatically appends a `?v=TIMESTAMP` cache-buster to the injected script tags across all `.html` pages. If updates still don't show up in the live environment, deliberately run `build_script.py` again, ensure the HTML files updated with the new timestamp, and advise the user to perform a Hard Refresh (`Cmd + Shift + R`).
2. **JSON Syntax Integrity**: When using surgical code replacement tools (like `replace_file_content`) to update an event, be incredibly careful with the JSON brackets `}` and commas `,` separating events inside `eventsData`. Always double-check that you haven't accidentally erased closing brackets of the preceding event, otherwise it will corrupt the entire site build.
3. **Workspace Path Validation**: The master frontend codebase is located strictly inside `.../Goyoga Tallinn/website`, **NOT** at the root of `GOYOGA website`. Before executing file reads, terminal commands, or git commits, explicitly verify your `Cwd` and absolute paths to ensure you aren't trying to manipulate an empty mirror directory.
