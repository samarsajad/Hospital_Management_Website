import mongoose from "mongoose";

const checkupSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  date: { type: String, required: true },
  doctor: { type: String, required: true },
}, { timestamps: true });

export default mongoose.model("CheckupAppointment", checkupSchema);