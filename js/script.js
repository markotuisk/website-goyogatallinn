// Main Logic (Non-Module)
let currentLanguage = 'en';

// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    initLanguage();
    initModals();
    initReviewsCarousel();
    initGoogleReviewsCarousel();
    initLeaveReviewButton();
    initInstagramCarousel();
    initForms();
    initNavbar();
    initMobileMenu();
    initSmoothScroll();
    initFadeIn();
    initCountdown();
    initLikeButtons();
    initEvents();
    initTeacherLanguages();
    initSEO(); // Aggressive SEO Init

    // Initialize Lucide Icons
    if (window.lucide) window.lucide.createIcons();
});

// --- Internationalization (i18n) ---
function initLanguage() {
    const savedLanguage = localStorage.getItem('preferredLanguage');
    const browserLanguage = navigator.language.substring(0, 2);

    let langToLoad = 'en';
    if (savedLanguage && ['en', 'et', 'fi'].includes(savedLanguage)) {
        langToLoad = savedLanguage;
    } else if (['en', 'et', 'fi'].includes(browserLanguage)) {
        langToLoad = browserLanguage;
    }
    setLanguage(langToLoad);
}

function setLanguage(lang) {
    if (!['en', 'et', 'fi'].includes(lang)) return;
    currentLanguage = lang;
    localStorage.setItem('preferredLanguage', lang);
    updateUI(lang);
}

function updateUI(lang) {
    const flagMap = { 'en': 'https://flagcdn.com/w20/gb.png', 'et': 'https://flagcdn.com/w20/ee.png', 'fi': 'https://flagcdn.com/w20/fi.png' };
    const languageCodeMap = { 'en': 'EN', 'et': 'EE', 'fi': 'FI' };

    // Update switchers
    const currentFlag = document.getElementById('current-flag');
    if (currentFlag) currentFlag.src = flagMap[lang];
    const currentLangText = document.getElementById('current-language');
    if (currentLangText) currentLangText.textContent = languageCodeMap[lang];
    const mobFlag = document.getElementById('mobile-current-flag');
    if (mobFlag) mobFlag.src = flagMap[lang];
    const mobLangText = document.getElementById('mobile-current-language');
    if (mobLangText) mobLangText.textContent = languageCodeMap[lang];

    // Update Text from Global translationsData
    const t = translationsData[lang] || translationsData['en'];
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (t[key]) {
            if (element.tagName === 'INPUT' && element.hasAttribute('placeholder')) {
                element.setAttribute('placeholder', t[key]);
            } else {
                element.innerHTML = t[key];
            }
        }
    });

    updateSEO(lang); // Update Meta Tags

    // Dropdowns active state
    document.querySelectorAll('.language-option, .language-option-mobile').forEach(option => {
        if (option.getAttribute('data-lang') === lang) option.classList.add('active');
        else option.classList.remove('active');
    });

    // Close menus
    document.getElementById('language-dropdown')?.classList.remove('active');
    document.getElementById('mobile-language-dropdown')?.classList.remove('active');

    // Notify other scripts that language has changed
    document.dispatchEvent(new CustomEvent('languageChanged', { detail: lang }));

    // Refresh reviews and events to apply translations
    initReviewsCarousel();
    initGoogleReviewsCarousel();
    initEvents();
}

// Logic for Language Switcher Buttons
const langToggle = document.getElementById('language-toggle');
if (langToggle) langToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    document.getElementById('language-dropdown').classList.toggle('active');
});

const mobLangToggle = document.getElementById('mobile-language-toggle');
if (mobLangToggle) mobLangToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    document.getElementById('mobile-language-dropdown').classList.toggle('active');
});

document.addEventListener('click', () => {
    document.getElementById('language-dropdown')?.classList.remove('active');
    document.getElementById('mobile-language-dropdown')?.classList.remove('active');
});

document.querySelectorAll('.language-option, .language-option-mobile').forEach(option => {
    option.addEventListener('click', () => setLanguage(option.getAttribute('data-lang')));
});


// --- Modals ---
function initModals() {
    // Inject Modals HTML
    const modalContainer = document.createElement('div');
    modalContainer.innerHTML = `
        <!-- Booking Confirmation Modal -->
        <div id="booking-modal" class="modal-overlay fixed inset-0 z-[70] flex items-center justify-center bg-black/60 p-4 opacity-0 pointer-events-none">
            <div class="modal-content bg-white rounded-2xl shadow-xl w-full max-w-md mx-auto transform scale-95 opacity-0 text-center p-8">
                <i data-lucide="check-circle" class="h-16 w-16 text-green-500 mx-auto mb-4"></i>
                <h2 class="text-2xl font-serif text-gray-800 mb-2">Booking Successful!</h2>
                <p id="booking-confirmation-text" class="text-gray-600 mb-6"></p>
                <button id="booking-modal-close" class="w-full py-3 text-center rounded-md font-medium transition-colors bg-gray-800 text-white hover:bg-gray-700">Close</button>
            </div>
        </div>
        <!-- Teacher Modal -->
        <div id="teacher-modal" class="modal-overlay fixed inset-0 z-[60] flex items-center justify-center bg-black/60 p-4 opacity-0 pointer-events-none">
            <div class="modal-content bg-white rounded-2xl shadow-xl w-full max-w-md mx-auto transform scale-95 opacity-0 overflow-hidden">
                <div class="relative"><img id="teacher-modal-img" src="" class="w-full h-56 object-cover"><button id="teacher-modal-close" class="absolute top-4 right-4 text-white bg-black/30 rounded-full p-1.5 hover:bg-black/50"><i data-lucide="x" class="h-5 w-5"></i></button></div>
                <div class="p-6"><h2 id="teacher-modal-name" class="text-3xl font-serif text-gray-800"></h2><p id="teacher-modal-title" class="text-pink-500 mb-4"></p><p id="teacher-modal-bio" class="text-gray-700 mb-6"></p><div id="teacher-modal-socials" class="flex space-x-4"></div></div>
            </div>
        </div>
        <!-- Pricing Modal -->
        <div id="pricing-modal" class="modal-overlay fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 opacity-0 pointer-events-none">
            <div class="modal-content bg-white rounded-2xl shadow-xl w-full max-w-lg mx-auto transform scale-95 opacity-0 overflow-hidden">
                <div class="p-6 md:p-8"><div class="flex justify-between items-center mb-6"><h2 id="pricing-modal-title" class="text-3xl font-serif text-gray-800"></h2><button id="pricing-modal-close" class="text-gray-500 hover:text-gray-800"><i data-lucide="x" class="h-6 w-6"></i></button></div><div id="pricing-modal-body" class="space-y-4 max-h-[60vh] overflow-y-auto"></div></div>
            </div>
        </div>
         <!-- Info Modal -->
         <div id="info-modal" class="modal-overlay fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 opacity-0 pointer-events-none">
             <div class="modal-content bg-white rounded-2xl shadow-xl w-full max-w-lg mx-auto transform scale-95 opacity-0 overflow-hidden">
                <div class="p-6 md:p-8">
                    <div class="flex justify-between items-center mb-6">
                        <h2 id="info-modal-title" class="text-3xl font-serif text-gray-800"></h2>
                        <button id="info-modal-close" class="text-gray-500 hover:text-gray-800"><i data-lucide="x" class="h-6 w-6"></i></button>
                    </div>
                    <div id="info-modal-body" class="space-y-4 text-gray-700 leading-relaxed"></div>
                </div>
             </div>
         </div>
    `;
    document.body.appendChild(modalContainer);

    // Dynamic Modal Handlers
    // Teachers - Removed modal handler, focusing on direct links to profile pages
    const teacherModal = document.getElementById('teacher-modal');
    document.getElementById('teacher-modal-close')?.addEventListener('click', () => toggleModal('teacher-modal', false));

    // Pricing
    document.querySelectorAll('.pricing-button').forEach(btn => {
        btn.addEventListener('click', () => {
            const data = pricingData[currentLanguage][btn.dataset.pricingGroup];
            if (data) {
                document.getElementById('pricing-modal-title').textContent = data.title;
                const body = document.getElementById('pricing-modal-body');
                body.innerHTML = '';
                let hasSeasonalOffer = false;
                let modalContentHTML = '';

                data.options.forEach(opt => {
                    let displayPrice = `<span class="font-bold text-pink-600">${opt.price}</span>`;

                    const targetDate = new Date("March 31, 2026 23:59:59").getTime();
                    const now = new Date().getTime();
                    const isSeasonalOfferActive = btn.dataset.pricingGroup === 'memberships' &&
                        !opt.name.includes("Explorer") &&
                        now <= targetDate;

                    if (isSeasonalOfferActive) {
                        hasSeasonalOffer = true;
                        // Extract number from price string (e.g. "59€/mo", "79€", "69€/kk")
                        const priceMatch = opt.price.match(/(\d+)/);
                        if (priceMatch) {
                            const originalPriceNum = parseInt(priceMatch[1], 10);
                            const discountedPriceNum = Math.round(originalPriceNum * 0.8); // 20% off
                            const discountedPriceStr = opt.price.replace(priceMatch[1], discountedPriceNum);

                            displayPrice = `
                                <div class="flex flex-col items-end">
                                    <span class="text-xs text-gray-400 line-through mb-0.5">${opt.price}</span>
                                    <div class="flex items-center gap-2">
                                        <span class="text-[10px] font-bold bg-pink-100 text-pink-700 px-1.5 py-0.5 rounded-full uppercase tracking-wider">-20%</span>
                                        <span class="font-bold text-pink-600">${discountedPriceStr}</span>
                                    </div>
                                </div>
                            `;
                        }
                    }

                    modalContentHTML += `
                        <div class="p-4 border rounded flex flex-col justify-center">
                            <div class="flex justify-between items-center w-full group">
                                <span class="font-medium group-hover:text-pink-600 transition-colors">${opt.name}</span>
                                ${displayPrice}
                            </div>
                            ${opt.desc ? `<p class="text-xs text-gray-500 mt-2 leading-relaxed">${opt.desc}</p>` : ''}
                        </div>
                    `;
                });

                // Top Banner for Seasonal Offer
                if (hasSeasonalOffer) {
                    const langData = translationsData[currentLanguage] || translationsData['en'];
                    body.innerHTML += `
                        <div class="mb-6 bg-pink-50 border border-pink-100 rounded-xl p-4 flex flex-col items-center justify-center text-center">
                            <span class="text-xs font-bold uppercase tracking-widest text-pink-600 mb-2">${langData['pricing.offer.ends_in'] || 'Offer Ends In:'}</span>
                            <div class="flex gap-3 justify-center text-pink-900 w-full max-w-[280px]">
                                <div class="flex flex-col items-center flex-1 bg-white rounded-lg py-2 shadow-sm border border-pink-50">
                                    <span class="text-xl font-bold font-serif leading-none countdown-val" data-unit="days">00</span>
                                    <span class="text-[9px] uppercase tracking-wider text-pink-400 mt-1">${langData['pricing.offer.days'] || 'Days'}</span>
                                </div>
                                <div class="flex flex-col items-center flex-1 bg-white rounded-lg py-2 shadow-sm border border-pink-50">
                                    <span class="text-xl font-bold font-serif leading-none countdown-val" data-unit="hours">00</span>
                                    <span class="text-[9px] uppercase tracking-wider text-pink-400 mt-1">${langData['pricing.offer.hours'] || 'Hours'}</span>
                                </div>
                                <div class="flex flex-col items-center flex-1 bg-white rounded-lg py-2 shadow-sm border border-pink-50">
                                    <span class="text-xl font-bold font-serif leading-none countdown-val" data-unit="minutes">00</span>
                                    <span class="text-[9px] uppercase tracking-wider text-pink-400 mt-1">${langData['pricing.offer.minutes'] || 'Mins'}</span>
                                </div>
                                <div class="flex flex-col items-center flex-1 bg-white rounded-lg py-2 shadow-sm border border-pink-50">
                                    <span class="text-xl font-bold font-serif leading-none countdown-val" data-unit="seconds">00</span>
                                    <span class="text-[9px] uppercase tracking-wider text-pink-400 mt-1">${langData['pricing.offer.seconds'] || 'Secs'}</span>
                                </div>
                            </div>
                        </div>
                    `;
                }

                body.innerHTML += modalContentHTML;

                // Render Benefits
                if (data.benefits && data.benefits.length > 0) {
                    body.innerHTML += `
                        <div class="mt-6">
                            <h4 class="text-sm font-bold text-gray-800 uppercase tracking-wide mb-3 flex items-center">
                                <i data-lucide="sparkles" class="h-4 w-4 mr-2 text-pink-500"></i>
                                ${data.benefitsTitle || 'Benefits'}
                            </h4>
                            <ul class="space-y-2">
                                ${data.benefits.map(b => `
                                    <li class="flex items-start">
                                        <i data-lucide="check-circle-2" class="h-4 w-4 mr-2 text-pink-500 flex-shrink-0 mt-0.5"></i>
                                        <span class="text-xs font-medium text-gray-700 leading-relaxed">${b}</span>
                                    </li>
                                `).join('')}
                            </ul>
                        </div>
                    `;
                }

                // Render Conditions
                if (data.conditions && data.conditions.length > 0) {
                    body.innerHTML += `
                        <details class="mt-6 pt-4 border-t border-gray-100 group">
                            <summary class="text-sm font-bold text-gray-800 uppercase tracking-wide mb-3 flex items-center cursor-pointer select-none outline-none">
                                <i data-lucide="info" class="h-4 w-4 mr-2 text-gray-400"></i>
                                ${data.conditionsTitle || 'Terms & Conditions'}
                                <i data-lucide="chevron-down" class="h-4 w-4 ml-auto text-gray-400 transition-transform group-open:rotate-180"></i>
                            </summary>
                            <ul class="space-y-2 mt-3">
                                ${data.conditions.map(c => `
                                    <li class="flex items-start">
                                        <i data-lucide="minus" class="h-3 w-3 mr-2 text-gray-300 flex-shrink-0 mt-1"></i>
                                        <span class="text-[11px] text-gray-500 leading-relaxed">${c}</span>
                                    </li>
                                `).join('')}
                            </ul>
                        </details>
                    `;
                }

                toggleModal('pricing-modal', true);
                if (window.lucide) window.lucide.createIcons();
            }
        });
    });
    document.getElementById('pricing-modal-close')?.addEventListener('click', () => toggleModal('pricing-modal', false));

    // Event
    document.querySelectorAll('.event-details-button').forEach(btn => btn.addEventListener('click', () => toggleModal('event-modal', true)));
    document.getElementById('modal-understand')?.addEventListener('click', () => toggleModal('event-modal', false));

    // Contact Info Modals
    const infoModal = document.getElementById('info-modal');
    const infoClose = document.getElementById('info-modal-close');
    const infoTitle = document.getElementById('info-modal-title');
    const infoBody = document.getElementById('info-modal-body');

    infoClose?.addEventListener('click', () => toggleModal('info-modal', false));

    const showInfo = (type) => {
        const t = translationsData[currentLanguage] || translationsData['en'];
        infoTitle.textContent = t[`contact.modal.title.${type} `] || t[`contact.info.${type} `];

        if (type === 'gallery') {
            infoBody.innerHTML = `
                        < div class="grid grid-cols-2 gap-4 mt-2" >
                    <div class="space-y-2">
                        <img src="https://images.unsplash.com/photo-1545205597-3d9d02c29597" class="rounded-lg object-cover h-32 w-full hover:opacity-90 transition-opacity cursor-zoom-in" alt="Building Entrance">
                        <p class="text-[10px] text-center uppercase tracking-widest text-gray-400">${t['contact.modal.gallery.entrance']}</p>
                    </div>
                    <div class="space-y-2">
                        <img src="https://images.unsplash.com/photo-1514533212735-5df27d970db0" class="rounded-lg object-cover h-32 w-full hover:opacity-90 transition-opacity cursor-zoom-in" alt="Main Door">
                        <p class="text-[10px] text-center uppercase tracking-widest text-gray-400">${t['contact.modal.gallery.door']}</p>
                    </div>
                    <div class="space-y-2">
                        <img src="https://images.unsplash.com/photo-1552072805-2a9039d00e57" class="rounded-lg object-cover h-32 w-full hover:opacity-90 transition-opacity cursor-zoom-in" alt="Floor Map">
                        <p class="text-[10px] text-center uppercase tracking-widest text-gray-400">${t['contact.modal.gallery.hallway']}</p>
                    </div>
                    <div class="space-y-2">
                        <img src="https://images.unsplash.com/photo-1599447421416-3414500d18a5" class="rounded-lg object-cover h-32 w-full hover:opacity-90 transition-opacity cursor-zoom-in" alt="Studio Entrance">
                        <p class="text-[10px] text-center uppercase tracking-widest text-gray-400">${t['contact.modal.gallery.studio']}</p>
                    </div>
                </div >
                        <p class="text-sm text-gray-500 mt-4 italic">${t['contact.modal.gallery.note']}</p>
                    `;
        } else {
            infoBody.innerHTML = `< p > ${t[`contact.modal.content.${type}`] || 'Coming soon...'}</p > `;
        }

        toggleModal('info-modal', true);
        if (window.lucide) window.lucide.createIcons();
    };

    // Deep Linking Handling
    const handleHash = () => {
        const hash = window.location.hash.replace('#', '');
        const validHashes = ['parking', 'transport', 'walking', 'gallery'];
        if (validHashes.includes(hash)) {
            showInfo(hash);
        }
    };

    // Listen for hash changes and initial load
    window.addEventListener('hashchange', handleHash);
    handleHash();

    // Prevent default anchor behavior while maintaining hash for deep links
    document.querySelectorAll('#parking-button, #transport-button, #walking-button, #gallery-button').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const type = btn.getAttribute('href').replace('#', '');
            if (window.location.hash !== btn.getAttribute('href')) {
                // Let browser handle hash update if it's different
            } else {
                // If hash is same, manually trigger showing info
                showInfo(type);
            }
        });
    });
}

function toggleModal(id, show) {
    const el = document.getElementById(id);
    const content = el.querySelector('.modal-content');

    // Add background click listener once
    if (!el.dataset.listenerAdded) {
        el.addEventListener('click', (e) => {
            if (e.target === el) toggleModal(id, false);
        });
        el.dataset.listenerAdded = 'true';
    }

    if (show) {
        el.classList.remove('opacity-0', 'pointer-events-none');
        content.classList.remove('scale-95', 'opacity-0');
    } else {
        el.classList.add('opacity-0');
        content.classList.add('scale-95', 'opacity-0');
        setTimeout(() => {
            el.classList.add('pointer-events-none');
            // Clear hash on close to allow re-triggering and clean URL
            if (id === 'info-modal' && ['#parking', '#transport', '#walking', '#gallery'].includes(window.location.hash)) {
                history.replaceState(null, null, ' ');
            }
        }, 300);
    }
}

// --- Reviews ---
// --- Reviews Carousel ---
let currentReviewIndex = 0;

function initReviewsCarousel() {
    const track = document.getElementById('reviews-track');
    const prevBtn = document.getElementById('prev-review');
    const nextBtn = document.getElementById('next-review');
    const dotsContainer = document.getElementById('review-dots');

    if (!track || typeof storiesData === 'undefined') return;

    const lang = currentLanguage;
    const t = translationsData[lang] || translationsData['en'];

    // Render Track
    track.innerHTML = '';
    storiesData.forEach(story => {
        const card = document.createElement('div');
        card.className = "review-card flex-shrink-0 w-full md:w-1/2 lg:w-1/3 p-4 flex";

        const storyText = story.text[lang] || story.text['en'];

        card.innerHTML = `
            <div class="bg-white rounded-xl shadow-sm border border-gray-100 flex flex-col w-full h-full overflow-hidden transition-all duration-300 hover:shadow-md group">
                <!--Image Header-->
                <div class="h-48 w-full relative overflow-hidden">
                    <img src="${story.image}" alt="Community Story" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105">
                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div class="absolute bottom-4 left-4 flex items-center gap-3">
                        <img src="${story.avatar}" alt="${story.author}" class="w-10 h-10 rounded-full border-2 border-white object-cover">
                        <div>
                            <h4 class="font-bold text-white text-sm leading-tight">${story.author}</h4>
                            <p class="text-[10px] text-gray-200 uppercase tracking-widest">${story.role}</p>
                        </div>
                    </div>
                </div>
                <!--Content -->
                        <div class="p-6 flex flex-col flex-grow">
                            <div class="flex-grow mb-4">
                                <p class="text-gray-600 text-sm leading-relaxed italic line-clamp-4">"${storyText}"</p>
                            </div>
                            <!-- Footer -->
                            <div class="pt-4 border-t border-gray-50 flex items-center justify-between mt-auto">
                                <span class="text-[10px] font-medium text-gray-400 uppercase tracking-widest flex items-center">
                                    <i data-lucide="calendar" class="h-3 w-3 mr-1"></i> ${story.date}
                                </span>
                                <a href="${story.link}" target="_blank" class="text-[10px] bg-pink-50 text-pink-600 px-3 py-1 rounded-full font-semibold hover:bg-pink-100 transition-colors flex items-center gap-1">
                                    ${story.source} <i data-lucide="external-link" class="h-3 w-3"></i>
                                </a>
                            </div>
                        </div>
            </div>`;
        track.appendChild(card);
    });

    if (window.lucide) window.lucide.createIcons();

    // Carousel State
    const cards = track.querySelectorAll('.review-card');
    const totalCards = cards.length;

    function getVisibleCount() {
        if (window.innerWidth >= 1024) return 3;
        if (window.innerWidth >= 768) return 2;
        return 1;
    }

    function updateCarousel() {
        const visible = getVisibleCount();
        const maxIndex = Math.max(0, totalCards - visible);
        if (currentReviewIndex > maxIndex) currentReviewIndex = maxIndex;

        const offset = -(currentReviewIndex * (100 / visible));
        track.style.transform = `translateX(${offset} %)`;

        // Update Buttons
        if (prevBtn) prevBtn.style.opacity = currentReviewIndex === 0 ? "0.5" : "1";
        if (nextBtn) nextBtn.style.opacity = currentReviewIndex >= maxIndex ? "0.5" : "1";

        // Update Dots
        const dots = dotsContainer.querySelectorAll('.dot');
        dots.forEach((dot, idx) => {
            dot.classList.toggle('bg-pink-600', idx === Math.floor(currentReviewIndex / visible));
            dot.classList.toggle('bg-gray-200', idx !== Math.floor(currentReviewIndex / visible));
        });
    }

    // Init Dots
    if (dotsContainer) {
        dotsContainer.innerHTML = '';
        const dotCount = Math.ceil(totalCards / getVisibleCount());
        for (let i = 0; i < dotCount; i++) {
            const dot = document.createElement('button');
            dot.className = `dot h - 2 w - 2 rounded - full transition - colors ${i === 0 ? 'bg-pink-600' : 'bg-gray-200'} `;
            dot.addEventListener('click', () => {
                currentReviewIndex = i * getVisibleCount();
                updateCarousel();
            });
            dotsContainer.appendChild(dot);
        }
    }

    // Event Listeners
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            const visible = getVisibleCount();
            if (currentReviewIndex < totalCards - visible) {
                currentReviewIndex++;
                updateCarousel();
            }
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            if (currentReviewIndex > 0) {
                currentReviewIndex--;
                updateCarousel();
            }
        });
    }

    window.addEventListener('resize', updateCarousel);
    updateCarousel();
}

// --- Google Reviews ---
function initGoogleReviewsCarousel() {
    const track = document.getElementById('google-reviews-track');
    const prevBtn = document.getElementById('google-prev-review');
    const nextBtn = document.getElementById('google-next-review');
    const dotsContainer = document.getElementById('google-review-dots');

    if (!track || typeof reviewsData === 'undefined') return;

    const lang = currentLanguage;
    const t = translationsData[lang] || translationsData['en'];

    // Sort by date (latest first)
    const sortedReviews = [...reviewsData].sort((a, b) => new Date(b.date) - new Date(a.date));

    // Render Track
    track.innerHTML = '';
    sortedReviews.forEach(r => {
        const card = document.createElement('div');
        card.className = "review-card flex-shrink-0 w-full md:w-1/2 lg:w-1/3 p-4 flex";

        // Dynamic timeframe translation fallback
        let timeDisplay = r.timeAgo;
        if (lang !== 'en' && t['reviews.ago']) {
            timeDisplay = r.timeAgo.replace('months ago', t['reviews.ago']).replace('years ago', t['reviews.ago']);
        }

        card.innerHTML = `
            <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col w-full transition-all duration-300 hover:shadow-md">
                <div class="flex justify-between items-start mb-4">
                    <div>
                        <h4 class="font-bold text-gray-900">${r.name}</h4>
                        <p class="text-xs text-gray-400 uppercase tracking-widest">${timeDisplay}</p>
                    </div>
                    <div class="flex text-yellow-400">
                        ${Array(r.stars || 5).fill('<i data-lucide="star" class="h-3 w-3 fill-current"></i>').join('')}
                    </div>
                </div>
                <div class="flex-grow">
                    <p class="text-gray-600 text-sm leading-relaxed italic">"${r.text || '...'}"</p>
                </div>
                <div class="mt-4 pt-4 border-t border-gray-50 flex items-center justify-between">
                    <span class="text-[10px] font-medium text-gray-400 uppercase tracking-tighter flex items-center">
                        <i data-lucide="info" class="h-3 w-3 mr-1"></i> ${t['reviews.verified'] || 'Verified Google Review'}
                    </span>
                    ${r.badge ? `<span class="text-[10px] bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full font-semibold">${t['reviews.local_guide'] || r.badge.text}</span>` : ''}
                </div>
            </div>`;
        track.appendChild(card);
    });

    if (window.lucide) window.lucide.createIcons();

    // Carousel State
    const cards = track.querySelectorAll('.review-card');
    const totalCards = cards.length;
    let currentGoogleReviewIndex = 0;

    function getVisibleCount() {
        if (window.innerWidth >= 1024) return 3;
        if (window.innerWidth >= 768) return 2;
        return 1;
    }

    function updateCarousel() {
        const visible = getVisibleCount();
        const maxIndex = Math.max(0, totalCards - visible);
        if (currentGoogleReviewIndex > maxIndex) currentGoogleReviewIndex = maxIndex;

        const offset = -(currentGoogleReviewIndex * (100 / visible));
        track.style.transform = `translateX(${offset} %)`;

        // Update Buttons
        if (prevBtn) prevBtn.style.opacity = currentGoogleReviewIndex === 0 ? "0.5" : "1";
        if (nextBtn) nextBtn.style.opacity = currentGoogleReviewIndex >= maxIndex ? "0.5" : "1";

        // Update Dots
        const dots = dotsContainer.querySelectorAll('.dot');
        dots.forEach((dot, idx) => {
            dot.classList.toggle('bg-pink-600', idx === Math.floor(currentGoogleReviewIndex / visible));
            dot.classList.toggle('bg-gray-200', idx !== Math.floor(currentGoogleReviewIndex / visible));
        });
    }

    // Init Dots
    if (dotsContainer) {
        dotsContainer.innerHTML = '';
        const dotCount = Math.ceil(totalCards / getVisibleCount());
        for (let i = 0; i < dotCount; i++) {
            const dot = document.createElement('button');
            dot.className = `dot h - 2 w - 2 rounded - full transition - colors ${i === 0 ? 'bg-pink-600' : 'bg-gray-200'} `;
            dot.addEventListener('click', () => {
                currentGoogleReviewIndex = i * getVisibleCount();
                updateCarousel();
            });
            dotsContainer.appendChild(dot);
        }
    }

    // Event Listeners
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            const visible = getVisibleCount();
            if (currentGoogleReviewIndex < totalCards - visible) {
                currentGoogleReviewIndex++;
                updateCarousel();
            }
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            if (currentGoogleReviewIndex > 0) {
                currentGoogleReviewIndex--;
                updateCarousel();
            }
        });
    }

    window.addEventListener('resize', updateCarousel);
    updateCarousel();
}

// --- Leave Review Button ---
function initLeaveReviewButton() {
    const leaveReviewButton = document.getElementById('leave-review-button');
    if (leaveReviewButton) {
        leaveReviewButton.addEventListener('click', () => {
            window.open('https://g.page/r/CYHeaA4O-cjREB0/review', '_blank');
        });
    }
}

// --- Instagram ---
function initInstagramCarousel() {
    const track = document.querySelector('.slider-track');
    if (!track) return;
    track.innerHTML = '';
    const all = [...instagramData, ...instagramData];
    all.forEach(p => {
        track.innerHTML += `<a href="${p.link}" target="_blank" class="w-[250px] aspect-square mx-2 flex-shrink-0"><img src="${p.img}" class="w-full h-full object-cover rounded-lg"></a>`;
    });
}

// --- Teachers ---
function initTeacherLanguages() {
    const flagUrls = {
        'en': 'https://flagcdn.com/w20/gb.png',
        'et': 'https://flagcdn.com/w20/ee.png',
        'fi': 'https://flagcdn.com/w20/fi.png'
    };

    document.querySelectorAll('.teacher-card').forEach(card => {
        const id = card.getAttribute('data-teacher-id');
        const teacher = window.teachersData?.[id];
        if (teacher && teacher.languages && teacher.languages.length > 0) {
            const roleEl = card.querySelector('.teacher-role');
            if (roleEl && !card.querySelector('.teacher-languages')) {
                const langDiv = document.createElement('div');
                langDiv.className = 'teacher-languages flex gap-2 mb-4 mt-[-8px]';
                teacher.languages.forEach(lang => {
                    const img = document.createElement('img');
                    img.src = flagUrls[lang] || `https://flagcdn.com/w20/${lang}.png`;
                    img.alt = lang.toUpperCase();
                    img.title = lang.toUpperCase();
                    img.className = 'w-5 h-5 rounded-full object-cover shadow-sm opacity-80 transition-transform hover:scale-110 hover:opacity-100';
                    langDiv.appendChild(img);
                });
                roleEl.insertAdjacentElement('afterend', langDiv);
            }
        }
    });
}

// --- Form Handling ---
function initForms() {
    const forms = [
        document.getElementById('contact-form'),
        document.getElementById('rent-form'),
        ...document.querySelectorAll('.newsletter-form'),
        // Fallback for any forms still using the old ID
        document.getElementById('newsletter-form')
    ].filter(Boolean); // Remove nulls

    forms.forEach(form => {
        if (!form) return;

        form.addEventListener('submit', async (e) => {
            e.preventDefault();

            const submitBtn = form.querySelector('button[type="submit"]');
            const originalBtnHtml = submitBtn.innerHTML;
            const lang = currentLanguage || 'en';
            const t = translationsData && translationsData[lang] ? translationsData[lang] : {};

            try {
                // Set Loading State
                submitBtn.disabled = true;
                submitBtn.innerHTML = '<i data-lucide="loader-2" class="h-5 w-5 animate-spin mx-auto"></i>';
                if (window.lucide) window.lucide.createIcons();
                submitBtn.classList.add('opacity-75', 'cursor-not-allowed');

                const formData = new FormData(form);

                // For newsletter form without explicit formType field (fallback)
                if ((form.id === 'newsletter-form' || form.classList.contains('newsletter-form')) && !formData.has('formType')) {
                    formData.append('formType', 'newsletter');
                }

                const response = await fetch('/api/submit', {
                    method: 'POST',
                    body: formData
                });

                const result = await response.json();

                if (response.ok && result.success) {
                    // Success UI
                    const formType = formData.get('formType');
                    const successMessage = document.createElement('div');
                    successMessage.className = 'mt-4 p-4 rounded-md text-sm bg-green-50 text-green-700 border border-green-200 flex items-center';

                    let msgText = 'Message sent successfully!';
                    if (formType === 'newsletter') msgText = t['footer.subscribe_success'] || 'Subscribed successfully!';
                    if (formType === 'rental') msgText = 'Inquiry sent successfully!';

                    successMessage.innerHTML = `<i data-lucide="check-circle" class="h-4 w-4 mr-2"></i> ${msgText}`;

                    // Clear previous messages
                    const existingMsg = form.nextElementSibling;
                    if (existingMsg && existingMsg.classList.contains('bg-green-50')) {
                        existingMsg.remove();
                    }

                    form.parentNode.insertBefore(successMessage, form.nextSibling);
                    form.reset();
                    if (window.lucide) window.lucide.createIcons();

                    // Hide success message after 5 seconds
                    setTimeout(() => {
                        successMessage.style.opacity = '0';
                        successMessage.style.transition = 'opacity 0.5s ease';
                        setTimeout(() => successMessage.remove(), 500);
                    }, 5000);
                } else {
                    throw new Error(result.error || 'Failed to send message');
                }

            } catch (error) {
                console.error("Form submission error:", error);

                // Error UI
                const errorMessage = document.createElement('div');
                errorMessage.className = 'mt-4 p-4 rounded-md text-sm bg-red-50 text-red-700 border border-red-200 flex items-center';
                errorMessage.innerHTML = `<i data-lucide="alert-circle" class="h-4 w-4 mr-2"></i> Failed to send. Please try again.`;

                // Clear previous messages
                const existingMsg = form.nextElementSibling;
                if (existingMsg && existingMsg.classList.contains('bg-red-50')) {
                    existingMsg.remove();
                }

                form.parentNode.insertBefore(errorMessage, form.nextSibling);
                if (window.lucide) window.lucide.createIcons();

                // Hide error message after 5 seconds
                setTimeout(() => {
                    errorMessage.style.opacity = '0';
                    errorMessage.style.transition = 'opacity 0.5s ease';
                    setTimeout(() => errorMessage.remove(), 500);
                }, 5000);

            } finally {
                // Restore button state
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalBtnHtml;
                submitBtn.classList.remove('opacity-75', 'cursor-not-allowed');
                if (window.lucide) window.lucide.createIcons();
            }
        });
    });
}
function initNavbar() {
    const navbar = document.getElementById('navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 10) {
                navbar.classList.add('bg-white/80', 'backdrop-blur-md', 'shadow-sm');
                navbar.classList.remove('bg-transparent');
            } else {
                navbar.classList.remove('bg-white/80', 'backdrop-blur-md', 'shadow-sm');
                navbar.classList.add('bg-transparent');
            }
        });
    }
}
function initMobileMenu() {
    // Basic mobile menu
    const btn = document.getElementById('menu-toggle');
    const menu = document.getElementById('mobile-menu');
    const close = document.getElementById('menu-close');
    if (btn && menu) btn.addEventListener('click', () => menu.classList.remove('translate-x-full'));
    if (close && menu) close.addEventListener('click', () => menu.classList.add('translate-x-full'));
}
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;

            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}
function initFadeIn() {
    // Force visible immediately
    document.querySelectorAll('.fade-in-section').forEach(el => {
        el.classList.add('is-visible');
        el.style.opacity = 1; // Double force
    });
}
function initCountdown() {
    // Determine header countdown existence safely
    const countdownEl = document.getElementById('countdown');

    // Set the date we're counting down to: March 10, current year 23:59:59 (for header)
    const currentYear = new Date().getFullYear();
    const targetDate = new Date(`March 10, ${currentYear} 23:59:59`).getTime();

    function updateTimer() {
        const now = new Date().getTime();

        // --- 1. Main Header Countdown ---
        const mainDistance = targetDate - now;
        if (countdownEl && mainDistance >= 0) {
            const days = Math.floor(mainDistance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((mainDistance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((mainDistance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((mainDistance % (1000 * 60)) / 1000);

            let dEl = document.getElementById('days'); if (dEl) dEl.innerText = days.toString().padStart(2, '0');
            let hEl = document.getElementById('hours'); if (hEl) hEl.innerText = hours.toString().padStart(2, '0');
            let mEl = document.getElementById('minutes'); if (mEl) mEl.innerText = minutes.toString().padStart(2, '0');
            let sEl = document.getElementById('seconds'); if (sEl) sEl.innerText = seconds.toString().padStart(2, '0');
        }

        // --- 2. Pricing Modal Countdown ---
        const modalTargetDate = new Date("March 31, 2026 23:59:59").getTime();
        const modalDistance = modalTargetDate - now;
        const modalCountdownEls = document.querySelectorAll('#pricing-modal .countdown-val');

        if (modalCountdownEls.length > 0 && modalDistance >= 0) {
            const days = Math.floor(modalDistance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((modalDistance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((modalDistance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((modalDistance % (1000 * 60)) / 1000);

            modalCountdownEls.forEach(el => {
                const unit = el.getAttribute('data-unit');
                if (unit === 'days') el.innerText = days.toString().padStart(2, '0');
                if (unit === 'hours') el.innerText = hours.toString().padStart(2, '0');
                if (unit === 'minutes') el.innerText = minutes.toString().padStart(2, '0');
                if (unit === 'seconds') el.innerText = seconds.toString().padStart(2, '0');
            });
        }
    }

    updateTimer();
    setInterval(updateTimer, 1000);
}
function initLikeButtons() { /* Placeholder */ }

// --- Aggressive SEO Logic ---
function initSEO() {
    // Inject JSON-LD Schema
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(seoData.schema);
    document.head.appendChild(script);

    // Initial SEO update
    updateSEO(currentLanguage);
}

function updateSEO(lang) {
    if (typeof seoData === 'undefined') return;

    let data;
    const path = window.location.pathname;

    if (path.includes('rent.html')) {
        data = (seoData.meta.rent && seoData.meta.rent[lang]) || (seoData.meta.rent && seoData.meta.rent['en']);
    } else if (path.includes('faq.html')) {
        data = (seoData.meta.faq && seoData.meta.faq[lang]) || (seoData.meta.faq && seoData.meta.faq['en']);
    } else if (path.includes('offers.html')) {
        data = (seoData.meta.offers && seoData.meta.offers[lang]) || (seoData.meta.offers && seoData.meta.offers['en']);
    } else {
        data = seoData.meta[lang] || seoData.meta['en'];
    }

    if (!data) return;

    // Standard Meta
    if (data.title) document.title = data.title;
    const titleEl = document.getElementById('seo-title');
    if (titleEl) titleEl.textContent = data.title;

    const descEl = document.getElementById('seo-description');
    if (descEl) descEl.setAttribute('content', data.description);

    const keyEl = document.getElementById('seo-keywords');
    if (keyEl) keyEl.setAttribute('content', data.keywords);

    // Open Graph
    const ogTitle = document.getElementById('og-title');
    if (ogTitle) ogTitle.setAttribute('content', data.ogTitle || data.title);

    const ogDesc = document.getElementById('og-description');
    if (ogDesc) ogDesc.setAttribute('content', data.ogDescription || data.description);

    const ogImg = document.getElementById('og-image');
    if (ogImg) ogImg.setAttribute('content', data.ogImage || (seoData.config && seoData.config.defaultImage));

    // Twitter
    const twTitle = document.getElementById('twitter-title');
    if (twTitle) twTitle.setAttribute('content', data.ogTitle || data.title);

    const twDesc = document.getElementById('twitter-description');
    if (twDesc) twDesc.setAttribute('content', data.ogDescription || data.description);
}

// Events Logic
function initEvents() {
    const container = document.getElementById('events-container');
    if (!container) return;
    renderEvents(container, true); // true = homepage (featured only)
}

function renderEvents(container, featuredOnly = false) {
    const lang = localStorage.getItem('preferredLanguage') || 'en';
    const now = new Date();

    // Filter and sort events
    let events = eventsData.filter(event => {
        const isExpired = event.expiryDate && new Date(event.expiryDate) < now;
        const isFeaturedMatch = !featuredOnly || event.featured;
        return event.active && !isExpired && isFeaturedMatch;
    });

    // Limit to 3 if on homepage
    if (featuredOnly) {
        events = events.slice(0, 3);
    }

    if (events.length === 0) {
        container.innerHTML = `<p class="col-span-full text-center text-gray-500 py-12">${translationsData[lang]['faq.no_results'] || 'No upcoming events.'}</p>`;
        return;
    }

    container.innerHTML = events.map(event => {
        const data = event[lang] || event['en'];
        const typeLabel = event.type === 'retreat'
            ? (lang === 'et' ? 'Retriit' : lang === 'fi' ? 'Retriitti' : 'Retreat')
            : (lang === 'et' ? 'Sündmus' : lang === 'fi' ? 'Tapahtuma' : 'Event');
        const categoryLabel = event.category === 'abroad'
            ? (lang === 'et' ? 'Välismaal' : lang === 'fi' ? 'Ulkomailla' : 'Abroad')
            : event.category === 'estonia'
                ? (lang === 'et' ? 'Eestis' : lang === 'fi' ? 'Virossa' : 'Estonia')
                : event.category === 'studio'
                    ? (lang === 'et' ? 'Stuudios' : lang === 'fi' ? 'Studiolla' : 'Studio')
                    : '';

        return `
            <div class="bg-white rounded-xl overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md flex flex-col h-full border border-gray-100 group">
                <div class="relative h-64 overflow-hidden">
                    <img src="${event.image}" alt="${data.title}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105">
                    <div class="absolute top-4 left-4 flex flex-col gap-2">
                        <span class="px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-bold uppercase tracking-widest text-pink-600 rounded-full shadow-sm">${typeLabel}</span>
                        ${categoryLabel ? `<span class="px-3 py-1 bg-gray-900/80 backdrop-blur-sm text-xs font-bold uppercase tracking-widest text-white rounded-full shadow-sm">${categoryLabel}</span>` : ''}
                        ${event.type === 'retreat' && event.category === 'abroad' && event.country ? `<span class="px-3 py-1 bg-pink-500/80 backdrop-blur-sm text-xs font-bold uppercase tracking-widest text-white rounded-full shadow-sm">${event.country[lang] || event.country['en']}</span>` : ''}
                    </div>
                    <button onclick="shareEvent('${event.id}', '${data.title}')" class="absolute top-4 right-4 p-2.5 bg-white/90 backdrop-blur-sm rounded-full text-gray-700 hover:text-pink-600 transition-all shadow-sm group/share">
                        <i data-lucide="share-2" class="h-4 w-4"></i>
                    </button>
                </div>
                <div class="p-6 flex flex-col flex-grow">
                    <div class="flex items-center text-sm text-pink-500 mb-2 font-semibold">
                        <i data-lucide="calendar" class="h-4 w-4 mr-2"></i>
                        <span>${data.date}</span>
                    </div>
                    <h3 class="text-xl font-medium mb-2 group-hover:text-pink-600 transition-colors line-clamp-1">${data.title}</h3>
                    <p class="text-sm text-gray-500 mb-4 italic">${data.organizer}</p>
                    <p class="text-gray-600 mb-6 line-clamp-3 text-sm leading-relaxed">${data.description}</p>
                    <div class="mt-auto flex gap-3">
                        <a href="${event.registerLink}" class="flex-1 text-center py-3 bg-gray-900 text-white text-sm font-bold uppercase tracking-widest rounded-lg hover:bg-pink-600 transition-all duration-300">
                            ${translationsData[lang]['events.register_button']}
                        </a>
                        <a href="event.html?id=${event.id}" class="flex-1 text-center py-3 border border-gray-200 text-gray-700 text-sm font-bold uppercase tracking-widest rounded-lg hover:bg-gray-50 transition-all">
                            ${translationsData[lang]['events.learn_more_button']}
                        </a>
                    </div>
                </div>
            </div >
                        `;
    }).join('');

    // Re-initialize Lucide icons
    if (window.lucide) {
        window.lucide.createIcons();
    }
}

async function shareEvent(id, title) {
    const url = `${window.location.origin}${window.location.pathname.replace(/\/[^\/]*$/, '')}/event.html?id=${id}`;

    if (navigator.share) {
        try {
            await navigator.share({
                title: title,
                text: `Join me at ${title} - Goyoga Tallinn`,
                url: url
            });
        } catch (err) {
            console.log('Share cancelled or failed:', err);
        }
    } else {
        // Fallback: Copy to clipboard
        try {
            await navigator.clipboard.writeText(url);
            // Optional: Simple toast or UI feedback could go here
            alert('Link copied to clipboard!');
        } catch (err) {
            console.error('Could not copy text: ', err);
        }
    }
}
