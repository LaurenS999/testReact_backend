const mysql = require("mysql2");

// Gunakan MYSQL_URL karena paling stabil di Railway
const connectionString = process.env.MYSQL_URL;

if (!connectionString) {
  console.error("❌ ERROR: Variabel MYSQL_URL tidak ditemukan di Environment!");
}

const db = mysql.createPool(connectionString || {
  host: process.env.MYSQLHOST,
  user: process.env.MYSQLUSER,
  password: process.env.MYSQLPASSWORD,
  database: process.env.MYSQLDATABASE,
  port: process.env.MYSQLPORT || 3306,
});

// Tes koneksi dengan log yang lebih detail
db.getConnection((err, connection) => {
  if (err) {
    console.error("❌ MySQL gagal konek. Detail Error:");
    console.error("- Code:", err.code);
    console.error("- Message:", err.message);
  } else {
    console.log("✅ MySQL Connected Successfully!");
    connection.release();
  }
});

module.exports = db;