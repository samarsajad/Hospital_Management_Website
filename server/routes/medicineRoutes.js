import express from "express";
const router = express.Router();

import {
  createMedicine,
  getAllMedicines,
  updateMedicine,
  deleteMedicine
} from "../controllers/medicineController.js";

import isAuthenticated from "../middleware/isAuthenticated.js";
import isAdmin from "../middleware/isAdmin.js";

router.post("/", isAuthenticated, isAdmin, createMedicine);
router.get("/", isAuthenticated, isAdmin, getAllMedicines);
router.put("/:id", isAuthenticated, isAdmin, updateMedicine);
router.delete("/:id", isAuthenticated, isAdmin, deleteMedicine);

export default router;
