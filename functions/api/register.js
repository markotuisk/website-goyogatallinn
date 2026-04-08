export async function onRequestPost(context) {
    try {
        const { request, env } = context;
        const data = await request.json();

        // Dedicated Discord Webhook for Events
        const DISCORD_WEBHOOK = env.DISCORD_EVENTS_WEBHOOK || "https://discord.com/api/webhooks/1478929947123777739/nQSJDyZvJPtfX0ZYg7tWR6mn2iZd2IsVXzwJN-sIVgU7pHAOiNQAP68BZHbxDlwFvQ1J";

        const discordPayload = {
            embeds: [{
                title: "📣 New Event Registration",
                color: 15277667, // Hex #E91E63 (Pink)
                fields: [
                    { name: "Event", value: data.eventTitle || "Unknown Event", inline: false },
                    { name: "Name", value: data.name || "N/A", inline: true },
                    { name: "Email", value: data.email || "N/A", inline: true },
                    { name: "Phone", value: data.phone || "Not provided", inline: true },
                    { name: "Message", value: data.message || "No message provided", inline: false },
                    { name: "Metadata", value: `**Event ID:** ${data.eventId || "N/A"}\n**Source:** ${data.sourceUrl || "N/A"}\n**Language:** ${data.language || "en"}`, inline: false }
                ],
                footer: {
                    text: "Goyoga Tallinn Website",
                },
                timestamp: new Date().toISOString()
            }]
        };

        // 1. Log to Discord
        await fetch(DISCORD_WEBHOOK, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(discordPayload)
        });

        // 2. Prepare Localized, Warm Email Copy
        const lang = data.language || 'en';
        
        const translations = {
            en: {
                subject: `Event Registration Confirmed - ${data.eventTitle}`,
                greeting: `Hi ${data.name},`,
                intro: `Thank you so much for your interest and for submitting your registration! We’re absolutely thrilled that you’d like to join us for our upcoming event.`,
                labelEvent: "Event",
                labelName: "Name",
                labelEmail: "Email",
                labelPhone: "Phone",
                outro: `We truly appreciate you taking the time to share your details with us. Our team will review your registration and follow up with you shortly via email with the next steps. We can't wait to see you on the mat!`,
                footerHelp: `Need help? Reply to this email or contact <a href="mailto:events@goyoga.ee" style="color: #db2777;">events@goyoga.ee</a>`
            },
            et: {
                subject: `Sündmusele registreerimine kinnitatud - ${data.eventTitle}`,
                greeting: `Tere ${data.name}!`,
                intro: `Suur aitäh huvi tundmast ja registreerumast! Oleme siiralt tänulikud ja rõõmsad, et soovid meie eelseisval sündmusel osaleda.`,
                labelEvent: "Sündmus",
                labelName: "Nimi",
                labelEmail: "Email",
                labelPhone: "Telefon",
                outro: `Hindame väga, et võtsid aega oma andmete jagamiseks. Vaatame Sinu registreeringu üle ning võtame peagi e-posti teel ühendust edasiste sammude osas. Ootame Sind põnevusega matil!`,
                footerHelp: `Soovid abi? Vasta sellele kirjale või võta ühendust aadressil <a href="mailto:events@goyoga.ee" style="color: #db2777;">events@goyoga.ee</a>`
            },
            fi: {
                subject: `Tapahtuman ilmoittautuminen vahvistettu - ${data.eventTitle}`,
                greeting: `Hei ${data.name},`,
                intro: `Lämmin kiitos mielenkiinnostasi ja ilmoittautumisestasi! Olemme todella iloisia, että haluat osallistua tulevaan tapahtumaamme.`,
                labelEvent: "Tapahtuma",
                labelName: "Nimi",
                labelEmail: "Sähköposti",
                labelPhone: "Puhelin",
                outro: `Arvostamme suuresti, että jaoit tietosi kanssamme. Tiimimme käy ilmoittautumisesi läpi ja olemme sinuun pian yhteydessä sähköpostitse seuraavista vaiheista. Odotamme innolla näkevämme sinut matolla!`,
                footerHelp: `Tarvitsetko apua? Vastaa tähän sähköpostiin tai ota yhteyttä <a href="mailto:events@goyoga.ee" style="color: #db2777;">events@goyoga.ee</a>`
            },
            ru: {
                subject: `Подтверждение регистрации на мероприятие - ${data.eventTitle}`,
                greeting: `Здравствуйте, ${data.name}!`,
                intro: `Огромное спасибо за проявленный интерес и регистрацию! Мы искренне рады, что вы хотите присоединиться к нашему предстоящему событию.`,
                labelEvent: "Событие",
                labelName: "Имя",
                labelEmail: "Email",
                labelPhone: "Телефон",
                outro: `Мы очень ценим, что вы уделили время и поделились своими данными. Наша команда рассмотрит вашу заявку, и мы вскоре свяжемся с вами по электронной почте для дальнейших шагов. С нетерпением ждем встречи с вами на коврике!`,
                footerHelp: `Нужна помощь? Ответьте на это письмо или свяжитесь с нами <a href="mailto:events@goyoga.ee" style="color: #db2777;">events@goyoga.ee</a>`
            }
        };

        const t = translations[lang] || translations['en'];

        const phoneRowHtml = data.phone ? `
            <div class="detail-row">
                <span class="detail-label">${t.labelPhone}</span>
                <span class="detail-value">${data.phone}</span>
            </div>` : '';

        const emailHtml = `
            <!DOCTYPE html>
            <html lang="${lang}">
            <head>
                <meta charset="UTF-8">
                <style>
                    body { font-family: sans-serif; line-height: 1.6; color: #374151; margin: 0; padding: 0; background-color: #f9fafb; }
                    .container { max-width: 600px; margin: 40px auto; background: white; border-radius: 16px; overflow: hidden; border: 1px solid #f3f4f6; }
                    .header { background: #db2777; padding: 40px 20px; text-align: center; color: white; }
                    .content { padding: 40px; }
                    .event-card { background: #fdf2f8; border: 1px solid #fce7f3; border-radius: 12px; padding: 24px; margin-bottom: 32px; }
                    .event-title { font-size: 18px; font-weight: bold; color: #111827; margin-bottom: 16px; }
                    .detail-row { display: flex; justify-content: space-between; border-bottom: 1px solid #fce7f3; padding: 12px 0; }
                    .detail-row:last-child { border-bottom: none; }
                    .detail-label { font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; color: #db2777; font-weight: bold; }
                    .detail-value { font-weight: 500; font-size: 14px; }
                    .footer { padding: 40px; background: #f9fafb; text-align: center; font-size: 11px; color: #9ca3af; }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="header"><h1>GOYOGA TALLINN</h1></div>
                    <div class="content">
                        <p style="font-size: 16px; font-weight: bold; margin-bottom: 16px;">${t.greeting}</p>
                        <p>${t.intro}</p>
                        
                        <div class="event-card">
                            <div class="detail-label">${t.labelEvent}</div>
                            <div class="event-title">${data.eventTitle}</div>
                            
                            <div class="detail-row">
                                <span class="detail-label">${t.labelName}</span>
                                <span class="detail-value">${data.name}</span>
                            </div>
                            <div class="detail-row">
                                <span class="detail-label">${t.labelEmail}</span>
                                <span class="detail-value">${data.email}</span>
                            </div>
                            ${phoneRowHtml}
                        </div>
            
                        <p>${t.outro}</p>
                    </div>
                    <div class="footer">
                        <p>GoYoga Tallinn | Narva mnt 7D, Tallinn</p>
                        <p>${t.footerHelp}</p>
                    </div>
                </div>
            </body>
            </html>
        `;

        // 3. Send email to customer and CC internal address via ZeptoMail
        const ZOHO_KEY = env.ZOHO_API_KEY || "Zoho-enczapikey yA6KbHsIvQn3yz5TQxJp0pCOoY9krf9vj3jksyHhe5d0e4GyiqFs3xVudNO/IDuJ3YHY46ICatNCdIHv6twKe5diZoVYKJTGTuv4P2uV48xh8ciEYNYhjJirA7IUFqVIeRotCSw1Q/MoWA==";

        try {
            const toRecipients = [
                { "email_address": { "address": "info@goyoga.ee", "name": "Studio Inquiries" } }
            ];

            if (data.email) {
                toRecipients.push({ "email_address": { "address": data.email, "name": data.name } });
            }

            await fetch("https://api.zeptomail.com/v1.1/email", {
                method: "POST",
                headers: {
                    "accept": "application/json",
                    "content-type": "application/json",
                    "authorization": ZOHO_KEY
                },
                body: JSON.stringify({
                    "from": { "address": "online.services@goyoga-billing.cc", "name": "Goyoga Events" },
                    "to": toRecipients,
                    "subject": t.subject,
                    "htmlbody": emailHtml
                })
            });
        } catch (e) {
            console.error("ZeptoMail Error:", e);
            // Non-fatal error, we still want to tell the user success since discord worked
        }

        return new Response(JSON.stringify({ success: true }), {
            status: 200,
            headers: { "Content-Type": "application/json" }
        });

    } catch (error) {
        return new Response(JSON.stringify({ success: false, error: error.message }), {
            status: 500,
            headers: { "Content-Type": "application/json" }
        });
    }
}
