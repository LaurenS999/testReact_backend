const express = require('express');
const router = express.Router();
const db = require('../db');

// GET semua catatan
router.get('/', (req, res) => {
  const keyword = req.query.search;

  let sql = 'SELECT * FROM notes';

  if (keyword) {
    sql += ` WHERE judul LIKE '%${keyword}%' OR isi_konten LIKE '%${keyword}%'`;
  }

  sql += ' ORDER BY tanggal_pembuatan DESC';

  db.query(sql, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

// POST buat catatan
router.post('/', (req, res) => {
  const { judul, isi_konten } = req.body;

  db.query(
    'INSERT INTO notes (judul, isi_konten) VALUES (?, ?)',
    [judul, isi_konten],
    (err, result) => {
      if (err) throw err;
      res.json({ message: 'Note created' });
    }
  );
});

router.put('/:id', (req, res) => {
  const { judul, isi_konten } = req.body;

  db.query(
    'UPDATE notes SET judul=?, isi_konten=? WHERE id=?',
    [judul, isi_konten, req.params.id],
    (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ message: 'Note updated', result });
    }
  );
});


// DELETE catatan
router.delete('/:id', (req, res) => {
  db.query(
    'DELETE FROM notes WHERE id=?',
    [req.params.id],
    (err) => {
      if (err) throw err;
      res.json({ message: 'Note deleted' });
    }
  );
});

module.exports = router;