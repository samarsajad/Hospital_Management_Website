import mongoose from "mongoose";

const medicineSchema = new mongoose.Schema({
  name: { type: String, required: true },
  brand: { type: String, required: true },
  composition: { type: String, required: true },
  price: { type: Number, required: true },
  imageUrl: { type: String, required: true }
}, { timestamps: true });

export default mongoose.model('Medicine', medicineSchema);
