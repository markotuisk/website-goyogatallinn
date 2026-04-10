/**
 * journal-data.js
 * Central data store for Goyoga Journal articles.
 * Multi-language support follows the site's existing i18n structure.
 */

const journalData = {
    articles: [
        {
            id: 'why-ashtanga',
            date: '2026-04-10',
            category: { en: 'Practice', et: 'Praktika', fi: 'Harjoitus', ru: 'Практика' },
            image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b',
            author: 'Raili Maripuu',
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
                        <h3>Mysore-menetelmän ankkuri</h3>
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
