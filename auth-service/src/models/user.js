const { Pool } = require('pg');
const pool = new Pool({
  // connection settings
  user: 'yourUsername',
  host: 'localhost',
  database: 'yourDatabase',
  password: 'yourPassword',
  port: 5432,
});

const getUserByEmail = async (email) => {
  const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
  return result.rows[0];
};

const createUser = async (user) => {
  const { username, email, hashedPassword } = user;
  const result = await pool.query('INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *', [username, email, hashedPassword]);
  return result.rows[0];
};

module.exports = { getUserByEmail, createUser };