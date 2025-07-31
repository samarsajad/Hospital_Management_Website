const express = require('express');
const router = express.Router();
const Lab = require('../models/lab');

// POST - book lab test appointment
router.post('/book', async (req, res) => {
  try {
    const lab = new Lab(req.body);
    await lab.save();
    res.status(201).json({ message: 'Lab appointment booked successfully', lab });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET - get all lab appointments
router.get('/', async (req, res) => {
  try {
    const labs = await Lab.find();
    res.json(labs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
