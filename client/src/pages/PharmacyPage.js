import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './PharmacyPage.module.css'; // Import the module correctly

function PharmacyPage() {
  const [medicines, setMedicines] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/api/medicines`)
      .then((res) => setMedicines(res.data))
      .catch((err) => console.error('Error fetching medicines:', err));
  }, []);

  return (
    <div className={styles.pharmacyContainer}>
      <h1 className={styles.pharmacyTitle}>Available Medicines</h1>
      <div className={styles.medicineGrid}>
        {medicines.map((med) => (
          <div className={styles.medicineCard} key={med._id}>
            <img
             src={med.image}
             alt={med.name}
            className={styles.medicineImage}
            />
            <div className={styles.medicineDetails}>
              <h2>{med.name}</h2>
              <p><strong>Brand:</strong> {med.brand}</p>
              <p><strong>Manufacturer:</strong> {med.manufacturer}</p>
              <p><strong>Composition:</strong> {med.composition}</p>
              <p><strong>Type:</strong> {med.type}</p>
              <p><strong>Pack Size:</strong> {med.packSize}</p>
              <p><strong>Price:</strong> ₹{med.price}</p>
              <button className={styles.orderButton}>Order Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PharmacyPage;