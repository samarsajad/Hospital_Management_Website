// server/controllers/adminController.js
const Lab = require("../models/lab");
const Checkup = require("../models/checkup");
const Surgery = require("../models/surgery");
const Doctor = require('../models/doctor');
// Generic CRUD helpers
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

const createDoctor = async (req, res) => {
  try {
    const { name, specialization, availability, photoUrl } = req.body;
    if (!name || !specialization || !availability || !photoUrl) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const newDoctor = new Doctor({ name, specialization, availability, photoUrl });
    const saved = await newDoctor.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.find();
    res.status(200).json(doctors);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateDoctor = async (req, res) => {
  try {
    const doctor = await Doctor.findById(req.params.id);
    if (!doctor) {
      return res.status(404).json({ message: 'Doctor not found' });
    }

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

const deleteDoctor = async (req, res) => {
  try {
    const doctor = await Doctor.findById(req.params.id);
    if (!doctor) {
      return res.status(404).json({ message: 'Doctor not found' });
    }

    await doctor.remove();
    res.json({ message: 'Doctor deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


module.exports = {
  getAllLabs: getAll(Lab),
  updateLab: updateById(Lab),
  deleteLab: deleteById(Lab),

  getAllCheckups: getAll(Checkup),
  updateCheckup: updateById(Checkup),
  deleteCheckup: deleteById(Checkup),

  getAllSurgeries: getAll(Surgery),
  updateSurgery: updateById(Surgery),
  deleteSurgery: deleteById(Surgery),

  createDoctor,
  getAllDoctors,
  updateDoctor,
  deleteDoctor
};
