import express from "express";
import Checkup from "../models/checkup.js";

const router = express.Router();

// POST - book appointment
router.post("/book", async (req, res) => {
  try {
    const { name, email, date, doctor } = req.body;

    const newAppointment = new Checkup({
      name,
      email,
      date,
      doctor, // doctor ObjectId
    });

    await newAppointment.save();
    res.json({ message: "Appointment booked successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to book appointment" });
  }
});

export default router;
