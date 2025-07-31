const express = require('express');
const router = express.Router();
const Contact = require('../models/contact');

router.post('/', async (req, res) => {
  try {
    const newContact = new Contact(req.body);
    await newContact.save();
    res.status(201).json({ message: 'Message received' });
  } catch (error) {
    console.error('Error saving contact:', error);
    res.status(500).json({ message: 'Failed to save message' });
  }
});

module.exports = router;
