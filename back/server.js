const express = require('express');
const cors = require('cors');
const app = express();

// Ajouter la configuration CORS
app.use(cors({
    origin: 'http://localhost:5173', // URL de votre frontend
    credentials: true
}));

// Reste du code... 