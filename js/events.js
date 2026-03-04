/**
 * Goyoga Tallinn Events & Retreats Data
 */

const eventsData = [
    {
        id: 'full-moon-cacao-gong-mar-4',
        type: 'studio',
        category: 'studio',
        active: true,
        featured: true,
        expiryDate: '2026-03-05',
        cardImage: 'assets/events/1003-goyoga-tallinn-estonia-marit-tuisk-david-lepp-reiki-infused-gong-rannak-jooga-nidra-full-moon ritual-cacao-gong-journey.webp',
        headerImage: 'assets/events/1004-goyoga-tallinn-estonia-marit-tuisk-david-lepp-reiki-infused-gong-rannak-jooga-nidra-full-moon ritual-cacao-gong-journey.png',
        image: 'assets/events/1003-goyoga-tallinn-estonia-marit-tuisk-david-lepp-reiki-infused-gong-rannak-jooga-nidra-full-moon ritual-cacao-gong-journey.webp',
        gallery: [],
        teachers: ['marit-tuisk', 'david-lepp'],
        registerLink: '#contact',
        en: {
            title: 'Full Moon Ritual: Cacao & Gong Journey',
            date: 'March 4, 2026',
            location: 'Goyoga Tallinn Studio',
            organizer: 'Marit & David (Casa Rituals)',
            description: 'This full moon closes the eclipse portal. A time when final layers become visible and a cycle finds its completion.',
            fullDescription: 'Eclipses bring change. The full moon helps this change land. We begin with ceremonial cacao to open the heart and bring clarity. I will share a brief astrological overview. Then, we move into a deep gong journey where sound frequencies support the nervous system. Starts at 19:00, duration 2.5 hours. Price: 44€ (Members 33€).',
            highlights: ['Ceremonial Cacao', 'Astrological Overview', 'Deep Gong Journey', 'Integration']
        },
        et: {
            title: 'Täiskuu rituaal kakao- ja gongirännakuga',
            date: '4. märts 2026',
            location: 'Goyoga Tallinn Stuudio',
            organizer: 'Marit & David (Casa Rituals)',
            description: 'See täiskuu sulgeb varjutuste portaali. Aeg, mil viimased kihid saavad nähtavaks ja tsükkel leiab oma lõpetuse.',
            fullDescription: 'Varjutused toovad muutuse. Täiskuu aitab sellel muutusel maanduda. Alustame tseremoniaalse kakaoga, et avada süda ja tuua selgus. Jagan ka lühikest astroloogilist ülevaadet. Seejärel liigume sügavasse gongirännakusse. Algus kell 19:00. Kestus 2,5 tundi. 44 eurot, liikmetele 33 eurot.',
            highlights: ['Tseremoniaalne kakao', 'Astroloogiline ülevaade', 'Sügav gongirännak', 'Integreerimine']
        },
        fi: {
            title: 'Täydenkuun rituaali kaakaolla ja gongilla',
            date: '4. maaliskuuta 2026',
            location: 'Goyoga Tallinn Studio',
            organizer: 'Marit & David (Casa Rituals)',
            description: 'Tämä täysikuu sulkee pimennysportaalin. Aika, jolloin viimeiset kerrokset tulevat näkyviin ja sykli päättyy.',
            fullDescription: 'Pimennykset tuovat muutoksen. Täysikuu auttaa tässä muutoksessa. Aloitamme seremoniallisella kaakaolla. Jaan myös lyhyen astrologisen katsauksen. Sitten siirrymme syvään gongimatkaan, jossa äänitaajuudet tukevat hermoston rauhoittumista. Alkaa 19:00, kesto 2.5 h. Hinta: 44€ (jäsenet 33€).',
            highlights: ['Seremoniallinen kaakao', 'Astrologinen katsaus', 'Syvä gongimatka', 'Integraatio']
        }
    },
    {
        id: 'womens-day-cacao-mar-8',
        type: 'studio',
        category: 'studio',
        active: false,
        featured: false,
        expiryDate: '2026-03-09',
        image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=1200',
        gallery: [],
        teachers: ['marit-tuisk'],
        registerLink: '#contact',
        en: {
            title: 'Women\'s Day Cacao Ritual with the Inner Woman',
            date: 'March 8, 2026',
            location: 'Goyoga Tallinn Studio',
            organizer: 'Marit (Casa Rituals)',
            description: 'We celebrate Women\'s Day softly and deeply. This evening is dedicated to the inner woman—that part of you that feels, creates, flows, and holds.',
            fullDescription: 'We will drink ceremonial cacao and move into a guided journey to meet our feminine essence without roles or expectations. The evening also includes a rose ritual. The rose carries the frequency of love and purification, supporting the opening of the heart and the remembrance of self-worth. Starts at 18:00. Duration 2 hours. Price: 33€ (Members 25€).',
            highlights: ['Ceremonial Cacao', 'Guided Journey', 'Rose Ritual', 'Heart Opening']
        },
        et: {
            title: 'Naistepäeva Kakao rituaal sisemise naisega',
            date: '8. märts 2026',
            location: 'Goyoga Tallinn Stuudio',
            organizer: 'Marit (Casa Rituals)',
            description: '8. märtsil tähistame naistepäeva pehmelt ja sügavalt. Õhtu on pühendatud sisemisele naisele.',
            fullDescription: 'See õhtu on pühendatud sisemisele naisele – sellele osale sinus, mis tunneb, loob, voolab ja hoiab. Joome tseremoniaalset kakaod ning liigume juhendatud rännakusse, et kohtuda oma naiseliku olemusega. Õhtu osaks on ka roosirituaal. Roos kannab armastuse ja puhastuse sagedust. Algus 18:00, kestus 2 tundi. 33 eurot, liikmetele 25 eurot.',
            highlights: ['Tseremoniaalne kakao', 'Juhendatud rännak', 'Roosirituaal', 'Südame avanemine']
        },
        fi: {
            title: 'Naistenpäivän kaakaorituaali sisäisen naisen kanssa',
            date: '8. maaliskuuta 2026',
            location: 'Goyoga Tallinn Studio',
            organizer: 'Marit (Casa Rituals)',
            description: 'Vietämme naistenpäivää lempeästi ja syvästi. Tämä ilta on omistettu sisäiselle naiselle.',
            fullDescription: 'Juomme seremoniallista kaakaota ja siirrymme ohjatulle matkalle kohtaamaan naisellinen olemuksemme. Iltaan sisältyy myös ruusurituaali. Ruusu kantaa rakkauden ja puhdistumisen taajuutta, tukiessaan sydämen avautumista. Alkaa kello 18:00. Kesto 2 tuntia. Hinta 33€ (jäsenet 25€).',
            highlights: ['Seremoniallinen kaakao', 'Ohjattu matka', 'Ruusurituaali', 'Sydämen avautuminen']
        }
    },
    {
        id: 'reiki-gong-mar-13',
        type: 'studio',
        category: 'studio',
        active: true,
        featured: true,
        expiryDate: '2026-03-14',
        cardImage: 'assets/events/1001-goyoga-tallinn-estonia-marit-tuisk-david-lepp-taiskuu-rituaal-kakao-kong-rannak.webp',
        headerImage: 'assets/events/1002-goyoga-tallinn-estonia-marit-tuisk-david-lepp-reiki-infused-gong-rannak-jooga-nidra-1024w.webp',
        image: 'assets/events/1001-goyoga-tallinn-estonia-marit-tuisk-david-lepp-taiskuu-rituaal-kakao-kong-rannak.webp',
        gallery: [],
        teachers: ['david-lepp'],
        registerLink: '#contact',
        en: {
            title: 'Reiki Infused Gong Journey & Yoga Nidra',
            date: 'March 13, 2026',
            location: 'Goyoga Tallinn Studio',
            organizer: 'David (Casa Rituals)',
            description: 'We gather for a deeply restorative evening combining Yoga Nidra, Reiki energy, and a live gong journey. Held in English.',
            fullDescription: 'We begin with guided Yoga Nidra to consciously relax the body and quiet the mind. Reiki energy will be woven throughout the evening, supporting gentle energetic alignment. The gong frequencies will then guide you into a deep state of integration. Starts at 19:00, duration 2 hours. Price: 33€ (Members 25€). No prior experience needed.',
            highlights: ['Yoga Nidra', 'Reiki Energy Therapy', 'Live Gong Journey', 'Nervous System Reset']
        },
        et: {
            title: 'Reiki energiaga Gongirännak & Yoga Nidra',
            date: '13. märts 2026',
            location: 'Goyoga Tallinn Stuudio',
            organizer: 'David (Casa Rituals)',
            description: 'Koguneme sügavalt taastavaks õhtuks, mis ühendab Yoga Nidra, Reiki energia ja elava gongirännaku. Inglise keeles.',
            fullDescription: 'Alustame juhendatud Yoga Nidraga, et teadlikult lõdvestada keha ja vaigistada meel. Reiki energia on põimitud kogu õhtusse. Seejärel juhendavad gongi sagedused teid sügavasse integratsiooni ja närvisüsteemi taastumisse. See on kahetunnine sukeldumine, mis on loodud taastamiseks ja selguse loomiseks. Algus 19:00. Hind 33 eurot, liikmetele 25 eur.',
            highlights: ['Yoga Nidra', 'Reiki energia', 'Elav Gongirännak', 'Närvisüsteemi taastumine']
        },
        fi: {
            title: 'Reiki-infusoitu Gong-matka & Yoga Nidra',
            date: '13. maaliskuuta 2026',
            location: 'Goyoga Tallinn Studio',
            organizer: 'David (Casa Rituals)',
            description: 'Kokoonnumme syvästi palauttavaan iltaan, jossa yhdistyvät Yoga Nidra, Reiki-energia ja elävä gong-matka. Englanniksi.',
            fullDescription: 'Aloitamme ohjatulla Yoga Nidralla. Reiki-energia kudotaan koko iltaan tukemaan energian linjausta. Gongin taajuudet ohjaavat sinut syvän integraation tilaan. Alkaa klo 19:00, kesto 2 tuntia. Hinta 33€ (jäsenet 25€). Ei vaadi aiempaa kokemusta.',
            highlights: ['Yoga Nidra', 'Reiki-energia', 'Gong-matka', 'Hermoston palautuminen']
        }
    },
    {
        id: 'equinox-quantum-mar-20',
        type: 'studio',
        category: 'studio',
        active: true,
        featured: true,
        expiryDate: '2026-03-21',
        image: 'https://images.unsplash.com/photo-1552691021-7043334e0b51?auto=format&fit=crop&q=80&w=1200',
        gallery: [],
        teachers: ['marit-tuisk', 'david-lepp'],
        registerLink: '#contact',
        en: {
            title: 'Equinox Quantum Activation with Cacao & Gong',
            date: 'March 20, 2026',
            location: 'Goyoga Tallinn Studio',
            organizer: 'Marit & David (Casa Rituals)',
            description: 'The spring equinox is a moment where light and dark are in balance. It is the threshold of a new cycle.',
            fullDescription: 'We begin with ceremonial cacao to open the heart and tune consciously into what you are ready to invite into your life. We then move into a deep gong journey—a space of quantum sounds where the subconscious can softly retune. Bring a journal. Starts at 18:30, duration approx 3 hours. Price: 44€ (Members 33€).',
            highlights: ['Ceremonial Cacao', 'Quantum Sound Journey', 'Spring Equinox Activation', 'Journaling Prompt']
        },
        et: {
            title: 'Pööripäeva Quantum aktivatsioon Kakao ja Gongirännakuga',
            date: '20. märts 2026',
            location: 'Goyoga Tallinn Stuudio',
            organizer: 'Marit & David (Casa Rituals)',
            description: 'Kevadine pööripäev on hetk, kus valgus ja pimedus on tasakaalus. See on uue tsükli lävi.',
            fullDescription: 'Alustame tseremoniaalse kakaoga, et avada süda ja häälestuda teadlikult sellele, mida oled valmis oma ellu kutsuma. Seejärel liigume sügavasse gongirännakusse – kvanthelide ruumi. Helisagedused aitavad vabastada vanu mustreid. Võta kaasa päevik. Algus kell 18:30, kestus ca 3 tundi. 44 eurot, liikmetele 33 eurot.',
            highlights: ['Tseremoniaalne kakao', 'Kvanthelide rännak', 'Pööripäeva aktivatsioon', 'Refleksioon']
        },
        fi: {
            title: 'Päiväntasauksen Kvanttiaktivointi Kaakaolla ja Gongilla',
            date: '20. maaliskuuta 2026',
            location: 'Goyoga Tallinn Studio',
            organizer: 'Marit & David (Casa Rituals)',
            description: 'Kevätpäiväntasaus on hetki, jolloin valo ja pimeys ovat tasapainossa. Se on uuden syklin kynnys.',
            fullDescription: 'Aloitamme seremoniallisella kaakaolla sydämen avaamiseksi. Sitten siirrymme syvään gong-matkaan – kvanttiäänien tilaan, jossa alitajunta voi lempeästi virittyä uudelleen. Ota mukaan päiväkirja. Alkaa klo 18:30, kesto n. 3 tuntia. Hinta 44€ (jäsenet 33€).',
            highlights: ['Seremoniallinen kaakao', 'Kvanttiäänimatka', 'Kevätpäiväntasauksen aktivointi', 'Päiväkirja']
        }
    },
    {
        id: 'spring-fullmoon-restart-mar-31',
        type: 'studio',
        category: 'studio',
        active: true,
        featured: true,
        expiryDate: '2026-04-01',
        image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1200',
        gallery: [],
        teachers: ['marit-tuisk', 'david-lepp'],
        registerLink: '#contact',
        en: {
            title: 'Spring Full Moon Restart: Cacao & Gong',
            date: 'March 31, 2026',
            location: 'Goyoga Tallinn Studio',
            organizer: 'Marit & David (Casa Rituals)',
            description: 'The March 31 full moon brings clarity and movement into spring. A moment to consciously make an inner restart.',
            fullDescription: 'We begin with ceremonial cacao to open the heart and look honestly at what is ready to change. The light of the full moon helps illuminate growth and letting go. Then we move into a deep gong journey. The sound frequencies support the nervous system in recalibrating. Starts at 19:00, duration approx 2 hours. Price: 44€ (Members 33€).',
            highlights: ['Ceremonial Cacao', 'Full Moon Reflection', 'Deep Gong Journey', 'Nervous System Recalibration']
        },
        et: {
            title: 'Kevadine täiskuu restart: Kakao rituaal & gongirännak',
            date: '31. märts 2026',
            location: 'Goyoga Tallinn Stuudio',
            organizer: 'Marit & David (Casa Rituals)',
            description: '31. märtsi täiskuu toob kevadesse selguse ja liikumise. See on hetk, kus saad teadlikult teha sisemise restart’i.',
            fullDescription: 'Alustame tseremoniaalse kakaoga, et avada süda ja vaadata ausalt otsa sellele, mis on valmis muutuma. Täiskuu valgus aitab nähtavaks tuua nii kasvamise kui ka lahtilaskmise kohad. Seejärel liigume sügavasse gongirännakusse. Helisagedused toetavad närvisüsteemi ümberhäälestumist ja loovad ruumi uuele rütmile. Algus kell 19:00, kestus ca 2 tundi. 44 eurot, liikmetele 33 eurot.',
            highlights: ['Tseremoniaalne kakao', 'Täiskuu refleksioon', 'Gongirännak', 'Närvisüsteemi ümberhäälestumine']
        },
        fi: {
            title: 'Kevään täydenkuun uudelleenkäynnistys: Kaakao ja Gong',
            date: '31. maaliskuuta 2026',
            location: 'Goyoga Tallinn Studio',
            organizer: 'Marit & David (Casa Rituals)',
            description: 'Maaliskuun 31. päivän täysikuu tuo kevääseen selkeyttä ja liikettä. Hetki tietoisen sisäisen uudelleenkäynnistyksen tekemiseen.',
            fullDescription: 'Aloitamme seremoniallisella kaakaolla sydämen avaamiseksi. Täydenkuun valo auttaa tuomaan esiin kasvun ja irtipäästämisen paikat. Sitten siirrymme syvään gongimatkaan. Äänitaajuudet tukevat hermoston uudelleenvirittymistä. Alkaa klo 19:00, kesto n. 2 tuntia. Hinta 44€ (jäsenet 33€).',
            highlights: ['Seremoniallinen kaakao', 'Täydenkuun pohdinta', 'Gong-matka', 'Hermoston palautuminen']
        }
    },
    {
        id: 'morocco-spring-2026',
        type: 'retreat',
        category: 'abroad',
        country: { en: 'Morocco', et: 'Maroko', fi: 'Marokko' },
        active: true,
        featured: true,
        expiryDate: '2026-03-20',
        cardImage: 'assets/retreats/1-LandingPageCard-morocco-2026-goyoga-photo-baberrih-hotel-hospitality-palaces-resorts-essaouira-39-1024w.webp',
        headerImage: 'assets/retreats/2-EventPageHeader-morocco-2026-goyoga-photo-baberrih-hotel-hospitality-palaces-resorts-essaouira-39-1024w.webp',
        image: 'assets/retreats/1-LandingPageCard-morocco-2026-goyoga-photo-baberrih-hotel-hospitality-palaces-resorts-essaouira-39-1024w.webp',
        gallery: [
            'assets/retreats/3-photo-morocco-2026-goyoga-tallinn-baberrih-hotel-hospitality-palaces-resorts-essaouira-17-600w.webp',
            'assets/retreats/4-photo-morocco-2026-goyoga-tallinn-baberrih-hotel-hospitality-palaces-resorts-essaouira-19-600w.webp',
            'assets/retreats/5-photo-morocco-2026-goyoga-tallinn-baberrih-hotel-hospitality-palaces-resorts-essaouira-20-600w.webp',
            'assets/retreats/6-photo-morocco-2026-goyoga-tallinn-baberrih-hotel-hospitality-palaces-resorts-essaouira-29-600w.webp',
            'assets/retreats/7-photo-morocco-2026-goyoga-tallinn-baberrih-hotel-hospitality-palaces-resorts-essaouira-30-600w.webp',
            'assets/retreats/8-photo-morocco-2026-goyoga-tallinn-baberrih-hotel-hospitality-palaces-resorts-essaouira-36-600w.webp',
            'assets/retreats/9-photo-morocco-2026-goyoga-tallinn-baberrih-hotel-hospitality-palaces-resorts-essaouira-41-600w.webp',
            'assets/retreats/10-photo-morocco-2026-goyoga-tallinn-baberrih-hotel-hospitality-palaces-resorts-essaouira-61-600w.webp',
            'assets/retreats/11-photo-morocco-2026-goyoga-tallinn-baberrih-hotel-hospitality-palaces-resorts-essaouira-72-600w.webp',
            'assets/retreats/12-photo-morocco-2026-goyoga-tallinn-baberrih-hotel-hospitality-palaces-resorts-essaouira-74-600w.webp'
        ],
        teachers: ['raili-maripuu', 'lorena-rodrigo'],
        registerLink: 'mailto:events@goyoga.ee',
        en: {
            title: 'A Spring Wellness Retreat in Morocco',
            date: 'March 14-18, 2026',
            location: 'Essaouira, Morocco',
            organizer: 'Raili Maripuu & Lorena Rodrigo',
            description: 'A serene Moroccan paradise with sun, sea, and nourishing yoga blended with the exotic flavours of North Africa at the 5-star Baberrih Resort.',
            fullDescription: `
                <p class="mb-4">Join experienced teachers Raili Maripuu and Lorena Rodrigo for a 5-day Spring Wellness Retreat designed to help you rest, reconnect, and rejuvenate. Open to all levels, the retreat includes daily accessible yoga, breathwork, and sound meditations in a beautiful private setting.</p>
                <p class="mb-4">Mornings begin with energising practice by the ocean, afternoons invite deep rest with nourishing sound journeys, and evenings close with meditation under the stars. Nourish your body with delicious plant-based meals and immerse yourself in the warmth of Moroccan culture.</p>
                
                <h3 class="text-xl font-semibold text-gray-800 mt-8 mb-3 flex items-center"><span class="text-pink-500 mr-2">🌿</span> About Baberrih Resort</h3>
                <p class="mb-4"><a href="https://baberrih.com/" target="_blank" class="text-pink-600 hover:text-pink-800 underline">Baberrih Essaouira</a> is a 5-star oasis of peace on the Atlantic coast. A UNESCO World Heritage site, Essaouira is often described as Morocco’s best-kept treasure. Located on Tissa Beach, the resort offers the perfect harmony between modern comfort, nature, and soulful living.</p>
                
                <h3 class="text-xl font-semibold text-gray-800 mt-8 mb-3 flex items-center"><span class="text-pink-500 mr-2">🌿</span> Retreat Packages</h3>
                <p class="mb-4 italic">All prices are per person and include accommodation, meals, all yoga and meditation sessions, as well as airport transfers.</p>
                <ul class="list-none space-y-2 mb-4 pl-0">
                    <li class="font-medium"><strong>Standard Package (Shared villa | Garden view):</strong> £875 / 995€</li>
                    <li class="font-medium"><strong>Premium Package (Single villa | Garden view):</strong> £1,150 / 1,300€</li>
                </ul>
                <p class="mb-2 font-medium">Upgrades and add-ons:</p>
                <ul class="list-disc pl-5 space-y-1 mb-4">
                    <li>Sea view villas +25%</li>
                    <li>Companion (no classes) –20%</li>
                    <li>Private Reiki or Thai massage sessions from 75€ per hour</li>
                </ul>

                <h3 class="text-xl font-semibold text-gray-800 mt-8 mb-3 flex items-center"><span class="text-pink-500 mr-2">🌿</span> How to Get There</h3>
                <p class="mb-4">The fastest and most convenient flights to Essaouira operate through <strong>Marrakech</strong> and <strong>Agadir</strong> airports (both approx. 2.5 hours from Essaouira). Direct flights from the UK to Marrakech and Agadir are frequent and affordable, with return fares typically between £100–£200.</p>
                <p class="mb-4 font-medium">All airport transfers on retreat dates are included in your package.</p>

                <h3 class="text-xl font-semibold text-gray-800 mt-8 mb-3 flex items-center"><span class="text-pink-500 mr-2">🌿</span> Booking and Payment</h3>
                <p class="mb-4">To book your place or for more details, please email: <a href="mailto:events@goyoga.ee" class="text-pink-600 font-semibold hover:underline">events@goyoga.ee</a></p>
                <p class="mb-4">A <strong>non-refundable deposit of €/£200</strong> is required to secure your space. Full payment is due before the retreat and can be paid in instalments.</p>
                <div class="bg-gray-50 p-4 rounded-lg mb-4 text-sm font-mono text-gray-700">
                    <strong>GOYOGA ESTONIA</strong><br>
                    Bank: Wise<br>
                    Sort Code: 23-14-70<br>
                    Account: 60011952<br>
                    IBAN: GB17 TRWI 2314 7060 0119 52
                </div>
                
                <h4 class="font-semibold text-gray-800 mt-4 mb-2">Cancellation Policy:</h4>
                <ul class="list-disc pl-5 space-y-1 mb-4 text-sm">
                    <li>Less than 60 days: no refund</li>
                    <li>61–90 days: 50% refund (excluding deposit)</li>
                    <li>More than 91 days: 100% refund (excluding deposit)</li>
                </ul>
                <p class="italic text-sm text-gray-500 mb-8">Cancellations due to illness or major life events will be considered on a case-by-case basis.</p>
                
                <p class="font-medium text-lg text-center mb-2">We look forward to hosting you,</p>
                <p class="font-serif italic text-2xl text-center text-pink-600">Raili & Lorena xoxo</p>
            `,
            highlights: ['Luxury accommodation at Baberrih Resort', 'Daily Yoga, Breathwork & Sound Meditation', 'Locally sourced plant-based meals', 'Airport transfers included', 'Essaouira cultural experiences'],
            itinerary: [
                { day: '06:30 – 08:30', activity: 'Dynamic Morning Yoga Practice (incl Ashtanga self-practise)' },
                { day: '09:30 – 11:00', activity: 'Nourishing Brunch' },
                { day: '11:00 – 14:00', activity: 'Free time | Optional Group Activity' },
                { day: '16:00 – 17:00', activity: 'Gentle Afternoon Yoga' },
                { day: '17:00 – 18:00', activity: 'Sound Meditation | Breathwork | Personal Dev.' },
                { day: '18:30 – 20:00', activity: 'Dinner' },
                { day: '20:30 – 21:00', activity: 'Evening Meditation' }
            ]
        },
        et: {
            title: 'Kevadine heaolu retriit Marokos',
            date: '14.–18. märts 2026',
            location: 'Essaouira, Maroko',
            organizer: 'Raili Maripuu & Lorena Rodrigo',
            description: 'Rahulik Maroko paradiis päikese, mere ja elustava joogaga 5-tärni Baberrih Resortis Essaouiras.',
            fullDescription: `
                <p class="mb-4">Liitu kogenud õpetajate Raili Maripuu ja Lorena Rodrigoga 5-päevasel kevadisel heaolu retriidil, mis on loodud puhkamiseks ja uue energia kogumiseks. Avatud kõigile tasemetele, retriit sisaldab igapäevast ligipääsetavat joogat, hingamistööd ja helimeditatsioone kaunis privaatses keskkonnas.</p>
                <p class="mb-4">Hommikud algavad energiat andva praktikaga ookeani ääres, pärastlõunad kutsuvad sügavale puhkusele toitvate helirännakutega ning õhtud lõppevad meditatsiooniga tähtede all. Toida oma keha maitsvate taimsete toitudega ja sukeldu Maroko kultuuri soojusesse.</p>
                
                <h3 class="text-xl font-semibold text-gray-800 mt-8 mb-3 flex items-center"><span class="text-pink-500 mr-2">🌿</span> Baberrih Resortist</h3>
                <p class="mb-4"><a href="https://baberrih.com/" target="_blank" class="text-pink-600 hover:text-pink-800 underline">Baberrih Essaouira</a> on 5-tärni rahuoaas Atlandi ookeani rannikul. UNESCO maailmapärandi nimistusse kuuluvat Essaouirat kirjeldatakse sageli kui Maroko kõige paremini hoitud aaret. Tissa rannas asuv kuurort pakub täiuslikku harmooniat kaasaegse mugavuse, looduse ja hingestatud elu vahel.</p>
                
                <h3 class="text-xl font-semibold text-gray-800 mt-8 mb-3 flex items-center"><span class="text-pink-500 mr-2">🌿</span> Retriidi paketid</h3>
                <p class="mb-4 italic">Kõik hinnad on inimese kohta ja sisaldavad majutust, toitlustust, kõiki jooga- ja meditatsiooniseansse ning lennujaama transfeere.</p>
                <ul class="list-none space-y-2 mb-4 pl-0">
                    <li class="font-medium"><strong>Standard pakett (Jagatud villa | Aiavaade):</strong> 995€ / £875</li>
                    <li class="font-medium"><strong>Premium pakett (Privaatne villa | Aiavaade):</strong> 1300€ / £1,150</li>
                </ul>
                <p class="mb-2 font-medium">Lisasiid ja täiendused:</p>
                <ul class="list-disc pl-5 space-y-1 mb-4">
                    <li>Merevaatega villad +25%</li>
                    <li>Kaaslane (ilma tundideta) –20%</li>
                    <li>Privaatsed Reiki või Tai massaaži seansid alates 75€/tund</li>
                </ul>

                <h3 class="text-xl font-semibold text-gray-800 mt-8 mb-3 flex items-center"><span class="text-pink-500 mr-2">🌿</span> Kuidas kohale jõuda</h3>
                <p class="mb-4">Kõige kiirem ja mugavam viis Essaouirasse jõudmiseks on lennata <strong>Marrakechi</strong> või <strong>Agadiri</strong> lennujaama (mõlemad asuvad u 2,5 tunni kaugusel Essaouirast). Otselennud Ühendkuningriigist on sagedased ja taskukohased.</p>
                <p class="mb-4 font-medium">Kõik lennujaama transfeerid retriidi kuupäevadel on paketi hinnas.</p>

                <h3 class="text-xl font-semibold text-gray-800 mt-8 mb-3 flex items-center"><span class="text-pink-500 mr-2">🌿</span> Broneerimine ja tasumine</h3>
                <p class="mb-4">Koha broneerimiseks või lisainfo saamiseks saada e-kiri: <a href="mailto:events@goyoga.ee" class="text-pink-600 font-semibold hover:underline">events@goyoga.ee</a></p>
                <p class="mb-4">Oma koha kindlustamiseks on nõutav <strong>tagastamatu ettemaks 200€/£</strong>. Kogu summa tuleb tasuda enne retriiti ja seda on võimalik maksta osamaksetena.</p>
                <div class="bg-gray-50 p-4 rounded-lg mb-4 text-sm font-mono text-gray-700">
                    <strong>GOYOGA ESTONIA</strong><br>
                    Pank: Wise<br>
                    Kontokood (Sort Code): 23-14-70<br>
                    Konto nr: 60011952<br>
                    IBAN: GB17 TRWI 2314 7060 0119 52
                </div>
                
                <h4 class="font-semibold text-gray-800 mt-4 mb-2">Tühistamispoliitika:</h4>
                <ul class="list-disc pl-5 space-y-1 mb-4 text-sm">
                    <li>Vähem kui 60 päeva: raha ei tagastata</li>
                    <li>61–90 päeva: 50% tagastus (aluseks summast arvestatakse maha ettemaks)</li>
                    <li>Rohkem kui 91 päeva: 100% tagastus (välja arvatud ettemaks)</li>
                </ul>
                <p class="italic text-sm text-gray-500 mb-8">Haiguse või suurte elusündmuste tõttu tekkinud tühistamisi käsitletakse juhtumipõhiselt.</p>
                
                <p class="font-medium text-lg text-center mb-2">Ootame teid lennukalt võõrustama,</p>
                <p class="font-serif italic text-2xl text-center text-pink-600">Raili & Lorena xoxo</p>
            `,
            highlights: ['Luksuslik majutus Baberrih Resortis', 'Igapäevane jooga, hingamistöö ja helid', 'Taimne toit kohalikust toorainest', 'Lennujaama transfeerid hinnas', 'Essaouira kultuurikogemused'],
            itinerary: [
                { day: '06:30 – 08:30', activity: 'Dünaamiline hommikupraktika (sh Mysore)' },
                { day: '09:30 – 11:00', activity: 'Toitev hommikusöök' },
                { day: '11:00 – 14:00', activity: 'Vaba aeg | Ühised tegevused' },
                { day: '16:00 – 17:00', activity: 'Õhtupoolne leebe jooga' },
                { day: '17:00 – 18:00', activity: 'Helirännak | Hingamistöö | Eneseareng' },
                { day: '18:30 – 20:00', activity: 'Õhtusöök' },
                { day: '20:30 – 21:00', activity: 'Õhtune meditatsioon' }
            ]
        },
        fi: {
            title: 'Kevään hyvinvointiretriitti Marokossa',
            date: '14.–18. maaliskuuta 2026',
            location: 'Essaouira, Marokko',
            organizer: 'Raili Maripuu & Lorena Rodrigo',
            description: 'Seesteinen Marokon paratiisi auringon, meren ja ravitsevan joogan äärellä 5 tähden Baberrih Resortissa.',
            fullDescription: `
                <p class="mb-4">Tule mukaan kokeneiden opettajien Raili Maripuun ja Lorena Rodrigon 5 päivän kevätretriitille, joka on suunniteltu rentoutumiseen ja uusiutumiseen. Retriitti sopii kaikille tasoille ja sisältää päivittäistä joogaa, hengitystyöskentelyä ja äänimeditaatioita kauniissa yksityisessä ympäristössä.</p>
                <p class="mb-4">Aamut alkavat energisoivalla harjoituksella valtameren rannalla, iltapäivät kutsuvat syvään lepoon ravitsevien äänimatkojen avulla, ja illat päättyvät meditaatioon tähtien alla. Ravitse kehoasi herkullisilla kasvipohjaisilla aterioilla.</p>
                
                <h3 class="text-xl font-semibold text-gray-800 mt-8 mb-3 flex items-center"><span class="text-pink-500 mr-2">🌿</span> Tietoa Baberrih Resortista</h3>
                <p class="mb-4"><a href="https://baberrih.com/" target="_blank" class="text-pink-600 hover:text-pink-800 underline">Baberrih Essaouira</a> on 5 tähden rauhan keidas Atlantin rannikolla. Se sijaitsee Tissa-rannalla ja tarjoaa täydellisen tasapainon modernin mukavuuden, luonnon ja sielukkaan elämän välillä.</p>
                
                <h3 class="text-xl font-semibold text-gray-800 mt-8 mb-3 flex items-center"><span class="text-pink-500 mr-2">🌿</span> Retriittipaketit</h3>
                <p class="mb-4 italic">Kaikki hinnat ovat per henkilö ja sisältävät majoituksen, ateriat, kaikki jooga- ja meditaatiosessiot sekä lentokenttäkuljetukset.</p>
                <ul class="list-none space-y-2 mb-4 pl-0">
                    <li class="font-medium"><strong>Standard-paketti (Jaettu villa | Puutarhanäkymä):</strong> 995€ / £875</li>
                    <li class="font-medium"><strong>Premium-paketti (Yksityinen villa | Puutarhanäkymä):</strong> 1300€ / £1,150</li>
                </ul>

                <h3 class="text-xl font-semibold text-gray-800 mt-8 mb-3 flex items-center"><span class="text-pink-500 mr-2">🌿</span> Varaukset ja lisätiedot</h3>
                <p class="mb-4">Varaa paikkasi tai pyydä lisätietoja sähköpostitse: <a href="mailto:events@goyoga.ee" class="text-pink-600 font-semibold hover:underline">events@goyoga.ee</a></p>
                <p class="mb-8"><strong>200€ ei-palautettava varausmaksu</strong> vaaditaan paikan vahvistamiseksi.</p>

                <p class="font-medium text-lg text-center mb-2">Odotamme innolla tapaamistasi,</p>
                <p class="font-serif italic text-2xl text-center text-pink-600">Raili & Lorena xoxo</p>
            `,
            highlights: ['Ylellinen majoitus Baberrih Resortissa', 'Päivittäinen jooga ja äänimeditaatio', 'Paikallinen kasvisruoka', 'Lentokenttäkuljetukset sisältyvät', 'Essaouiran kulttuurikokemukset'],
            itinerary: [
                { day: '06:30 – 08:30', activity: 'Dynaaminen aamujooga (ml. Mysore)' },
                { day: '09:30 – 11:00', activity: 'Ravitseva brunssi' },
                { day: '11:00 – 14:00', activity: 'Vapaa-aika | Retket' },
                { day: '16:00 – 17:00', activity: 'Lempeä iltapäiväjooga' },
                { day: '17:00 – 18:00', activity: 'Äänimeditaatio | Hengitysharjoitus' },
                { day: '18:30 – 20:00', activity: 'Illallinen' },
                { day: '20:30 – 21:00', activity: 'Iltameditaatio' }
            ]
        }
    },
    {
        id: 'italy-retreat-2026',
        type: 'retreat',
        category: 'abroad',
        country: { en: 'Italy', et: 'Itaalia', fi: 'Italia' },
        active: true,
        featured: true,
        expiryDate: '2026-06-20',
        image: 'https://images.unsplash.com/photo-1523531294919-4bcd7c65e216', // Typical Tuscan/Lazio landscape representation
        gallery: [
            'https://images.unsplash.com/photo-1549488344-c27773295da9',
            'https://images.unsplash.com/photo-1516483638261-f40af5aa11ce',
            'https://images.unsplash.com/photo-1525016762309-803bba8080f5'
        ],
        teachers: ['raili-maripuu'],
        registerLink: 'mailto:events@goyoga.ee',
        en: {
            title: 'Ashtanga Yoga Retreat with Lino Miele',
            date: 'June 2026 (6 Days)',
            location: 'Casa La Martana, Italy',
            organizer: 'Goyoga Tallinn & Raili Maripuu',
            description: 'Join a small, exclusive group to practice with world-renowned Ashtanga teacher Lino Miele at his home shala in the serene Italian countryside.',
            fullDescription: `
                <p class="mb-4">Every year, one of the world's most renowned Ashtanga yoga teachers, Lino Miele, opens the doors of his home shala for four weeks to his students and Ashtanga enthusiasts.</p>
                <p class="mb-4">Lino's student and Ashtanga Estonia teacher, Raili Maripuu, visits annually to practice and has decided to offer an exclusive opportunity to join her in a small, intimate group of up to 10 people. Lino's home shala is located in a beautiful, secluded village in the Lazio region, about a 20-minute drive from the town of Tuscania. Going as a group makes logistics and accommodation seamless.</p>

                <h3 class="text-xl font-semibold text-gray-800 mt-8 mb-3 flex items-center"><span class="text-pink-500 mr-2">🌿</span> Casa La Martana</h3>
                <p class="mb-4">Our base camp is purely magical—<strong>Casa La Martana</strong>. This is where we will live, eat, and hang out together throughout the retreat, and where our afternoon activities will take place. This small B&B is near Tuscania and Lake Bolsena, about a 20-minute drive from Lino's shala.</p>
                <div class="mb-4 text-sm bg-gray-50 p-4 rounded-xl border border-gray-100 flex flex-col gap-2">
                    <a href="https://www.casalamartana.com" target="_blank" class="flex items-center text-pink-600 hover:text-pink-800 transition-colors"><i data-lucide="globe" class="h-4 w-4 mr-2"></i> casalamartana.com</a>
                    <a href="https://www.google.com/maps/search/?api=1&query=42.465822,11.902689" target="_blank" class="flex items-center text-pink-600 hover:text-pink-800 transition-colors"><i data-lucide="map-pin" class="h-4 w-4 mr-2"></i> View on Google Maps (42.465822, 11.902689)</a>
                    <a href="https://www.google.com/travel/search?q=Casa%20La%20Martana%0D%0A42.465822%2C%2011.902689&g2lb=4965990%2C72471280%2C72560029%2C72573224%2C72647020%2C72686036%2C72803964%2C72882230%2C72958624%2C73059275%2C73064764%2C121529350&hl=en-GB&gl=uk&ssta=1&ts=CAEaRwopEicyJTB4MTMyOGQxOTFmNjNmYTU3NToweDhhZTMyODkyMDZlM2EwZmMSGhIUCgcI6g8QAxgJEgcI6g8QAxgKGAEyAhAA&qs=CAEyFENnc0lfTUdPdDZDU3l2R0tBUkFCOAJCCQn8oOMGkijjikIJCfyg4waSKOOK&ap=ugEHcmV2aWV3cw&ictx=111&ved=0CAAQ5JsGahcKEwiIpsuOtIeTAxUAAAAAHQAAAAAQDg" target="_blank" class="flex items-center text-pink-600 hover:text-pink-800 transition-colors"><i data-lucide="star" class="h-4 w-4 mr-2"></i> Read Google Reviews</a>
                </div>
                <p class="mb-4">The former farmhouse has been completely renovated by a renowned Italian architect, incorporating old and natural building materials alongside modern comforts. Set on a 2-hectare property shaded by oaks, eucalyptus, bamboo, and olive trees, the estate features a swimming pool, jacuzzi, infrared room, private walking paths, and its own vegetable and herb garden. As of this year, the property also features its own dedicated yoga shala.</p>
                
                <h3 class="text-xl font-semibold text-gray-800 mt-8 mb-3 flex items-center"><span class="text-pink-500 mr-2">🌿</span> Program & Activities</h3>
                <p class="italic text-gray-500 mb-4">All timings are approximate.</p>
                <ul class="list-disc pl-5 space-y-2 mb-6">
                    <li><strong>06:30 – 09:00:</strong> Mysore practice with Lino Miele</li>
                    <li><strong>10:00 – 11:30:</strong> Nourishing Brunch</li>
                    <li><strong>12:00 – 14:00:</strong> Self-time & Relaxation at the B&B</li>
                    <li><strong>15:00 – 18:00:</strong> Organized Afternoon Activities
                        <ul class="list-circle pl-5 mt-2 text-sm text-gray-600">
                            <li>Asana LAB</li>
                            <li>Gita/Sutras discussions</li>
                            <li>Pranayama</li>
                            <li>Q&A with Lino Miele</li>
                            <li class="mt-2 font-medium">Excursion examples:</li>
                            <li>Boating on Lake Bolsena or visiting lakeside towns</li>
                            <li>Public thermal baths in Tuscany</li>
                            <li>Monte Argentario peninsula</li>
                        </ul>
                    </li>
                    <li><strong>19:00 – 20:30:</strong> Dinner</li>
                    <li><strong>21:00 – 21:30:</strong> Evening Meditation</li>
                </ul>

                <p class="mb-4 font-medium text-pink-600">Spaces are strictly limited to 10 participants to ensure an intimate and profound experience.</p>
            `,
            highlights: ['Practice with Lino Miele', 'Intimate group (Max 10)', 'Stay at Casa La Martana', 'Excursions to Lake Bolsena', 'Afternoon Asana LAB & Philosophy']
        },
        et: {
            title: 'Ashtanga jooga retriit Lino Mielega',
            date: 'Juuni 2026 (6 päeva)',
            location: 'Casa La Martana, Itaalia',
            organizer: 'Goyoga Tallinn & Raili Maripuu',
            description: 'Liitu väikese ja eksklusiivse grupiga, et praktiseerida maailmakuulsa Ashtanga õpetaja Lino Mielega tema kodushalas rahulikus Itaalia maapiirkonnas.',
            fullDescription: `
                <p class="mb-4">Igal aastal avab maailmas üks tuntumaid ashtanga jooga õpetajaid Lino Miele neljaks nädalaks oma kodushala uksed kõikidele oma õpilastele ja ashtanga jooga huvilistele.</p>
                <p class="mb-4">Lino õpilane ja Ashtanga Estonia õpetaja Raili Maripuu käib seal iga-aastaselt praktiseerimas ja otsustas sel aastal pakkuda meie shala õpilastele ja teistele Eestis praktiseerivatele ashtangidele välja võimaluse minna Lino juurde väikese kuni 10-pealise grupina. See mõte on eelkõige ajendatud sellest, et Lino kodushala Casale Lazio maakonnas (umbes 20min Tuscania linnast) ei asu nn käidavas kohas ja ilma oma transpordita on logistilised võimalused piiratud.</p>

                <h3 class="text-xl font-semibold text-gray-800 mt-8 mb-3 flex items-center"><span class="text-pink-500 mr-2">🌿</span> Casa La Martana</h3>
                <p class="mb-4">Meie laagri pidepunktiks on <strong>Casa la Martana</strong>, kus elame, sööme ja hängime koos kogu laagri vältel. Samuti toimuvad seal meie laagri pärastlõunased tegevused. Casa la Martana on väike B&B Tuscania linna ja Bolsena järve lähedal, Lino shalast ca 20min autosõidu kaugusel.</p>
                <div class="mb-4 text-sm bg-gray-50 p-4 rounded-xl border border-gray-100 flex flex-col gap-2">
                    <a href="https://www.casalamartana.com" target="_blank" class="flex items-center text-pink-600 hover:text-pink-800 transition-colors"><i data-lucide="globe" class="h-4 w-4 mr-2"></i> casalamartana.com</a>
                    <a href="https://www.google.com/maps/search/?api=1&query=42.465822,11.902689" target="_blank" class="flex items-center text-pink-600 hover:text-pink-800 transition-colors"><i data-lucide="map-pin" class="h-4 w-4 mr-2"></i> Vaata Google Mapsis (42.465822, 11.902689)</a>
                    <a href="https://www.google.com/travel/search?q=Casa%20La%20Martana%0D%0A42.465822%2C%2011.902689&g2lb=4965990%2C72471280%2C72560029%2C72573224%2C72647020%2C72686036%2C72803964%2C72882230%2C72958624%2C73059275%2C73064764%2C121529350&hl=en-GB&gl=uk&ssta=1&ts=CAEaRwopEicyJTB4MTMyOGQxOTFmNjNmYTU3NToweDhhZTMyODkyMDZlM2EwZmMSGhIUCgcI6g8QAxgJEgcI6g8QAxgKGAEyAhAA&qs=CAEyFENnc0lfTUdPdDZDU3l2R0tBUkFCOAJCCQn8oOMGkijjikIJCfyg4waSKOOK&ap=ugEHcmV2aWV3cw&ictx=111&ved=0CAAQ5JsGahcKEwiIpsuOtIeTAxUAAAAAHQAAAAAQDg" target="_blank" class="flex items-center text-pink-600 hover:text-pink-800 transition-colors"><i data-lucide="star" class="h-4 w-4 mr-2"></i> Loe Google'i arvustusi</a>
                </div>
                <p class="mb-4">Kunagine talumaja on täielikult renoveeritud ühe tuntud Itaalia arhitekti poolt, kasutades vanu ja looduslikke ehitusmaterjale koos kõikide kaasaegsete mugavustega. Lisaks majutusele on 2ha looduskaunil kinnistul (tammed, eukalüptid, bambus, oliivipuud) väike bassein, jacuzzi ja infrapuna ruum ning oma väikesed jooksu- ja kõnnirajad. Alates sellest aastast on majas olemas ka eraldi jooga shala.</p>
                
                <h3 class="text-xl font-semibold text-gray-800 mt-8 mb-3 flex items-center"><span class="text-pink-500 mr-2">🌿</span> Programm ja tegevused</h3>
                <p class="italic text-gray-500 mb-4">Kõik kellaajad on ligikaudsed.</p>
                <ul class="list-disc pl-5 space-y-2 mb-6">
                    <li><strong>06:30 – 09:00:</strong> Mysore Lino Mielega</li>
                    <li><strong>10:00 – 11:30:</strong> Brunch</li>
                    <li><strong>12:00 – 14:00:</strong> Vaba aeg</li>
                    <li><strong>15:00 – 18:00:</strong> Organiseeritud pärastlõunane tegevus
                        <ul class="list-circle pl-5 mt-2 text-sm text-gray-600">
                            <li>Asana LAB</li>
                            <li>Gita/Sutras discussion</li>
                            <li>Pranayama</li>
                            <li>Q&A Lino Mielega</li>
                            <li class="mt-2 font-medium">Väljasõitude näited:</li>
                            <li>Lago di Bolsena järv, paadisõit või järveäärsete linnade külastus</li>
                            <li>Toskaanas asuvad avalikud termid</li>
                            <li>Monte Argentario poolsaar, Toskaana</li>
                        </ul>
                    </li>
                    <li><strong>19:00 – 20:30:</strong> Õhtusöök</li>
                    <li><strong>21:00 – 21:30:</strong> Õhtune meditatsioon</li>
                </ul>

                <p class="mb-4 font-medium text-pink-600">Kohtade arv on rangelt piiratud (max 10 osalejat), et tagada personaalne ja sügav kogemus.</p>
            `,
            highlights: ['Praktika Lino Mielega', 'Väike grupp (Max 10)', 'Majutus Casa La Martanas', 'Väljasõidud ja ekskursioonid', 'Pärastlõunased töötoad ja Asana LAB']
        },
        fi: {
            title: 'Ashtanga-joogaretriitti Lino Mielen kanssa',
            date: 'Kesäkuu 2026 (6 päivää)',
            location: 'Casa La Martana, Italia',
            organizer: 'Goyoga Tallinn & Raili Maripuu',
            description: 'Liity pieneen ja eksklusiiviseen ryhmään harjoittelemaan maailmankuulun Ashtanga-opettajan Lino Mielen kanssa hänen kotishalassaan Italian maaseudulla.',
            fullDescription: `
                <p class="mb-4">Joka vuosi yksi maailman tunnetuimmista Ashtanga-joogan opettajista, Lino Miele, avaa kotishalansa ovet neljäksi viikoksi oppilailleen ja Ashtangan harrastajille.</p>
                <p class="mb-4">Linon oppilas ja Ashtanga Estonian opettaja Raili Maripuu vierailee siellä vuosittain ja tarjoaa nyt ainutlaatuisen mahdollisuuden liittyä hänen mukaansa pieneen, enintään 10 hengen ryhmään. Linon shala sijaitsee rauhallisessa Lazion alueen kylässä, jonne meneminen ryhmässä tekee logistiikasta ja majoituksesta vaivatonta.</p>

                <h3 class="text-xl font-semibold text-gray-800 mt-8 mb-3 flex items-center"><span class="text-pink-500 mr-2">🌿</span> Casa La Martana</h3>
                <p class="mb-4">Tukikohtamme on taianomainen <strong>Casa La Martana</strong> – pieni B&B lähellä Tuscaniaa ja Bolsenajärveä. Täällä asumme, syömme ja vietämme aikaa yhdessä. Entinen maalaistalo on täysin remontoitu yhdistäen vanhat luonnonmateriaalit nykyaikaisiin mukavuuksiin.</p>
                <div class="mb-4 text-sm bg-gray-50 p-4 rounded-xl border border-gray-100 flex flex-col gap-2">
                    <a href="https://www.casalamartana.com" target="_blank" class="flex items-center text-pink-600 hover:text-pink-800 transition-colors"><i data-lucide="globe" class="h-4 w-4 mr-2"></i> casalamartana.com</a>
                    <a href="https://www.google.com/maps/search/?api=1&query=42.465822,11.902689" target="_blank" class="flex items-center text-pink-600 hover:text-pink-800 transition-colors"><i data-lucide="map-pin" class="h-4 w-4 mr-2"></i> Katso Google Mapsissa (42.465822, 11.902689)</a>
                    <a href="https://www.google.com/travel/search?q=Casa%20La%20Martana%0D%0A42.465822%2C%2011.902689&g2lb=4965990%2C72471280%2C72560029%2C72573224%2C72647020%2C72686036%2C72803964%2C72882230%2C72958624%2C73059275%2C73064764%2C121529350&hl=en-GB&gl=uk&ssta=1&ts=CAEaRwopEicyJTB4MTMyOGQxOTFmNjNmYTU3NToweDhhZTMyODkyMDZlM2EwZmMSGhIUCgcI6g8QAxgJEgcI6g8QAxgKGAEyAhAA&qs=CAEyFENnc0lfTUdPdDZDU3l2R0tBUkFCOAJCCQn8oOMGkijjikIJCfyg4waSKOOK&ap=ugEHcmV2aWV3cw&ictx=111&ved=0CAAQ5JsGahcKEwiIpsuOtIeTAxUAAAAAHQAAAAAQDg" target="_blank" class="flex items-center text-pink-600 hover:text-pink-800 transition-colors"><i data-lucide="star" class="h-4 w-4 mr-2"></i> Lue Google-arvostelut</a>
                </div>
                <p class="mb-4">Kaksiehtarisella tontilla on uima-allas, poreallas, infrapunasauna ja omat kävelyreitit, sekä oma uusi joogashala.</p>
                
                <h3 class="text-xl font-semibold text-gray-800 mt-8 mb-3 flex items-center"><span class="text-pink-500 mr-2">🌿</span> Ohjelma ja aktiviteetit</h3>
                <ul class="list-disc pl-5 space-y-2 mb-6">
                    <li><strong>06:30 – 09:00:</strong> Mysore-harjoitus Lino Mielen kanssa</li>
                    <li><strong>10:00 – 11:30:</strong> Brunssi</li>
                    <li><strong>12:00 – 14:00:</strong> Vapaa-aika</li>
                    <li><strong>15:00 – 18:00:</strong> Iltapäivän aktiviteetit (Asana LAB, filosofia, hengitysharjoitukset, sekä retkiä mm. Bolsenajärvelle ja Toscanan kuumille lähteille)</li>
                    <li><strong>19:00 – 20:30:</strong> Illallinen</li>
                    <li><strong>21:00 – 21:30:</strong> Iltameditaatio</li>
                </ul>

                <p class="mb-4 font-medium text-pink-600">Paikkoja on rajoitetusti (max 10), jotta voimme taata henkilökohtaisen ja syvällisen kokemuksen.</p>
            `,
            highlights: ['Harjoitus Lino Mielen kanssa', 'Intiimi ryhmä (Max 10)', 'Majoitus Casa La Martanassa', 'Retkiä ja yhdessäoloa', 'Iltapäivän työpajat']
        }
    },
    {
        id: 'uk-retreat-2026',
        type: 'retreat',
        category: 'abroad',
        country: { en: 'United Kingdom', et: 'Inglismaa', fi: 'Iso-Britannia' },
        active: true,
        featured: true,
        expiryDate: '2026-08-30',
        image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad', // London/UK vibe
        gallery: [
            'https://images.unsplash.com/photo-1505205296326-2178af1b4fb4', // UK Countryside/Oxford
            'https://images.unsplash.com/photo-1488747279002-c8523379faaa', // London
            'https://images.unsplash.com/photo-1621252179027-94459d278660' // Reading/UK town
        ],
        teachers: ['raili-maripuu'],
        registerLink: 'mailto:events@goyoga.ee',
        en: {
            title: 'Know Your Teacher: UK Summer Camp',
            date: 'August 2026 (7 Days)',
            location: 'Reading | London | Oxford | Windsor',
            organizer: 'Goyoga Tallinn & Raili Maripuu',
            description: 'Experience the Parampara tradition. Spend a week practicing in teacher Raili\'s home shala in Reading, combined with cultural trips across the UK.',
            fullDescription: `
                <h3 class="text-xl font-semibold text-gray-800 mt-8 mb-3 flex items-center"><span class="text-pink-500 mr-2">🇬🇧</span> Know Your Teacher</h3>
                <p class="mb-4">In yoga philosophy, it is said that you only truly get to know your teacher by being in their environment, spending time with their family, sharing meals, and simply being with them.</p>
                <p class="mb-4">In Ashtanga yoga, the <em>Parampara</em> tradition is essential. This means the teachings are passed down practically one-on-one or in a very small circle to ensure the authenticity of the practice remains close to the original source.</p>
                
                <h3 class="text-xl font-semibold text-gray-800 mt-8 mb-3 flex items-center"><span class="text-pink-500 mr-2">🧘‍♀️</span> Practice & Tradition</h3>
                <p class="mb-4">In addition to running and teaching at the Ashtanga Estonia shala, teacher Raili also teaches in her hometown in England—both in her own home shala and at the <a href="https://yogareading.co.uk/" target="_blank" class="text-pink-600 hover:text-pink-800 underline">Yoga Reading</a> studio.</p>
                <p class="mb-4">We started the tradition of the England camp in 2022, and it unexpectedly became an immediate hit! Therefore, we are thrilled to announce our Summer Yoga Camp in England for 2026.</p>
                <p class="mb-4">This retreat includes a proper, traditional, and intensive week of Ashtanga yoga from Monday to Saturday. Expect 6 days filled with non-stop yoga, pranayama, meditation, technique, and philosophy.</p>

                <h3 class="text-xl font-semibold text-gray-800 mt-8 mb-3 flex items-center"><span class="text-pink-500 mr-2">🗺️</span> The Itinerary</h3>
                <ul class="list-disc pl-5 space-y-2 mb-6">
                    <li><strong>3 Days</strong> of practice in teacher Raili's home shala in <strong>Reading</strong>.</li>
                    <li><strong>2 Days</strong> of Mysore practice at <a href="https://ashtangayogalondon.com/" target="_blank" class="text-pink-600 hover:text-pink-800 underline">Ashtanga Yoga London</a>.</li>
                    <li>Participation in a special workshop in Reading (e.g., with Hamish Hendry), offering a super opportunity to practice alongside the UK Ashtanga community.</li>
                    <li><strong>Cultural Experiences:</strong> We will hang out and explore the sights of London, the historic university city of <a href="https://oxford.org/" target="_blank" class="text-pink-600 hover:text-pink-800 underline">Oxford</a>, and the royal town of <a href="https://www.windsor.gov.uk/" target="_blank" class="text-pink-600 hover:text-pink-800 underline">Windsor</a>.</li>
                </ul>
            `,
            highlights: ['Parampara tradition experience', 'Practice in Raili\'s home shala', 'Practice at Ashtanga Yoga London', 'Cultural trips to Oxford & Windsor', 'Connect with the UK Ashtanga community']
        },
        et: {
            title: 'Tunne Oma Õpetajat: Inglismaa laager',
            date: 'August 2026 (7 päeva)',
            location: 'Reading | London | Oxford | Windsor',
            organizer: 'Goyoga Tallinn & Raili Maripuu',
            description: 'Koge Parampara traditsiooni. Veeda nädal praktiseerides õpetaja Raili kodushalas Readingus, kombineerituna kultuurireisidega üle Inglismaa.',
            fullDescription: `
                <h3 class="text-xl font-semibold text-gray-800 mt-8 mb-3 flex items-center"><span class="text-pink-500 mr-2">🇬🇧</span> Tunne oma õpetajat</h3>
                <p class="mb-4">Jooga filosoofias öeldakse, et oma õpetajat saad Sa tõeliselt tundma ainult viibides tema enda keskkonnas, olles tema perega, jagades toidukordi ja temaga aega viites.</p>
                <p class="mb-4">Ashtanga joogas on oluline <em>parampara</em> traditsioon. See tähendab, et õpetus antakse edasi praktiliselt üks-ühele või väga väikeses ringis, et tagada õpetuse autentsus ja ligilähedus originaalile. Eestlaste mõttemaailmas on see väga sarnane folkloorile.</p>
                
                <h3 class="text-xl font-semibold text-gray-800 mt-8 mb-3 flex items-center"><span class="text-pink-500 mr-2">🧘‍♀️</span> Praktika ja traditsioon</h3>
                <p class="mb-4">Lisaks Ashtanga Estonia shala pidamisele ja õpetamisele annab õpetaja Raili tunde ka oma elukohas Inglismaal – nii enda kodushalas kui ka <a href="https://yogareading.co.uk/" target="_blank" class="text-pink-600 hover:text-pink-800 underline">Yoga Reading'u</a> stuudios.</p>
                <p class="mb-4">Inglismaa laagri traditsiooniga tegime algust 2022. aastal ja sellest sai ootamatult kohe suur hitt! Seetõttu on meil ülihea meel välja hõigata Suvine joogalaager Inglismaal.</p>
                <p class="mb-4">See sisaldab ühte korralikku traditsioonilist ja intensiivset Ashtanga jooga nädalat esmaspäevast laupäevani. See on 6 joogat täis päeva – non-stop joogat, pranayamat, meditatsiooni, tehnikat ja filosoofiat.</p>

                <h3 class="text-xl font-semibold text-gray-800 mt-8 mb-3 flex items-center"><span class="text-pink-500 mr-2">🗺️</span> Laagri kava</h3>
                <ul class="list-disc pl-5 space-y-2 mb-6">
                    <li><strong>3 päeva</strong> praktiseerime õpetaja Raili kodushalas <strong>Reading'us</strong>.</li>
                    <li><strong>2 päeva</strong> teeme Mysore praktikat <a href="https://ashtangayogalondon.com/" target="_blank" class="text-pink-600 hover:text-pink-800 underline">Ashtanga Yoga Londonis</a>.</li>
                    <li>Osaleme workshopil Reading'us (nt. Hamish Hendryga) – super võimalus joogatada koos UK ashtanga kogukonnaga.</li>
                    <li><strong>Kultuurielamused:</strong> Hängime ja naudime kultuurielamusi Londonis, <a href="https://oxford.org/" target="_blank" class="text-pink-600 hover:text-pink-800 underline">Oxfordis</a> ja <a href="https://www.windsor.gov.uk/" target="_blank" class="text-pink-600 hover:text-pink-800 underline">Windsoris</a>.</li>
                </ul>
            `,
            highlights: ['Parampara traditsiooni kogemus', 'Praktika Raili kodushalas', 'Praktika Ashtanga Yoga Londonis', 'Kultuurireisid Oxfordi ja Windsori', 'Tutvumine UK Ashtanga kogukonnaga']
        },
        fi: {
            title: 'Tunne Opettajasi: Englannin leiri',
            date: 'Elokuu 2026 (7 päivää)',
            location: 'Reading | Lontoo | Oxford | Windsor',
            organizer: 'Goyoga Tallinn & Raili Maripuu',
            description: 'Koe Parampara-perinne. Vietä viikko harjoitellen opettaja Railin kotishalassa Readingissa yhdistettynä kulttuuriretkiin ympäri Englantia.',
            fullDescription: `
                <h3 class="text-xl font-semibold text-gray-800 mt-8 mb-3 flex items-center"><span class="text-pink-500 mr-2">🇬🇧</span> Tunne opettajasi</h3>
                <p class="mb-4">Joogafilosofiassa sanotaan, että opit tuntemaan opettajasi todella vain olemalla hänen ympäristössään, viettämällä aikaa hänen perheensä kanssa ja jakamalla aterioita.</p>
                <p class="mb-4">Ashtanga-joogassa <em>Parampara</em>-perinne on elintärkeä. Tämä tarkoittaa, että opetukset siirretään käytännössä yksi kerrallaan tai hyvin pienessä piirissä, jotta harjoituksen aitous säilyy lähellä alkuperäistä lähdettä.</p>
                
                <h3 class="text-xl font-semibold text-gray-800 mt-8 mb-3 flex items-center"><span class="text-pink-500 mr-2">🧘‍♀️</span> Harjoitus ja perinne</h3>
                <p class="mb-4">Ashtanga Estonia -shalan johtamisen lisäksi opettaja Raili opettaa kotikaupungissaan Englannissa – sekä omassa kotishalassaan että <a href="https://yogareading.co.uk/" target="_blank" class="text-pink-600 hover:text-pink-800 underline">Yoga Reading</a> -studiolla.</p>
                <p class="mb-4">Aloitimme Englannin leirin perinteen vuonna 2022, ja siitä tuli odottamattoman suuri hitti! Siksi olemme innoissamme voidessamme julkistaa vuoden 2026 Kesäjoogaleirin Englannissa.</p>
                <p class="mb-4">Leiri sisältää intensiivisen, perinteisen Ashtanga-joogaviikon maanantaista lauantaihin. Odotettavissa on 6 päivää täynnä tauotonta joogaa, pranayamaa, meditaatiota, tekniikkaa ja filosofiaa.</p>

                <h3 class="text-xl font-semibold text-gray-800 mt-8 mb-3 flex items-center"><span class="text-pink-500 mr-2">🗺️</span> Leirin ohjelma</h3>
                <ul class="list-disc pl-5 space-y-2 mb-6">
                    <li><strong>3 päivää</strong> harjoittelemme opettaja Railin kotishalassa <strong>Readingissa</strong>.</li>
                    <li><strong>2 päivää</strong> teemme Mysore-harjoitusta <a href="https://ashtangayogalondon.com/" target="_blank" class="text-pink-600 hover:text-pink-800 underline">Ashtanga Yoga Londonissa</a>.</li>
                    <li>Osallistuminen workshopiin Readingissa, mikä on upea mahdollisuus harjoitella yhdessä Britannian Ashtanga-yhteisön kanssa.</li>
                    <li><strong>Kulttuurielämykset:</strong> Vietämme aikaa ja nautimme nähtävyyksistä Lontoossa, <a href="https://oxford.org/" target="_blank" class="text-pink-600 hover:text-pink-800 underline">Oxfordissa</a> ja kuninkaallisessa <a href="https://www.windsor.gov.uk/" target="_blank" class="text-pink-600 hover:text-pink-800 underline">Windsorissa</a>.</li>
                </ul>
            `,
            highlights: ['Parampara-perinteen kokeminen', 'Harjoitus Railin kotishalassa', 'Harjoitus Ashtanga Yoga Londonissa', 'Kulttuuriretket Oxfordiin ja Windsoriin', 'Tutustuminen Britannian Ashtanga-yhteisöön']
        }
    },
    {
        id: 'india-retreat-2026',
        type: 'retreat',
        category: 'abroad',
        country: { en: 'India', et: 'India', fi: 'Intia' },
        active: true,
        featured: true,
        expiryDate: '2027-02-28',
        image: 'https://images.unsplash.com/photo-1596711425164-90fd727a89e9', // Kovalam/Kerala vibe
        gallery: [
            'https://images.unsplash.com/photo-1602216056096-3b40cc0f5310', // Kerala Backwaters
            'https://images.unsplash.com/photo-1544735716-392fe2489ffa', // Yoga silhouette
            'https://images.unsplash.com/photo-1510425463958-dcced28da480' // Indian culture
        ],
        teachers: ['raili-maripuu'],
        registerLink: 'mailto:events@goyoga.ee',
        en: {
            title: 'Ashtanga Intensive with Lino Miele',
            date: 'December 12 - 27, 2026',
            location: 'Kovalam Beach, Kerala, India',
            organizer: 'Goyoga Tallinn & Raili Maripuu',
            description: 'Travel to the heart of Kerala to join the traditional Ashtanga Yoga intensive workshop led by world-renowned teacher Lino Miele.',
            fullDescription: `
                <h3 class="text-xl font-semibold text-gray-800 mt-8 mb-3 flex items-center"><span class="text-pink-500 mr-2">🇮🇳</span> The Motherland of Yoga</h3>
                <p class="mb-4">Raili Maripuu, a dedicated Ashtanga Yoga teacher for Ashtanga Estonia and based in Reading, UK, has been a devoted student of <a href="http://www.linomiele.com/kovalam.html" target="_blank" class="text-pink-600 hover:text-pink-800 underline">Lino Miele</a> since 2010.</p>
                <p class="mb-4">She regularly travels to Kovalam, Kerala, to participate in Miele's annual intensive workshops. These legendary retreats are renowned for being his longest-running programs, lasting up to two months each year.</p>
                <p class="mb-4">We are actively gathering a group of dedicated practitioners to join Raili on this profound journey to southern India.</p>
                
                <h3 class="text-xl font-semibold text-gray-800 mt-8 mb-3 flex items-center"><span class="text-pink-500 mr-2">🌴</span> Kovalam Beach, Kerala</h3>
                <p class="mb-4">The training takes place at the vibrant and beautiful <a href="https://www.keralatourism.org/destination/kovalam-beach/15" target="_blank" class="text-pink-600 hover:text-pink-800 underline">Kovalam Beach</a> in Kerala. This location draws over 500 students and teachers from around the globe every year, creating an incredible, buzzing international Ashtanga community.</p>
                <p class="mb-4">Between practices, Kerala (often referred to as "God's Own Country") offers stunning beaches, traditional Ayurvedic treatments, incredible South Indian cuisine, and the famous tranquil backwaters to explore.</p>

                <h3 class="text-xl font-semibold text-gray-800 mt-8 mb-3 flex items-center"><span class="text-pink-500 mr-2">🧘‍♀️</span> The Practice</h3>
                <p class="mb-4">These sessions focus purely on the traditional Ashtanga Yoga method. The training includes:</p>
                <ul class="list-disc pl-5 space-y-2 mb-6">
                    <li>Daily Mysore style practice and LED classes in the Vinyasa system.</li>
                    <li>Traditional hands-on adjustments directly from Lino Miele and his senior assistants.</li>
                    <li>In-depth study of the Primary and Advanced series.</li>
                    <li>Afternoon philosophy, Pranayama, and Q&A sessions.</li>
                </ul>
                <p class="mb-4 italic text-gray-500">Note: This is an intensive traditional study trip requiring dedication to the morning practice schedule.</p>
            `,
            highlights: ['Practice with Lino Miele in India', 'Traditional Mysore & LED classes', 'Experience Kovalam, Kerala', 'Ayurvedic treatments & culture', 'Join a global Ashtanga community']
        },
        et: {
            title: 'Ashtanga intensiiv Lino Mielega',
            date: '12. - 27. Detsember 2026',
            location: 'Kovalam, Kerala, India',
            organizer: 'Goyoga Tallinn & Raili Maripuu',
            description: 'Reisi Kerala südamesse ja liitu traditsioonilise Ashtanga jooga intensiivlaagriga, mida juhendab maailmakuulus õpetaja Lino Miele.',
            fullDescription: `
                <h3 class="text-xl font-semibold text-gray-800 mt-8 mb-3 flex items-center"><span class="text-pink-500 mr-2">🇮🇳</span> Jooga emamaa</h3>
                <p class="mb-4">Ashtanga Estonia pühendunud õpetaja Raili Maripuu on olnud maailmakuulsa õpetaja <a href="http://www.linomiele.com/kovalam.html" target="_blank" class="text-pink-600 hover:text-pink-800 underline">Lino Miele</a> õpilane alates 2010. aastast.</p>
                <p class="mb-4">Ta reisib regulaarselt Indiasse, Keralasse, Kovalemi, et osaleda Miele iga-aastastes intensiivsetes töötubades. Need on legendaarsed laagrid, olles tema kõige pikemalt toimuvad programmid, kestes iga kord kuni kaks kuud.</p>
                <p class="mb-4">Kogume gruppi pühendunud praktiseerijatest, et ühineda Railiga sellel sügaval joogareisil Lõuna-Indiasse.</p>
                
                <h3 class="text-xl font-semibold text-gray-800 mt-8 mb-3 flex items-center"><span class="text-pink-500 mr-2">🌴</span> Kovalemi rand, Kerala</h3>
                <p class="mb-4">Treeningud toimuvad elavas ja kaunis <a href="https://www.keralatourism.org/destination/kovalam-beach/15" target="_blank" class="text-pink-600 hover:text-pink-800 underline">Kovalemi rannas</a> Keralas. See asukoht tõmbab igal aastal ligi üle 500 õpilase ja õpetaja kogu maailmast, luues uskumatu ja sumiseva rahvusvahelise Ashtanga kogukonna.</p>
                <p class="mb-4">Praktikate vahel pakub Kerala (mida sageli nimetatakse "Jumala omaks maaks") vapustavaid randu, traditsioonilisi Ayurveda hooldusi, uskumatut Lõuna-India kööki ning kuulsaid rahulikke backwater'eid avastamiseks.</p>

                <h3 class="text-xl font-semibold text-gray-800 mt-8 mb-3 flex items-center"><span class="text-pink-500 mr-2">🧘‍♀️</span> Praktika</h3>
                <p class="mb-4">Need sessioonid keskenduvad puhtalt traditsioonilisele Ashtanga jooga meetodile. Programm hõlmab:</p>
                <ul class="list-disc pl-5 space-y-2 mb-6">
                    <li>Igapäevane Mysore stiilis praktika ja LED-tunnid vinyasa süsteemis.</li>
                    <li>Traditsioonilised käelised parandused (adjustments) otse Lino Mielelt ja tema vanem-assistentidelt.</li>
                    <li>Esimese ja edasijõudnute (Advanced) seeriate süvaõpe.</li>
                    <li>Pärastlõunased filosoofia, Pranayama ja Q&A sessioonid.</li>
                </ul>
                <p class="mb-4 italic text-gray-500">Märkus: See on intensiivne traditsiooniline õppereis, mis nõuab pühendumist hommikuse praktika graafikule.</p>
            `,
            highlights: ['Praktika Lino Mielega Indias', 'Traditsioonilised Mysore ja LED tunnid', 'Kovalemi kogemine, Kerala', 'Ayurveda hoolitsused ja kultuur', 'Kuulumine globaalsesse Ashtanga kogukonda']
        },
        fi: {
            title: 'Ashtanga-intensiivi Lino Mielen kanssa',
            date: '12. - 27. Joulukuu 2026',
            location: 'Kovalam, Kerala, Intia',
            organizer: 'Goyoga Tallinn & Raili Maripuu',
            description: 'Matkusta Keralan sydämeen ja liity perinteiselle Ashtanga-joogan intensiivileirille, jota vetää maailmankuulu opettaja Lino Miele.',
            fullDescription: `
                <h3 class="text-xl font-semibold text-gray-800 mt-8 mb-3 flex items-center"><span class="text-pink-500 mr-2">🇮🇳</span> Joogan äitimaa</h3>
                <p class="mb-4">Ashtanga Estonian opettaja Raili Maripuu on ollut maailmankuulun opettajan <a href="http://www.linomiele.com/kovalam.html" target="_blank" class="text-pink-600 hover:text-pink-800 underline">Lino Mielen</a> omistautunut oppilas vuodesta 2010 alkaen.</p>
                <p class="mb-4">Hän matkustaa säännöllisesti Kovalamiin, Keralaan osallistuakseen Mielen vuosittaisiin intensiivileireihin. Nämä legendaariset retriitit ovat hänen pisimpään käynnissä olleita ohjelmiaan, kestäen jopa kaksi kuukautta joka vuosi.</p>
                <p class="mb-4">Kokoamme omistautuneiden harjoittelijoiden ryhmää liittymään Railin mukaan tälle syvälliselle matkalle Etelä-Intiaan.</p>
                
                <h3 class="text-xl font-semibold text-gray-800 mt-8 mb-3 flex items-center"><span class="text-pink-500 mr-2">🌴</span> Kovalam Beach, Kerala</h3>
                <p class="mb-4">Harjoittelu tapahtuu eloisalla ja kauniilla <a href="https://www.keralatourism.org/destination/kovalam-beach/15" target="_blank" class="text-pink-600 hover:text-pink-800 underline">Kovalamin rannalla</a> Keralassa. Tämä sijainti vetää puoleensa yli 500 opiskelijaa ja opettajaa ympäri maailmaa joka vuosi, luoden uskomattoman kansainvälisen Ashtanga-yhteisön.</p>
                <p class="mb-4">Harjoitusten välissä Kerala tarjoaa upeita rantoja, perinteisiä Ayurveda-hoitoja, uskomatonta eteläintialaista ruokaa ja kuuluisia rauhallisia suvantovesiä tutkittavaksi.</p>

                <h3 class="text-xl font-semibold text-gray-800 mt-8 mb-3 flex items-center"><span class="text-pink-500 mr-2">🧘‍♀️</span> Harjoitus</h3>
                <p class="mb-4">Nämä istunnot keskittyvät puhtaasti perinteiseen Ashtanga-joogamenetelmään. Koulutus sisältää:</p>
                <ul class="list-disc pl-5 space-y-2 mb-6">
                    <li>Päivittäinen Mysore-tyylinen harjoitus ja ohjatut tunnit Vinyasa-järjestelmässä.</li>
                    <li>Perinteiset fyysiset avustukset suoraan Lino Mieleltä ja hänen vanhemmilta apulaisiltaan.</li>
                    <li>Ensimmäisen ja edistyneen sarjan syväluotaava opiskelu.</li>
                    <li>Iltapäivän filosofiaa, Pranayamaa ja kysymys-vastaus -istuntoja.</li>
                </ul>
                <p class="mb-4 italic text-gray-500">Huomio: Tämä on intensiivinen perinteinen opintomatka, joka vaatii sitoutumista aamuharjoituksen aikatauluun.</p>
            `,
            highlights: ['Harjoitus Lino Mielen kanssa Intiassa', 'Perinteiset Mysore- ja ohjatut tunnit', 'Kovalam, Kerala', 'Ayurveda ja kulttuuri', 'Liity globaaliin yhteisöön']
        }
    },
];
