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
        image: 'https://images.unsplash.com/photo-1542452331-50e82c57fa4c?auto=format&fit=crop&q=80&w=1200',
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
        active: true,
        featured: true,
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
        id: 'spring-rejuvenation-2026',
        type: 'retreat',
        category: 'estonia',
        country: { en: 'Estonia', et: 'Eesti', fi: 'Viro' },
        active: true,
        featured: true,
        expiryDate: '2026-04-20',
        image: 'https://bookretreats.com/cdn-cgi/image/width=1200,quality=65,f=auto,sharpen=1,fit=cover,gravity=auto/assets/photo/retreat/0m/29k/29132/p_1142181/1000_1692081290.jpg',
        gallery: [
            'https://images.unsplash.com/photo-1545205597-3d9d02c29597',
            'https://images.unsplash.com/photo-1506126613408-eca07ce68773',
            'https://images.unsplash.com/photo-1552691021-7043334e0b51'
        ],
        teachers: ['raili-maripuu'],
        registerLink: '#contact',
        en: {
            title: 'Spring Rejuvenation Retreat',
            date: 'April 15-18, 2026',
            location: 'Lahemaa National Park',
            organizer: 'Organized by Goyoga Tallinn',
            description: 'A 4-day immersive retreat in the Estonian countryside. Deepen your practice with daily yoga, meditation, and healthy vegetarian meals.',
            fullDescription: 'Join us for a transformative spring journey in the heart of Lahemaa. This retreat is designed to shed the winter layers and invite new energy through traditional Ashtanga practice, forest walks, and guided meditations. You will be staying in a beautiful eco-lodge, nourished by local organic food.',
            highlights: ['Daily Mysore & Led classes', 'Guided forest bathing', 'Sauna rituals', 'Organic vegetarian meals'],
            itinerary: [
                { day: 'Day 1', activity: 'Arrival, Opening Circle & Evening Gentleness' },
                { day: 'Day 2-3', activity: 'Early Morning Practice, Workshop, Free Time & Meditation' },
                { day: 'Day 4', activity: 'Morning Practice & Closing Ritual' }
            ]
        },
        et: {
            title: 'Kevadine värskendusretriit',
            date: '15.-18. aprill 2026',
            location: 'Lahemaa rahvuspark',
            organizer: 'Korraldaja: Goyoga Tallinn',
            description: '4-päevane süvenenud retriit Eesti looduses. Süvenda oma praktikat igapäevase jooga, meditatsiooni ja tervisliku taimetoiduga.',
            fullDescription: 'Liitu meiega transformatiivsel kevadisel rännakul Lahemaa südames. See retriit on loodud talvekihtide maharaputamiseks ja uue energia kutsumiseks läbi traditsioonilise Ashtanga praktika, metsapaisutuste ja juhitud meditatsioonide.',
            highlights: ['Igapäevane Mysore ja Led tund', 'Metsasuplus', 'Saunarituaalid', 'Kohalik mahetoit'],
            itinerary: [
                { day: '1. päev', activity: 'Saabumine, avaring ja õhtune jooga' },
                { day: '2.-3. päev', activity: 'Varahommikune praktika, töötuba, vaba aeg ja meditatsioon' },
                { day: '4. päev', activity: 'Hommikune praktika ja lõpuring' }
            ]
        },
        fi: {
            title: 'Kevään uudistumisretriitti',
            date: '15.-18. huhtikuuta 2026',
            location: 'Lahemaan kansallispuisto',
            organizer: 'Järjestäjä: Goyoga Tallinn',
            description: '4 päivän syventävä retriitti Viron maaseudulla. Syvennä harjoitustasi päivittäisellä joogalla, meditaatiolla ja terveellisellä kasvisruoalla.',
            fullDescription: 'Tule mukaan uudistavalle kevätmatkalle Lahemaan sydämeen. Retriitti on suunniteltu karistamaan talven pölyt ja kutsumaan uutta energiaa perinteisen Ashtangan ja luonnon avulla.',
            highlights: ['Päivittäiset Mysore-tunnit', 'Metsäkylpy', 'Saunarituaalit', 'Luomuruokaa'],
            itinerary: [
                { day: 'Päivä 1', activity: 'Saapuminen, avauspiiri ja iltajooga' },
                { day: 'Päivä 2-3', activity: 'Aamuharjoitus, työpaja, vapaa-aika ja meditaatio' },
                { day: 'Päivä 4', activity: 'Aamuharjoitus ja päätösrituaali' }
            ]
        }
    },
    {
        id: 'bali-spirit-2026',
        type: 'retreat',
        category: 'abroad',
        country: { en: 'Indonesia', et: 'Indoneesia', fi: 'Indonesia' },
        active: true,
        featured: true,
        expiryDate: '2026-11-20',
        image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4',
        gallery: [
            'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4',
            'https://images.unsplash.com/photo-1537944434965-cf4679d1a598',
            'https://images.unsplash.com/photo-1518709268805-4e9042af9f23'
        ],
        teachers: ['raili-maripuu'],
        registerLink: '#contact',
        en: {
            title: 'Bali Spirit & Soul Retreat',
            date: 'November 10-20, 2026',
            location: 'Ubud, Bali',
            organizer: 'Organized by Goyoga Tallinn',
            description: 'A transformative 10-day journey in the heart of Bali. Experience daily Ashtanga, cultural immersions, and lush tropical serenity.',
            fullDescription: 'Ubud is the spiritual beating heart of Bali. Join Raili Maripuu for 10 days of deep practice amidst rice paddies and tropical jungles. This retreat is for those looking to disconnect from the noise and reconnect with their essence.',
            highlights: ['Daily Mysore style practice', 'Traditional Balinese blessing', 'Rice paddy trekking', 'Holistic spa treatments'],
            itinerary: [
                { day: 'Day 1', activity: 'Welcome Dinner & Ubud Introduction' },
                { day: 'Day 2-9', activity: 'Early Practice, Breakfast, Excursions/Spa, Evening Yin' },
                { day: 'Day 10', activity: 'Farewell Practice & Transit' }
            ]
        },
        et: {
            title: 'Bali vaimu ja hinge retriit',
            date: '10.-20. november 2026',
            location: 'Ubud, Bali',
            organizer: 'Korraldaja: Goyoga Tallinn',
            description: 'Transformatiivne 10-päevane rännak Bali südames. Igapäevane Ashtanga, kultuurilised elamused ja troopiline vaikus.',
            fullDescription: 'Ubud on Bali vaimne süda. Liitu Raili Maripuuga 10-päevaseks süvapraktikaks riisipõldude ja troopiliste džunglite vahel.',
            highlights: ['Igapäevane Mysore praktika', 'Traditsiooniline Bali õnnistus', 'Rännakud riisipõldudel', 'Holistilised spaahoolitsused'],
            itinerary: [
                { day: '1. päev', activity: 'Tervitusõhtusöök ja sissejuhatus' },
                { day: '2.-9. päev', activity: 'Varajane praktika, hommikusöök, ekskursioonid, õhtune Yin' },
                { day: '10. päev', activity: 'Hüvastijätupraktika ja kojusõit' }
            ]
        },
        fi: {
            title: 'Balin henki ja sielu -retriitti',
            date: '10.-20. marraskuuta 2026',
            location: 'Ubud, Bali',
            organizer: 'Järjestäjä: Goyoga Tallinn',
            description: 'Muuttava 10 päivän matka Balin sydämessä. Koe päivittäinen Ashtanga, kulttuurikokemukset ja trooppinen tyyni.',
            fullDescription: 'Ubud on Balin henkinen keskus. Tule Raili Maripuun mukaan 10 päivän syventävään harjoitukseen riisipeltojen ja viidakon katveessa.',
            highlights: ['Päivittäinen Mysore-harjoitus', 'Perinteinen balilainen siunaus', 'Vaellukset riisipelloilla', 'Kokonaisvaltaiset hoidot'],
            itinerary: [
                { day: 'Päivä 1', activity: 'Tervetuliaisillallinen ja opastus' },
                { day: 'Päivä 2-9', activity: 'Aamuharjoitus, aamiainen, retket, ilta-Yin' },
                { day: 'Päivä 10', activity: 'Päätösharjoitus ja kuljetus' }
            ]
        }
    },
    {
        id: 'inversions-workshop-2026',
        type: 'studio',
        category: 'studio',
        active: true,
        featured: true,
        expiryDate: '2026-05-10',
        image: 'https://www.playpausebe.com/wp-content/uploads/2022/10/Mastering-Inversion-Yoga-Poses-A-Guide-to-Headstand.webp',
        gallery: [
            'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b',
            'https://images.unsplash.com/photo-1599447421416-3414500d18a5'
        ],
        registerLink: '#contact',
        en: {
            title: 'Mastering Inversions Workshop',
            date: 'May 5, 2026',
            location: 'Goyoga Tallinn Studio',
            organizer: 'Organized by Goyoga Tallinn',
            description: 'Join us to build the strength and confidence to master headstands, handstands, and other inversions safely with traditional methods.',
            fullDescription: 'Ready to flip your perspective? This 3-hour intensive workshop focuses on the mechanics and mindset of being upside down. We will break down headstands, forearm balances, and handstands into manageable steps.',
            highlights: ['Shoulder & Core stability drills', 'Safe falling techniques', 'Wall & Partner work', 'Personalized alignment tips']
        },
        et: {
            title: 'Pöördasendite meisterdamise töötuba',
            date: '5. mai 2026',
            location: 'Goyoga Tallinn Stuudio',
            organizer: 'Korraldaja: Goyoga Tallinn',
            description: 'Tule ja arenda jõudu ning enesekindlust, et vallutada pea- ja kätelseisud ning teised pöördasendid turvaliselt.',
            fullDescription: 'Valmis perspektiivi muutma? See 3-tunnine intensiivne töötuba keskendub pöördasendite mehaanikale ja mõttemaailmale.',
            highlights: ['Õlad ja kere stabiilsus', 'Turvaline kukkumine', 'Seina ja partneriga töö', 'Personaalne tagasiside']
        },
        fi: {
            title: 'Päälläseisonta- ja inversiotyöpaja',
            date: '5. toukokuuta 2026',
            location: 'Goyoga Tallinn Studio',
            organizer: 'Järjestäjä: Goyoga Tallinn',
            description: 'Tule rakentamaan voimaa ja itseluottamusta päälläseisonnan ja muiden inversioiden hallitsemiseen turvallisesti.',
            fullDescription: 'Valmis kääntämään maailmasi ylösalaisin? Tämä 3 tunnin työpaja keskittyy inversioiden tekniikkaan ja hallintaan.',
            highlights: ['Voima ja vakaus', 'Turvallinen laskeutuminen', 'Seinä- ja pariharjoitukset', 'Henkilökohtainen ohjaus']
        }
    }
];
