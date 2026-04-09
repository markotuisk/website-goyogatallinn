import re

with open('js/data.js', 'r', encoding='utf-8') as f:
    text = f.read()

# Replace specific teacher emails:
replacements = {
    "raili.maripuu@goyoga.ee": "raili@goyoga.ee",
    "victoria.palusaar@goyoga.ee": "victoria@goyoga.ee",
    "triin.parro@goyoga.ee": "triinparro@goyoga.ee",
    "kaia.karjatse@goyoga.ee": "kaia@goyoga.ee",
    "edith.tiitsaar@goyoga.ee": "edith@goyoga.ee",
    "marit.tuisk@goyoga.ee": "marit@goyoga.ee",
    "david.lepp@goyoga.ee": "david@goyoga.ee",
    "dian.aikani@goyoga.ee": "dian@goyoga.ee",
    "keiu.grossberg@goyoga.ee": "keiu@goyoga.ee",
    "lorena.rodrigo@goyoga.ee": "lorena@goyoga.ee"
}

for old_email, new_email in replacements.items():
    text = text.replace(old_email, new_email)

with open('js/data.js', 'w', encoding='utf-8') as f:
    f.write(text)

print("Emails updated in js/data.js")
