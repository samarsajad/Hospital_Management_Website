const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  specialty: {
    type: String,
    required: true,
  },
  availability: {
    type: String,
    required: false, // set to false if not always used
  },
  image: {
    type: String,
    required: false,
  },
  photoUrl: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model("Doctor", doctorSchema);
