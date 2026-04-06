import re

file_path = "/Users/markotuisk/Documents/Goyoga Tallinn/website/js/events.js"
with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# Replace the registerLink globally
content = content.replace(
    "registerLink: 'https://linktr.ee/casarituals?utm_source=linktree_profile_share&ltsid=1a66c81a-b165-413c-9795-c1526e61c7ca'",
    "registerLink: 'mailto:events@goyoga.ee'"
)

# We want to match `id: 'casa-rituals-...` blocks and inject the linktree URL.
links = {
    'en': 'Casa Rituals Schedule & Information',
    'et': 'Casa Rituals ajakava ja lisainfo',
    'fi': 'Casa Rituals -aikataulu ja lisätiedot',
    'ru': 'Расписание и дополнительная информация Casa Rituals'
}

def replace_block(match):
    block = match.group(0)
    # inside this event block, find each language section and append to its fullDescription
    for lang in ['en', 'et', 'fi', 'ru']:
        # This regex looks for `lang: { ... fullDescription: `...` }` inside the block
        # Because we're evaluating inside one event, it's safer.
        pattern = rf"({lang}:\s*{{.*?fullDescription:\s*`.*?)(`,\s*\n\s*highlights:)"
        
        link_html = f'\\n                <div class="mt-8 p-4 bg-gray-50 rounded-lg border border-gray-100"><a href="https://linktr.ee/casarituals" target="_blank" class="flex items-center text-pink-600 hover:text-pink-700 font-medium text-sm"><i data-lucide="external-link" class="h-4 w-4 mr-2"></i>{links[lang]}</a></div>\\n            '
        
        block = re.sub(pattern, rf"\1{link_html}\2", block, flags=re.DOTALL)
    return block

# Find all Casa Rituals events
content = re.sub(r"\{\s*id:\s*'casa-rituals-.*?\},(?=\s*\{|\s*\];)", replace_block, content, flags=re.DOTALL)

with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)
print("Updated successfully")
