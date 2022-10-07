const express = require('express');
const Notes = require('../models/Notes');
const router = express.Router();


router.get('/', (req, res) => {
    res.json([]);
});

module.exports = router