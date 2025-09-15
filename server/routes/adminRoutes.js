import express from "express";
import {
  getAllLabs,
  updateLab,
  deleteLab,
  getAllCheckups,
  updateCheckup,
  deleteCheckup,
  getAllSurgeries,
  updateSurgery,
  deleteSurgery,
  createDoctor,
  getAllDoctors,
  updateDoctor,
  deleteDoctor,
  getAllUsers,
  deleteUser,
} from "../controllers/adminController.js";
import isAuthenticated from "../middleware/isAuthenticated.js";
import isAdmin from "../middleware/isAdmin.js";

const router = express.Router();

// protect all admin routes
router.use(isAuthenticated, isAdmin);

// Users
router.get("/users", getAllUsers);
router.delete("/users/:id", deleteUser);

// Lab
router.get("/lab", getAllLabs);
router.put("/lab/:id", updateLab);
router.delete("/lab/:id", deleteLab);

//  Checkup
router.get("/checkup", getAllCheckups);
router.put("/checkup/:id", updateCheckup);
router.delete("/checkup/:id", deleteCheckup);

//  Surgery
router.get("/surgery", getAllSurgeries);
router.put("/surgery/:id", updateSurgery);
router.delete("/surgery/:id", deleteSurgery);

//  Doctors
router.post("/doctors", createDoctor);
router.get("/all-doctors", getAllDoctors);
router.put("/doctors/:id", updateDoctor);
router.delete("/doctors/:id", deleteDoctor);

export default router;
