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

def translate_html(soup, lang, translations):
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
            elif href.endswith('.html') and not href.startswith(('http', '/')):
                 tag['href'] = f'/{lang}/{href}'

    # Update html lang attribute
    html_tag = soup.find('html')
    if html_tag:
        html_tag['lang'] = lang

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
            
        translated_soup = translate_html(soup, lang, t)
        
        output_path = os.path.join(lang_dir, filename)
        with open(output_path, 'w', encoding='utf-8') as file:
            # BeautifulSoup prettify sometimes adds weird spacing, write raw string
            file.write(str(translated_soup))
            
        print(f"Built {output_path}")

print("✨ Static HTML Generation Complete!")
