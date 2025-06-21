const express = require('express');
const router = express.Router();
const { fetchArtisans } = require('../controllers/artisanController');

router.post('/fetch', fetchArtisans);

module.exports = router;
