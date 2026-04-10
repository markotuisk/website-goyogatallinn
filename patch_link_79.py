import re

path = 'js/data.js'
with open(path, 'r', encoding='utf-8') as f:
    js_content = f.read()

# Pattern to replace link: "#" with the actual link AND add qrCode for the 79€ options
js_content = re.sub(
    r'(name:\s*["\'](?:79€ Gift Card|79€ Kinkekaart|79€ Lahjakortti|Подарочная карта 79€)["\'],\s*price:\s*["\']79€["\'],\s*)link:\s*["\']#["\'],\s*image:',
    r'\g<1>link: "https://wise.com/pay/r/a1-PvEUEZRSeIeo", qrCode: "/assets/qr/gift-card-79-qr.png", image:',
    js_content
)

with open(path, 'w', encoding='utf-8') as f:
    f.write(js_content)
