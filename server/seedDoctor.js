const mongoose=require("mongoose");
const Doctor=require("./models/doctor");
const doctorData=require("./data/doctors.json");
require("dotenv").config();


const mongoURI = process.env.MONGO_URI;


mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB Connected successfully"))
  .catch((err) => console.error(" MongoDB Error:", err));

const seedData=async()=>{
    try{
        await Doctor.deleteMany();
        await Doctor.insertMany(doctorData);
        console.log("doctor seeded successfully");
    }catch(err){
        console.error("❌ Error seeding doctors:", err);
    } finally {
       mongoose.disconnect();
    }
};

seedData();