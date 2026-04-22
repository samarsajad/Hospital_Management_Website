import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  specialization: {
    type: String,
    required: true,
  },
  experience: {
    type: Number,
    required: false,
  },
  qualifications: {
    type: [String],
    required: false,
  },
  availableSlots: {
    type: [String],
    required: false,
  },
  contact: {
    type: Object,
    required: false,
  },
  hospital: {
    type: String,
    required: false,
  },
}, { collection: 'doctors' });

export default mongoose.model('Doctor', doctorSchema);
