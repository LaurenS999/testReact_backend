const mysql = require('mysql2');
console.log("MYSQL_URL:", process.env.MYSQL_URL);
if (!process.env.MYSQL_URL) {
  console.error("MYSQL_URL tidak ada!");
  process.exit(1);
}

const db = mysql.createConnection(process.env.MYSQL_URL);

db.connect((err) => {
  if (err) {
    console.error("MySQL gagal:", err.message);
  } else {
    console.log("MySQL Connected");
  }
});

module.exports = db;
