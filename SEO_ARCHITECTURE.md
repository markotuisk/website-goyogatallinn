# Goyoga Tallinn - Multi-Language SEO Architecture

## The Problem
`goyoga.ee` uses a dynamic client-side JavaScript translation system (`js/data.js` and `js/script.js`). While this provides lightning-fast language switching for human visitors, search engine crawlers (like Googlebot) often do not execute JavaScript. Because of this, Google historically only indexed the raw, untranslated English placeholders on the site, severely hurting local search rankings for Estonian keywords (e.g., "joogastuudio Tallinnas").

## The Solution: Static HTML Generation
To solve this without abandoning the convenient single-source-of-truth in `js/data.js`, we implemented a **Static HTML Builder**.

### How it Works
1. **The Script:** A Python build script (`build_script.py`) lives in the root of the project.
2. **The Process:** When executed, this script reads the base `.html` files and parses the JavaScript dictionaries (`translationsData`). It deeply translates every single `data-i18n` attribute and generates hard-coded, SEO-perfect HTML files.
3. **The Output:** The generated files are deposited into three distinct language folders:
   - `public/et/` (100% Estonian)
   - `public/en/` (100% English)
   - `public/fi/` (100% Finnish)

## Cloudflare Routing
To ensure users and bots land on the correct version automatically, Cloudflare Pages is configured via the `_redirects` file in the root directory.

The `_redirects` file uses `Accept-Language` header matching:
- If a browser requests `/` and prefers Estonian (`et`), Cloudflare silently routes them to the `/et/` folder.
- If they prefer Finnish (`fi`), they are routed to `/fi/`.
- The fallback is always the English versions in `/en/`.

## Developer Workflow
**You do not need to manually edit the files in the `public/` directory.**
Your workflow remains exactly the same:
1. Edit text, events, or classes inside `js/data.js` or `index.html`.
2. Open your terminal in the website root.
3. Run the build script: `python3 build_script.py`
4. The script will instantly regenerate the `/public` directory with your new changes.
5. Commit and push everything to GitHub. Cloudflare will automatically deploy the updated static versions.
