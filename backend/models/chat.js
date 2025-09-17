const { Pool } = require('pg');
const pool = new Pool();

const saveChat = async (user_id, user_message, bot_response) => {
    const res = await pool.query(
        'INSERT INTO chats (user_id, user_message, bot_response) VALUES ($1, $2, $3) RETURNING *',
        [user_id, user_message, bot_response]
    );
    return res.rows[0];
};

const getChatsByUser = async (user_id) => {
    const res = await pool.query(
        'SELECT * FROM chats WHERE user_id = $1 ORDER BY created_at DESC',
        [user_id]
    );
    return res.rows;
};

module.exports = { saveChat, getChatsByUser };
