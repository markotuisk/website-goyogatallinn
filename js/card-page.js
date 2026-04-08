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
    
    // Support either clean URLs (/en/card/raili) or query params
    const pathParts = window.location.pathname.split('/');
    const slugFromPath = pathParts[pathParts.length - 1];
    
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

    // Social & Contact Buttons
    const emailBtn = document.getElementById('btn-email');
    if (emailBtn) {
        const email = data.socials?.email || 'info@goyoga.ee';
        emailBtn.href = `mailto:${email}?subject=Enquiry from Digital Card`;
    }

    const phoneBtn = document.getElementById('btn-phone');
    if (phoneBtn) {
        const phone = data.socials?.phone || '+3725132433';
        phoneBtn.href = `tel:${phone.replace(/\s+/g, '')}`;
    }

    const instagramBtn = document.getElementById('btn-instagram');
    if (instagramBtn) {
        if (data.socials?.instagram && data.socials.instagram !== '#') {
            instagramBtn.href = data.socials.instagram;
        } else {
            instagramBtn.classList.add('opacity-30', 'pointer-events-none');
        }
    }

    // Profile Link
    const profileLink = document.getElementById('teacher-profile-link');
    if (profileLink) {
        profileLink.href = `/teacher.html?id=${id}`;
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

    // QR Share
    const shareBtn = document.getElementById('share-card-btn');
    const qrOverlay = document.getElementById('qr-overlay');
    const closeQrBtn = document.getElementById('close-qr-btn');
    const qrImg = document.getElementById('qr-code-img');

    if (shareBtn && qrOverlay && qrImg) {
        shareBtn.addEventListener('click', () => {
            // Generate QR Code via Google Chart API
            const currentUrl = window.location.href;
            const qrUrl = `https://chart.googleapis.com/chart?cht=qr&chs=400x400&chl=${encodeURIComponent(currentUrl)}&choe=UTF-8&chld=L|1`;
            qrImg.src = qrUrl;
            
            qrOverlay.style.display = 'flex';
            qrOverlay.classList.add('fade-in');
        });

        closeQrBtn.addEventListener('click', () => {
            qrOverlay.style.display = 'none';
        });

        // Close on backdrop click
        qrOverlay.addEventListener('click', (e) => {
            if (e.target === qrOverlay) {
                qrOverlay.style.display = 'none';
            }
        });
    }
}
