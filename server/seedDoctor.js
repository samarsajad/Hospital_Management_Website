import mongoose from "mongoose";
import dotenv from "dotenv";
import Doctor from "./models/doctor.js";

dotenv.config();

const doctors = [
  {
  name: "Dr. Zahoor Ahmad Gilkar",
  specialization: "Urologist",
  experience: 12,
  qualifications: ["MBBS", "MS","DNB Urology"],
  availableSlots: ["Mon 10-12", "Thu 13-15"],
  contact: { phone: "9906112233", email: "zahoor.uro@midcity.com" },
  hospital: "MidCity Hospital",
},
  {
  name: "Dr. Shahida Kounsar",
  specialization: "Gynaecologist",
  experience: 12,
  qualifications: ["MBBS", "MS Gynaecology"],
  availableSlots: ["Mon 10-12", "Thu 13-15"],
  contact: { phone: "9906112233", email: "shahida.kounsar@midcity.com" },
  hospital: "MidCity Hospital",
},
  {
  name: "Dr. Aamir Rashid",
  specialization: "Orthopedics",
  experience: 12,
  qualifications: ["MBBS", "MS Orthopedics"],
  availableSlots: ["Mon 10-12", "Thu 13-15"],
  contact: { phone: "9906112233", email: "aamir.rashid@midcity.com" },
  hospital: "MidCity Hospital",
},
{
  name: "Dr. Irfan Ahmad Bhat",
  specialization: "Neurology",
  experience: 15,
  qualifications: ["MBBS", "DM Neurology"],
  availableSlots: ["Tue 9-11", "Fri 14-16"],
  contact: { phone: "9797123456", email: "irfan.bhat@midcity.com" },
  hospital: "MidCity Hospital",
},
{
  name: "Dr. Shabir Ahmed Mir",
  specialization: "General Medicine",
  experience: 9,
  qualifications: ["MBBS", "MD Medicine"],
  availableSlots: ["Mon 11-13", "Wed 16-18"],
  contact: { phone: "9419012345", email: "shabir.mir@midcity.com" },
  hospital: "MidCity Hospital",
},
{
  name: "Dr. Umar Farooq Khan",
  specialization: "Pediatrics",
  experience: 8,
  qualifications: ["MBBS", "MD Pediatrics"],
  availableSlots: ["Tue 10-12", "Sat 9-11"],
  contact: { phone: "7006123456", email: "umar.khan@midcity.com" },
  hospital: "MidCity Hospital",
},
{
  name: "Dr. Bilal Ahmad Lone",
  specialization: "ENT",
  experience: 11,
  qualifications: ["MBBS", "MS ENT"],
  availableSlots: ["Wed 10-12", "Fri 15-17"],
  contact: { phone: "9858123456", email: "bilal.lone@midcity.com" },
  hospital: "MidCity Hospital",
},
{
  name: "Dr. Yasir Mushtaq Wani",
  specialization: "Radiology",
  experience: 14,
  qualifications: ["MBBS", "MD Radiology"],
  availableSlots: ["Mon 14-16", "Thu 10-12"],
  contact: { phone: "9469123456", email: "yasir.wani@midcity.com" },
  hospital: "MidCity Hospital",
},
{
  name: "Dr. Faizan Ahmed Dar",
  specialization: "Pulmonology",
  experience: 10,
  qualifications: ["MBBS", "MD Pulmonary Medicine"],
  availableSlots: ["Tue 15-17", "Sat 11-13"],
  contact: { phone: "9906312345", email: "faizan.dar@midcity.com" },
  hospital: "MidCity Hospital",
},
{
  name: "Dr. Hina Bashir",
  specialization: "Gynecology",
  experience: 6,
  qualifications: ["MBBS", "MS Gynecology"],
  availableSlots: ["Mon 9-11", "Thu 14-16"],
  contact: { phone: "9797012345", email: "hina.bashir@midcity.com" },
  hospital: "MidCity Hospital",
},
{
  name: "Dr. Adil Rashid Sheikh",
  specialization: "Psychiatry",
  experience: 13,
  qualifications: ["MBBS", "MD Psychiatry"],
  availableSlots: ["Wed 11-13", "Fri 10-12"],
  contact: { phone: "7006012345", email: "adil.sheikh@midcity.com" },
  hospital: "MidCity Hospital",
},
{
  name: "Dr. Sameer Ahmad Qureshi",
  specialization: "Ophthalmology",
  experience: 7,
  qualifications: ["MBBS", "MS Ophthalmology"],
  availableSlots: ["Tue 9-11", "Thu 16-18"],
  contact: { phone: "9419212345", email: "sameer.qureshi@midcity.com" },
  hospital: "MidCity Hospital",
},

  {
    name: "Dr. John Smith",
    specialization: "Cardiology",
    experience: 10,
    qualifications: ["MBBS", "MD Cardiology"],
    availableSlots: ["Mon 9-11", "Wed 14-16", "Fri 10-12"],
    contact: { phone: "1234567890", email: "john.smith@midcity.com" },
    hospital: "MidCity Hospital",
  },
  {
    name: "Dr. Priya Mehta",
    specialization: "Dermatology",
    experience: 7,
    qualifications: ["MBBS", "MD Dermatology"],
    availableSlots: ["Tue 10-12", "Thu 15-17"],
    contact: { phone: "9876543210", email: "priya.mehta@midcity.com" },
    hospital: "MidCity Hospital",
  },
];

async function seedDoctors() {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
    await Doctor.deleteMany({});
    await Doctor.insertMany(doctors);
    const count = await Doctor.countDocuments();
    console.log(`Doctors seeded successfully! Total doctors in collection: ${count}`);
    mongoose.disconnect();
  } catch (err) {
    console.error("Error seeding doctors:", err);
    mongoose.disconnect();
  }
}

seedDoctors();