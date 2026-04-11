/**
 * journal-data.js
 * Central data store for Goyoga Journal articles.
 * Multi-language support follows the site's existing i18n structure.
 */

const journalData = {
    articles: [
        {
            id: 'ashtanga-vs-vinyasa',
            date: '2025-10-17',
            category: { en: 'Practice', et: 'Praktika', fi: 'Harjoitus', ru: 'Практика' },
            image: '/assets/journal/ashtanga-ja-vinyasa-goyoga-estonia-tallinn-raili-maripuu-02.webp',
            author: 'Goyoga Community',
            teacherId: 'raili-maripuu',
            practiceId: 'ashtanga',
            hashtags: ['ashtanga', 'vinyasa', 'practice', 'comparison', 'tallinn', 'yoga style'],
            readTime: { en: '4 min read', et: '4 min lugemist', fi: '4 min lukuaika', ru: '4 мин чтения' },
            translations: {
                en: {
                    isOriginal: true,
                    title: 'A Comparison of Ashtanga and Vinyasa Yoga',
                    excerpt: 'Explore the key structural differences and physiological benefits between Ashtanga and Vinyasa yoga.',
                    content: `
                        <p class="mb-8 font-medium">Observe your body as you stand. You are choosing between Ashtanga and Vinyasa yoga. Both methods connect breath with physical movement. Both methods raise your internal body temperature. However, the anatomical demands and the effects on the nervous system are completely different.</p>

                        <div class="space-y-6 mb-16">
                            <h3 class="text-2xl font-serif mb-6 text-pink-600">Ashtanga yoga and structural stability</h3>
                            <p>Ashtanga relies on a fixed sequence. You perform exactly the same postures every day. You observe your physical limits through repetition. This method trains the nervous system to find peace under physical stress. You develop deep structural stability.</p>
                            <p>The sequence requires precise anatomical alignment. You hold postures for five complete breath cycles. You focus your gaze on a single physical point. You engage specific internal muscle contractions. The pelvic floor and lower abdomen pull inwards. These actions create core stability. You move using a specific breathing technique. The breath creates a clear sound at the back of the throat.</p>
                            <p>Notice your mental reaction to the strict routine. Ask yourself specific questions before practicing. Do I need external structure today? Does repetition calm my nervous system? Ashtanga serves students who need grounding and predictable movement patterns.</p>
                        </div>
                        
                        <div class="space-y-6 mb-16">
                            <h3 class="text-2xl font-serif mb-6 text-pink-600">Vinyasa yoga and flowing adaptability</h3>
                            <p>Vinyasa means placing the body in a specific way. Teachers create new physical sequences every day. You move continuously from one posture to another. You move through multiple planes of motion. The practice challenges your proprioception and spatial awareness.</p>
                            <p>You perform a transition sequence between seated postures. You place your hands on the mat. You step back to a plank position. You lower your body towards the floor. You extend your spine in upward-facing dog. You bend your hips back into downward-facing dog. This specific transition realigns the spine. The movement creates bilateral symmetry in the body.</p>
                            <p>Constant movement requires immediate joint adaptation. Ask yourself questions about your current physical condition. Do I feel stiff in my daily movements? Do I need spontaneous physical expression? Vinyasa serves students who need fluidity and neuromuscular adaptability.</p>
                        </div>

                        <div class="space-y-6 mb-16">
                            <h3 class="text-2xl font-serif mb-6 text-pink-600">Integrating your choice</h3>
                            <p>Assess your anatomical needs today. Choose the method that best serves your nervous system. Commit to the physical practice. Observe the physiological changes in your body.</p>
                        </div>
                    `
                },
                et: {
                    isOriginal: true,
                    title: 'Ashtanga ja Vinyasa Jooga võrdluses.',
                    excerpt: 'Uuri Ashtanga ja Vinyasa jooga struktuurseid ja füsioloogilisi erinevusi, et leida endale sobivaim praktika.',
                    content: `
                        <p class="mb-8 font-medium">Jälgi seistes oma keha. Sa valid Ashtanga ja Vinyasa jooga vahel. Mõlemad meetodid seovad hingamise füüsilise liikumisega. Mõlemad meetodid tõstavad keha sisetemperatuuri. Anatoomilised nõudmised ja mõjud närvisüsteemile erinevad täielikult.</p>

                        <div class="space-y-6 mb-16">
                            <h3 class="text-2xl font-serif mb-6 text-pink-600">Ashtanga jooga ja struktuurne stabiilsus</h3>
                            <p>Ashtanga tugineb kindlale järjestusele. Sa sooritad iga päev täpselt samu poose. Sa jälgid oma füüsilisi piire läbi korduste. See meetod treenib närvisüsteemi leidma rahu füüsilise pinge all. Sa arendad sügavat struktuurset stabiilsust.</p>
                            <p>Järjestus nõuab kindlat anatoomilist joondust. Sa hoiad poose viis täielikku hingamistsüklit. Sa fookustad oma pilgu ühele füüsilisele punktile. Sa kaasad spetsiifilisi seesmisi lihaskontraktsioone. Vaagnapõhi ja alakõht tõmbuvad kokku. Need tegevused loovad keskme stabiilsuse. Sa liigud kasutades kindlat hingamistehnikat. Hingamine loob kurgu tagaosas selge heli.</p>
                            <p>Pane tähele oma vaimset reageeringut rangele rutiinile. Küsi endalt enne harjutamist kindlaid küsimusi. Kas ma vajan täna välist struktuuri? Kas kordamine rahustab mu närvisüsteemi? Ashtanga teenib õpilasi, kes vajavad maandust ja ettearvatavaid liikumismustreid.</p>
                        </div>
                        
                        <div class="space-y-6 mb-16">
                            <h3 class="text-2xl font-serif mb-6 text-pink-600">Vinyasa jooga ja voolav kohanemisvõime</h3>
                            <p>Vinyasa tähendab keha asetamist kindlal viisil. Õpetajad loovad iga päev uusi füüsilisi järjestusi. Sa liigud pidevalt ühest poosist teise. Sa liigud läbi mitme liikumistasandi. Harjutus esitab väljakutse sinu propriotseptsioonile ja ruumitajule.</p>
                            <p>Sa sooritad üleminekujärjestust istuvate pooside vahel. Sa asetad käed matile. Sa astud tagasi toenglamangusse. Sa langetad keha põranda poole. Sa sirutad selgroogu ülesvaatavas koeras. Sa painutad puusad tagasi allavaatavasse koera. See kindel üleminek joondab selgroo uuesti. Liikumine loob kehas kahepoolse sümmeetria.</p>
                            <p>Pidev liikumine nõuab kohest liigeste kohanemist. Küsi endalt küsimusi oma praeguse füüsilise seisundi kohta. Kas ma tunnen end igapäevases liikumises jäigalt? Kas ma vajan spontaanset füüsilist väljendust? Vinyasa teenib õpilasi, kes vajavad voolavust ja neuromuskulaarset kohanemisvõimet.</p>
                        </div>

                        <div class="space-y-6 mb-16">
                            <h3 class="text-2xl font-serif mb-6 text-pink-600">Oma valiku lõimimine</h3>
                            <p>Hinda täna oma anatoomilisi vajadusi. Vali meetod, mis teenib sinu närvisüsteemi kõige paremini. Pühendu füüsilisele harjutusele. Jälgi füsioloogilisi muutusi oma kehas.</p>
                        </div>
                    `
                },
                fi: {
                    isOriginal: false,
                    title: 'Vertaileva katsaus Ashtanga- ja Vinyasa-joogaan',
                    excerpt: 'Tutustu Ashtangan ja Vinyasan rakenteellisiin ja fysiologisiin eroihin löytääksesi sinulle sopivimman harjoituksen.',
                    content: `
                        <p class="mb-8 font-medium">Tarkkaile kehoasi seistessäsi. Olet valitsemassa Ashtanga- ja Vinyasa-joogan välillä. Molemmat menetelmät yhdistävät hengityksen fyysiseen liikkeeseen. Molemmat menetelmät nostavat kehon sisälämpötilaa. Anatomiset vaatimukset ja vaikutukset hermostoon ovat kuitenkin täysin erilaiset.</p>

                        <div class="space-y-6 mb-16">
                            <h3 class="text-2xl font-serif mb-6 text-pink-600">Ashtanga-jooga ja rakenteellinen vakaus</h3>
                            <p>Ashtanga perustuu kiinteään liikesarjaan. Suoritat päivittäin täsmälleen samat asennot. Tarkkailet fyysisiä rajojasi toiston kautta. Tämä menetelmä opettaa hermostoa löytämään rauhan fyysisen rasituksen alaisena. Kehität syvää rakenteellista vakautta.</p>
                            <p>Sarja edellyttää tarkkaa anatomista linjausta. Pidät asennot viiden kokonaisen hengityskierroksen ajan. Keskität katseesi yhteen fyysiseen pisteeseen. Otat käyttöön tietyt sisäiset lihassupistukset. Lantionpohja ja alavatsa vetäytyvät sisäänpäin. Nämä toiminnot luovat keskivartalon vakautta. Liikut käyttäen tiettyä hengitystekniikkaa. Hengitys luo selkeän äänen kurkun takaosaan.</p>
                            <p>Huomioi henkinen reaktiosi tiukkaan rutiiniin. Kysy itseltäsi tiettyjä kysymyksiä ennen harjoitusta. Tarvitsenko ulkoista rakennetta tänään? Rauhoittaako toisto hermostoani? Ashtanga palvelee oppilaita, jotka kaipaavat maadoittumista ja ennakoitavia liikemalleja.</p>
                        </div>
                        
                        <div class="space-y-6 mb-16">
                            <h3 class="text-2xl font-serif mb-6 text-pink-600">Vinyasa-jooga ja virtaava mukautuvuus</h3>
                            <p>Vinyasa tarkoittaa kehon asettamista tietyllä tavalla. Opettajat luovat uusia fyysisiä liikesarjoja joka päivä. Liikut jatkuvasti asennosta toiseen. Liikut useiden liikesuuntien kautta. Harjoitus haastaa asento- ja liikeaistiasi sekä avaruudellista hahmottamista.</p>
                            <p>Suoritat siirtymäsarjan istuma-asentojen välillä. Asetat kätesi matolle. Astut taaksepäin lankkuasentoon. Lasket kehosi kohti lattiaa. Ojennat selkärankasi ylöspäin katsovassa koirassa. Taivutat lantiosi taaksepäin alaspäin katsovaan koiraan. Tämä nimenomainen siirtymä linjaa selkärangan uudelleen. Liike luo kehossa kahdenvälisen symmetrian.</p>
                            <p>Jatkuva liike vaatii niveliltä välitöntä mukautumista. Kysy itseltäsi kysymyksiä nykyisestä fyysisestä tilastasi. Tuntuuko minusta jäykältä päivittäisissä liikkeissäni? Tarvitsenko spontaania fyysistä ilmaisua? Vinyasa palvelee oppilaita, jotka tarvitsevat sujuvuutta ja hermo-lihasjärjestelmän mukautuvuutta.</p>
                        </div>

                        <div class="space-y-6 mb-16">
                            <h3 class="text-2xl font-serif mb-6 text-pink-600">Valinnan integrointi</h3>
                            <p>Arvioi anatomiset tarpeesi tänään. Valitse se menetelmä, joka palvelee parhaiten hermostoasi. Sitoudu fyysiseen harjoitukseen. Tarkkaile fysiologisia muutoksia kehossasi.</p>
                        </div>
                    `
                },
                ru: {
                    isOriginal: false,
                    title: 'Сравнение Аштанга- и Виньяса-йоги',
                    excerpt: 'Изучите структурные и физиологические различия между Аштанга- и Виньяса-йогой, чтобы найти наиболее подходящую вам практику.',
                    content: `
                        <p class="mb-8 font-medium">Понаблюдайте за своим телом стоя. Вы выбираете между Аштанга и Виньяса-йогой. Оба метода связывают дыхание с физическим движением. Оба метода повышают внутреннюю температуру тела. Однако анатомические требования и влияние на нервную систему совершенно разные.</p>

                        <div class="space-y-6 mb-16">
                            <h3 class="text-2xl font-serif mb-6 text-pink-600">Аштанга-йога и структурная стабильность</h3>
                            <p>Аштанга опирается на фиксированную последовательность. Каждый день вы выполняете одни и те же позы. Вы наблюдаете за своими физическими пределами через повторения. Этот метод тренирует нервную систему находить покой в условиях физического напряжения. Вы развиваете глубокую структурную стабильность.</p>
                            <p>Последовательность требует точного анатомического выравнивания. Вы удерживаете позы в течение пяти полных циклов дыхания. Вы фокусируете свой взгляд на одной физической точке. Вы вовлекаете специфические внутренние мышечные сокращения. Тазовое дно и нижняя часть живота втягиваются внутрь. Эти действия создают стабильность центра. Вы двигаетесь, используя особую технику дыхания. Дыхание создает отчетливый звук в задней части горла.</p>
                            <p>Обратите внимание на свою ментальную реакцию на строгую рутину. Задайте себе конкретные вопросы перед практикой. Нужна ли мне сегодня внешняя структура? Успокаивает ли повторение мою нервную систему? Аштанга подходит студентам, которым необходимо заземление и предсказуемые паттерны движений.</p>
                        </div>
                        
                        <div class="space-y-6 mb-16">
                            <h3 class="text-2xl font-serif mb-6 text-pink-600">Виньяса-йога и плавная адаптивность</h3>
                            <p>Виньяса означает размещение тела особым образом. Преподаватели каждый день создают новые физические последовательности. Вы непрерывно переходите из одной позы в другую. Вы двигаетесь в нескольких плоскостях. Практика бросает вызов вашей проприоцепции и пространственному восприятию.</p>
                            <p>Вы выполняете последовательность переходов между позами сидя. Вы кладете руки на коврик. Отшагиваете назад в планку. Опускаете тело к полу. Вытягиваете позвоночник в собаке мордой вверх. Отводите бедра назад в собаку мордой вниз. Этот নির্দিষ্টный переход выравнивает позвоночник. Движение создает двустороннюю симметрию в теле.</p>
                            <p>Постоянное движение требует немедленной адаптации суставов. Задайте себе вопросы о вашем текущем физическом состоянии. Чувствую ли я скованность в повседневных движениях? Нуждаюсь ли я в спонтанном физическом самовыражении? Виньяса подходит студентам, которым нужна плавность и нервно-мышечная адаптивность.</p>
                        </div>

                        <div class="space-y-6 mb-16">
                            <h3 class="text-2xl font-serif mb-6 text-pink-600">Интеграция вашего выбора</h3>
                            <p>Оцените свои анатомические потребности на сегодняшний день. Выберите метод, который лучше всего подходит для вашей нервной системы. Посвятите себя физической практике. Наблюдайте за физиологическими изменениями в вашем теле.</p>
                        </div>
                    `
                }
            }
        },
        {
            id: 'ashtanga-not-for-everyone',
            date: '2025-09-24',
            category: { en: 'Practice', et: 'Praktika', fi: 'Harjoitus', ru: 'Практика' },
            image: '/assets/journal/raili-ashtanga-01.webp',
            author: 'Raili Maripuu',
            photographer: {
                name: 'Andri Allas',
                instagram: 'https://www.instagram.com/andriallas',
                date: 'December 2025'
            },
            teacherId: 'raili-maripuu',
            practiceId: 'ashtanga',
            hashtags: ['ashtanga', 'practice', 'beginners', 'tallinn', 'learn', 'series', 'school', 'complete', 'traditional', 'ashtanga yoga', 'primary series', 'yoga school', 'traditional ashtanga yoga', 'ashtanga yoga school'],
            readTime: { en: '6 min read', et: '6 min lugemist', fi: '6 min lukuaika', ru: '6 мин чтения' },
            translations: {
                en: {
                    isOriginal: true,
                    title: 'Ashtanga yoga is not for everyone?',
                    excerpt: 'Discover why Ashtanga Yoga is a transformative practice for all. Learn traditional primary series in Tallinn with Raili Maripuu. Join our yoga school today.',
                    content: `
                        <p class="mb-8">Not the best opening statement to promote ashtanga yoga just at the start of the new season. But I’m going to say this again – ashtanga yoga is the most wonderful and transformative yoga practise but it’s not for everyone. Sri K Pattabhi Jois, the creator of ashtanga yoga, himself said many years ago that “Anyone can practise. Except lazy people; lazy people can’t practise ashtanga yoga.” Whilst this quote has a lot of simple truth in it, many people nowadays face many other challenges that keep them from having a daily yoga practise.</p>
                        
                        <p class="mb-12">So what puts people off?</p>
                        
                        <div class="space-y-8 mb-16">
                            <h3 class="text-2xl font-serif mt-12 mb-6">Ashtanga is demanding</h3>
                            <p>It’s never any easy option. Ashtanga yoga tests your body, mind and soul in any which way from all different directions. It’s the early mornings. It’s the daily discipline. It’s the showing up. It’s everything else in your life that you must navigate. Daily ashtanga practise is one of the biggest and purest tests you are ever going to take as it lasts for a lifetime.</p>
                        </div>
                        
                        <div class="space-y-8 mb-16">
                            <h3 class="text-2xl font-serif mt-12 mb-6">Ashtanga is a daily discipline</h3>
                            <p>Let’s face it most people prefer living a comfortable life as opposed to a daily early morning yoga practise that challenges you physically, mentally and emotionally. The only competition is with yourself, and you can’t escape yourself. Period. The only way out is through all of it. For a significant transformation in your life, you should practise ashtanga at least 4x per week. Think of it as adding to your daily cleansing routine much like your daily shower.</p>
                        </div>

                        <div class="space-y-8 mb-16">
                            <h3 class="text-2xl font-serif mt-12 mb-6">When the mind takes over</h3>
                            <p>As it mostly does. There are and will be days when you don’t want to practise at all. When practise feels horrible. When the mind wanders throughout the entire practise. When you are faced with the restless ego, anxiety and exhaustion. On those days, I remind to myself that ashtanga is just a super useful tool to check-in how you feel in your body and in your head. In this beautiful practise we have all the tools to overcome all of the above. If you want.</p>
                        </div>

                        <div class="space-y-8 mb-16">
                            <h3 class="text-2xl font-serif mt-12 mb-6">It's a long-term game</h3>
                            <p>Ashtanga is a yoga practise for life. It most definitely is not a seasonal quick fix. Although at the start of their ashtanga journey most people progress and experience positive changes in their lives relatively quickly, this transformation slows down the longer you practise. The beauty of this practise is that you show up daily (on your mat) and do what you can do. And that’s more than enough for that day. On challenging days, I always think of a saying by a fellow ashtanga teacher on the other side of the world “Today’s practise is a preparation for tomorrow.” Having practised daily for over 16 years, I 100% vouch for this.</p>
                        </div>

                        <div class="space-y-8 mb-16">
                            <h3 class="text-2xl font-serif mt-12 mb-6">So why do people keep practising?</h3>
                            <p>Ashtanga yoga in fact is for everyone. The feeling you get through ashtanga yoga practise cannot be described. It needs to be experienced. Even if you try ashtanga once, the feeling after just the one practise is a state of bliss that we are all always subconsciously searching for as human beings. It’s the sense of being cleansed and purified in your body and cleared in your mind. With ashtanga you become light and full of energy.</p>
                            <p>The systemised structure and the relative strictness of ashtanga yoga is what makes it beautiful and a life-changing practise. With regular practise, ashtanga yoga becomes a steady thing to hold on to through difficult and challenging times. It also keeps you grounded when things are going incredibly well. The traditional teaching method is what protects the integrity and value of ashtanga yoga, keeps it niche, and makes it so transformative.</p>
                        </div>

                        <div class="space-y-8 mb-16">
                            <h3 class="text-2xl font-serif mt-12 mb-6">How to (re)start with ashtanga yoga?</h3>
                            <p>Ashtanga starts with the physical yoga practise and foremost with turning up. Find yourself a good studio and a good teacher. Create a daily or weekly routine that works for you and doesn’t stress you. Create a space at home where you can practise with no interference. Even if it’s for 10 minutes a day. Use simple incentives to make the practise enjoyable, such as a good yoga mat, lovely eye pillow for savasana etc.</p>
                            <p>There are and always will be people who quit their daily yoga practise for whatever reason. But there are even more people who continue and make ashtanga yoga their lifetime practise. I am proud to be one of those latter people.</p>
                        </div>
                    `
                },
                et: {
                    isOriginal: true,
                    title: 'Ashtanga jooga ei sobi kõigile?',
                    excerpt: 'Avasta, miks ashtanga jooga on elumuutev praktika kõigile. Õpi traditsioonilist esimesse seeriat Tallinnas Raili Maripuu juhendamisel. Liitu meie joogakooliga.',
                    content: `
                        <p class="mb-8">Pole just kõige targem mõte alustada uut hooaega ashtanga jooga mahategemisega. Sellest hoolimata ütlen veelkord, et kuigi ashtanga jooga on üks efektiivsemaid ja ilusamaid joogapraktikaid, ei sobi ta kõigi jaoks.</p>
                        
                        <blockquote class="mb-12">"Joogaga saavad tegeleda kõik. Välja arvatud laisad inimesed." - <strong>Sri K Pattabhi Jois</strong></blockquote>
                        
                        <p class="mb-12">Kuigi selles tsitaadis on peidus palju lihtsat tõde, on enamus inimestel oma elu väljakutseid täis laotud, mis takistavad neil igapäevase <strong>joogapraktika</strong> tekkimist. Meie <strong><a href="https://www.goyoga.ee" class="text-pink-600 hover:underline">ashtanga jooga koolis</a></strong> <strong>Tallinnas</strong> aitame õpilastel nendest väljakutsetest üle saada, et õppida selgeks <strong><a href="/class.html?id=ashtanga-yoga" class="text-pink-600 hover:underline">traditsiooniline ashtanga jooga</a></strong>.</p>
                        
                        <div class="space-y-8 mb-16">
                            <h3 class="text-2xl font-serif mt-12 mb-6">Miks inimesed lõpetavad ashtanga praktiseerimise?</h3>
                            
                            <h4 class="text-xl font-medium mb-4">Ashtanga on nõudlik</h4>
                            <p>See ei ole kunagi ollut kerge valik. Ashtanga paneb Su keha, meele ja emotsioonid proovile absoluutselt kõiges ja igas mõttes. Varajased hommikud. Igapäevane distsipliin. Matile kohale tulemine. See lisaks kõigele muule, mida Sa iga päev asjatama pead. Regulaarne ashtanga praktika on üks suurimaid ja raskemaid teste, sest see ei lõpe kunagi ja kestab terve elu.</p>
                        </div>
                        
                        <div class="space-y-8 mb-16">
                            <h4 class="text-xl font-medium mb-4">Ashtanga on distsipliin</h4>
                            <p>Olgem ausad, enamus inimestest valivad pigem mugavuse kui igahommikuse varajase joogapraktika, mis paneb Sind proovile füüsiliselt, vaimselt ja emotsionaalselt. Ashtangas võistled only iseendaga ja enese eest ei põgene. Ainuke viis tasakaal saavutada, on kõikidest nendest väljakutsetest läbi minna. Olulisi muutusi hakkad oma elus märkama siis, kui praktiseerid ashtangat vähemalt 4x nädalas. Ashtangat tuleb võtta nagu igapäevast puhastusrutiini, sarnaselt hammaste pesule vms.</p>
                        </div>

                        <div class="space-y-8 mb-16">
                            <h4 class="text-xl font-medium mb-4">Kui pea karjub „ei taha“!</h4>
                            <p>Ja meie pea karjub meie sees rohkem kui me tahame. On päevi, kus sa üldse ei taha praktiseerida. On päevi, kui kehas on nii vastik tunne, et paljas mõte joogamatist hakkab vastu. On praktikaid, kus aju ketrab omasoodu nii, et Sa ei pane praktikat tähelegi. On päevi, kus ego, närvilisus ja väsimus võtavad üle. Nendel päevadel tuletan endale meelde, ashtanga on lihtsalt väga hea vahend nn checkin-iks, et kuidas Sa end sees tunned. Ashtangas on olemas absoluutselt kõik vahendid, et need väljakutsed rahulikult ära korraldada.</p>
                        </div>

                        <div class="space-y-8 mb-16">
                            <h3 class="text-2xl font-serif mt-12 mb-6">Ashtanga on pikk mäng</h3>
                            <p>See joogapraktika on terveks eluks. Kindlasti ei ole ashtanga hooajaline kiire lahendus. Kuigi oma ashtanga teekonna alguses enamus joogatajaid progresseeruvad kiirelt, kauaaegne praktika aeglustab need muutused. Ashtanga võlu on (matile) kohale tulemine ja teed nii palju kui Sa teed ning täna sellest piisab. Rasketel päevadel mõtlen alati ühe kaasõpetaja ütlusele: „Tänane praktika valmistab Sind ette homseks.“ Oma 16-aastase praktikakogemuse juures olen sellega 100% nõus.</p>
                        </div>

                        <div class="space-y-8 mb-16">
                            <h3 class="text-2xl font-serif mt-12 mb-6">Miks inimesed praktiseerivad ashtangat?</h3>
                            <p>Ashtanga jooga sobib tegelikult kõigile. Seda tunnet, mida ashtanga jooga praktiseerimine annab, ei saa sõnades edasi anda. Seda tuleb ise lihtsalt proovida. Isegi kui teed vaid ühe ashtanga tunni, see tunne pärast on nagu keha- ja peasisene suurpuhastus, ehk väike mini-õndsus, mida inimestena alateadlikult pidevalt otsivad. <strong>Ashtanga</strong> toob kehasse kerguse ja palju energiat.</p>
                            <p>Ashtanga jooga süsteemne struktuur ja suhteline rangus teebki sellest elumuuteva praktika. Tehes ashtangat regulaarselt, muutub see Sinu elus konstantseks muutujaks, millest rasketel päevadel kinni hoida. Headel aegadel vastupidi hoiab ashtanga Su jalad nn maas. Ashtangas kasutatakse erilisi ja traditsioonilisi õpetamismeetodeid, mis hoiavad selle joogastiili väärtusliku ja ühtsena, tagades ashtanga elumuutvad omadused.</p>
                        </div>

                        <div class="space-y-8 mb-16">
                            <h3 class="text-2xl font-serif mt-12 mb-6">Kuidas ashtangaga (taas)alustada?</h3>
                            <p>Ashtanga algab kohale tulemisest ja füüsilisest joogapraktikast. Leia enda jaoks sobiv <strong>joogakool</strong> ja hea õpetaja. Loo enda jaoks rutiin, mis Su igapäevaellu ilma suurema stressita sisse mahub. Tee enda jaoks kodus väike nurgake, kus saad segamatult praktiseerida. Kasvõi 10 minutit päevas. Muuda praktika lihtsate vahenditega enda jaoks mõnusaks, nagu näiteks hea joogamatt, lõhnav silmapadi jne.</p>
                            <p>Alati leidub inimesi, kes ühel või teisel põhjusel lõpetavad joogaga tegelemise. Samamoodi nagu leidub inimesi, kelle jaoks muutub ashtanga elukestvaks praktikaks. Ma olen ääretult thankful, et kuulun viimaste hulka. Liitu meie <strong><a href="/class.html?id=ashtanga-yoga" class="text-pink-600 hover:underline">ashtanga jooga kooliga</a></strong>, et alustada oma <strong>esimese seeriaga</strong>.</p>
                        </div>
                    `
                },
                fi: {
                    isOriginal: false,
                    title: 'Sopiiko ashtanga-jooga kaikille?',
                    excerpt: 'Ashtangajooga on upeaa, mutta se ei sovi kaikille. Lue, miksi kurinalaisuus on avain sisäiseen voimaan ja miten aloittaa harjoitus Tallinnan joogakoulussamme.',
                    content: `
                        <p class="mb-8">Ei ehkä se paras mainoslause uuden kauden kynnyksellä. Mutta sanon tämän silti: ashtangajooga on maailman upein ja mullistavin harjoitus, mutta se ei sovi kaikille.</p>
                        
                        <blockquote class="mb-12">"Kuka tahansa voi harjoitella. Paitsi laiskat ihmiset; laiskat eivät voi harjoitella ashtangaa." - <strong>Sri K Pattabhi Jois</strong></blockquote>
                        
                        <p class="mb-12">Vaikka tässä piileekin yksinkertainen totuus, monilla meistä on nykyään elämässään niin paljon haasteita, että päivittäinen joogaharjoitus jää haaveeksi. Meillä <strong>Goyogan <a href="https://www.goyoga.ee" class="text-pink-600 hover:underline">joogakoulussa Tallinnassa</a></strong> oppilaat kohtaavat nämä haasteet päivittäin oppiakseen <strong><a href="/class.html?id=ashtanga-yoga" class="text-pink-600 hover:underline">perinteistä ashtangaa</a></strong>.</p>
                        
                        <div class="space-y-8 mb-16">
                            <h3 class="text-2xl font-serif mt-12 mb-6">Ashtanga on vaativaa</h3>
                            <p>Se ei ole koskaan se helpoin vaihtoehto. Ashtanga haastaa kehosi, mielesi ja sielusi joka kantilta. Se on aikaisia aamuja. Se on päivittäistä kurinalaisuutta. Se on paikalle saapumista. Se on kaikkea muuta elämässäsi, minkä keskellä joudut luovimaan. Päivittäinen ashtanga-harjoitus on yksi suurimmista ja puhtaimmista testeistä, joita tulet tekemään – ja se kestää läpi elämän.</p>
                        </div>
                        
                        <div class="space-y-8 mb-16">
                            <h3 class="text-2xl font-serif mt-12 mb-6">Distsipliini ja arjen rutiini</h3>
                            <p>Olkaamme rehellisiä: useimmat meistä valitsevat mukavuuden mieluummin kuin aikaisen aamun harjoituksen, joka haastaa fyysisesti ja henkisesti. Matolla olet vain itsesi kanssa, etkä pääse itseäsi pakoon. Ainoa tie on kulkea läpi. Jotta elämässä tapahtuisi todellinen muutos, ashtangaa tulisi harjoitella ainakin neljästi viikossa. Ajattele sitä osana päivittäistä puhdistautumista, aivan kuten suihkussa käyntiä.</p>
                        </div>

                        <div class="space-y-8 mb-16">
                            <h3 class="text-2xl font-serif mt-12 mb-6">Kun mieli kertoo toista</h3>
                            <p>Ja niin se usein tekee. Tulee päiviä, jolloin et haluaisi harjoitella ollenkaan. Päiviä, jolloin harjoitus tuntuu raskaalta tai mieli harhailee. Kohdatessasi levottoman egon tai uupumuksen, muista, että ashtanga on vain työkalu. Se on tapa tarkistaa, mitä kehossa ja pään sisällä kuuluu juuri nyt. Tässä harjoituksessa meillä on kaikki välineet näiden haasteiden voittamiseen. Jos vain haluamme.</p>
                        </div>

                        <div class="space-y-8 mb-16">
                            <h3 class="text-2xl font-serif mt-12 mb-6">Kyse on pitkästä pelistä</h3>
                            <p>Ashtanga on elinikäinen matka, ei kausiluonteinen pika-apu. Alussa edistys on nopeaa, mutta ajan myötä muutos hidastuu. Maton ääreen saapuminen päivittäin on se juttu – teet sen, minkä pystyt, ja se riittää. Vaikeina päivinä ajattelen aina kollegalleni tuttua sanontaa: ”Tämän päivän harjoitus valmistelee sinua huomiseen.” Yli 16 vuoden kokemuksella voin allekirjoittaa tämän sataprosenttisesti.</p>
                        </div>

                        <div class="space-y-8 mb-16">
                            <h3 class="text-2xl font-serif mt-12 mb-6">Miksi siis jatkaa?</h3>
                            <p>Sillä loppujen lopuksi ashtanga sopii kaikille. Sitä tunnetta ei voi selittää, se pitää kokea. Jo yhden ashtanga-tunnin jälkeen olo on seesteinen ja puhdistunut – tila, jota me ihmiset alitajuisesti aina etsimme. Ashtangan myötä kehosta tulee kevyt ja mieli kirkastuu.</p>
                            <p>Harjoituksen selkeä rakenne ja tietty tiukkuus tekevät siitä elämää muuttavan. Säännöllinen ashtanga on kuin ankkuri, joka pitää sinut maassa niin vaikeina kuin hyvinäkin aikoina. Perinteinen opetustapa suojelee harjoituksen ytimen ja tekee siitä niin vaikuttavan.</p>
                        </div>

                        <div class="space-y-8 mb-16">
                            <h3 class="text-2xl font-serif mt-12 mb-6">Miten aloittaa (uudelleen)?</h3>
                            <p>Kaikki alkaa siitä, että saavut paikalle. Etsi hyvä <strong><a href="https://www.goyoga.ee" class="text-pink-600 hover:underline">joogakoulu</a></strong> ja opettaja. Luo rutiini, joka istuu arkeesi ilman stressiä. Varaa kotiin paikka, jossa voit harjoitella rauhassa, vaikka vain 10 minuuttia. Pienet asiat, kuten hyvä matto tai silmätyyny, voivat tehdä harjoituksesta nautinnon.</p>
                            <p>Aina on ihmisiä, jotka lopettavat, mutta vielä enemmän on niitä, jotka tekevät ashtangasta elämäntavan. Olen ylpeä kuuluessani jälkimmäisiin. Tule mukaan <strong><a href="/class.html?id=ashtanga-yoga" class="text-pink-600 hover:underline">perinteiseen ashtanga-kouluumme</a></strong> ja aloita oma matkasi.</p>
                        </div>
                    `
                },
                ru: {
                    isOriginal: false,
                    title: 'Аштанга-йога не для всех?',
                    excerpt: 'Аштанга-йога — это самая чудесная практика, но она не для всех. Узнайте, почему дисциплина — путь к силе, и как начать заниматься в нашей школе в Таллине.',
                    content: `
                        <p class="mb-8">Не самое удачное начало для рекламы аштанга-йоги в начале нового сезона. Но я скажу это снова: аштанга-йога — это самая прекрасная и глубокая практика, но она подходит не всем.</p>
                        
                        <blockquote class="mb-12">«Практиковать может каждый. Кроме ленивых; ленивые не могут заниматься аштангой». — <strong>Шри К. Паттабхи Джойс</strong></blockquote>
                        
                        <p class="mb-12">В этой цитате много простой истины, но в наши дни люди сталкиваются с множеством других проблем, которые мешают им практиковать ежедневно. В нашей <strong><a href="https://www.goyoga.ee" class="text-pink-600 hover:underline">школе йоги Goyoga в Таллине</a></strong> ученики каждый день преодолевают эти трудности, чтобы приобщиться к <strong><a href="/class.html?id=ashtanga-yoga" class="text-pink-600 hover:underline">традиционному методу аштанги</a></strong>.</p>
                        
                        <div class="space-y-8 mb-16">
                            <h3 class="text-2xl font-serif mt-12 mb-6">Аштанга требует отдачи</h3>
                            <p>Это никогда не бывает «легким вариантом». Аштанга-йога проверяет ваше тело, разум и душу на прочность со всех сторон. Это ранние подъемы. Это ежедневная дисциплина. Это умение просто прийти на коврик. Это жизнь, в которой нужно лавировать между всеми остальными делами. Ежедневная практика — одно из самых чистых испытаний, которое вы когда-либо пройдете, потому что оно длится всю жизнь.</p>
                        </div>
                        
                        <div class="space-y-8 mb-16">
                            <h3 class="text-2xl font-serif mt-12 mb-6">Дисциплина как образ жизни</h3>
                            <p>Будем честны: большинство предпочитает комфорт ранним подъемам и практике, которая бросает вызов физически и эмоционально. На коврике вы соревнуетесь только с собой, и от себя не убежать. Единственный выход — пройти сквозь это. Для серьезных перемен в жизни стоит практиковать аштангу хотя бы 4 раза в неделю. Относитесь к этому как к ежедневной гигиене, такой же привычной, как утренний душ.</p>
                        </div>

                        <div class="space-y-8 mb-16">
                            <h3 class="text-2xl font-serif mt-12 mb-6">Когда ум берет верх</h3>
                            <p>А он обычно берет. Бывают дни, когда не хочется практиковать совсем. Когда практика кажется ужасной, а ум блуждает. В такие моменты я напоминаю себе: аштанга — это инструмент, чтобы проверить, как вы себя чувствуете в своем теле и в голове. В этой прекрасной практике есть всё, чтобы справиться с любыми внутренними бурями. Если вы этого захотите.</p>
                        </div>

                        <div class="space-y-8 mb-16">
                            <h3 class="text-2xl font-serif mt-12 mb-6">Игра в долгую</h3>
                            <p>Аштанга — это практика на всю жизнь, а не сезонное решение. В начале прогресс идет быстро, но со временем трансформация замедляется. Важно просто приходить на мат и делать то, что можешь сегодня. В трудные дни я всегда вспоминаю слова коллеги: «Сегодняшняя практика — это подготовка к завтрашней». Спустя 16 лет ежедневной практики я подписываюсь под этим на все сто.</p>
                        </div>

                        <div class="space-y-8 mb-16">
                            <h3 class="text-2xl font-serif mt-12 mb-6">Так почему мы продолжаем?</h3>
                            <p>Потому что на самом деле аштанга подходит каждому. Ощущение после практики невозможно описать — его нужно прожить. Состояние блаженства и чистоты после занятия — это именно то, что мы все подсознательно ищем. Аштанга делает тело легким, а разум — ясным.</p>
                            <p>Структура и строгость аштанги — это то, что делает ее такой красивой. Регулярная практика становится опорой и в трудные, и в радостные времена. Традиционный метод обучения сохраняет ценность этой йоги, делая ее по-настоящему глубокой.</p>
                        </div>

                        <div class="space-y-8 mb-16">
                            <h3 class="text-2xl font-serif mt-12 mb-6">С чего начать (или начать заново)?</h3>
                            <p>Все начинается с того, что вы просто приходите. Найдите хорошую <strong><a href="https://www.goyoga.ee" class="text-pink-600 hover:underline">школу йоги</a></strong> и учителя. Создайте рутину, которая впишется в вашу жизнь без стресса. Оборудуйте место дома, где вам никто не помешает, хотя бы на 10 минут. Даже красивые мелочи, вроде хорошего коврика или подушечки для глаз, могут сделать практику приятнее.</p>
                            <p>Всегда будут те, кто бросает, но еще больше тех, кто делает аштангу делом всей жизни. Я горжусь тем, что я одна из них. Приходите в нашу <strong><a href="/class.html?id=ashtanga-yoga" class="text-pink-600 hover:underline">школу традиционной аштанга-йоги</a></strong> и начните свой путь.</p>
                        </div>
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
                    isOriginal: true,
                    title: 'Why Ashtanga? The Power of Discipline | Goyoga Tallinn',
                    excerpt: 'Discover why the traditional Mysore method is the ultimate mental and physical anchor for modern life. Learn the discipline of daily yoga practice.',
                    content: `
                        <p>In the noise of modern life, we often look for shortcuts. But some paths are meant to be walked one step at a time. Ashtanga Yoga is one of those paths.</p>
                        <h3>The Anchor of Mysore</h3>
                        <p>The Mysore method isn't just about sweat; it's about self-responsibility. When you step onto your mat at Goyoga, you aren't just following a teacher—you are listening to your own breath.</p>
                        <blockquote>"Yoga is 99% practice, 1% theory." - Pattabhi Jois</blockquote>
                        <p>Join us as we explore how this ancient discipline creates modern resilience.</p>
                    `
                },
                et: {
                    isOriginal: true,
                    title: 'Miks Ashtanga? Distsipliini vägi | Goyoga Tallinn',
                    excerpt: 'Avasta, miks traditsiooniline Mysore-meetod on moodsa elu parim vaimne ja füüsiline ankur. Õpi igapäevase joogapraktika distsipliini Tallinnas.',
                    content: `
                        <p>Kaasaegse elu müras otsime me tihti otseteid. Kuid mõned teed on mõeldud käimiseks samm-sammult. Ashtanga jooga on üks neist teedest.</p>
                        <h3>Mysore-meetodi ankur</h3>
                        <p>Mysore-meetod ei tähenda ainult higi; see tähendab eneseasutust. Kui astud Goyoga matile, ei järgi sa lihtsalt õpetajat – sa kuulad oma hingamist.</p>
                        <p>Liitu meiega ja uuri, kuidas see iidne distsipliin loob kaasegset vastupidavust.</p>
                    `
                },
                fi: {
                    isOriginal: false,
                    title: 'Miksi Ashtanga? Kurinalaisuuden voima | Goyoga Tallinn',
                    excerpt: 'Tutustu, miksi perinteinen Mysore-menetelmä on nykyajan elämän paras henkinen ja fyysinen ankkuri. Opi päivittäisen harjoituksen voima.',
                    content: `
                        <p>Nykypäivän hälinässä etsimme usein oikopolkuja. Mutta jotkut polut on tarkoitettu kuljettaviksi askel kerrallaan. Ashtanga-jooga on yksi näistä poluista.</p>
                        <h3>Mysore-menetelmän ankkuri</h3>
                        <p>Mysore-menetelmässä nie kyse vain hiestä, vaan itsensä vastuullisuudesta. Kun astut Goyogan matolle, et vain seuraa opettajaa – kuuntelet omaa hengitystäsi.</p>
                    `
                },
                ru: {
                    isOriginal: false,
                    title: 'Почему Аштанга? Сила дисциплины | Goyoga Tallinn',
                    excerpt: 'Узнайте, почему традиционный метод Майсор является лучшим ментальным и физическим якорем в современной жизни. Изучите силу йоги.',
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
                    isOriginal: true,
                    title: 'The Science of Sound: How Gongs Heal | Goyoga Tallinn',
                    excerpt: 'Explore how high-frequency vibrations reset your nervous system and clear mental blockages. Learn the power of sound baths in Tallinn.',
                    content: `
                        <p>Sound isn't just something we hear; it's something we feel in our very cells. At Goyoga, our Sound Baths are more than just relaxation—they are a form of quantum restoration.</p>
                        <p>Guided by the resonance of gongs and crystal bowls, your brain waves shift from active 'Beta' states to restorative 'Theta' states.</p>
                    `
                },
                et: {
                    isOriginal: true,
                    title: 'Heli teadus: Kuidas helid tervendavad | Goyoga Tallinn',
                    excerpt: 'Uuri, kuidas kõrgsageduslikud vibratsioonid lähtestavad sinu närvisüsteemi ja puhastavad vaimseid blokeeringuid. Heli tervendav vägi.',
                    content: `
                        <p>Heli ei ole lihtsalt midagi, mida me kuuleme; see on midagi, mida me tunneme oma rakkudes. Goyogas on helirännakud enamat kui lihtsalt lõõgastus.</p>
                    `
                },
                fi: {
                    isOriginal: false,
                    title: 'Äänihoidon tiede: Miten gongit parantavat | Goyoga Tallinn',
                    excerpt: 'Tutustu siihen, miten korkeataajuuksiset värähtelyt nollaavat hermostosi ja poistavat vaimisia tukoksia. Koe äänen nollaava voima.',
                    content: `
                        <p>Ääni ei ole vain jotain, mitä kuulemme; see is jotain, mitä tunnemme soluissamme asti. Goyogassa äänikylvyt ovat enemmän kuin vain rentoutumista.</p>
                    `
                },
                ru: {
                    isOriginal: false,
                    title: 'Наука звука: Как гонги исцеляют | Goyoga Tallinn',
                    excerpt: 'Узнайте, как высокочастотные вибрации перезагружают вашу нервную систему и очищают ментальные блоки. Сила звука в Таллине.',
                    content: `
                        <p>Звук — это не просто то, что мы слышим; это то, что мы чувствуем каждой клеткой своего тела. В Goyoga наши звуковые ванны — это больше, чем просто расслабление.</p>
                    `
                }
            }
        }
    ]
};

window.journalData = journalData;
