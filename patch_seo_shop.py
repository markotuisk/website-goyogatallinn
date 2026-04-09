import re

with open('js/seo-data.js', 'r', encoding='utf-8') as f:
    text = f.read()

# English
text = re.sub(
    r"('events\.html': 'events\.html',\n)",
    r"\1        'shop.html': 'shop.html',\n",
    text
)

# Estonian
text = re.sub(
    r"('events\.html': 'uritused\.html',\n)",
    r"\1        'shop.html': 'pood.html',\n",
    text
)

# Finnish
text = re.sub(
    r"('events\.html': 'tapahtumat\.html',\n)",
    r"\1        'shop.html': 'kauppa.html',\n",
    text
)

# Russian
text = re.sub(
    r"('events\.html': 'sobytiya\.html',\n)",
    r"\1        'shop.html': 'magazin.html',\n",
    text
)

with open('js/seo-data.js', 'w', encoding='utf-8') as f:
    f.write(text)
print("js/seo-data.js patched!")
