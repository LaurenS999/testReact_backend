require('dotenv').config();

const db = process.env.DATABASE_URL;
const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors({
  origin: "https://lauren-note-taking-app.netlify.app"
}));

app.use(express.json());

const notesRoutes = require('./routes/notes');
app.use('/notes', notesRoutes);

// app.listen(5000, () => {
//   console.log('Server running on port 5000');
// });

//Untuk Git Railway 
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server jalan");
});