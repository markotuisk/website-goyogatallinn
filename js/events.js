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
            fullDescription: 'Поездка в Кералу для участия в традиционном интенсиве по Аштанга-йоге с всемирно известным учителем Лино Миэле. Цена: TBD.',
            highlights: ['Практика с Лино Миэле', 'Опыт в Керале']
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
            title: 'Yoga Nidra with Gong Journey and Reiki Energy',
            date: 'April 10, 2026',
            location: 'Goyoga Tallinn Studio',
            organizer: 'Casa Rituals & David Lepp',
            description: 'We gather for a deeply restorative evening where Yoga Nidra, Reiki energy, and a live gong journey meet.',
            fullDescription: `
                <p class="mb-4">We begin with guided Yoga Nidra to consciously relax the body and quiet the mind. Reiki energy is gently woven throughout the entire evening, supporting your energetic balance. Afterward, the sound frequencies of the gong will guide you into deep relaxation and integration, helping your nervous system restore and recalibrate.</p>
                <p class="mb-6 font-medium">This is a two-hour journey that supports restoration, balance, and inner clarity.</p>
                
                <h3 class="text-xl font-semibold text-gray-800 mt-8 mb-3 flex items-center"><span class="text-pink-500 mr-2">✧</span> The Experience Flow</h3>
                <ul class="list-disc pl-5 space-y-2 mb-8">
                    <li>Opening the space and presence, balancing and clearing energies</li>
                    <li>Guided Yoga Nidra deep relaxation for the body and consciousness</li>
                    <li>Channeling Reiki energy</li>
                    <li>Reiki-infused gong and sound therapy</li>
                    <li>Integration and sharing circle</li>
                    <li>Balanced closure of the space and energies</li>
                </ul>

                <h3 class="text-xl font-semibold text-gray-800 mt-8 mb-3 flex items-center"><span class="text-pink-500 mr-2">✧</span> David Lepp</h3>
                <p class="mb-4">David brings over 25 years of experience in alternative therapies, shaped by his work in internationally recognized 5-Star spa environments in the United States and Estonia. Working with clients all over the world, he has cultivated a holistic approach to energy balancing and results-oriented comprehensive wellness.</p>
                <p class="mb-4">Over time, his practice has focused on sound therapy, where he uses frequencies as a holistic tool to support the nervous system, balance emotional states, and restore the body's natural harmony.</p>
                <p class="mb-4">Today, David guides sound journey experiences and Yoga Nidra meditations, creating spaces that support deep relaxation, clarity, and lasting changes in overall well-being.</p>
            `,
            highlights: ['Deep relaxation & calmed nervous system', 'Emotional and energetic release', 'Clearer mind & grounded presence', 'Expanded consciousness and lightness']
        },
        et: {
            title: 'Jooga Nidra koos Gongirännakuga ja Reiki Energiaga',
            date: '10. aprill 2026',
            location: 'Goyoga Tallinn Stuudio',
            organizer: 'Casa Rituals & David Lepp',
            description: 'Koguneme sügavalt taastavaks õhtuks, kus kohtuvad jooga nidra, Reiki energia ja elav gongirännak.',
            fullDescription: `
                <p class="mb-4">Alustame juhendatud jooga nidraga, mis aitab kehal teadlikult lõdvestuda ja meelel vaibuda. Reiki energia on õrnalt põimitud kogu õhtusse, toetades sinu energeetilist tasakaalu. Seejärel viivad gongi helisagedused sind sügavasse lõdvestusse ja integratsiooni, aidates närvisüsteemil taastuda ja ümber häälestuda.</p>
                <p class="mb-6 font-medium">See on kahetunnine rännak, mis toetab taastumist, tasakaalu ja sisemist selgust.</p>
                
                <h3 class="text-xl font-semibold text-gray-800 mt-8 mb-3 flex items-center"><span class="text-pink-500 mr-2">✧</span> Kogemuse Kulg</h3>
                <ul class="list-disc pl-5 space-y-2 mb-8">
                    <li>Ruumi ja kohalolu avamine, energiate tasakaalustamine ja puhastamine</li>
                    <li>Juhendatud Yoga Nidra süvalõdvestus kehale ja teadvusele</li>
                    <li>Reiki energia kanaldamine</li>
                    <li>Reiki energiaga laetud gongi ja heliteraapia</li>
                    <li>Kogemuse lahtimõtestamise jagamise ring</li>
                    <li>Ruumi ja energiate balanseeritud lõpule viimine</li>
                </ul>

                <h3 class="text-xl font-semibold text-gray-800 mt-8 mb-3 flex items-center"><span class="text-pink-500 mr-2">✧</span> David Lepp</h3>
                <p class="mb-4">David toob kaasa oma enam kui 25-aastase kogemuse alternatiivteraapiate valdkonnas, mida on kujundanud töö rahvusvaheliselt tunnustatud 5-Star spaakeskkondades Ameerika Ühendriikides ja Eestis. Töötades klientidega üle kogu maailma, on ta kogenud holistilise lähenemisega energiate balanseerimisele ja tulemustele suunatud terviklikule heaolule.</p>
                <p class="mb-4">Tema praktika on ajapikku keskendunud heliteraapiale, kus ta kasutab sagedusi holistilise tööriistana närvisüsteemi toetamiseks, emotsionaalsete seisundite tasakaalustamiseks ning keha loomuliku harmoonia taastamiseks.</p>
                <p class="mb-4">David juhendab täna helirännaku kogemusi ja Yoga Nidra meditatsioone luues kooslusi, mis toetavad sügavat lõõgastust, selgust ja püsivaid muutusi üldises heaolus.</p>
            `,
            highlights: ['Sügav lõõgastus ja rahustatud närvisüsteem', 'Emotsionaalne ja energeetiline vabanemine', 'Selgem meel ja maandatud kohalolu', 'Teadvuse avardumine ja kergus']
        },
        fi: {
            title: 'Yoga Nidra, Gongimatka ja Reiki-energia',
            date: '10. huhtikuuta 2026',
            location: 'Goyoga Tallinn Studio',
            organizer: 'Casa Rituals & David Lepp',
            description: 'Kokoonnumme syvästi palauttavaan iltaan, jossa kohtaavat Yoga Nidra, Reiki-energia ja elävä gongimatka.',
            fullDescription: `
                <p class="mb-4">Aloitamme ohjatulla Yoga Nidralla, joka auttaa kehoa tietoisesti rentoutumaan ja mieltä rauhoittumaan. Reiki-energia kietoutuu lempeästi koko iltaan tukien energeettistä tasapainoasi. Tämän jälkeen gongin äänitaajuudet ohjaavat sinut syvään rentoutumiseen ja integraatioon, auttaen hermostoa palautumaan ja uudelleen virittäytymään.</p>
                <p class="mb-6 font-medium">Tämä on kahden tunnin matka, joka tukee palautumista, tasapainoa ja sisäistä selkeyttä.</p>
                
                <h3 class="text-xl font-semibold text-gray-800 mt-8 mb-3 flex items-center"><span class="text-pink-500 mr-2">✧</span> Kokemuksen Kulku</h3>
                <ul class="list-disc pl-5 space-y-2 mb-8">
                    <li>Tilan ja läsnäolon avaaminen, energioiden tasapainoittaminen ja puhdistaminen</li>
                    <li>Ohjattu Yoga Nidra -syvärentoutus keholle ja tietoisuudelle</li>
                    <li>Reiki-energian kanavointi</li>
                    <li>Reiki-energialla ladattu gongi- ja ääniterapia</li>
                    <li>Integraatio- ja jakamispiiri</li>
                    <li>Tilan ja energioiden tasapainoinen sulkeminen</li>
                </ul>

                <h3 class="text-xl font-semibold text-gray-800 mt-8 mb-3 flex items-center"><span class="text-pink-500 mr-2">✧</span> David Lepp</h3>
                <p class="mb-4">David tuo mukanaan yli 25 vuoden kokemuksen vaihtoehtoisista terapiamuodoista, joita on muovannut työskentely kansainvälisesti tunnetuissa 5 tähden kylpyläympäristöissä Yhdysvalloissa ja Virossa. Työskennellessään asiakkaiden kanssa ympäri maailmaa hän on kehittänyt kokonaisvaltaisen lähestymistavan energioiden tasapainottamiseen ja tuloskeskeiseen hyvinvointiin.</p>
                <p class="mb-4">Ajan myötä hänen harjoituksensa on keskittynyt ääniterapiaan, jossa hän käyttää taajuuksia kokonaisvaltaisena työkaluna hermoston tukemiseen, tunnetilojen tasapainottamiseen ja kehon luonnollisen harmonian palauttamiseen.</p>
                <p class="mb-4">Tänään David ohjaa äänimatkoja ja Yoga Nidra -meditaatioita luoden tiloja, jotka tukevat syvää rentoutumista, selkeyttä ja pysyviä muutoksia yleisessä hyvinvoinnissa.</p>
            `,
            highlights: ['Syvä rentoutuminen ja rauhoittunut hermosto', 'Emotionaalinen ja energeettinen vapautuminen', 'Selkeämpi mieli ja maadoittunut läsnäolo', 'Laajentunut tietoisuus ja keveys']
        },
        ru: {
            title: 'Йога Нидра с путешествием под гонг и энергией Рейки',
            date: '10 апреля 2026',
            location: 'Студия Goyoga Tallinn',
            organizer: 'Casa Rituals & David Lepp',
            description: 'Мы собираемся на глубоко восстанавливающий вечер, где встречаются йога нидра, энергия рейки и живое путешествие с гонгом.',
            fullDescription: `
                <p class="mb-4">Мы начинаем с управляемой Йоги Нидры, которая помогает телу осознанно расслабиться, а уму — успокоиться. Энергия Рейки мягко вплетается на протяжении всего вечера, поддерживая ваш энергетический баланс. Затем звуковые частоты гонга погружают вас в глубокое расслабление и интеграцию, помогая нервной системе восстановиться и перенастроиться.</p>
                <p class="mb-6 font-medium">Это двухчасовое путешествие, которое поддерживает восстановление, баланс и внутреннюю ясность.</p>
                
                <h3 class="text-xl font-semibold text-gray-800 mt-8 mb-3 flex items-center"><span class="text-pink-500 mr-2">✧</span> Ход Погружения</h3>
                <ul class="list-disc pl-5 space-y-2 mb-8">
                    <li>Открытие пространства и присутствия, балансировка и очищение энергий</li>
                    <li>Управляемая Йога Нидра для глубокого расслабления тела и сознания</li>
                    <li>Направление энергии Рейки</li>
                    <li>Гонг и звукотерапия, заряженные энергией Рейки</li>
                    <li>Круг интеграции и обмена опытом</li>
                    <li>Сбалансированное закрытие пространства и энергий</li>
                </ul>

                <h3 class="text-xl font-semibold text-gray-800 mt-8 mb-3 flex items-center"><span class="text-pink-500 mr-2">✧</span> Дэвид Лепп</h3>
                <p class="mb-4">Дэвид опирается на более чем 25-летний опыт работы в области альтернативных методов терапии, сформированный практикой во всемирно известных 5-звездочных спа-центрах США и Эстонии. Работая с клиентами по всему миру, он разработал целостный подход к балансировке энергий и всестороннему благополучию.</p>
                <p class="mb-4">Со временем его практика сфокусировалась на звукотерапии, где он использует звуковые частоты как целостный инструмент для поддержки нервной системы, балансировки эмоциональных состояний и восстановления естественной гармонии тела.</p>
                <p class="mb-4">Сегодня Дэвид проводит медикаментозные звуковые путешествия и медитации Йога Нидра, создавая пространства, способствующие глубокому расслаблению, ясности и долгосрочным улучшениям в общем самочувствии.</p>
            `,
            highlights: ['Глубокое расслабление и спокойная нервная система', 'Эмоциональное и энергетическое освобождение', 'Более ясный ум и заземленное присутствие', 'Расширение сознания и легкость']
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
            description: 'The ceremonial cacao ritual is a time to slow down and return to your center. A short astrological insight into spring opens the supporting energies.',
            fullDescription: `
                <p class="mb-4">We begin the evening with a short astrological insight into spring, helping you understand the energies currently in motion and what this period activates within you.</p>
                <p class="mb-4">Next, we open our hearts with ceremonial cacao to bring clarity to what this period has stirred in you. I will share another short astrological overview to help understand the larger cycle we are completing and where the energy is moving next.</p>
                <p class="mb-4">Afterward, we transition into a deep gong journey. The sound frequencies support the calming of the nervous system and help integrate the experience in both body and subconscious. This is a space where transformation can take root.</p>
                <p class="mb-6 font-medium">This evening is for closure, integration, and consciously stepping into a new phase. Everything you need is already here. Just show up and allow the process to unfold fully.</p>
                
                <h3 class="text-xl font-semibold text-gray-800 mt-8 mb-3 flex items-center"><span class="text-pink-500 mr-2">✧</span> The Ritual Flow</h3>
                <ul class="list-disc pl-5 space-y-2 mb-8">
                    <li>Space-opening meditation</li>
                    <li>Cacao ceremony and conscious drinking</li>
                    <li>Intention setting</li>
                    <li>Sound space to hold your intention (Tibetan singing bowls)</li>
                    <li>Space-closing meditation</li>
                    <li>Group sharing and integration</li>
                </ul>

                <h3 class="text-xl font-semibold text-gray-800 mt-8 mb-3 flex items-center"><span class="text-pink-500 mr-2">✧</span> Marit Tuisk</h3>
                <p class="mb-4">Marit Tuisk is a conscious leadership mentor, ceremony creator, and co-founder of Casa Rituals. She is a certified ceremonialist, quantum dowsing practitioner, and healer who has lived and worked in the United States for the past 30 years.</p>
                <p class="mb-4">In recent years, she has dedicated herself to energetic and conscious healing, supporting people on their inner journeys. Previously, she was the founder of a sustainable fashion brand and spent many years in the corporate sector, which built her strong understanding of structure, leadership, and patterns of human behavior.</p>
                <p class="mb-4">Her work weaves together practical life experience and deep energetic space-holding, creating a clear and supportive environment that helps people find inner balance, clarity, and move more consciously through their life and leadership.</p>
            `,
            highlights: ['Astrological Insights', 'Ceremonial Cacao', 'Gong Journey & Sound Bowls', 'Guided Meditation']
        },
        et: {
            title: 'Rituaal kakaoga: selge kavatsus ja rahulik süda',
            date: '12. aprill 2026',
            location: 'Goyoga Tallinn Stuudio',
            organizer: 'Casa Rituals & Marit Tuisk',
            description: 'Tseremoniaalse kakao rituaal on aeg maha võtta ja tulla tagasi enda keskmesse. Lühike astroloogiline sissevaade kevadesse avab toetavad energiad.',
            fullDescription: `
                <p class="mb-4">Alustame õhtut lühikese astroloogilise sissevaatega kevadesse, et mõista, millised energiad on hetkel liikumises ja mida see periood sinus aktiveerib.</p>
                <p class="mb-4">Seejärel alustame tseremoniaalse kakaoga, et avada süda ja tuua selgus sellesse, mida see periood sinus liigutas. Jagan ka lühikest astroloogilist ülevaadet – et mõista, millise suurema tsükli me nüüd lõpetame ja kuhu energia edasi liigub.</p>
                <p class="mb-4">Seejärel liigume sügavasse gongirännakusse. Helisagedused toetavad närvisüsteemi rahunemist ja aitavad integreerida kogetu nii kehas kui alateadvuses. See on ruum, kus muutus saab kinnistuda.</p>
                <p class="mb-6 font-medium">See õhtu on sulgemiseks, integreerimiseks ja teadlikuks uue faasi alustamiseks. Kõik vajalik on kohapeal olemas. Sina tule kohale ja luba protsessil lõpuni liikuda.</p>
                
                <h3 class="text-xl font-semibold text-gray-800 mt-8 mb-3 flex items-center"><span class="text-pink-500 mr-2">✧</span> Rituaali Kulg</h3>
                <ul class="list-disc pl-5 space-y-2 mb-8">
                    <li>Ruumi avamise meditatsioon</li>
                    <li>Kakaotseremoonia ja teadlik kakao joomine</li>
                    <li>Kavatsuse seadmine</li>
                    <li>Heliruum kavatsuse hoidmiseks (Tiibeti metallhelikausid)</li>
                    <li>Ruumi sulgemise meditatsioon</li>
                    <li>Grupi jagamine ja integratsioon</li>
                </ul>

                <h3 class="text-xl font-semibold text-gray-800 mt-8 mb-3 flex items-center"><span class="text-pink-500 mr-2">✧</span> Marit Tuisk</h3>
                <p class="mb-4">Marit Tuisk on teadliku juhtimise mentor, tseremoniate looja ja Casa Ritualsi kaasasutaja. Ta on sertifitseeritud tseremonialist, quantum dowsingu praktik ja tervendaja, kes on viimased 30 aastat elanud ja töötanud Ameerika Ühendriikides.</p>
                <p class="mb-4">Viimastel aastatel on ta pühendunud energeetilisele ja teadlikule tervenemisele ning inimeste toetamisele nende sisemisel teekonnal. Varasemalt tegutses ta jätkusuutliku moebrändi loojana ning töötas pikalt corporate-sektoris, kus kujunes tema tugev arusaam struktuurist, juhtimisest ja inimkäitumise mustritest.</p>
                <p class="mb-4">Tema töös põimuvad praktiline elukogemus ja sügav energeetiline ruumihoidmine, luues selge ja toetava välja, mis aitab inimestel leida sisemist tasakaalu, selgust ja liikuda teadlikumalt oma elus ja juhtimises.</p>
            `,
            highlights: ['Astroloogiline sissevaade', 'Tseremoniaalne kakao', 'Gongirännak ja helikausid', 'Juhendatud meditatsioon']
        },
        fi: {
            title: 'Kaakaorituaali: Selkeä aikomus ja rauhallinen sydän',
            date: '12. huhtikuuta 2026',
            location: 'Goyoga Tallinn Studio',
            organizer: 'Casa Rituals & Marit Tuisk',
            description: 'Seremoniallisen kaakaon rituaali on aika hidastaa ja palata omaan keskukseesi. Lyhyt astrologinen katsaus kevääseen avaa tukevat energiat.',
            fullDescription: `
                <p class="mb-4">Aloitamme illan lyhyellä astrologisella katsauksella kevääseen ymmärtääksemme, mitä energioita on tällä hetkellä liikkeellä ja mitä tämä ajanjakso aktivoi sinussa.</p>
                <p class="mb-4">Tämän jälkeen avaamme sydämet seremoniallisella kaakaolla tuodaksemme selkeyttä siihen, mitä tämä ajanjakso on nostanut pintaan. Jaan myös toisen lyhyen astrologisen katsauksen ymmärtääksemme suuremman syklin, jota olemme parhaillaan lopettamassa, ja minne energia siirtyy seuraavaksi.</p>
                <p class="mb-4">Sitten siirrymme syvään gongimatkaan. Äänitaajuudet tukevat hermoston rauhoittumista ja auttavat integroimaan kokemuksen sekä kehossa että alitajunnassa. Tämä on tila, jossa muutos voi juurtua.</p>
                <p class="mb-6 font-medium">Tämä ilta on tarkoitettu sulkemiselle, integraatiolle ja uuden vaiheen tietoiselle aloittamiselle. Kaikki tarvittava on paikan päällä. Tule vain paikalle ja anna prosessin edetä luonnollisesti.</p>
                
                <h3 class="text-xl font-semibold text-gray-800 mt-8 mb-3 flex items-center"><span class="text-pink-500 mr-2">✧</span> Rituaalin Kulku</h3>
                <ul class="list-disc pl-5 space-y-2 mb-8">
                    <li>Tilan avaava meditaatio</li>
                    <li>Kaakaoseremonia ja tietoinen juominen</li>
                    <li>Aikomuksen asettaminen</li>
                    <li>Äänitila aikomuksen tukemiseksi (Tiibetin äänimaljat)</li>
                    <li>Tilan sulkeva meditaatio</li>
                    <li>Ryhmän jakaminen ja integraatio</li>
                </ul>

                <h3 class="text-xl font-semibold text-gray-800 mt-8 mb-3 flex items-center"><span class="text-pink-500 mr-2">✧</span> Marit Tuisk</h3>
                <p class="mb-4">Marit Tuisk on tietoisen johtamisen mentori, seremonioiden luoja ja Casa Ritualsin perustajajäsen. Hän on lisensoitu seremonialisti, kvantti-dowsing-harjoittaja ja parantaja, joka on asunut ja työskennellyt Yhdysvalloissa viimeiset 30 vuotta.</p>
                <p class="mb-4">Viime vuosina hän on omistautunut energeettiselle ja tietoiselle parantamiselle ja auttanut ihmisiä heidän sisäisillä matkoillaan. Aikaisemmin hän loi kestävän muotibrändin ja työskenteli pitkään yritysmaailmassa, mikä loi vahvan ymmärryksen rakenteista, johtajuudesta ja ihmisen käyttäytymismalleista.</p>
                <p class="mb-4">Hänen työssään yhdistyvät käytännön elämänkokemus ja syvä energeettinen tilan pito, mikä luo selkeän ja tukevan kentän, joka auttaa ihmisiä löytämään sisäisen tasapainon, selkeyden ja siirtymään tietoisemmin elämässään ja johtamisessaan.</p>
            `,
            highlights: ['Astrologiset oivallukset', 'Seremoniallinen kaakao', 'Gongimatka ja äänimaljat', 'Ohjattu meditaatio']
        },
        ru: {
            title: 'Ритуал с какао: Ясное намерение и спокойное сердце',
            date: '12 апреля 2026',
            location: 'Студия Goyoga Tallinn',
            organizer: 'Casa Rituals & Marit Tuisk',
            description: 'Ритуал церемониального какао — это время замедлиться и вернуться к своему центру. Краткий астрологический обзор открывает поддерживающие энергии.',
            fullDescription: `
                <p class="mb-4">Мы начинаем вечер с краткого астрологического обзора весны, чтобы понять, какие энергии сейчас находятся в движении и что этот период активирует в вас.</p>
                <p class="mb-4">Затем мы начинаем с церемониального какао, чтобы открыть сердце и внести ясность в то, что этот период пробудил в вас. Я также поделюсь кратким астрологическим обзором, чтобы понять, какой большой цикл мы сейчас завершаем и куда движется энергия дальше.</p>
                <p class="mb-4">После этого мы переходим к глубокому путешествию с гонгом. Звуковые частоты способствуют успокоению нервной системы и помогают интегрировать пережитое как в теле, так и в подсознании. Это пространство, где изменения могут закрепиться.</p>
                <p class="mb-6 font-medium">Этот вечер предназначен для завершения, интеграции и осознанного начала нового этапа. Все необходимое уже есть на месте. Вам нужно только прийти и позволить процессу завершиться.</p>
                
                <h3 class="text-xl font-semibold text-gray-800 mt-8 mb-3 flex items-center"><span class="text-pink-500 mr-2">✧</span> Ход Ритуала</h3>
                <ul class="list-disc pl-5 space-y-2 mb-8">
                    <li>Медитация на открытие пространства</li>
                    <li>Церемония какао и осознанное распитие</li>
                    <li>Установка намерения</li>
                    <li>Звуковое пространство для поддержания намерения (Тибетские поющие чаши)</li>
                    <li>Медитация на закрытие пространства</li>
                    <li>Обмен опытом в группе и интеграция</li>
                </ul>

                <h3 class="text-xl font-semibold text-gray-800 mt-8 mb-3 flex items-center"><span class="text-pink-500 mr-2">✧</span> Марит Туйск</h3>
                <p class="mb-4">Марит Туйск — ментор по осознанному лидерству, создатель церемоний и соучредитель Casa Rituals. Она является сертифицированным специалистом по церемониям, практиком квантовой биолокации и целителем, жившим и работавшим в Соединенных Штатах последние 30 лет.</p>
                <p class="mb-4">В последние годы она посвятила себя энергетическому и осознанному исцелению, поддерживая людей на их внутреннем пути. Ранее она основала бренд устойчивой моды и долгое время работала в корпоративном секторе, где у нее сформировалось глубокое понимание структуры, лидерства и моделей человеческого поведения.</p>
                <p class="mb-4">В ее работе переплетаются практический жизненный опыт и глубокое удержание энергетического пространства, создавая ясное и поддерживающее поле, которое помогает людям обрести внутренний баланс, ясность и более осознанно управлять своей жизнью.</p>
            `,
            highlights: ['Астрологический обзор', 'Церемониальное какао', 'Путешествие с гонгом и чаши', 'Медитация']
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
            fullDescription: `
                <p class="mb-4">We begin the evening with a short astrological insight into spring to understand which energies are currently in motion and what this period activates within you.</p>
                <p class="mb-4">We then begin with ceremonial cacao to open the heart and bring clarity to what this period has stirred in you. I will also share a short astrological overview to understand the larger cycle we are completing and where the energy is moving next.</p>
                <p class="mb-4">Afterward, we move into a deep gong journey. The sound frequencies support the calming of the nervous system and help integrate the experience in both body and subconscious. This is a space where transformation can take root.</p>
                <p class="mb-4 text-gray-700">This evening is for closure, integration, and consciously starting a new phase.</p>
                <p class="mb-6 font-medium">Everything you need is already here. Just show up and allow yourself to receive.</p>

                <h3 class="text-xl font-semibold text-gray-800 mt-8 mb-3 flex items-center"><span class="text-pink-500 mr-2">✧</span> The Ritual Flow</h3>
                <ul class="list-disc pl-5 space-y-2 mb-8">
                    <li>Space-opening meditation</li>
                    <li>Cacao ceremony and conscious drinking</li>
                    <li>Intention setting</li>
                    <li>Sound space to hold your intention (crystal bowls and gong)</li>
                    <li>Space-closing meditation</li>
                    <li>Group sharing and integration</li>
                </ul>

                <h3 class="text-xl font-semibold text-gray-800 mt-8 mb-3 flex items-center"><span class="text-pink-500 mr-2">✧</span> Marit & David</h3>
                <p class="mb-4">We are Marit and David. We have shared a path for over 30 years—navigating life, raising a family, and now sharing a unified holistic mission. From Estonia, life brought us to the United States, where we lived for nearly 30 years and went through profound inner transformations.</p>
                <p class="mb-4">We experienced a society of wellness that valued security more than the soul. We experienced success and burnout, stability as well as inner emptiness. Now, we have made a conscious turn in our journey and have returned to our roots in our native Estonia—more conscious, experienced, and open-hearted.</p>
                <p class="mb-4">Our co-created holistic vision, Casa Rituals, was born from this inner experience. Consequently, Casa Rituals is a temple for those who are ready to experience their own inner evolution and see their life as a conscious journey.</p>
                <p class="mb-4 text-sm text-gray-600 bg-gray-50 p-4 rounded-lg mt-6"><strong>David</strong> is a certified sound therapist, Yoga Nidra, and Reiki Master, combining vibrational therapy, energy work, and conscious presence in his practice.<br><br><strong>Marit</strong> is a certified ceremony creator and space holder with a Quantum Dowsing Mastery certification, combining ritual, energy perception, and conscious space creation in her work.</p>
            `,
            highlights: ['Astrological Insights', 'Ceremonial Cacao', 'Crystal Bowls & Gong Journey', 'Guided Meditation']
        },
        et: {
            title: 'Kevade Rituaal Kakao ja Gongi rännakuga',
            date: '17. aprill 2026',
            location: 'Goyoga Tallinn Stuudio',
            organizer: 'Casa Rituals',
            description: 'Alustame õhtut lühikese astroloogilise sissevaatega kevadesse, et mõista, millised energiad on hetkel liikumises ja mida see periood sinus aktiveerib.',
            fullDescription: `
                <p class="mb-4">Alustame õhtut lühikese astroloogilise sissevaatega kevadesse, et mõista, millised energiad on hetkel liikumises ja mida see periood sinus aktiveerib.</p>
                <p class="mb-4">Seejärel alustame tseremoniaalse kakaoga, et avada süda ja tuua selgus sellesse, mida see periood sinus liigutas. Jagan ka lühikest astroloogilist ülevaadet – et mõista, millise suurema tsükli me nüüd lõpetame ja kuhu energia edasi liigub.</p>
                <p class="mb-4">Seejärel liigume sügavasse gongirännakusse. Helisagedused toetavad närvisüsteemi rahunemist ja aitavad integreerida kogetu nii kehas kui alateadvuses. See on ruum, kus muutus saab kinnistuda.</p>
                <p class="mb-4 text-gray-700">See õhtu on sulgemiseks, integreerimiseks ja teadlikuks uue faasi alustamiseks.</p>
                <p class="mb-6 font-medium">Kõik vajalik on kohapeal olemas. Sina tule kohale ja luba endal vastu võtta.</p>

                <h3 class="text-xl font-semibold text-gray-800 mt-8 mb-3 flex items-center"><span class="text-pink-500 mr-2">✧</span> Rituaali Kulg</h3>
                <ul class="list-disc pl-5 space-y-2 mb-8">
                    <li>Ruumi avamise meditatsioon</li>
                    <li>Kakaotseremoonia ja teadlik kakao joomine</li>
                    <li>Kavatsuse seadmine</li>
                    <li>Heliruum kristallkausside ja gongiga kavatsuse hoidmiseks</li>
                    <li>Ruumi sulgemise meditatsioon</li>
                    <li>Grupi jagamine ja integratsioon</li>
                </ul>

                <h3 class="text-xl font-semibold text-gray-800 mt-8 mb-3 flex items-center"><span class="text-pink-500 mr-2">✧</span> Marit & David</h3>
                <p class="mb-4">Meie oleme Marit ja David. Oleme koos elanud ja jaganud ühist teed üle 30 aasta – käies läbi elu, kasvatades peret ja nüüd omades ühtset holistlikku missiooni. Eestist viis elu meid Ameerika Ühendriikidesse, kus elasime ligi 30 aastat ja läbisime ka sügavaid sisemisi muutuseid.</p>
                <p class="mb-4">Oleme saanud olla osa heaolu ühiskonnast, mis väärtustas turvalisust rohkem kui hinge. Kogesime edu ja läbipõlemist, stabiilsust ja ühtlasi ka sisemist tühjust. Nüüd oleme teinud teadliku pöörde oma rännakul ja oleme tagasi oma juurte juures koduses Eestis – teadlikumate, kogenenumate ja sisemuselt avatumatena.</p>
                <p class="mb-4">Meie ühiselt loodud holistiline visioon Casa Rituals sündis sellest sisemisest kogemusest. Sellest tulenevalt on ka Casa Rituals tempel neile, kes on valmis kogema oma sisemist arengut ja nägema oma elu kui teadlikku teekonda.</p>
                <p class="mb-4 text-sm text-gray-600 bg-gray-50 p-4 rounded-lg mt-6"><strong>David</strong> on sertifitseeritud heliterapeut, jooga nidra ja Reiki Meister, ühendades oma töös vibratsiooniteraapia, energiatöö ja teadliku kohalolu.<br><br><strong>Marit</strong> on sertifitseeritud tseremooniate looja ja ruumihoidja ning omab Quantum Dowsing Mastery taseme sertifikaati, ühendades oma töös rituaali, energiataju ja teadliku ruumi loomise.</p>
            `,
            highlights: ['Astroloogiline sissevaade', 'Tseremoniaalne kakao', 'Kristallkausid ja gongirännak', 'Juhendatud meditatsioon']
        },
        fi: {
            title: 'Kevätjuhla kaakaolla ja gongimatkalla',
            date: '17. huhtikuuta 2026',
            location: 'Goyoga Tallinn Studio',
            organizer: 'Casa Rituals',
            description: 'Aloitamme illan lyhyellä astrologisella katsauksella kevääseen, jota seuraa seremoniallinen kaakao ja syvä gongimatka.',
            fullDescription: `
                <p class="mb-4">Aloitamme illan lyhyellä astrologisella katsauksella kevääseen, jotta ymmärrämme, mitä energioita on tällä hetkellä liikkeellä ja mitä tämä ajanjakso aktivoi sinussa.</p>
                <p class="mb-4">Tämän jälkeen aloitamme seremoniallisella kaakaolla sydämen avaamiseksi ja selkeyden tuomiseksi siihen, mitä tämä ajanjakso on nostanut esiin. Jaan myös lyhyen astrologisen katsauksen ymmärtääksemme suuremman syklin, jota olemme päättämässä, ja minne energia siirtyy seuraavaksi.</p>
                <p class="mb-4">Sitten siirrymme syvään gongimatkaan. Äänitaajuudet auttavat hermostoa rauhoittumaan ja integroimaan kokemuksen sekä kehossa että alitajunnassa. Tämä on tila, jossa muutos voi juurtua.</p>
                <p class="mb-4 text-gray-700">Tämä ilta on tarkoitettu sulkemiselle, integraatiolle ja uuden vaiheen tietoiselle aloittamiselle.</p>
                <p class="mb-6 font-medium">Kaikki tarvittava on paikan päällä. Tule vain paikalle ja salli itsesi vastaanottaa.</p>

                <h3 class="text-xl font-semibold text-gray-800 mt-8 mb-3 flex items-center"><span class="text-pink-500 mr-2">✧</span> Rituaalin Kulku</h3>
                <ul class="list-disc pl-5 space-y-2 mb-8">
                    <li>Tilan avaava meditaatio</li>
                    <li>Kaakaoseremonia ja tietoinen juominen</li>
                    <li>Aikomuksen asettaminen</li>
                    <li>Äänitila aikomuksen tukemiseen (kristallimaljat ja gongi)</li>
                    <li>Tilan sulkeva meditaatio</li>
                    <li>Ryhmän jakaminen ja integraatio</li>
                </ul>

                <h3 class="text-xl font-semibold text-gray-800 mt-8 mb-3 flex items-center"><span class="text-pink-500 mr-2">✧</span> Marit & David</h3>
                <p class="mb-4">Olemme Marit ja David. Olemme jakaneet yhteisen polun yli 30 vuoden ajan – kasvattaen perhettä ja nykyään jakaen yhtenäisen holistisen mission. Virosta elämä vei meidät Yhdysvaltoihin, jossa asuimme lähes 30 vuotta käyden läpi syviä sisäisiä muutoksia.</p>
                <p class="mb-4">Saimme kokea hyvinvointiyhteiskunnan, joka arvosti turvallisuutta enemmän kuin sielua. Koimme niin menestystä, loppuunpalamista, vakautta kuin myös sisäistä tyhjyyttä. Nyt olemme tehneet tietoisen käännöksen matkallamme ja palanneet juurillemme Viroon – tietoisempina, kokeneempina ja avosydämisempinä.</p>
                <p class="mb-4">Yhdessä luomamme holistinen visio Casa Rituals syntyi tästä sisäisestä kokemuksesta. Siksi Casa Rituals on temppeli niille, jotka ovat valmiita kokemaan oman sisäisen kehityksensä ja näkemään elämänsä tietoisena matkana.</p>
                <p class="mb-4 text-sm text-gray-600 bg-gray-50 p-4 rounded-lg mt-6"><strong>David</strong> on lisensoitu ääniterapeutti, Yoga Nidra ja Reiki Master, joka yhdistää työssään värähtelyterapian, energiatyön ja tietoisen läsnäolon.<br><br><strong>Marit</strong> on sertifioitu seremonioiden luoja ja tilanpitäjä, jolla on Quantum Dowsing Mastery -sertifikaatti, ja joka yhdistää työssään rituaalin, energiatajun ja tietoisen tilan luomisen.</p>
            `,
            highlights: ['Astrologinen katsaus', 'Seremoniallinen kaakao', 'Kristallimaljat ja gongi', 'Ohjattu meditaatio']
        },
        ru: {
            title: 'Весенний ритуал с какао и гонгом',
            date: '17 апреля 2026',
            location: 'Студия Goyoga Tallinn',
            organizer: 'Casa Rituals',
            description: 'Мы начинаем вечер с короткого астрологического обзора весны, за которым последует церемониальное какао и глубокое путешествие с гонгом.',
            fullDescription: `
                <p class="mb-4">Мы начинаем вечер с небольшого астрологического обзора весны, чтобы понять, какие энергии сейчас движутся и что этот период активирует в вас.</p>
                <p class="mb-4">Затем мы открываем сердце церемониальным какао, чтобы внести ясность в то, что этот период пробудил в вас. Я также поделюсь кратким астрологическим обзором — чтобы понять, какой большой цикл мы сейчас завершаем и куда движется энергия дальше.</p>
                <p class="mb-4">После этого мы переходим к глубокому путешествию с гонгом. Звуковые частоты помогают успокоить нервную систему и интегрировать пережитое как в теле, так и в подсознании. Это пространство, где изменения могут закрепиться.</p>
                <p class="mb-4 text-gray-700">Этот вечер предназначен для завершения, интеграции и осознанного начала нового этапа.</p>
                <p class="mb-6 font-medium">Все необходимое уже есть на месте. Просто придите и позвольте себе принять опыт.</p>

                <h3 class="text-xl font-semibold text-gray-800 mt-8 mb-3 flex items-center"><span class="text-pink-500 mr-2">✧</span> Ход Ритуала</h3>
                <ul class="list-disc pl-5 space-y-2 mb-8">
                    <li>Медитация на открытие пространства</li>
                    <li>Церемония какао и осознанное распитие</li>
                    <li>Установка намерения</li>
                    <li>Звуковое пространство для поддержания намерения (хрустальные чаши и гонг)</li>
                    <li>Медитация на закрытие пространства</li>
                    <li>Групповая интеграция</li>
                </ul>

                <h3 class="text-xl font-semibold text-gray-800 mt-8 mb-3 flex items-center"><span class="text-pink-500 mr-2">✧</span> Марит и Дэвид</h3>
                <p class="mb-4">Мы — Марит и Дэвид. Мы делим общий путь уже более 30 лет — проживая жизнь, воспитывая семью и теперь обладая единой холистической миссией. Из Эстонии жизнь привела нас в США, где мы прожили почти 30 лет и прошли через глубокие внутренние трансформации.</p>
                <p class="mb-4">Мы смогли стать частью общества благополучия, которое ценило стабильность больше, чем душу. Мы познали и успех, и выгорание, стабильность и одновременно внутреннюю пустоту. Теперь мы совершили осознанный поворот на нашем пути и вернулись к своим корням в родную Эстонию — более осознанными, опытными и открытыми сердцем.</p>
                <p class="mb-4">Созданное нами холистическое видение Casa Rituals родилось из этого внутреннего опыта. Поэтому Casa Rituals — это храм для тех, кто готов испытать свое внутреннее развитие и увидеть свою жизнь как осознанное путешествие.</p>
                <p class="mb-4 text-sm text-gray-600 bg-gray-50 p-4 rounded-lg mt-6"><strong>Дэвид</strong> — сертифицированный звукотерапевт, Мастер Йога Нидры и Рейки, объединяющий в своей работе вибрационную терапию, работу с энергией и осознанное присутствие.<br><br><strong>Марит</strong> — сертифицированная создательница церемоний, обладательница сертификата Quantum Dowsing Mastery, объединяющая ритуалы, чувствование энергий и создание осознанного пространства.</p>
            `,
            highlights: ['Астрологический обзор', 'Церемониальное какао', 'Хрустальные чаши и гонг', 'Медитация']
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
    },
    {
        id: 'open-day-may-2026',
        type: 'event',
        category: 'estonia',
        active: true,
        featured: true,
        startDate: '2026-05-02',
        expiryDate: '2026-05-02',
        startTime: '09:00',
        endTime: '17:00',
        price: 0,
        memberPrice: 0,
        image: 'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0',
        teachers: [],
        registerLink: 'mailto:events@goyoga.ee',
        en: {
            title: 'Goyoga Studio Open Day | Yoga & Wellness',
            date: 'May 2, 2026',
            location: 'Goyoga Tallinn Studio',
            organizer: 'Goyoga Tallinn',
            description: 'Join us for a wonderful community Saturday in the heart of Tallinn! Come and explore our studio, try out classes, and meet our teachers.',
            fullDescription: 'Our Open Day is a great opportunity to get to know our studio and community. Throughout the day, we will be hosting taster classes, lectures, rituals, and sharing delicious flavors. You will have the chance to meet our teachers and practitioners, ask questions, and simply enjoy a mindful weekend. \n\nThe Open Day is completely FREE to attend. Official booking for specific taster classes opens on April 6th, but you can pre-register your interest via email right now.',
            highlights: ['Free Taster Classes', 'Lectures & Rituals', 'Meet the Teachers', 'Community Gathering']
        },
        et: {
            title: 'Goyoga Stuudio Lahtiste Uste Päev | Jooga & Heaolu',
            date: '2. mai 2026',
            location: 'Goyoga Tallinn Stuudio',
            organizer: 'Goyoga Tallinn',
            description: 'Suurepärane kogukonna laupäev Tallinna kesklinnas. Tule tutvu meie stuudio, õpetajate ja praktikatega.',
            fullDescription: 'Tule tutvu meie proovitundide, loengute, rituaalide ja maitsetega. Kohal on meie õpetajad ja praktikud, kellega saad vahetult suhelda. See on ideaalne võimalus astuda esimene samm joogamaailma või lihtsalt veeta üks mõnus ja teadlik laupäev sarnaselt mõtlevate inimeste seltsis.\n\nLahtiste uste päev on täiesti TASUTA. Kohtade ametlik broneerimine proovitundidesse avaneb 6. aprillil, samas saad juba praegu oma huvi eelregistreerida.',
            highlights: ['Tasuta proovitunnid', 'Loengud ja rituaalid', 'Kohtumine õpetajatega', 'Mõnus kogukond']
        },
        fi: {
            title: 'Goyoga-studion Avoimet Ovet | Jooga & Hyvinvointi',
            date: '2. toukokuuta 2026',
            location: 'Goyoga Tallinn Studio',
            organizer: 'Goyoga Tallinn',
            description: 'Upea yhteisöllinen lauantai Tallinnan keskustassa. Tule tutustumaan studioomme, opettajiimme ja harjoituksiimme.',
            fullDescription: 'Tule kokeilemaan näytetunteja, kuuntelemaan luentoja, osallistumaan rituaaleihin ja nauttimaan mauista. Opettajamme ja harjoittajamme ovat paikalla vastaamassa kysymyksiin ja vaihtamassa ajatuksia. \n\nAvoimet ovet on täysin ILMAINEN tapahtuma. Virallinen paikkavaraus näytetunneille aukeaa 6. huhtikuuta, mutta voit ennakkoilmoittautua jo nyt.',
            highlights: ['Ilmaisia näytetunteja', 'Luentoja ja rituaaleja', 'Tapaa opettajat', 'Yhteisöllinen päivä']
        },
        ru: {
            title: 'День открытых дверей Goyoga | Йога и здоровье',
            date: '2 мая 2026',
            location: 'Студия Goyoga Tallinn',
            organizer: 'Goyoga Tallinn',
            description: 'Прекрасная общественная суббота в центре Таллина! Приходите познакомиться с нашей студией, попробовать занятия и встретиться с преподавателями.',
            fullDescription: 'Наш День открытых дверей — это отличная возможность познакомиться с нашей студией и сообществом. В течение дня мы проведем пробные занятия, лекции, ритуалы и предложим вкусные угощения. У вас будет возможность встретиться с нашими учителями и практиками, задать вопросы и просто отлично провести выходные.\n\nДень открытых дверей абсолютно БЕСПЛАТНЫЙ. Официальное бронирование на конкретные пробные занятия открывается 6 апреля, но вы можете предварительно зарегистрироваться по электронной почте уже сейчас.',
            highlights: ['Бесплатные пробные занятия', 'Лекции и ритуалы', 'Знакомство с преподавателями', 'Собрание сообщества']
        }
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { eventsData };
}
