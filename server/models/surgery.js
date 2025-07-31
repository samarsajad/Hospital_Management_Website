const mongoose = require('mongoose');

const surgerySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    lowercase: true,
    required: true,
  },
  phone: {
    type: String,
    match: [/^\d{10}$/, "Phone number must be 10 digits"],
    required: true,
  },
  doctor: {
    type: String,
    required: true,
  },
  surgeryType: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  prescriptionFileName: {
    type: String,
    required: true,
  },
}, { timestamps: true });

module.exports = mongoose.model('Surgery', surgerySchema);
