require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// route test
app.get("/", (req, res) => {
  res.send("API jalan");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server jalan di port ${PORT}`);
});
