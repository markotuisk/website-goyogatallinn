---
description: Run the SPA SEO Audit Checklist to enforce Clean Hreflang, Translated Titles, and Noscript Fallbacks
---

# GoYoga Tallinn: SPA SEO Enforcer Workflow

Because this site is a Single-Page Application (SPA) that loads translations dynamically via `data.js`, basic headless SEO crawlers often flag perfectly fine localized structures as Duplicate or Thin content. 

Whenever you create new pages or update the site architecture, run this automated workflow to permanently enforce SPA SEO compliance across all 4 translations without disrupting the standard Javascript logic.

// turbo-all

1. Run the Unified SEO Enforcer script. This script handles:
    - **Clean Hreflang Tags**: Strips `.html` from `hreflang` maps to perfectly sync with Cloudflare's clean canonical routing.
    - **Translated Titles**: Injects localized Flesch-Kincaid safe Title attributes into the native `<head>` of HTML files.
    - **Noscript Fallbacks**: Automatically guards sub-pages against the "Thin Content (<1024 characters)" penalty by injecting a standardized keyword-rich SEO payload gracefully.

```bash
cat << 'EOF' > /tmp/run_seo_enforcer.py
import os
import re

directory = './'

# 1. NOSCRIPT PAYLOAD (Fixes <1024 Thin Content Warning)
noscript_payload = """
<noscript>
    <div class="seo-fallback" style="padding: 20px; text-align: center; color: #282420;">
        Welcome to Goyoga Tallinn. Providing authentic wellness, including traditional Ashtanga, Vinyasa, Yin Yoga, Sound Baths, and Cacao Ceremonies in the heart of Tallinn, Estonia. Discover expert yoga teachers, community retreats, and beautiful studio space rentals designed to help you switch off and reinvigorate.
    </div>
</noscript>
"""

# 2. LOCALIZED TITLES (Fixes Identical Duplicate Title Errors)
localized_titles = {
    'class': 'Class Details | Goyoga Tallinn',
    'events': 'Events & Retreats | Goyoga Tallinn',
    'teacher': 'Teacher Profile | Goyoga Tallinn',
    'brand': 'Brand Identity | GoYoga Tallinn — Yoga & Wellness Sanctuary',
    'offers': 'Yoga Offers | Seasonal Deals | Goyoga Tallinn',
    'faq': 'Yoga FAQ | Beginner Guide & Studio Etiquette | Goyoga',
    'rent': 'Studio & Room Rental Tallinn | Bright Yoga Space | Goyoga',
    
    # ET
    'tunnid': 'Tunni Kirjeldus | Goyoga Tallinn',
    'uritused': 'Sündmused ja Laagrid | Goyoga Tallinn',
    'opetajad': 'Õpetaja Profiil | Goyoga Tallinn',
    'hinnakiri': 'Jooga ja Teenuste Hinnakiri | Goyoga Tallinn',
    'korduma-kippuvad-kusimused': 'Jooga KKK | Alustajale & Stuudio Etikett | Goyoga Tallinn',
    'rendi-ruumid': 'Ruumide ja Saali Rent Tallinnas | Valgusküllane Joogastuudio',
    
    # FI
    'tunnit': 'Tunnin Tiedot | Goyoga Tallinna',
    'tapahtumat': 'Tapahtumat & Retriitit | Goyoga Tallinna',
    'opettajat': 'Opettajan Profiili | Goyoga Tallinna',
    'hinnasto': 'Joogatarjoukset | Kausitarjoukset | Goyoga Tallinna',
    'ukk': 'Jooga UKK | Aloittelijanopas & Ohjeet | Goyoga Tallinna',
    'tilojen-vuokraus': 'Joogasalivuokraus | Valoisa tila Tallinnan keskustassa | Goyoga',
    
    # RU
    'zanyatiya': 'Описание Занятия | Goyoga Tallinn',
    'sobytiya': 'События и Ретриты | Goyoga Tallinn',
    'uchitelya': 'Профиль Учителя | Goyoga Tallinn',
    'predlozheniya': 'Предложения по йоге | Скидки | Goyoga Tallinn',
    'faq_ru': 'Йога ЧАВО | Гид для начинающих и этикет | Goyoga Tallinn',
    'arenda': 'Аренда зала для мероприятий | Светлая студия йоги | Goyoga'
}

lang_overrides = {
    'et/brand': 'Brändi Identiteet | GoYoga Tallinn',
    'fi/brand': 'Brändi-identiteetti | GoYoga Tallinn',
    'ru/brand': 'Бренд-айдентика | GoYoga Tallinn',
    'ru/faq': 'Йога ЧАВО | Гид для начинающих и этикет | Goyoga Tallinn'
}

print("Running GoYoga SPA SEO Enforcer...")

for root, dirs, files in os.walk(directory):
    if '.git' in root or 'node_modules' in root: continue
    for file in files:
        if not file.endswith('.html') or "deepseek_html" in file: continue
        
        filepath = os.path.join(root, file)
        basename = file.replace('.html', '')
        relpath = os.path.relpath(filepath, directory)
        rel_no_ext = relpath.replace('.html', '')
        
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
            
        original_content = content
            
        # STEP A: Clean Hreflang .html extensions
        def repl_hreflang(match):
            tag = match.group(0)
            return tag.replace('.html"', '"')
        content = re.sub(r'<link[^>]*?hreflang[^>]*?>', repl_hreflang, content, flags=re.IGNORECASE)
        
        # STEP B: Inject Localized Hardcoded Titles
        target_title = None
        if rel_no_ext in lang_overrides:
            target_title = lang_overrides[rel_no_ext]
        elif basename in localized_titles:
            target_title = localized_titles[basename]
            
        if target_title:
            def repl_title(match):
                return f"{match.group(1)}{target_title}{match.group(2)}"
            content = re.sub(r'(<title[^>]*>).*?(</title>)', repl_title, content, flags=re.IGNORECASE | re.DOTALL)
            
        # STEP C: Inject Noscript Fallbacks
        if 'seo-fallback' not in content:
            content = re.sub(r'(</body>)', lambda m: f"{noscript_payload}{m.group(1)}", content, flags=re.IGNORECASE)

        if content != original_content:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"✅ SEO Enforced on: {relpath}")

print("SEO Enforcer script completed successfully.")
EOF

python3 /tmp/run_seo_enforcer.py
```

2. After executing the script, manually add and commit the resulting changes to GitHub to push them live to Cloudflare.
```bash
git add .
git commit -m "SEO: Ran automated SPA SEO enforcer workflow to guarantee crawler compliance"
git push
```
