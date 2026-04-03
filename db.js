const mysql = require("mysql2");

// Gunakan createPool agar koneksi lebih stabil & bisa menangani banyak request
const db = mysql.createPool({
  host: process.env.MYSQLHOST,
  user: process.env.MYSQLUSER,
  password: process.env.MYSQLPASSWORD,
  database: process.env.MYSQLDATABASE,
  port: process.env.MYSQLPORT || 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Cek koneksi
db.getConnection((err, connection) => {
  if (err) {
    console.error("MySQL gagal konek:", err.message);
  } else {
    console.log("MySQL Connected (via Pool)");
    connection.release(); // Kembalikan koneksi ke pool
  }
});

module.exports = db;