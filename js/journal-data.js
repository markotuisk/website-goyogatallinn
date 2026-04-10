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
            category: 'Practice',
            image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b',
            author: 'Raili Maripuu',
            readTime: { en: '5 min read', et: '5 min lugemist' },
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
                }
            }
        },
        {
            id: 'sound-bath-science',
            date: '2026-04-05',
            category: 'Wellness',
            image: 'https://images.unsplash.com/photo-1545389336-cf090694435e',
            author: 'David Lepp',
            readTime: { en: '4 min read', et: '4 min lugemist' },
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
                }
            }
        }
    ]
};

window.journalData = journalData;
