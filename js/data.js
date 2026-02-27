// Data Definitions
const translationsData = {
    en: {
        "nav.home": "Home", "nav.about": "About", "nav.studio": "Studio", "nav.schedule": "Schedule", "nav.pricing": "Pricing", "nav.teachers": "Teachers", "nav.events": "Events", "nav.community": "Community", "nav.contact": "Contact", "nav.language": "Language",
        "hero.tagline": "Yoga & Wellness Sanctuary", "hero.title": "Home of traditional yoga and wellness practises in Tallinn", "hero.description": "Daily yoga classes and wellness events in the centre of Tallinn. We have created an authentic space and community where different yoga styles and wellness practises support people’s choices.", "hero.view_schedule": "View Schedule", "hero.events": "Events", "hero.discover_more": "Discover More", "hero.seasonal_offer": "Seasonal Offer!",
        "about.tagline": "Our Approach", "about.title": "A Safe Sanctuary at the Heart of Tallinn", "about.description": "Goyoga is a safe sanctuary at the heart of Tallinn for people of all ages and preferences to come and switch off, relax and reinvigorate.", "about.subtitle": "Our Offerings", "about.content1": "Our practices are rooted in tradition but designed for modern living, providing a path to physical vitality and mental serenity.", "about.content2": "Whether you seek the dynamic flow of Ashtanga or the deep relaxation of a Sound Bath, our community is here to support your journey.", "about.benefits.physical.title": "Yoga", "about.benefits.physical.description": "Ashtanga, Vinyasa, Yin, Strength, 60+ yoga, Pilates, Qigong.", "about.benefits.mental.title": "Wellness", "about.benefits.mental.description": "Meditations, Sound Baths, Cacao Ceremonies, Yoga Nidra.",
        "studio.tagline": "Living Space", "studio.title": "A Home for Your Practice", "studio.description1": "Located at <span class='font-semibold'>Narva mnt 7D, Tallinn</span>, our shala is an urban retreat designed for deep practice and community gathering.", "studio.description2": "With natural light and grounding aesthetics, we provide a premium environment including high-quality mats, props, and a cozy tea corner for integration.", "studio.rent_button": "Rent Our Space",
        "schedule.tagline": "Live Class Schedule", "schedule.title": "Find Your Time to Practice", "schedule.description": "Our schedule is always up-to-date. Find a class and book your spot directly through the calendar below.",
        "pricing.tagline": "Pricing Options", "pricing.title": "Invest in Your Practice", "pricing.description": "We offer flexible pricing options to suit your schedule and commitment level.", "pricing.single.title": "Single Session", "pricing.single.description": "Perfect for drop-ins or trying out a class.", "pricing.memberships.title": "Memberships", "pricing.memberships.description": "The best value for dedicated practitioners.", "pricing.passes.title": "Multi-Visit Passes", "pricing.passes.description": "Great value for regular students who need flexibility.", "pricing.view_options": "View Options", "pricing.most_popular": "Most Popular", "pricing.offer.title": "Seasonal Offering", "pricing.offer.subtitle": "Back to Yoga Special!", "pricing.offer.description": "Commit to your practice this autumn. Get a 5-class pass.", "pricing.offer.ends_in": "Offer Ends In:", "pricing.offer.days": "Days", "pricing.offer.hours": "Hours", "pricing.offer.minutes": "Mins", "pricing.offer.seconds": "Secs", "pricing.offer.claim_button": "Claim Offer",
        "teachers.tagline": "Our Teachers", "teachers.title": "Experience & Wisdom", "teachers.description": "A diverse team of practitioners dedicated to your path of yoga and wellness.",
        "teachers.raili-maripuu.title": "Founder | Ashtanga", "teachers.raili-maripuu.description": "Bringing authentic Ashtanga practice to Tallinn with decades of experience.",
        "teachers.victoria-palusaar.title": "Ashtanga | Nutritional Therapist", "teachers.victoria-palusaar.description": "Focusing on conscious eating and the traditional Ashtanga method.",
        "teachers.triin-parro.title": "Strength & Holistic Health", "teachers.triin-parro.description": "Specializing in strength training and personalized wellness journeys.",
        "teachers.kaia-karjatse.title": "60+ Yoga | Sound Therapy", "teachers.kaia-karjatse.description": "Gentle movement and healing vibrations for all stages of life.",
        "teachers.edith-tiitsaar.title": "Qigong | Energy Work", "teachers.edith-tiitsaar.description": "Working with meridians and the Radiant Lotus Qigong tradition.",
        "teachers.marit-tuisk.title": "Meditations | Cacao Ceremonies", "teachers.marit-tuisk.description": "Opening hearts through sacred rituals and deep presence.",
        "teachers.david-lepp.title": "Sound Baths | Yoga Nidra", "teachers.david-lepp.description": "Mastering the gong to clear blockages and restore harmony.",
        "teachers.dian-jarvenkyla.title": "Vinyasa & Hatha Yoga", "teachers.dian-jarvenkyla.description": "Guiding mindfulness, strength, and body awareness through flowing movement.",
        "teachers.discover": "Get to Know", "teachers.teaching_languages": "Teaching Languages",
        "events.tagline": "Deepen Your Practice", "events.title": "Upcoming Events & Retreats", "events.description": "Join us for special workshops and immersive retreats.", "events.event1.title": "Autumn Rejuvenation Retreat", "events.event1.description": "A 4-day immersive retreat in the Estonian countryside.", "events.event2.title": "Mastering Inversions Workshop", "events.event2.description": "Join Mia Johnson to build the strength and confidence to master inversions.", "events.register_button": "Register Now", "events.learn_more_button": "Learn More", "events.view_all": "View All Events & Retreats",
        "community.tagline": "Community", "community.title": "Words from Our Community", "community.description": "Hear what our students have to say.", "community.leave_review_button": "Leave a Review",
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
        "pricing.tagline": "Hinnavalikud", "pricing.title": "Investeeri oma praktikasse", "pricing.description": "Pakume paindlikke hinnavalikuid.", "pricing.single.title": "Üksikkord", "pricing.single.description": "Täiuslik ühekordseks külastuseks.", "pricing.memberships.title": "Liikmelisus", "pricing.memberships.description": "Parim väärtus pühendunud praktiseerijatele.", "pricing.passes.title": "Mitmikkorrakardid", "pricing.passes.description": "Suurepärane väärtus regulaarsetele õpilastele.", "pricing.view_options": "Vaata valikuid", "pricing.most_popular": "Populaarseim", "pricing.offer.title": "Hooajaline pakkumine", "pricing.offer.subtitle": "Tagasi jooga eripakkumine!", "pricing.offer.description": "Pühendu oma praktikale sel sügisel.", "pricing.offer.ends_in": "Pakkumine lõppeb:", "pricing.offer.days": "Päeva", "pricing.offer.hours": "Tundi", "pricing.offer.minutes": "Minutit", "pricing.offer.seconds": "Sekundit", "pricing.offer.claim_button": "Kasuta pakkumist",
        "teachers.tagline": "Meie õpetajad", "teachers.title": "Kogemus ja tarkus", "teachers.description": "Mitmekülgne meeskond praktikuid, kes on pühendunud sinu jooga- ja heaolu teekonnale.",
        "teachers.raili-maripuu.title": "Asutaja | Ashtanga", "teachers.raili-maripuu.description": "Toob Tallinna autentse Ashtanga praktika aastakümnete pikkuse kogemusega.",
        "teachers.victoria-palusaar.title": "Ashtanga | Toitumisterapeut", "teachers.victoria-palusaar.description": "Keskendub teadlikule toitumisele ja traditsioonilisele Ashtanga meetodile.",
        "teachers.triin-parro.title": "Jõud ja holistiline tervis", "teachers.triin-parro.description": "Spetsialiseerunud jõutreeningule ja individuaalsetele heaolu teekondadele.",
        "teachers.kaia-karjatse.title": "60+ jooga | Heliteraapia", "teachers.kaia-karjatse.description": "Õrn liikumine ja tervendavad vibratsioonid kõikidele eluetappidele.",
        "teachers.edith-tiitsaar.title": "Qigong | Energiatöö", "teachers.edith-tiitsaar.description": "Töö meridiaanide ja Särava Lootose Qigong traditsiooniga.",
        "teachers.marit-tuisk.title": "Meditatsioonid | Kakaotseremooniad", "teachers.marit-tuisk.description": "Avab südameid läbi pühade rituaalide ja sügava kohalolu.",
        "teachers.david-lepp.title": "Helirännakud | Yoga Nidra", "teachers.david-lepp.description": "Gongi valdaja, et puhastada blokeeringud ja taastada harmoonia.",
        "teachers.dian-jarvenkyla.title": "Vinyasa ja Hatha jooga", "teachers.dian-jarvenkyla.description": "Juhendab teadvelolekut, jõudu ja kehateadlikkust läbi voolava liikumise.",
        "teachers.discover": "Tutvu õpetajaga", "teachers.teaching_languages": "Õpetamiskeeled",
        "events.tagline": "Süvenda oma praktikat", "events.title": "Tulevased sündmused", "events.description": "Liitu meiega töötubadel.", "events.event1.title": "Sügise värskendusretriit", "events.event1.description": "4-päevane põhjalik retriit Eesti maal.", "events.event2.title": "Pöördasendite meisterdamise töötuba", "events.event2.description": "Liitu Mia Johnsoniga.", "events.register_button": "Registreeri kohe", "events.learn_more_button": "Loe lähemalt", "events.view_all": "Vaata kõiki sündmusi ja retriite",
        "community.tagline": "Kogukond", "community.title": "Sõnad meie kogukonnast", "community.description": "Kuula, mida meie õpilased räägivad.", "community.leave_review_button": "Jäta Tagasisidet",
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
        "pricing.tagline": "Hintavaihtoehdot", "pricing.title": "Investoi harjoitteluusi", "pricing.description": "Tarjoamme joustavia hintavaihtoehtoja.", "pricing.single.title": "Yksittäiskerta", "pricing.single.description": "Täydellinen kertakäynteihin.", "pricing.memberships.title": "Jäsenyydet", "pricing.memberships.description": "Paras arvo omistautuneille harjoittajille.", "pricing.passes.title": "Useamman kerran liput", "pricing.passes.description": "Loistava arvo säännöllisille oppilaille.", "pricing.view_options": "Katso vaihtoehdot", "pricing.most_popular": "Suosituin", "pricing.offer.title": "Kausitarjous", "pricing.offer.subtitle": "Takaisin jooga -erikoistarjous!", "pricing.offer.description": "Sitoudu harjoitteluusi tänä syksynä.", "pricing.offer.ends_in": "Tarjous päättyy:", "pricing.offer.days": "Päivää", "pricing.offer.hours": "Tuntia", "pricing.offer.minutes": "Minuuttia", "pricing.offer.seconds": "Sekuntia", "pricing.offer.claim_button": "Käytä tarjousta",
        "teachers.tagline": "Opettajamme", "teachers.title": "Kokemus ja viisaus", "teachers.description": "Monipuolinen tiimi harjoittajia, jotka ovat omistautuneet jooga- ja hyvinvointimatkallesi.",
        "teachers.raili-maripuu.title": "Perustaja | Ashtanga", "teachers.raili-maripuu.description": "Tuo aitoa Ashtanga-harjoitusta Tallinnaan vuosikymmenten kokemuksella.",
        "teachers.victoria-palusaar.title": "Ashtanga | Ravintoterapeutti", "teachers.victoria-palusaar.description": "Keskittyy tietoiseen syömiseen ja perinteiseen Ashtanga-menetelmään.",
        "teachers.triin-parro.title": "Voima ja holistinen terveys", "teachers.triin-parro.description": "Erikoistunut voimaharjoitteluun ja yksilöllisiin hyvinvointimatkoihin.",
        "teachers.kaia-karjatse.title": "60+ jooga | Ääniterapia", "teachers.kaia-karjatse.description": "Lempeää liikettä ja parantavia värähtelyjä elämän kaikkiin vaiheisiin.",
        "teachers.edith-tiitsaar.title": "Qigong | Energiatyö", "teachers.edith-tiitsaar.description": "Työskentely meridiaanien ja Radiant Lotus Qigong -perinteen parissa.",
        "teachers.marit-tuisk.title": "Meditaatiot | Kaakaoseremoniat", "teachers.marit-tuisk.description": "Sydänten avaaminen pyhien rituaalien ja syvän läsnäolon kautta.",
        "teachers.david-lepp.title": "Äänimaljakylvyt | Yoga Nidra", "teachers.david-lepp.description": "Gongin mestari poistamaan tukoksia ja palauttamaan harmonian.",
        "teachers.dian-jarvenkyla.title": "Vinyasa & Hatha Jooga", "teachers.dian-jarvenkyla.description": "Ohjaa tietoisuutta, voimaa ja kehotietoisuutta virtaavan liikkeen kautta.",
        "teachers.discover": "Tutustu opettajaan", "teachers.teaching_languages": "Opetuskielet",
        "events.tagline": "Syvennä harjoitustasi", "events.title": "Tulevat tapahtumat", "events.description": "Liity mukaan työpajoihin ja syventäviin kursseihin.", "events.event1.title": "Syksyn virkistysretriitti", "events.event1.description": "4 päivän syventävä retriitti Viron maaseudulla.", "events.event2.title": "Inversioiden hallinta -työpaja", "events.event2.description": "Liity mukaan ja opi hallitsemaan päälläseisonta ja muut inversiot turvallisesti.", "events.register_button": "Rekisteröidy nyt", "events.learn_more_button": "Lue lisää", "events.view_all": "Katso kaikki tapahtumat",
        "community.tagline": "Yhteisö", "community.title": "Sanoja yhteisöltämme", "community.description": "Kuule, mitä oppilaamme sanovat.", "community.leave_review_button": "Jätä Arvostelu",
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
    "dian-jarvenkyla": { "name": "Dian Jarvenkyla", "title": "Vinyasa & Hatha Yoga", "image": "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b", "languages": ["en", "id"], "socials": { "instagram": "https://www.instagram.com/aikani_yoga/", "instagram2": "https://www.instagram.com/aikaniclass", "tiktok": "https://www.tiktok.com/@aikaniyoga", "yogaalliance": "https://app.yogaalliance.org/teacherpublicprofile/0033g00001b1NZeAAM/dian-jarvenkyla" } }
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
    }
};
window.classesData = classesData;

const pricingData = {
    en: {
        single: { "title": "Single Sessions", "options": [{ "name": "1x Session", "price": "18€" }, { "name": "Student", "price": "15€" }, { "name": "Senior", "price": "10€" }] },
        memberships: { "title": "Memberships | Monthly Payments", "options": [{ "name": "Ashtanga Pass | 1st Year", "price": "59€/mo" }, { "name": "Full Pass | 1st Year", "price": "69€/mo" }, { "name": "1-Month Pass", "price": "79€" }] },
        passes: { "title": "Multi-Visit Passes", "options": [{ "name": "5-Visit Pass | 20 Days", "price": "50€" }, { "name": "12-Visit Pass | 60 Days", "price": "115€" }, { "name": "20-Visit Pass | 6 Months", "price": "199€" }] }
    },
    et: {
        single: { "title": "Ühekordsed külastused", "options": [{ "name": "1x Tund", "price": "18€" }, { "name": "Õpilane", "price": "15€" }, { "name": "Pensionär", "price": "10€" }] },
        memberships: { "title": "Liikmepaketid | Kuumaksed", "options": [{ "name": "Ashtanga pakett | 1. aasta", "price": "59€" }, { "name": "Täispakett | 1. aasta", "price": "69€" }, { "name": "1-kuu pakett", "price": "79€" }] },
        passes: { "title": "Korrakaardid", "options": [{ "name": "5-korra kaart | 20 päeva", "price": "50€" }, { "name": "12-korra kaart | 60 päeva", "price": "115€" }, { "name": "20-korra kaart | 6 kuud", "price": "199€" }] }
    },
    fi: {
        single: { "title": "Kertakäynnit", "options": [{ "name": "1x Tunti", "price": "18€" }, { "name": "Opiskelija", "price": "15€" }, { "name": "Eläkeläinen", "price": "10€" }] },
        memberships: { "title": "Jäsenyydet | Kuukausimaksut", "options": [{ "name": "Ashtanga-paketti | 1. vuosi", "price": "59€/kk" }, { "name": "Täyspaketti | 1. vuosi", "price": "69€/kk" }, { "name": "1 kuukauden paketti", "price": "79€" }] },
        passes: { "title": "Sarjakortit", "options": [{ "name": "5-kerran kortti | 20 päivää", "price": "50€" }, { "name": "12-kerran kortti | 60 päivää", "price": "115€" }, { "name": "20-kerran kortti | 6 kuukautta", "price": "199€" }] }
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
