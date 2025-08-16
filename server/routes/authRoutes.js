const express = require("express");
const {
  register,
  login,
  logout,
  sendVerifyOtp,
  verifyOtp,
  isAuthenticated,
  sendResetOtp,
  resetPassword,
  googleLogin,
} = require("../controllers/authController");
const userAuth = require("../middleware/isAuthenticated");
const passport = require("passport");

const authRouter = express.Router();

authRouter.post("/register", register);
authRouter.post("/login", login);
authRouter.post("/logout", logout);
authRouter.post("/send-verify-otp", userAuth, sendVerifyOtp);
authRouter.post("/verify-otp", userAuth, verifyOtp);
authRouter.get("/is-auth", userAuth, isAuthenticated);
authRouter.post("/send-reset-otp", sendResetOtp);
authRouter.post("/reset-password", resetPassword);
authRouter.post("/google-login", googleLogin);

authRouter.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));
authRouter.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: "/",
    failureRedirect: "/login",
  })
);

module.exports = authRouter;
