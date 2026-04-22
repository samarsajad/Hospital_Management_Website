import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './PharmacyPage.module.css';
import { useCart } from '../context/CartContext';

function PharmacyPage() {
  const [medicines, setMedicines] = useState([]);
  const { addToCart } = useCart();
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/api/admin/medicines`)
      .then((res) => setMedicines(res.data))
      .catch((err) => console.error('Error fetching medicines:', err));
  }, []);

  return (
    <div className={styles.pharmacyContainer}>
      {showSuccess && (
        <div className={styles.successMsg}>Successfully added to cart!</div>
      )}
      <h1 className={styles.pharmacyTitle}>Available Medicines</h1>
      <div className={styles.medicineGrid}>
        {medicines.map((med) => (
          <div className={styles.medicineCard} key={med._id}>
            <img
              src={med.imageUrl}
              alt={med.name}
              className={styles.medicineImage}
            />
            <div className={styles.medicineDetails}>
              <h2>{med.name}</h2>
              <p><strong>Brand:</strong> {med.brand}</p>
              <p><strong>Composition:</strong> {med.composition}</p>
              <p><strong>Price:</strong> ₹{med.price}</p>
              <button
                className={styles.orderButton}
                onClick={() => {
                  console.log("Adding to cart:", med);
                  addToCart(med);
                  setShowSuccess(true);
                  setTimeout(() => setShowSuccess(false), 1500);
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PharmacyPage;