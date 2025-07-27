const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
  name: String,
  specialty: String,
  image: String,
});

module.exports = mongoose.model("Doctor", doctorSchema);
