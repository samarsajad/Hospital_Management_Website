const mongoose = require('mongoose');

const checkupSchema = new mongoose.Schema({
  name: String,
  email: String,
  date: String,
  doctor: String,
});

module.exports = mongoose.model('CheckupAppointment', checkupSchema);
