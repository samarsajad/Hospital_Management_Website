const mongoose = require("mongoose");

const labAppointmentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },
    phone: {
      type: String,
      required: true,
      match: [/^\d{10}$/, "Phone number must be 10 digits"],
    },
    date: {
      type: Date,
      required: true,
    },
    test: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("LabAppointment", labAppointmentSchema);
