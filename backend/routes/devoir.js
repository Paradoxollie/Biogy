const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Liste des devoirs');
});

router.get('/:code', (req, res) => {
  const code = req.params.code;
  res.send(`Détails du devoir avec le code ${code}`);
});

router.post('/', (req, res) => {
  res.send('Création d\'un nouveau devoir');
});

router.put('/:code', (req, res) => {
    const code = req.params.code;
  res.send(`Mise à jour du devoir avec le code ${code}`);
});

router.delete('/:code', (req, res) => {
    const code = req.params.code;
  res.send(`Suppression du devoir avec le code ${code}`);
});

module.exports = router;