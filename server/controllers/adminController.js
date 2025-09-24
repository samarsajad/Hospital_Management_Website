import Lab from "../models/lab.js";
import Checkup from "../models/checkup.js";
import Surgery from "../models/surgery.js";
import Doctor from "../models/doctor.js";
import User from "../models/User.js"; 

// ---------- Generic CRUD Helpers ----------
const getAll = (Model) => async (req, res) => {
  try {
    const records = await Model.find({});
    res.status(200).json(records);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateById = (Model) => async (req, res) => {
  try {
    const updated = await Model.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updated) return res.status(404).json({ message: "Not found" });
    res.status(200).json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const deleteById = (Model) => async (req, res) => {
  try {
    const deleted = await Model.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Not found" });
    res.status(200).json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ---------- Doctors ----------
export const createDoctor = async (req, res) => {
  try {
    const { name, specialization, availability, photoUrl } = req.body;
    if (!name || !specialization || !availability || !photoUrl) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newDoctor = new Doctor({ name, specialization, availability, photoUrl });
    const saved = await newDoctor.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAllDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.find();
    res.status(200).json(doctors);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateDoctor = async (req, res) => {
  try {
    const doctor = await Doctor.findById(req.params.id);
    if (!doctor) return res.status(404).json({ message: "Doctor not found" });

    const { name, specialization, availability, photoUrl } = req.body;
    doctor.name = name || doctor.name;
    doctor.specialization = specialization || doctor.specialization;
    doctor.availability = availability || doctor.availability;
    doctor.photoUrl = photoUrl || doctor.photoUrl;

    const updated = await doctor.save();
    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteDoctor = async (req, res) => {
  try {
    const doctor = await Doctor.findById(req.params.id);
    if (!doctor) return res.status(404).json({ message: "Doctor not found" });

    await doctor.deleteOne();
    res.json({ message: "Doctor deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ---------- Users (Admin Only) ----------
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password"); // don’t send password hash
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const deleted = await User.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "User not found" });
    res.json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ---------- Exports for Labs / Checkups / Surgeries ----------
export const getAllLabs = getAll(Lab);
export const updateLab = updateById(Lab);
export const deleteLab = deleteById(Lab);

export const getAllCheckups = getAll(Checkup);
export const updateCheckup = updateById(Checkup);
export const deleteCheckup = deleteById(Checkup);

export const getAllSurgeries = getAll(Surgery);
export const updateSurgery = updateById(Surgery);
export const deleteSurgery = deleteById(Surgery);
