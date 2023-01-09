import { request } from "express";

exports.createMessageTemplate = async (req, res) => {
    exports.createMessageTemplate = async (req, res) => {
        const { name, language, category, components } = req.body;
        if (!name || !language || !category || !components) {
            return res.status(400).json({
                error: "Required Fields: name, language, category, and components",
            });
        }
        request.post(
            {
                url: `https://graph.facebook.com/v13.0/${process.env.META_BUSINESS_ID}/message_templates`,
                headers: {
                    Authorization: `Bearer ${process.env.META_AUTH_TOKEN}`,
                    "content-type": "application/json",
                },
                body: JSON.stringify({
                    name: name,
                    language: language,
                    category: category,
                    components: components,
                }),
            },
            function (err, resp, body) {
                if (err) {
                    console.log("Error!");
                } else {
                    res.json(JSON.parse(body));
                }
            }
        );
    }
}
