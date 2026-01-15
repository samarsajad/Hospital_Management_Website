// server/index.js
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import session from "express-session";
import multer from "multer";

import Medicine from "./models/medicines.js";
import LabAppointment from "./models/lab.js";
import Doctor from "./models/checkup.js";
import CheckupAppointment from "./models/checkup.js";
import Surgery from "./models/surgery.js";

import authRoutes from "./routes/authRoutes.js";
import medicineRoutes from "./routes/medicineRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";
import emergencyRoutes from "./routes/emergencyRoutes.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// for __dirname in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());
app.use(express.json());

// Express session
app.use(
  session({
    secret: process.env.SESSION_SECRET || "midcity_session_secret",
    resave: false,
    saveUninitialized: false,
  })
);

app.get("/", (req, res) => {
  res.send("Backend is running successfully!");
});

// MongoDB connection
const mongoURI = process.env.MONGO_URI;
console.log("Connecting to MongoDB URI:", mongoURI);

mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error(" MongoDB Error:", err));

// Static files
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/admin/medicines", medicineRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api", emergencyRoutes);

// Doctors
app.get("/api/doctors", async (req, res) => {
  try {
    const doctors = await Doctor.find();
    res.json(doctors);
  } catch (err) {
    console.error("Failed to fetch doctors:", err);
    res.status(500).json({ error: "Server error" });
  }
});

// Lab booking
app.post("/api/labs/book", async (req, res) => {
  try {
    console.log("Booking data:", req.body);
    const newAppointment = new LabAppointment(req.body);
    await newAppointment.save();
    res.status(201).json({ message: "Appointment booked successfully!" });
  } catch (err) {
    console.error("Error saving appointment:", err);
    res.status(500).json({ error: "Server error" });
  }
});

// Checkup booking
app.post("/api/checkup/book", async (req, res) => {
  try {
    const newAppointment = new CheckupAppointment(req.body);
    await newAppointment.save();
    res.status(201).json({ message: "Appointment booked successfully!" });
  } catch (err) {
    console.error("Error booking checkup appointment:", err);
    res.status(500).json({ error: "Server error" });
  }
});

// Surgery booking
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
const upload = multer({ storage });

app.post("/api/surgery/book", upload.single("prescription"), async (req, res) => {
  try {
    const { name, email, phone, doctor, surgeryType, date } = req.body;
    const prescriptionFileName = req.file?.filename || null;

    const newSurgery = new Surgery({
      name,
      email,
      phone,
      doctor,
      surgeryType,
      date,
      prescriptionFileName,
    });

    await newSurgery.save();
    res.status(201).json({ message: "Surgery appointment booked successfully" });
  } catch (err) {
    console.error("Error booking surgery:", err);
    res.status(500).json({ error: "Server error" });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
