import re

with open('js/data.js', 'r', encoding='utf-8') as f:
    js = f.read()

en_keys = """        "checkout.invoice_no": "Invoice No.",
        "checkout.org_checkbox": "Purchase is by organisation",
        "checkout.org_details": "Organisation Details",
        "checkout.org_country": "Country",
        "checkout.org_name": "Organisation Name",
        "checkout.org_reg": "Registration Number",
        "checkout.org_web": "Website (Optional)",
        "checkout.vat_note": "* Note: Services do not include VAT.",
"""
et_keys = """        "checkout.invoice_no": "Arve nr.",
        "checkout.org_checkbox": "Ostjaks on ettevõte",
        "checkout.org_details": "Ettevõtte andmed",
        "checkout.org_country": "Riik",
        "checkout.org_name": "Ettevõtte nimi",
        "checkout.org_reg": "Registrikood",
        "checkout.org_web": "Koduleht (valikuline)",
        "checkout.vat_note": "* Märkus: Teenustele ei lisandu käibemaksu.",
"""
fi_keys = """        "checkout.invoice_no": "Laskun nro",
        "checkout.org_checkbox": "Ostaja on yritys",
        "checkout.org_details": "Yrityksen tiedot",
        "checkout.org_country": "Maa",
        "checkout.org_name": "Yrityksen nimi",
        "checkout.org_reg": "Y-tunnus",
        "checkout.org_web": "Verkkosivusto (valinnainen)",
        "checkout.vat_note": "* Huomaa: Palvelut eiv\u00e4t sis\u00e4ll\u00e4 arvonlis\u00e4veroa.",
"""
ru_keys = """        "checkout.invoice_no": "Счет №",
        "checkout.org_checkbox": "Покупка от имени организации",
        "checkout.org_details": "Данные организации",
        "checkout.org_country": "Страна",
        "checkout.org_name": "Название организации",
        "checkout.org_reg": "Регистр. номер",
        "checkout.org_web": "Веб-сайт (необязательно)",
        "checkout.vat_note": "* Примечание: Услуги не включают НДС.",
"""

js = re.sub(r'"checkout\.invoice_no": "Invoice No\.",', en_keys, js, count=1)
js = re.sub(r'"checkout\.invoice_no": "Arve nr\.",', et_keys, js, count=1)
js = re.sub(r'"checkout\.invoice_no": "Laskun nro",', fi_keys, js, count=1)
js = re.sub(r'"checkout\.invoice_no": "Счет №",', ru_keys, js, count=1)

with open('js/data.js', 'w', encoding='utf-8') as f:
    f.write(js)

print("Checkouts patched.")
