import os
import re

directories = ['.']
html_files = [f for f in os.listdir('.') if f.endswith('.html')]

# We'll inject the Shop link after the Events link in the mobile menu for all HTML files
pattern = r'(<a href="[^"]*#events"[^>]*data-i18n="nav.events">Events</a>)'
replacement = r'\1\n                <a href="shop.html" class="mobile-link text-xl font-medium transition-colors hover:text-gray-600"\n                    data-i18n="nav.shop">Shop</a>'

for file in html_files:
    file_path = os.path.join('.', file)
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    new_content = re.sub(pattern, replacement, content)
    
    # Just in case some files use different casing or slightly different structure
    # we'll look for nav.events in mobile context
    
    if new_content != content:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated mobile menu in {file_path}")

