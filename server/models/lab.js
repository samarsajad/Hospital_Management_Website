const mongoose = require('mongoose');

const labAppointmentSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  date: String,
  test: String,
});

module.exports = mongoose.model('LabAppointment', labAppointmentSchema);
