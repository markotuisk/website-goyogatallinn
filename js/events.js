/**
 * Goyoga Tallinn Events & Retreats Data
 */

const eventsData = [
    {
        id: 'italy-retreat-2026',
        type: 'retreat',
        category: 'abroad',
        country: { en: 'Italy', et: 'Itaalia', fi: 'Italia' },
        active: true,
        featured: true,
        startDate: '2026-08-01',
        expiryDate: '2026-08-08',
        startTime: '08:00',
        endTime: '11:00',
        price: 0,
        memberPrice: 0,
        image: 'https://images.unsplash.com/photo-1523531294919-4bcd7c65e216',
        gallery: [
            'https://images.unsplash.com/photo-1549488344-c27773295da9',
            'https://images.unsplash.com/photo-1516483638261-f40af5aa11ce',
            'https://images.unsplash.com/photo-1525016762309-803bba8080f5'
        ],
        teachers: ['raili-maripuu'],
        registerLink: 'mailto:events@goyoga.ee',
        en: {
            title: 'Ashtanga Yoga Retreat with Lino Miele',
            date: 'August 1–7, 2026',
            location: 'Casa La Martana, Italy',
            organizer: 'Goyoga Tallinn & Raili Maripuu',
            description: 'Join a small, exclusive group to practice with world-renowned Ashtanga teacher Lino Miele at his home shala in the serene Italian countryside.',
            fullDescription: `
                <p class="mb-4">Every year, one of the world's most renowned Ashtanga yoga teachers, Lino Miele, opens the doors of his home shala for four weeks to his students and Ashtanga enthusiasts.</p>
                <p class="mb-4">Lino's student and Ashtanga Estonia teacher, Raili Maripuu, visits annually to practice and has decided to offer an exclusive opportunity to join her in a small, intimate group of up to 10 people. Lino's home shala is located in a beautiful, secluded village in the Lazio region, about a 20-minute drive from the town of Tuscania. Going as a group makes logistics and accommodation seamless.</p>

                <h3 class="text-xl font-semibold text-gray-800 mt-8 mb-3 flex items-center"><span class="text-pink-500 mr-2">🌿</span> Casa La Martana</h3>
                <p class="mb-4">Our base camp is purely magical—<strong>Casa La Martana</strong>. This is where we will live, eat, and hang out together throughout the retreat, and where our afternoon activities will take place. This small B&B is near Tuscania and Lake Bolsena, about a 20-minute drive from Lino's shala.</p>
                <p class="mb-4">The former farmhouse has been completely renovated by a renowned Italian architect and features a pool, jacuzzi, and dedicated yoga shala.</p>
                
                <h3 class="text-xl font-semibold text-gray-800 mt-8 mb-3 flex items-center"><span class="text-pink-500 mr-2">🌿</span> Program & Activities</h3>
                <ul class="list-disc pl-5 space-y-2 mb-6">
                    <li><strong>06:30 – 09:00:</strong> Mysore practice with Lino Miele</li>
                    <li><strong>10:00 – 11:30:</strong> Nourishing Brunch</li>
                    <li><strong>15:00 – 18:00:</strong> Organized Afternoon Activities</li>
                    <li><strong>19:00 – 20:30:</strong> Dinner</li>
                </ul>

                <p class="mb-4 font-medium text-pink-600">Price: TBD. Spaces are strictly limited to 10 participants.</p>
            `,
            highlights: ['Practice with Lino Miele', 'Intimate group (Max 10)', 'Stay at Casa La Martana', 'Excursions to Lake Bolsena', 'Afternoon Asana LAB & Philosophy']
        },
        et: {
            title: 'Ashtanga jooga retriit Lino Mielega',
            date: '1.–7. august 2026',
            location: 'Casa La Martana, Itaalia',
            organizer: 'Goyoga Tallinn & Raili Maripuu',
            description: 'Liitu väikese ja eksklusiivse grupiga, et praktiseerida maailmakuulsa Ashtanga õpetaja Lino Mielega tema kodushalas rahulikus Itaalia maapiirkonnas.',
            fullDescription: `
                <p class="mb-4">Igal aastal avab maailmas üks tuntumaid ashtanga jooga õpetajaid Lino Miele neljaks nädalaks oma kodushala uksed kõigile huvilistele.</p>
                <p class="mb-4">Meie laagri pidepunktiks on <strong>Casa la Martana</strong>, kus elame ja hängime koos. See väike B&B asub Tuscania linna lähedal.</p>
                
                <h3 class="text-xl font-semibold text-gray-800 mt-8 mb-3 flex items-center"><span class="text-pink-500 mr-2">🌿</span> Programm</h3>
                <ul class="list-disc pl-5 space-y-2 mb-6">
                    <li><strong>06:30 – 09:00:</strong> Mysore Lino Mielega</li>
                    <li><strong>10:00 – 11:30:</strong> Brunch</li>
                    <li><strong>19:00:</strong> Õhtusöök</li>
                </ul>

                <p class="mb-4 font-medium text-pink-600">Hind: TBD. Kohtade arv on piiratud (max 10).</p>
            `,
            highlights: ['Praktika Lino Mielega', 'Väike grupp (Max 10)', 'Majutus Casa La Martanas', 'Väljasõidud ja ekskursioonid']
        },
        fi: {
            title: 'Ashtanga-joogaretriitti Lino Mielen kanssa',
            date: '1.–7. elokuuta 2026',
            location: 'Casa La Martana, Italia',
            organizer: 'Goyoga Tallinn & Raili Maripuu',
            description: 'Liity pieneen ja eksklusiiviseen ryhmään harjoittelemaan maailmankuulun Ashtanga-opettajan Lino Mielen kanssa hänen kotishalassaan Italiassa.',
            fullDescription: `
                <p class="mb-4">Lino Miele avaa kotishalansa ovet oppilailleen. Tukikohtamme on taianomainen <strong>Casa La Martana</strong>.</p>
                <p class="mb-4 font-medium">Hinta: TBD. Paikkoja on rajoitetusti (max 10).</p>
            `,
            highlights: ['Harjoitus Lino Mielen kanssa', 'Intiimi ryhmä (Max 10)', 'Majoitus Casa La Martanassa']
        },
        ru: {
            title: 'Ретрит Аштанга-йоги с Лино Миэле',
            date: '1–7 августа 2026',
            location: 'Casa La Martana, Италия',
            organizer: 'Goyoga Tallinn & Raili Maripuu',
            description: 'Присоединитесь к небольшой группе для практики со всемирно известным учителем Аштанги Лино Миэле.',
            fullDescription: 'Редкая возможность практиковать непосредственно с Лино Миэле в его личной шале в Италии. Цена: TBD.',
            highlights: ['Мисор Аштанга', 'Практика с Лино Миэле', 'Итальянская деревня']
        }
    },
    {
        id: 'uk-retreat-2026',
        type: 'retreat',
        category: 'abroad',
        country: { en: 'United Kingdom', et: 'Inglismaa', fi: 'Iso-Britannia' },
        active: true,
        featured: true,
        startDate: '2026-08-22',
        expiryDate: '2026-08-29',
        startTime: '08:00',
        endTime: '12:00',
        price: 900,
        memberPrice: 0,
        image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad',
        gallery: [
            'https://images.unsplash.com/photo-1505205296326-2178af1b4fb4',
            'https://images.unsplash.com/photo-1488747279002-c8523379faaa',
            'https://images.unsplash.com/photo-1621252179027-94459d278660'
        ],
        teachers: ['raili-maripuu'],
        registerLink: 'mailto:events@goyoga.ee',
        en: {
            title: 'Know Your Teacher: UK Summer Camp',
            date: 'August 22–28, 2026',
            location: 'Reading | London | Oxford | Windsor',
            organizer: 'Goyoga Tallinn & Raili Maripuu',
            description: 'Experience the Parampara tradition. Spend a week practicing in teacher Raili\'s home shala in Reading, combined with cultural trips across the UK.',
            fullDescription: `
                <h3 class="text-xl font-semibold text-gray-800 mt-8 mb-3 flex items-center"><span class="text-pink-500 mr-2">🇬🇧</span> Know Your Teacher</h3>
                <p class="mb-4">In yoga philosophy, it is said that you only truly get to know your teacher by being in their environment and sharing meals.</p>
                <p class="mb-4">This retreat includes an intensive week of Ashtanga yoga from Monday to Saturday.</p>
                <p class="mb-4 font-medium">Price: 900€ + flights.</p>

                <h3 class="text-xl font-semibold text-gray-800 mt-8 mb-3 flex items-center"><span class="text-pink-500 mr-2">🗺️</span> The Itinerary</h3>
                <ul class="list-disc pl-5 space-y-2 mb-6">
                    <li><strong>3 Days</strong> of practice in teacher Raili's home shala in Reading.</li>
                    <li><strong>2 Days</strong> of Mysore practice at Ashtanga Yoga London.</li>
                    <li>Cultural trips to London, Oxford, and Windsor.</li>
                </ul>
            `,
            highlights: ['Parampara tradition experience', 'Practice in Raili\'s home shala', 'Practice at Ashtanga Yoga London', 'Cultural trips to Oxford & Windsor']
        },
        et: {
            title: 'Tunne Oma Õpetajat: Inglismaa laager',
            date: '22.–28. august 2026',
            location: 'Reading | London | Oxford | Windsor',
            organizer: 'Goyoga Tallinn & Raili Maripuu',
            description: 'Koge Parampara traditsiooni. Veeda nädal praktiseerides õpetaja Raili kodushalas Readingus, kombineerituna kultuurireisidega üle Inglismaa.',
            fullDescription: `
                <h3 class="text-xl font-semibold text-gray-800 mt-8 mb-3 flex items-center"><span class="text-pink-500 mr-2">🇬🇧</span> Tunne oma õpetajat</h3>
                <p class="mb-4">Ashtanga joogas on oluline <em>parampara</em> traditsioon. Õpetaja Raili kutsub teid oma kodushallasse Readingus.</p>
                <p class="mb-4 font-medium">Hind: 900€ + lennupiletid.</p>
            `,
            highlights: ['Parampara traditsiooni kogemus', 'Praktika Raili kodushalas', 'Kultuurireisid Oxfordi ja Windsori']
        },
        fi: {
            title: 'Tunne Opettajasi: Englannin leiri',
            date: '22.–28. elokuuta 2026',
            location: 'Reading | Lontoo | Oxford | Windsor',
            organizer: 'Goyoga Tallinn & Raili Maripuu',
            description: 'Koe Parampara-perinne. Vietä viikko harjoitellen opettaja Railin kotishalassa Readingissa.',
            fullDescription: `
                <h3 class="text-xl font-semibold text-gray-800 mt-8 mb-3 flex items-center"><span class="text-pink-500 mr-2">🇬🇧</span> Tunne opettajasi</h3>
                <p class="mb-4 font-medium">Hinta: 900€ + lennot.</p>
            `,
            highlights: ['Parampara-perinteen kokeminen', 'Harjoitus Railin kotishalassa', 'Kulttuuriretket Oxfordiin ja Windsoriin']
        },
        ru: {
            title: 'Познакомьтесь с учителем: лагерь в Великобритании',
            date: '22–28 августа 2026',
            location: 'Рединг, Великобритания',
            organizer: 'Goyoga Tallinn & Raili Maripuu',
            description: 'Проведите неделю в домашней шале учителя Раili в Рединге, сочетая практику с культурными поездками.',
            fullDescription: 'Уникальный опыт практики Аштанги в Рединге и Лондоне. Цена: 900€.',
            highlights: ['Мисор Аштанга', 'Культурные поездки', 'Английская деревня']
        }
    },
    {
        id: 'india-retreat-2026',
        type: 'retreat',
        category: 'abroad',
        country: { en: 'India', et: 'India', fi: 'Intia' },
        active: true,
        featured: true,
        startDate: '2026-12-15',
        expiryDate: '2027-01-16',
        startTime: '08:00',
        endTime: '11:00',
        price: 0,
        memberPrice: 0,
        image: 'https://images.unsplash.com/photo-1596711425164-90fd727a89e9',
        gallery: [
            'https://images.unsplash.com/photo-1602216056096-3b40cc0f5310',
            'https://images.unsplash.com/photo-1544735716-392fe2489ffa',
            'https://images.unsplash.com/photo-1510425463958-dcced28da480'
        ],
        teachers: ['raili-maripuu'],
        registerLink: 'mailto:events@goyoga.ee',
        en: {
            title: 'Ashtanga Intensive with Lino Miele',
            date: 'December 15, 2026 – January 15, 2027',
            location: 'Kovalam Beach, Kerala, India',
            organizer: 'Goyoga Tallinn & Raili Maripuu',
            description: 'Travel to the heart of Kerala to join the traditional Ashtanga Yoga intensive workshop led by world-renowned teacher Lino Miele.',
            fullDescription: `
                <h3 class="text-xl font-semibold text-gray-800 mt-8 mb-3 flex items-center"><span class="text-pink-500 mr-2">🇮🇳</span> The Motherland of Yoga</h3>
                <p class="mb-4">Raili Maripuu reisib regulaarselt Indiasse Kovalemi, et osaleda Lino Miele iga-aastastes intensiivsetes töötubades.</p>
                <p class="mb-4">Treeningud toimuvad Peacock hotellist Kovalemi rannas. Hind: TBD.</p>
            `,
            highlights: ['Practice with Lino Miele in India', 'Traditional Mysore & LED classes', 'Experience Kovalam, Kerala', 'Join a global Ashtanga community']
        },
        et: {
            title: 'Ashtanga intensiiv Lino Mielega',
            date: '15. detsember 2026 – 15. jaanuar 2027',
            location: 'Kovalam, Kerala, India',
            organizer: 'Goyoga Tallinn & Raili Maripuu',
            description: 'Reisi Kerala südamesse ja liitu traditsioonilise Ashtanga jooga intensiivlaagriga, mida juhendab maailmakuulus õpetaja Lino Miele.',
            fullDescription: `
                <h3 class="text-xl font-semibold text-gray-800 mt-8 mb-3 flex items-center"><span class="text-pink-500 mr-2">🇮🇳</span> Jooga emamaa</h3>
                <p class="mb-4">Treeningud toimuvad Kovalemi rannas Keralas. Joogapind asub Peacock hotelli katusel. Hind: TBD.</p>
            `,
            highlights: ['Praktika Lino Mielega Indias', 'Traditsioonilised Mysore ja LED tunnid', 'Kovalemi kogemine, Kerala']
        },
        fi: {
            title: 'Ashtanga-intensiivi Lino Mielen kanssa',
            date: '15. joulukuuta 2026 – 15. tammikuuta 2027',
            location: 'Kovalam, Kerala, Intia',
            organizer: 'Goyoga Tallinn & Raili Maripuu',
            description: 'Matkusta Keralan sydämeen ja liity perinteiselle Ashtanga-joogan intensiivileirille, jota vetää maailmankuulu opettaja Lino Miele.',
            fullDescription: `
                <h3 class="text-xl font-semibold text-gray-800 mt-8 mb-3 flex items-center"><span class="text-pink-500 mr-2">🇮🇳</span> Joogan äitimaa</h3>
                <p class="mb-4">Harjoitukset Peacock-hotellissa Keralaassa. Hinta: TBD.</p>
            `,
            highlights: ['Harjoitus Lino Mielellä Intiassa', 'Kovalamin kokeminen']
        },
        ru: {
            title: 'Интенсив Аштанги с Лино Миэле',
            date: '15 декабря 2026 – 15 января 2027',
            location: 'Ковалам, Керала, Индия',
            organizer: 'Goyoga Tallinn & Raili Maripuu',
            description: 'Традиционный интенсив Аштанга-йоги под руководством Лино Миэле в Керале.',
            fullDescription: 'Погрузитесь в практику Аштанги в Индии. Цена: TBD.',
            highlights: ['Мисор Аштанга', 'Культурные поездки', 'Индийская деревня']
        }
    },
    {
        id: 'casa-rituals-nidra-10-apr-2026',
        type: 'event',
        category: 'estonia',
        active: true,
        featured: false,
        startDate: '2026-04-10',
        expiryDate: '2026-04-10',
        startTime: '19:00',
        endTime: '21:00',
        price: 30,
        memberPrice: 25,
        image: 'https://images.unsplash.com/photo-1510425463958-dcced28da480',
        teachers: ['david-lepp'],
        registerLink: 'https://linktr.ee/casarituals?utm_source=linktree_profile_share&ltsid=1a66c81a-b165-413c-9795-c1526e61c7ca',
        en: {
            title: 'Deeply Restorative Evening: Yoga Nidra & Gong',
            date: 'April 10, 2026',
            location: 'Goyoga Tallinn Studio',
            organizer: 'Casa Rituals & David Lepp',
            description: 'We gather for a deeply restorative evening where Yoga Nidra, Reiki energy, and a live gong journey meet.',
            fullDescription: 'We begin with guided Yoga Nidra to consciously relax the body and quiet the mind. Reiki energy will be woven throughout the evening, supporting gentle energetic alignment. The gong frequencies will then guide you into a deep state of integration and nervous system reset. This is a two-hour immersion designed to restore, recalibrate, and return you to clarity.',
            highlights: ['Yoga Nidra', 'Reiki Energy', 'Live Gong Journey', 'Deep Restoration']
        },
        et: {
            title: 'Sügavalt taastav õhtu: Jooga Nidra & Gongirännak',
            date: '10. aprill 2026',
            location: 'Goyoga Tallinn Stuudio',
            organizer: 'Casa Rituals & David Lepp',
            description: 'Koguneme sügavalt taastavaks õhtuks, kus kohtuvad jooga nidra, Reiki energia ja elav gongirännak.',
            fullDescription: 'Alustame juhendatud jooga nidraga, mis aitab kehal teadlikult lõdvestuda ja meelel vaibuda. Reiki energia on õrnalt põimitud kogu õhtusse, toetades sinu energeetilist tasakaalu. Seejärel viivad gongi helisagedused sind sügavasse lõdvestusse ja integratsiooni, aidates närvisüsteemil taastuda ja ümber häälestuda. See on kahetunnine rännak, mis toetab taastumist, tasakaalu ja sisemist selgust.',
            highlights: ['Jooga Nidra', 'Reiki energia', 'Gongirännak', 'Närvisüsteemi taastamine']
        },
        fi: {
            title: 'Syvästi palauttava ilta: Yoga Nidra & Gongimatka',
            date: '10. huhtikuuta 2026',
            location: 'Goyoga Tallinn Studio',
            organizer: 'Casa Rituals & David Lepp',
            description: 'Kokoonnumme syvästi palauttavaan iltaan, jossa Yoga Nidra, Reiki-energia ja elävä gongimatka kohtaavat.',
            fullDescription: 'Aloitamme ohjatulla Yoga Nidralla, joka auttaa kehoa rentoutumaan tietoisesti ja rauhoittaa mielen. Reiki-energia kietoutuu läpi illan tukien energeettistä tasapainoasi. Tämän jälkeen gongin taajuudet ohjaavat sinut syvään rentoutumiseen ja integraatioon. Tämä on kahden tunnin matka, joka tukee palautumista, tasapainoa ja sisäistä selkeyttä.',
            highlights: ['Yoga Nidra', 'Reiki-energia', 'Gongimatka', 'Hermoston palautuminen']
        },
        ru: {
            title: 'Глубоко восстанавливающий вечер: Йога Нидра и Гонг',
            date: '10 апреля 2026',
            location: 'Студия Goyoga Tallinn',
            organizer: 'Casa Rituals & David Lepp',
            description: 'Мы собираемся на глубоко восстанавливающий вечер, где встречаются Йога Нидра, энергия Рейки и живое путешествие с гонгом.',
            fullDescription: 'Мы начинаем с управляемой Йоги Нидры, чтобы сознательно расслабить тело и успокоить ум. Энергия Рейки будет мягко вплетена на протяжении всего вечера, поддерживая ваш энергетический баланс. Затем звуковые частоты гонга погрузят вас в глубокое расслабление и интеграцию, помогая нервной системе восстановиться. Это двухчасовое путешествие, которое поддерживает восстановление, баланс и внутреннюю ясность.',
            highlights: ['Йога Нидра', 'Энергия Рейки', 'Медитация с гонгом', 'Восстановление нервной системы']
        }
    },
    {
        id: 'casa-rituals-cacao-12-apr-2026',
        type: 'event',
        category: 'estonia',
        active: true,
        featured: false,
        startDate: '2026-04-12',
        expiryDate: '2026-04-12',
        startTime: '18:00',
        endTime: '20:00',
        price: 30,
        memberPrice: 25,
        image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa',
        teachers: ['marit-tuisk'],
        registerLink: 'https://linktr.ee/casarituals?utm_source=linktree_profile_share&ltsid=1a66c81a-b165-413c-9795-c1526e61c7ca',
        en: {
            title: 'Ritual with Cacao: Clear Intent & Calm Heart',
            date: 'April 12, 2026',
            location: 'Goyoga Tallinn Studio',
            organizer: 'Casa Rituals & Marit Tuisk',
            description: 'The ceremonial cacao ritual is a time to slow down and return to your center. We create a space where the body can relax and the heart can open.',
            fullDescription: 'During the ceremony, we drink cacao consciously, moving through guided presence, simple breathing, and quiet tuning. The intention does not arise from the mind, but from a place of true presence. This ritual is for those who seek inner clarity and stability. Includes guided meditation, cacao drinking, intention setting, sound space (Tibetan singing bowls), and group sharing.',
            highlights: ['Ceremonial Cacao', 'Intention Setting', 'Tibetan Singing Bowls', 'Guided Meditation']
        },
        et: {
            title: 'Rituaal kakaoga: selge kavatsus ja rahulik süda',
            date: '12. aprill 2026',
            location: 'Goyoga Tallinn Stuudio',
            organizer: 'Casa Rituals & Marit Tuisk',
            description: 'Tseremoniaalse kakao rituaal on aeg maha võtta ja tulla tagasi enda keskmesse. Me loome ruumi, kus keha saab rahuneda ja süda avaneda.',
            fullDescription: 'Tseremoonial joome teadlikult kakaod, liigume läbi juhendatud kohalolu, lihtsa hingamise ja vaikse häälestuse. Kavatsus ei sünni mõistusest, vaid sellest kohast, kus oled päriselt kohal ja kuulad, mis tahab edasi liikuda. Rituaal sobib nii uue alguse märgistamiseks kui ka pehmeks taashäälestuseks keset muutust. Rituaali kulg: ruumi avamise meditatsioon, kakaotseremoonia, kavatsuse seadmine, heliruum (Tiibeti metallhelikausid), ruumi sulgemine ja integratsioon.',
            highlights: ['Tseremoniaalne kakao', 'Kavatsuse seadmine', 'Tiibeti helikausid', 'Juhendatud meditatsioon']
        },
        fi: {
            title: 'Kaakaorituaali: Selkeä aikomus ja rauhallinen sydän',
            date: '12. huhtikuuta 2026',
            location: 'Goyoga Tallinn Studio',
            organizer: 'Casa Rituals & Marit Tuisk',
            description: 'Seremoniallisen kaakaon rituaali on aika hidastaa ja palata omaan keskukseesi. Luomme tilan, jossa keho voi rauhoittua ja sydän avautua.',
            fullDescription: 'Seremonian aikana juomme tietoisesti kaakaota, liikumme ohjatun läsnäolon, yksinkertaisen hengityksen ja hiljaisen virittäytymisen kautta. Aikomus ei synny mielestä, vaan sieltä, missä olet todella läsnä. Tämä rituaali sopii uuden alun merkitsemiseen tai pehmeään uudelleen virittäytymiseen muutoksen keskellä. Sisältää ohjatun meditaation, kaakaon juonnin, aikomuksen asettamisen, äänitilan (Tiibetin äänimaljat) ja ryhmän jakamisen.',
            highlights: ['Seremoniallinen kaakao', 'Aikomuksen asettaminen', 'Äänimaljat', 'Ohjattu meditaatio']
        },
        ru: {
            title: 'Ритуал с какао: Ясное намерение и спокойное сердце',
            date: '12 апреля 2026',
            location: 'Студия Goyoga Tallinn',
            organizer: 'Casa Rituals & Marit Tuisk',
            description: 'Ритуал церемониального какао — это время замедлиться и вернуться к своему центру. Мы создаем пространство, где тело может расслабиться.',
            fullDescription: 'На церемонии мы осознанно пьем какао, проходим через управляемое присутствие, простое дыхание. Намерение рождается не из ума, а из того места, где вы присутствуете по-настоящему. Этот ритуал подходит как для обозначения нового начала, так и для мягкой сонастройки в период перемен. Включает медитацию, распитие какао, установку намерения, звуковое пространство (тибетские поющие чаши) и интеграцию.',
            highlights: ['Церемониальное какао', 'Установка намерения', 'Поющие чаши', 'Медитация']
        }
    },
    {
        id: 'casa-rituals-spring-17-apr-2026',
        type: 'event',
        category: 'estonia',
        active: true,
        featured: false,
        startDate: '2026-04-17',
        expiryDate: '2026-04-17',
        startTime: '19:00',
        endTime: '21:30',
        price: 40,
        memberPrice: 33,
        image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
        teachers: ['marit-tuisk', 'david-lepp'],
        registerLink: 'https://linktr.ee/casarituals?utm_source=linktree_profile_share&ltsid=1a66c81a-b165-413c-9795-c1526e61c7ca',
        en: {
            title: 'Spring Ritual with Cacao and Gong Journey',
            date: 'April 17, 2026',
            location: 'Goyoga Tallinn Studio',
            organizer: 'Casa Rituals',
            description: 'We begin the evening with a short astrological insight into spring to understand the energies in motion, followed by ceremonial cacao and a deep gong journey.',
            fullDescription: 'We start with ceremonial cacao to open the heart and bring clarity to what this period has moved within you. I will also share a short astrological overview. We then move into a deep gong journey. The sound frequencies support the nervous system to calm down and help integrate the experience in both the body and the subconscious. This evening is for closing, integrating, and consciously starting a new phase.',
            highlights: ['Astrological Insight', 'Ceremonial Cacao', 'Gong Journey', 'Spring Integration']
        },
        et: {
            title: 'Kevade rituaal kakao ja gongi rännakuga',
            date: '17. aprill 2026',
            location: 'Goyoga Tallinn Stuudio',
            organizer: 'Casa Rituals',
            description: 'Alustame õhtut lühikese astroloogilise sissevaatega kevadesse, et mõista liikvel olevaid energiaid, millele järgneb kakao ja gongirännak.',
            fullDescription: 'Alustame tseremoniaalse kakaoga, et avada süda ja tuua selgus sellesse, mida see periood sinus liigutas. Jagan ka lühikest astroloogilist ülevaadet – et mõista, millise suurema tsükli me nüüd lõpetame. Seejärel liigume sügavasse gongirännakusse. Helisagedused toetavad närvisüsteemi rahunemist ja aitavad integreerida kogetu. See õhtu on sulgemiseks, integreerimiseks ja teadlikuks uue faasi alustamiseks.',
            highlights: ['Astroloogiline ülevaade', 'Tseremoniaalne kakao', 'Sügav Gongirännak', 'Kevadine integratsioon']
        },
        fi: {
            title: 'Kevätjuhla kaakaolla ja gongimatkalla',
            date: '17. huhtikuuta 2026',
            location: 'Goyoga Tallinn Studio',
            organizer: 'Casa Rituals',
            description: 'Aloitamme illan lyhyellä astrologisella katsauksella kevääseen, jota seuraa seremoniallinen kaakao ja syvä gongimatka.',
            fullDescription: 'Aloitamme seremoniallisella kaakaolla sydämen avaamiseksi. Jaan myös lyhyen astrologisen katsauksen. Tämän jälkeen siirrymme syvään gongimatkaan. Äänitaajuudet tukevat hermoston rauhoittumista ja auttavat integroimaan kokemuksen. Tämä ilta on tarkoitettu päättämiseen, integroimiseen ja tietoisesti uuden vaiheen aloittamiseen.',
            highlights: ['Astrologinen katsaus', 'Seremoniallinen kaakao', 'Gongimatka', 'Kevään integraatio']
        },
        ru: {
            title: 'Весенний ритуал с какао и гонгом',
            date: '17 апреля 2026',
            location: 'Студия Goyoga Tallinn',
            organizer: 'Casa Rituals',
            description: 'Мы начинаем вечер с короткого астрологического обзора весны, за которым последует церемониальное какао и глубокое путешествие с гонгом.',
            fullDescription: 'Мы начнем с церемониального какао, чтобы открыть сердце. Я также поделюсь кратким астрологическим обзором. Затем мы погрузимся в глубокое путешествие с гонгом. Звуковые частоты помогают нервной системе успокоиться. Этот вечер предназначен для завершения, интеграции и осознанного начала новой фазы.',
            highlights: ['Астрологический обзор', 'Церемониальное какао', 'Медитация с гонгом', 'Интеграция весны']
        }
    },
    {
        id: 'casa-rituals-nidra-en-19-apr-2026',
        type: 'event',
        category: 'estonia',
        active: true,
        featured: false,
        startDate: '2026-04-19',
        expiryDate: '2026-04-19',
        startTime: '18:00',
        endTime: '20:00',
        price: 30,
        memberPrice: 25,
        image: 'https://images.unsplash.com/photo-1549488344-c27773295da9',
        teachers: ['david-lepp'],
        registerLink: 'https://linktr.ee/casarituals?utm_source=linktree_profile_share&ltsid=1a66c81a-b165-413c-9795-c1526e61c7ca',
        en: {
            title: 'Reiki Infused Gong Journey & Yoga Nidra',
            date: 'April 19, 2026',
            location: 'Goyoga Tallinn Studio',
            organizer: 'Casa Rituals & David Lepp',
            description: 'We gather for a deeply restorative evening combining Yoga Nidra, Reiki energy, and a live gong journey.',
            fullDescription: 'We begin with guided Yoga Nidra to consciously relax the body and quiet the mind. Reiki energy will be woven throughout the evening, supporting gentle energetic alignment. The gong frequencies will then guide you into a deep state of integration and nervous system reset. This is a two-hour immersion designed to restore, recalibrate, and return you to clarity. No prior experience needed. All are welcome.',
            highlights: ['Yoga Nidra', 'Reiki Energy', 'Live Gong Journey', 'Restorative Immersion']
        },
        et: {
            title: 'Reiki energiaga Gongirännak & Jooga Nidra',
            date: '19. aprill 2026',
            location: 'Goyoga Tallinn Stuudio',
            organizer: 'Casa Rituals & David Lepp',
            description: 'Koguneme sügavalt taastavaks õhtuks, mis ühendab Jooga Nidra, Reiki energia ja elava gongirännaku. (Sündmus toimub inglise keeles)',
            fullDescription: 'Alustame juhendatud Jooga Nidraga, et keha teadlikult lõdvestada ja meel vaigistada. Reiki energia on põimitud kogu õhtusse. Seejärel viivad gongi helisagedused sind sügavasse integratsiooni ja närvisüsteemi taastamise seisundisse. Kahetunnine rännak on loodud taastumiseks ja selguse taastamiseks. Eelnev kogemus pole vajalik. Sündmus on INGLISE KEELES.',
            highlights: ['Sündmus inglise keeles', 'Jooga Nidra', 'Reiki Energia', 'Gongirännak']
        },
        fi: {
            title: 'Reiki-energiaa, Gongimatka & Yoga Nidra',
            date: '19. huhtikuuta 2026',
            location: 'Goyoga Tallinn Studio',
            organizer: 'Casa Rituals & David Lepp',
            description: 'Kokoonnumme syvästi palauttavaan iltaan, jossa yhdistyvät Yoga Nidra, Reiki-energia ja elävä gongimatka. (Tapahtuma pidetään englanniksi)',
            fullDescription: 'Aloitamme ohjatulla Yoga Nidralla rentouttaaksemme kehon ja rauhoittaaksemme mielen. Reiki-energia tukee lempeää energeettistä tasapainoa koko illan ajan. Gongin taajuudet ohjaavat sinut syvään integraation ja hermoston palautumisen tilaan. Tämä kahden tunnin syventyminen on suunniteltu palauttamaan selkeyttä. Tapahtuma on ENGLANNIKSI.',
            highlights: ['Tapahtuma on englanniksi', 'Yoga Nidra', 'Reiki-energia', 'Gongimatka']
        },
        ru: {
            title: 'Путешествие с гонгом и энергией Рейки',
            date: '19 апреля 2026',
            location: 'Студия Goyoga Tallinn',
            organizer: 'Casa Rituals & David Lepp',
            description: 'Мы собираемся на глубоко восстанавливающий вечер, сочетающий Йогу Нидру, энергию Рейки и путешествие с гонгом. (Мероприятие на английском языке)',
            fullDescription: 'Мы начинаем с управляемой Йоги Нидры, чтобы расслабить тело и успокоить ум. Энергия Рейки поддерживает энергетический баланс на протяжении всего вечера. Частоты гонга погрузят вас в глубокое расслабление и восстановление нервной системы. Это двухчасовое погружение для восстановления ясности. Мероприятие проводится НА АНГЛИЙСКОМ ЯЗЫКЕ.',
            highlights: ['На английском языке', 'Йога Нидра', 'Энергия Рейки', 'Путешествие с гонгом']
        }
    },
    {
        id: 'casa-rituals-cacao-24-apr-2026',
        type: 'event',
        category: 'estonia',
        active: true,
        featured: false,
        startDate: '2026-04-24',
        expiryDate: '2026-04-24',
        startTime: '19:00',
        endTime: '21:00',
        price: 30,
        memberPrice: 25,
        image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa',
        teachers: ['marit-tuisk'],
        registerLink: 'https://linktr.ee/casarituals?utm_source=linktree_profile_share&ltsid=1a66c81a-b165-413c-9795-c1526e61c7ca',
        en: {
            title: 'Ritual with Cacao: Clear Intent & Calm Heart',
            date: 'April 24, 2026',
            location: 'Goyoga Tallinn Studio',
            organizer: 'Casa Rituals & Marit Tuisk',
            description: 'The ceremonial cacao ritual is a time to slow down and return to your center. We create a space where the body can relax and the heart can open.',
            fullDescription: 'During the ceremony, we drink cacao consciously, moving through guided presence, simple breathing, and quiet tuning. The intention does not arise from the mind, but from a place of true presence. This ritual is for those who seek inner clarity and stability. Includes guided meditation, cacao drinking, intention setting, sound space (Tibetan singing bowls), and group sharing.',
            highlights: ['Ceremonial Cacao', 'Intention Setting', 'Tibetan Singing Bowls', 'Guided Meditation']
        },
        et: {
            title: 'Rituaal kakaoga: selge kavatsus ja rahulik süda',
            date: '24. aprill 2026',
            location: 'Goyoga Tallinn Stuudio',
            organizer: 'Casa Rituals & Marit Tuisk',
            description: 'Tseremoniaalse kakao rituaal on aeg maha võtta ja tulla tagasi enda keskmesse. Me loome ruumi, kus keha saab rahuneda ja süda avaneda.',
            fullDescription: 'Tseremoonial joome teadlikult kakaod, liigume läbi juhendatud kohalolu, lihtsa hingamise ja vaikse häälestuse. Kavatsus ei sünni mõistusest, vaid sellest kohast, kus oled päriselt kohal ja kuulad, mis tahab edasi liikuda. Rituaal sobib nii uue alguse märgistamiseks kui ka pehmeks taashäälestuseks keset muutust. Rituaali kulg: ruumi avamise meditatsioon, kakaotseremoonia, kavatsuse seadmine, heliruum (Tiibeti metallhelikausid), ruumi sulgemine ja integratsioon.',
            highlights: ['Tseremoniaalne kakao', 'Kavatsuse seadmine', 'Tiibeti helikausid', 'Juhendatud meditatsioon']
        },
        fi: {
            title: 'Kaakaorituaali: Selkeä aikomus ja rauhallinen sydän',
            date: '24. huhtikuuta 2026',
            location: 'Goyoga Tallinn Studio',
            organizer: 'Casa Rituals & Marit Tuisk',
            description: 'Seremoniallisen kaakaon rituaali on aika hidastaa ja palata omaan keskukseesi. Luomme tilan, jossa keho voi rauhoittua ja sydän avautua.',
            fullDescription: 'Seremonian aikana juomme tietoisesti kaakaota, liikumme ohjatun läsnäolon, yksinkertaisen hengityksen ja hiljaisen virittäytymisen kautta. Aikomus ei synny mielestä, vaan sieltä, missä olet todella läsnä. Tämä rituaali sopii uuden alun merkitsemiseen tai pehmeään uudelleen virittäytymiseen muutoksen keskellä. Sisältää ohjatun meditaation, kaakaon juonnin, aikomuksen asettamisen, äänitilan (Tiibetin äänimaljat) ja ryhmän jakamisen.',
            highlights: ['Seremoniallinen kaakao', 'Aikomuksen asettaminen', 'Äänimaljat', 'Ohjattu meditaatio']
        },
        ru: {
            title: 'Ритуал с какао: Ясное намерение и спокойное сердце',
            date: '24 апреля 2026',
            location: 'Студия Goyoga Tallinn',
            organizer: 'Casa Rituals & Marit Tuisk',
            description: 'Ритуал церемониального какао — это время замедлиться и вернуться к своему центру. Мы создаем пространство, где тело может расслабиться.',
            fullDescription: 'На церемонии мы осознанно пьем какао, проходим через управляемое присутствие, простое дыхание. Намерение рождается не из ума, а из того места, где вы присутствуете по-настоящему. Этот ритуал подходит как для обозначения нового начала, так и для мягкой сонастройки в период перемен. Включает медитацию, распитие какао, установку намерения, звуковое пространство (тибетские поющие чаши) и интеграцию.',
            highlights: ['Церемониальное какао', 'Установка намерения', 'Поющие чаши', 'Медитация']
        }
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { eventsData };
}
