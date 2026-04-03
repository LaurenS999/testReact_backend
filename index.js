require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// route test (WAJIB buat cek server hidup)
app.get("/", (req, res) => {
  res.send("API jalan 🚀");
});

// contoh route notes (opsional, sesuaikan dengan punyamu)
app.get("/api/notes", (req, res) => {
  res.json({
    message: "API Notes berhasil",
  });
});

// ambil PORT dari Railway
const PORT = process.env.PORT || 5000;

// debug (opsional tapi bagus)
console.log("ENV PORT:", process.env.PORT);

// jalankan server
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server jalan di port ${PORT}`);
});
