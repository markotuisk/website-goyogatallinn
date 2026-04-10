import re

path = 'js/data.js'
with open(path, 'r', encoding='utf-8') as f:
    js_content = f.read()

# Pattern to replace link: "#" with the actual link AND add qrCode for the 29€ options
js_content = re.sub(
    r'(name:\s*["\'](?:29€ Gift Card|29€ Kinkekaart|29€ Lahjakortti|Подарочная карта 29€)["\'],\s*price:\s*["\']29€["\'],\s*)link:\s*["\']#["\'],\s*image:',
    r'\g<1>link: "https://wise.com/pay/r/RF2M_iIDVmpLYPs", qrCode: "/assets/qr/gift-card-29-qr.png", image:',
    js_content
)

with open(path, 'w', encoding='utf-8') as f:
    f.write(js_content)
