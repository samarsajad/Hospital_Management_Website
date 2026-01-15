import express from "express";
import Doctor from "../models/doctor.js";

const router = express.Router();

// Add a new doctor
router.post("/", async (req, res) => {
  try {
    const doctor = new Doctor(req.body);
    await doctor.save();
    res.status(201).json(doctor);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all doctors
router.get("/", async (req, res) => {
  try {
    const doctors = await Doctor.find();
    console.log("Doctors fetched from DB:", doctors); 
    res.json(doctors);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get doctors by specialization (for filtering later)
router.get("/specialization/:specialization", async (req, res) => {
  try {
    const doctors = await Doctor.find({
      specialization: req.params.specialization,
    });
    res.json(doctors);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
