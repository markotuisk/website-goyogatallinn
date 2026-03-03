export async function onRequestPost(context) {
    try {
        const request = context.request;
        const formData = await request.formData();

        // Extract all fields
        const data = {};
        for (const [key, value] of formData.entries()) {
            data[key] = value;
        }

        const formType = data.formType;

        // Webhook URLs
        const CONTACT_WEBHOOK = "https://discordapp.com/api/webhooks/1478382833251913821/KT2rKdgAndFhmGFdSrasbhUI1Ada49UVIa7kLB2ONlOg08f3HSXMk9SjHJ3pAu6Aox-G";
        const RENTAL_WEBHOOK = "https://discordapp.com/api/webhooks/1478391522608021616/3oztpgixDr44j82VUPv1o_DB0KaJjGyXwzifZwkesIYifdrkjjZeg7MekoX-x6x4YZ98";
        const SUBSCRIBER_WEBHOOK = "https://discordapp.com/api/webhooks/1478381693671833642/1fRLqmsHRFYVnUlTGHGa_q04lo4U9nLsF4jNuGxzq5qhk__l_Atl-bnRM_KDyvypyPQw";

        let webhookUrl = CONTACT_WEBHOOK;
        let discordPayload = {};

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

        // Send to Discord
        const discordResponse = await fetch(webhookUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(discordPayload)
        });

        if (!discordResponse.ok) {
            throw new Error(`Discord API responded with ${discordResponse.status}`);
        }

        return new Response(JSON.stringify({ success: true, message: "Message sent successfully" }), {
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
