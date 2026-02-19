/**
 * GoYoga Events & Retreats Data
 * 
 * Fields:
 * - id: Unique identifier (used for deep linking)
 * - type: 'studio' (local) or 'retreat' (external)
 * - category: 'estonia' or 'abroad' (for retreats)
 * - active: Boolean to manual disable
 * - featured: Boolean to show on homepage (max 3)
 * - date: Display date string
 * - expiryDate: ISO date string (event drops off site after this date)
 * - image: URL to represent the event
 * - registerLink: URL for registration (e.g., Hopitude or Email)
 */

const eventsData = [
    {
        id: 'spring-rejuvenation-2026',
        type: 'retreat',
        category: 'estonia',
        active: true,
        featured: true,
        expiryDate: '2026-04-20',
        image: 'https://bookretreats.com/cdn-cgi/image/width=1200,quality=65,f=auto,sharpen=1,fit=cover,gravity=auto/assets/photo/retreat/0m/29k/29132/p_1142181/1000_1692081290.jpg',
        registerLink: '#contact',
        en: {
            title: 'Spring Rejuvenation Retreat',
            date: 'April 15-18, 2026',
            location: 'Estonian Countryside',
            description: 'A 4-day immersive retreat in the Estonian countryside. Deepen your practice with daily yoga, meditation, and healthy vegetarian meals.',
            organizer: 'Organized by GoYoga'
        },
        et: {
            title: 'Kevadine värskendusretriit',
            date: '15.-18. aprill 2026',
            location: 'Eestimaa loodus',
            description: '4-päevane süvenenud retriit Eesti looduses. Süvenda oma praktikat igapäevase jooga, meditatsiooni ja tervisliku taimetoiduga.',
            organizer: 'Korraldaja: GoYoga'
        },
        fi: {
            title: 'Kevään uudistumisretriitti',
            date: '15.-18. huhtikuuta 2026',
            location: 'Viron maaseutu',
            description: '4 päivän syventävä retriitti Viron maaseudulla. Syvennä harjoitustasi päivittäisellä joogalla, meditaatiolla ja terveellisellä kasvisruoalla.',
            organizer: 'Järjestäjä: GoYoga'
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
        registerLink: '#contact',
        en: {
            title: 'Mastering Inversions Workshop',
            date: 'May 5, 2026',
            location: 'GoYoga Studio',
            description: 'Join us to build the strength and confidence to master headstands, handstands, and other inversions safely with traditional methods.',
            organizer: 'Organized by GoYoga'
        },
        et: {
            title: 'Pöördasendite meisterdamise töötuba',
            date: '5. mai 2026',
            location: 'GoYoga Stuudio',
            description: 'Tule ja arenda jõudu ning enesekindlust, et vallutada pea- ja kätelseisud ning teised pöördasendid turvaliselt.',
            organizer: 'Korraldaja: GoYoga'
        },
        fi: {
            title: 'Päälläseisonta- ja inversiotyöpaja',
            date: '5. toukokuuta 2026',
            location: 'GoYoga Studio',
            description: 'Tule rakentamaan voimaa ja itseluottamusta päälläseisonnan ja muiden inversioiden hallitsemiseen turvallisesti.',
            organizer: 'Järjestäjä: GoYoga'
        }
    },
    {
        id: 'cacao-ceremony-june-2026',
        type: 'studio',
        category: 'local',
        active: true,
        featured: true,
        expiryDate: '2026-06-25',
        image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b',
        registerLink: '#contact',
        en: {
            title: 'Summer Solstice Cacao Ceremony',
            date: 'June 21, 2026',
            location: 'GoYoga Studio',
            description: 'A sacred journey of heart-opening medicine, sound, and deep meditation to welcome the summer light.',
            organizer: 'Joint event: GoYoga & Marit Tuisk'
        },
        et: {
            title: 'Suvise pööripäeva kakaotseremoonia',
            date: '21. juuni 2026',
            location: 'GoYoga Stuudio',
            description: 'Südant avav rännak kakaomeditsiini, helide ja sügava meditatsiooniga, et tervitada suvist valgust.',
            organizer: 'Ühissündmus: GoYoga ja Marit Tuisk'
        },
        fi: {
            title: 'Kesäpäivänseisauksen kaakaoseremonia',
            date: '21. kesäkuuta 2026',
            location: 'GoYoga Studio',
            description: 'Sydäntä avaava matka kaakaon, äänien ja syvän meditaation parissa kesän valoa juhlistettaessa.',
            organizer: 'Yhteistyössä: GoYoga & Marit Tuisk'
        }
    },
    {
        id: 'bali-retreat-2026',
        type: 'retreat',
        category: 'abroad',
        active: true,
        featured: false,
        expiryDate: '2026-11-20',
        image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4',
        registerLink: '#contact',
        en: {
            title: 'Bali Spirit & Soul Retreat',
            date: 'November 10-20, 2026',
            location: 'Ubud, Bali',
            description: 'A transformative 10-day journey in the heart of Bali. Experience daily Ashtanga, cultural immersions, and lush tropical serenity.',
            organizer: 'Organized by GoYoga'
        },
        et: {
            title: 'Bali vaimu ja hinge retriit',
            date: '10.-20. november 2026',
            location: 'Ubud, Bali',
            description: 'Transformatiivne 10-päevane rännak Bali südames. Igapäevane Ashtanga, kultuurilised elamused ja troopiline vaikus.',
            organizer: 'Korraldaja: GoYoga'
        },
        fi: {
            title: 'Balin henki ja sielu -retriitti',
            date: '10.-20. marraskuuta 2026',
            location: 'Ubud, Bali',
            description: 'Muuttava 10 päivän matka Balin sydämessä. Koe päivittäinen Ashtanga, kulttuurikokemukset ja trooppinen tyyni.',
            organizer: 'Järjestäjä: GoYoga'
        }
    }
];
