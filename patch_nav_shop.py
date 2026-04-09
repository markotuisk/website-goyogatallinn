import os
import re
from glob import glob

html_files = glob('/Users/markotuisk/Documents/website | goyoga.ee/website-goyogatallinn/*.html')

for filepath in html_files:
    if 'shop.html' in filepath:
        continue # Already correct

    with open(filepath, 'r', encoding='utf-8') as f:
        html = f.read()

    # Desktop Nav Insertion
    if 'data-i18n="nav.shop"' not in html:
        # Find where nav.corporate is in the desktop ul structure
        # Or place after nav.events
        events_pattern = r'(<li[^>]*>\s*<a[^>]+data-i18n="nav\.events"[^>]*>.*?</a>\s*</li>)'
        
        # Determine if it's index.html or another
        prefix = 'shop.html'
        
        shop_li = f'\n                        <li><a href="{prefix}" class="text-sm font-medium link-underline transition-colors" data-i18n="nav.shop">Shop</a></li>'
        html = re.sub(events_pattern, r'\1' + shop_li, html)

    # Mobile Nav Insertion
    if 'href="shop.html"' not in html and 'data-i18n="nav.shop"' not in html.split('</nav>')[0]:
        # Place it after events mobile
        events_mobile_pattern = r'(<a[^>]+data-i18n="nav\.events".*?>.*?</a>)'
        shop_mobile = f'\n                    <a href="shop.html" class="mobile-link text-xl font-medium transition-colors hover:text-gray-600" data-i18n="nav.shop">Shop</a>'
        html = re.sub(events_mobile_pattern, r'\1' + shop_mobile, html)

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(html)
        
print("Shop Nav patching complete across all root files.")
