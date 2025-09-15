import express from "express";
import Contact from "../models/contact.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const newContact = new Contact(req.body);
    await newContact.save();
    res.status(201).json({ message: "Message received" });
  } catch (error) {
    console.error("Error saving contact:", error);
    res.status(500).json({ message: "Failed to save message" });
  }
});

export default router;
