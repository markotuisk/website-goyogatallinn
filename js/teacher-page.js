/**
 * teacher-page.js
 * Handles dynamic content loading for the teacher detail page.
 */

document.addEventListener('DOMContentLoaded', () => {
    console.log('Teacher page DOM loaded');
    initTeacherPage();

    // Re-render when language changes
    document.addEventListener('languageChanged', (e) => {
        const lang = e.detail;
        console.log('Language changed:', lang);
        const urlParams = new URLSearchParams(window.location.search);
        const teacherId = urlParams.get('id');
        if (teacherId) {
            renderTeacherData(teacherId, lang);
            updateTeacherSEO(teacherId, lang);
        }
    });
});

function initTeacherPage() {
    const urlParams = new URLSearchParams(window.location.search);
    const teacherId = urlParams.get('id');
    console.log('Teacher ID:', teacherId);

    if (!teacherId || (!window.teachersDetailData?.[teacherId] && !window.teachersData?.[teacherId])) {
        console.error('Teacher not found:', teacherId);
        // window.location.href = 'index.html#teachers';
        return;
    }

    const lang = typeof currentLanguage !== 'undefined' ? currentLanguage : 'en';
    console.log('Rendering for language:', lang);
    renderTeacherData(teacherId, lang);
    updateTeacherSEO(teacherId, lang);
}

function renderTeacherData(id, lang) {
    const detail = window.teachersDetailData?.[id]?.[lang] || window.teachersDetailData?.[id]?.['en'];
    const basic = window.teachersData?.[id];

    console.log('Detail data:', detail);
    console.log('Basic data:', basic);

    if (!detail && !basic) return;

    const name = detail?.name || basic?.name || 'Teacher';
    const role = detail?.role || basic?.title || '';
    const quote = detail?.quote || '';
    const bio = detail?.bio || basic?.description || '';
    const philosophy = detail?.philosophy || '';
    const highlights = detail?.highlights || [];
    const image = basic?.image || 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b';
    const socials = basic?.socials || {};

    const nameEl = document.getElementById('teacher-name');
    if (nameEl) nameEl.textContent = name;

    const roleEl = document.getElementById('teacher-role');
    if (roleEl) {
        roleEl.textContent = role;
    }

    // Add Languages
    const languages = basic?.languages || [];
    const langContainer = document.getElementById('teacher-languages-container');
    const langFlags = document.getElementById('teacher-languages-flags');

    if (languages.length > 0 && langContainer && langFlags) {
        const flagUrls = { 'en': 'https://flagcdn.com/w20/gb.png', 'et': 'https://flagcdn.com/w20/ee.png', 'fi': 'https://flagcdn.com/w20/fi.png' };
        langFlags.innerHTML = languages.map(lang => {
            const url = flagUrls[lang] || ('https://flagcdn.com/w20/' + lang + '.png');
            return `<img src="${url}" class="w-6 h-6 rounded-full object-cover shadow-sm opacity-90 transition-transform hover:scale-110 hover:opacity-100" title="${lang.toUpperCase()}" alt="${lang.toUpperCase()}">`;
        }).join('');
        langContainer.classList.remove('hidden');
    } else if (langContainer) {
        langContainer.classList.add('hidden');
    }

    const quoteEl = document.getElementById('teacher-quote');
    if (quoteEl) quoteEl.textContent = quote ? `"${quote}"` : '';

    const imageEl = document.getElementById('teacher-image');
    if (imageEl) {
        imageEl.src = image;
        
        let optimizedAlt = name;
        if (role) {
            optimizedAlt += ` - ${role} | Goyoga Estonia Tallinn`;
        } else {
            optimizedAlt += ` | Goyoga Estonia Tallinn`;
        }
        imageEl.alt = optimizedAlt;
        imageEl.title = optimizedAlt;

        // Custom Image Positioning from data.js
        if (basic && basic.profilePosition) {
            imageEl.style.objectPosition = basic.profilePosition;
        } else {
            imageEl.style.objectPosition = 'center center'; // Default
        }
    }

    const bioEl = document.getElementById('teacher-bio');
    if (bioEl) {
        if (Array.isArray(bio)) {
            bioEl.innerHTML = bio.map(p => `<p>${p}</p>`).join('');
        } else {
            bioEl.innerHTML = bio.split('\n').map(p => `<p>${p}</p>`).join('');
        }
    }

    const philosophyEl = document.getElementById('teacher-philosophy');
    if (philosophyEl) philosophyEl.textContent = philosophy;

    const highlightsEl = document.getElementById('teacher-highlights');
    if (highlightsEl) {
        highlightsEl.innerHTML = highlights.map(h => `
            <li class="flex items-start">
                <i data-lucide="check-circle" class="h-5 w-5 text-gray-800 mr-3 mt-0.5"></i>
                <span class="text-gray-600">${h}</span>
            </li>
        `).join('');
        if (window.lucide) window.lucide.createIcons();
    }

    // Update Social Links
    const instagramEl = document.getElementById('social-instagram');
    if (instagramEl && socials.instagram && socials.instagram !== '#') {
        instagramEl.href = socials.instagram;
        instagramEl.classList.remove('hidden');
    } else if (instagramEl) {
        instagramEl.classList.add('hidden');
    }

    const facebookEl = document.getElementById('social-facebook');
    if (facebookEl && socials.facebook && socials.facebook !== '#') {
        facebookEl.href = socials.facebook;
        facebookEl.classList.remove('hidden');
    } else if (facebookEl) {
        facebookEl.classList.add('hidden');
    }

    const instagram2El = document.getElementById('social-instagram2');
    if (instagram2El && socials.instagram2 && socials.instagram2 !== '#') {
        instagram2El.href = socials.instagram2;
        instagram2El.classList.remove('hidden');
    } else if (instagram2El) {
        instagram2El.classList.add('hidden');
    }

    const tiktokEl = document.getElementById('social-tiktok');
    if (tiktokEl && socials.tiktok && socials.tiktok !== '#') {
        tiktokEl.href = socials.tiktok;
        tiktokEl.classList.remove('hidden');
    } else if (tiktokEl) {
        tiktokEl.classList.add('hidden');
    }

    const yogaAllianceEl = document.getElementById('social-yogaalliance');
    if (yogaAllianceEl && socials.yogaalliance && socials.yogaalliance !== '#') {
        yogaAllianceEl.href = socials.yogaalliance;
        yogaAllianceEl.classList.remove('hidden');
    } else if (yogaAllianceEl) {
        yogaAllianceEl.classList.add('hidden');
    }

    const websiteEl = document.getElementById('social-website');
    if (websiteEl && socials.website && socials.website !== '#') {
        websiteEl.href = socials.website;
        websiteEl.title = socials.website.includes('casarituals') ? 'Casa Rituals Schedule' : 'Visit Website';
        websiteEl.classList.remove('hidden');
    } else if (websiteEl) {
        websiteEl.classList.add('hidden');
    }

    const emailEl = document.getElementById('social-email');
    if (emailEl) {
        const enquirySubject = encodeURIComponent(`Enquiry for ${name}`);
        emailEl.href = `mailto:info@goyoga.ee?subject=${enquirySubject}`;
        emailEl.classList.remove('hidden');
    }

    // Digital Card Button Link
    const digitalCardBtn = document.getElementById('digital-card-btn');
    if (digitalCardBtn) {
        // Find localized card slug
        let cardBaseSlug = 'card';
        if (window.seoData?.urlRoutes?.[lang]?.['card.html']) {
            cardBaseSlug = window.seoData.urlRoutes[lang]['card.html'].replace('.html', '');
        }
        digitalCardBtn.href = `/${lang}/${cardBaseSlug}/${id}`;
    }

    // Testimonials Section
    const testimonialsSection = document.getElementById('teacher-testimonials-section');
    const testimonialsGrid = document.getElementById('teacher-testimonials-grid');
    const testimonialsName = document.getElementById('testimonials-teacher-name');
    const testimonials = detail?.testimonials || [];

    if (testimonialsSection && testimonialsGrid) {
        if (testimonials.length > 0) {
            if (testimonialsName) testimonialsName.textContent = name;
            testimonialsGrid.innerHTML = testimonials.map(t => `
                <div class="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <div class="flex items-center mb-3">
                        <i data-lucide="quote" class="h-5 w-5 text-pink-400 mr-2"></i>
                        <h3 class="font-semibold text-gray-800">${t.title}</h3>
                    </div>
                    <p class="text-gray-600 leading-relaxed">${t.text}</p>
                </div>
            `).join('');
            testimonialsSection.classList.remove('hidden');
            if (window.lucide) window.lucide.createIcons();
        } else {
            testimonialsSection.classList.add('hidden');
        }
    }

    // Gallery Section
    const gallerySection = document.getElementById('teacher-gallery-section');
    const galleryGrid = document.getElementById('teacher-gallery-grid');
    const gallery = basic?.gallery || [];

    if (gallerySection && galleryGrid) {
        if (gallery.length > 0) {
            galleryGrid.innerHTML = gallery.map(imgUrl => `
                <div class="aspect-square bg-gray-200 rounded-xl overflow-hidden shadow-sm">
                    <img src="${imgUrl}" alt="Gallery Moment"
                        class="w-full h-full object-cover hover:scale-110 transition-transform duration-500" loading="lazy" title="Gallery Moment">
                </div>
            `).join('');
            gallerySection.classList.remove('hidden');
        } else {
            gallerySection.classList.add('hidden');
        }
    }

    // Update Private Booking Email Subject
    const bookPrivateBtn = document.getElementById('book-private-btn');
    if (bookPrivateBtn) {
        const subject = encodeURIComponent(`Private Class Enquiry for ${name}`);
        bookPrivateBtn.href = `mailto:info@goyoga.ee?subject=${subject}`;
    }

    // Custom Backgrounds for Specific Teachers
    const heroSection = document.getElementById('teacher-hero-section');
    if (heroSection) {
        // Reset classes first
        heroSection.className = 'relative py-20 overflow-hidden transition-all duration-700';

        if (id === 'dian-jarvenkyla') {
            // Unique vibrant, warm background for Dian
            heroSection.classList.add('bg-gradient-to-br', 'from-amber-50', 'via-rose-50', 'to-teal-50');
        } else {
            // Default logic if any
        }
    }
}

function updateTeacherSEO(id, lang) {
    if (typeof seoData === 'undefined' || !seoData.meta.teachers) return;

    const detail = teachersDetailData[id] ? (teachersDetailData[id][lang] || teachersDetailData[id]['en']) : null;
    const basic = teachersData[id];

    const name = detail ? detail.name : (basic ? basic.name : 'Teacher');
    const role = detail ? detail.role : (basic ? basic.title : '');

    const t = seoData.meta.teachers[lang] || seoData.meta.teachers['en'];

    const title = t.title.replace('{name}', name).replace('{role}', role);
    const description = t.description.replace('{name}', name).replace('{role}', role);
    const keywords = t.keywords.replace('{name}', name).replace('{role}', role);

    document.title = title;

    const titleEl = document.getElementById('seo-title');
    if (titleEl) titleEl.textContent = title;

    const descEl = document.getElementById('seo-description');
    if (descEl) descEl.setAttribute('content', description);

    const keyEl = document.getElementById('seo-keywords');
    if (keyEl) keyEl.setAttribute('content', keywords);

    // OG Tags
    const ogTitle = document.getElementById('og-title');
    if (ogTitle) ogTitle.setAttribute('content', title);

    const ogDesc = document.getElementById('og-description');
    if (ogDesc) ogDesc.setAttribute('content', description);

    const ogImg = document.getElementById('og-image');
    if (ogImg && basic) ogImg.setAttribute('content', basic.image);

    // --- Inject per-teacher Person JSON-LD for Google Knowledge Panel ---
    const teacherUrl = `https://www.goyoga.ee/teacher.html?id=${teacherId}`;
    const langMap = { en: 'English', et: 'Estonian', fi: 'Finnish', es: 'Spanish', id: 'Indonesian' };
    const knowsLangs = (basic?.languages || ['en', 'et']).map(l => langMap[l] || l);

    const personSchema = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": name,
        "jobTitle": role,
        "url": teacherUrl,
        "worksFor": {
            "@type": "Organization",
            "name": "Goyoga Tallinn",
            "url": "https://www.goyoga.ee"
        },
        "affiliation": {
            "@type": "Organization",
            "name": "Goyoga Tallinn",
            "url": "https://www.goyoga.ee"
        },
        "nationality": { "@type": "Country", "name": "Estonia" },
        "knowsLanguage": knowsLangs,
        "knowsAbout": [role, "Yoga", "Wellness", "Tallinn", "Estonia"].filter(Boolean)
    };
    if (basic?.image) personSchema.image = `https://www.goyoga.ee${basic.image}`;
    if (basic?.socials) {
        const sameAs = Object.values(basic.socials).filter(v => typeof v === 'string' && v.startsWith('http'));
        if (sameAs.length) personSchema.sameAs = sameAs;
    }
    // Remove old person schema if re-rendered
    document.querySelectorAll('script[data-teacher-schema]').forEach(el => el.remove());
    const ldScript = document.createElement('script');
    ldScript.type = 'application/ld+json';
    ldScript.setAttribute('data-teacher-schema', teacherId);
    ldScript.textContent = JSON.stringify(personSchema, null, 2);
    document.head.appendChild(ldScript);
}
