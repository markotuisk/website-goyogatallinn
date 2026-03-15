---
description: Add a new language to the Goyoga Tallinn website, or audit an existing language for missing/copy-paste translation errors
---

# Goyoga Language Addition & Audit Skill

Use this skill whenever:
- Adding a new language to the website (e.g., Russian, Latvian, Swedish)
- Auditing an existing language for gaps or copy-paste bugs
- Running a post-update language consistency check

## Prerequisites

- All work is done in `/Users/markotuisk/Documents/Goyoga Tallinn/website`
- Python environment with `beautifulsoup4` and `js2py` installed
- GitHub remote is `origin`, branch `main`

---

## Step 1 — Determine the language code and script type

Identify the BCP-47 language code and script family:

| Language | Code | Script | Font note |
|---|---|---|---|
| Russian | `ru` | Cyrillic | **Requires Cyrillic font subset** |
| Latvian | `lv` | Latin | No font change needed |
| Swedish | `sv` | Latin | No font change needed |
| Finnish | `fi` | Latin | No font change needed |

> **If the new language uses Cyrillic, Arabic, or any non-Latin script**, jump to Step 1b before continuing.

### Step 1b (Cyrillic/non-Latin only) — Add font subset to all root HTML files

Open every `.html` file in the root website directory and update the Google Fonts URL to include the required subset. For Cyrillic:

```
# Find this pattern in all root HTML <head> sections:
?family=Inter:wght@300;400;500;600;700

# Replace with:
?family=Inter:wght@300;400;500;600;700&subset=latin,cyrillic
```

Files to update: `index.html`, `class.html`, `event.html`, `events.html`, `faq.html`, `offers.html`, `rent.html`, `teacher.html`

---

## Step 2 — Audit existing languages for bugs FIRST

Before adding a new language, run this audit to understand the quality baseline. This also reveals copy-paste patterns to avoid.

Create `/tmp/lang_audit.py`:

```python
import re, json

DATA_JS = "/Users/markotuisk/Documents/Goyoga Tallinn/website/js/data.js"
with open(DATA_JS, 'r', encoding='utf-8') as f:
    content = f.read()

# Extract translationsData block
match = re.search(r'const translationsData = (\{.*?\});(?:\n.*?)?const classesData =', content, re.DOTALL)
if not match:
    match = re.search(r'const translationsData = (\{.*?\});\n', content, re.DOTALL)

import js2py
translations = js2py.eval_js("var a = " + match.group(1) + "; a").to_dict()

en_keys = set(translations['en'].keys())
for lang in translations:
    if lang == 'en':
        continue
    lang_keys = set(translations[lang].keys())
    missing = en_keys - lang_keys
    # Check for values identical to EN (possible untranslated strings)
    copied = {k: translations[lang][k] for k in lang_keys if k in translations['en'] and translations[lang][k] == translations['en'][k]}
    print(f"\n=== {lang.upper()} ===")
    print(f"Missing keys ({len(missing)}): {sorted(missing)}")
    print(f"Possibly untranslated (same as EN, {len(copied)}): {sorted(copied.keys())[:10]}...")
```

// turbo
Run: `python3 /tmp/lang_audit.py`

Review the output before proceeding. Fix any bugs found in existing languages at this stage.

---

## Step 3 — Add translation keys to `js/data.js`

Add a new `LANG_CODE: { ... }` block to `translationsData` in `js/data.js`.

**Rules:**
1. Always copy from the `en:` block as the starting template — NEVER from `fi:` or `et:` (those have copy-paste bugs)
2. Translate every single key — do not leave any English strings
3. Add the block immediately after the `fi: { ... }` block, before the closing `}` of `translationsData`
4. Also add `LANG_CODE: { ... }` translations inside each `classesData` entry (ashtanga-yoga, strength-training, yoga-for-seniors, qigong-energy-work, sound-bath-meditation, yoga-nidra, yin-yoga, vinyasa-flow, hatha-yoga, cacao-ceremonies)

---

## Step 4 — Add translations to `js/events.js`

For every event/retreat object in `eventsData`, add a `LANG_CODE: { ... }` branch with:

```javascript
LANG_CODE: {
    title: '...',
    date: '...',          // Format dates in target language (e.g., "1.–7. августа 2026" for RU)
    location: '...',
    organizer: '...',
    description: '...',
    fullDescription: `...`, // Full HTML block — translate inline text, keep HTML tags
    highlights: ['...', '...']
}
```

Also update `country` objects:
```javascript
country: { en: 'Italy', et: 'Itaalia', fi: 'Italia', ru: 'Италия' }
```

---

## Step 5 — Add SEO data to `js/seo-data.js`

### 5a — URL Routes (localized slugs)

Add a `LANG_CODE:` entry to `urlRoutes`. For Russian example:
```javascript
ru: {
    "index.html": "index.html",
    "class.html": "zanyatiya.html",
    "event.html": "sobytie.html",
    "events.html": "sobytiya.html",
    "faq.html": "faq.html",
    "offers.html": "predlozheniya.html",
    "rent.html": "arenda.html",
    "teacher.html": "uchitelya.html"
}
```

For Latin-script languages (lv, sv), use romanized slugs matching the language.

### 5b — Meta tags

Add `LANG_CODE:` entries for: `meta.LANG_CODE`, `meta.rent.LANG_CODE`, `meta.faq.LANG_CODE`, `meta.offers.LANG_CODE`, `meta.teachers.LANG_CODE`

### 5c — Image alt text

Add `LANG_CODE:` entry to `alts` dictionary with translated alt text for all image keys.

---

## Step 6 — Add to FAQ data (`js/faq-data.js`)

Add `LANG_CODE: [ ... ]` blocks to every FAQ category in `faqData`. Follow the same structure as the `en:` blocks.

---

## Step 7 — Add language option to the language switcher

In all root HTML files (`index.html`, `class.html`, `event.html`, etc.), find the language dropdown:

```html
<div class="language-option" data-lang="fi">
    <img alt="Suomi" class="language-flag" src="https://flagcdn.com/w20/fi.png"/>
    <span>Suomi</span>
</div>
```

Add after `fi`:
```html
<div class="language-option" data-lang="ru">
    <img alt="Русский" class="language-flag" src="https://flagcdn.com/w20/ru.png"/>
    <span>Русский</span>
</div>
```

**Flag codes for reference:**
| Language | flagcdn code |
|---|---|
| Russian (RU) | `ru` |
| Latvian (LV) | `lv` |
| Swedish (SE) | `se` |

---

## Step 8 — Update `build_script.py`

1. Line 11: Add new code to `LANGUAGES`:
   ```python
   LANGUAGES = ['en', 'et', 'fi', 'ru']  # add new code here
   ```
2. Line 252: Add new language to `lang_name_map`:
   ```python
   lang_name_map = {'en': 'English', 'et': 'Estonian', 'fi': 'Finnish',
                    'ru': 'Russian', 'es': 'Spanish', 'id': 'Indonesian'}
   ```

---

## Step 9 — Run the build and verify

// turbo
```bash
cd "/Users/markotuisk/Documents/Goyoga Tallinn/website" && python3 build_script.py
```

Check output for errors and confirm the new language directory was created:

```bash
ls "/Users/markotuisk/Documents/Goyoga Tallinn/website/ru/"
```

---

## Step 10 — Run translation coverage audit again

```bash
python3 /tmp/lang_audit.py
```

Confirm the new language shows 0 missing keys and no obvious copy-paste issues (values identical to EN in non-English context).

---

## Step 11 — Update `_redirects` if needed

Check `_redirects` file for any language-specific routing rules. Add equivalent rules for the new language if existing patterns require it.

---

## Step 12 — Verify `sitemap.xml`

Check that the new language URLs appear in the regenerated `sitemap.xml`:

```bash
grep "/ru/" "/Users/markotuisk/Documents/Goyoga Tallinn/website/sitemap.xml" | head -5
```

---

## Step 13 — Commit and push to GitHub + Cloudflare

```bash
cd "/Users/markotuisk/Documents/Goyoga Tallinn/website"
git add -A
git commit -m "Add Russian (ru) language support"
git push origin main
```

Cloudflare Pages will auto-deploy. Verify the live site at `https://www.goyoga.ee/ru/`.

---

## ⚠️ Common Mistakes Checklist

Before committing, verify:

- [ ] Font subset includes new script (Cyrillic if Russian)
- [ ] All date strings use target language month names (not English or Estonian)
- [ ] `country:` objects in `events.js` include new language key
- [ ] No translation key values are identical to the English values (except proper nouns)
- [ ] Language switcher dropdown entry added to ALL root HTML files (not just `index.html`)
- [ ] `faqData`, `eventsData`, `classesData` all have new language branches
- [ ] `seo-data.js` has `urlRoutes`, `meta`, and `alts` for new language
- [ ] `build_script.py` `LANGUAGES` list updated
- [ ] Build script runs without errors
- [ ] `sitemap.xml` contains new language URLs

---

## 🔮 Future-Proofing Note (for 5+ languages)

When adding a 5th language, evaluate whether to split `data.js` into per-language files to avoid a single 200KB+ JS file blocking page load. Pattern:

```
js/data.en.js  → loaded always (baseline)
js/data.ru.js  → loaded on demand when user selects Russian
js/data.lv.js  → loaded on demand when user selects Latvian
```

This would require changes to `script.js` to dynamically import language files rather than reading from a single global `translationsData` object.
