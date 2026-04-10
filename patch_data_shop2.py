import re
import os

data_path = 'js/data.js'
with open(data_path, 'r', encoding='utf-8') as f:
    js_content = f.read()

shop_data_snippet = """
const shopData = {
    en: {
        gift_cards: {
            title: "Digital Gift Cards",
            description: "Give the gift of presence. Delivered instantly via email with a unique code.",
            options: [
                { name: "29€ Gift Card", price: "29€", link: "#", image: "/assets/shop/gift-card.png", desc: "Perfect for a Studio Explorer Pass." },
                { name: "50€ Gift Card", price: "50€", link: "#", image: "/assets/shop/gift-card.png", desc: "Covers a 5-Visit Pass." },
                { name: "79€ Gift Card", price: "79€", link: "#", image: "/assets/shop/gift-card.png", desc: "Valid for a 1-Month Unlimited Pass." },
                { name: "160€ Gift Card", price: "160€", link: "#", image: "/assets/shop/gift-card.png", desc: "Our ultimate 20-Visit Pass offering." }
            ]
        }
    },
    et: {
        gift_cards: {
            title: "Digitaalsed Kinkekaardid",
            description: "Kingi kohaloleku aega. Saadetakse koheselt e-posti teel unikaalse koodiga.",
            options: [
                { name: "29€ Kinkekaart", price: "29€", link: "#", image: "/assets/shop/gift-card.png", desc: "Aitab soetada Studio Explorer Passi." },
                { name: "50€ Kinkekaart", price: "50€", link: "#", image: "/assets/shop/gift-card.png", desc: "Katab 5-Korra Kaardi maksumuse." },
                { name: "79€ Kinkekaart", price: "79€", link: "#", image: "/assets/shop/gift-card.png", desc: "Kehtib 1-Kuu Piiramatule paketile." },
                { name: "160€ Kinkekaart", price: "160€", link: "#", image: "/assets/shop/gift-card.png", desc: "Ideaalne 20-Korra Kaardi valik." }
            ]
        }
    },
    fi: {
        gift_cards: {
            title: "Digitaaliset Lahjakortit",
            description: "Anna lahjaksi aikaa itselle. Toimitetaan välittömästi sähköpostitse ainutlaatuisella koodilla.",
            options: [
                { name: "29€ Lahjakortti", price: "29€", link: "#", image: "/assets/shop/gift-card.png", desc: "Täydellinen Studio Explorer Passia varten." },
                { name: "50€ Lahjakortti", price: "50€", link: "#", image: "/assets/shop/gift-card.png", desc: "Kattaa 5-kerran kortin hinnan." },
                { name: "79€ Lahjakortti", price: "79€", link: "#", image: "/assets/shop/gift-card.png", desc: "Kattaa 1 Kuukauden rajattoman passin." },
                { name: "160€ Lahjakortti", price: "160€", link: "#", image: "/assets/shop/gift-card.png", desc: "Upea lahja - 20-kerran kortti." }
            ]
        }
    },
    ru: {
        gift_cards: {
            title: "Цифровые Подарочные Карты",
            description: "Подарите время для себя. Мгновенная доставка по электронной почте с уникальным кодом.",
            options: [
                { name: "Подарочная карта 29€", price: "29€", link: "#", image: "/assets/shop/gift-card.png", desc: "Идеально для Studio Explorer Pass." },
                { name: "Подарочная карта 50€", price: "50€", link: "#", image: "/assets/shop/gift-card.png", desc: "Покрывает абонемент на 5 занятий." },
                { name: "Подарочная карта 79€", price: "79€", link: "#", image: "/assets/shop/gift-card.png", desc: "Действительна для безлимитного абонемента на 1 месяц." },
                { name: "Подарочная карта 160€", price: "160€", link: "#", image: "/assets/shop/gift-card.png", desc: "Отличный вариант для абонемента на 20 занятий." }
            ]
        }
    }
};
"""

if 'const shopData = {' not in js_content:
    js_content = js_content + "\n" + shop_data_snippet
    with open(data_path, 'w', encoding='utf-8') as f:
        f.write(js_content)
    print("Injected shopData.")
else:
    print("shopData already exists.")
