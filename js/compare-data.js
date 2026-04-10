const compareData = {
    en: {
        hero: {
            tagline: "Transparent Pricing",
            title: "Compare Plans",
            description: "Find the perfect pricing option that fits your practice schedule and commitment level. From drop-ins to annual memberships, we make it simple to understand your value."
        },
        table: {
            headers: ["Option", "Price", "Cost Per Class", "Validity / Commitment", "Access Type"],
            sections: [
                {
                    title: "Single Sessions",
                    rows: [
                        ["1x Session", "18€", "18.00€", "1 Class", "Any Scheduled Class"],
                        ["Student", "15€", "15.00€", "1 Class", "Any Scheduled Class"],
                        ["Senior", "10€", "10.00€", "1 Class", "Any Scheduled Class"]
                    ]
                },
                {
                    title: "Multi-Visit Passes",
                    rows: [
                        ["5-Visit Pass", "50€", "10.00€", "20 Days", "Any Scheduled Class"],
                        ["12-Visit Pass", "115€", "9.58€", "60 Days", "Any Scheduled Class"],
                        ["20-Visit Pass", "199€", "9.95€", "6 Months", "Any Scheduled Class"]
                    ]
                },
                {
                    title: "Memberships (Monthly Payments)",
                    rows: [
                        ["1-Month Pass", "79€", "~9.87€ (2x/wk)", "30 Days (No lock-in)", "All Classes"],
                        ["Full Pass | 1st Year", "69€/mo", "~8.60€ (2x/wk)", "12-Month Contract", "All Classes"],
                        ["Ashtanga Pass | 1st Year", "59€/mo", "~7.35€ (2x/wk)", "12-Month Contract", "Ashtanga Only"],
                        ["Community Support Pass", "45€/mo", "~5.60€ (2x/wk)", "1 Month (Renewable)", "Daytime Only (Unemployed/Transitions)"]
                    ]
                }
            ]
        }
    },
    et: {
        hero: {
            tagline: "Läbipaistev Hinnakiri",
            title: "Võrdle Pakette",
            description: "Leia sobivaim hinnapakett, mis sobib sinu ajakava ja pühendumisega. Alates üksikkordadest kuni aastaste liikmelisusteni teeme valiku lihtsaks ja arusaadavaks."
        },
        table: {
            headers: ["Pakett", "Hind", "Korra Hind", "Kehtivus / Siduvus", "Ligipääs"],
            sections: [
                {
                    title: "Üksikkord",
                    rows: [
                        ["1x Kord", "18€", "18.00€", "1 Tund", "Mistahes Tund"],
                        ["Tudeng", "15€", "15.00€", "1 Tund", "Mistahes Tund"],
                        ["Seenior", "10€", "10.00€", "1 Tund", "Mistahes Tund"]
                    ]
                },
                {
                    title: "Mitmikkorrakaardid",
                    rows: [
                        ["5-Korra Pass", "50€", "10.00€", "20 Päeva", "Mistahes Tund"],
                        ["12-Korra Pass", "115€", "9.58€", "60 Päeva", "Mistahes Tund"],
                        ["20-Korra Pass", "199€", "9.95€", "6 Kuud", "Mistahes Tund"]
                    ]
                },
                {
                    title: "Liikmelisus (Kuutasud)",
                    rows: [
                        ["1-Kuu Pass", "79€", "~9.87€ (2x ndls)", "30 Päeva (Ei ole seotud)", "Kõik Tunnid"],
                        ["Täispakett | 1. Aasta", "69€/kuu", "~8.60€ (2x ndls)", "12-Kuu Leping", "Kõik Tunnid"],
                        ["Ashtanga Pakett | 1. Aasta", "59€/kuu", "~7.35€ (2x ndls)", "12-Kuu Leping", "Ainult Ashtanga"],
                        ["Kogukonna Toetuspass", "45€/kuu", "~5.60€ (2x ndls)", "1 Kuu (Pikendatav)", "Ainult Päevased Tunnid (Tööotsijatele)"]
                    ]
                }
            ]
        }
    },
    fi: {
        hero: {
            tagline: "Läpinäkyvä Hinnoittelu",
            title: "Vertaa Paketteja",
            description: "Löydä harjoitusaikatauluusi ja sitoutumiseesi sopiva hinnoitteluvaihtoehto. Yksittäiskäynneistä vuosijäsenyyksiin, teemme valinnan helpoksi."
        },
        table: {
            headers: ["Paketti", "Hinta", "Kerran Hinta", "Voimassaolo / Sitoumus", "Pääsy"],
            sections: [
                {
                    title: "Yksittäiskerta",
                    rows: [
                        ["1x Kerta", "18€", "18.00€", "1 Tunti", "Kaikki Tunnit"],
                        ["Opiskelija", "15€", "15.00€", "1 Tunti", "Kaikki Tunnit"],
                        ["Seniori", "10€", "10.00€", "1 Tunti", "Kaikki Tunnit"]
                    ]
                },
                {
                    title: "Useamman kerran liput",
                    rows: [
                        ["5-Kerran Lippu", "50€", "10.00€", "20 Päivää", "Kaikki Tunnit"],
                        ["12-Kerran Lippu", "115€", "9.58€", "60 Päivää", "Kaikki Tunnit"],
                        ["20-Kerran Lippu", "199€", "9.95€", "6 Kuukautta", "Kaikki Tunnit"]
                    ]
                },
                {
                    title: "Jäsenyydet (Kuukausimaksut)",
                    rows: [
                        ["1 Kuukauden Paketti", "79€", "~9.87€ (2x vkossa)", "30 Päivää (Ei sitoumusta)", "Kaikki Tunnit"],
                        ["Täyspaketti | 1. Vuosi", "69€/kk", "~8.60€ (2x vkossa)", "12 Kuukauden Sopimus", "Kaikki Tunnit"],
                        ["Ashtanga-Paketti | 1. Vuosi", "59€/kk", "~7.35€ (2x vkossa)", "12 Kuukauden Sopimus", "Vain Ashtanga"],
                        ["Yhteisön Tukipassi", "45€/kk", "~5.60€ (2x vkossa)", "1 Kuukausi (Uusittava)", "Vain Päivätunnit (Työnhakijoille)"]
                    ]
                }
            ]
        }
    },
    ru: {
        hero: {
            tagline: "Прозрачное ценообразование",
            title: "Сравнить пакеты",
            description: "Найдите идеальный вариант по цене, который подходит вашему графику и уровню вовлеченности. От разовых занятий до годовых абонементов — мы помогаем понять вашу выгоду."
        },
        table: {
            headers: ["Вариант", "Цена", "Цена за занятие", "Срок действия / Обязательство", "Тип доступа"],
            sections: [
                {
                    title: "Разовые занятия",
                    rows: [
                        ["1x Занятие", "18€", "18.00€", "1 Занятие", "Любое занятие"],
                        ["Студент", "15€", "15.00€", "1 Занятие", "Любое занятие"],
                        ["Пенсионер", "10€", "10.00€", "1 Занятие", "Любое занятие"]
                    ]
                },
                {
                    title: "Многоразовые абонементы",
                    rows: [
                        ["5 Занятий", "50€", "10.00€", "20 Дней", "Любое занятие"],
                        ["12 Занятий", "115€", "9.58€", "60 Дней", "Любое занятие"],
                        ["20 Занятий", "199€", "9.95€", "6 Месяцев", "Любое занятие"]
                    ]
                },
                {
                    title: "Членство (Ежемесячные платежи)",
                    rows: [
                        ["Абонемент на 1 месяц", "79€", "~9.87€ (2x неделю)", "30 Дней (Без обязательств)", "Все занятия"],
                        ["Полный Абонемент | 1й Год", "69€/мес", "~8.60€ (2x неделю)", "Контракт на 12 месяцев", "Все занятия"],
                        ["Аштанга Абонемент | 1й Год", "59€/мес", "~7.35€ (2x неделю)", "Контракт на 12 месяцев", "Только Аштанга"],
                        ["Поддерживающий Абонемент", "45€/мес", "~5.60€ (2x неделю)", "1 Месяц (Продлеваемый)", "Только дневные (В поиске работы)"]
                    ]
                }
            ]
        }
    }
};

window.compareData = compareData;
