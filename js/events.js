/**
 * GoYoga Events & Retreats Data
 */

const eventsData = [
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
        registerLink: '#contact',
        en: {
            title: 'Spring Rejuvenation Retreat',
            date: 'April 15-18, 2026',
            location: 'Lahemaa National Park',
            organizer: 'Organized by GoYoga',
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
            organizer: 'Korraldaja: GoYoga',
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
            organizer: 'Järjestäjä: GoYoga',
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
        registerLink: '#contact',
        en: {
            title: 'Bali Spirit & Soul Retreat',
            date: 'November 10-20, 2026',
            location: 'Ubud, Bali',
            organizer: 'Organized by GoYoga',
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
            organizer: 'Korraldaja: GoYoga',
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
            organizer: 'Järjestäjä: GoYoga',
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
        category: 'local',
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
            location: 'GoYoga Studio',
            organizer: 'Organized by GoYoga',
            description: 'Join us to build the strength and confidence to master headstands, handstands, and other inversions safely with traditional methods.',
            fullDescription: 'Ready to flip your perspective? This 3-hour intensive workshop focuses on the mechanics and mindset of being upside down. We will break down headstands, forearm balances, and handstands into manageable steps.',
            highlights: ['Shoulder & Core stability drills', 'Safe falling techniques', 'Wall & Partner work', 'Personalized alignment tips']
        },
        et: {
            title: 'Pöördasendite meisterdamise töötuba',
            date: '5. mai 2026',
            location: 'GoYoga Stuudio',
            organizer: 'Korraldaja: GoYoga',
            description: 'Tule ja arenda jõudu ning enesekindlust, et vallutada pea- ja kätelseisud ning teised pöördasendid turvaliselt.',
            fullDescription: 'Valmis perspektiivi muutma? See 3-tunnine intensiivne töötuba keskendub pöördasendite mehaanikale ja mõttemaailmale.',
            highlights: ['Õlad ja kere stabiilsus', 'Turvaline kukkumine', 'Seina ja partneriga töö', 'Personaalne tagasiside']
        },
        fi: {
            title: 'Päälläseisonta- ja inversiotyöpaja',
            date: '5. toukokuuta 2026',
            location: 'GoYoga Studio',
            organizer: 'Järjestäjä: GoYoga',
            description: 'Tule rakentamaan voimaa ja itseluottamusta päälläseisonnan ja muiden inversioiden hallitsemiseen turvallisesti.',
            fullDescription: 'Valmis kääntämään maailmasi ylösalaisin? Tämä 3 tunnin työpaja keskittyy inversioiden tekniikkaan ja hallintaan.',
            highlights: ['Voima ja vakaus', 'Turvallinen laskeutuminen', 'Seinä- ja pariharjoitukset', 'Henkilökohtainen ohjaus']
        }
    }
];
