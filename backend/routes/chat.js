const express = require('express');
const axios = require('axios');
const authenticate = require('../middleware/authMiddleware');
const { saveChat, getChatsByUser } = require('../models/chat');
require('dotenv').config();

const router = express.Router();

// Get chat history
router.get('/history', authenticate, async (req, res) => {
    const chats = await getChatsByUser(req.user.id);
    res.json(chats);
});

// Chat endpoint
router.post('/', authenticate, async (req, res) => {
    const { message } = req.body;
    if (!message) {
        return res.status(400).json({ error: "Message is required." });
    }

    try {
        const openaiRes = await axios.post(
            'https://api.openai.com/v1/chat/completions',
            {
                model: "gpt-3.5-turbo",
                messages: [{ role: "user", content: message }],
                max_tokens: 150
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
                }
            }
        );

        const botResponse = openaiRes.data.choices[0].message.content;
        await saveChat(req.user.id, message, botResponse);

        res.json({ botResponse });
    } catch (error) {
        console.error("Chat error:", error.message);
        res.status(500).json({ error: "Chat service failed." });
    }
});

module.exports = router;
