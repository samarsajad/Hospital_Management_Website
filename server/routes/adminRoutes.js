// server/routes/adminRoutes.js
const express = require("express");
const router = express.Router();

const {
  getAllLabs,
  updateLab,
  deleteLab,
  getAllCheckups,
  updateCheckup,
  deleteCheckup,
  getAllSurgeries,
  updateSurgery,
  deleteSurgery,
} = require("../controllers/adminController");

const isAuthenticated = require("../middleware/isAuthenticated");
const isAdmin = require("../middleware/isAdmin");

router.use(isAuthenticated, isAdmin);

// Lab
router.get("/lab", getAllLabs);
router.put("/lab/:id", updateLab);
router.delete("/lab/:id", deleteLab);

// Checkup
router.get("/checkup", getAllCheckups);
router.put("/checkup/:id", updateCheckup);
router.delete("/checkup/:id", deleteCheckup);

// Surgery
router.get("/surgery", getAllSurgeries);
router.put("/surgery/:id", updateSurgery);
router.delete("/surgery/:id", deleteSurgery);

module.exports = router;
