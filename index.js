require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// test route
app.get("/", (req, res) => {
  res.send("API jalan 🚀");
});

// contoh API
app.get("/api/notes", (req, res) => {
  res.json({
    message: "API Notes berhasil",
  });
});

// 🔥 PENTING: pakai port 5000 (karena Railway mapping ke 5000)
const PORT = 5000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server jalan di port ${PORT}`);
});