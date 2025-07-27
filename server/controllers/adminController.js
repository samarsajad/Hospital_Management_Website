// server/controllers/adminController.js
const Lab = require("../models/lab");
const Checkup = require("../models/checkup");
const Surgery = require("../models/surgery");

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
};
