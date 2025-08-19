import { useState, useEffect } from 'react';
import './EmergencyPanel.css';

export default function EmergencyPanel({ isOpen, onClose }) {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (isOpen) {
      fetchEmergencyContacts();
    }
  }, [isOpen]);

  const fetchEmergencyContacts = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/emergency-contacts');
      if (!response.ok) {
        throw new Error('Failed to fetch emergency contacts');
      }
      const data = await response.json();
      setContacts(data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  const handleCall = (number) => {
    window.location.href = `tel:${number}`;
  };

  if (!isOpen) return null;

  return (
    <div className="emergency-overlay" onClick={onClose}>
      <div className="emergency-panel" onClick={(e) => e.stopPropagation()}>
        <div className="emergency-header">
          <h2>🚨 Emergency Contacts</h2>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>
        
        <div className="emergency-content">
          {loading && <div className="loading">Loading emergency contacts...</div>}
          {error && <div className="error">Error: {error}</div>}
          
          {!loading && !error && (
            <div className="contacts-list">
              {contacts.map((contact) => (
                <div key={contact.id} className="contact-item">
                  <span className="contact-icon">{contact.icon}</span>
                  <div className="contact-info">
                    <span className="contact-name">{contact.name}</span>
                  <a 
                    href={`tel:${contact.number.replace(/[^0-9+]/g, '')}`} 
                    className="contact-number"
                    onClick={() => handleCall(contact.number.replace(/[^0-9+]/g, ''))}
                  >
                    {contact.number}
                  </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
