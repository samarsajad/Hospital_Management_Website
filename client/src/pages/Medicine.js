import React, { useState } from "react";

const initialMedicines = [
  { id: 1, name: "Paracetamol", category: "Tablet", available: true },
  { id: 2, name: "Cough Syrup", category: "Syrup", available: false },
  { id: 3, name: "Insulin", category: "Injection", available: true },
  { id: 4, name: "Ibuprofen", category: "Tablet", available: true },
  { id: 5, name: "Vitamin Syrup", category: "Syrup", available: true },
];

const MedicineListing = () => {
  const [medicines] = useState(initialMedicines);
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [availabilityFilter, setAvailabilityFilter] = useState("All");

  const filteredMedicines = medicines.filter((med) => {
    const matchesSearch = med.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === "All" || med.category === categoryFilter;
    const matchesAvailability =
      availabilityFilter === "All" ||
      (availabilityFilter === "Available" && med.available) ||
      (availabilityFilter === "OutOfStock" && !med.available);

    return matchesSearch && matchesCategory && matchesAvailability;
  });

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Medicine Listing</h1>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border p-2 rounded mb-4 w-full max-w-sm"
      />

      {/* Filters */}
      <div className="flex gap-4 mb-4">
        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="All">All Categories</option>
          <option value="Tablet">Tablets</option>
          <option value="Syrup">Syrups</option>
          <option value="Injection">Injections</option>
        </select>

        <select
          value={availabilityFilter}
          onChange={(e) => setAvailabilityFilter(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="All">All</option>
          <option value="Available">Available</option>
          <option value="OutOfStock">Out of Stock</option>
        </select>
      </div>

      {/* Medicine List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredMedicines.map((med) => (
          <div
            key={med.id}
            className="border rounded p-4 shadow hover:shadow-lg transition"
          >
            <h2 className="font-semibold text-lg">{med.name}</h2>
            <p>Category: {med.category}</p>
            <p className={med.available ? "text-green-600" : "text-red-600"}>
              {med.available ? "Available" : "Out of Stock"}
            </p>
          </div>
        ))}

        {filteredMedicines.length === 0 && <p>No medicines found.</p>}
      </div>
    </div>
  );
};

export default MedicineListing;
