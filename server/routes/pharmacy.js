const express = require('express');
const router = express.Router();
const Medicine = require('../models/medicines');

// GET - get all medicines
router.get('/', async (req, res) => {
  try {
    const medicines = await Medicine.find();
    res.json(medicines);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
