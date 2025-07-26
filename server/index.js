const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const Medicine = require("./models/medicines");
const LabAppointment = require("./models/lab");
const Doctor = require("./models/checkup");
const CheckupAppointment = require("./models/checkup");
const multer = require("multer");
const path = require("path");
const Surgery = require("./models/surgery");
const authRoutes = require("./routes/authRoutes");
const medicineRoutes = require("./routes/medicineRoutes");
const adminRoutes = require("./routes/adminRoutes");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend is running successfully!");
});

const mongoURI = process.env.MONGO_URI;
console.log("Connecting to MongoDB URI:", mongoURI);

mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error(" MongoDB Error:", err));

app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/api/auth", authRoutes);
app.use("/api/admin/medicines", medicineRoutes);
app.use("/api/admin", adminRoutes);

app.get("/api/doctors", async (req, res) => {
  try {
    const doctors = await Doctor.find();
    res.json(doctors);
  } catch (err) {
    console.error("Failed to fetch doctors:", err);
    res.status(500).json({ error: "Server error" });
  }
});

app.post("/api/labs/book", async (req, res) => {
  try {
    console.log("Booking data:", req.body); // ✅ Add this
    const newAppointment = new LabAppointment(req.body);
    await newAppointment.save();
    res.status(201).json({ message: "Appointment booked successfully!" });
  } catch (err) {
    console.error("Error saving appointment:", err);
    res.status(500).json({ error: "Server error" });
  }
});

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

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
const upload = multer({ storage });

app.post(
  "/api/surgery/book",
  upload.single("prescription"),
  async (req, res) => {
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
      res
        .status(201)
        .json({ message: "Surgery appointment booked successfully" });
    } catch (err) {
      console.error("Error booking surgery:", err);
      res.status(500).json({ error: "Server error" });
    }
  }
);

app.listen(PORT, () => {
  console.log(` Server is running on port ${PORT}`);
});
