import os
import re
import json
from bs4 import BeautifulSoup
import js2py

# Configurations
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
WEBSITE_DIR = BASE_DIR
OUTPUT_DIR = WEBSITE_DIR
LANGUAGES = ['en', 'et', 'fi']
HTML_FILES = [f for f in os.listdir(WEBSITE_DIR) if f.endswith('.html')]

# We need to extract the raw JavaScript 'translationsData' hash map
data_js_path = os.path.join(WEBSITE_DIR, 'js', 'data.js')

with open(data_js_path, 'r', encoding='utf-8') as f:
    js_content = f.read()

# Using a regex to extract the object assigned to 'const translationsData ='
match = re.search(r'const translationsData = (\{.*?\});(?:\n.*?)?const classesData =', js_content, re.DOTALL)

if not match:
    # Try a less strict match if classesData changes
    match = re.search(r'const translationsData = (\{.*?\});\n', js_content, re.DOTALL)

if not match:
    print("Could not find translationsData in data.js")
    exit(1)

translations_raw_js = match.group(1)

# Quick conversion to valid Python dict using js2py or just regex massaging
try:
    # It's cleaner to execute python eval if we sanitize headers
    # js2py handles standard js objects perfectly
    translations_data = js2py.eval_js("var a = " + translations_raw_js + "; a").to_dict()
except Exception as e:
    print(f"Error parsing translationsData: {e}")
    exit(1)

# Extract faqData for SEO schema Injection
faq_js_path = os.path.join(WEBSITE_DIR, 'js', 'faq-data.js')
try:
    with open(faq_js_path, 'r', encoding='utf-8') as f:
        faq_js_content = f.read()
    faq_match = re.search(r'const faqData = (\{.*?\});', faq_js_content, re.DOTALL)
    if faq_match:
        faq_raw_js = faq_match.group(1)
        faq_data_dict = js2py.eval_js("var a = " + faq_raw_js + "; a").to_dict()
    else:
        faq_data_dict = {}
except Exception as e:
    print(f"Error parsing faqData: {e}")
    faq_data_dict = {}

# Extract seoData for header meta translation and schema injection
seo_js_path = os.path.join(WEBSITE_DIR, 'js', 'seo-data.js')
try:
    with open(seo_js_path, 'r', encoding='utf-8') as f:
        seo_js_content = f.read()
    seo_match = re.search(r'const seoData = (\{.*?\});', seo_js_content, re.DOTALL)
    if seo_match:
        seo_raw_js = seo_match.group(1)
        seo_data_dict = js2py.eval_js("var a = " + seo_raw_js + "; a").to_dict()
    else:
        seo_data_dict = {}
except Exception as e:
    print(f"Error parsing seoData: {e}")
    seo_data_dict = {}

# Extract eventsData for SEO schema Injection
events_js_path = os.path.join(WEBSITE_DIR, 'js', 'events.js')
try:
    with open(events_js_path, 'r', encoding='utf-8') as f:
        events_js_content = f.read()
    events_match = re.search(r'const eventsData = (\[.*?\]);', events_js_content, re.DOTALL)
    if events_match:
        events_raw_js = events_match.group(1)
        # Sanitize ES6 template literals (backticks) since js2py doesn't support them
        events_raw_js = re.sub(r'(?m)^\s*fullDescription:\s*`.*?`,$', '', events_raw_js, flags=re.DOTALL)
        events_raw_js = re.sub(r'(?m)^\s*itinerary:\s*\[.*?\],?$', '', events_raw_js, flags=re.DOTALL)
        # Ensure array is safe
        events_data_list = js2py.eval_js("var a = " + events_raw_js + "; a").to_list()
    else:
        events_data_list = []
except Exception as e:
    print(f"Error parsing eventsData with js2py: {e}")
    events_data_list = []

# Extract teachersData for SEO schema Injection (found in data.js)
data_js_path = os.path.join(WEBSITE_DIR, 'js', 'data.js')
try:
    with open(data_js_path, 'r', encoding='utf-8') as f:
        data_js_content = f.read()
    teachers_match = re.search(r'const teachersData = (\{.*?\});(?:\n.*?)?const classesData =', data_js_content, re.DOTALL)
    if not teachers_match:
        teachers_match = re.search(r'const teachersData = (\{.*?\});\n', data_js_content, re.DOTALL)
    if teachers_match:
        teachers_raw_js = teachers_match.group(1)
        teachers_data_dict = js2py.eval_js("var a = " + teachers_raw_js + "; a").to_dict()
    else:
        teachers_data_dict = {}
except Exception as e:
    print(f"Error parsing teachersData with js2py: {e}")
    teachers_data_dict = {}

def translate_html(soup, lang, translations, filename, faq_data=None, seo_data=None, events_data=None, teachers_data=None):
    """
    Given a BeautifulSoup object and a language dict,
    replace the innerHTML of elements with data-i18n tags.
    """
    elements = soup.find_all(attrs={"data-i18n": True})
    for el in elements:
        key = el.get("data-i18n")
        if key in translations:
            value = translations[key]
            # Handle placeholder for inputs
            if el.name == 'input' and el.has_attr('placeholder'):
                el['placeholder'] = value
            else:
                # Need to append as parsed HTML if it contains tags
                new_soup = BeautifulSoup(value, 'html.parser')
                el.clear()
                for child in new_soup.contents:
                    el.append(child)
                
    # Fix the active language dropdown class
    for el in soup.find_all(class_=re.compile(r'language-option')):
        if el.get('data-lang') == lang:
            el['class'] = el.get('class', []) + ['active']
        else:
            if 'active' in el.get('class', []):
                el['class'].remove('active')

    # Fix relative paths to absolute paths so they work in subdirectories
    for tag in soup.find_all(['link', 'script', 'img', 'video', 'source']):
        for attr in ['src', 'href']:
            if tag.has_attr(attr) and tag[attr].startswith(('css/', 'js/', 'assets/')):
                tag[attr] = '/' + tag[attr]

    # Ensure local navigation links retain the correct language context and localized filenames
    for tag in soup.find_all('a'):
        if tag.has_attr('href'):
            href = tag['href']
            
            # Skip empty hrefs, external links, anchor-only links, or already absolute links
            if not href or href.startswith(('http', 'mailto:', 'tel:', '/', '#')):
                continue

            base_filename = href.split('#')[0] if '#' in href else href
            hash_part = f"#{href.split('#', 1)[1]}" if '#' in href else ""
            
            # Translate the filename if it matches a registered English route
            if seo_data and 'urlRoutes' in seo_data and lang in seo_data['urlRoutes']:
                base_filename = seo_data['urlRoutes'][lang].get(base_filename, base_filename)
            
            if base_filename == 'index.html':
                 tag['href'] = f'/{lang}/{hash_part}'
            elif '.html' in base_filename:
                 tag['href'] = f'/{lang}/{base_filename}{hash_part}'

    # Update html lang attribute
    html_tag = soup.find('html')
    if html_tag:
        html_tag['lang'] = lang
        
    # Inject FAQPage JSON-LD schema if building faq.html
    if filename == 'faq.html' and faq_data and lang in faq_data:
        schema = {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": []
        }
        categories = faq_data[lang]
        if isinstance(categories, dict):
            for cat_name, items in categories.items():
                if isinstance(items, list):
                    for item in items:
                        if 'q' in item and 'a' in item:
                            schema["mainEntity"].append({
                                "@type": "Question",
                                "name": item["q"],
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": item["a"]
                                }
                            })
        if schema["mainEntity"]:
            script_tag = soup.new_tag("script", type="application/ld+json")
            script_tag.string = json.dumps(schema, indent=2, ensure_ascii=False)
            if soup.head:
                soup.head.append(script_tag)

    # Inject Event JSON-LD schema if building events.html
    if filename == 'events.html' and events_data:
        event_schemas = []
        for event in events_data:
            if not isinstance(event, dict) or lang not in event:
                continue
            
            e_lang = event[lang]
            event_schema = {
                "@context": "https://schema.org",
                "@type": "Event",
                "name": e_lang.get('title', ''),
                "description": e_lang.get('description', ''),
                "startDate": event.get('date', ''), # raw date fallback
                "endDate": event.get('expiryDate', ''),
                "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
                "eventStatus": "https://schema.org/EventScheduled",
                "location": {
                    "@type": "Place",
                    "name": e_lang.get('location', ''),
                    "address": {
                        "@type": "PostalAddress",
                        "addressLocality": "Tallinn",
                        "addressCountry": "EE"
                    }
                },
                "image": [f"https://www.goyoga.ee{event.get('image', '')}"],
                "organizer": {
                    "@type": "Organization",
                    "name": e_lang.get('organizer', 'Goyoga Tallinn'),
                    "url": "https://www.goyoga.ee"
                }
            }
            # Only index active events
            if event.get('active', False):
                event_schemas.append(event_schema)
                
        if event_schemas:
            script_tag = soup.new_tag("script", type="application/ld+json")
            script_tag.string = json.dumps(event_schemas, indent=2, ensure_ascii=False)
            if soup.head:
                soup.head.append(script_tag)

    # Inject Person (Teacher) JSON-LD schema if building teacher.html
    if filename == 'teacher.html' and teachers_data:
        person_schemas = []
        for tid, tdata in teachers_data.items():
            if not isinstance(tdata, dict):
                continue
                
            person_schema = {
                "@context": "https://schema.org",
                "@type": "Person",
                "name": tdata.get('name', ''),
                "jobTitle": tdata.get('title', ''),
                "worksFor": {
                    "@type": "Organization",
                    "name": "goyoga.ee"
                },
                "image": f"https://www.goyoga.ee{tdata.get('image', '')}",
            }
            if 'socials' in tdata and isinstance(tdata['socials'], dict):
                person_schema['sameAs'] = list(tdata['socials'].values())
                
            person_schemas.append(person_schema)
            
        if person_schemas:
            script_tag = soup.new_tag("script", type="application/ld+json")
            # Usually only one object is expected, so wrap in a graph if multiple
            graph_schema = {
                "@context": "https://schema.org",
                "@graph": person_schemas
            }
            script_tag.string = json.dumps(graph_schema, indent=2, ensure_ascii=False)
            if soup.head:
                soup.head.append(script_tag)

    # Translate Image Alt Text
    if seo_data and 'alts' in seo_data and lang in seo_data['alts']:
        lang_alts = seo_data['alts'][lang]
        for img in soup.find_all('img', attrs={'alt': True}):
            alt_text = img['alt']
            # Only exact matching for safety based on the curated seo-data dict
            if alt_text in lang_alts:
                img['alt'] = lang_alts[alt_text]

    # Inject SEO Meta Tags and Hreflang
    if seo_data:
        page_key = filename.replace('.html', '')
        if page_key == 'index':
            meta_data = seo_data.get('meta', {}).get(lang)
        else:
            meta_data = seo_data.get('meta', {}).get(page_key, {}).get(lang)
            
        if meta_data:
            if 'title' in meta_data and soup.title:
                soup.title.string = meta_data['title']
            
            desc_tag = soup.find('meta', attrs={'name': 'description'})
            if desc_tag and 'description' in meta_data:
                desc_tag['content'] = meta_data['description']
                
            og_title = soup.find('meta', property='og:title')
            if og_title and 'ogTitle' in meta_data:
                og_title['content'] = meta_data['ogTitle']
                
            og_desc = soup.find('meta', property='og:description')
            if og_desc and 'ogDescription' in meta_data:
                og_desc['content'] = meta_data['ogDescription']

    # Update Canonical Tag Context
    canonical_tag = soup.find('link', rel='canonical')
    if canonical_tag and canonical_tag.has_attr('href'):
        # Get translated slug for active language
        translated_canonical = seo_data.get('urlRoutes', {}).get(lang, {}).get(filename, filename) if seo_data else filename
        if lang != 'en':
            base_url = "https://www.goyoga.ee"
            if translated_canonical == 'index.html':
                canonical_tag['href'] = f"{base_url}/{lang}/"
            else:
                canonical_tag['href'] = f"{base_url}/{lang}/{translated_canonical}"

    # Inject hreflang tags for Google Local SEO mapping
    if soup.head:
        for l in LANGUAGES:
            translated_slug = seo_data.get('urlRoutes', {}).get(l, {}).get(filename, filename) if seo_data else filename
            href_path = f"https://www.goyoga.ee/{l}/" if translated_slug == 'index.html' else f"https://www.goyoga.ee/{l}/{translated_slug}"
            link_tag = soup.new_tag("link", rel="alternate", hreflang=l, href=href_path)
            soup.head.append(link_tag)
        
        # Also add x-default pointing back to english base route
        x_default_href = f"https://www.goyoga.ee/" if filename == 'index.html' else f"https://www.goyoga.ee/{filename}"
        link_tag = soup.new_tag("link", rel="alternate", hreflang="x-default", href=x_default_href)
        soup.head.append(link_tag)

    # Inject Google Analytics 4 (GA4) Tracking Snippet
    ga_id = "G-367719851"
    if soup.head:
        # Avoid duplicate injections if running multiple times
        existing_ga = soup.head.find('script', src=f"https://www.googletagmanager.com/gtag/js?id={ga_id}")
        if not existing_ga:
            ga_script_src = soup.new_tag("script", async_="async", src=f"https://www.googletagmanager.com/gtag/js?id={ga_id}")
            soup.head.append(ga_script_src)
            
            ga_script_inline = soup.new_tag("script")
            ga_script_inline.string = f"""
              window.dataLayer = window.dataLayer || [];
              function gtag(){{dataLayer.push(arguments);}}
              gtag('js', new Date());
            
              gtag('config', '{ga_id}');
            """
            soup.head.append(ga_script_inline)

    return soup

# Create the output directories and copy assets
os.makedirs(OUTPUT_DIR, exist_ok=True)

# Process each file for each language
for lang in LANGUAGES:
    lang_dir = os.path.join(OUTPUT_DIR, lang)
    os.makedirs(lang_dir, exist_ok=True)
    
    t = translations_data.get(lang, translations_data['en'])
    
    for filename in HTML_FILES:
        filepath = os.path.join(WEBSITE_DIR, filename)
        with open(filepath, 'r', encoding='utf-8') as file:
            soup = BeautifulSoup(file.read(), 'html.parser')
            
        translated_soup = translate_html(soup, lang, t, filename, faq_data_dict, seo_data_dict, events_data_list, teachers_data_dict)
        
        # Determine output filename based on localization map
        output_filename = seo_data_dict.get('urlRoutes', {}).get(lang, {}).get(filename, filename)
        output_path = os.path.join(lang_dir, output_filename)
        with open(output_path, 'w', encoding='utf-8') as file:
            # BeautifulSoup prettify sometimes adds weird spacing, write raw string
            file.write(str(translated_soup))
            
        print(f"Built {output_path}")
        
# Generate Multi-Language Sitemap
print("Generating exhaustive multi-language sitemap.xml...")
sitemap_urls = []
for lang in LANGUAGES:
    for filename in HTML_FILES:
        # Ignore intermediate deepseek templates
        if 'deepseek_html_' in filename:
            continue
            
        translated_slug = seo_data_dict.get('urlRoutes', {}).get(lang, {}).get(filename, filename)
        url = f"https://www.goyoga.ee/{lang}/" if translated_slug == 'index.html' else f"https://www.goyoga.ee/{lang}/{translated_slug}"
        priority = "1.0" if translated_slug == 'index.html' else "0.8"
        sitemap_urls.append(f'''   <url>
      <loc>{url}</loc>
      <changefreq>weekly</changefreq>
      <priority>{priority}</priority>
   </url>''')

sitemap_content = f'''<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
{chr(10).join(sitemap_urls)}
</urlset>'''

sitemap_path = os.path.join(OUTPUT_DIR, 'sitemap.xml')
with open(sitemap_path, 'w', encoding='utf-8') as f:
    f.write(sitemap_content)

print(f"Built {sitemap_path}")
print("✨ Static HTML Generation Complete!")
