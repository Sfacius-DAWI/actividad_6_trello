// filepath: c:\Users\santi\Documents\actividad10_js\server\db.js
import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const pool = mysql.createPool({
  host: process.env.MYSQL_HOST || 'localhost',
  port: process.env.MYSQL_PORT || 3306,
  user: process.env.MYSQL_USER || 'your_user',
  password: process.env.MYSQL_PASSWORD || 'your_user_password',
  database: process.env.MYSQL_DATABASE || 'your_database_name',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

export default pool;