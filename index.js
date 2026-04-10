require("dotenv").config();
const express = require("express");
const cors = require("cors");
const notesRoutes = require("./routes/notes");

const app = express();

app.use(cors());
app.use(express.json());

// Jalankan koneksi database (opsional tapi bagus untuk cek koneksi saat start)
require("./db"); 

// Test route
app.get("/", (req, res) => {
  res.send("API jalan 🚀");
});

// 🔥 GUNAKAN ROUTES YANG SUDAH DIBUAT
app.use("/api/notes", notesRoutes);

// 🔥 PERBAIKAN PORT: Railway memberikan port secara dinamis
const PORT = process.env.PORT || 5000;

app.listen(PORT, "0.0.0.0", () => {
  // Pakai backtick (``) agar variabel ${PORT} terbaca
  console.log(`Server jalan di port ${PORT}`);
});
