import re

path = 'js/data.js'
with open(path, 'r', encoding='utf-8') as f:
    js_content = f.read()

# Pattern to replace link: "#" with the actual link AND add qrCode for the 160€ options
js_content = re.sub(
    r'(name:\s*["\'](?:160€ Gift Card|160€ Kinkekaart|160€ Lahjakortti|Подарочная карта 160€)["\'],\s*price:\s*["\']160€["\'],\s*)link:\s*["\']#["\'],\s*image:',
    r'\g<1>link: "https://wise.com/pay/r/UUOmkj2LL8LlME4", qrCode: "/assets/qr/gift-card-160-qr.png", image:',
    js_content
)

with open(path, 'w', encoding='utf-8') as f:
    f.write(js_content)
