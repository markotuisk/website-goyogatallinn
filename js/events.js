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
        image: 'https://images.unsplash.com/photo-1533669952565-df096f42a033', // Beautiful Moroccan riad/coast
        gallery: [
            'https://images.unsplash.com/photo-1548013146-72479768bbaa',
            'https://images.unsplash.com/photo-1550100136-e092101726f4',
            'https://images.unsplash.com/photo-1539650116574-8efeb43e2750'
        ],
        teachers: ['raili-maripuu', 'lorena-rodrigo'],
        registerLink: 'mailto:events@goyoga.ee',
        en: {
            title: 'A Spring Wellness Retreat in Morocco',
            date: 'March 14-18, 2026',
            location: 'Essaouira, Morocco',
            organizer: 'Raili Maripuu & Lorena Rodrigo',
            description: 'A serene Moroccan paradise with sun, sea, and nourishing yoga blended with the exotic flavours of North Africa at the 5-star Baberrih Resort.',
            fullDescription: 'Join experienced teachers Raili Maripuu and Lorena Rodrigo for a 5-day Spring Wellness Retreat designed to help you rest, reconnect, and rejuvenate. Located on Tissa Beach, Baberrih Resort offers the perfect harmony between modern comfort, nature, and soulful living. Open to all levels.',
            highlights: ['Luxury accommodation at Baberrih Resort', 'Daily Yoga, Breathwork & Sound Meditation', 'Locally sourced plant-based meals', 'Airport transfers included', 'Essaouira cultural experiences'],
            itinerary: [
                { day: '06:30 – 08:30', activity: 'Dynamic Morning Yoga Practice' },
                { day: '09:30 – 11:00', activity: 'Nourishing Brunch' },
                { day: '11:00 – 14:00', activity: 'Free time | Optional Group Activity' },
                { day: '16:00 – 17:00', activity: 'Gentle Afternoon Yoga' },
                { day: '17:00 – 18:00', activity: 'Sound Meditation | Breathwork' },
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
            fullDescription: 'Liitu kogenud õpetajate Raili Maripuu ja Lorena Rodrigoga 5-päevasel kevadisel heaolu retriidil, mis on loodud puhkamiseks ja uue energia kogumiseks. Baberrih Resort asub Tissa rannas, pakkudes täiuslikku harmooniat kaasaegse mugavuse, looduse ja hingestatud elu vahel.',
            highlights: ['Luksuslik majutus Baberrih Resortis', 'Igapäevane jooga, hingamistöö ja helid', 'Taimne toit kohalikust toorainest', 'Lennujaama transfeerid hinnas', 'Essaouira kultuurikogemused'],
            itinerary: [
                { day: '06:30 – 08:30', activity: 'Dünaamiline hommikupraktika' },
                { day: '09:30 – 11:00', activity: 'Toitev hommikusöök' },
                { day: '11:00 – 14:00', activity: 'Vaba aeg | Ühised tegevused' },
                { day: '16:00 – 17:00', activity: 'Õhtupoolne leebe jooga' },
                { day: '17:00 – 18:00', activity: 'Helirännak | Hingamistöö' },
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
            fullDescription: 'Tule mukaan kokeneiden opettajien Raili Maripuun ja Lorena Rodrigon 5 päivän kevätretriitille, joka on suunniteltu rentoutumiseen ja uusiutumiseen. Baberrih Resort tarjoaa täydellisen tasapainon mukavuuden ja luonnon välillä.',
            highlights: ['Ylellinen majoitus Baberrih Resortissa', 'Päivittäinen jooga ja äänimeditaatio', 'Paikallinen kasvisruoka', 'Lentokenttäkuljetukset sisältyvät', 'Essaouiran kulttuurikokemukset'],
            itinerary: [
                { day: '06:30 – 08:30', activity: 'Dynaaminen aamujooga' },
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
        image: 'https://images.unsplash.com/photo-1523531294919-4bcd7c65e216',
        teachers: ['raili-maripuu'],
        registerLink: 'mailto:events@goyoga.ee',
        en: {
            title: 'Summer Retreat in Italy',
            date: 'June 2026',
            location: 'Tuscany, Italy',
            organizer: 'Goyoga Tallinn',
            description: 'A soulful yoga journey in the heart of Tuscany. Details coming soon.',
            highlights: ['Tuscan villa stay', 'Daily Ashtanga', 'Italian culinary experiences']
        },
        et: {
            title: 'Suvine joogaretriit Itaalias',
            date: 'Juuni 2026',
            location: 'Toscana, Itaalia',
            organizer: 'Goyoga Tallinn',
            description: 'Hingestatud joogarännak Toscana südames. Detailid peagi tulekul.',
            highlights: ['Majutus Toscanavillas', 'Igapäevane Ashtanga', 'Itaalia köögi maitsed']
        },
        fi: {
            title: 'Kesäretriitti Italiassa',
            date: 'Kesäkuu 2026',
            location: 'Toscana, Italia',
            organizer: 'Goyoga Tallinn',
            description: 'Sielukas joogamatka Toscanan sydämessä. Tiedot tulossa pian.',
            highlights: ['Majoitus Toscanan maaseudulla', 'Päivittäinen Ashtanga', 'Italialaisia makuelämyksiä']
        }
    },
    {
        id: 'uk-retreat-2026',
        type: 'retreat',
        category: 'abroad',
        country: { en: 'United Kingdom', et: 'Inglismaa', fi: 'Iso-Britannia' },
        active: true,
        featured: true,
        expiryDate: '2026-09-20',
        image: 'https://images.unsplash.com/photo-1510051644265-934cb991865e',
        teachers: ['raili-maripuu'],
        registerLink: 'mailto:events@goyoga.ee',
        en: {
            title: 'Autumn Retreat in the UK',
            date: 'September 2026',
            location: 'English Countryside',
            organizer: 'Goyoga Tallinn',
            description: 'Reconnect with nature in the serene English countryside. Details coming soon.',
            highlights: ['Luxury lodge stay', 'Mindful practice', 'Nature walks']
        },
        et: {
            title: 'Sügisene retriit Inglismaal',
            date: 'September 2026',
            location: 'Inglise maapiirkond',
            organizer: 'Goyoga Tallinn',
            description: 'Loo taas ühendus loodusega Inglise maapiirkonna vaikuses. Detailid peagi tulekul.',
            highlights: ['Luksuslik majutus', 'Teadlik praktika', 'Loodusmatkad']
        },
        fi: {
            title: 'Syysretriitti Englannissa',
            date: 'Syyskuu 2026',
            location: 'Englannin maaseutu',
            organizer: 'Goyoga Tallinn',
            description: 'Palaa luonnon ääreen Englannin maaseudun rauhassa. Tiedot tulossa pian.',
            highlights: ['Ylellinen lodgemajoitus', 'Tietoinen harjoitus', 'Luontoretket']
        }
    },
    {
        id: 'india-retreat-2026',
        type: 'retreat',
        category: 'abroad',
        country: { en: 'India', et: 'India', fi: 'Intia' },
        active: true,
        featured: true,
        expiryDate: '2026-12-20',
        image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa',
        teachers: ['raili-maripuu'],
        registerLink: 'mailto:events@goyoga.ee',
        en: {
            title: 'Sacred India Journey',
            date: 'December 2026',
            location: 'Mysuru, India',
            organizer: 'Goyoga Tallinn',
            description: 'A traditional journey to the source of Ashtanga Yoga. Details coming soon.',
            highlights: ['Traditional practice', 'Cultural immersion', 'Spiritual sites']
        },
        et: {
            title: 'Püha India rännak',
            date: 'Detsember 2026',
            location: 'Mysuru, India',
            organizer: 'Goyoga Tallinn',
            description: 'Traditsiooniline rännak Ashtanga jooga algallikateni. Detailid peagi tulekul.',
            highlights: ['Traditsiooniline praktika', 'Kultuurilised elamused', 'Pühapaigad']
        },
        fi: {
            title: 'Pyhä Intian matka',
            date: 'Joulukuu 2026',
            location: 'Mysuru, Intia',
            organizer: 'Goyoga Tallinn',
            description: 'Perinteinen matka Ashtanga-joogan lähteille. Tiedot tulossa pian.',
            highlights: ['Perinteinen harjoitus', 'Kulttuurikokemukset', 'Henkiset kohteet']
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
