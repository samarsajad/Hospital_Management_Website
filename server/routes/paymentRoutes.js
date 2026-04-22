import express from "express";
import crypto from "crypto";
import razorpay, { razorpayPublicKey } from "../config/razorpay.js";
import Order from "../models/order.js";

const router = express.Router();

// Get public key for frontend
router.get("/key", (req, res) => {
  return res.json({ keyId: razorpayPublicKey });
});

// Create Razorpay order and DB order
router.post("/create-order", async (req, res) => {
  try {
    const { customerName, customerEmail, customerPhone, address, items } = req.body;
    if (!customerName || !customerEmail || !customerPhone || !address || !Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    // Compute total securely (ideally by fetching medicines from DB; here we trust provided price)
    const total = items.reduce((sum, it) => sum + (Number(it.price) || 0) * (Number(it.qty) || 0), 0);
    const amountInPaise = Math.round(total * 100);

    // Create DB order first
    const orderDoc = new Order({
      customerName,
      customerEmail,
      customerPhone,
      address,
      items,
      total,
      currency: "INR",
      status: "created",
    });
    await orderDoc.save();

    // Create Razorpay order
    const rzpOrder = await razorpay.orders.create({
      amount: amountInPaise,
      currency: "INR",
      receipt: orderDoc._id.toString(),
    });

    // Save razorpay order id in DB
    orderDoc.razorpayOrderId = rzpOrder.id;
    await orderDoc.save();

    return res.status(201).json({
      message: "Razorpay order created",
      keyId: razorpayPublicKey,
      amount: rzpOrder.amount,
      currency: rzpOrder.currency,
      razorpayOrderId: rzpOrder.id,
      orderId: orderDoc._id,
    });
  } catch (err) {
    console.error("[payments/create-order]", err);
    return res.status(500).json({ message: "Failed to create order", error: err.message });
  }
});

// Verify payment signature and mark order paid
router.post("/verify", async (req, res) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature, orderId } = req.body;
    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature || !orderId) {
      return res.status(400).json({ message: "Missing verification fields" });
    }

    const shasum = crypto.createHmac("sha256", process.env.RAZORPAY_KEY_SECRET || "");
    shasum.update(`${razorpay_order_id}|${razorpay_payment_id}`);
    const digest = shasum.digest("hex");

    if (digest !== razorpay_signature) {
      // Mark failed
      await Order.findByIdAndUpdate(orderId, {
        status: "failed",
        razorpayOrderId: razorpay_order_id,
        razorpayPaymentId: razorpay_payment_id,
        razorpaySignature: razorpay_signature,
      });
      return res.status(400).json({ message: "Payment verification failed" });
    }

    // Mark paid
    await Order.findByIdAndUpdate(orderId, {
      status: "paid",
      razorpayOrderId: razorpay_order_id,
      razorpayPaymentId: razorpay_payment_id,
      razorpaySignature: razorpay_signature,
    });

    return res.status(200).json({ message: "Payment verified and order marked paid" });
  } catch (err) {
    console.error("[payments/verify]", err);
    return res.status(500).json({ message: "Verification error", error: err.message });
  }
});

export default router;
