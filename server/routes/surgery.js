const express = require('express');
const router = express.Router();
const Surgery = require('../models/surgery');

// POST - book surgery appointment
router.post('/book', async (req, res) => {
  try {
    const surgery = new Surgery(req.body);
    await surgery.save();
    res.status(201).json({ message: 'Surgery appointment booked successfully', surgery });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET - get all surgery appointments
router.get('/', async (req, res) => {
  try {
    const surgeries = await Surgery.find();
    res.json(surgeries);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
