const mysql = require("mysql2");

// 1. Buat Pool (Lebih stabil untuk Railway)
const db = mysql.createPool(process.env.MYSQL_URL);

// 2. CEK KONEKSI (Sama pentingnya dengan db.connect)
db.getConnection((err, connection) => {
  if (err) {
    console.error("❌ MySQL gagal konek:", err.message);
  } else {
    console.log("✅ MySQL Connected (via Pool)");
    connection.release(); // Sangat penting: kembalikan koneksi ke pool setelah dicek
  }
});

module.exports = db;