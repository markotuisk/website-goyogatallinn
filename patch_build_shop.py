import re

with open('build_script.py', 'r', encoding='utf-8') as f:
    text = f.read()

text = text.replace(
    "'events.html', 'event.html', 'class.html', 'corporate.html'",
    "'events.html', 'event.html', 'class.html', 'corporate.html', 'shop.html'"
)

with open('build_script.py', 'w', encoding='utf-8') as f:
    f.write(text)
print("build_script.py patched!")
