console.log("🚀 Script started");

const mongoose = require("mongoose");
const Doctor = require("./models/doctor");
require("dotenv").config();

let doctorsData;
try {
  doctorsData = require("./data/doctors.json");
  console.log("📦 Doctors data loaded:", doctorsData.length);
} catch (err) {
  console.error("❌ Failed to load doctors.json:", err);
  process.exit(1);
}

console.log("🌐 MONGO_URI:", process.env.MONGO_URI);

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    console.log("✅ Connected to MongoDB");
    await Doctor.deleteMany({});
    console.log("🗑️ Existing doctors deleted");

    await Doctor.insertMany(doctorsData);
    console.log("✅ Doctors inserted successfully!");
    process.exit();
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
    process.exit(1);
  });
