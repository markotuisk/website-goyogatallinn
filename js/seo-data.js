// SEO Data Configuration
const seoData = {
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
        },
        teachers: {
            en: {
                title: "{name} | Teacher Journey | Goyoga Tallinn",
                description: "Explore the journey, philosophy, and expertise of {name} at Goyoga Tallinn. Join our community of yoga and wellness practitioners.",
                keywords: "{name}, yoga teacher Tallinn, wellness expert Estonia, {role}, Goyoga Tallinn profile"
            },
            et: {
                title: "{name} | Õpetaja teekond | Goyoga Tallinn",
                description: "Avasta {name} teekond, filosoofia ja kogemused Goyoga Tallinnas. Liitu meie jooga- ja heaolu kogukonnaga.",
                keywords: "{name}, joogaõpetaja Tallinn, heaolu ekspert, {role}, Goyoga Tallinn profiil"
            },
            fi: {
                title: "{name} | Opettajan matka | Goyoga Tallinna",
                description: "Tutustu opettajan {name} matkaan, filosofiaan ja asiantuntemukseen Goyoga Tallinnassa. Liity jooga- ja hyvinvointiyhteisöömme.",
                keywords: "{name}, joogaopettaja Tallinna, hyvinvointiasiantuntija Viro, {role}, Goyoga Tallinn-profiili"
            }
        }
    },

    // JSON-LD Structured Data (LLM & Search Engine optimization)
    // This part is "AI Finding" bait.
    schema: {
        "@context": "https://schema.org",
        "@type": "YogaStudio",
        "name": "goyoga.ee Yoga & Wellness Sanctuary",
        "alternateName": "Goyoga Tallinn",
        "url": "https://goyoga.ee",
        "logo": "https://goyoga.ee/logo.png",
        "image": "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
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
            "ratingValue": "5.0",
            "reviewCount": "24"
        }
    },

    // Cheeky / Dynamic SEO Settings
    config: {
        canonical: "https://goyoga.ee",
        twitterHandle: "@goyoga_ee",
        defaultImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb"
    }
};
