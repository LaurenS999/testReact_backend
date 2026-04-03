require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// 🔥 WAJIB ADA
app.get("/", (req, res) => {
  res.send("OK");
});

// test API
app.get("/api/notes", (req, res) => {
  res.json({ message: "API jalan" });
});

// 🔥 PORT HARUS 5000 (karena kamu set manual di Railway)
const PORT = 5000;

// 🔥 WAJIB 0.0.0.0
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server jalan di port ${PORT}`);
});
