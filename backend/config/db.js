import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
dotenv.config();

export const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

// ✅ TEST DATABASE CONNECTION
async function testConnection() {
  try {
    const connection = await db.getConnection();
    console.log("✅ MySQL connected");
    connection.release(); 
  } catch (err) {
    console.error("❌ MySQL connection error:", err.message);
  }
}

testConnection();