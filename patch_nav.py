import os
import re
from glob import glob

html_files = glob('/Users/markotuisk/Documents/Goyoga Tallinn/website/*.html')

for filepath in html_files:
    if 'deepseek_html' in filepath:
        continue # Ignore temp files
        
    with open(filepath, 'r', encoding='utf-8') as f:
        html = f.read()
        
    # Extract existing hrefs for about, studio, community to reuse in the footer
    hrefs = {}
    for key in ['about', 'studio', 'community']:
        match = re.search(r'<a[^>]+href="([^"]+)"[^>]+data-i18n="nav\.' + key + '"', html)
        if match:
            hrefs[key] = match.group(1)
        else:
            match_fallback = re.search(r'<a[^>]+href="([^"]+)#events"[^>]+data-i18n="nav\.events"', html)
            prefix = match_fallback.group(1) if match_fallback else ''
            hrefs[key] = prefix + '#' + key
            
    # Remove from Desktop Nav
    for key in ['about', 'studio', 'community']:
        html = re.sub(r'<li[^>]*>\s*<a[^>]+data-i18n="nav\.' + key + '"[^>]*>.*?</a>\s*</li>', '', html, flags=re.IGNORECASE|re.DOTALL)
        
    # Remove from Mobile Nav
    for key in ['about', 'studio', 'community']:
        html = re.sub(r'<a[^>]+data-i18n="nav\.' + key + r'".*?</a>\n?', '', html, flags=re.IGNORECASE|re.DOTALL)
        
    # Now add to Footer Quick Links if missing.
    footer_quick_links_match = re.search(r'(<h4[^>]+data-i18n="footer\.quick_links"[^>]*>.*?</h4>\s*<ul[^>]*>)', html, flags=re.IGNORECASE|re.DOTALL)
    if footer_quick_links_match:
        quick_links_ul = footer_quick_links_match.group(1)
        insertion_index = footer_quick_links_match.end()
        
        additions = []
        for key, text in [('about', 'About'), ('studio', 'Studio'), ('community', 'Community')]:
            # if we don't find it in the subsequent lines (to prevent duplicate insertions)
            if f'data-i18n="nav.{key}"' not in html[insertion_index:insertion_index+1000]:
                href = hrefs.get(key, f'#{key}')
                additions.append(f'\n                        <li><a href="{href}" class="text-gray-300 hover:text-white" data-i18n="nav.{key}">{text}</a></li>')
        
        if additions:
            html = html[:insertion_index] + ''.join(additions) + html[insertion_index:]

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(html)
        
print("Nav patching complete.")
