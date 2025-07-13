const express = require('express');
const bodyParser = require("body-parser");
const path = require('path');
const app = express();
const PORT = process.env.PORT || 8000;

require('events').EventEmitter.defaultMaxListeners = 500;

// Importation des routes
const qrRoute = require('./qr');
const pairCodeRoute = require('./pair');

// Middleware pour body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes API
app.use('/qr', qrRoute);
app.use('/code', pairCodeRoute);

// Routes HTML
app.get('/pair', (req, res) => {
  res.sendFile(path.join(__dirname, 'pair.html'));
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'main.html'));
});

// Lancement du serveur
app.listen(PORT, () => {
  console.log(`\n✅ Server running on http://localhost:${PORT}`);
  console.log(`⭐ N'oublie pas de mettre une étoile au repo !`);
});

module.exports = app;
