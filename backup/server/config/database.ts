import mysql from 'mysql2/promise'

const pool = mysql.createPool({
  host: 'localhost',
  user: 'mysql',
  password: 'admin',
  database: 'stream_game_db',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
})

module.exports = pool
