import re

with open('/Users/markotuisk/Documents/Goyoga Tallinn/website/js/events.js', 'r', encoding='utf-8', errors='ignore') as f:
    text = f.read()

# The corrupted part starts right after:
# 'Расширение сознания и легкость']
# \n        }
# And then it goes onto вливающий вечер: Йога Нидра и Гонг', etc.

fixed_text = re.sub(
    r"highlights: \['Глубокое расслабление и спокойная нервная система', 'Эмоциональное и энергетическое освобождение', 'Более ясный ум и заземленное присутствие', 'Расширение сознания и легкость'\]\n        }.*?Восстановление нервной системы'\]\n        }",
    "highlights: ['Глубокое расслабление и спокойная нервная система', 'Эмоциональное и энергетическое освобождение', 'Более ясный ум и заземленное присутствие', 'Расширение сознания и легкость']\n        }",
    text,
    flags=re.DOTALL
)

with open('/Users/markotuisk/Documents/Goyoga Tallinn/website/js/events.js', 'w', encoding='utf-8') as f:
    f.write(fixed_text)

print("Fixed")
