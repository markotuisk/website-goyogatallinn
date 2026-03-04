document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const classId = urlParams.get('id');

    // If no ID or data missing, redirect or show error (conceptually)
    if (!classId || !window.classesData || !window.classesData[classId]) {
        // Redirect to classes section if not found
        window.location.href = 'index.html#classes';
        return;
    }

    const classData = window.classesData[classId];

    // Wait for language init (script.js fires languageChanged) or manual init
    // For simplicity, we hook into the same mechanism as other pages
    // But we need to define renderClassDetails first
    renderClassDetails(classId, currentLanguage);

    document.addEventListener('languageChanged', (e) => {
        renderClassDetails(classId, e.detail);
    });
});

function renderClassDetails(id, lang) {
    const data = window.classesData[id];
    if (!data) return;

    // Translation helper
    const t = (key) => {
        if (data.translations && data.translations[lang] && data.translations[lang][key]) {
            return data.translations[lang][key];
        }
        // Fallback to EN
        if (data.translations && data.translations['en'] && data.translations['en'][key]) {
            return data.translations['en'][key];
        }
        return '';
    };

    // 1. Hero
    document.getElementById('class-title').textContent = t('title');
    document.getElementById('class-tagline').textContent = t('tagline');
    document.getElementById('class-image').src = data.image; // Universal image
    document.getElementById('seo-title').textContent = `${t('title')} | Goyoga Tallinn`;
    document.getElementById('seo-description').setAttribute('content', t('description').substring(0, 150) + "...");

    // Icon
    const iconEl = document.getElementById('class-icon');
    if (data.icon) {
        iconEl.setAttribute('data-lucide', data.icon);
    }
    if (window.lucide) window.lucide.createIcons();


    // 2. Description & Audience
    document.getElementById('class-description').innerHTML = `<p>${t('description')}</p>`;
    document.getElementById('class-audience').innerHTML = `<p>${t('audience')}</p>`;



    // Lineage Section
    const lineageSection = document.getElementById('class-lineage-section');
    const lineageContent = document.getElementById('class-lineage-content');

    if (lineageSection && lineageContent) {
        if (data.translations[lang].lineage) {
            lineageContent.innerHTML = data.translations[lang].lineage;
            lineageSection.classList.remove('hidden');
        } else {
            lineageSection.classList.add('hidden');
        }
    }

    // What to Expect Section
    const whatToExpectSection = document.getElementById('class-what-to-expect-section');
    const whatToExpectContent = document.getElementById('class-what-to-expect-content');
    const whatToExpect = t('whatToExpect');

    if (whatToExpectSection && whatToExpectContent) {
        if (whatToExpect) {
            whatToExpectContent.innerHTML = whatToExpect;
            whatToExpectSection.classList.remove('hidden');
        } else {
            whatToExpectSection.classList.add('hidden');
        }
    }

    // Social Proof Section
    const socialProofSection = document.getElementById('class-social-proof-section');
    const socialProofGrid = document.getElementById('class-social-proof-grid');
    const socialProof = t('socialProof');
    const INITIAL_SHOW_COUNT = 6;

    if (socialProofSection && socialProofGrid) {
        if (socialProof && socialProof.length > 0) {
            const renderCard = (item, hidden = false) => `
                <div class="social-proof-card bg-gray-50 p-5 rounded-xl flex flex-col items-center text-center gap-3 shadow-sm hover:shadow-md transition-all duration-300 ${hidden ? 'hidden' : ''}" ${hidden ? 'data-hidden-card' : ''}>
                    <blockquote class="text-gray-600 italic text-sm leading-relaxed">"${item.quote}"</blockquote>
                    <div>
                        <div class="font-medium text-gray-900 text-sm">${item.name}</div>
                        <div class="text-xs text-pink-600">${item.role}</div>
                    </div>
                </div>
            `;

            socialProofGrid.innerHTML = socialProof.map((item, index) =>
                renderCard(item, index >= INITIAL_SHOW_COUNT)
            ).join('');

            socialProofSection.classList.remove('hidden');

            // Show More button logic
            const showMoreContainer = document.getElementById('social-proof-show-more-container');
            const showMoreBtn = document.getElementById('social-proof-show-more-btn');

            if (socialProof.length > INITIAL_SHOW_COUNT && showMoreContainer && showMoreBtn) {
                showMoreContainer.classList.remove('hidden');
                showMoreBtn.addEventListener('click', () => {
                    const hiddenCards = socialProofGrid.querySelectorAll('[data-hidden-card]');
                    hiddenCards.forEach((card, i) => {
                        setTimeout(() => {
                            card.classList.remove('hidden');
                            card.style.opacity = '0';
                            card.style.transform = 'translateY(20px)';
                            requestAnimationFrame(() => {
                                card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
                                card.style.opacity = '1';
                                card.style.transform = 'translateY(0)';
                            });
                        }, i * 80);
                    });
                    showMoreContainer.classList.add('hidden');
                });
            }
        } else {
            socialProofSection.classList.add('hidden');
        }
    }


    // 3. Benefits
    const benefitsContainer = document.getElementById('class-benefits');
    benefitsContainer.innerHTML = '';
    const benefits = t('benefits'); // Should be an array
    if (Array.isArray(benefits)) {
        benefits.forEach(benefit => {
            benefitsContainer.innerHTML += `
                <div class="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                    <div class="p-2 bg-pink-50 rounded-lg inline-block mb-4">
                        <i data-lucide="check" class="h-5 w-5 text-pink-600"></i>
                    </div>
                    <h3 class="font-bold text-lg mb-2">${benefit.title}</h3>
                    <p class="text-sm text-gray-600">${benefit.description}</p>
                </div>
            `;
        });
    }

    // 4. Related Teachers
    const teachersContainer = document.getElementById('related-teachers');
    teachersContainer.innerHTML = '';
    // Filter teachers who teach this style (assuming teachersData has a 'skills' or we manually map in classesData)
    // For now, let's assume classesData has a 'teacherIds' array
    if (data.teacherIds && window.teachersData) {
        data.teacherIds.forEach(tId => {
            const teacher = window.teachersData[tId];
            if (teacher) {
                // Determine localized title/desc if available in translationsData, else fallback
                // Teacher data in js/data.js is structure: { key: { name, title... } }
                // localized titles are in translationsData: teachers.key.title
                // We need to access global translationsData for manual lookup or just rely on 'teachersData' being language agnostic for name/image
                // and use translationsData for title.

                // Hack: We can't easily access the correct localized string from here without the key.
                // We construct the key: teachers.${tId}.title
                const trKeyTitle = `teachers.${tId}.title`;

                // We can use a global lookup if available, or just render the card and let script.js translate it?
                // script.js translates [data-i18n]. So we render with data-i18n attributes!

                teachersContainer.innerHTML += `
                    <div class="teacher-card bg-gray-50 rounded-xl overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md cursor-pointer group" onclick="window.location.href='teacher.html?id=${tId}'">
                        <div class="relative h-64 overflow-hidden">
                            <img src="${teacher.image}" alt="${teacher.name}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105">
                        </div>
                        <div class="p-6 text-center">
                            <h3 class="text-xl font-medium mb-1">${teacher.name}</h3>
                            <p class="text-pink-500 text-sm font-semibold uppercase tracking-wider" data-i18n="${trKeyTitle}">Teacher</p>
                        </div>
                    </div>
                `;
            }
        });
    }

    // 5. FAQ
    const faqContainer = document.getElementById('class-faq');
    faqContainer.innerHTML = '';
    const faqs = t('faqs');
    if (Array.isArray(faqs)) {
        faqs.forEach(faq => {
            faqContainer.innerHTML += `
                <div class="bg-white rounded-lg border border-gray-200 overflow-hidden">
                    <button class="w-full text-left px-6 py-4 font-medium flex justify-between items-center focus:outline-none" onclick="this.nextElementSibling.classList.toggle('hidden'); this.querySelector('i').classList.toggle('rotate-180')">
                        <span>${faq.question}</span>
                        <i data-lucide="chevron-down" class="h-5 w-5 text-gray-400 transition-transform"></i>
                    </button>
                    <div class="hidden px-6 pb-4 text-gray-600 text-sm leading-relaxed border-t border-gray-100">
                        ${faq.answer}
                    </div>
                </div>
            `;
        });
    }

    if (window.lucide) window.lucide.createIcons();
    // Re-run translations for the newly injected teacher cards
    if (window.updateUI) window.updateUI(currentLanguage);
}
