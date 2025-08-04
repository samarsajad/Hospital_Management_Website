const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String },
  verifyOtp: { type: String, default: "" },
  verifyOtpExpiry: { type: Number, default: 0 },
  isAccountVerified: { type: Boolean, default: false },
  resetOtp: { type: String, default: "" },
  resetOtpExpiry: { type: Number, default: 0 },
  googleId: { type: String }
});

const userModel = mongoose.models.user || mongoose.model("users", userSchema);
module.exports = userModel;
