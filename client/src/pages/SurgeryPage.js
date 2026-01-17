import React, { useState } from 'react';
import axios from 'axios';
import { FaSpinner, FaCheckCircle, FaExclamationCircle, FaUpload } from 'react-icons/fa';
import styles from './SurgeryPage.module.css';

function SurgeryPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    doctor: '',
    date: '',
    surgeryType: '',
    prescription: null,
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ success: false, message: '' });
  const [selectedFile, setSelectedFile] = useState(null);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.phone) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'Phone number must be 10 digits';
    }
    
    if (!formData.doctor.trim()) newErrors.doctor = 'Doctor\'s name is required';
    if (!formData.date) newErrors.date = 'Please select a date';
    if (!selectedFile) newErrors.prescription = 'Please upload a prescription';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const validTypes = ['application/pdf', 'image/jpeg', 'image/png'];
      const maxSize = 5 * 1024 * 1024; // 5MB
      
      if (!validTypes.includes(file.type)) {
        setErrors({
          ...errors,
          prescription: 'Please upload a valid file type (PDF, JPG, or PNG)'
        });
        return;
      }
      
      if (file.size > maxSize) {
        setErrors({
          ...errors,
          prescription: 'File size should be less than 5MB'
        });
        return;
      }
      
      setSelectedFile(file);
      setFormData({ ...formData, prescription: file });
      setErrors({ ...errors, prescription: null });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    setSubmitStatus({ success: false, message: '' });
    
    const submissionData = new FormData();
    Object.keys(formData).forEach(key => {
      if (formData[key] !== null) {
        submissionData.append(key, formData[key]);
      }
    });

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL || 'http://localhost:5000'}/api/surgery/book`,
        submissionData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          },
        }
      );
      
      setSubmitStatus({
        success: true,
        message: 'Surgery appointment booked successfully! We will contact you soon.'
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        doctor: '',
        date: '',
        surgeryType: '',
        prescription: null,
      });
      setSelectedFile(null);
      document.getElementById('prescription-upload').value = '';
      
    } catch (error) {
      console.error('Booking failed:', error);
      const errorMessage = error.response?.data?.error || 'Failed to book appointment. Please try again.';
      setSubmitStatus({
        success: false,
        message: errorMessage
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.surgeryContainer}>
      <h1>Book a Surgery</h1>
      
      {submitStatus.message && (
        <div className={`${styles.alert} ${submitStatus.success ? styles.success : styles.error}`}>
          {submitStatus.success ? (
            <FaCheckCircle className={styles.icon} />
          ) : (
            <FaExclamationCircle className={styles.icon} />
          )}
          <span>{submitStatus.message}</span>
        </div>
      )}
      
      <form className={styles.surgeryForm} onSubmit={handleSubmit} noValidate>
        <div className={styles.formGroup}>
          <input
            type="text"
            name="name"
            placeholder="Patient Name"
            value={formData.name}
            onChange={handleChange}
            className={errors.name ? styles.errorInput : ''}
          />
          {errors.name && <span className={styles.errorText}>{errors.name}</span>}
        </div>
        
        <div className={styles.formGroup}>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? styles.errorInput : ''}
          />
          {errors.email && <span className={styles.errorText}>{errors.email}</span>}
        </div>
        
        <div className={styles.formGroup}>
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number (10 digits)"
            value={formData.phone}
            onChange={handleChange}
            className={errors.phone ? styles.errorInput : ''}
          />
          {errors.phone && <span className={styles.errorText}>{errors.phone}</span>}
        </div>
        
        <div className={styles.formGroup}>
          <input
            type="text"
            name="doctor"
            placeholder="Doctor's Name"
            value={formData.doctor}
            onChange={handleChange}
            className={errors.doctor ? styles.errorInput : ''}
          />
          {errors.doctor && <span className={styles.errorText}>{errors.doctor}</span>}
        </div>
        
        <div className={styles.formGroup}>
          <input
            type="text"
            name="surgeryType"
            placeholder="Surgery Type (e.g., Appendectomy, Knee Replacement)"
            value={formData.surgeryType}
            onChange={handleChange}
          />
        </div>
        
        <div className={styles.formGroup}>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            min={new Date().toISOString().split('T')[0]}
            className={errors.date ? styles.errorInput : ''}
          />
          {errors.date && <span className={styles.errorText}>{errors.date}</span>}
        </div>
        
        <div className={`${styles.fileUpload} ${errors.prescription ? styles.errorUpload : ''}`}>
          <label htmlFor="prescription-upload" className={styles.uploadLabel}>
            <FaUpload className={styles.uploadIcon} />
            {selectedFile ? selectedFile.name : 'Upload Prescription (PDF, JPG, PNG, max 5MB)'}
          </label>
          <input
            id="prescription-upload"
            type="file"
            name="prescription"
            onChange={handleFileChange}
            accept=".pdf,.jpg,.jpeg,.png"
            className={styles.fileInput}
          />
          {errors.prescription && (
            <span className={styles.errorText}>{errors.prescription}</span>
          )}
        </div>
        
        <button 
          type="submit" 
          className={styles.submitButton}
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <FaSpinner className={styles.spinner} />
              Processing...
            </>
          ) : (
            'Book Surgery'
          )}
        </button>
      </form>
    </div>
  );
}

export default SurgeryPage;