/**
 * card-page.js
 * Handles dynamic content and UI for the digital business card.
 */

document.addEventListener('DOMContentLoaded', () => {
    if (window.lucide) window.lucide.createIcons();
    initCard();
});

function initCard() {
    const urlParams = new URLSearchParams(window.location.search);
    const teacherId = urlParams.get('id');
    
    // Support either clean URLs (/en/card/raili) or query params or .html files
    const pathParts = window.location.pathname.split('/');
    let slugFromPath = pathParts[pathParts.length - 1];
    if (slugFromPath.endsWith('.html')) {
        slugFromPath = slugFromPath.replace('.html', '');
    }
    
    const id = teacherId || slugFromPath;
    
    if (!id || !window.teachersData?.[id]) {
        console.error('Teacher ID not found for card:', id);
        return;
    }

    const data = window.teachersData[id];
    renderCardData(id, data);
    setupInteractions(id, data);
}

function renderCardData(id, data) {
    // Basic Info
    const nameEl = document.getElementById('teacher-name');
    if (nameEl) nameEl.textContent = data.name;

    const roleEl = document.getElementById('teacher-role');
    if (roleEl) roleEl.textContent = data.title;

    const imageEl = document.getElementById('teacher-image');
    if (imageEl) {
        imageEl.src = data.image;
        imageEl.alt = data.name;
    }

    // Detailed Values
    const email = data.socials?.email || "info@goyoga.ee";
    const phone = data.socials?.phone || "+372 513 2433";
    const website = data.socials?.website || "";
    const instagram = data.socials?.instagram || "";

    // Email
    const emailVal = document.getElementById('val-email');
    const emailItem = document.getElementById('item-email');
    if (emailVal) emailVal.textContent = email;
    if (emailItem) emailItem.href = `mailto:${email}`;

    // Phone
    const phoneVal = document.getElementById('val-phone');
    const phoneItem = document.getElementById('item-phone');
    if (phoneVal) phoneVal.textContent = phone;
    if (phoneItem) phoneItem.href = `tel:${phone.replace(/\s+/g, '')}`;

    // Website
    const webVal = document.getElementById('val-website');
    const webItem = document.getElementById('item-website');
    if (webVal && website) {
        webVal.textContent = website.replace(/^https?:\/\//, '').replace(/\/$/, '');
        webItem.href = website;
    } else if (webItem) {
        webItem.style.display = 'none';
    }

    // Instagram
    const instaVal = document.getElementById('val-instagram');
    const instaItem = document.getElementById('item-instagram');
    if (instaVal && instagram && instagram !== '#') {
        const handle = instagram.split('/').filter(Boolean).pop() || "Instagram";
        instaVal.textContent = handle.startsWith('@') ? handle : `@${handle}`;
        instaItem.href = instagram;
    } else if (instaItem) {
        instaItem.style.display = 'none';
    }

    // QR Code Generation
    const qrImg = document.getElementById('qr-code-img');
    if (qrImg) {
        const currentUrl = window.location.href;
        // Using qrserver.com as it's more robust against ORB/CORS blocking than Google Charts
        qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(currentUrl)}`;
    }

    // Profile Link (Localized)
    const lang = window.location.pathname.split('/')[1] || 'en';
    const profileLink = document.getElementById('teacher-profile-link');
    if (profileLink) {
        profileLink.href = `/${lang}/teacher?id=${id}`;
    }
}

function setupInteractions(id, data) {
    // Save Contact
    const saveBtn = document.getElementById('save-contact-btn');
    if (saveBtn) {
        saveBtn.addEventListener('click', () => {
            if (window.downloadVCard) {
                window.downloadVCard(id, data);
            }
        });
    }
}
