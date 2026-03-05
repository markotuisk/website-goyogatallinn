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

def translate_html(soup, lang, translations, filename, faq_data=None, seo_data=None):
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

    # Ensure local navigation links retain the correct language context
    for tag in soup.find_all('a'):
        if tag.has_attr('href'):
            href = tag['href']
            if href == 'index.html':
                 tag['href'] = f'/{lang}/'
            elif href.startswith('index.html#'):
                 hash_part = href.split('#', 1)[1]
                 tag['href'] = f'/{lang}/#{hash_part}'
            elif '.html' in href and not href.startswith(('http', '/')):
                 tag['href'] = f'/{lang}/{href}'

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

    # Inject hreflang tags for Google Local SEO mapping
    if soup.head:
        for l in LANGUAGES:
            href_path = f"https://goyoga.ee/{l}/" if filename == 'index.html' else f"https://goyoga.ee/{l}/{filename}"
            link_tag = soup.new_tag("link", rel="alternate", hreflang=l, href=href_path)
            soup.head.append(link_tag)
        
        # Also add x-default pointing back to english base route
        x_default_href = f"https://goyoga.ee/" if filename == 'index.html' else f"https://goyoga.ee/{filename}"
        link_tag = soup.new_tag("link", rel="alternate", hreflang="x-default", href=x_default_href)
        soup.head.append(link_tag)

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
            
        translated_soup = translate_html(soup, lang, t, filename, faq_data_dict, seo_data_dict)
        
        output_path = os.path.join(lang_dir, filename)
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
            
        url = f"https://goyoga.ee/{lang}/" if filename == 'index.html' else f"https://goyoga.ee/{lang}/{filename}"
        priority = "1.0" if filename == 'index.html' else "0.8"
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
