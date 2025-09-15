import Medicine from "../models/medicines.js";

// CREATE a new medicine
export const createMedicine = async (req, res) => {
  try {
    const { name, brand, composition, price, imageUrl } = req.body;

    if (!name || !brand || !composition || !price || !imageUrl) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newMedicine = new Medicine({ name, brand, composition, price, imageUrl });
    await newMedicine.save();

    res.status(201).json({ message: "Medicine added successfully", medicine: newMedicine });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// READ all medicines
export const getAllMedicines = async (req, res) => {
  try {
    const medicines = await Medicine.find();
    res.json(medicines);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// UPDATE a medicine by ID
export const updateMedicine = async (req, res) => {
  try {
    const { id } = req.params;
    const updated = await Medicine.findByIdAndUpdate(id, req.body, { new: true });

    if (!updated) {
      return res.status(404).json({ message: "Medicine not found" });
    }

    res.json({ message: "Medicine updated", medicine: updated });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// DELETE a medicine by ID
export const deleteMedicine = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Medicine.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({ message: "Medicine not found" });
    }

    res.json({ message: "Medicine deleted" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
