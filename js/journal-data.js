/**
 * journal-data.js
 * Central data store for Goyoga Journal articles.
 * Multi-language support follows the site's existing i18n structure.
 */

const journalData = {
    articles: [
        {
            id: 'ashtanga-not-for-everyone',
            date: '2025-09-24',
            category: { en: 'Practice', et: 'Praktika', fi: 'Harjoitus', ru: 'Практика' },
            image: '/assets/journal/ashtanga-yoga-raili-allas.jpg',
            author: 'Raili Maripuu',
            photographer: {
                name: 'Andri Allas',
                instagram: 'https://www.instagram.com/andriallas'
            },
            teacherId: 'raili-maripuu',
            practiceId: 'ashtanga',
            hashtags: ['ashtanga', 'practice', 'beginners', 'tallinn', 'learn', 'series', 'school', 'complete', 'traditional', 'ashtanga yoga', 'primary series', 'yoga school', 'traditional ashtanga yoga', 'ashtanga yoga school'],
            readTime: { en: '6 min read', et: '6 min lugemist', fi: '6 min lukuaika', ru: '6 мин чтения' },
            translations: {
                en: {
                    title: 'Ashtanga yoga is not for everyone?',
                    excerpt: 'Ashtanga yoga is the most wonderful and transformative yoga practise, but it is not for everyone. Discover why discipline is the path to true strength.',
                    content: `
                        <p>Not the best opening statement to promote ashtanga yoga just at the start of the new season. But I’m going to say this again – ashtanga yoga is the most wonderful and transformative yoga practise but it’s not for everyone.</p>
                        <blockquote>"Anyone can practise. Except lazy people; lazy people can’t practise ashtanga yoga." - Sri K Pattabhi Jois</blockquote>
                        <p>Whilst this quote has a lot of simple truth in it, many people nowadays face many other challenges that keep them from having a daily yoga practice. At our <strong>ashtanga yoga school</strong> in <strong>Tallinn</strong>, we see students navigating these challenges every day to <strong>learn</strong> the <strong>traditional ashtanga yoga</strong> method.</p>
                        
                        <h3>Ashtanga is demanding</h3>
                        <p>It’s never any easy option. Ashtanga yoga tests your body, mind and soul in any which way from all different directions. It’s the early mornings. It’s the daily discipline. It’s the showing up. It’s everything else in your life that you must navigate. Daily ashtanga <strong>practice</strong> is one of the biggest and purest tests you are ever going to take as it lasts for a lifetime.</p>
                        
                        <h3>Ashtanga is a daily discipline</h3>
                        <p>Let’s face it most people prefer living a comfortable life as opposed to a daily early morning yoga practise that challenges you physically, mentally and emotionally. The only competition is with yourself, and you can’t escape yourself. Period. The only way out is through all of it. For a significant transformation in your life, you should practise ashtanga at least 4x per week. Think of it as adding to your daily cleansing routine much like your daily shower.</p>

                        <h3>When the mind takes over</h3>
                        <p>As it mostly does. There are and will be days when you don’t want to practise at all. When practise feels horrible. When the mind wanders throughout the entire practise. When you are faced with the restless ego, anxiety and exhaustion. On those days, I remind to myself that ashtanga is just a super useful tool to check-in how you feel in your body and in your head. In this beautiful practise we have all the tools to overcome all of the above. If you want.</p>

                        <h3>It's a long-term game</h3>
                        <p>Ashtanga is a yoga <strong>practice</strong> for life. It most definitely is not a seasonal quick fix. Although at the start of their ashtanga journey most people progress and experience positive changes in their lives relatively quickly, this transformation slows down the longer you practise. For <strong>beginners</strong>, starting the <strong>primary series</strong> can feel like a steep climb, but this <strong>complete</strong> system is designed for steady progress.</p>
                        <p>The beauty of this practise is that you show up daily (on your mat) and do what you can do. And that’s more than enough for that day. On challenging days, I always think of a saying by a fellow ashtanga teacher on the other side of the world “Today’s practise is a preparation for tomorrow.” Having practised daily for over 16 years, I 100% vouch for this.</p>

                        <h3>So why do people keep practising?</h3>
                        <p>Ashtanga yoga in fact is for everyone. The feeling you get through ashtanga yoga practise cannot be described. It needs to be experienced. Even if you try ashtanga once, the feeling after just the one practise is a state of bliss that we are all always subconsciously searching for as human beings. It’s the sense of being cleansed and purified in your body and cleared in your mind. With ashtanga you become light and full of energy.</p>
                        <p>The systemised structure and the relative strictness of <strong>ashtanga yoga</strong> is what makes it beautiful and a life-changing practise. With regular practise, ashtanga yoga becomes a steady thing to hold on to through difficult and challenging times. It also keeps you grounded when things are going incredibly well. The <strong>traditional</strong> teaching method is what protects the integrity and value of ashtanga yoga, keeps it niche, and makes it so transformative.</p>

                        <h3>How to (re)start with ashtanga yoga?</h3>
                        <p>Ashtanga starts with the physical yoga practise and foremost with turning up. Find yourself a good <strong>yoga school</strong> and a good teacher. Create a daily or weekly routine that works for you and doesn’t stress you. Create a space at home where you can practise with no interference. Even if it’s for 10 minutes a day. Use simple incentives to make the practise enjoyable, such as a good yoga mat, lovely eye pillow for savasana etc.</p>
                        <p>There are and always will be people who quit their daily yoga practise for whatever reason. But there are even more people who continue and make ashtanga yoga their lifetime practise. I am proud to be one of those latter people. Join us at our <strong>traditional ashtanga yoga school</strong> to begin your own <strong>primary series</strong> journey.</p>
                    `
                },
                et: {
                    title: 'Ashtanga jooga ei sobi kõigile?',
                    excerpt: 'Ashtanga jooga on üks efektiivsemaid ja ilusamaid joogapraktikaid, kuid see ei sobi kõigi jaoks. Avasta, miks regulaarne praktika on elumuutev.',
                    content: `
                        <p>Pole just kõige targem mõte alustada uut hooaega ashtanga jooga mahategemisega. Sellest hoolimata ütlen veelkord, et kuigi ashtanga jooga on üks efektiivsemaid ja ilusamaid joogapraktikaid, ei sobi ta kõigi jaoks.</p>
                        <blockquote>"Joogaga saavad tegeleda kõik. Välja arvatud laisad inimesed." - Sri K Pattabhi Jois</blockquote>
                        <p>Kuigi selles tsitaadis on peidus palju lihtsat tõde, on enamus inimestel oma elu väljakutseid täis laotud, mis takistavad neil igapäevase joogapraktika tekkimist. Meie <strong>ashtanga jooga koolis Tallinnas</strong> aitame õpilastel nendest väljakutsetest üle saada, et õppida selgeks <strong>traditsiooniline ashtanga jooga</strong>.</p>
                        <h3>Ashtanga on nõudlik</h3>
                        <p>See ei ole kunagi olnud kerge valik. Ashtanga paneb Su keha, meele ja emotsioonid proovile absoluutselt kõiges. <strong>Algajatele</strong> võib <strong>esimese seeria</strong> (primary series) omandamine tunduda raske, kuid see <strong>täielik</strong> süsteem on loodud järjepidevaks arenguks.</p>
                        <h3>Ashtanga on pikk mäng</h3>
                        <p>See joogapraktika on terveks eluks. Kindlasti ei ole ashtanga hooajaline kiire lahendus. Tänane praktika valmistab Sind ette homseks.</p>
                    `
                },
                fi: {
                    title: 'Ashtangajooga ei sovi kaikille?',
                    excerpt: 'Ashtangajooga on vaikuttavinta ja muuttavinta joogaa, mutta se haastaa jokaisen solusi. Selvitä, miksi kurinalaisuus on avain sisäiseen voimaan.',
                    content: `
                        <p>Ashtangajooga on upeaa ja mullistavaa, mutta se vaatii sitoutumista. Sri K Pattabhi Jois sanoi: "Kaikki voivat harjoitella, paitsi laiskat."</p>
                    `
                },
                ru: {
                    title: 'Аштанга-йога не для всех?',
                    excerpt: 'Аштанга-йога — самая чудесная и трансформирующая практика, но она бросает вызов каждой клетке вашего тела. Узнайте, почему дисциплина — это путь к истинной силе.',
                    content: `
                        <p>Аштанга-йога — это не просто упражнения, это дисциплина на всю жизнь. Как говорил Паттабхи Джойс: "Практиковать может каждый, кроме ленивых".</p>
                    `
                }
            }
        },
        {
            id: 'why-ashtanga',
            date: '2026-04-10',
            category: { en: 'Practice', et: 'Praktika', fi: 'Harjoitus', ru: 'Практика' },
            image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b',
            author: 'Raili Maripuu',
            hashtags: ['#ashtanga', '#yoga', '#mysore', '#discipline'],
            readTime: { en: '5 min read', et: '5 min lugemist', fi: '5 min lukuaika', ru: '5 мин чтения' },
            translations: {
                en: {
                    title: 'Why Ashtanga? The Power of Discipline',
                    excerpt: 'Discover why the traditional Mysore method is the ultimate mental and physical anchor for modern life.',
                    content: `
                        <p>In the noise of modern life, we often look for shortcuts. But some paths are meant to be walked one step at a time. Ashtanga Yoga is one of those paths.</p>
                        <h3>The Anchor of Mysore</h3>
                        <p>The Mysore method isn't just about sweat; it's about self-responsibility. When you step onto your mat at Goyoga, you aren't just following a teacher—you are listening to your own breath.</p>
                        <blockquote>"Yoga is 99% practice, 1% theory." - Pattabhi Jois</blockquote>
                        <p>Join us as we explore how this ancient discipline creates modern resilience.</p>
                    `
                },
                et: {
                    title: 'Miks Ashtanga? Distsipliini vägi',
                    excerpt: 'Avasta, miks traditsiooniline Mysore-meetod on moodsa elu parim vaimne ja füüsiline ankur.',
                    content: `
                        <p>Kaasaegse elu müras otsime me tihti otseteid. Kuid mõned teed on mõeldud käimiseks samm-sammult. Ashtanga jooga on üks neist teedest.</p>
                        <h3>Mysore-meetodi ankur</h3>
                        <p>Mysore-meetod ei tähenda ainult higi; see tähendab eneseasutust. Kui astud Goyoga matile, ei järgi sa lihtsalt õpetajat – sa kuulad oma hingamist.</p>
                        <p>Liitu meiega ja uuri, kuidas see iidne distsipliin loob kaasaegset vastupidavust.</p>
                    `
                },
                fi: {
                    title: 'Miksi Ashtanga? Kurinalaisuuden voima',
                    excerpt: 'Tutustu, miksi perinteinen Mysore-menetelmä on nykyajan elämän paras henkinen ja fyysinen ankkuri.',
                    content: `
                        <p>Nykypäivän hälinässä etsimme usein oikopolkuja. Mutta jotkut polut on tarkoitettu kuljettaviksi askel kerrallaan. Ashtanga-jooga on yksi näistä poluista.</p>
                        <h3>Mirore-menetelmän ankkuri</h3>
                        <p>Mysore-menetelmässä ei ole kyse vain hiestä, vaan itsensä vastuullisuudesta. Kun astut Goyogan matolle, et vain seuraa opettajaa – kuuntelet omaa hengitystäsi.</p>
                    `
                },
                ru: {
                    title: 'Почему Аштанга? Сила дисциплины',
                    excerpt: 'Узнайте, почему традиционный метод Майсор является лучшим ментальным и физическим якорем в современной жизни.',
                    content: `
                        <p>В шуме современной жизни мы часто ищем короткие пути. Но некоторые пути предназначены для того, чтобы идти по ним шаг за шагом. Аштанга-йога — один из таких путей.</p>
                        <h3>Якорь метода Майсор</h3>
                        <p>Метод Майсор — это не только пот; это самоответственность. Когда вы ступаете на коврик в Goyoga, вы не просто следуете за учителем — вы слушаете собственное дыхание.</p>
                    `
                }
            }
        },
        {
            id: 'sound-bath-science',
            date: '2026-04-05',
            category: { en: 'Wellness', et: 'Heaolu', fi: 'Hyvinvointi', ru: 'Велнес' },
            image: 'https://images.unsplash.com/photo-1545389336-cf090694435e',
            author: 'David Lepp',
            hashtags: ['#soundbath', '#wellness', '#meditation', '#gong'],
            readTime: { en: '4 min read', et: '4 min lugemist', fi: '4 min lukuaika', ru: '4 мин чтения' },
            translations: {
                en: {
                    title: 'The Science of Sound: How Gongs Heal',
                    excerpt: 'Explore how high-frequency vibrations reset your nervous system and clear mental blockages.',
                    content: `
                        <p>Sound isn't just something we hear; it's something we feel in our very cells. At Goyoga, our Sound Baths are more than just relaxation—they are a form of quantum restoration.</p>
                        <p>Guided by the resonance of gongs and crystal bowls, your brain waves shift from active 'Beta' states to restorative 'Theta' states.</p>
                    `
                },
                et: {
                    title: 'Heli teadus: Kuidas helid tervendavad',
                    excerpt: 'Uuri, kuidas kõrgsageduslikud vibratsioonid lähtestavad sinu närvisüsteemi ja puhastavad vaimseid blokeeringuid.',
                    content: `
                        <p>Heli ei ole lihtsalt midagi, mida me kuuleme; see on midagi, mida me tunneme oma rakkudes. Goyogas on helirännakud enamat kui lihtsalt lõõgastus.</p>
                    `
                },
                fi: {
                    title: 'Äänihoidon tiede: Miten gongit parantavat',
                    excerpt: 'Tutustu siihen, miten korkeataajuuksiset värähtelyt nollaavat hermostosi ja poistavat vaimisia tukoksia.',
                    content: `
                        <p>Ääni ei ole vain jotain, mitä kuulemme; see is jotain, mitä tunnemme soluissamme asti. Goyogassa äänikylvyt ovat enemmän kuin vain rentoutumista.</p>
                    `
                },
                ru: {
                    title: 'Наука звука: Как гонги исцеляют',
                    excerpt: 'Узнайте, как высокочастотные вибрации перезагружают вашу нервную систему и очищают ментальные блоки.',
                    content: `
                        <p>Звук — это не просто то, что мы слышим; это то, что мы чувствуем каждой клеткой своего тела. В Goyoga наши звуковые ванны — это больше, чем просто расслабление.</p>
                    `
                }
            }
        }
    ]
};

window.journalData = journalData;
