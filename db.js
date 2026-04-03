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

// 3. AUTO-CREATE TABLE (Opsional tapi sangat membantu jika belum ada tab Data)
const createTableQuery = `
  CREATE TABLE IF NOT EXISTS notes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    judul VARCHAR(255) NOT NULL,
    isi_konten TEXT,
    tanggal_pembuatan TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );
`;

db.query(createTableQuery, (err) => {
  if (err) {
    console.error("Gagal buat tabel:", err.message);
  } else {
    console.log("✅ Tabel 'notes' siap digunakan");
  }
});

module.exports = db;