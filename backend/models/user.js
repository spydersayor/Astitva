const { Pool } = require('pg');
const pool = new Pool();

const createUser = async (name, email, password) => {
    const res = await pool.query(
        'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *',
        [name, email, password]
    );
    return res.rows[0];
};

const findUserByEmail = async (email) => {
    const res = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    return res.rows[0];
};

const findUserById = async (id) => {
    const res = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
    return res.rows[0];
};

module.exports = { createUser, findUserByEmail, findUserById };
