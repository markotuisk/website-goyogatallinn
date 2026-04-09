import re

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Update tagline text
html = re.sub(
    r'<span([^>]*)data-i18n="studio.tagline">Our Space</span>',
    r'<span\1data-i18n="studio.tagline">Goyoga Studio</span>',
    html
)
html = re.sub(
    r'<span([^>]*)data-i18n="studio.tagline">Living Space</span>',
    r'<span\1data-i18n="studio.tagline">Goyoga Studio</span>',
    html
)

button_html = '''<div class="flex flex-wrap gap-4 mt-2">
                            <a href="/rent.html" id="rent-studio-button"
                                class="inline-flex items-center px-8 py-3 bg-gray-800 text-white font-medium rounded-md hover:bg-gray-700 transition-colors"
                                data-i18n="studio.rent_button">Step Inside</a>
                            <a href="/rent.html#gallery"
                                class="inline-flex items-center px-8 py-3 bg-white text-gray-800 font-medium rounded-md hover:bg-gray-50 border border-gray-200 transition-colors shadow-sm"
                                data-i18n="studio.photos_button">Studio Photos</a>
                        </div>'''

html = re.sub(
    r'<a href="/rent\.html" id="rent-studio-button"[^>]*data-i18n="studio\.rent_button">[^<]*</a>',
    button_html,
    html
)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)

with open('js/data.js', 'r', encoding='utf-8') as f:
    js = f.read()

# English
js = re.sub(
    r'"studio\.tagline": "Living Space"',
    r'"studio.tagline": "Goyoga Studio"',
    js
)
js = re.sub(
    r'"studio\.rent_button": "Rent Our Space"',
    r'"studio.rent_button": "Step Inside", "studio.photos_button": "Studio Photos"',
    js
)

# Estonian
js = re.sub(
    r'"studio\.tagline": "Ruum olemiseks"',
    r'"studio.tagline": "Goyoga Stuudio"',
    js
)
js = re.sub(
    r'"studio\.rent_button": "Rendi meie ruum"',
    r'"studio.rent_button": "Astuge Sisse", "studio.photos_button": "Stuudio Fotod"',
    js
)

# Finnish
js = re.sub(
    r'"studio\.tagline": "Tila olemiseen"',
    r'"studio.tagline": "Goyoga Studio"',
    js
)
js = re.sub(
    r'"studio\.rent_button": "Vuokraa tilamme"',
    r'"studio.rent_button": "Astu Sisään", "studio.photos_button": "Studion Kuvat"',
    js
)

# Russian
js = re.sub(
    r'"studio\.tagline": "Живое пространство"',
    r'"studio.tagline": "Студия Goyoga"',
    js
)
js = re.sub(
    r'"studio\.rent_button": "Арендовать наш зал"',
    r'"studio.rent_button": "Войти Внутрь", "studio.photos_button": "Фотографии Студии"',
    js
)

with open('js/data.js', 'w', encoding='utf-8') as f:
    f.write(js)

print("Studio text patched successfully.")

