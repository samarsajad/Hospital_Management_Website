// controllers/checkupController.js
const Checkup = require('../models/checkup');

// Get all checkups (filter by type/status)
exports.getAllCheckups = async (req, res) => {
  try {
    const { type, status } = req.query;
    const filters = {};
    
    if (type) filters.type = type;
    if (status) filters.status = status;

    const checkups = await Checkup.find(filters)
      .populate('patientId', 'name email')
      .populate('doctorId', 'name specialization');

    res.json(checkups);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Update checkup status
exports.updateCheckupStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status, notes } = req.body;

    const checkup = await Checkup.findByIdAndUpdate(
      id,
      { status, notes },
      { new: true }
    ).populate('patientId', 'name email');

    if (!checkup) {
      return res.status(404).json({ error: 'Checkup not found' });
    }

    res.json(checkup);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Delete checkup
exports.deleteCheckup = async (req, res) => {
  try {
    const { id } = req.params;
    await Checkup.findByIdAndDelete(id);
    res.json({ message: 'Checkup deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};