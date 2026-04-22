import Order from "../models/order.js";

// POST /api/orders
export const createOrder = async (req, res) => {
  try {
    const { customerName, customerEmail, customerPhone, address, items, total } = req.body;
    if (!customerName || !customerEmail || !customerPhone || !address || !items || !total) {
      return res.status(400).json({ message: "Missing required fields" });
    }
    const order = new Order({ customerName, customerEmail, customerPhone, address, items, total });
    await order.save();
    res.status(201).json({ message: "Order placed successfully", order });
  } catch (err) {
    res.status(500).json({ message: "Failed to place order", error: err.message });
  }
};
