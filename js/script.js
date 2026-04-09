// Main Logic (Non-Module)
let currentLanguage = 'en';

// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
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
    // Rely on the server/build to set the HTML lang correctly.
    const htmlLang = document.documentElement.lang || 'en';
    currentLanguage = htmlLang;

    updateUIDecorators(currentLanguage);
}

// Call immediately to set currentLanguage before other scripts load
initLanguage();

// Utility to resolve the correct URL slug based on seoData translation maps
function getTranslatedUrl(filename) {
    if (typeof seoData !== 'undefined' && seoData.urlRoutes && typeof currentLanguage !== 'undefined') {
        const langRoutes = seoData.urlRoutes[currentLanguage] || seoData.urlRoutes['en'];
        return langRoutes[filename] || filename;
    }
    return filename;
}

function setLanguage(lang) {
    if (!['en', 'et', 'fi', 'ru'].includes(lang)) return;
    localStorage.setItem('preferredLanguage', lang);

    const path = window.location.pathname;

    // Extract current filename and normalize Cloudflare extensionless paths
    let currentFilename = path.split('/').pop() || 'index.html';
    if (!currentFilename || path.endsWith('/')) currentFilename = 'index.html';
    if (currentFilename !== 'index.html' && !currentFilename.includes('.')) currentFilename += '.html';

    // Reverse lookup to find the English (base) filename
    let baseFilename = currentFilename;
    if (typeof seoData !== 'undefined' && seoData.urlRoutes) {
        const activeLangDict = seoData.urlRoutes[currentLanguage] || seoData.urlRoutes['en'];
        for (const [enKey, locName] of Object.entries(activeLangDict)) {
            if (locName === currentFilename) {
                baseFilename = enKey;
                break;
            }
        }
    }

    // Forward lookup to get the target language filename
    let targetFilename = baseFilename;
    if (typeof seoData !== 'undefined' && seoData.urlRoutes && seoData.urlRoutes[lang]) {
        targetFilename = seoData.urlRoutes[lang][baseFilename] || baseFilename;
    }

    const searchStr = window.location.search || '';
    const hashStr = window.location.hash || '';

    // Keep .html for clean Cloudflare aesthetics when assigning location
    const targetUrl = targetFilename;

    if (targetFilename === 'index.html') {
        window.location.href = `/${lang === 'en' ? '' : lang + '/'}${searchStr}${hashStr}`;
    } else {
        window.location.href = `/${lang}/${targetUrl}${searchStr}${hashStr}`;
    }
}

function updateUI(lang) {
    if (typeof translationsData !== 'undefined' && translationsData[lang]) {
        const t = translationsData[lang];
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (t[key]) {
                if (el.tagName.toLowerCase() === 'input' || el.tagName.toLowerCase() === 'textarea') {
                    if (el.hasAttribute('placeholder')) el.placeholder = t[key];
                } else {
                    el.innerHTML = t[key];
                }
            }
        });
    }
}

function updateUIDecorators(lang) {
    const flagMap = { 'en': 'https://flagcdn.com/w20/gb.png', 'et': 'https://flagcdn.com/w20/ee.png', 'fi': 'https://flagcdn.com/w20/fi.png', 'ru': 'https://flagcdn.com/w20/ru.png' };
    const languageCodeMap = { 'en': 'EN', 'et': 'EE', 'fi': 'FI', 'ru': 'RU' };

    // Update switchers
    const currentFlag = document.getElementById('current-flag');
    if (currentFlag) currentFlag.src = flagMap[lang];
    const currentLangText = document.getElementById('current-language');
    if (currentLangText) currentLangText.textContent = languageCodeMap[lang];
    const mobFlag = document.getElementById('mobile-current-flag');
    if (mobFlag) mobFlag.src = flagMap[lang];
    const mobLangText = document.getElementById('mobile-current-language');
    if (mobLangText) mobLangText.textContent = languageCodeMap[lang];

    updateSEO(lang); // Update Meta Tags

    // Dropdowns active state
    document.querySelectorAll('.language-option, .language-option-mobile').forEach(option => {
        if (option.getAttribute('data-lang') === lang) option.classList.add('active');
        else option.classList.remove('active');
    });

    // Close menus
    document.getElementById('language-dropdown')?.classList.remove('active');
    document.getElementById('mobile-language-dropdown')?.classList.remove('active');
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

    function getAssetPath(absolutePath) {
        if (!absolutePath || !absolutePath.startsWith('/')) return absolutePath;
        if (window.location.protocol === 'file:') {
            const isSubdir = ['/en/', '/et/', '/fi/', '/ru/'].some(dir => window.location.pathname.includes(dir));
            return (isSubdir ? '..' : '.') + absolutePath;
        }
        return absolutePath;
    }

    // Pricing
    document.querySelectorAll('.pricing-button').forEach(btn => {
        btn.addEventListener('click', () => {
            const group = btn.dataset.pricingGroup;
            const langPricing = pricingData[currentLanguage] || pricingData['en'];
            const data = langPricing[group];
            
            if (data) {
                renderPricingOptions(data, group);
                toggleModal('pricing-modal', true);
            }
        });
    });

    function renderPricingOptions(data, group) {
        document.getElementById('pricing-modal-title').textContent = data.title;
        const body = document.getElementById('pricing-modal-body');
        body.innerHTML = '';
        let hasSeasonalOffer = false;
        let modalContentHTML = '';

        data.options.forEach((opt, index) => {
            let displayPrice = `<span class="font-bold text-pink-600">${opt.price}</span>`;

            const langData = translationsData[currentLanguage] || translationsData['en'];
            const buyBtnText = langData['pricing.buy'] || 'Buy Now';
            
            modalContentHTML += `
                <div class="p-4 border rounded flex flex-col justify-center">
                    <div class="flex justify-between items-center w-full group mb-2">
                        <span class="font-medium group-hover:text-pink-600 transition-colors">${opt.name}</span>
                        ${displayPrice}
                    </div>
                    <div class="flex flex-col gap-2 mb-2">
                        <button class="w-full inline-block text-center px-4 py-2 bg-pink-600 text-white text-xs font-bold rounded-md hover:bg-pink-700 transition-colors uppercase tracking-wider select-none active:scale-[0.98] buy-start-btn" data-opt-index="${index}" data-group="${group}">
                            ${buyBtnText}
                        </button>
                    </div>
                    ${opt.desc ? `<p class="text-xs text-gray-500 leading-relaxed">${opt.desc}</p>` : ''}
                </div>
            `;
        });

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

        // Render Benefits & Conditions (Omitted for brevity in summary, but kept in full file)
        renderBenefitsAndConditions(data, body);

        // Add Listeners to Buy Buttons
        body.querySelectorAll('.buy-start-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const opt = data.options[btn.dataset.optIndex];
                renderInvoiceSummary(opt, data, group);
            });
        });

        if (window.lucide) window.lucide.createIcons();
    }

    function renderBenefitsAndConditions(data, body) {
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
    }

    async function renderInvoiceSummary(opt, data, group) {
        const langData = translationsData[currentLanguage] || translationsData['en'];
        const body = document.getElementById('pricing-modal-body');
        document.getElementById('pricing-modal-title').textContent = langData['checkout.invoice_summary'] || 'Invoice Summary';
        
        body.innerHTML = `
            <div class="space-y-6">
                <!-- Back Button -->
                <button class="flex items-center text-xs font-bold text-gray-400 uppercase tracking-widest hover:text-pink-600 transition-colors" id="checkout-back-btn">
                    <i data-lucide="arrow-left" class="h-3 w-3 mr-2"></i>
                    ${langData['checkout.back_button'] || 'Back'}
                </button>

                <!-- Invoice Table -->
                <div class="bg-gray-50 rounded-xl p-6 border border-gray-100">
                    <div class="flex justify-between items-center mb-6">
                        <img src="${getAssetPath('/assets/branding/logo-goyoga-tallinn-estonia.svg')}" class="h-8 object-contain" alt="Logo">
                        <div class="text-right">
                            <p class="text-[10px] text-gray-400 uppercase tracking-widest font-bold mb-1">${langData['checkout.invoice_no'] || 'Invoice No.'}</p>
                            <p class="text-xs font-bold text-gray-800">DRAFT-NEW</p>
                        </div>
                    </div>
                    
                    <div class="space-y-3">
                        <div class="flex justify-between items-center pb-3 border-b border-gray-200">
                            <span class="text-xs font-bold text-gray-800 uppercase tracking-wider">${opt.name}</span>
                            <span class="text-xs font-bold text-pink-600">${opt.price}</span>
                        </div>
                        <div class="flex justify-between items-center pt-2">
                            <span class="text-xs font-bold text-gray-800 uppercase tracking-widest">${langData['checkout.total'] || 'Total'}</span>
                            <span class="text-lg font-bold text-pink-600">${opt.price}</span>
                        </div>
                    </div>
                </div>

                <!-- Email Form -->
                <div class="space-y-4">
                    <div>
                        <label class="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2 px-1">
                            ${langData['checkout.email_label'] || 'Email Address'} *
                        </label>
                        <input type="email" id="checkout-email" class="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-sm focus:border-pink-500 outline-none transition-colors shadow-sm" placeholder="${langData['checkout.email_placeholder'] || 'your@email.com'}" required>
                    </div>

                    <label class="flex items-start gap-3 cursor-pointer group">
                        <div class="relative flex items-center mt-0.5">
                            <input type="checkbox" id="checkout-subscribe" class="peer hidden" checked>
                            <div class="h-4 w-4 border-2 border-gray-300 rounded peer-checked:bg-pink-600 peer-checked:border-pink-600 transition-all"></div>
                            <i data-lucide="check" class="absolute h-3 w-3 text-white opacity-0 peer-checked:opacity-100 left-0.5 pointer-events-none transition-opacity"></i>
                        </div>
                        <span class="text-[11px] text-gray-500 leading-relaxed font-medium group-hover:text-gray-700 transition-colors">
                            ${langData['checkout.subscribe_label'] || 'Subscribe for GoYoga services, events and seasonal offerings'}
                        </span>
                    </label>

                    <button class="w-full bg-pink-600 text-white font-bold py-4 rounded-xl hover:bg-pink-700 transition-all active:scale-[0.98] shadow-lg shadow-pink-100 uppercase tracking-widest text-xs mt-4 flex items-center justify-center gap-2" id="checkout-confirm-btn">
                        <span>${langData['checkout.confirm_button'] || 'Confirm & Order'}</span>
                        <i data-lucide="arrow-right" class="h-4 w-4"></i>
                    </button>
                </div>
            </div>
        `;

        // Listeners for checkout buttons
        document.getElementById('checkout-back-btn')?.addEventListener('click', () => renderPricingOptions(data, group));
        document.getElementById('checkout-confirm-btn')?.addEventListener('click', () => handleCheckoutSubmit(opt, data, group));

        if (window.lucide) window.lucide.createIcons();
    }

    async function handleCheckoutSubmit(opt, data, group) {
        const emailInput = document.getElementById('checkout-email');
        const subscribe = document.getElementById('checkout-subscribe').checked;
        const langData = translationsData[currentLanguage] || translationsData['en'];

        if (!emailInput.checkValidity() || !emailInput.value) {
            emailInput.classList.add('border-red-500');
            return;
        }

        const confirmBtn = document.getElementById('checkout-confirm-btn');
        const originalBtnHTML = confirmBtn.innerHTML;
        confirmBtn.disabled = true;
        confirmBtn.innerHTML = `<i data-lucide="loader-2" class="h-4 w-4 animate-spin"></i>`;
        if (window.lucide) window.lucide.createIcons();

        // Generate ID
        const timestamp = Date.now();
        const invoiceId = `GY-${new Date().toISOString().slice(0, 10).replace(/-/g, '')}-${timestamp.toString().slice(-4)}`;

        try {
            // Call API
            const response = await fetch('/api/invoice', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email: emailInput.value,
                    subscribe,
                    product: opt.name,
                    price: opt.price,
                    invoiceId,
                    language: currentLanguage
                })
            });

            // Transition to Success Step
            renderPaymentStep(opt, invoiceId);
        } catch (error) {
            console.error('Invoice error:', error);
            // Even if email fails, we should let them pay, but maybe show a warning
            renderPaymentStep(opt, invoiceId);
        }
    }

    function renderPaymentStep(opt, invoiceId) {
        const langData = translationsData[currentLanguage] || translationsData['en'];
        const body = document.getElementById('pricing-modal-body');
        
        const buyBtnText = langData['pricing.buy'] || 'Buy Now';
        const qrBtnText = langData['pricing.qr_btn'] || 'Scan QR to Pay';

        body.innerHTML = `
            <div class="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div class="bg-green-50 rounded-xl p-6 border border-green-100 text-center">
                    <div class="h-12 w-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i data-lucide="check-circle" class="h-6 w-6"></i>
                    </div>
                    <h4 class="font-bold text-green-900 mb-1">Invoice Generated</h4>
                    <p class="text-xs text-green-700">Ref: <span class="font-mono font-bold">${invoiceId}</span></p>
                    <p class="text-[10px] text-green-600 mt-2">A summary has been sent to your email.</p>
                </div>

                <div class="p-2">
                    <div class="flex justify-between items-center w-full group mb-4">
                        <span class="font-bold text-gray-800 uppercase tracking-widest text-xs">${opt.name}</span>
                        <span class="font-bold text-pink-600">${opt.price}</span>
                    </div>
                    
                    <div class="flex flex-col gap-3">
                        ${opt.link ? `<a href="${opt.link}" target="_blank" class="w-full inline-block text-center px-4 py-4 bg-pink-600 text-white text-sm font-bold rounded-xl hover:bg-pink-700 transition-all shadow-lg shadow-pink-100 uppercase tracking-widest active:scale-[0.98]">${buyBtnText}</a>` : ''}
                        
                        ${opt.qrCode ? `
                            <div class="p-6 bg-gray-50 rounded-2xl flex flex-col items-center border border-gray-100">
                                <img src="${getAssetPath(opt.qrCode)}" class="w-48 h-48 object-contain bg-white p-4 rounded-xl shadow-inner mb-4" alt="Payment QR Code">
                                <p class="text-[10px] text-gray-400 uppercase tracking-[0.2em] font-bold">${qrBtnText}</p>
                            </div>
                        ` : ''}
                    </div>
                </div>
            </div>
        `;

        if (window.lucide) window.lucide.createIcons();
    }
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
                        <img src="https://images.unsplash.com/photo-1545205597-3d9d02c29597" class="rounded-lg object-cover h-32 w-full hover:opacity-90 transition-opacity cursor-zoom-in" alt="Building Entrance" title="Building Entrance">
                        <p class="text-[10px] text-center uppercase tracking-widest text-gray-400">${t['contact.modal.gallery.entrance']}</p>
                    </div>
                    <div class="space-y-2">
                        <img src="https://images.unsplash.com/photo-1514533212735-5df27d970db0" class="rounded-lg object-cover h-32 w-full hover:opacity-90 transition-opacity cursor-zoom-in" alt="Main Door" title="Main Door">
                        <p class="text-[10px] text-center uppercase tracking-widest text-gray-400">${t['contact.modal.gallery.door']}</p>
                    </div>
                    <div class="space-y-2">
                        <img src="https://images.unsplash.com/photo-1552072805-2a9039d00e57" class="rounded-lg object-cover h-32 w-full hover:opacity-90 transition-opacity cursor-zoom-in" alt="Floor Map" title="Floor Map">
                        <p class="text-[10px] text-center uppercase tracking-widest text-gray-400">${t['contact.modal.gallery.hallway']}</p>
                    </div>
                    <div class="space-y-2">
                        <img src="https://images.unsplash.com/photo-1599447421416-3414500d18a5" class="rounded-lg object-cover h-32 w-full hover:opacity-90 transition-opacity cursor-zoom-in" alt="Studio Entrance" title="Studio Entrance">
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
                    <img src="${story.image}" alt="Community Story" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" title="Community Story">
                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div class="absolute bottom-4 left-4 flex items-center gap-3">
                        <img src="${story.avatar}" alt="${story.author}" class="w-10 h-10 rounded-full border-2 border-white object-cover" title="${story.author}">
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
        'fi': 'https://flagcdn.com/w20/fi.png',
        'ru': 'https://flagcdn.com/w20/ru.png'
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
    const countdownEl = document.getElementById('hero-countdown');

    // Set the date we're counting down to: April 30, 2026 23:59:59
    const targetDate = new Date("April 30, 2026 23:59:59").getTime();

    function updateTimer() {
        const now = new Date().getTime();

        const distance = targetDate - now;
        if (countdownEl && distance >= 0) {
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            // Just inject it directly as before
            countdownEl.innerHTML = `<span class="bg-stone-800 text-pink-300 px-1.5 py-0.5 rounded">${days.toString().padStart(2, '0')}d</span><span class="opacity-50">:</span><span class="bg-stone-800 text-pink-300 px-1.5 py-0.5 rounded">${hours.toString().padStart(2, '0')}h</span>`;
        } else if (countdownEl) {
            countdownEl.innerHTML = '';
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

    // Reverse lookup to find base English filename
    let currentFilename = path.split('/').pop() || 'index.html';
    if (!currentFilename || path.endsWith('/')) currentFilename = 'index.html';

    let baseFilename = currentFilename;
    if (typeof seoData !== 'undefined' && seoData.urlRoutes) {
        const activeLangDict = seoData.urlRoutes[lang] || seoData.urlRoutes['en'];
        for (const [enKey, locName] of Object.entries(activeLangDict)) {
            if (locName === currentFilename) {
                baseFilename = enKey;
                break;
            }
        }
    }

    if (baseFilename === 'rent.html') {
        data = (seoData.meta.rent && seoData.meta.rent[lang]) || (seoData.meta.rent && seoData.meta.rent['en']);
    } else if (baseFilename === 'faq.html') {
        data = (seoData.meta.faq && seoData.meta.faq[lang]) || (seoData.meta.faq && seoData.meta.faq['en']);
    } else if (baseFilename === 'offers.html') {
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
    renderEvents(container, false); // false = show all events
}

function renderEvents(container, featuredOnly = false) {
    const lang = currentLanguage || 'en';
    const now = new Date();
    const todayStr = now.toDateString();

    const tomorrow = new Date(now);
    tomorrow.setDate(now.getDate() + 1);
    const tomorrowStr = tomorrow.toDateString();

    const yesterday = new Date(now);
    yesterday.setDate(now.getDate() - 1);
    const yesterdayStr = yesterday.toDateString();

    // Filter and sort events
    let activeEvents = eventsData.filter(event => {
        // expiryDate is typically the day after the event at 00:00:00
        const expiryDate = new Date(event.expiryDate);
        // Persist for an additional 24 hours after expiry (48h after event start)
        const disappearAt = new Date(expiryDate.getTime() + 24 * 60 * 60 * 1000);
        const isHidden = now > disappearAt;
        const isFeaturedMatch = !featuredOnly || event.featured;
        return event.active && !isHidden && isFeaturedMatch;
    });

    // Sort active events chronologically by start date
    activeEvents.sort((a, b) => new Date(a.startDate) - new Date(b.startDate));

    let displayEvents = activeEvents;

    // Show 3 events and 3 retreats if on homepage
    if (featuredOnly) {
        const studioEvents = activeEvents.filter(e => e.type !== 'retreat').slice(0, 3);
        const retreats = activeEvents.filter(e => e.type === 'retreat').slice(0, 3);
        displayEvents = [...studioEvents, ...retreats];
    }

    if (displayEvents.length === 0) {
        container.innerHTML = `<p class="col-span-full text-center text-gray-500 py-12">${translationsData[lang]['faq.no_results'] || 'No upcoming events.'}</p>`;
        return;
    }

    container.innerHTML = displayEvents.map(event => {
        const data = event[lang] || event['en'];
        const typeLabel = event.type === 'retreat'
            ? (lang === 'et' ? 'Retriit' : lang === 'fi' ? 'Retriitti' : lang === 'ru' ? 'Ретрит' : 'Retreat')
            : (lang === 'et' ? 'Sündmus' : lang === 'fi' ? 'Tapahtuma' : lang === 'ru' ? 'Событие' : 'Event');
        const categoryLabel = event.category === 'estonia'
            ? (lang === 'et' ? 'Eestis' : lang === 'fi' ? 'Virossa' : lang === 'ru' ? 'В Эстонии' : 'Estonia')
            : event.category === 'studio'
                ? (lang === 'et' ? 'Stuudios' : lang === 'fi' ? 'Studiolla' : lang === 'ru' ? 'В студии' : 'Studio')
                : '';

        // Calculate Status Tag
        const expiryDate = new Date(event.expiryDate);
        // Event date is assumed to be 1 day before expiryDate
        const eventDate = new Date(expiryDate.getTime() - 24 * 60 * 60 * 1000);
        const eventDateStr = eventDate.toDateString();

        let statusTag = '';
        const t = translationsData[lang];

        if (eventDateStr === todayStr) {
            statusTag = `<span class="px-3 py-1 bg-green-500 text-white text-[10px] font-bold uppercase tracking-widest rounded-full shadow-sm animate-pulse">${t['events.status.today']}</span>`;
        } else if (eventDateStr === tomorrowStr) {
            statusTag = `<span class="px-3 py-1 bg-blue-500 text-white text-[10px] font-bold uppercase tracking-widest rounded-full shadow-sm">${t['events.status.tomorrow']}</span>`;
        } else if (eventDateStr === yesterdayStr) {
            statusTag = `<span class="px-3 py-1 bg-gray-500 text-white text-[10px] font-bold uppercase tracking-widest rounded-full shadow-sm">${t['events.status.passed']}</span>`;
        }

        return `
            <div class="bg-white rounded-xl overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md flex flex-col h-full border border-gray-100 group">
                <div class="relative h-64 overflow-hidden">
                    <img src="${event.cardImage || event.image}" alt="${data.title}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" title="${data.title}">
                    <div class="absolute top-4 left-4 flex flex-col gap-2">
                        ${statusTag}
                        <span class="px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-bold uppercase tracking-widest text-pink-600 rounded-full shadow-sm">${typeLabel}</span>
                        ${categoryLabel ? `<span class="px-3 py-1 bg-gray-900/80 backdrop-blur-sm text-xs font-bold uppercase tracking-widest text-white rounded-full shadow-sm">${categoryLabel}</span>` : ''}
                        ${event.type === 'retreat' && event.category === 'abroad' && event.country ? `<span class="px-3 py-1 bg-pink-500/80 backdrop-blur-sm text-xs font-bold uppercase tracking-widest text-white rounded-full shadow-sm">${event.country[lang] || event.country['en']}</span>` : ''}
                    </div>
                    <button onclick="shareEvent('${event.id}', '${data.title}')" class="absolute top-4 right-4 p-2.5 bg-white/90 backdrop-blur-sm rounded-full text-gray-700 hover:text-pink-600 transition-all shadow-sm group/share">
                        <i data-lucide="share-2" class="h-4 w-4"></i>
                    </button>
                </div>
                <div class="p-6 flex flex-col flex-grow">
                    <div class="flex justify-between items-center text-pink-500 mb-2 font-semibold">
                        <div class="flex items-center text-sm">
                            <i data-lucide="calendar" class="h-4 w-4 mr-2"></i>
                            <span>${data.date}</span>
                        </div>
                        ${(event.category === 'estonia' || event.category === 'studio') && event.startTime && event.endTime ? `
                        <div class="flex items-center text-gray-500 text-xs font-mono bg-gray-50 px-2 py-1 rounded-md border border-gray-100">
                            <i data-lucide="clock" class="h-3 w-3 mr-1"></i>
                            <span>${event.startTime} - ${event.endTime}</span>
                        </div>` : ''}
                    </div>
                    <h3 class="text-xl font-medium mb-2 group-hover:text-pink-600 transition-colors line-clamp-1">${data.title}</h3>
                    <p class="text-sm text-gray-500 mb-4 italic">${data.organizer}</p>
                    <p class="text-gray-600 mb-6 line-clamp-3 text-sm leading-relaxed">${data.description}</p>
                    <div class="mt-auto flex gap-3">
                        ${(event.registerLink && event.registerLink.startsWith('http')) ? `
                        <a href="${event.registerLink}" target="_blank" rel="noopener noreferrer" class="flex-1 flex justify-center items-center py-3 bg-gray-900 text-white text-[11px] font-bold uppercase tracking-widest rounded-lg hover:bg-pink-600 transition-all duration-300">
                            ${translationsData[lang]['events.register_button']}
                        </a>` : `
                        <button onclick="openEventModal('${event.id}', '${encodeURIComponent(data.title)}')" class="flex-1 text-center py-3 bg-gray-900 text-white text-[11px] font-bold uppercase tracking-widest rounded-lg hover:bg-pink-600 transition-all duration-300">
                            ${translationsData[lang]['events.register_button']}
                        </button>`}
                        <a href="${getTranslatedUrl('event.html')}?id=${event.id}" class="flex-1 text-center py-3 border border-gray-200 text-gray-700 text-sm font-bold uppercase tracking-widest rounded-lg hover:bg-gray-50 transition-all">
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
    const url = `${window.location.origin}${window.location.pathname.replace(/\/[^\/]*$/, '')}/${getTranslatedUrl('event.html')}?id=${id}`;

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

// --- Event Registration Modal Logic ---

function initEventModal() {
    // Inject modal HTML into body
    const modalHtml = `
        <div id="event-registration-modal" class="fixed inset-0 z-[100] hidden items-center justify-center bg-black/60 backdrop-blur-sm opacity-0 transition-opacity duration-300">
            <div class="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl p-8 transform scale-95 transition-transform duration-300 mx-4" id="event-modal-content">
                <button onclick="closeEventModal()" class="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-900 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>
                
                <h2 class="text-2xl font-medium mb-2 text-gray-900"><span data-i18n="events.modal.title">Register for</span></h2>
                <h3 id="event-modal-target-title" class="text-xl text-pink-600 font-semibold mb-6">Event Title</h3>
                
                <div id="event-modal-success" class="hidden text-center py-8">
                    <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-500 mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </div>
                    <h3 class="text-xl font-medium text-gray-900 mb-2" data-i18n="events.modal.success">Thank you! We will contact you soon.</h3>
                    <button onclick="closeEventModal()" class="mt-6 px-6 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors" data-i18n="events.modal.close">Close</button>
                </div>

                <form id="event-registration-form" onsubmit="submitEventRegistration(event)" class="space-y-4">
                    <input type="hidden" id="event-modal-id" name="eventId" value="">
                    <input type="hidden" id="event-modal-title-input" name="eventTitle" value="">
                    
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1" data-i18n="events.modal.name_label">Full Name *</label>
                        <input type="text" id="event-reg-name" required class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all">
                    </div>
                    
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1" data-i18n="events.modal.email_label">Email Address (Optional)</label>
                        <input type="email" id="event-reg-email" class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all">
                    </div>
                    
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1" data-i18n="events.modal.phone_label">Phone Number</label>
                        <input type="tel" id="event-reg-phone" class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all">
                    </div>
                    
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1" data-i18n="events.modal.message_label">Additional Information / Questions</label>
                        <textarea id="event-reg-message" rows="3" class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all resize-none"></textarea>
                    </div>
                    
                    <button type="submit" id="event-reg-submit-btn" class="w-full py-4 mt-6 bg-pink-600 text-white font-bold uppercase tracking-widest rounded-xl hover:bg-pink-700 transition-all shadow-md flex justify-center items-center gap-2">
                        <span data-i18n="events.modal.submit">Send Registration</span>
                    </button>
                </form>
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHtml);

    // Setup click outside to close
    const modal = document.getElementById('event-registration-modal');
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeEventModal();
        }
    });
}

function openEventModal(eventId, encodedEventTitle) {
    const title = decodeURIComponent(encodedEventTitle);

    document.getElementById('event-modal-id').value = eventId;
    document.getElementById('event-modal-title-input').value = title;
    document.getElementById('event-modal-target-title').textContent = title;

    // Reset form state
    document.getElementById('event-registration-form').reset();
    document.getElementById('event-registration-form').classList.remove('hidden');
    document.getElementById('event-modal-success').classList.add('hidden');

    // Update translations
    const lang = typeof currentLanguage !== 'undefined' ? currentLanguage : 'en';
    updateUI(lang);

    const modal = document.getElementById('event-registration-modal');
    const content = document.getElementById('event-modal-content');

    modal.classList.remove('hidden');
    modal.classList.add('flex');

    // Small delay for transition
    setTimeout(() => {
        modal.classList.remove('opacity-0');
        content.classList.remove('scale-95');
    }, 10);
}

function closeEventModal() {
    const modal = document.getElementById('event-registration-modal');
    const content = document.getElementById('event-modal-content');

    modal.classList.add('opacity-0');
    content.classList.add('scale-95');

    setTimeout(() => {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
    }, 300);
}

async function submitEventRegistration(e) {
    e.preventDefault();

    const submitBtn = document.getElementById('event-reg-submit-btn');
    const originalBtnHtml = submitBtn.innerHTML;
    submitBtn.innerHTML = '<svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> Sending...';
    submitBtn.disabled = true;

    const eventId = document.getElementById('event-modal-id').value;
    const eventTitle = document.getElementById('event-modal-title-input').value;
    const name = document.getElementById('event-reg-name').value;
    const email = document.getElementById('event-reg-email').value;
    const phone = document.getElementById('event-reg-phone').value;
    const message = document.getElementById('event-reg-message').value;

    const payload = {
        eventId,
        eventTitle,
        name,
        email,
        phone,
        message,
        sourceUrl: window.location.href,
        language: typeof currentLanguage !== 'undefined' ? currentLanguage : 'en'
    };

    try {
        const response = await fetch('/api/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Show success state
        document.getElementById('event-registration-form').classList.add('hidden');
        document.getElementById('event-modal-success').classList.remove('hidden');
    } catch (error) {
        console.error("Error submitting registration:", error);
        alert("There was an error sending your registration. Please try again or email us directly at info@goyoga.ee");
    } finally {
        submitBtn.innerHTML = originalBtnHtml;
        submitBtn.disabled = false;
    }
}

// --- Corporate Inquiry Modal Logic ---

function openCorporateModal() {
    const modal = document.getElementById('corporate-inquiry-modal');
    const content = document.getElementById('corporate-modal-content');

    if (!modal || !content) return;

    // Reset form state
    const form = document.getElementById('corporate-inquiry-form');
    if (form) form.reset();
    if (form) form.classList.remove('hidden');
    const success = document.getElementById('corporate-modal-success');
    if (success) success.classList.add('hidden');

    modal.classList.remove('hidden');
    modal.classList.add('flex');

    // Setup click outside to close
    if (!modal.dataset.listenerAdded) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeCorporateModal();
            }
        });
        modal.dataset.listenerAdded = 'true';
    }

    setTimeout(() => {
        modal.classList.remove('opacity-0');
        content.classList.remove('scale-95');
    }, 10);
}

function closeCorporateModal() {
    const modal = document.getElementById('corporate-inquiry-modal');
    const content = document.getElementById('corporate-modal-content');

    if (!modal || !content) return;

    modal.classList.add('opacity-0');
    content.classList.add('scale-95');

    setTimeout(() => {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
    }, 300);
}

async function submitCorporateInquiry(e) {
    e.preventDefault();

    const submitBtn = document.getElementById('corp-submit-btn');
    const originalBtnHtml = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i data-lucide="loader-2" class="h-5 w-5 animate-spin mx-auto"></i> Sending...';
    if (window.lucide) window.lucide.createIcons();
    submitBtn.disabled = true;

    const company = document.getElementById('corp-company').value;
    const name = document.getElementById('corp-name').value;
    const email = document.getElementById('corp-email').value;
    const phone = document.getElementById('corp-phone').value;
    const interest = document.getElementById('corp-interest').value;
    const message = document.getElementById('corp-message').value;

    const payload = {
        formType: 'corporate',
        company,
        name,
        email,
        phone,
        interest,
        message,
        sourceUrl: window.location.href,
        language: typeof currentLanguage !== 'undefined' ? currentLanguage : (localStorage.getItem('goyoga_lang') || 'et')
    };

    try {
        const response = await fetch('/api/submit', {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: { 'Content-Type': 'application/json' }
        });

        const result = await response.json();
        if (!response.ok || !result.success) throw new Error(result.error || 'Failed to submit');

        document.getElementById('corporate-inquiry-form').classList.add('hidden');
        document.getElementById('corporate-modal-success').classList.remove('hidden');
    } catch (error) {
        console.error("Error submitting inquiry:", error);
        alert("Päringu saatmisel tekkis viga. Palun proovi uuesti või kirjuta meile info@goyoga.ee");
    } finally {
        submitBtn.innerHTML = originalBtnHtml;
        submitBtn.disabled = false;
        if (window.lucide) window.lucide.createIcons();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    initEventModal();
});
