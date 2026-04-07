// SEO Data Configuration
const seoData = {
    // Localized URL Routing
    urlRoutes: {
        en: {
            "index.html": "index.html",
            "class.html": "class.html",
            "event.html": "event.html",
            "events.html": "events.html",
            "faq.html": "faq.html",
            "offers.html": "offers.html",
            "rent.html": "rent.html",
            "teacher.html": "teacher.html",
            "corporate.html": "corporate.html"
        },
        et: {
            "index.html": "index.html",
            "class.html": "tunnid.html",
            "event.html": "uritus.html",
            "events.html": "uritused.html",
            "faq.html": "korduma-kippuvad-kusimused.html",
            "offers.html": "hinnakiri.html",
            "rent.html": "rendi-ruumid.html",
            "teacher.html": "opetajad.html",
            "corporate.html": "ettevotetele.html"
        },
        fi: {
            "index.html": "index.html",
            "class.html": "tunnit.html",
            "event.html": "tapahtuma.html",
            "events.html": "tapahtumat.html",
            "faq.html": "ukk.html",
            "offers.html": "hinnasto.html",
            "rent.html": "tilojen-vuokraus.html",
            "teacher.html": "opettajat.html",
            "corporate.html": "yrityksille.html"
        },
        ru: {
            "index.html": "index.html",
            "class.html": "zanyatiya.html",
            "event.html": "sobytie.html",
            "events.html": "sobytiya.html",
            "faq.html": "faq.html",
            "offers.html": "predlozheniya.html",
            "rent.html": "arenda.html",
            "teacher.html": "uchitelya.html",
            "corporate.html": "korporativnym.html"
        }
    },

    // Basic Meta Tags by Language
    meta: {
        en: {
            title: "Goyoga Tallinn | Yoga & Wellness Sanctuary | Tallinn City Center",
            description: "Home of traditional yoga and wellness practises in Tallinn. Join goyoga.ee for daily classes: Ashtanga, Vinyasa, Yin, Pilates, and wellness events like Sound Baths.",
            keywords: "Yoga Tallinn, Wellness Tallinn, Ashtanga, Vinyasa, Yin Yoga, Sound Bath Tallinn, Cacao Ceremony Estonia, Pilates Tallinn, Qigong, Yoga Nidra",
            ogTitle: "Yoga & Wellness Sanctuary in Tallinn | goyoga.ee",
            ogDescription: "Discover an authentic space for yoga and wellness in the heart of Tallinn. Classes for all levels and ages."
        },
        et: {
            title: "Goyoga Tallinn | Jooga ja heaolu oaas | Tallinna südalinn",
            description: "Traditsioonilise jooga ja heaolu seansid Tallinna südames. Ashtanga, Vinyasa, Yin jooga, Pilates ja helirännakud goyoga.ee stuudios.",
            keywords: "Jooga Tallinn, heaolu, Ashtanga, Vinyasa, Yin jooga, helirännak Tallinn, kakaotseremoonia, Pilates Tallinn, Qigong, Yoga Nidra",
            ogTitle: "Jooga ja heaolu oaas Tallinnas | goyoga.ee",
            ogDescription: "Avasta autentne ruum jooga ja heaolu jaoks Tallinna südames. Tunnid igale tasemele ja vanusele."
        },
        fi: {
            title: "Goyoga Tallinna | Joogan ja hyvinvoinnin keidas | Tallinnan keskusta",
            description: "Perinteisen joogan ja hyvinvointipalveluiden koti Tallinnassa. Ashtanga, Vinyasa, Yin-jooga, Pilates ja äänimaljakylvyt goyoga.ee:ssä.",
            keywords: "Jooga Tallinna, hyvinvointi, Ashtanga, Vinyasa, Yin jooga, äänimaljakylpy Tallinna, kaakaoseremonia, Pilates Tallinna, Qigong, Yoga Nidra",
            ogTitle: "Joogan ja hyvinvoinnin keidas Tallinnassa | goyoga.ee",
            ogDescription: "Löydä aito tila joogalle ja hyvinvoinnille Tallinnan sydämessä. Tunteja kaikille tasoille ja ikäryhmille."
        },
        ru: {
            title: "Goyoga Tallinn | Йога и велнес-оазис | Центр Таллина",
            description: "Дом традиционной йоги и велнес-практик в Таллине. Аштанга, Виньяса, Инь-йога, Пилатес и звуковые ванны в goyoga.ee.",
            keywords: "Йога Таллин, велнес, Аштанга, Виньяса, Инь йога, звуковые ванны Таллин, церемонии какао, Пилатес Таллин, Цигун, Йога Нидра",
            ogTitle: "Йога и велнес-оазис в Таллине | goyoga.ee",
            ogDescription: "Найдите аутентичное пространство для йоги и велнеса в сердце Таллина. Занятия для всех уровней и возрастов."
        },
        rent: {
            en: {
                title: "Studio Rental | Light-filled Space in Tallinn Centre | Goyoga Tallinn",
                description: "Rent our beautiful yoga studio for your next workshop, seminar or event. Natural wood floors, premium amenities, and a tranquil atmosphere in the heart of Tallinn.",
                keywords: "yoga studio rental Tallinn, workshop space Tallinn, seminar room Tallinn, studio hire Tallinn, Goyoga Tallinn rental"
            },
            et: {
                title: "Stuudio rent | Valgusküllane ruum Tallinna kesklinnas | Goyoga Tallinn",
                description: "Rendi meie kaunis joogastuudio oma järgmiseks töötoaks, seminariks või sündmuseks. Looduslikud puitpõrandate ja kvaliteetsed mugavused ja rahulik atmosfäär Tallinna südames.",
                keywords: "stuudio rent Tallinn, saali rent Tallinn, koolitusruum Tallinn, joogasaali rent, Goyoga Tallinn rent"
            },
            fi: {
                title: "Studion vuokraus | Valoisa tila Tallinnan keskustassa | Goyoga Tallinn",
                description: "Vuokraa kaunis joogastudiomme seuraavaa työpajaasi, seminaariasi tai tapahtumaasi varten. Luonnonpuulattiat, laadukkaat mugavused ja rauhallinen ilmapiiri Tallinnan keskustassa | Goyoga Tallinn",
                keywords: "studion vuokraus Tallinna, työpajatila Tallinna, seminaarihuone Tallinna, joogasalivuokraus, Goyoga Tallinn"
            },
            ru: {
                title: "Аренда студии | Светлое пространство в центре Таллина | Goyoga Tallinn",
                description: "Арендуйте нашу красивую студию йоги для следующего мастер-класса, семинара или мероприятия. Деревянные полы, высококачественное оборудование и спокойная атмосфера в центре Таллина.",
                keywords: "аренда студии Таллин, рабочее пространство Таллин, зал для семинара Таллин, аренда зала йоги, Goyoga Tallinn"
            }
        },
        corporate: {
            en: {
                title: "Corporate Wellness | Yoga & Team Well-being Tallinn | Goyoga Tallinn",
                description: "Boost your team's productivity and health. Customized corporate yoga, meditation, and stress management at our studio or your office in Tallinn.",
                keywords: "corporate wellness Tallinn, corporate yoga Tallinn, team building Tallinn, employee wellbeing, meditation for companies, workplace health"
            },
            et: {
                title: "Ettevõtetele | Jooga ja meeskonna heaolu | Goyoga Tallinn",
                description: "Tõsta oma meeskonna produktiivsust ja tervist. Kohandatud ettevõtte jooga, meditatsioon ja stressijuhtimine meie stuudios või teie kontoris Tallinnas.",
                keywords: "ettevõtte heaolu Tallinn, ettevõtte jooga Tallinn, meeskonna üritused, töötajate heaolu, meditatsioon ettevõtetele, tervisedendus töökohal"
            },
            fi: {
                title: "Yrityksille | Jooga ja tiimin hyvinvointi | Goyoga Tallinn",
                description: "Paranna tiimisi tuottavuutta ja terveyttä. Räätälöity yritysjooga, meditaatio ja stressinhallinta studiollamme tai toimistollanne Tallinnassa.",
                keywords: "yritysten hyvinvointi Tallinna, yritysjooga Tallinna, tiimipäivä Tallinna, työntekijöiden hyvinvointi, meditaatio yrityksille, työterveys"
            },
            ru: {
                title: "Корпоративным клиентам | Йога и благополучие команды | Goyoga Tallinn",
                description: "Повысьте продуктивность и здоровье вашей команды. Индивидуальная корпоративная йога, медитация и управление стрессом в нашей студии или в вашем офисе в Таллине.",
                keywords: "корпоративный велнес Таллин, корпоративная йога Таллин, тимбилдинг Таллин, благополучие сотрудников, медитация для компаний"
            }
        },
        faq: {
            en: {
                title: "FAQ | Frequently Asked Questions | Goyoga Tallinn",
                description: "Find answers to common questions about practicing Ashtanga yoga at Goyoga Tallinn. New students, pricing, etiquette, and more.",
                keywords: "yoga FAQ Tallinn, start yoga Tallinn, Ashtanga yoga guide, yoga etiquette, beginner yoga Tallinn"
            },
            et: {
                title: "KKK | Korduma Kippuvad Küsimused | Goyoga Tallinn",
                description: "Leia vastused korduma kippuvatele küsimustele Ashtanga jooga praktikate kohta Goyoga Tallinnas. Uued õpilased, hinnad, etikett ja muu.",
                keywords: "jooga KKK, joogaga alustamine Tallinnas, Ashtanga jooga juhend, jooga etikett"
            },
            fi: {
                title: "UKK | Usein Kysytyt Kysymykset | Goyoga Tallinna",
                description: "Löydät vastauksia usein kysyttyihin kysymyksiin Ashtanga-joogasta Goyoga Tallinnassa. Uudet oppilaat, hinnat, etiketti ja muuta.",
                keywords: "jooga UKK, joogan aloittaminen Tallinna, Ashtanga joogaopas, joogaetiketti"
            },
            ru: {
                title: "ЧАВО | Часто Задаваемые Вопросы | Goyoga Tallinn",
                description: "Найдите ответы на частые вопросы о практике Аштанга-йоги в Goyoga Tallinn. Новые студенты, цены, этикет и многое другое.",
                keywords: "йога ЧАВО, начать йогу Таллин, руководство Аштанга йога, этикет йоги, йога для начинающих Таллин"
            }
        },
        offers: {
            en: {
                title: "Seasonal Offers | Exclusive Whispers | Goyoga Tallinn",
                description: "Discover limited-time offerings, workshops, and exclusive seasonal deals at goyoga.ee. Traditional Ashtanga yoga in Tallinn city center.",
                keywords: "yoga offers Tallinn, seasonal yoga deals, workshop discounts, Goyoga Tallinn exclusive, Ashtanga deals"
            },
            et: {
                title: "Hooajalised pakkumised | Eksklusiivsed soodustused | Goyoga Tallinn",
                description: "Avasta piiratud ajaga pakkumised, töötoad ja eksklusiivsed soodustused goyoga.ee-s. Traditsiooniline Ashtanga jooga Tallinna kesklinnas.",
                keywords: "jooga pakkumised, sügisene jooga soodustus, töötubade soodustused, Goyoga Tallinn sooduspakkumised"
            },
            fi: {
                title: "Kausitarjoukset | Eksklusiiviset tarjoukset | Goyoga Tallinna",
                description: "Tutustu rajoitetun ajan tarjouksiin, työpajoihin ja eksklusiivisiin kausitarjouksiin osoitteessa goyoga.ee. Perinteistä Ashtanga-joogaa Tallinnan keskustassa.",
                keywords: "joogatarjoukset Tallinna, kausitarjoukset jooga, työpaja-alennukset, Goyoga Tallinn-tarjous"
            },
            ru: {
                title: "Сезонные предложения | Эксклюзивные скидки | Goyoga Tallinn",
                description: "Откройте для себя предложения с ограниченным сроком действия, мастер-классы и эксклюзивные сезонные скидки на goyoga.ee. Традиционная Аштанга-йога в центре Таллина.",
                keywords: "предложения йога Таллин, сезонные скидки йога, скидки на мастер-классы, Goyoga Tallinn эксклюзив, Аштанга скидки"
            },
        },
        teachers: {
            en: {
                title: "{name} | {role} Teacher Journey | Goyoga Tallinn",
                description: "Explore the journey, philosophy, and expertise of {name}, dedicated {role} at Goyoga Tallinn. Join our community for authentic yoga and wellness in Tallinn.",
                keywords: "{name}, yoga teacher Tallinn, wellness expert Estonia, {role}, Goyoga Tallinn profile"
            },
            et: {
                title: "{name} | {role} Õpetaja teekond | Goyoga Tallinn",
                description: "Avasta {name} teekond, filosoofia ja kogemused Goyoga Tallinnas. {name} on pühendunud {role}, kes toetab sinu jooga- ja heaolu teekonda.",
                keywords: "{name}, joogaõpetaja Tallinn, heaolu ekspert, {role}, Goyoga Tallinn profiil"
            },
            fi: {
                title: "{name} | {role} Opettajan matka | Goyoga Tallinna",
                description: "Tutustu opettajan {name} matkaan, filosofiaan ja asiantuntemukseen Goyoga Tallinnassa. Kokenut {role} {name} toivottaa sinut tervetulleeksi joogayhteisöömme.",
                keywords: "{name}, joogaopettaja Tallinna, hyvinvointiasiantuntija Viro, {role}, Goyoga Tallinn-profiili"
            },
            ru: {
                title: "{name} | {role} Путь учителя | Goyoga Tallinn",
                description: "Откройте для себя путь, философию и опыт {name} в Goyoga Tallinn. Квалифицированный {role} {name} поможет вам в вашей практике йоги и велнеса.",
                keywords: "{name}, учитель йоги Таллин, велнес-эксперт Эстония, {role}, Goyoga Tallinn профиль"
            }
        },
        classes: {
            en: {
                title: "{title} | Traditional Yoga in Tallinn | Goyoga Tallinn",
                description: "{title} at Goyoga Tallinn: {tagline} Discover our authentic classes and wellness sanctuary in the heart of Tallinn.",
                keywords: "{title} Tallinn, traditional yoga, wellness practices, Goyoga classes"
            },
            et: {
                title: "{title} | Traditsiooniline jooga Tallinnas | Goyoga Tallinn",
                description: "{title} Goyoga Tallinnas: {tagline} Avasta meie autentsed joogatunnid ja heaolu oaas Tallinna südalinnas.",
                keywords: "{title} Tallinn, traditsiooniline jooga, heaolu praktikad, Goyoga tunnid"
            },
            fi: {
                title: "{title} | Perinteinen jooga Tallinnassa | Goyoga Tallinna",
                description: "{title} Goyoga Tallinnassa: {tagline} Tutustu aitoihin joogatunteihimme ja hyvinvoinnin keitaaseen Tallinnan sydämessä.",
                keywords: "{title} Tallinna, perinteinen jooga, hyvinvointipalvelut, Goyoga tunnit"
            },
            ru: {
                title: "{title} | Традиционная йога в Таллине | Goyoga Tallinn",
                description: "{title} в Goyoga Tallinn: {tagline} Откройте для себя наши аутентичные занятия йогой и велнес-оазис в центре Таллина.",
                keywords: "{title} Таллин, традиционная йога, велнес-практики, занятия Goyoga"
            }
        }
    },

    // JSON-LD Structured Data (LLM & Search Engine optimization)
    // This part is "AI Finding" bait.
    schema: {
        "@context": "https://schema.org",
        "@type": ["LocalBusiness", "YogaStudio"],
        "name": "Goyoga Tallinn",
        "alternateName": "Goyoga Tallinn",
        "url": "https://www.goyoga.ee",
        "logo": "https://www.goyoga.ee/logo.png",
        "image": "https://www.goyoga.ee/assets/studio/2-goyoga-tallinn-stuudio-estonia.webp",
        "description": "Home of traditional yoga and wellness practises in Tallinn. Offering Ashtanga, Vinyasa, Yin Yoga, Pilates, and unique wellness events.",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Narva mnt 7D",
            "addressLocality": "Tallinn",
            "postalCode": "10117",
            "addressCountry": "EE"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 59.437,
            "longitude": 24.757
        },
        "telephone": "+372 513 2433",
        "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "06:30",
                "closes": "20:00"
            },
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Saturday", "Sunday"],
                "opens": "09:30",
                "closes": "18:00"
            }
        ],
        "sameAs": [
            "https://www.instagram.com/goyoga.ee",
            "https://www.facebook.com/goyoga.ee"
        ],
        "priceRange": "$$",
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": 5.0,
            "reviewCount": 24
        }
    },

    // Image Alt Text Translations for Local Image SEO Search
    alts: {
        et: {
            "Goyoga Tallinn": "Goyoga Tallinn Joogastuudio",
            "Student practicing traditional Ashtanga Yoga at Goyoga Tallinn Tallinn studio": "Õpilane praktiseerimas traditsioonilist Ashtanga joogat Goyoga Tallinna stuudios",
            "Ashtanga Yoga": "Ashtanga Jooga Tallinnas",
            "Strength": "Jõud ja venivus",
            "60+ Yoga": "Seenioride jooga 60+",
            "Qigong": "Qigong ehk hiina võimlemine",
            "Sound Baths": "Helirännakud ja gongiõhtud Tallinnas",
            "Yoga Nidra | Meditatsioon": "Yoga Nidra | Meditatsioon",
            "Meditation": "Meditatsioon Tallinnas",
            "Slow Flow Yoga": "Slow Flow Jooga",
            "Vinyasa Flow": "Vinyasa Flow Jooga Tallinnas",
            "Hatha Yoga": "Hatha Jooga",
            "Cacao Ceremonies": "Kakaotseremooniad Tallinnas",
            "Join Our Team": "Liitu meiega",
            "Spacious and bright yoga shala interior at Narva mnt 7D Tallinn": "Avar ja valgusküllane joogasaal aadressil Narva mnt 7D Tallinn",
            "Yoga practitioners in lotus position at Goyoga Tallinn Tallinn": "Joogapraktiseerijad lootoseasendis Goyoga Tallinnas",
            "Meditation and mindfulness session at our Tallinn studio": "Meditatsiooni ja teadveloleku seanss meie Tallinna stuudios",
            "Professional yoga props including mats and blocks for Ashtanga practice": "Professionaalsed joogamatid ja plokid Ashtanga praktikaks"
        },
        fi: {
            "Goyoga Tallinn": "Goyoga Tallinn Joogastudio",
            "Student practicing traditional Ashtanga Yoga at Goyoga Tallinn Tallinn studio": "Oppilas harjoittelee perinteistä Ashtanga-joogaa Goyoga Tallinn -studiossa",
            "Ashtanga Yoga": "Ashtanga Jooga",
            "Strength": "Voima",
            "60+ Yoga": "Ikäihmisten jooga 60+",
            "Qigong": "Qigong",
            "Sound Baths": "Äänimaljarentoutus Tallinnassa",
            "Yoga Nidra | Meditatsioon": "Yoga Nidra",
            "Meditation": "Meditaatio",
            "Slow Flow Yoga": "Slow Flow Jooga",
            "Vinyasa Flow": "Vinyasa Flow Jooga",
            "Hatha Yoga": "Hatha Jooga",
            "Cacao Ceremonies": "Kaakaoseremoniat",
            "Join Our Team": "Liity tiimiimme",
            "Spacious and bright yoga shala interior at Narva mnt 7D Tallinn": "Tilava ja valoisa joogasali osoitteessa Narva mnt 7D Tallinna",
            "Yoga practitioners in lotus position at Goyoga Tallinn Tallinn": "Joogan harrastajat lootusasennossa Goyoga Tallinnassa",
            "Meditation and mindfulness session at our Tallinn studio": "Meditaatio- ja mindfulness-sessio Tallinnan studiollamme",
            "Professional yoga props including mats and blocks for Ashtanga practice": "Ammattitason joogamatot ja tiilet Ashtanga-harjoitusta varten"
        },
        ru: {
            "Goyoga Tallinn": "Студия йоги Goyoga Tallinn",
            "Student practicing traditional Ashtanga Yoga at Goyoga Tallinn Tallinn studio": "Студент практикует традиционную Аштанга-йогу в студии Goyoga Tallinn в Таллине",
            "Ashtanga Yoga": "Аштанга йога в Таллине",
            "Strength": "Силовые тренировки",
            "60+ Yoga": "Йога для пожилых 60+",
            "Qigong": "Цигун",
            "Sound Baths": "Звуковые ванны в Таллине",
            "Yoga Nidra | Meditatsioon": "Йога Нидра | Медитация",
            "Meditation": "Медитация в Таллине",
            "Slow Flow Yoga": "Медленная йога",
            "Vinyasa Flow": "Виньяса Флоу йога в Таллине",
            "Hatha Yoga": "Хатха йога",
            "Cacao Ceremonies": "Церемонии какао в Таллине",
            "Join Our Team": "Присоединяйтесь к нам",
            "Spacious and bright yoga shala interior at Narva mnt 7D Tallinn": "Просторный и светлый интерьер зала йоги по адресу Narva mnt 7D, Таллин",
            "Yoga practitioners in lotus position at Goyoga Tallinn Tallinn": "Практикующие йогу в позе лотоса в Goyoga Tallinn",
            "Meditation and mindfulness session at our Tallinn studio": "Сеанс медитации и осознанности в нашей студии в Таллине",
            "Professional yoga props including mats and blocks for Ashtanga practice": "Профессиональные коврики и блоки для практики Аштанги"
        }
    },

    // Cheeky / Dynamic SEO Settings
    config: {
        canonical: "https://www.goyoga.ee",
        twitterHandle: "@goyoga_ee",
        defaultImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb"
    }
};
