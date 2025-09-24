import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String }, 
    role: { type: String, enum: ["user", "admin"], default: "user" },

    // account verification
    isAccountVerified: { type: Boolean, default: false },
    verifyOtp: { type: String },
    verifyOtpExpiry: { type: Number },

    // password reset
    resetOtp: { type: String },
    resetOtpExpiry: { type: Number },
  },
  { timestamps: true }
);

// Hash password before saving (only if modified and exists)
userSchema.pre("save", async function (next) {
  if (!this.isModified("password") || !this.password) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

// Compare passwords
userSchema.methods.matchPassword = async function (enteredPassword) {
  if (!this.password) return false;
  return await bcrypt.compare(enteredPassword, this.password);
};

// Create model and export once
const User = mongoose.model("User", userSchema);
export default User;
