import os
import re
from glob import glob

html_files = glob('/Users/markotuisk/Documents/website | goyoga.ee/website-goyogatallinn/*.html')

for filepath in html_files:
    if 'corporate.html' in filepath:
        continue # Already correct in standard template we created

    with open(filepath, 'r', encoding='utf-8') as f:
        html = f.read()

    # Desktop Nav Insertion
    if 'data-i18n="nav.corporate"' not in html:
        # Find where nav.contact is in the desktop ul structure
        contact_pattern = r'(<li[^>]*>\s*<a[^>]+data-i18n="nav\.contact"[^>]*>.*?</a>\s*</li>)'
        corporate_li = '\n                        <li><a href="corporate.html" class="text-sm font-medium link-underline transition-colors" data-i18n="nav.corporate">Corporate</a></li>'
        html = re.sub(contact_pattern, corporate_li + r'\n                        \1', html)

    # Mobile Nav Insertion
    if 'href="corporate.html"' not in html and 'data-i18n="nav.corporate"' not in html.split('</nav>')[0]: # rough check
        # Assuming mobile links are raw anchor tags stacked in a div
        contact_mobile_pattern = r'(<a[^>]+data-i18n="nav\.contact".*?>.*?</a>)'
        corporate_mobile = '\n                <a href="corporate.html" class="mobile-link text-xl font-medium transition-colors hover:text-gray-600" data-i18n="nav.corporate">Corporate</a>'
        html = re.sub(contact_mobile_pattern, corporate_mobile + r'\n                \1', html)

    # Footer Insertion
    footer_quick_links_match = re.search(r'(<h4[^>]+data-i18n="footer\.quick_links"[^>]*>.*?</h4>\s*<ul[^>]*>)', html, flags=re.IGNORECASE | re.DOTALL)
    if footer_quick_links_match:
        quick_links_ul = footer_quick_links_match.group(1)
        insertion_index = footer_quick_links_match.end()
        
        if 'data-i18n="nav.corporate"' not in html[insertion_index:insertion_index+1000]:
            corporate_footer = '\n                        <li><a href="corporate.html" class="text-gray-300 hover:text-white" data-i18n="nav.corporate">Corporate</a></li>'
            html = html[:insertion_index] + corporate_footer + html[insertion_index:]

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(html)
        
print("Corporate Nav patching complete across all root files.")
