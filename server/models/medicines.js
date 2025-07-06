const mongoose = require('mongoose');

const medicineSchema = new mongoose.Schema({
  name: String,
  brand: String,
  manufacturer: String,
  composition: String,
  type: String,
  price: Number,
  packSize: String
});

const Medicine = mongoose.model('Medicine', medicineSchema);

module.exports = Medicine;
