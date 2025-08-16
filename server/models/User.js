const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: [true,"Name is required"],trim: true,minLength:[3,"Name must be at least 3 characters long"]  },
  email: { type: String, required: [true,"email is required" ],unique: true,trim:true,lowercase: true,match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"] },
  password: { type: String, required: [true,"Password is required"],minLength: [6, "Password must be at least 6 characters long"] },
  verifyOtp: { type: String, default: "" },
  verifyOtpExpiry: { type: Number, default: 0 },
  isAccountVerified: { type: Boolean, default: false },
  resetOtp: { type: String, default: "" },
  resetOtpExpiry: { type: Number, default: 0 },
  googleId: { type: String }
});

const userModel = mongoose.models.user || mongoose.model("users", userSchema);
module.exports = userModel;
