const express = require("express");
const router = express.Router();

const {
  createMedicine,
  getAllMedicines,
  updateMedicine,
  deleteMedicine
} = require("../controllers/medicineController");

const isAuthenticated = require("../middleware/isAuthenticated");
const isAdmin = require("../middleware/isAdmin");

router.post("/", isAuthenticated, isAdmin, createMedicine);
router.get("/", isAuthenticated, isAdmin, getAllMedicines);
router.put("/:id", isAuthenticated, isAdmin, updateMedicine);
router.delete("/:id", isAuthenticated, isAdmin, deleteMedicine);

module.exports = router;
