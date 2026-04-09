import re

with open('js/data.js', 'r', encoding='utf-8') as f:
    text = f.read()

# Add English
text = re.sub(
    r'("nav\.events": "Events",\n)',
    r'\1        "nav.shop": "Shop",\n        "shop.badge": "Opening Soon",\n        "shop.title": "GoYoga Shop",\n        "shop.subtitle": "We are curating a premium collection of yoga mats, accessories, and wellness products specifically geared toward Ashtanga practitioners. Stay tuned!",\n        "shop.back_home": "Back to Home",\n',
    text
)

# Add Estonian
text = re.sub(
    r'("nav\.events": "Üritused",\n)',
    r'\1        "nav.shop": "Pood",\n        "shop.badge": "Varsti Avame",\n        "shop.title": "GoYoga Pood",\n        "shop.subtitle": "Koostame esmaklassilist valikut joogamattidest, tarvikutest ja heaolustoodetest, mis on spetsiaalselt suunatud Ashtanga harrastajatele. Püsige lainel!",\n        "shop.back_home": "Tagasi avalehele",\n',
    text
)

# Add Finnish
text = re.sub(
    r'("nav\.events": "Tapahtumat",\n)',
    r'\1        "nav.shop": "Kauppa",\n        "shop.badge": "Aukeaa Pian",\n        "shop.title": "GoYoga Kauppa",\n        "shop.subtitle": "Kokoamme ensiluokkaista valikoimaa joogamatoista, tarvikkeista ja hyvinvointituotteista erityisesti Ashtangan harjoittajille. Pysy kuulolla!",\n        "shop.back_home": "Takaisin etusivulle",\n',
    text
)

# Add Russian
text = re.sub(
    r'("nav\.events": "События",\n)',
    r'\1        "nav.shop": "Магазин",\n        "shop.badge": "Скоро Открытие",\n        "shop.title": "GoYoga Магазин",\n        "shop.subtitle": "Мы собираем премиальную коллекцию ковриков для йоги, аксессуаров и товаров для здоровья специально для практикующих Аштангу. Следите за обновлениями!",\n        "shop.back_home": "Вернуться на главную",\n',
    text
)

with open('js/data.js', 'w', encoding='utf-8') as f:
    f.write(text)
print("js/data.js patched!")
