/**
 * card-vcard.js
 * Generates and downloads a .vcf (vCard) file for a teacher.
 */

async function downloadVCard(teacherId, data) {
    if (!data) return;

    const name = data.name || 'Yoga Teacher';
    const title = data.title || 'Teacher';
    const org = 'Goyoga Tallinn';
    const email = data.socials?.email || 'info@goyoga.ee';
    const phone = data.socials?.phone || '+372 513 2433';
    const mobile = data.socials?.mobile || '';
    const website = data.socials?.website || 'https://www.goyoga.ee';
    const instagram = data.socials?.instagram || '';
    
    // Split name into First and Last if possible
    const nameParts = name.split(' ');
    const firstName = nameParts[0] || '';
    const lastName = nameParts.slice(1).join(' ') || '';

    // Convert Image to Base64
    let photoBase64 = "";
    if (data.image) {
        photoBase64 = await imageToBase64(data.image);
    }

    // vCard content construction
    let vcard = [
        "BEGIN:VCARD",
        "VERSION:3.0",
        `N:${lastName};${firstName};;;`,
        `FN:${name}`,
        `ORG:${org}`,
        `TITLE:${title}`,
        `TEL;TYPE=WORK,VOICE:${phone}`,
    ];

    if (mobile) {
        vcard.push(`TEL;TYPE=CELL,VOICE:${mobile}`);
    }

    vcard.push(`EMAIL;TYPE=PREF,INTERNET:${email}`);
    vcard.push(`URL:${website}`);

    if (instagram) {
        vcard.push(`X-SOCIALPROFILE;TYPE=instagram:${instagram}`);
    }

    if (photoBase64) {
        vcard.push(`PHOTO;ENCODING=b;TYPE=JPEG:${photoBase64}`);
    }

    // Add studio address
    vcard.push("ADR;TYPE=WORK,PREF:;;Narva mnt 7D;Tallinn;;10117;Estonia");
    
    vcard.push("END:VCARD");

    const vcardString = vcard.join("\r\n");
    const blob = new Blob([vcardString], { type: "text/vcard;charset=utf-8" });
    const url = window.URL.createObjectURL(blob);
    
    // Trigger download
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `${name.replace(/\s+/g, '_')}_Goyoga.vcf`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    window.URL.revokeObjectURL(url);
}

/**
 * Helper to convert image to base64
 */
async function imageToBase64(url) {
    try {
        const response = await fetch(url);
        const blob = await response.blob();
        return new Promise((resolve) => {
            const reader = new FileReader();
            reader.onloadend = () => {
                // Return just the base64 part
                resolve(reader.result.split(',')[1]);
            };
            reader.readAsDataURL(blob);
        });
    } catch (e) {
        console.error("Could not convert image to base64", e);
        return null;
    }
}

window.downloadVCard = downloadVCard;
