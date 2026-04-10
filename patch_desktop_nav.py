import os
import re

html_files = [f for f in os.listdir('.') if f.endswith('.html')]

# The desktop nav now looks like:
# <li><a href="#events" class="text-sm font-medium link-underline transition-colors" data-i18n="nav.events">Events</a>
#                 <a href="shop.html" class="mobile-link text-xl font-medium transition-colors hover:text-gray-600"
#                     data-i18n="nav.shop">Shop</a></li>

pattern_desktop_fix = r'(<li>\s*<a href="[^"]*#events"[^>]*data-i18n="nav.events">Events</a>)\s*<a href="shop\.html" class="mobile-link text-xl font-medium transition-colors hover:text-gray-600"\s*data-i18n="nav\.shop">Shop</a>(</li>)'

for file in html_files:
    file_path = os.path.join('.', file)
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    new_content = re.sub(pattern_desktop_fix, r'\1\2', content)
    
    if new_content != content:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Fixed duplicate Shop link in desktop nav of {file_path}")
