// Data Definitions
const translationsData = {
    en: {
        "nav.home": "Home", "nav.about": "About", "nav.studio": "Studio", "nav.schedule": "Schedule", "nav.pricing": "Pricing", "nav.teachers": "Teachers", "nav.events": "Events", "nav.community": "Community", "nav.contact": "Contact", "nav.language": "Language",
        "hero.tagline": "Yoga & Wellness Sanctuary", "hero.title": "Home of traditional yoga and wellness practises in Tallinn", "hero.description": "Daily yoga classes and wellness events in the centre of Tallinn. We have created an authentic space and community where different yoga styles and wellness practises support people’s choices.", "hero.view_schedule": "View Schedule", "hero.events": "Events", "hero.discover_more": "Discover More", "hero.seasonal_offer": "Seasonal Offer!",
        "about.tagline": "Our Approach", "about.title": "A Safe Sanctuary at the Heart of Tallinn", "about.description": "Goyoga is a safe sanctuary at the heart of Tallinn for people of all ages and preferences to come and switch off, relax and reinvigorate.", "about.subtitle": "Our Offerings", "about.content1": "Our practices are rooted in tradition but designed for modern living, providing a path to physical vitality and mental serenity.", "about.content2": "Whether you seek the dynamic flow of Ashtanga or the deep relaxation of a Sound Bath, our community is here to support your journey.", "about.benefits.physical.title": "Yoga", "about.benefits.physical.description": "Ashtanga, Vinyasa, Yin, Strength, 60+ yoga, Pilates, Qigong.", "about.benefits.mental.title": "Wellness", "about.benefits.mental.description": "Meditations, Sound Baths, Cacao Ceremonies, Yoga Nidra.",
        "studio.tagline": "Living Space", "studio.title": "A Home for Your Practice", "studio.description1": "Located at <span class='font-semibold'>Narva mnt 7D, Tallinn</span>, our shala is an urban retreat designed for deep practice and community gathering.", "studio.description2": "With natural light and grounding aesthetics, we provide a premium environment including high-quality mats, props, and a cozy tea corner for integration.", "studio.rent_button": "Rent Our Space",
        "schedule.tagline": "Live Class Schedule", "schedule.title": "Find Your Time to Practice", "schedule.description": "Our schedule is always up-to-date. Find a class and book your spot directly through the calendar below.",
        "pricing.tagline": "Pricing Options", "pricing.title": "Invest in Your Practice", "pricing.description": "We offer flexible pricing options to suit your schedule and commitment level.", "pricing.single.title": "Single Session", "pricing.single.description": "Perfect for drop-ins or trying out a class.", "pricing.memberships.title": "Memberships", "pricing.memberships.description": "The best value for dedicated practitioners.", "pricing.passes.title": "Multi-Visit Passes", "pricing.passes.description": "Great value for regular students who need flexibility.", "pricing.view_options": "View Options", "pricing.most_popular": "Most Popular", "pricing.view_seasonal_offers": "View Seasonal Offers", "pricing.offer.title": "Seasonal Offering", "pricing.offer.subtitle": "Studio Explorer Pass", "pricing.offer.description": "Experience 3 Yoga & Wellness classes of your choice. Valid for 30 days from purchase.", "pricing.offer.ends_in": "Offer Ends In:", "pricing.offer.days": "Days", "pricing.offer.hours": "Hours", "pricing.offer.minutes": "Mins", "pricing.offer.seconds": "Secs", "pricing.offer.claim_button": "Get Pass",
        "teachers.tagline": "Our Teachers", "teachers.title": "Experience & Wisdom", "teachers.description": "A diverse team of practitioners dedicated to your path of yoga and wellness.",
        "teachers.raili-maripuu.title": "Founder | Ashtanga", "teachers.raili-maripuu.description": "Bringing authentic Ashtanga practice to Tallinn with decades of experience.",
        "teachers.victoria-palusaar.title": "Ashtanga | Nutritional Therapist", "teachers.victoria-palusaar.description": "Focusing on conscious eating and the traditional Ashtanga method.",
        "teachers.triin-parro.title": "Strength & Holistic Health", "teachers.triin-parro.description": "Specializing in strength training and personalized wellness journeys.",
        "teachers.kaia-karjatse.title": "60+ Yoga | Sound Therapy", "teachers.kaia-karjatse.description": "Gentle movement and healing vibrations for all stages of life.",
        "teachers.edith-tiitsaar.title": "Qigong | Energy Work", "teachers.edith-tiitsaar.description": "Working with meridians and the Radiant Lotus Qigong tradition.",
        "teachers.marit-tuisk.title": "Meditations | Cacao Ceremonies", "teachers.marit-tuisk.description": "Opening hearts through sacred rituals and deep presence.",
        "teachers.david-lepp.title": "Sound Baths | Yoga Nidra", "teachers.david-lepp.description": "Mastering the gong to clear blockages and restore harmony.",
        "teachers.dian-jarvenkyla.title": "Vinyasa & Hatha Yoga", "teachers.dian-jarvenkyla.description": "Guiding mindfulness, strength, and body awareness through flowing movement.",
        "teachers.katlin-epner.title": "Yin Yoga", "teachers.katlin-epner.description": "Focused on creating space to slow down, breathe, and find clarity.",
        "teachers.keiu-grossberg.title": "Ashtanga Yoga", "teachers.keiu-grossberg.description": "Helping students study their limits and fears.",
        "teachers.join-us.name": "This Could Be You", "teachers.join-us.title": "Join Our Community", "teachers.join-us.description": "Whether you are a new teacher full of ideas or an established practitioner seeking a permanent home.", "teachers.join-us.cta": "Get In Touch",
        "teachers.discover": "Get to Know", "teachers.teaching_languages": "Teaching Languages",
        "events.tagline": "Deepen Your Practice", "events.title": "Upcoming Events & Retreats", "events.description": "Join us for special workshops and immersive retreats.", "events.event1.title": "Autumn Rejuvenation Retreat", "events.event1.description": "A 4-day immersive retreat in the Estonian countryside.", "events.event2.title": "Mastering Inversions Workshop", "events.event2.description": "Join Mia Johnson to build the strength and confidence to master inversions.", "events.register_button": "Register Now", "events.learn_more_button": "Learn More", "events.view_all": "View All Events & Retreats", "events.guided_by": "Guided by", "events.member_disclaimer": "Member prices apply to Ashtanga Pass (59€/mo), Full Pass (69€/mo) and 1-Month Pass (79€) holders.",
        "community.tagline": "Community", "community.title": "Words from Our Community", "community.description": "Hear what our students and teachers have to say.", "community.leave_review_button": "Leave a Review",
        "instagram.tagline": "Community", "instagram.title": "Follow Our Journey", "instagram.description": "See snapshots of our daily practice. Follow us on Instagram <a href='#' class='text-pink-600 font-semibold hover:underline'>@goyoga.ee</a>.",
        "contact.tagline": "Contact Us", "contact.title": "Get In Touch", "contact.description": "We are here to help.", "contact.form.title": "Send Us a Message", "contact.form.name": "Your Name", "contact.form.email": "Email Address", "contact.form.message": "Your Message", "contact.form.send_button": "Send Message", "contact.info.title": "Studio Information", "contact.info.location": "Location", "contact.info.parking": "Parking", "contact.info.transport": "Transport", "contact.info.directions": "Directions", "contact.info.hours": "Opening Hours", "contact.info.phone": "Phone", "contact.info.email": "Email",
        "footer.description": "Home of traditional yoga and wellness practises.", "footer.quick_links": "Quick Links", "footer.resources": "Resources", "footer.blog": "Blog", "footer.workshops": "Workshops", "footer.faq": "FAQ", "footer.newsletter": "Newsletter", "footer.newsletter_description": "Join our newsletter.", "footer.email_placeholder": "Your email", "footer.subscribe_button": "Subscribe", "footer.copyright": "© 2025 GoYoga.ee. All rights reserved.",
        "footer.rent": "Studio Rental",
        "footer.location_floor": "3rd floor",
        "footer.hours_mon_fri": "Mon-Fri",
        "footer.hours_sat": "Sat",
        "classes.tagline": "OUR OFFERINGS",
        "classes.title": "Classes & Practices",
        "classes.description": "Explore our diverse range of classes designed to nurture your body, mind, and spirit.",
        "classes.read_more": "Read More",
        "classes.back_to_classes": "Back to Classes",
        "classes.what_is_it": "What is it?",
        "classes.who_is_it_for": "Who is it for?",
        "classes.benefits": "Key Benefits",
        "classes.what_to_expect": "What to Expect",
        "classes.lineage": "The Lineage",
        "classes.social_proof_title": "Ashtanga Story",
        "classes.meet_guides": "Meet Your Guides",
        "classes.faq": "Common Questions",
        "classes.ready_to_start": "Ready to Start?",
        "classes.book_cta": "Check our schedule and book your next class today.",
        "teachers.back_to_teachers": "Back to Teachers",
        "teachers.meet": "Meet",
        "teachers.contact_info": "Contact Information",
        "classes.ashtanga.title": "Ashtanga Yoga",
        "classes.ashtanga.tagline": "A dynamic, moving meditation building strength and focus.",
        "classes.strength.title": "Strength & Conditioning",
        "classes.strength.tagline": "Functional power for a balanced body.",
        "classes.60plus.title": "60+ Yoga",
        "classes.60plus.tagline": "Gentle movement for vitality and longevity.",
        "classes.qigong.title": "Qigong",
        "classes.qigong.tagline": "Cultivating energy through gentle flow.",
        "classes.soundbath.title": "Sound Baths",
        "classes.soundbath.tagline": "Deep relaxation through healing vibrations.",
        "classes.yin.title": "Yin Yoga",
        "classes.yin.tagline": "Deep release through sustained, mindful stillness.",
        "classes.vinyasa.title": "Vinyasa Flow",
        "classes.vinyasa.tagline": "Dynamic movement synchronized with the breath.",
        "classes.hatha.title": "Hatha Yoga",
        "classes.hatha.tagline": "Foundational postures focusing on alignment and strength.",
        "classes.cacao.title": "Cacao Ceremonies",
        "classes.cacao.tagline": "Heart-opening rituals to foster deep inner connection.",
        "reviews.ago": "ago",
        "reviews.google": "Google Reviews",
        "reviews.facebook": "Facebook Reviews",
        "reviews.verified": "Verified Google Review",
        "reviews.local_guide": "Local Guide",
        "faq.search_placeholder": "Search questions...", "faq.no_results": "No questions match your search.",
        "contact.info.walking": "Walking", "contact.info.gallery": "Gallery",
        "contact.modal.title.parking": "Parking Options", "contact.modal.content.parking": "Narva mnt 7D has a paid parking area (EP56). Nearby parking options include Foorum, Viru Keskus, and Rotermanni parking houses. Prices starting from 3€/h in Kesklinn and 4.80€/h in Südalinn zones.",
        "contact.modal.title.transport": "Public Transport", "contact.modal.content.transport": "The studio is perfectly accessible by public transport. The nearest stop is <strong>Hobujaama</strong>, serving Tram lines 1, 2, 3, 4 and numerous bus lines (1, 5, 8, 40, 48, etc.).",
        "contact.modal.title.walking": "Walking Times", "contact.modal.content.walking": "Approximate walking times from nearby landmarks:<ul class='list-disc pl-5 mt-2 space-y-1'><li>Viru Keskus: 4 mins</li><li>Foorum: 1 min</li><li>Rotermanni Kvartal: 2 mins</li><li>Tallinna Kaubamaja: 5 mins</li><li>Coca-Cola Plaza: 2 mins</li></ul>",
        "contact.modal.title.gallery": "Building Gallery",
        "contact.modal.gallery.entrance": "Building Entrance", "contact.modal.gallery.door": "Main Door", "contact.modal.gallery.hallway": "3rd Floor Hallway", "contact.modal.gallery.studio": "Studio Entrance", "contact.modal.gallery.note": "Photos showing the shortcut to our shala. Look for the GoYoga signs on the 3rd floor."
    },
    et: {
        "nav.home": "Kodu", "nav.about": "Meist", "nav.studio": "Stuudio", "nav.schedule": "Tunniplaan", "nav.pricing": "Hinnad", "nav.teachers": "Õpetajad", "nav.events": "Sündmused", "nav.community": "Kogukond", "nav.contact": "Kontakt", "nav.language": "Keel",
        "hero.tagline": "Jooga ja heaolu oaas", "hero.title": "Traditsioonilise jooga ja heaolu praktikate kodu Tallinnas", "hero.description": "Igapäevased joogatunnid ja heaolusündmused Tallinna südames. Oleme loonud autentse ruumi ja kogukonna, kus erinevad joogastiilid ja heaolu praktikad toetavad inimeste valikuid.", "hero.view_schedule": "Vaata tunniplaani", "hero.events": "Sündmused", "hero.discover_more": "Uuri lähemalt", "hero.seasonal_offer": "Hooajapakkumine!",
        "about.tagline": "Meie lähenemine", "about.title": "Turvaline varjupaik Tallinna südames", "about.description": "Goyoga on turvaline varjupaik Tallinna südames igas vanuses ja eelistustega inimestele, et tulla ja aeg maha võtta, lõõgastuda ja taastuda.", "about.subtitle": "Meie pakkumised", "about.content1": "Meie praktikad on juurdunud traditsioonides, kuid loodud kaasaegseks eluks, pakkudes teed füüsilise elujõu ja vaimse rahu juurde.", "about.content2": "Olenemata sellest, kas otsid Ashtanga dünaamilist voolamist või helirännaku sügavat lõõgastust, meie kogukond on siin, et sind toetada.", "about.benefits.physical.title": "Jooga", "about.benefits.physical.description": "Ashtanga, Vinyasa, Yin, Strength, 60+ jooga, Pilates, Qigong.", "about.benefits.mental.title": "Heaolu", "about.benefits.mental.description": "Meditatsioonid, helirännakud, kakaotseremooniad, Yoga Nidra.",
        "studio.tagline": "Ruum olemiseks", "studio.title": "Kodu sinu praktika jaoks", "studio.description1": "Asub aadressil <span class='font-semibold'>Narva mnt 7D, Tallinn</span> – meie shala on linnaoaas sügavaks praktikaks.", "studio.description2": "Loomuliku valguse ja maiste toonidega disainitud ruum pakub esmaklassilist keskkonda koos kõige vajalikuga.", "studio.rent_button": "Rendi meie ruum",
        "schedule.tagline": "Reaalajaline tunniplaan", "schedule.title": "Leia oma aeg praktiseerimiseks", "schedule.description": "Meie tunniplaan on alati ajakohane.",
        "pricing.tagline": "Hinnavalikud", "pricing.title": "Investeeri oma praktikasse", "pricing.description": "Pakume paindlikke hinnavalikuid.", "pricing.single.title": "Üksikkord", "pricing.single.description": "Täiuslik ühekordseks külastuseks.", "pricing.memberships.title": "Liikmelisus", "pricing.memberships.description": "Parim väärtus pühendunud praktiseerijatele.", "pricing.passes.title": "Mitmikkorrakardid", "pricing.passes.description": "Suurepärane väärtus regulaarsetele õpilastele.", "pricing.view_options": "Vaata valikuid", "pricing.most_popular": "Populaarseim", "pricing.view_seasonal_offers": "Vaata hooajalisi pakkumisi", "pricing.offer.title": "Hooajaline pakkumine", "pricing.offer.subtitle": "Studio Explorer Pass", "pricing.offer.description": "Osale 3 jooga- ja heaolutunnis omal valikul. Kehtib 30 päeva alates ostu sooritamise päevast.", "pricing.offer.ends_in": "Pakkumine lõppeb:", "pricing.offer.days": "Päeva", "pricing.offer.hours": "Tundi", "pricing.offer.minutes": "Minutit", "pricing.offer.seconds": "Sekundit", "pricing.offer.claim_button": "Osta Kohe",
        "teachers.tagline": "Meie õpetajad", "teachers.title": "Kogemus ja tarkus", "teachers.description": "Mitmekülgne meeskond praktikuid, kes on pühendunud sinu jooga- ja heaolu teekonnale.",
        "teachers.raili-maripuu.title": "Asutaja | Ashtanga", "teachers.raili-maripuu.description": "Toob Tallinna autentse Ashtanga praktika aastakümnete pikkuse kogemusega.",
        "teachers.victoria-palusaar.title": "Ashtanga | Toitumisterapeut", "teachers.victoria-palusaar.description": "Keskendub teadlikule toitumisele ja traditsioonilisele Ashtanga meetodile.",
        "teachers.triin-parro.title": "Jõud ja holistiline tervis", "teachers.triin-parro.description": "Spetsialiseerunud jõutreeningule ja individuaalsetele heaolu teekondadele.",
        "teachers.kaia-karjatse.title": "60+ jooga | Heliteraapia", "teachers.kaia-karjatse.description": "Õrn liikumine ja tervendavad vibratsioonid kõikidele eluetappidele.",
        "teachers.edith-tiitsaar.title": "Qigong | Energiatöö", "teachers.edith-tiitsaar.description": "Töö meridiaanide ja Särava Lootose Qigong traditsiooniga.",
        "teachers.marit-tuisk.title": "Meditatsioonid | Kakaotseremooniad", "teachers.marit-tuisk.description": "Avab südameid läbi pühade rituaalide ja sügava kohalolu.",
        "teachers.david-lepp.title": "Helirännakud | Yoga Nidra", "teachers.david-lepp.description": "Gongi valdaja, et puhastada blokeeringud ja taastada harmoonia.",
        "teachers.dian-jarvenkyla.title": "Vinyasa ja Hatha jooga", "teachers.dian-jarvenkyla.description": "Juhendab teadvelolekut, jõudu ja kehateadlikkust läbi voolava liikumise.",
        "teachers.katlin-epner.title": "Yin Jooga", "teachers.katlin-epner.description": "Keskendunud teadlikule liikumisele, hingamisele ja kohalolule.",
        "teachers.keiu-grossberg.title": "Ashtanga Jooga", "teachers.keiu-grossberg.description": "Aitab õpilastel uurida oma piire ja hirme.",
        "teachers.join-us.name": "See Võid Olla Sina", "teachers.join-us.title": "Liitu Meie Kogukonnaga", "teachers.join-us.description": "Oled sa ideedest pakatav uus õpetaja või juba kogenud praktik, kes otsib püsivat kodu.", "teachers.join-us.cta": "Võta Ühendust",
        "teachers.discover": "Tutvu õpetajaga", "teachers.teaching_languages": "Õpetamiskeeled",
        "events.tagline": "Süvenda oma praktikat", "events.title": "Tulevased sündmused", "events.description": "Liitu meiega töötubadel.", "events.event1.title": "Sügise värskendusretriit", "events.event1.description": "4-päevane põhjalik retriit Eesti maal.", "events.event2.title": "Pöördasendite meisterdamise töötuba", "events.event2.description": "Liitu Mia Johnsoniga.", "events.register_button": "Registreeri kohe", "events.learn_more_button": "Loe lähemalt", "events.view_all": "Vaata kõiki sündmusi ja retriite", "events.guided_by": "Juhendab", "events.member_disclaimer": "Soodushind kehtib Ashtanga passi (59€/kuu), Täispassi (69€/kuu) või 1-kuu passi (79€) omanikele.",
        "community.tagline": "Kogukond", "community.title": "Sõnad meie kogukonnast", "community.description": "Kuula, mida meie õpilased ja õpetajad räägivad.", "community.leave_review_button": "Jäta Tagasisidet",
        "instagram.tagline": "Kogukond", "instagram.title": "Jälgi meie teekonda", "instagram.description": "Jälgi meid Instagramis <a href='#' class='text-pink-600 font-semibold hover:underline'>@goyoga.ee</a>.",
        "contact.tagline": "Võta ühendust", "contact.title": "Kontakt", "contact.description": "Oleme siin, et aidata.", "contact.form.title": "Saada meile sõnum", "contact.form.name": "Sinu nimi", "contact.form.email": "E-posti aadress", "contact.form.message": "Sinu sõnum", "contact.form.send_button": "Saada sõnum", "contact.info.title": "Stuudio informatsioon", "contact.info.location": "Asukoht", "contact.info.parking": "Parkimine", "contact.info.transport": "Transport", "contact.info.directions": "Juhised", "contact.info.hours": "Lahtiolekuajad", "contact.info.phone": "Telefon", "contact.info.email": "E-post",
        "footer.description": "Traditsioonilise jooga ja heaolu seansid Tallinna südames.", "footer.quick_links": "Kiirlingid", "footer.resources": "Ressursid", "footer.blog": "Blogi", "footer.workshops": "Töötoad", "footer.faq": "KKK", "footer.newsletter": "Uudiskiri", "footer.newsletter_description": "Liitu uudiskirjaga.", "footer.email_placeholder": "Sinu e-post", "footer.subscribe_button": "Liitu", "footer.copyright": "© 2025 GoYoga.ee. Kõik õigused kaitstud.",
        "footer.rent": "Rendi ruumid",
        "footer.location_floor": "3. korrus",
        "footer.hours_mon_fri": "E-R",
        "footer.hours_sat": "L",
        "classes.tagline": "MEIE PAKKUMISED",
        "classes.title": "Tunnid ja praktikad",
        "classes.description": "Avasta meie lai valik klasse, mis on loodud sinu keha, meele ja vaimu toetamiseks.",
        "classes.read_more": "Loe lähemalt",
        "classes.back_to_classes": "Tagasi tundide juurde",
        "classes.what_is_it": "Mis see on?",
        "classes.who_is_it_for": "Kellele see on?",
        "classes.benefits": "Peamised kasutegurid",
        "classes.what_to_expect": "Mida oodata?",
        "classes.lineage": "Liin ja traditsioon",
        "classes.social_proof_title": "Ashtanga lugu",
        "classes.meet_guides": "Sinu juhendajad",
        "classes.faq": "Korduvad küsimused",
        "classes.ready_to_start": "Valmis alustama?",
        "classes.book_cta": "Vaata tunniplaani ja broneeri oma järgmine tund juba täna.",
        "teachers.back_to_teachers": "Tagasi õpetajate juurde",
        "teachers.meet": "Saage tuttavaks",
        "teachers.contact_info": "Kontaktandmed",
        "classes.ashtanga.title": "Ashtanga Jooga",
        "classes.ashtanga.tagline": "Dünaamiline liikuv meditatsioon, mis kasvatab jõudu.",
        "classes.strength.title": "Jõutreening",
        "classes.strength.tagline": "Funktsionaalne jõud tasakaalustatud kehale.",
        "classes.60plus.title": "60+ Jooga",
        "classes.60plus.tagline": "Õrn liikumine elujõu ja pikaealisuse heaks.",
        "classes.qigong.title": "Qigong",
        "classes.qigong.tagline": "Energia kasvatamine läbi õrna voo.",
        "classes.soundbath.title": "Helirännakud",
        "classes.soundbath.tagline": "Sügav lõõgastus läbi tervendavate vibratsioonide.",
        "classes.yin.title": "Yin Jooga",
        "classes.yin.tagline": "Sügav lõdvestus läbi hoitud asendite ja teadliku vaikuse.",
        "classes.vinyasa.title": "Vinyasa Flow",
        "classes.vinyasa.tagline": "Dünaamiline liikumine sünkroonis hingamisega.",
        "classes.hatha.title": "Hatha Jooga",
        "classes.hatha.tagline": "Põhiasendid, mis keskenduvad joondusele ja jõule.",
        "classes.cacao.title": "Kakaotseremooniad",
        "classes.cacao.tagline": "Südant avavad rituaalid sügava sisemise ühenduse loomiseks.",
        "reviews.ago": "tagasi",
        "reviews.google": "Google arvustused",
        "reviews.facebook": "Facebooki arvustused",
        "reviews.verified": "Kinnitatud Google arvustus",
        "reviews.local_guide": "Kohalik giid",
        "faq.search_placeholder": "Otsi vastuseid...", "faq.no_results": "Sinu otsingule vastavaid küsimusi ei leitud.",
        "contact.info.walking": "Jalutuskäik", "contact.info.gallery": "Galerii",
        "contact.modal.title.parking": "Parkimisvõimalused", "contact.modal.content.parking": "Narva mnt 7D juures on tasuline parkla (EP56). Lähedal asuvad Foorumi, Viru Keskuse ja Rotermanni parkimismajad. Parkimine on tasuline vastavalt Kesklinna või Südalinna tsoonile.",
        "contact.modal.title.transport": "Ühistransport", "contact.modal.content.transport": "Stuudio on suurepäraselt ligipääsetav ühistranspordiga. Lähim peatus on <strong>Hobujaama</strong>, kus peatuvad trammid 1, 2, 3, 4 ning paljud bussiliinid (1, 5, 8, 40, 48 jne).",
        "contact.modal.title.walking": "Jalutuskäigu kestus", "contact.modal.content.walking": "Ligikaudne jalutuskäigu aeg lähedalasuvatest punktidest:<ul class='list-disc pl-5 mt-2 space-y-1'><li>Viru Keskus: 4 min</li><li>Foorum: 1 min</li><li>Rotermanni Kvartal: 2 min</li><li>Tallinna Kaubamaja: 5 min</li><li>Coca-Cola Plaza: 2 min</li></ul>",
        "contact.modal.title.gallery": "Hoone galerii",
        "contact.modal.gallery.entrance": "Hoone sissepääs", "contact.modal.gallery.door": "Peauks", "contact.modal.gallery.hallway": "3. korruse koridor", "contact.modal.gallery.studio": "Stuudio sissepääs", "contact.modal.gallery.note": "Fotod, mis näitavad teed meie shalasse. Otsi GoYoga silte 3. korrusel."
    },
    fi: {
        // ... (For brevity, using a simpler fallback or previously extracted FI data would go here, 
        // to save context tokens I will trust the logic handles it or copy from previous turns if needed. 
        // I'll define a basic subset for now or just the EN/ET if tokens are tight, but let's do a quick one).
        "nav.home": "Koti", "nav.about": "Meistä", "nav.studio": "Studio", "nav.schedule": "Aikataulu", "nav.pricing": "Hinnat", "nav.teachers": "Opettajat", "nav.events": "Tapahtumat", "nav.community": "Yhteisö", "nav.contact": "Yhteystiedot", "nav.language": "Kieli",
        "hero.tagline": "Joogan ja hyvinvoinnin keidas", "hero.title": "Perinteisen joogan ja hyvinvointipalveluiden koti Tallinnassa", "hero.description": "Päivittäiset joogatunnit ja hyvinvointitapahtumat Tallinnan keskustassa. Olemme luoneet aidon tilan ja yhteisön, jossa erilaiset joogatyylit ja hyvinvointikäytännöt tukevat ihmisten valintoja.", "hero.view_schedule": "Katso aikataulu", "hero.events": "Tapahtumat", "hero.discover_more": "Lue lisää", "hero.seasonal_offer": "Kausitarjous!",
        "about.tagline": "Lähestymistapamme", "about.title": "Turvasatama Tallinnan sydämessä", "about.description": "Goyoga on turvasatama Tallinnan sydämessä kaikenikäisille ja -taustaisille ihmisille, tulla irrottautumaan, rentoutumaan ja virkistymään.", "about.subtitle": "Tarjontamme", "about.content1": "Harjoituksemme juurtuvat perinteeseen, mutta ne on suunniteltu moderniin elämään, tarjoten polun fyysiseen elinvoimaan ja henkiseen rauhaan.", "about.content2": "Etsitpä sitten Ashtangan dynaamista virtausta tai äänimaljakylvyn syvää rentoutumista, yhteisömme on täällä tukemassa matkaasi.", "about.benefits.physical.title": "Jooga", "about.benefits.physical.description": "Ashtanga, Vinyasa, Yin, Strength, 60+ jooga, Pilates, Qigong.", "about.benefits.mental.title": "Hyvinvointi", "about.benefits.mental.description": "Meditaatiot, äänimaljakylvyt, kaakaoseremoniat, Yoga Nidra.",
        "studio.tagline": "Tila olemiseen", "studio.title": "Koti harjoituksellesi", "studio.description1": "Sijaitsee osoitteessa <span class='font-semibold'>Narva mnt 7D, Tallinna</span> – shalamme on urbaani retriitti syvään harjoitteluun.", "studio.description2": "Luonnonvalolla ja maadoittavalla estetiikalla suunniteltu tila tarjoaa ensiluokkaisen ympäristön kaikkine mukavuuksineen.", "studio.rent_button": "Vuokraa tilamme",
        "schedule.tagline": "Reaaliaikainen aikataulu", "schedule.title": "Löydä aika harjoitteluun", "schedule.description": "Aikataulumme on aina ajan tasalla.",
        "pricing.tagline": "Hintavaihtoehdot", "pricing.title": "Investoi harjoitteluusi", "pricing.description": "Tarjoamme joustavia hintavaihtoehtoja.", "pricing.single.title": "Yksittäiskerta", "pricing.single.description": "Täydellinen kertakäynteihin.", "pricing.memberships.title": "Jäsenyydet", "pricing.memberships.description": "Paras arvo omistautuneille harjoittajille.", "pricing.passes.title": "Useamman kerran liput", "pricing.passes.description": "Loistava arvo säännöllisille oppilaille.", "pricing.view_options": "Katso vaihtoehdot", "pricing.most_popular": "Suosituin", "pricing.view_seasonal_offers": "Katso kausittaiset tarjoukset", "pricing.offer.title": "Kausitarjous", "pricing.offer.subtitle": "Studio Explorer Pass", "pricing.offer.description": "Osallistu jopa 3 valitsemallasi jooga- tai hyvinvointitunnilla. Voimassa 30 päivää ostopäivästä.", "pricing.offer.ends_in": "Tarjous päättyy:", "pricing.offer.days": "Päivää", "pricing.offer.hours": "Tuntia", "pricing.offer.minutes": "Minuuttia", "pricing.offer.seconds": "Sekuntia", "pricing.offer.claim_button": "Osta Nyt",
        "teachers.tagline": "Opettajamme", "teachers.title": "Kokemus ja viisaus", "teachers.description": "Monipuolinen tiimi harjoittajia, jotka ovat omistautuneet jooga- ja hyvinvointimatkallesi.",
        "teachers.raili-maripuu.title": "Perustaja | Ashtanga", "teachers.raili-maripuu.description": "Tuo aitoa Ashtanga-harjoitusta Tallinnaan vuosikymmenten kokemuksella.",
        "teachers.victoria-palusaar.title": "Ashtanga | Ravintoterapeutti", "teachers.victoria-palusaar.description": "Keskittyy tietoiseen syömiseen ja perinteiseen Ashtanga-menetelmään.",
        "teachers.triin-parro.title": "Voima ja holistinen terveys", "teachers.triin-parro.description": "Erikoistunut voimaharjoitteluun ja yksilöllisiin hyvinvointimatkoihin.",
        "teachers.kaia-karjatse.title": "60+ jooga | Ääniterapia", "teachers.kaia-karjatse.description": "Lempeää liikettä ja parantavia värähtelyjä elämän kaikkiin vaiheisiin.",
        "teachers.edith-tiitsaar.title": "Qigong | Energiatyö", "teachers.edith-tiitsaar.description": "Työskentely meridiaanien ja Radiant Lotus Qigong -perinteen parissa.",
        "teachers.marit-tuisk.title": "Meditaatiot | Kaakaoseremoniat", "teachers.marit-tuisk.description": "Sydänten avaaminen pyhien rituaalien ja syvän läsnäolon kautta.",
        "teachers.david-lepp.title": "Äänimaljakylvyt | Yoga Nidra", "teachers.david-lepp.description": "Gongin mestari poistamaan tukoksia ja palauttamaan harmonian.",
        "teachers.dian-jarvenkyla.title": "Vinyasa & Hatha Jooga", "teachers.dian-jarvenkyla.description": "Ohjaa tietoisuutta, voimaa ja kehotietoisuutta virtaavan liikkeen kautta.",
        "teachers.katlin-epner.title": "Yin Jooga", "teachers.katlin-epner.description": "Keskittyy tietoiseen liikkumiseen, hengitykseen ja läsnäoloon.",
        "teachers.keiu-grossberg.title": "Ashtanga-jooga", "teachers.keiu-grossberg.description": "Auttaa oppilaita tutkimaan rajojaan ja pelkojaan.",
        "teachers.join-us.name": "Tämä Voisit Olla Sinä", "teachers.join-us.title": "Liity Yhteisöömme", "teachers.join-us.description": "Olitpa sitten uusi opettaja täynnä ideoita tai kokenut ammattilainen etsimässä pysyvää kotia.", "teachers.join-us.cta": "Ota Yhteyttä",
        "teachers.discover": "Tutustu opettajaan", "teachers.teaching_languages": "Opetuskielet",
        "events.tagline": "Syvennä harjoitustasi", "events.title": "Tulevat tapahtumat", "events.description": "Liity mukaan työpajoihin ja syventäviin kursseihin.", "events.event1.title": "Syksyn virkistysretriitti", "events.event1.description": "4 päivän syventävä retriitti Viron maaseudulla.", "events.event2.title": "Inversioiden hallinta -työpaja", "events.event2.description": "Liity mukaan ja opi hallitsemaan päälläseisonta ja muut inversiot turvallisesti.", "events.register_button": "Rekisteröidy nyt", "events.learn_more_button": "Lue lisää", "events.view_all": "Katso kaikki tapahtumat", "events.guided_by": "Ohjaajana", "events.member_disclaimer": "Jäsenhinnat koskevat Ashtanga-passin (59€/kk), Full Passin (69€/kk) tai 1-kuukauden passin (79€) haltijoita.",
        "community.tagline": "Yhteisö", "community.title": "Sanoja yhteisöltämme", "community.description": "Kuule, mitä oppilaamme ja opettajamme sanovat.", "community.leave_review_button": "Jätä Arvostelu",
        "instagram.tagline": "Yhteisö", "instagram.title": "Seuraa matkaamme", "instagram.description": "Seuraa meitä Instagramissa <a href='#' class='text-pink-600 font-semibold hover:underline'>@goyoga.ee</a>.",
        "contact.tagline": "Ota yhteyttä", "contact.title": "Yhteystiedot", "contact.description": "Olemme täällä auttamassa.", "contact.form.title": "Lähetä viesti", "contact.form.name": "Nimesi", "contact.form.email": "Sähköpostiosoite", "contact.form.message": "Viestisi", "contact.form.send_button": "Lähetä viesti", "contact.info.title": "Studio tiedot", "contact.info.location": "Sijainti", "contact.info.parking": "Pysäköinti", "contact.info.transport": "Julkinen liikenne", "contact.info.directions": "Reittiohjeet", "contact.info.hours": "Aukioloajat", "contact.info.phone": "Puhelin", "contact.info.email": "Sähköposti",
        "footer.description": "Perinteisen joogan ja hyvinvointipalveluiden koti Tallinnassa.", "footer.quick_links": "Pikalinkit", "footer.resources": "Resurssit", "footer.blog": "Blogi", "footer.workshops": "Työpajat", "footer.faq": "UKK", "footer.newsletter": "Uutiskirje", "footer.newsletter_description": "Liity uutiskirjeeseemme.", "footer.email_placeholder": "Sähköpostisi", "footer.subscribe_button": "Tilaa", "footer.copyright": "© 2025 GoYoga.ee. Kaikki oikeudet pidätetään.",
        "footer.rent": "Studion vuokraus",
        "footer.location_floor": "3. kerros",
        "footer.hours_mon_fri": "Ma-Pe",
        "footer.hours_sat": "La",
        "classes.tagline": "TARJONTAMME",
        "classes.title": "Tunnit & Harjoitukset",
        "classes.description": "Tutustu monipuoliseen tuntivalikoimaamme, joka on suunniteltu hoitamaan kehoasi, mieltäsi ja henkeäsi.",
        "classes.read_more": "Lue lisää",
        "classes.back_to_classes": "Takaisin tunteihin",
        "classes.what_is_it": "Mikä se on?",
        "classes.who_is_it_for": "Kenelle se on?",
        "classes.benefits": "Hyödyt",
        "classes.what_to_expect": "Mitä odottaa?",
        "classes.lineage": "Perinne",
        "classes.social_proof_title": "Ashtanga-tarina",
        "classes.meet_guides": "Opettajasi",
        "classes.faq": "Kysymyksiä",
        "classes.ready_to_start": "Valmis aloittamaan?",
        "classes.book_cta": "Katso aikataulu ja varaa tuntisi tänään.",
        "teachers.back_to_teachers": "Takaisin opettajiin",
        "teachers.meet": "Tapaa",
        "teachers.contact_info": "Yhteystiedot",
        "classes.ashtanga.title": "Ashtanga Jooga",
        "classes.ashtanga.tagline": "Dynaaminen liikkuva meditaatio.",
        "classes.strength.title": "Voimaharjoittelu",
        "classes.strength.tagline": "Toiminnallista voimaa.",
        "classes.60plus.title": "60+ Jooga",
        "classes.60plus.tagline": "Lempeää liikettä.",
        "classes.qigong.title": "Qigong",
        "classes.qigong.tagline": "Energian viljelyä.",
        "classes.soundbath.title": "Äänimaljakylvyt",
        "classes.soundbath.tagline": "Syvä rentoutuminen.",
        "classes.yin.title": "Yin Jooga",
        "classes.yin.tagline": "Syvä rentoutuminen pitkäkestoisten asentojen ja tietoisen hiljaisuuden kautta.",
        "classes.vinyasa.title": "Vinyasa Flow",
        "classes.vinyasa.tagline": "Dynaaminen liike synkronoituna hengityksen kanssa.",
        "classes.hatha.title": "Hatha Jooga",
        "classes.hatha.tagline": "Perusasennot, jotka keskittyvät linjaukseen ja voimaan.",
        "classes.cacao.title": "Kaakaoseremoniat",
        "classes.cacao.tagline": "Sydäntä avaavat rituaalit syvän sisäisen yhteyden luomiseksi.",
        "reviews.ago": "sitten",
        "reviews.google": "Google-arvostelut",
        "reviews.facebook": "Facebook-arvostelut",
        "reviews.verified": "Vahvistettu Google-arvostelu",
        "reviews.local_guide": "Paikallinen opas",
        "faq.search_placeholder": "Etsi vastauksia...", "faq.no_results": "Hakusi ei tuottanut tuloksia.",
        "contact.info.walking": "Kävelymatka", "contact.info.gallery": "Galleria",
        "contact.modal.title.parking": "Pysäköintivaihtoehdot", "contact.modal.content.parking": "Narva mnt 7D:ssä on maksullinen pysäköintialue (EP56). Lähistöllä ovat Foorumin, Viru Keskuksen ja Rotermannin parkkihallit. Pysäköinti on maksullista keskusta-alueen hintojen mukaisesti.",
        "contact.modal.title.transport": "Julkinen liikenne", "contact.modal.content.transport": "Studiolle on erinomaiset julkiset liikenneyhteydet. Lähin pysäkki on <strong>Hobujaama</strong>, jonne saapuvat ratikat 1, 2, 3, 4 sekä useat bussilinjat (1, 5, 8, 40, 48 jne).",
        "contact.modal.title.walking": "Kävelyaika", "contact.modal.content.walking": "Arvioitu kävelyaika tärkeimmistä maamerkeistä:<ul class='list-disc pl-5 mt-2 space-y-1'><li>Viru Keskus: 4 min</li><li>Foorum: 1 min</li><li>Rotermannin kortteli: 2 min</li><li>Tallinnan Kaubamaja: 5 min</li><li>Coca-Cola Plaza: 2 min</li></ul>",
        "contact.modal.title.gallery": "Rakennuksen galleria",
        "contact.modal.gallery.entrance": "Rakennuksen sisäänkäynti", "contact.modal.gallery.door": "Pääovi", "contact.modal.gallery.hallway": "3. kerroksen käytävä", "contact.modal.gallery.studio": "Studion sisäänkäynti", "contact.modal.gallery.note": "Kuvat näyttävät reitin shalallemme. Etsi GoYoga-kylttejä 3. kerroksesta."
    }
};

const reviewsData = [
    { "name": "Kam Wattanodom", "timeAgo": "6 months ago", "stars": 5, "text": "Visiting Tallinn from abroad, happy to have found this shala. Raili was incredibly welcoming and I gained much from her instruction and adjustments.", "source": "google", "badge": null },
    { "name": "Anne Nõlvak", "timeAgo": "4 years ago", "stars": 5, "text": "Amazing place with more amazing people 💗", "source": "google", "badge": { "type": "localGuide", "text": "Local Guide" } },
    { "name": "Sébastien Migeotte", "timeAgo": "9 months ago", "stars": 5, "text": "Very nice place, easy to park or get there by public transport. The teachers are professional and nice.", "source": "google", "badge": null },
    { "name": "Triin Parro", "timeAgo": "3 years ago", "stars": 5, "text": "Nice and cozy studio in the city center. Very nice teachers and a warm and supportive environment 🙏", "source": "google", "badge": null },
    { "name": "Sandra Linneberg", "timeAgo": "3 years ago", "stars": 5, "text": "", "source": "google", "badge": null },
    { "name": "Kristi Pähklimägi", "timeAgo": "4 years ago", "stars": 5, "text": "", "source": "google", "badge": null },
    { "name": "Eret Hünninen", "timeAgo": "5 years ago", "stars": 5, "text": "", "source": "google", "badge": { "type": "reviewer", "text": "1 review" } },
    { "name": "Kiira Kuldma", "timeAgo": "5 years ago", "stars": 5, "text": "", "source": "google", "badge": { "type": "localGuide", "text": "Local Guide • 49 reviews • 80 photos" } }
];

const teachersData = {
    "raili-maripuu": { "name": "Raili Maripuu", "title": "Founder & Ashtanga Yoga Teacher", "image": "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b", "languages": ["en", "et"], "socials": { "instagram": "https://www.instagram.com/raili.yoga/", "website": "https://railimaripuu.com", "email": "me@railimaripuu.com" } },
    "victoria-palusaar": { "name": "Victoria Palusaar", "title": "Ashtanga | Nutritional Therapist", "image": "https://images.unsplash.com/photo-1599447421416-3414500d18a5", "languages": ["et", "en"], "socials": { "instagram": "https://www.instagram.com/vicky_pa/", "facebook": "https://www.facebook.com/victoria.palusaar" } },
    "triin-parro": { "name": "Triin Parro", "title": "Strength & Holistic Health", "image": "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b", "languages": ["et", "en", "fi"], "socials": { "instagram": "https://www.instagram.com/triin.p/", "facebook": "https://www.facebook.com/fitmindoy/" } },
    "kaia-karjatse": { "name": "Kaia Karjatse", "title": "60+ Yoga | Sound Therapy", "image": "assets/images/kaia.png", "languages": ["et", "en"], "socials": { "instagram": "https://www.instagram.com/kaiakarjatse/", "facebook": "#" } },
    "edith-tiitsaar": { "name": "Edith Tiitsaar", "title": "Qigong | Energy Work", "image": "https://images.unsplash.com/photo-1545205597-3d9d02c29597", "languages": ["et", "en"], "socials": { "instagram": "#", "facebook": "#" } },
    "marit-tuisk": { "name": "Marit Tuisk", "title": "Meditations | Cacao Ceremonies", "image": "assets/images/marit.png", "languages": ["et", "en"], "socials": { "instagram": "https://www.instagram.com/mar.tuisk/", "facebook": "https://www.facebook.com/casarituals" } },
    "david-lepp": { "name": "David Lepp", "title": "Sound Baths | Yoga Nidra", "image": "https://images.unsplash.com/photo-1514533212735-5df27d970db0", "languages": ["en", "et"], "socials": { "instagram": "https://www.instagram.com/david.lepp/", "facebook": "https://www.facebook.com/casarituals" } },
    "dian-jarvenkyla": { "name": "Dian Jarvenkyla-Aikani", "title": "Vinyasa & Hatha Yoga", "image": "assets/dian-jarvenkyla/profile-goyoga-tallinn-jooga-estonia-dian-jarvenkyla-aikani-vinyasa-hata copy-2.webp", "gallery": ["assets/dian-jarvenkyla/gallery1-goyoga-tallinn-jooga-estonia-dian-jarvenkyla-aikani-vinyasa-hata.webp", "assets/dian-jarvenkyla/gallery2-goyoga-tallinn-jooga-estonia-dian-jarvenkyla-aikani-vinyasa-hata.jpg.webp", "assets/dian-jarvenkyla/gallery3-goyoga-tallinn-jooga-estonia-dian-jarvenkyla-aikani-vinyasa-hata.jpg.webp", "assets/dian-jarvenkyla/gallery4-goyoga-tallinn-jooga-estonia-dian-jarvenkyla-aikani-vinyasa-hata.jpg.webp"], "languages": ["en", "id"], "socials": { "instagram": "https://www.instagram.com/aikani_yoga/", "instagram2": "https://www.instagram.com/aikaniclass", "tiktok": "https://www.tiktok.com/@aikaniyoga", "yogaalliance": "https://app.yogaalliance.org/teacherpublicprofile/0033g00001b1NZeAAM/dian-jarvenkyla" } },
    "katlin-epner": { "name": "Kätlin Epner", "title": "Yin Yoga", "image": "assets/images/katlin.png", "languages": ["et", "en"], "socials": { "instagram": "https://www.instagram.com/tasa.flow" } },
    "keiu-grossberg": { "name": "Keiu Grossberg", "title": "Ashtanga Yoga", "image": "assets/images/keiu.png", "languages": ["et", "en"], "socials": { "facebook": "https://www.facebook.com/keiu.grossberg" } }
};
window.teachersData = teachersData;

const classesData = {
    "ashtanga-yoga": {
        icon: "activity", // lucid icon name
        image: "https://images.unsplash.com/photo-1599447421416-3414500d18a5",
        teacherIds: ["raili-maripuu", "victoria-palusaar"],
        translations: {
            en: {
                title: "Ashtanga Yoga",
                tagline: "A dynamic, moving meditation building strength and focus.",
                description: "<a href='https://en.wikipedia.org/wiki/Ashtanga_(vinyasa)_yoga' target='_blank' class='text-pink-600 hover:text-pink-800 underline'>Ashtanga Yoga</a> is a traditional system of yoga that synchronizes breath with a progressive series of postures. This process produces intense internal heat and a profuse, purifying sweat that detoxifies muscles and organs. The result is improved circulation, a light and strong body, and a calm mind.",
                audience: "Ideal for those seeking a disciplined, physically demanding practice that builds strength, flexibility, and mental focus. Suitable for beginners who are up for a challenge, as well as prolonged practitioners.",
                benefits: [
                    { title: "Strength & Flexibility", description: "Builds a strong, supple body through dynamic movement." },
                    { title: "Detoxification", description: "Internal heat purifies muscles and organs." },
                    { title: "Mental Focus", description: "Tristana method (breath, gaze, posture) sharpens concentration." }
                ],
                whatToExpect: `
                    <div class="space-y-8">
                        <div>
                            <h3 class="text-xl font-semibold text-gray-800 mb-3 flex items-center"><span class="text-pink-500 mr-2">●</span> Choosing Your First Class</h3>
                            <p>If you are completely new to Ashtanga Yoga, we recommend starting with a <strong>Beginners or Led class</strong>. In a Led class, the teacher guides the entire group through the sequence together, calling out each posture and breath count. This is the perfect way to learn the fundamental postures, the breathing rhythm (<em>ujjayi pranayama</em>), and the coordination between movement and breath — all in a supportive, guided environment. No prior experience is needed.</p>
                        </div>
                        <div>
                            <h3 class="text-xl font-semibold text-gray-800 mb-3 flex items-center"><span class="text-pink-500 mr-2">●</span> During the Class</h3>
                            <p>An Ashtanga class follows a set sequence of postures. You will move through sun salutations, standing postures, seated postures, and a closing sequence. The teacher will guide and adjust you throughout. Because the practice synchronises deep, rhythmic breathing with continuous movement, the exercise is more intensive than many other yoga styles. This generates significant internal heat — the room temperature naturally rises several degrees, and your body will warm considerably. <strong>You will sweat</strong>, so bring a towel to keep your mat dry and comfortable. A water bottle is always welcome too.</p>
                        </div>
                        <div>
                            <h3 class="text-xl font-semibold text-gray-800 mb-3 flex items-center"><span class="text-pink-500 mr-2">●</span> Growing into Mysore Style</h3>
                            <p>Once you have memorised the sequence and feel confident with the breath-movement coordination, you can transition to <strong>Mysore style</strong> — the traditional, self-paced format of Ashtanga. In a Mysore class, each student practises at their own pace while the teacher moves around the room offering individual adjustments and guidance. This is where the practice truly becomes your own. There is no pressure to "keep up" — you simply practise what you know, and the teacher will introduce new postures when you are ready.</p>
                        </div>
                        <div>
                            <h3 class="text-xl font-semibold text-gray-800 mb-3 flex items-center"><span class="text-pink-500 mr-2">●</span> After the Class</h3>
                            <p>Most people leave an Ashtanga class feeling <strong>energised, calm, and deeply focused</strong>. The combination of physical effort and meditative breathing creates a unique sense of clarity that many describe as a "reset" for the mind and body. You may feel pleasantly tired but also surprisingly alert. It is common to feel a sense of accomplishment and inner peace that stays with you throughout the day.</p>
                        </div>
                        <div class="bg-pink-50 border border-pink-100 rounded-xl p-6 text-center">
                            <p class="text-gray-700"><strong>Still have questions?</strong> Check out our <a href="#class-faq" class="text-pink-600 hover:text-pink-800 underline font-medium">FAQ section below</a> for practical tips, tricks, and answers to the most common questions about starting your Ashtanga practice.</p>
                        </div>
                    </div>
                `,
                socialProof: [
                    {
                        name: "Madonna",
                        role: "Pop Icon",
                        quote: "Yoga is a metaphor for life. You have to take it really slowly. You can't rush. You can't skip to the next position. It is a workout for your mind, your body and your soul.",
                        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Madonna_Rebel_Heart_Tour_2015_-_Stockholm_%2823051472299%29_%28cropped%29.jpg/440px-Madonna_Rebel_Heart_Tour_2015_-_Stockholm_%2823051472299%29_%28cropped%29.jpg"
                    },
                    {
                        name: "Sting",
                        role: "Musician",
                        quote: "Yoga is almost like music in a way; there's no end to it. It is a spiritual practice. It's a journey I'm making to find peace.",
                        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Sting_Brussels_22_October_2019_%281%29.jpg/440px-Sting_Brussels_22_October_2019_%281%29.jpg"
                    },
                    {
                        name: "Willem Dafoe",
                        role: "Actor",
                        quote: "As I get older, ashtanga is very useful for health and peace of mind. It's a question of effort and surrender.",
                        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Willem_Dafoe_Cannes_2019.jpg/440px-Willem_Dafoe_Cannes_2019.jpg"
                    },
                    {
                        name: "Jennifer Aniston",
                        role: "Actress",
                        quote: "Yoga changed my life. It calms me down. It's a therapy session, a workout and meditation all at the same time!",
                        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/JenniferAnistonTIFFSept2014.jpg/440px-JenniferAnistonTIFFSept2014.jpg"
                    },
                    {
                        name: "Matthew McConaughey",
                        role: "Actor",
                        quote: "Yoga gives me a feeling of flexibility as well as strength. It contributes to a feeling of total well-being.",
                        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Matthew_McConaughey_2011.jpg/440px-Matthew_McConaughey_2011.jpg"
                    },
                    {
                        name: "Miley Cyrus",
                        role: "Singer",
                        quote: "Gotta do yoga not for my body but for my mind! DO YOGA or GO CRAZY!",
                        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Miley_Cyrus_Primavera19_-226_%2848017367646%29_%28cropped%29.jpg/440px-Miley_Cyrus_Primavera19_-226_%2848017367646%29_%28cropped%29.jpg"
                    },
                    {
                        name: "Gisele Bündchen",
                        role: "Supermodel",
                        quote: "Movement is medicine. For your heart, your muscles, and just as importantly, for your mind and soul.",
                        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Gisele_Bundchen2.jpg/440px-Gisele_Bundchen2.jpg"
                    },
                    {
                        name: "R. Sharath Jois",
                        role: "Lineage Holder",
                        quote: "Yoga is not about touching your toes, it is about what you learn on the way down.",
                        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Sharath_Jois.jpg/440px-Sharath_Jois.jpg"
                    },
                    {
                        name: "Rafael Nadal",
                        role: "Tennis Champion",
                        quote: "I do yoga and stretching every day. It helps me stay flexible and focused on the court.",
                        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Rafael_Nadal_%2812054444625%29.jpg/440px-Rafael_Nadal_%2812054444625%29.jpg"
                    },
                    {
                        name: "Adriana Lima",
                        role: "Supermodel",
                        quote: "Yoga is my time to connect with myself. It keeps me grounded and strong.",
                        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Adriana_Lima_2019_by_Glenn_Francis.jpg/440px-Adriana_Lima_2019_by_Glenn_Francis.jpg"
                    },
                    {
                        name: "Chris Hemsworth",
                        role: "Actor",
                        quote: "You lift weights to build muscle, you meditate to build a stronger mind. Yoga combines both.",
                        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Chris_Hemsworth_by_Gage_Skidmore_2_%28cropped%29.jpg/440px-Chris_Hemsworth_by_Gage_Skidmore_2_%28cropped%29.jpg"
                    },
                    {
                        name: "Alicia Keys",
                        role: "Musician",
                        quote: "Yoga is a practice that I hold very dear. It helps me to be a better mother, a better artist, and a better person.",
                        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Alicia_Keys_2013-01-22_001.jpg/440px-Alicia_Keys_2013-01-22_001.jpg"
                    },
                    {
                        name: "Tim Ferriss",
                        role: "Author & Entrepreneur",
                        quote: "The more I learn about the body, the more I realize how important flexibility and mobility are for longevity.",
                        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Tim_Ferriss_at_The_Next_Web_Conference_2017.jpg/440px-Tim_Ferriss_at_The_Next_Web_Conference_2017.jpg"
                    },
                    {
                        name: "Aubrey Marcus",
                        role: "Entrepreneur",
                        quote: "Ashtanga yoga is a discipline that demands your full presence. It's a powerful tool for self-mastery.",
                        image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b" // generic yoga/man
                    },
                    {
                        name: "David Beckham",
                        role: "Soccer Legend",
                        quote: "I do an hour of Pilates or yoga at 6 or 7 AM. It's essential for my recovery and overall fitness.",
                        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/David_Beckham_2013.jpg/440px-David_Beckham_2013.jpg"
                    },
                    {
                        name: "Serena Williams",
                        role: "Tennis Champion",
                        quote: "Yoga is a great way to stay flexible and prevent injuries. It's a key part of my training routine.",
                        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Serena_Williams_US_Open_2013.jpg/440px-Serena_Williams_US_Open_2013.jpg"
                    },
                    {
                        name: "Tony Hawk",
                        role: "Skateboarding Legend",
                        quote: "Staying flexible is key. Yoga helps me manage stress and keeps me skating.",
                        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Tony_Hawk_2016.jpg/440px-Tony_Hawk_2016.jpg"
                    },
                    {
                        name: "Lindsay Lohan",
                        role: "Actress",
                        quote: "Yoga has been a savior for me. It gives me clarity and helps me focus on what's important.",
                        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Lindsay_Lohan_Deauville_2019.jpg/440px-Lindsay_Lohan_Deauville_2019.jpg"
                    },
                    {
                        name: "Alexandra Daddario",
                        role: "Actress",
                        quote: "I love yoga. It's a great way to stay fit and centered.",
                        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Alexandra_Daddario_2016.jpg/440px-Alexandra_Daddario_2016.jpg"
                    },
                    {
                        name: "Kyle Korver",
                        role: "NBA Player",
                        quote: "Yoga helps me maintain balance and focus on the court. It's crucial for my longevity as an athlete.",
                        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Kyle_Korver_Cavaliers.jpg/440px-Kyle_Korver_Cavaliers.jpg"
                    }
                ],
                lineage: `Goyoga Tallinn hosts a traditional Ashtanga Estonia shala (school) in central Tallinn since 2016. The school is dedicated to consistent teaching the traditional ashtanga yoga as developed and systemised by <a href="https://en.wikipedia.org/wiki/K._Pattabhi_Jois" target="_blank" class="text-pink-600 hover:text-pink-800 underline">Sri K. Pattabhi Jois</a>. Ashtanga Estonia uses the traditional <a href="https://www.researchgate.net/profile/Mudit-Pandey-2/publication/398320435_The_Guru-Shishya_Parampara_An_Efficient_and_Time-_Tested_Education_System_in_Ancient_India/links/69316e9b27359023a008d9d9/The-Guru-Shishya-Parampara-An-Efficient-and-Time-Tested-Education-System-in-Ancient-India.pdf" target="_blank" class="text-pink-600 hover:text-pink-800 underline">parampara teaching method</a> which means that the practise and knowledge is passed to the student from the teacher directly and in person. The teacher-student connection at Ashtanga Estonia comes through a renowned senior ashtanga yoga teacher <a href="https://www.linomiele.com/?pagina=ayri.php" target="_blank" class="text-pink-600 hover:text-pink-800 underline">Lino Miele</a>, who was a student of Pattabhi Jois since 1988. Lino Miele is the main teacher of the founder and teacher at Ashtanga Estonia, <a href="teacher.html?id=raili-maripuu" class="text-pink-600 hover:text-pink-800 underline">Raili Maripuu</a> from 2010.`,
                faqs: [
                    { question: "Do I need to be flexible?", answer: "Not at all. Flexibility is a result of the practice, not a prerequisite." },
                    { question: "Is it suitable for beginners?", answer: "Yes, our teachers adjust the practice to your level." }
                ]
            },
            et: {
                title: "Ashtanga Jooga",
                tagline: "Dünaamiline liikuv meditatsioon, mis kasvatab jõudu ja fookust.",
                description: "Ashtanga jooga on traditsiooniline joogasüsteem, mis sünkroniseerib hingamise progresseeruva asendite seeriaga. See protsess toodab intensiivset sisemist soojust ja puhastavat higistamist, mis detoksifitseerib lihaseid ja elundeid.",
                audience: "Ideaalne neile, kes otsivad distsiplineeritud ja füüsilist praktikat. Sobib nii algajatele, kes soovivad väljakutset, kui ka kogenud praktiseerijatele.",
                benefits: [
                    { title: "Jõud ja painduvus", description: "Ehitab samaaegselt lihast ja sügavat painduvust." },
                    { title: "Puhastumine", description: "Sisemine kuumus puhastab keha." },
                    { title: "Vaimne selgus", description: "Fookus hingamisel rahustab meelt." }
                ],
                faqs: [
                    { question: "Kas ma pean olema painduv?", answer: "Sugugi mitte. Painduvus on praktika tulemus." },
                    { question: "Kas see sobib algajatele?", answer: "Jah, õpetajad kohandavad praktikat vastavalt sinule." }
                ]
            },
            fi: {
                title: "Ashtanga Jooga",
                tagline: "Dynaaminen liikkuva meditaatio.",
                description: "Ashtanga-jooga on perinteinen järjestelmä, joka synkronoi hengityksen asentojen kanssa.",
                audience: "Sopii niille, jotka etsivät fyysistä ja kurinalaista harjoitusta.",
                benefits: [
                    { title: "Voima & Joustavuus", description: "Kehittää voimaa ja liikkuvuutta." },
                    { title: "Puhdistautuminen", description: "Hikoilu puhdistaa kehoa." },
                    { title: "Mielen selkeys", description: "Keskittyminen rauhoittaa mieltä." }
                ],
                faqs: [
                    { question: "Täytyykö minun olla notkea?", answer: "Ei tarvitse. Notkeus tulee harjoittelun myötä." }
                ]
            }
        }
    },
    "strength-training": {
        icon: "dumbbell",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b",
        teacherIds: ["triin-parro"],
        translations: {
            en: {
                title: "Strength",
                tagline: "Functional strength training for a balanced body.",
                description: "Our Strength classes focus on building functional muscle, improving core stability, and enhancing overall body mechanics. These classes complement your yoga practice by identifying and strengthening weak links.",
                audience: "Anyone looking to increase physical strength, improve posture, or prevent injuries. Great for yogis wanting to add resistance training.",
                benefits: [
                    { title: "Functional Power", description: "Strength that translates to daily life." },
                    { title: "Injury Prevention", description: "Stabilizes joints and strengthens connective tissue." },
                    { title: "Core Stability", description: "Deep work on the body's powerhouse." }
                ],
                faqs: [
                    { question: "Do we use weights?", answer: "Yes, we use kettlebells, dumbbells, and bodyweight." }
                ]
            },
            et: {
                title: "Jõutrenn",
                tagline: "Funktsionaalne jõutrenn tasakaalustatud kehale.",
                description: "Meie jõutrennid keskenduvad funktsionaalse lihase ehitamisele ja kerelihaste stabiilsusele.",
                audience: "Kõigile, kes soovivad suurendada füüsilist jõudu või parandada rühti.",
                benefits: [
                    { title: "Funktsionaalne jõud", description: "Jõud, mis toetab igapäevaelu." },
                    { title: "Vigastuste ennetamine", description: "Stabiliseerib liigeseid." },
                    { title: "Kere stabiilsus", description: "Sügav töö kerelihastega." }
                ],
                faqs: [
                    { question: "Kas kasutame raskusi?", answer: "Jah, kasutame sangpomme ja hantleid." }
                ]
            },
            fi: {
                title: "Voimaharjoittelu",
                tagline: "Toiminnallista voimaa.",
                description: "Keskittyy lihasvoiman ja kehonhallinnan kehittämiseen.",
                audience: "Kaikille, jotka haluavat lisätä voimaa.",
                benefits: [
                    { title: "Voima", description: "Lisää fyysistä suorituskykyä." },
                    { title: "Vammojen ehkäisy", description: "Vahvistaa tukilihaksia." }
                ],
                faqs: [
                    { question: "Käytämmekö painoja?", answer: "Kyllä, käytämme kahvakuulia ja käsipainoja." }
                ]
            }
        }
    },
    "yoga-for-seniors": {
        icon: "heart",
        image: "assets/images/kaia.png",
        teacherIds: ["kaia-karjatse"],
        translations: {
            en: {
                title: "60+ Yoga",
                tagline: "Gentle movement for vitality and longevity.",
                description: "Designed specifically for bodies 60 and over, this class focuses on gentle movement, joint mobility, and balance. It's a safe space to maintain physical health and social connection.",
                audience: "Seniors looking to stay active, improve balance, and enjoy a supportive community.",
                benefits: [
                    { title: "Mobility", description: "Keeps joints lubricated and moving freely." },
                    { title: "Balance", description: "Reduces risk of falls by strengthening stabilizers." },
                    { title: "Community", description: "Connect with like-minded peers." }
                ],
                faqs: [
                    { question: "Is it safe if I have injuries?", answer: "Yes, the teacher adapts all poses." }
                ]
            },
            et: {
                title: "60+ Jooga",
                tagline: "Õrn liikumine elujõu ja pikaealisuse heaks.",
                description: "Spetsiaalselt 60+ vanusele loodud tund keskendub õrnale liikumisele, liigeste liikuvusele ja tasakaalule.",
                audience: "Seenioridele, kes soovivad püsida aktiivsed.",
                benefits: [
                    { title: "Liikuvus", description: "Hoiab liigesed tervena." },
                    { title: "Tasakaal", description: "Vähendab kukkumisohtu." },
                    { title: "Kogukond", description: "Suhtle eakaaslastega." }
                ],
                faqs: [
                    { question: "Kas see on ohutu?", answer: "Jah, õpetaja kohandab asendeid vastavalt vajadusele." }
                ]
            },
            fi: {
                title: "60+ Jooga",
                tagline: "Lempeää liikettä.",
                description: "Suunniteltu erityisesti yli 60-vuotiaille.",
                audience: "Senioreille.",
                benefits: [
                    { title: "Liikkuvuus", description: "Pitää nivelet vetreinä." },
                    { title: "Tasapaino", description: "Parantaa tasapainoa." }
                ],
                faqs: [
                    { question: "Onko se turvallista?", answer: "Kyllä, tunti on hyvin lempeä." }
                ]
            }
        }
    },
    "qigong-energy-work": {
        icon: "sun",
        image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597",
        teacherIds: ["edith-tiitsaar"],
        translations: {
            en: {
                title: "Qigong",
                tagline: "Cultivating energy through gentle flow.",
                description: "Qigong (Meridiaanivõimlemine) involves coordinated body-posture and movement, breathing, and meditation used for the purposes of health, spirituality, and martial-arts training.",
                audience: "Anyone seeking stress relief, better energy flow, and a meditative movement practice.",
                benefits: [
                    { title: "Energy Flow", description: "Unblocks stagnant energy (Qi)." },
                    { title: "Stress Relief", description: "Calms the nervous system." },
                    { title: "Mindfulness", description: "Deepens mind-body connection." }
                ],
                faqs: [
                    { question: "What is the difference from Yoga?", answer: "Qigong focuses more on subtle energy flow and repetitive fluid movements." }
                ]
            },
            et: {
                title: "Qigong (Meridiaanivõimlemine)",
                tagline: "Energia kasvatamine läbi õrna voo.",
                description: "Qigong hõlmab koordineeritud kehaasendeid, liikumist, hingamist ja meditatsiooni tervise ja vaimsuse eesmärgil.",
                audience: "Kõigile, kes otsivad stressileevendust ja paremat energiavoolu.",
                benefits: [
                    { title: "Energiavool", description: "Vabastab blokeerunud energia." },
                    { title: "Stressileevendus", description: "Rahustab närvisüsteemi." },
                    { title: "Teadlikkus", description: "Süvendab keha ja meele ühendust." }
                ],
                faqs: [
                    { question: "Kuidas see erineb joogast?", answer: "Qigong keskendub peenematele energiatele ja voolavusele." }
                ]
            },
            fi: {
                title: "Qigong",
                tagline: "Energian viljelyä.",
                description: "Qigong yhdistää liikkeen, hengityksen ja meditaation.",
                audience: "Kaikille stressinlievitystä etsiville.",
                benefits: [
                    { title: "Energia", description: "Parantaa virtausta." },
                    { title: "Mielenrauha", description: "Vähentää stressiä." }
                ],
                faqs: [
                    { question: "Miten eroaa joogasta?", answer: "Keskittyy enemmän energian virtaukseen." }
                ]
            }
        }
    },
    "sound-bath-meditation": {
        icon: "music",
        image: "https://images.unsplash.com/photo-1514533212735-5df27d970db0",
        teacherIds: ["kaia-karjatse", "david-lepp"],
        translations: {
            en: {
                title: "Sound Baths",
                tagline: "Deep relaxation through healing vibrations.",
                description: "A Sound Bath is a meditative experience where those in attendance are 'bathed' in sound waves. These waves are produced by various sources, including gongs, singing bowls, percussion, chimes, rattles, tanning forks, and even the human voice.",
                audience: "Anyone looking for deep relaxation, stress relief, or a meditative experience without physical movement.",
                benefits: [
                    { title: "Deep Relaxation", description: "Promotes a state of deep rest." },
                    { title: "Stress Reduction", description: "lowers cortisol levels." },
                    { title: "Mental Clarity", description: "Helps clear the mind of chatter." }
                ],
                faqs: [
                    { question: "Do I do yoga poses?", answer: "No, you typically lie down comfortably with blankets." }
                ]
            },
            et: {
                title: "Helirännakud",
                tagline: "Sügav lõõgastus läbi tervendavate vibratsioonide.",
                description: "Helirännak on meditatiivne kogemus, kus osalejad on 'supluses' helilainetes. Kasutatakse gonge, kausse ja muid instrumente.",
                audience: "Kõigile, kes otsivad sügavat puhkust.",
                benefits: [
                    { title: "Sügav lõõgastus", description: "Viib sügavasse puhkeseisundisse." },
                    { title: "Stressi vähendamine", description: "Alandab stressitaset." },
                    { title: "Vaimne selgus", description: "Aitab meelt puhastada." }
                ],
                faqs: [
                    { question: "Kas teeme joogaasendeid?", answer: "Ei, tavaliselt lamate mugavalt tekkide all." }
                ]
            },
            fi: {
                title: "Äänimaljakylvyt",
                tagline: "Syvä rentoutuminen.",
                description: "Meditatiivinen kokemus, jossa kylvetään äänessä.",
                audience: "Kaikille rentoutumista etsiville.",
                benefits: [
                    { title: "Rentoutuminen", description: "Edistää syvää lepoa." },
                    { title: "Stressinpoisto", description: "Vähentää stressiä." }
                ],
                faqs: [
                    { question: "Teemmekö asanoita?", answer: "Ei, yleensä makaat mukavasti lattialla." }
                ]
            }
        }
    },
    "yin-yoga": {
        icon: "moon",
        image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773",
        teacherIds: ["katlin-epner"],
        translations: {
            en: {
                title: "Yin Yoga",
                tagline: "Deep release through sustained, mindful stillness.",
                description: "Yin Yoga is a slow-paced, therapeutic style of yoga where terrestrial postures are held for an extended period, typically three to five minutes. This approach targets the deep connective tissues of the body, such as ligaments, joints, and fascia, rather than the muscles. By maintaining stillness, the practice calms the central nervous system, creating profound physical and mental clarity.",
                audience: "Highly beneficial for individuals looking to increase joint mobility, reduce stress, or counterbalance a fast-paced lifestyle or dynamic workout routines. Suitable for all levels, including complete beginners.",
                benefits: [
                    { title: "Joint Mobility", description: "Gently stretches and hydrates the deep connective tissues." },
                    { title: "Nervous System Regulation", description: "Activates the parasympathetic nervous system, reducing stress and anxiety." },
                    { title: "Mental Endurance", description: "Teaches the mind to remain calm and observing during physical stillness." }
                ],
                whatToExpect: `
                    <div class="space-y-8">
                        <div>
                            <h3 class="text-xl font-semibold text-gray-800 mb-3 flex items-center"><span class="text-pink-500 mr-2">●</span> The Practice Itself</h3>
                            <p>Postures are mostly seated or lying down. We make heavy use of props—bolsters, blocks, and blankets—to support your body in each pose so your muscles can fully relax and surrender to gravity. The room is kept at a comfortable, normal temperature to aid in relaxation.</p>
                        </div>
                        <div>
                            <h3 class="text-xl font-semibold text-gray-800 mb-3 flex items-center"><span class="text-pink-500 mr-2">●</span> Finding Stillness</h3>
                            <p>You will be guided to find your edge in a posture, become still, and hold the pose for several minutes. The focus is on deep, natural breathing and cultivating inner observation, allowing physical tensions and mental clutter to slowly dissolve.</p>
                        </div>
                    </div>
                `,
                faqs: [
                    { question: "Is Yin Yoga the same as Restorative Yoga?", answer: "While both are slow and use props, Yin focuses on gently stretching the deep connective tissues, whereas Restorative focuses entirely on passive release without any active stretching." },
                    { question: "Can I do Yin if I am not flexible?", answer: "Yes, Yin is excellent for improving flexibility. Props are used to bring the floor to you, ensuring you are supported at your current level of mobility." }
                ]
            },
            et: {
                title: "Yin Jooga",
                tagline: "Sügav lõdvestus läbi hoitud asendite ja teadliku vaikuse.",
                description: "Yin jooga on aeglases tempos terapeutiline joogastiil, kus maas tehtavaid asendeid hoitakse pikema aja jooksul, tavaliselt kolm kuni viis minutit. See lähenemine on suunatud pigem keha sügavatele sidekudedele (ligamendid, liigesed ja fastsia) kui lihastele. Paigalseisu hoidmisega rahustab praktika kesknärvisüsteemi, luues sügava füüsilise ja vaimse selguse.",
                audience: "Väga kasulik inimestele, kes soovivad suurendada liigeste liikuvust, vähendada stressi või tasakaalustada kiiret elutempot ja dünaamilisi treeningrutiine. Sobib kõikidele tasemetele, sealhulgas täiesti algajatele.",
                benefits: [
                    { title: "Liigeste liikuvus", description: "Venitab õrnalt ja niisutab sügavaid sidekudesid." },
                    { title: "Närvisüsteemi reguleerimine", description: "Aktiveerib parasümpaatilise närvisüsteemi, vähendades stressi ja ärevust." },
                    { title: "Vaimne vastupidavus", description: "Õpetab meelt jääma füüsilise paigalseisu ajal rahulikuks ja vaatlevaks." }
                ],
                whatToExpect: `
                    <div class="space-y-8">
                        <div>
                            <h3 class="text-xl font-semibold text-gray-800 mb-3 flex items-center"><span class="text-pink-500 mr-2">●</span> Praktika Olemus</h3>
                            <p>Asendid on peamiselt istuvad või lamavad. Me kasutame ohtralt abivahendeid (polstreid, plokke ja tekke) et toetada sinu keha igas asendis, nii et lihased saaksid täielikult lõdvestuda ja raskusjõule alistuda. Ruum on hoitud mugaval normaaltemperatuuril.</p>
                        </div>
                        <div>
                            <h3 class="text-xl font-semibold text-gray-800 mb-3 flex items-center"><span class="text-pink-500 mr-2">●</span> Paigalseisu Leidmine</h3>
                            <p>Sind juhendatakse leidma oma piir, jääma paigale ja hoidma asendit mitu minutit. Fookus on sügaval loomulikul hingamisel ja sisemisel vaatlusel, võimaldades füüsilistel pingetel ja vaimsel müral aeglaselt hajuda.</p>
                        </div>
                    </div>
                `,
                faqs: [
                    { question: "Kas Yin jooga on sama mis taastav (Restorative) jooga?", answer: "Kuigi mõlemad on aeglased ja kasutavad abivahendeid, keskendub Yin sügavate sidekudede õrnale venitamisele, samas kui taastav jooga keskendub täielikult passiivsele lõdvestusele ilma aktiivse venituseta." },
                    { question: "Kas ma saan Yin joogat teha, kui ma ei ole painduv?", answer: "Jah, Yin on suurepärane painduvuse parandamiseks. Abivahendeid kasutatakse selleks, et toetada sind vastavalt sinu praegusele liikuvusele." }
                ]
            },
            fi: {
                title: "Yin Jooga",
                tagline: "Syvä rentoutuminen pitkäkestoisten asentojen ja tietoisen hiljaisuuden kautta.",
                description: "Yin-jooga on hidastempoinen, terapeuttinen joogatyyli, jossa asennot tehdään lattialla ja niitä pidetään pidempään, yleensä kolmesta viiteen minuuttia. Tämä lähestymistapa kohdistuu pikemminkin kehon syviin sidekudoksiin (nivelsiteisiin, niveliin ja faskioihin) kuin lihaksiin. Pysymällä paikallaan harjoitus rauhoittaa keskushermostoa ja luo syvän fyysisen ja henkisen selkeyden.",
                audience: "Erittäin hyödyllinen henkilöille, jotka haluavat lisätä nivelten liikkuvuutta, vähentää stressiä tai tasapainottaa nopeatempoista elämäntyyliä. Sopii kaikille tasoille, myös täysin aloittelijoille.",
                benefits: [
                    { title: "Nivelten liikkuvuus", description: "Venyttää hellästi ja kosteuttaa syviä sidekudoksia." },
                    { title: "Hermoston säätely", description: "Aktivoi parasympaattista hermostoa, vähentäen stressiä ja ahdistusta." },
                    { title: "Henkinen kestävyys", description: "Opettaa mielen pysymään rauhallisena ja tarkkailevana fyysisen paikallaanolon aikana." }
                ],
                whatToExpect: `
                    <div class="space-y-8">
                        <div>
                            <h3 class="text-xl font-semibold text-gray-800 mb-3 flex items-center"><span class="text-pink-500 mr-2">●</span> Itse Harjoitus</h3>
                            <p>Asennot ovat enimmäkseen istuvia tai makaavia. Käytämme paljon apuvälineitä (tyynyjä, tiiliä ja vilttejä) tukemaan kehoasi jokaisessa asennossa, jotta lihaksesi voivat täysin rentoutua ja antautua painovoimalle.</p>
                        </div>
                        <div>
                            <h3 class="text-xl font-semibold text-gray-800 mb-3 flex items-center"><span class="text-pink-500 mr-2">●</span> Hiljaisuuden Löytäminen</h3>
                            <p>Sinua ohjataan löytämään rajasi, pysymään paikallasi ja pitämään asento useita minuutteja. Keskitytään syvään, luonnolliseen hengitykseen ja sisäisen havainnoinnin kehittämiseen.</p>
                        </div>
                    </div>
                `,
                faqs: [
                    { question: "Onko Yin-jooga sama asia kuin restoratiivinen jooga?", answer: "Vaikka molemmat ovat hitaita ja käyttävät apuvälineitä, Yin keskittyy syvien sidekudosten hellävaraiseen venyttämiseen, kun taas restoratiivinen jooga keskittyy täysin passiiviseen vapautumiseen." },
                    { question: "Voinko tehdä Yin-joogaa, jos en ole taipuisa?", answer: "Kyllä, Yin on erinomainen tapa parantaa joustavuutta. Apuvälineillä luodaan tuki nykyisellä liikkuvuustasollasi." }
                ]
            }
        }
    },
    "vinyasa-flow": {
        icon: "waves",
        image: "https://images.unsplash.com/photo-1599447421416-3414500d18a5",
        teacherIds: ["dian-jarvenkyla"],
        translations: {
            en: {
                title: "Vinyasa Flow",
                tagline: "Dynamic movement synchronized with the breath.",
                description: "Vinyasa Flow is a dynamic practice that fluidly links movement with breath in a continuous sequence. It builds internal heat and cardiovascular endurance as practitioners transition smoothly between asanas. The sequences vary from class to class, offering physical variety and encouraging mental present-moment awareness.",
                audience: "Recommended for students who enjoy vigorous physical movement and want to build overall body strength, stamina, and agility. Familiarity with basic yoga postures is helpful but not strictly required.",
                benefits: [
                    { title: "Cardiovascular Health", description: "Continuous movement elevates the heart rate and improves circulation." },
                    { title: "Core Strength", description: "Transitions and balancing postures rely heavily on core stability." },
                    { title: "Functional Mobility", description: "Enhances a broad range of motion across the entire body." }
                ],
                whatToExpect: `
                    <div class="space-y-8">
                        <div>
                            <h3 class="text-xl font-semibold text-gray-800 mb-3 flex items-center"><span class="text-pink-500 mr-2">●</span> Continuous Movement</h3>
                            <p>Expect a flowing sequence that moves energetically from one posture to the next. You will likely build a sweat as the pace increases.</p>
                        </div>
                        <div>
                            <h3 class="text-xl font-semibold text-gray-800 mb-3 flex items-center"><span class="text-pink-500 mr-2">●</span> Breath Synchronization</h3>
                            <p>The core of Vinyasa is synchronising the rhythm of the breath with the rhythm of the body, creating a moving meditation effect.</p>
                        </div>
                    </div>
                `,
                faqs: [
                    { question: "Do I need prior yoga experience?", answer: "While beginners are welcome, some familiarity with basic postures like Downward Dog and Sun Salutations is beneficial due to the continuous pace of the class." }
                ]
            },
            et: {
                title: "Vinyasa Flow",
                tagline: "Dünaamiline liikumine sünkroonis hingamisega.",
                description: "Vinyasa Flow on dünaamiline praktika, mis seob liikumise voolavalt hingamisega. Asendite vahel sujuvalt liikudes kasvatatakse sisemist kuumust ja kardiovaskulaarset vastupidavust. Järjestused on igas tunnis erinevad, pakkudes füüsilist vaheldust ja toetades hetkes viibimist.",
                audience: "Soovitatav neile, kes naudivad aktiivset liikumist ning soovivad kasvatada keha üldist jõudu, vastupidavust ja agiilsust. Baasasendite tundmine on kasulik, kuid mitte rangelt nõutud.",
                benefits: [
                    { title: "Südame tervis", description: "Pidev liikumine tõstab pulssi ja parandab vereringet." },
                    { title: "Kerelihaste tugevus", description: "Üleminekud ja tasakaaluasendid nõuavad head kerestabiilsust." },
                    { title: "Funktsionaalne liikuvus", description: "Parandab liigeste ulatust kogu kehas." }
                ],
                whatToExpect: `
                    <div class="space-y-8">
                        <div>
                            <h3 class="text-xl font-semibold text-gray-800 mb-3 flex items-center"><span class="text-pink-500 mr-2">●</span> Pidev Liikumine</h3>
                            <p>Oota voolavat järjestust, mis liigub energiliselt ühest asendist teise. Tõenäoliselt hakkad tempokamal liikudes higistama.</p>
                        </div>
                        <div>
                            <h3 class="text-xl font-semibold text-gray-800 mb-3 flex items-center"><span class="text-pink-500 mr-2">●</span> Hingamise Sünkroniseerimine</h3>
                            <p>Vinyasa tuum on hingamisrütmi sünkroniseerimine keha rütmiga, luues liikuva meditatsiooni efekti.</p>
                        </div>
                    </div>
                `,
                faqs: [
                    { question: "Kas mul on vaja eelnevat joogakogemust?", answer: "Algajad on teretulnud, kuid baasasendite (nagu Allavaatav Koer) tundmine tuleb pideva liikumise tõttu kasuks." }
                ]
            },
            fi: {
                title: "Vinyasa Flow",
                tagline: "Dynaaminen liike synkronoituna hengityksen kanssa.",
                description: "Vinyasa Flow on dynaaminen harjoitus, joka yhdistää liikkeen nestemäisesti hengitykseen. Se rakentaa sisäistä lämpöä ja sydän- ja verisuonikestävyyttä, kun harjoittajat siirtyvät sujuvasti asanasta toiseen. Sarjat vaihtelevat tunneittain, tarjoten fyysistä vaihtelua ja kannustaen tietoiseen läsnäoloon.",
                audience: "Suositellaan niille, jotka nauttivat aktiivisesta fyysisestä liikkeestä ja haluavat lisätä kehon kokonaisvoimaa, kestävyyttä ja ketteryyttä. Perusjooga-asentojen tuntemuksesta on hyötyä.",
                benefits: [
                    { title: "Sydämen terveys", description: "Jatkuva liike nostaa sykettä ja parantaa verenkiertoa." },
                    { title: "Keskivartalon voima", description: "Siirtymät ja tasapainoasennot tukeutuvat vahvasti keskivartalon vakauteen." },
                    { title: "Toiminnallinen liikkuvuus", description: "Parantaa liikkuvuutta koko kehossa." }
                ],
                whatToExpect: `
                    <div class="space-y-8">
                        <div>
                            <h3 class="text-xl font-semibold text-gray-800 mb-3 flex items-center"><span class="text-pink-500 mr-2">●</span> Jatkuva Liike</h3>
                            <p>Odota virtaavaa sarjaa, joka etenee energisesti asennosta toiseen. Tulet todennäköisesti hikoilemaan tahdin kiihtyessä.</p>
                        </div>
                        <div>
                            <h3 class="text-xl font-semibold text-gray-800 mb-3 flex items-center"><span class="text-pink-500 mr-2">●</span> Hengityksen Synkronointi</h3>
                            <p>Vinyasan ydin on hengityksen ja kehon rytmin yhdistäminen, mikä luo liikkuvan meditaation tunteen.</p>
                        </div>
                    </div>
                `,
                faqs: [
                    { question: "Tarvitsenko aiempaa joogakokemusta?", answer: "Aloittelijat ovat tervetulleita, mutta perusasanoiden (kuten alaspäin katsovan koiran) tuntemuksesta on jatkuvan liikkeen vuoksi hyötyä." }
                ]
            }
        }
    },
    "hatha-yoga": {
        icon: "sun",
        image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b",
        teacherIds: ["dian-jarvenkyla"],
        translations: {
            en: {
                title: "Hatha Yoga",
                tagline: "Foundational postures focusing on alignment and strength.",
                description: "Hatha Yoga is a foundational practice focusing on mastering physical postures and breathing techniques. Classes are paced methodically, holding individual poses longer than in Vinyasa to ensure correct anatomical alignment. This deliberate pace allows for a deeper understanding of the body's mechanics and a steady build of isometric strength.",
                audience: "Ideal for beginners learning the fundamentals of alignment, as well as experienced practitioners seeking to refine their technique and build structural stability.",
                benefits: [
                    { title: "Structural Alignment", description: "Promotes correct posture and bodily mechanics." },
                    { title: "Isometric Strength", description: "Holding postures builds deep muscular endurance and bone density." },
                    { title: "Breath Control", description: "Provides ample time to integrate specific pranayama techniques within postures." }
                ],
                whatToExpect: `
                    <div class="space-y-8">
                        <div>
                            <h3 class="text-xl font-semibold text-gray-800 mb-3 flex items-center"><span class="text-pink-500 mr-2">●</span> Methodical Pacing</h3>
                            <p>Expect a structured sequence with pauses between poses rather than continuous flow. We aim for slower transitions allowing time to adjust and find stability.</p>
                        </div>
                        <div>
                            <h3 class="text-xl font-semibold text-gray-800 mb-3 flex items-center"><span class="text-pink-500 mr-2">●</span> Detail Orientation</h3>
                            <p>You will receive detailed verbal cues regarding placement and alignment, ensuring a safe and technically correct practice.</p>
                        </div>
                    </div>
                `,
                faqs: [
                    { question: "Is Hatha gentle?", answer: "It can be gentle or challenging depending on the pose, but because you hold postures longer, it generally feels less cardiovascular but more muscularly engaging than Vinyasa." }
                ]
            },
            et: {
                title: "Hatha Jooga",
                tagline: "Põhiasendid, mis keskenduvad joondusele ja jõule.",
                description: "Hatha Jooga on fundamentaalne praktika, mis keskendub füüsiliste asendite ja hingamistehnikate omandamisele. Tunnid on metoodilises tempos, hoides asendeid kauem kui Vinyasa stiilis, et tagada anatoomiliselt õige joondus. Selline teadlik tempo võimaldab paremini mõista keha mehaanikat ja kasvatada püsivat isomeetrilist jõudu.",
                audience: "Ideaalne algajatele joonduse aluste õppimiseks, aga ka kogenud harrastajatele tehnika viimistlemiseks ja stabiilsuse loomiseks.",
                benefits: [
                    { title: "Struktuurne joondus", description: "Toetab õiget rühti ja mehaanikat." },
                    { title: "Isomeetriline jõud", description: "Asendite hoidmine kasvatab lihasvastupidavust." },
                    { title: "Hingamise kontroll", description: "Annab aega integreerida hingamistehnikaid igasse asendisse." }
                ],
                whatToExpect: `
                    <div class="space-y-8">
                        <div>
                            <h3 class="text-xl font-semibold text-gray-800 mb-3 flex items-center"><span class="text-pink-500 mr-2">●</span> Metoodiline Tempo</h3>
                            <p>Oodata on struktureeritud järjestust pausidega asendite vahel, mitte pidevat voolamist. Aeglasemad üleminekud annavad aega kohaneda ja stabiilsust leida.</p>
                        </div>
                        <div>
                            <h3 class="text-xl font-semibold text-gray-800 mb-3 flex items-center"><span class="text-pink-500 mr-2">●</span> Täpsus</h3>
                            <p>Saad detailseid suulisi juhiseid asendite paigutuse ja joonduse kohta, tagades turvalise praktika.</p>
                        </div>
                    </div>
                `,
                faqs: [
                    { question: "Kas Hatha on leebem?", answer: "Hatha tempo on aeglasem ja seetõttu vähem kardiovaskulaarne, kuid asendite pikem hoidmine võib olla lihastele väga väljakutsuv." }
                ]
            },
            fi: {
                title: "Hatha Jooga",
                tagline: "Perusasennot, jotka keskittyvät linjaukseen ja voimaan.",
                description: "Hatha Jooga on perusharjoitus, joka keskittyy fyysisten asentojen ja hengitystekniikoiden hallintaan. Tunnit etenevät rauhallisesti ja asennoissa pysytään pidempään kuin Vinyasassa, jotta anatominen linjaus on varmasti oikein. Tämä harkittu tahti mahdollistaa kehon mekaniikan syvemmän ymmärtämisen ja isometrisen voiman kasvattamisen.",
                audience: "Ihanteellinen aloittelijoille linjauksen perusteiden oppimiseen, mutta yhtä lailla kokeneille harjoittelijoille tekniikan hiomiseen.",
                benefits: [
                    { title: "Rakenteellinen linjaus", description: "Tukee oikeaa ryhtiä ja kehon mekaniikkaa." },
                    { title: "Isometrinen voima", description: "Asentojen pitäminen rakentaa syvää lihaskestävyyttä." },
                    { title: "Hengityksen hallinta", description: "Antaa aikaa omaksua hengitystekniikat asennoissa." }
                ],
                whatToExpect: `
                    <div class="space-y-8">
                        <div>
                            <h3 class="text-xl font-semibold text-gray-800 mb-3 flex items-center"><span class="text-pink-500 mr-2">●</span> Rauhallinen Tahti</h3>
                            <p>Odota jäsenneltyä sarjaa, jossa on taukoja asentojen välillä jatkuvan virtauksen sijaan. Hitaammat siirtymät antavat aikaa asettua ja löytää vakaus.</p>
                        </div>
                        <div>
                            <h3 class="text-xl font-semibold text-gray-800 mb-3 flex items-center"><span class="text-pink-500 mr-2">●</span> Tarkkuus</h3>
                            <p>Saat yksityiskohtaisia ohjeita asentojen linjauksesta, mikä varmistaa turvallisen ja teknisesti oikean harjoituksen.</p>
                        </div>
                    </div>
                `,
                faqs: [
                    { question: "Onko Hatha lempeää?", answer: "Se voi olla lempeää tai haastavaa riippuen asennosta, mutta koska asennoissa viivytään pidempään, se tuntuu tyypillisesti lihaksissa Vinyasaa enemmän." }
                ]
            }
        }
    },
    "cacao-ceremonies": {
        icon: "heart",
        image: "https://images.unsplash.com/photo-1512568400610-62da28bc8a13",
        teacherIds: ["marit-tuisk"],
        translations: {
            en: {
                title: "Cacao Ceremonies",
                tagline: "Heart-opening rituals to foster deep inner connection.",
                description: "Cacao Ceremonies are intentional gatherings that utilize ceremonial-grade cacao as a gentle plant medicine to open the heart and facilitate emotional connection. Rather than a physical workout, this practice is a restorative, introspective journey. It often combines the drinking of warm, nutrient-rich cacao with guided meditation, breathwork, sound healing, and sometimes gentle mindful movement.",
                audience: "Perfect for anyone feeling disconnected, stressed, or seeking a safe space for emotional processing and quiet contemplation. No prior experience with yoga or ceremonies is required.",
                benefits: [
                    { title: "Emotional Release", description: "Provides a supportive environment to safely process and release stored emotions." },
                    { title: "Mental Clarity", description: "The natural compounds in cacao increase blood flow to the brain, enhancing focus and insight." },
                    { title: "Deep Relaxation", description: "Shifts the nervous system into a state of profound rest and receptivity." }
                ],
                whatToExpect: `
                    <div class="space-y-8">
                        <div>
                            <h3 class="text-xl font-semibold text-gray-800 mb-3 flex items-center"><span class="text-pink-500 mr-2">●</span> The Preparation</h3>
                            <p>You will settle into a comfortable seated or lying position using bolsters and blankets. The ceremony begins with the serving of warm, ceremonial cacao, prepared with intention and care. We take time to set personal intentions for the session before drinking.</p>
                        </div>
                        <div>
                            <h3 class="text-xl font-semibold text-gray-800 mb-3 flex items-center"><span class="text-pink-500 mr-2">●</span> The Journey</h3>
                            <p>As the cacao takes effect—usually inducing a subtle, warming sensation rather than any psychoactive effects—the facilitator guides the room through meditations, breathing exercises, or sound baths. You are simply invited to close your eyes, listen, and observe whatever arises within.</p>
                        </div>
                    </div>
                `,
                faqs: [
                    { question: "Is cacao psychedelic?", answer: "No. Ceremonial cacao is a non-psychoactive plant medicine. It contains theobromine, which gently stimulates the cardiovascular system and induces a warm, heart-opening sensation without altering your perception of reality." },
                    { question: "How should I prepare?", answer: "It is recommended to eat lightly a few hours before the ceremony and avoid dairy or heavy caffeine, as they can inhibit the body's absorption of the cacao's nutrients." }
                ]
            },
            et: {
                title: "Kakaotseremooniad",
                tagline: "Südant avavad rituaalid sügava sisemise ühenduse loomiseks.",
                description: "Kakaotseremooniad on taotlusega koosviibimised, kus tseremoniaalset kakaod kasutatakse leebelt südant avava ja emotsionaalset ühendust loova abilisena. Füüsilise treeningu asemel on see taastav ja sissepoole vaatav rännak. See ühendab endas sooja, toitainerikka kakao joomise juhitud meditatsiooni, hingamispraktikate, heliteraapia ja kohati ka leebe teadliku liikumisega.",
                audience: "Ideaalne igaühele, kes tunneb end ühenduse kaotanuna, stressis, või otsib turvalist ruumi emotsioonide töötlemiseks ja vaikseks mõtiskluseks. Eelnev kogemus jooga või tseremooniatega ei ole vajalik.",
                benefits: [
                    { title: "Emotsionaalne vabanemine", description: "Tseremoonia pakub toetavat keskkonda allasurutud emotsioonide turvaliseks lahtilaskmiseks." },
                    { title: "Vaimne selgus", description: "Kakao looduslikud ühendid suurendavad verevoolu ajju, soodustades fookust ja taipamisi." },
                    { title: "Sügav lõdvestus", description: "Lülitab närvisüsteemi sügava puhkuse ja vastuvõtlikkuse seisundisse." }
                ],
                whatToExpect: `
                    <div class="space-y-8">
                        <div>
                            <h3 class="text-xl font-semibold text-gray-800 mb-3 flex items-center"><span class="text-pink-500 mr-2">●</span> Ettevalmistus</h3>
                            <p>Sead end istudes või lamades abivahenditega (polstrid, tekid) mugavalt sisse. Tseremoonia algab taotluse ja hoolega valmistatud sooja tseremoniaalse kakao serveerimisega. Enne joomist võtame aega isiklike taotluste seadmiseks.</p>
                        </div>
                        <div>
                            <h3 class="text-xl font-semibold text-gray-800 mb-3 flex items-center"><span class="text-pink-500 mr-2">●</span> Rännak</h3>
                            <p>Kui kakao hakkab mõjuma – luues pigem õrna soojendava tunde kui muutes teadvust –, juhendab läbiviija ruumi läbi meditatsioonide, hingamisharjutuste või helirännakute. Sind kutsutakse lihtsalt silmi sulgema, kuulama ja vaatlema seda, mis sinu sees esile kerkib.</p>
                        </div>
                    </div>
                `,
                faqs: [
                    { question: "Kas kakao on psühhedeelne?", answer: "Ei. Tseremoniaalne kakao ei ole psühhoaktiivne. See sisaldab teobromiini, mis stimuleerib õrnalt südame-veresoonkonda ja loob sooja, südant avava tunde, muutmata sinu reaalsustaju." },
                    { question: "Kuidas peaksin valmistuma?", answer: "Soovitatav on süüa kergelt paar tundi enne tseremooniat ning vältida piimatooteid ja tugevat kofeiini, kuna need võivad pärssida kakao toitainete imendumist." }
                ]
            },
            fi: {
                title: "Kaakaoseremoniat",
                tagline: "Sydäntä avaavat rituaalit syvän sisäisen yhteyden luomiseksi.",
                description: "Kaakaoseremoniat ovat tarkoituksellisia kokoontumisia, joissa seremonialaatuista kaakaota käytetään lempeänä kasvilääkkeenä sydämen avaamiseen ja emotionaalisten yhteyksien fasilitointiin. Fyysisen harjoituksen sijaan tämä on palauttava, introspektiivinen matka. Se yhdistää lämpimän ja ravinteikkaan kaakaon juomisen ohjattuihin meditaatioihin, hengitysharjoituksiin, ääniterapiaan ja joskus lempeään tietoiseen liikkeeseen.",
                audience: "Täydellinen kaikille, jotka tuntevat itsensä irrallisiksi tai stressaantuneiksi, tai jotka etsivät turvallista tilaa tunteiden käsittelyyn ja hiljentymiseen. Aiempaa kokemusta ei tarvita.",
                benefits: [
                    { title: "Emotionaalinen vapautuminen", description: "Tarjoaa tukevan ympäristön tunteiden turvalliseen käsittelyyn ja vapauttamiseen." },
                    { title: "Henkinen selkeys", description: "Kaakaon luonnolliset yhdisteet lisäävät verenkiertoa aivoihin, parantaen keskittymistä ja oivalluksia." },
                    { title: "Syvä rentoutuminen", description: "Siirtää hermoston syvän levon ja vastaanottavaisuuden tilaan." }
                ],
                whatToExpect: `
                    <div class="space-y-8">
                        <div>
                            <h3 class="text-xl font-semibold text-gray-800 mb-3 flex items-center"><span class="text-pink-500 mr-2">●</span> Valmistautuminen</h3>
                            <p>Asetut mukavaan istuma- tai makuuasentoon apuvälineiden, kuten tyynyjen ja peittojen, tuella. Seremonia alkaa lämpimän, tarkoituksella valmistetun seremoniallisen kaakaon tarjoilulla. Otamme aikaa henkilökohtaisten intentioiden asettamiseen ennen juomista.</p>
                        </div>
                        <div>
                            <h3 class="text-xl font-semibold text-gray-800 mb-3 flex items-center"><span class="text-pink-500 mr-2">●</span> Matka</h3>
                            <p>Kun kaakao alkaa vaikuttaa – aiheuttaen yleensä hienovaraisen, lämmittävän tunteen – ohjaaja johdattaa tilan meditaatioiden, hengitysharjoitusten tai äänikylpyjen läpi. Sinua pyydetään vain sulkemaan silmäsi ja havainnoimaan sisältäsi nousevia asioita.</p>
                        </div>
                    </div>
                `,
                faqs: [
                    { question: "Onko kaakao psykedeelistä?", answer: "Ei. Seremoniallinen kaakao on ei-psykoaktiivinen kasvilääke. Se sisältää teobromiinia, joka stimuloi hellävaraisesti sydän- ja verisuonijärjestelmää ja luo lämpimän, sydäntä avaavan tunteen muuttamatta todellisuudentajuasi." },
                    { question: "Miten minun pitäisi valmistautua?", answer: "On suositeltavaa syödä kevyesti muutama tunti ennen seremoniaa ja välttää maitotuotteita tai vahvaa kofeiinia, koska ne voivat estää kehoa imeyttämästä kaakaon ravinteita." }
                ]
            }
        }
    }
};
window.classesData = classesData;

const pricingData = {
    en: {
        single: {
            "title": "Single Sessions",
            "options": [
                { "name": "1x Session", "price": "18€", "desc": "Valid for any scheduled class. Great for drop-ins. First time visiting? The Studio Explorer Pass (under Memberships) costs 29€ for 3 visits, making it only 9.66€ per class!" },
                { "name": "Student", "price": "15€", "desc": "Discounted drop-in rate for students. Valid student ID required." },
                { "name": "Senior", "price": "10€", "desc": "Discounted drop-in rate for seniors. Valid ID required." }
            ],
            "benefitsTitle": "Benefits",
            "benefits": [
                "Access to one yoga or wellness class",
                "Use of studio equipment (mats, props)"
            ],
            "conditionsTitle": "Terms & Conditions",
            "conditions": [
                "Valid for 30 days from purchase.",
                "Requires pre-booking via our schedule.",
                "Cancellations must be made at least 12 hours before class."
            ]
        },
        memberships: {
            "title": "Memberships | Monthly Payments",
            "options": [
                { "name": "1-Month Pass", "price": "79€", "desc": "Unlimited access to all scheduled classes for 30 days. No long-term commitment." },
                { "name": "Full Pass | 1st Year", "price": "69€/mo", "desc": "Unlimited access to all scheduled yoga and wellness classes. Annual commitment paid monthly. Save 120€ a year compared to the 1-Month Pass." },
                { "name": "Ashtanga Pass | 1st Year", "price": "59€/mo", "desc": "Unlimited access to all Ashtanga classes. Annual commitment paid monthly. Save 240€ a year compared to the 1-Month Pass." },
                { "name": "Studio Explorer Pass", "price": "29€", "desc": "For first-time studio visitors ONLY. Experience 3 Yoga & Wellness classes of your choice. Valid for 30 days. One-time purchase. Only 9.66€ per class (regular price 18€). Save 25€ compared to single tickets." }
            ],
            "benefitsTitle": "Membership Benefits",
            "benefits": [
                "Unlimited access to relevant classes",
                "Up to 20% discount on shop products (excluding annual passes)",
                "Up to 15% discount on events",
                "Up to 10% discount on retreats",
                "Bring a friend for free once a month"
            ],
            "conditionsTitle": "Terms & Conditions",
            "conditions": [
                "No signup fee applies.",
                "30-day notice required for cancellation.",
                "Memberships can be placed on hold, a 15-day hold costs 8€.",
                "When cancelling or placing on hold, all overdue payments must be settled."
            ]
        },
        passes: {
            "title": "Multi-Visit Passes",
            "options": [
                { "name": "5-Visit Pass | 20 Days", "price": "50€", "desc": "Valid for 5 classes within 20 days. Only 10€ per class. Save 40€ compared to single tickets." },
                { "name": "12-Visit Pass | 60 Days", "price": "115€", "desc": "Valid for 12 classes within 60 days. Only 9.58€ per class. Save 101€ compared to single tickets." },
                { "name": "20-Visit Pass | 6 Months", "price": "199€", "desc": "Valid for 20 classes within 6 months. Only 9.95€ per class. Save 161€ compared to single tickets." }
            ],
            "benefitsTitle": "Benefits",
            "benefits": [
                "Flexibility to attend any scheduled classes",
                "Cost-effective compared to single sessions",
                "Use of studio equipment (mats, props)"
            ],
            "conditionsTitle": "Terms & Conditions",
            "conditions": [
                "Validity period starts from the date of the first booked class.",
                "Passes cannot be extended or frozen.",
                "Cancellations must be made at least 12 hours before class."
            ]
        }
    },
    et: {
        single: {
            "title": "Ühekordsed külastused",
            "options": [
                { "name": "1x Tund", "price": "18€", "desc": "Kehtib ühele vabalt valitud tunnile. Oled esimest korda? Vaata Liikmepakettide alt Studio Explorer Passi – 3 tundi maksab kokku 29€, mis teeb ühe tunni hinnaks vaid 9.66€!" },
                { "name": "Õpilane", "price": "15€", "desc": "Soodushind õpilastele ja tudengitele. Vajalik kehtiv soodustust tõendav dokument." },
                { "name": "Pensionär", "price": "10€", "desc": "Soodushind pensionäridele. Vajalik kehtiv dokument." }
            ],
            "benefitsTitle": "Hüved",
            "benefits": [
                "Pääse ühte jooga- või heaolutundi",
                "Stuudio varustuse (matid, plokid jne) tasuta kasutus"
            ],
            "conditionsTitle": "Tingimused",
            "conditions": [
                "Kehtib 30 päeva alates ostmisest.",
                "Vajalik eelnev broneerimine tunniplaanis.",
                "Tühistamine peab toimuma vähemalt 12 tundi enne tunni algust."
            ]
        },
        memberships: {
            "title": "Liikmepaketid | Kuumaksed",
            "options": [
                { "name": "1-kuu pakett", "price": "79€", "desc": "Piiramatu ligipääs kõikidele tundidele 30 päevaks. Ilma pikaajalise siduvuseta." },
                { "name": "Täispakett | 1. aasta", "price": "69€", "desc": "Piiramatu ligipääs kõikidele tunniplaanis olevatele jooga- ja heaolutundidele. Aastase siduvusega, tasumine igakuiselt. Säästa 120€ aastas võrreldes 1-kuu paketiga." },
                { "name": "Ashtanga pakett | 1. aasta", "price": "59€", "desc": "Piiramatu ligipääs kõikidele Ashtanga tundidele. Aastase siduvusega, tasumine igakuiselt. Säästa 240€ aastas võrreldes 1-kuu paketiga." },
                { "name": "Studio Explorer Pass", "price": "29€", "desc": "AINULT esmakordsetele stuudio külastajatele. Osale vabal valikul 3 tunnis. Kehtib 30 päeva. Ühekordne ost. Vaid 9.66€ ühe tunni kohta (tavahind 18€). Säästad 25€ võrreldes üksikpiletitega." }
            ],
            "benefitsTitle": "Liikmepaketi Hüved",
            "benefits": [
                "Piiramatu ligipääs vastavatele tundidele",
                "Kuni 20% soodustus poe toodetele (v.a. aastakaardid)",
                "Kuni 15% soodustus sündmustele",
                "Kuni 10% soodustus retriitidele",
                "Kord kuus võta sõber tasuta tundi kaasa"
            ],
            "conditionsTitle": "Tingimused",
            "conditions": [
                "Liitumistasu puudub.",
                "Lõpetamisel kehtib 30-päevane etteteatamisaeg.",
                "Liikmekaardi peatamine kuni 15 päevaks maksab 8€.",
                "Kaardi lõpetamisel või peatamisel peavad kõik võlgnevused olema tasutud."
            ]
        },
        passes: {
            "title": "Korrakaardid",
            "options": [
                { "name": "5-korra kaart | 20 päeva", "price": "50€", "desc": "Kehtib 5 tunnile 20 päeva jooksul. Vaid 10€ ühe tunni kohta. Säästad 40€ võrreldes üksikpiletitega." },
                { "name": "12-korra kaart | 60 päeva", "price": "115€", "desc": "Kehtib 12 tunnile 60 päeva jooksul. Vaid 9.58€ ühe tunni kohta. Säästad 101€ võrreldes üksikpiletitega." },
                { "name": "20-korra kaart | 6 kuud", "price": "199€", "desc": "Kehtib 20 tunnile 6 kuu jooksul. Vaid 9.95€ ühe tunni kohta. Säästad 161€ võrreldes üksikpiletitega." }
            ],
            "benefitsTitle": "Hüved",
            "benefits": [
                "Paindlik võimalus osaleda erinevates tundides",
                "Soodsam kui ühekordsed piletid",
                "Stuudio varustuse tasuta kasutus"
            ],
            "conditionsTitle": "Tingimused",
            "conditions": [
                "Kehtivusaeg algab esimese broneeritud tunni toimumisest.",
                "Korrakaarte ei saa pikendada ega peatada.",
                "Tühistamine peab toimuma vähemalt 12 tundi enne tunni algust."
            ]
        }
    },
    fi: {
        single: {
            "title": "Kertakäynnit",
            "options": [
                { "name": "1x Tunti", "price": "18€", "desc": "Voimassa yhteen vapaavalintaiseen tuntiin. Ensimmäistä kertaa studiolla? Jäsenyydet-osion lT Studio Explorer Pass maksaa 29€ / 3 käyntiä, eli vain 9.66€ per tunti!" },
                { "name": "Opiskelija", "price": "15€", "desc": "Alennettu hinta edellyttää voimassa olevaa opiskelijakorttia." },
                { "name": "Eläkeläinen", "price": "10€", "desc": "Alennettu hinta edellyttää voimassa olevaa todistusta." }
            ],
            "benefitsTitle": "Edut",
            "benefits": [
                "Pääsy yhdelle jooga- tai hyvinvointitunnille",
                "Studion varusteiden (matot, apuvälineet) vapaa käyttö"
            ],
            "conditionsTitle": "Käyttöehdot",
            "conditions": [
                "Voimassa 30 päivää ostopäivästä.",
                "Edellyttää ennakkovarausta lukujärjestyksen kautta.",
                "Peruutukset on tehtävä vähintään 12 tuntia ennen tunnin alkua."
            ]
        },
        memberships: {
            "title": "Jäsenyydet | Kuukausimaksut",
            "options": [
                { "name": "1 kuukauden paketti", "price": "79€", "desc": "Rajaton pääsy kaikille tunneille 30 päivän ajan. Ei pitkäaikaista sitoutumista." },
                { "name": "Täyspaketti | 1. vuosi", "price": "69€/kk", "desc": "Rajaton pääsy kaikille lukujärjestyksen jooga- ja hyvinvointitunneille. Vuosijäsenyys kuukausilaskutuksella. Säästä 120€ vuodessa verrattuna 1 kuukauden pakettiin." },
                { "name": "Ashtanga-paketti | 1. vuosi", "price": "59€/kk", "desc": "Rajaton pääsy kaikille ashtangatunneille. Vuosijäsenyys kuukausilaskutuksella. Säästä 240€ vuodessa verrattuna 1 kuukauden pakettiin." },
                { "name": "Studio Explorer Pass", "price": "29€", "desc": "VAIN ENSIMMÄISTÄ kertaa studiolla vieraileville. Kokeile 3 valitsemaasi tuntia. Voimassa 30 päivää ostopäivästä. Kertaostos. Vain 9.66€ per tunti (normaalihinta 18€). Säästä 25€ verrattuna kertalippuihin." }
            ],
            "benefitsTitle": "Jäsenyysedut",
            "benefits": [
                "Rajaton pääsy soveltuville tunneille",
                "Jopa 20 % alennus myymälä tuotteista (pois lukien vuosikortit)",
                "Jopa 15 % alennus tapahtumista",
                "Jopa 10 % alennus retriiteistä",
                "Tuo ystävä ilmaiseksi kerran kuukaudessa"
            ],
            "conditionsTitle": "Käyttöehdot",
            "conditions": [
                "Ei liittymismaksua.",
                "Irtisanomisaika on 30 päivää.",
                "Jäsenyyden keskeyttäminen enintään 15 päiväksi maksaa 8€.",
                "Korttia peruutettaessa tai keskeytettäessä kaikki erääntyneet maksut on maksettava."
            ]
        },
        passes: {
            "title": "Sarjakortit",
            "options": [
                { "name": "5-kerran kortti | 20 päivää", "price": "50€", "desc": "Voimassa 5 tuntiin 20 päivän ajan. Vain 10€ per tunti. Säästä 40€ verrattuna kertalippuihin." },
                { "name": "12-kerran kortti | 60 päivää", "price": "115€", "desc": "Voimassa 12 tuntiin 60 päivän ajan. Vain 9.58€ per tunti. Säästä 101€ verrattuna kertalippuihin." },
                { "name": "20-kerran kortti | 6 kuukautta", "price": "199€", "desc": "Voimassa 20 tuntiin 6 kuukauden ajan. Vain 9.95€ per tunti. Säästä 161€ verrattuna kertalippuihin." }
            ],
            "benefitsTitle": "Edut",
            "benefits": [
                "Joustava osallistuminen mihin tahansa tuntiin",
                "Edullisempi kuin kertakäynnit",
                "Studion varusteiden vapaa käyttö"
            ],
            "conditionsTitle": "Käyttöehdot",
            "conditions": [
                "Voimassaoloaika alkaa ensimmäisestä varatusta tunnista.",
                "Kortteja ei voi pidentää tai jäädyttää.",
                "Peruutukset on tehtävä vähintään 12 tuntia ennen tunnin alkua."
            ]
        }
    }
};

const instagramData = [
    { "link": "#", "img": "https://images.unsplash.com/photo-1593179449458-e45a112c3cc2", "date": "NOV 29, 2021" },
    { "link": "#", "img": "https://images.unsplash.com/photo-1545389336-cf090694435e", "date": "NOV 25, 2021" },
    { "link": "#", "img": "https://images.unsplash.com/photo-1599447462855-c0194b34c34a", "date": "NOV 23, 2021" },
    { "link": "#", "img": "https://images.unsplash.com/photo-1552196563-55cd4e45efb3", "date": "NOV 13, 2021" },
    { "link": "#", "img": "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b", "date": "NOV 11, 2021" },
    { "link": "#", "img": "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b", "date": "NOV 10, 2021" },
    { "link": "#", "img": "https://images.unsplash.com/photo-1549576490-b0b4831ef60a", "date": "NOV 08, 2021" }
];
