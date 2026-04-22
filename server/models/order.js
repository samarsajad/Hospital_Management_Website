import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  customerName: { type: String, required: true },
  customerEmail: { type: String, required: true },
  customerPhone: { type: String, required: true },
  address: { type: String, required: true },
  currency: { type: String, default: "INR" },
  items: [
    {
      _id: { type: mongoose.Schema.Types.ObjectId, ref: "Medicine", required: true },
      name: String,
      price: Number,
      qty: Number
    }
  ],
  total: { type: Number, required: true },
  status: { type: String, enum: ["created", "paid", "failed"], default: "created" },
  razorpayOrderId: { type: String },
  razorpayPaymentId: { type: String },
  razorpaySignature: { type: String },
  createdAt: { type: Date, default: Date.now }
});

const Order = mongoose.model("Order", orderSchema);
export default Order;
