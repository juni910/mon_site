const express = require('express');
const app = express();
const port = 3000;

// Servir les fichiers statiques (HTML, CSS, JS)
app.use(express.static('public'));

// Route d'API pour obtenir des animes
app.get('/api/animes', (req, res) => {
    const animes = [
        { id: 1, title: 'Naruto', genre: 'Shonen', image: 'anime1.jpg' },
        { id: 2, title: 'One Piece', genre: 'Shonen', image: 'anime2.jpg' }
        // Ajoute d'autres animes ici
    ];
    res.json(animes);
});

// Démarrer le serveur
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
