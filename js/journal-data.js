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
            image: 'https://images.unsplash.com/photo-1506126279646-a697353d3166',
            author: 'Raili Maripuu',
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
                        <p>It’s never any easy option. Ashtanga yoga tests your body, mind and soul in any which way from all different directions. It’s the early mornings. It’s the daily discipline. It’s the showing up.</p>
                        <p>For <strong>beginners</strong>, starting the <strong>primary series</strong> can feel like a steep climb, but this <strong>complete</strong> system is designed for steady progress. It's about more than just a workout; it's a <strong>traditional</strong> lineage that requires dedication.</p>
                        <h3>It's a long-term game</h3>
                        <p>Ashtanga is a yoga <strong>practice</strong> for life. It most definitely is not a seasonal quick fix. Today’s practise is a preparation for tomorrow. Having practised daily for over 16 years, I 100% vouch for this.</p>
                        <p>Ashtanga yoga in fact is for everyone. The feeling you get through ashtanga yoga practise cannot be described. It needs to be experienced.</p>
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
                        <p>Ääni ei ole vain jotain, mitä kuulemme; se on jotain, mitä tunnemme soluissamme asti. Goyogassa äänikylvyt ovat enemmän kuin vain rentoutumista.</p>
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
