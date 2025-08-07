const mongoose = require("mongoose");

const checkupSchema = new mongoose.Schema({
  name: String,
  email: String,
  date: String,
  doctor: String, // this is just the name
});

module.exports = mongoose.model("CheckupAppointment", checkupSchema);
