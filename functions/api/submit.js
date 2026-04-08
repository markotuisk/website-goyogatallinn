export async function onRequestPost(context) {
    try {
        const { request, env } = context;
        let data = {};
        
        const contentType = request.headers.get("content-type") || "";
        if (contentType.includes("application/json")) {
            data = await request.json();
        } else {
            const formData = await request.formData();
            for (const [key, value] of formData.entries()) {
                data[key] = value;
            }
        }

        const formType = data.formType;

        // Webhook URLs
        const CONTACT_WEBHOOK = "https://discordapp.com/api/webhooks/1478382833251913821/KT2rKdgAndFhmGFdSrasbhUI1Ada49UVIa7kLB2ONlOg08f3HSXMk9SjHJ3pAu6Aox-G";
        const RENTAL_WEBHOOK = "https://discordapp.com/api/webhooks/1478391522608021616/3oztpgixDr44j82VUPv1o_DB0KaJjGyXwzifZwkesIYifdrkjjZeg7MekoX-x6x4YZ98";
        const SUBSCRIBER_WEBHOOK = "https://discordapp.com/api/webhooks/1478381693671833642/1fRLqmsHRFYVnUlTGHGa_q04lo4U9nLsF4jNuGxzq5qhk__l_Atl-bnRM_KDyvypyPQw";

        let webhookUrl = CONTACT_WEBHOOK;
        let discordPayload = {};
        let sendEmail = false;

        // Format the message based on the form type
        if (formType === "newsletter") {
            webhookUrl = SUBSCRIBER_WEBHOOK;
            discordPayload = {
                embeds: [{
                    title: "📬 New Newsletter Subscriber!",
                    description: `**Email:** ${data.email}`,
                    color: 3066993, // Green
                    timestamp: new Date().toISOString()
                }]
            };
        } else if (formType === "rental") {
            webhookUrl = RENTAL_WEBHOOK;
            discordPayload = {
                embeds: [{
                    title: "🏢 New Studio Rental Inquiry",
                    color: 15158332, // Pink
                    fields: [
                        { name: "Name", value: data.name || "N/A", inline: true },
                        { name: "Email", value: data.email || "N/A", inline: true },
                        { name: "Event Details / Message", value: data.message || "N/A" }
                    ],
                    timestamp: new Date().toISOString()
                }]
            };
        } else if (formType === "corporate") {
            webhookUrl = CONTACT_WEBHOOK;
            discordPayload = {
                embeds: [{
                    title: "🏢 New Corporate Wellness Inquiry",
                    color: 15158332, // Pink (Brand Color)
                    fields: [
                        { name: "Company", value: data.company || "N/A", inline: true },
                        { name: "Contact Person", value: data.name || "N/A", inline: true },
                        { name: "Email", value: data.email || "N/A", inline: true },
                        { name: "Phone", value: data.phone || "N/A", inline: true },
                        { name: "Interest", value: data.interest || "N/A", inline: true },
                        { name: "Message", value: data.message || "N/A" }
                    ],
                    footer: { text: "Corporate Subsite Inquiry" },
                    timestamp: new Date().toISOString()
                }]
            };
            sendEmail = true;
        } else {
            // Default: General Contact
            webhookUrl = CONTACT_WEBHOOK;
            discordPayload = {
                embeds: [{
                    title: "✉️ New Contact Form Message",
                    color: 3447003, // Blue
                    fields: [
                        { name: "Name", value: data.name || "N/A", inline: true },
                        { name: "Email", value: data.email || "N/A", inline: true },
                        { name: "Message", value: data.message || "N/A" }
                    ],
                    timestamp: new Date().toISOString()
                }]
            };
        }

        // 1. Send to Discord
        await fetch(webhookUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(discordPayload)
        });

        // 2. Send Email if Corporate Inquiry (using ZeptoMail)
        if (sendEmail && data.email) {
            const ZOHO_KEY = env.ZOHO_API_KEY || "Zoho-enczapikey yA6KbHsIvQn3yz5TQxJp0pCOoY9krf9vj3jksyHhe5d0e4GyiqFs3xVudNO/IDuJ3YHY46ICatNCdIHv6twKe5diZoVYKJTGTuv4P2uV48xh8ciEYNYhjJirA7IUFqVIeRotCSw1Q/MoWA==";
            
            const emailHtml = `
                <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #eee; border-radius: 10px; overflow: hidden;">
                    <div style="background: #db2777; color: white; padding: 20px; text-align: center;">
                        <h1>New Corporate Inquiry</h1>
                    </div>
                    <div style="padding: 30px; line-height: 1.6; color: #333;">
                        <p>A new corporate wellness inquiry has been received from the website.</p>
                        <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr><td style="padding: 8px 0; font-weight: bold; width: 40%;">Company:</td><td>${data.company || 'N/A'}</td></tr>
                            <tr><td style="padding: 8px 0; font-weight: bold;">Contact Person:</td><td>${data.name || 'N/A'}</td></tr>
                            <tr><td style="padding: 8px 0; font-weight: bold;">Email:</td><td>${data.email || 'N/A'}</td></tr>
                            <tr><td style="padding: 8px 0; font-weight: bold;">Phone:</td><td>${data.phone || 'N/A'}</td></tr>
                            <tr><td style="padding: 8px 0; font-weight: bold;">Interested In:</td><td>${data.interest || 'N/A'}</td></tr>
                        </table>
                        <div style="margin-top: 20px; padding: 15px; background: #f9f9f9; border-radius: 5px;">
                            <strong>Message:</strong><br>
                            ${data.message || 'No additional message.'}
                        </div>
                    </div>
                    <div style="background: #f4f4f4; padding: 15px; text-align: center; font-size: 12px; color: #666;">
                        Goyoga Tallinn | Workplace Wellness Inquiry
                    </div>
                </div>
            `;

            try {
                await fetch("https://api.zeptomail.eu/v1.1/email", {
                    method: "POST",
                    headers: {
                        "accept": "application/json",
                        "content-type": "application/json",
                        "authorization": ZOHO_KEY
                    },
                    body: JSON.stringify({
                        "from": { "address": "online.services@goyoga-billing.cc", "name": "Goyoga Corporate" },
                        "to": [{ "email_address": { "address": "info@goyoga.ee", "name": "GoYoga Tallinn" } }],
                        "subject": `Corporate Wellness Inquiry: ${data.company || data.name}`,
                        "htmlbody": emailHtml
                    })
                });
            } catch (e) {
                console.error("ZeptoMail Error:", e);
            }
        }

        return new Response(JSON.stringify({ success: true, message: "Inquiry sent successfully" }), {
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
