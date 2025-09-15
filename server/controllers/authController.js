import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import { OAuth2Client } from "google-auth-library";
import User from "../models/User.js";
import transporter from "../config/nodemailer.js";

const client = new OAuth2Client(process.env.REACT_APP_GOOGLE_CLIENT_ID);

export const isAuthenticated = (req, res) => {
  return res.json({ success: true, message: "User is authenticated" });
};


// ----------------- REGISTER -----------------
export const register = async (req, res) => {
  const { name, email, password, role } = req.body;
  if (!name || !email || !password) {
    return res.json({ success: false, message: "All fields are required" });
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({ success: false, message: "User already exists" });
    }

    const newUser = new User({
      name,
      email,
      password, // hashed automatically in model
      role: role || "user",
    });
    await newUser.save();

    const token = jwt.sign(
      { id: newUser._id, role: newUser.role },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.cookie("token", token, { httpOnly: true });
    return res.json({
      success: true,
      token,
      role: newUser.role,
      message: "Registered successfully",
    });
  } catch (err) {
    console.error(err);
    return res.json({ success: false, message: "Something went wrong" });
  }
};

// ----------------- LOGIN -----------------
export const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.json({ success: false, message: "All fields are required" });
  }

  try {
    const user = await User.findOne({ email });
    if (!user) return res.json({ success: false, message: "User does not exist" });
    if (!user.password) return res.json({ success: false, message: "Please login with Google" });

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) return res.json({ success: false, message: "Invalid credentials" });

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.cookie("token", token, { httpOnly: true });
    return res.json({
      success: true,
      token,
      role: user.role,
      message: "Logged in successfully",
    });
  } catch (err) {
    console.error(err);
    return res.json({ success: false, message: "Something went wrong" });
  }
};

// ----------------- GOOGLE LOGIN -----------------
export const googleLogin = async (req, res) => {
  try {
    const { credential } = req.body;
    if (!credential) return res.json({ success: false, message: "Google token is required" });

    const ticket = await client.verifyIdToken({
      idToken: credential,
      audience: process.env.REACT_APP_GOOGLE_CLIENT_ID,
    });

    const { email, name } = ticket.getPayload();
    if (!email) return res.json({ success: false, message: "Invalid Google token" });

    let user = await User.findOne({ email });
    if (!user) {
      user = new User({
        name: name || email.split("@")[0],
        email,
        password: null,
      });
      await user.save();
    }

    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.cookie("token", token, { httpOnly: true });
    return res.json({ success: true, token, role: user.role });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ success: false, message: "Something went wrong" });
  }
};

// ----------------- LOGOUT -----------------
export const logout = async (req, res) => {
  try {
    res.clearCookie("token");
    return res.json({ success: true, message: "Logged out successfully" });
  } catch (err) {
    console.error(err);
    return res.json({ success: false, message: "Something went wrong" });
  }
};

// ----------------- OTHER AUTH METHODS -----------------
export const sendVerifyOtp = async (req, res) => {
  try {
    const userId = req.userId;
    const user = await User.findById(new mongoose.Types.ObjectId(userId));
    if (!user) return res.json({ success: false, message: "User not found" });
    if (user.isAccountVerified) return res.json({ success: false, message: "Account already verified" });

    const otp = String(Math.floor(100000 + Math.random() * 900000));
    user.verifyOtp = otp;
    user.verifyOtpExpiry = Date.now() + 10 * 60 * 1000;
    await user.save();

    const mailOptions = {
      from: process.env.SENDER_EMAIL,
      to: user.email,
      subject: "Verify your account",
      text: `Your verification code is ${otp}. It is valid for 10 minutes.`,
    };
    await transporter.sendMail(mailOptions);
    return res.json({ success: true, message: "OTP sent successfully" });
  } catch (err) {
    console.error(err);
    return res.json({ success: false, message: "Something went wrong" });
  }
};

export const verifyOtp = async (req, res) => {
  try {
    const { otp } = req.body;
    const userId = req.userId;
    if (!userId || !otp) return res.json({ success: false, message: "Please fill all the fields" });

    const user = await User.findById(userId);
    if (!user || user.verifyOtp !== otp) return res.json({ success: false, message: "Invalid OTP" });
    if (user.verifyOtpExpiry < Date.now()) return res.json({ success: false, message: "OTP expired" });

    user.isAccountVerified = true;
    user.verifyOtp = "";
    user.verifyOtpExpiry = 0;
    await user.save();

    return res.json({ success: true, message: "Account verified successfully" });
  } catch (err) {
    console.error(err);
    return res.json({ success: false, message: "Something went wrong" });
  }
};

export const sendResetOtp = async (req, res) => {
  const { email } = req.body;
  if (!email) return res.json({ success: false, message: "Please provide an email" });

  try {
    const user = await User.findOne({ email });
    if (!user) return res.json({ success: false, message: "User does not exist" });

    const otp = String(Math.floor(100000 + Math.random() * 900000));
    user.resetOtp = otp;
    user.resetOtpExpiry = Date.now() + 10 * 60 * 1000;
    await user.save();

    const mailOptions = {
      from: process.env.SENDER_EMAIL,
      to: user.email,
      subject: "Reset your password",
      text: `Your reset code is ${otp}. It is valid for 10 minutes.`,
    };
    await transporter.sendMail(mailOptions);
    return res.json({ success: true, message: "OTP sent successfully" });
  } catch (err) {
    console.error(err);
    return res.json({ success: false, message: "Something went wrong" });
  }
};

export const resetPassword = async (req, res) => {
  const { email, otp, newPassword } = req.body;
  if (!email || !otp || !newPassword) return res.json({ success: false, message: "Please fill all the fields" });

  try {
    const user = await User.findOne({ email });
    if (!user || user.resetOtp !== otp) return res.json({ success: false, message: "Invalid OTP" });
    if (user.resetOtpExpiry < Date.now()) return res.json({ success: false, message: "OTP expired" });

    user.password = await bcrypt.hash(newPassword, 15);
    user.resetOtp = "";
    user.resetOtpExpiry = 0;
    await user.save();

    return res.json({ success: true, message: "Password reset successfully" });
  } catch (err) {
    console.error(err);
    return res.json({ success: false, message: "Something went wrong" });
  }
};
