import json
import re

with open('js/data.js', 'r', encoding='utf-8') as f:
    text = f.read()

# Instead of relying on nav.events, let's just append to the dictionary right after "checkout.invoice_no"
# Wait, let's just do a regex replace on the first bracket or end of the english block.
# Actually, the string `"checkout.invoice_no": "Invoice No.",` exists.
text = text.replace(
    '"checkout.invoice_no": "Invoice No.",\n',
    '"checkout.invoice_no": "Invoice No.",\n        "nav.shop": "Shop",\n        "shop.badge": "Opening Soon",\n        "shop.title": "Goyoga Shop",\n        "shop.subtitle": "We are curating a premium collection of yoga mats, accessories, and wellness products specifically geared toward Ashtanga practitioners. Stay tuned!",\n        "shop.back_home": "Back to Home",\n'
)

text = text.replace(
    '"checkout.invoice_no": "Arve nr.",\n',
    '"checkout.invoice_no": "Arve nr.",\n        "nav.shop": "Pood",\n        "shop.badge": "Varsti Avame",\n        "shop.title": "Goyoga Pood",\n        "shop.subtitle": "Koostame esmaklassilist valikut joogamattidest, tarvikutest ja heaolustoodetest, mis on spetsiaalselt suunatud Ashtanga harrastajatele. Püsige lainel!",\n        "shop.back_home": "Tagasi avalehele",\n'
)

text = text.replace(
    '"checkout.invoice_no": "Laskun nro.",\n',
    '"checkout.invoice_no": "Laskun nro.",\n        "nav.shop": "Kauppa",\n        "shop.badge": "Aukeaa Pian",\n        "shop.title": "Goyoga Kauppa",\n        "shop.subtitle": "Kokoamme ensiluokkaista valikoimaa joogamatoista, tarvikkeista ja hyvinvointituotteista erityisesti Ashtangan harjoittajille. Pysy kuulolla!",\n        "shop.back_home": "Takaisin etusivulle",\n'
)

text = text.replace(
    '"checkout.invoice_no": "Счет №",\n',
    '"checkout.invoice_no": "Счет №",\n        "nav.shop": "Магазин",\n        "shop.badge": "Скоро Открытие",\n        "shop.title": "Goyoga Магазин",\n        "shop.subtitle": "Мы собираем премиальную коллекцию ковриков для йоги, аксессуаров и товаров для здоровья специально для практикующих Аштангу. Следите за обновлениями!",\n        "shop.back_home": "Вернуться на главную",\n'
)

with open('js/data.js', 'w', encoding='utf-8') as f:
    f.write(text)

