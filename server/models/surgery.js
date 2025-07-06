const mongoose = require('mongoose');

const surgerySchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  doctor: String,
  surgeryType: String,
  date: String,
  prescriptionFileName: String, // Just the file name, actual file is stored separately
}, { timestamps: true });

module.exports = mongoose.model('Surgery', surgerySchema);
