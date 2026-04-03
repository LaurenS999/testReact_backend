require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API jalan 🚀");
});

// 🔥 FIX: pakai port manual
const PORT = 5000;

app.listen(5000, "0.0.0.0", () => {
  console.log(`Server jalan di port ${PORT}`);
});
