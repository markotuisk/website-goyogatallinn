import re

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Update index.html
html = re.sub(
    r'<h1 class="[^"]*" data-i18n="hero.title">.*?</h1>',
    r'<h1 class="mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium" data-i18n="hero.title">\n                    Home of traditional yoga and wellness practises in Tallinn</h1>',
    html, flags=re.DOTALL
)

html = re.sub(
    r'<p class="[^"]*" data-i18n="hero.description">.*?</p>',
    r'<p class="max-w-2xl mx-auto mb-10 text-base sm:text-lg text-white/90" data-i18n="hero.description">\n                    Goyoga is a safe sanctuary at the heart of Tallinn for people of all ages and preferences to come and switch off, relax and reinvigorate.</p>',
    html, flags=re.DOTALL
)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)

with open('js/data.js', 'r', encoding='utf-8') as f:
    js = f.read()

# English
js = re.sub(
    r'"hero\.title": "The Ultimate Yoga & Wellness Destination in Estonia"',
    r'"hero.title": "Home of traditional yoga and wellness practises in Tallinn"',
    js
)
js = re.sub(
    r'"hero\.description": "The widest variety of yoga and wellness practices in Tallinn.*?in Estonia\."',
    r'"hero.description": "Goyoga is a safe sanctuary at the heart of Tallinn for people of all ages and preferences to come and switch off, relax and reinvigorate."',
    js
)

# Estonian
js = re.sub(
    r'"hero\.title": "Tallinna ja Eesti parim jooga ja heaolu stuudio"',
    r'"hero.title": "Traditsioonilise jooga ja heaolu kodupaik Tallinnas"',
    js
)
js = re.sub(
    r'"hero\.description": "Eesti suurima valikuga jooga- ja heaolu keskus.*?kõigile\."',
    r'"hero.description": "Goyoga on turvaline oaas Tallinna südames, kuhu on oodatud igas vanuses ja eelistustega inimesed, et lülitada end välja, lõõgastuda ja taastuda."',
    js
)

# Finnish
js = re.sub(
    r'"hero\.title": "Tallinnan ja Viron paras jooga- ja hyvinvointistudio"',
    r'"hero.title": "Perinteisen joogan ja hyvinvoinnin koti Tallinnassa"',
    js
)
js = re.sub(
    r'"hero\.description": "Viron joogamaailman MyFitness.*?kaikille\."',
    r'"hero.description": "Goyoga on turvallinen keidas Tallinnan sydämessä kaikenikäisille ja -kuntoisille ihmisille tulla rentoutumaan, irrottautumaan arjesta ja virkistäytymään."',
    js
)

# Russian
js = re.sub(
    r'"hero\.title": "Лучшая студия йоги и велнеса в Таллине и Эстонии"',
    r'"hero.title": "Дом традиционной йоги и велнес-практик в Таллинне"',
    js
)
js = re.sub(
    r'"hero\.description": "Лидер в мире йоги Эстонии.*?атмосферу\."',
    r'"hero.description": "Goyoga — это безопасный оазис в самом сердце Таллинна, куда могут прийти люди всех возрастов и предпочтений, чтобы отключиться, расслабиться и восстановить силы."',
    js
)

with open('js/data.js', 'w', encoding='utf-8') as f:
    f.write(js)

print("Hero text patched successfully.")

